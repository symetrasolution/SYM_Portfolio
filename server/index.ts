import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { JsonFileStore } from './store';
import { inquiriesRouter } from './routes/inquiries';
import { limiterFromEnv } from './rateLimit';

const app = express();

// Trust proxy hops for correct req.ip behind Nginx/Caddy (see DEPLOY later).
// Set TRUST_PROXY=1 (or a hop count/subnet) when behind a reverse proxy.
if (process.env.TRUST_PROXY !== undefined) {
  const raw = process.env.TRUST_PROXY;
  app.set('trust proxy', raw === 'true' ? true : raw === 'false' ? false : raw);
}

app.use(helmet());

const allowedOrigins = (process.env.ALLOWED_ORIGIN ?? 'http://localhost:3000')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
app.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
  }),
);

app.use(express.json({ limit: '10kb' }));

const store = new JsonFileStore();

app.use(
  '/api/inquiries',
  limiterFromEnv('INQUIRY_RATE_LIMIT', { max: 10, windowMs: 60_000 }),
  inquiriesRouter(store),
);

const port = Number(process.env.PORT ?? 4000);
app.listen(port, () => {
  console.log(`[api] listening on :${port}`);
});
