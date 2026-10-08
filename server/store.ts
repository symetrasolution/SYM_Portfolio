import { promises as fs } from 'node:fs';
import path from 'node:path';
import type { InquiryPayload } from './validate';

export type StoredInquiry = InquiryPayload & {
  id: string;
  ip: string;
  createdAt: string;
};

/** What callers supply: a validated payload plus the client IP. */
export type NewInquiry = InquiryPayload & { ip: string };

export interface InquiryStore {
  save(entry: NewInquiry): Promise<StoredInquiry>;
}

/**
 * JSON-file store behind an interface so it can later be swapped for
 * SQLite without touching routes. Writes are serialized through an
 * in-memory queue and applied atomically (temp file + rename), so
 * simultaneous inquiries cannot corrupt the file.
 */
export class JsonFileStore implements InquiryStore {
  private queue: Promise<unknown> = Promise.resolve();
  private readonly filePath: string;

  constructor(dataDir?: string) {
    const dir = dataDir ?? process.env.DATA_DIR ?? path.join(process.cwd(), 'data');
    this.filePath = path.join(dir, 'inquiries.json');
  }

  save(entry: NewInquiry): Promise<StoredInquiry> {
    const task = this.queue.then(() => this.append(entry));
    // Keep the chain alive even if one save fails.
    this.queue = task.catch(() => undefined);
    return task;
  }

  private async append(entry: NewInquiry): Promise<StoredInquiry> {
    const stored: StoredInquiry = {
      ...entry,
      id: makeRefId(),
      createdAt: new Date().toISOString(),
    };
    await fs.mkdir(path.dirname(this.filePath), { recursive: true });
    let list: StoredInquiry[] = [];
    try {
      const raw = await fs.readFile(this.filePath, 'utf8');
      const parsed: unknown = JSON.parse(raw);
      if (Array.isArray(parsed)) list = parsed as StoredInquiry[];
    } catch (err) {
      // Missing file starts empty; anything else is re-thrown below only
      // if it is not a "file not found" error.
      if ((err as NodeJS.ErrnoException)?.code !== 'ENOENT') throw err;
    }
    list.push(stored);
    const tmpPath = `${this.filePath}.${process.pid}.tmp`;
    await fs.writeFile(tmpPath, JSON.stringify(list, null, 2), 'utf8');
    await fs.rename(tmpPath, this.filePath);
    return stored;
  }
}

function makeRefId(): string {
  const time = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `INQ-${time}-${rand}`;
}
