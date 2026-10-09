# SYM_Portfolio — Symetra Solution

Turnkey smart-home marketing + booking site for Egypt & Saudi Arabia.
React 19 + Vite + TypeScript + Tailwind v4 frontend, Express + zod JSON API.

## Setup

```bash
npm install
npm run dev:server  # API on :4000
npm run dev         # site on :3000 (/api proxied to :4000)
```

| Command | What |
|---|---|
| `npm run lint` | `tsc --noEmit` (client + server + tests) |
| `npm test` | Vitest suite (bundle parity, truth guards, zod validation) |
| `npm run build` | placeholder warning + production build → `dist/` |
| `node scripts/optimize-images.mjs` | regenerate WebP variants for new JPGs in `src/assets/images/` |

## Environment

Copy `.env.example` to `.env`. Every variable is documented there. The important ones:

| Var | Purpose |
|---|---|
| `PORT` / `ALLOWED_ORIGIN` / `TRUST_PROXY` | API listen port, strict CORS origin, reverse-proxy hop trust |
| `DATA_DIR` | where `inquiries.json` is stored (**gitignored**, personal data) |
| `INQUIRY_RATE_LIMIT_MAX/_WINDOW_MS` | per-IP POST budget |
| `SMTP_*`, `INQUIRY_TO/FROM` | notification email (primary delivery; failures only log) |
| `WHATSAPP_WEBHOOK_URL` | stubbed — log-only until a provider is wired |

Secrets never enter the client bundle (`src/` imports no `process.env`).

## API

`POST /api/inquiries` — `Content-Type: application/json`.

```bash
curl -X POST localhost:4000/api/inquiries \
  -H 'Content-Type: application/json' \
  -d '{"kind":"quick","fullName":"Test","phone":"+201001234567","city":"Cairo, Egypt","consent":true}'
# → {"ok":true,"id":"INQ-…"}
```

- `kind: "booking"` needs `role|format|email|countryCode|phone|city|window|fullName|consent`; `kind: "quick"` needs `fullName|phone|city|consent`. Both accept an empty `website` honeypot field (filled → silent `{ok:true}`, nothing stored).
- Errors: `400 {ok:false,error:"validation",details}`, `429 {ok:false,error:"rate_limited"}`, `500 {ok:false,error:"server"}`.

## Editing content

All strings live in `src/i18n/locales/en.ts` + `ar.ts` as typed bundles
(`arBundle: Bundle` — TypeScript enforces EN↔AR parity). Non-linguistic
values (hrefs, dial codes) live once in `src/i18n/shared.ts`. Components read
via `useContent()` — never hardcode copy in JSX.

Unverified values go to `CONTENT_TODO.md` as `- [ ]` items; the build prints
how many remain (warning only).

## Roadmap

- **Phase 5 (parked):** server-side Gemini assistant (`POST /api/assistant`,
  content-grounded, flag-gated, chat widget).
- **Phase 7:** single-process production (`dist/` + `/api`), `/api/health`,
  Dockerfile, DEPLOY.md.
