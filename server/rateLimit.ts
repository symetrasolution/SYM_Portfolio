import type { Request, Response, NextFunction } from 'express';

interface LimiterOptions {
  max: number;
  windowMs: number;
}

/**
 * Minimal in-memory sliding-window limiter. One instance per route group
 * (inquiries vs. assistant) so each gets its own budget.
 */
export function createRateLimiter(options: LimiterOptions) {
  const hits = new Map<string, number[]>();
  const { max, windowMs } = options;

  // Prevent unbounded growth in long-running processes.
  const sweep = () => {
    const cutoff = Date.now() - windowMs;
    for (const [key, stamps] of hits) {
      const fresh = stamps.filter((t) => t > cutoff);
      if (fresh.length === 0) hits.delete(key);
      else hits.set(key, fresh);
    }
  };
  // Periodic sweep keeps the map bounded; unref so it never holds the process open.
  setInterval(sweep, windowMs).unref?.();

  return function rateLimit(req: Request, res: Response, next: NextFunction) {
    const key = req.ip ?? 'unknown';
    const now = Date.now();
    const stamps = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
    if (stamps.length >= max) {
      res.status(429).json({ ok: false, error: 'rate_limited' });
      return;
    }
    stamps.push(now);
    hits.set(key, stamps);
    next();
  };
}

export function limiterFromEnv(prefix: string, defaults: LimiterOptions) {
  const max = Number(process.env[`${prefix}_MAX`] ?? defaults.max);
  const windowMs = Number(
    process.env[`${prefix}_WINDOW_MS`] ?? defaults.windowMs,
  );
  return createRateLimiter({
    max: Number.isFinite(max) && max > 0 ? max : defaults.max,
    windowMs:
      Number.isFinite(windowMs) && windowMs > 0 ? windowMs : defaults.windowMs,
  });
}
