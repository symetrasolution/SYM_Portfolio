# AGENT_MEMORY — SYM_Portfolio ("Symetra Solution")

> This file is the agent's long-term memory for this project. Read it at the
> start of every session. Keep it updated in every phase commit (phase log,
> TODO counts, any new locked choice). Never store secrets or personal data here.

## 1. Project identity

- **What:** Marketing + booking site for **Symetra Solution**, a turnkey smart
  home company for **Egypt and Saudi Arabia**.
- **Stack:** React 19, Vite 8, TypeScript, Tailwind CSS v4, motion/react,
  lucide-react, react-i18next + i18next + browser detector, Express 4,
  zod, helmet, cors, nodemailer, tsx (dev server runner).
- **Repo state:** Vite SPA (`src/`) + standalone API (`server/`). No test
  runner yet (Vitest lands in Phase 6).

## 2. Positioning (use everywhere, verbatim intent)

- Turnkey smart homes **built on Home Assistant**, running **locally inside
  the home — works without internet**.
- Remote access wording: **"secure remote access (VPN)" only**. Never mention
  Smart Life or any cloud app on the site.
- "Built on Home Assistant" is fine. No HA logo, no implied official
  partnership. Footer carries: "Home Assistant is an open source project;
  Symetra Solution is an independent company."
- Conecta line (exact): **"Symetra Solution × Conecta, installation &
  programming in partnership."** Never describe Conecta as helping us.
- Devices: lighting, curtains/blinds, sensors, cameras, locks/access,
  switches/sockets — over **Zigbee, Tuya (local key) and similar protocols**.
  Add-ons: Zigbee2MQTT, Node-RED, Local Tuya.

## 3. Truth rules (enforce in every change)

- No invented numbers, metrics, latencies, circuit counts, areas, dates,
  phone numbers, emails, or addresses. Unverified values → neutral
  placeholder + entry in `CONTENT_TODO.md` (**34 open items** as of Phase 4).
- KNX, DALI-2 and air conditioning appear **only as "Roadmap / Coming soon"**.
- The three residences are mock: labelled **"In progress"**, no specs, easy
  to replace with real ones.
- `npm run build` prints a **warning (not a failure)** with the remaining
  placeholder count (`scripts/check-placeholders.mjs`).
- Vitest (Phase 6) must assert: no KNX/DALI-2 entry has status `current`,
  and every EN bundle key has an AR key.

## 4. Locked choices

- Inquiry storage: **JSON file** (`data/inquiries.json`, gitignored) — atomic
  temp-file + rename, serialized through an in-memory queue, behind the
  `InquiryStore` interface so SQLite can swap in later without touching routes.
- i18n: **react-i18next backbone** with **typed TS bundles**
  (`src/i18n/locales/en.ts`, `ar.ts`; `arBundle: Bundle` enforces EN↔AR
  parity at compile time). Non-linguistic values (hrefs, dial codes, flags)
  live once in `src/i18n/shared.ts`. Components read via `useContent()`.
  Internal form/room ids stay English; displayed city names are localized.
- Notifications: **Nodemailer SMTP as non-blocking primary delivery** — if
  SMTP fails or is unconfigured, the inquiry is still saved, the user still
  sees success, and the failure is logged. WhatsApp stays a **log-only stub**.
- Tests: **Vitest** (Phase 6) for content loading + form validation.
- **Design, layout and animations are untouched** — only content, data and
  behavior change.

## 5. Architecture map

- `src/i18n/` — `config.ts` (detector → localStorage `symetra-lang`,
  `fallbackLng: 'en'`), `shared.ts`, `useContent.ts`, `LanguageToggle.tsx`,
  `locales/en.ts`, `locales/ar.ts`.
- `src/components/` — 15 sections/modals incl. `HowItWorks.tsx` (plain-language
  3-step + technical appendix) and `ChatWidget` (Phase 5, not built).
- `src/lib/api.ts` — `submitInquiry()` + `SubmissionError` codes.
- `server/` — `index.ts` (helmet, strict CORS, trust-proxy + 10kb body-limit
  config), `validate.ts` (zod `booking`/`quick` union + honeypot + consent),
  `store.ts`, `notify.ts`, `rateLimit.ts` (per-route factory),
  `routes/inquiries.ts`.
- Runtime: `npm run dev:server` (API :4000) + `npm run dev` (site :3000,
  `/api` proxied via `vite.config.ts`). Secrets server-side only.
- Key env (`./.env.example` documents all): `PORT`, `ALLOWED_ORIGIN`,
  `TRUST_PROXY`, `DATA_DIR`, `INQUIRY_RATE_LIMIT_MAX/_WINDOW_MS`, `SMTP_*`,
  `INQUIRY_TO/FROM`, `WHATSAPP_WEBHOOK_URL` (stub). Phase 5 adds
  `ASSISTANT_ENABLED` + `GEMINI_API_KEY`.

## 6. Phase log

- **Phase 1** `269b3a7` — typed content layer; components read from content
  only; CONTENT_TODO.md + build warning created. (Also: `esbuild` → ^0.28.0
  to fix a pre-existing install breakage with Vite 8; `package-lock.json` committed.)
- **Phase 2** `5aefc1f` — Home Assistant local-first rewrite; qualitative
  rooms/scenes; Zigbee/Tuya current, KNX/DALI-2/AC roadmap badges; mock
  projects "In progress"; qualitative specs modal; VPN wording; Conecta band
  with logo slots; HowItWorks + appendix.
- **Phase 3** `f46041f` — full EN/AR (natural, non-literal Arabic), Cairo font,
  RTL hardening (logical utilities, flipped arrows, LTR phones/hours,
  letter-spacing neutralized for Arabic script). JS chunk ~547 kB —
  code-splitting deferred to Phase 6.
- **Phase 4** `f2c9120` — booking backend as specified above; live curl-tested
  (201+id, 400 details, honeypot silent success, SMTP-missing graceful).
  Fake `SYM-XXXXXX` codes removed; ref ids (`INQ-…`) come from the server only.
- **Phase 5 PARKED** — Gemini assistant (server-side `@google/genai`, key in
  `.env`, `POST /api/assistant` answering only from content files, chat
  widget, disabled by default). Awaiting owner discussion.
- **Phase 6 TODO** — images (WebP/sizes/lazy), `prefers-reduced-motion`,
  a11y pass, SEO/OG per language, Vitest suite, README.
- **Phase 7 TODO** — single Node process (`dist/` + `/api`, SPA fallback),
  `GET /api/health`, `npm start`/`build:all`, Dockerfile + `.dockerignore`,
  DEPLOY.md (env, `data/` volume + ephemeral-disk warning, Nginx/Caddy HTTPS).

## 7. Workflow contract

- Execute **one phase at a time**; after each: `npm run lint` + `npm run build`,
  then **one git commit per phase**.
- After each phase: STOP, summarize (files changed, TODO count, decisions),
  wait for the owner's **"go"** before the next phase.
- Update this file in every phase commit. Never commit secrets or `data/`.

## 8. Resume checklist

1. Read this file + `CONTENT_TODO.md` + `git log --oneline -8`.
2. `npm run dev:server` and `npm run dev`; test API:
   `curl -X POST localhost:4000/api/inquiries -H 'Content-Type: application/json' -d '{"kind":"quick","fullName":"T","phone":"+201001234567","city":"Cairo, Egypt","consent":true}'`.
3. Continue with: Phase 5 discussion, or `go Phase 6`, or `go Phase 7`.
