export interface InquirySuccess {
  ok: true;
  /** Server-issued reference. Absent only for honeypot-filtered requests. */
  id?: string;
}

export class SubmissionError extends Error {
  code: 'validation' | 'rate_limited' | 'network' | 'server';
  constructor(code: SubmissionError['code']) {
    super(code);
    this.code = code;
  }
}

interface ApiResponse {
  ok?: unknown;
  id?: unknown;
  error?: unknown;
}

/** POST an inquiry payload ({kind:'booking'|'quick', ...}) to the API. */
export async function submitInquiry(payload: unknown): Promise<InquirySuccess> {
  let res: Response;
  try {
    res = await fetch('/api/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new SubmissionError('network');
  }
  let data: ApiResponse | null = null;
  try {
    data = (await res.json()) as ApiResponse;
  } catch {
    data = null;
  }
  if (!res.ok || data?.ok !== true) {
    if (res.status === 429) throw new SubmissionError('rate_limited');
    if (res.status === 400) throw new SubmissionError('validation');
    throw new SubmissionError('server');
  }
  return { ok: true, id: typeof data?.id === 'string' ? data.id : undefined };
}
