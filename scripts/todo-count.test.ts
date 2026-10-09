import { describe, expect, it } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Guards the DONE criteria mechanism: CONTENT_TODO.md must exist, keep its
 * section structure, and every open item must use the countable `- [ ]`
 * format that `npm run build` reports on.
 */
describe('content todo tracking', () => {
  const root = join(dirname(fileURLToPath(import.meta.url)), '..');
  const todoPath = join(root, 'CONTENT_TODO.md');

  it('todo file exists with sections and countable items', () => {
    expect(existsSync(todoPath)).toBe(true);
    const text = readFileSync(todoPath, 'utf8');
    expect(text.match(/^## /gm)?.length ?? 0).toBeGreaterThan(3);
    const open = (text.match(/^- \[ \]/gm) || []).length;
    const malformed = (text.match(/^- \[(?![ x\]])/gm) || []).length;
    expect(malformed).toBe(0);
    console.info(`[content] ${open} placeholder(s) tracked in CONTENT_TODO.md`);
    expect(open).toBeGreaterThanOrEqual(0);
  });
});
