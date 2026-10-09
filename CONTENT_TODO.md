# CONTENT_TODO — real data needed from owner

Phase 1 moved all static content into `src/i18n/locales/en.ts` + `ar.ts` (typed bundles, parity enforced by TypeScript).
Every item below is currently a **placeholder or unverified value** shown on
the site. Check the box when real data is supplied and the content file updated.

> Build note: `npm run build` prints how many `- [ ]` items remain (warning only).

## Contact & studios — `src/i18n/locales/{en,ar}.ts` key `contact`

- [ ] Engineer hotline number + display (`engineerHotlineHref/Display`) — currently `+966 11 820 4000`
- [ ] Cairo studio phone (`studios[0]`) — currently `+20 100 000 0000`
- [ ] Riyadh studio phone (`studios[1]`) — currently `+966 50 000 0000`
- [ ] Support emails (`emails`) — currently `concierge@symetra.com`, `support.ksa@symetra.com`
- [ ] Studio street addresses (`REGIONAL_STUDIOS`) — currently district-only labels
- [ ] Confirm `projectCities` + `BOOKING_CITIES` lists (cities/areas served)
- [ ] Confirm `demoWindows` hours (currently 10–13 / 14–18 / 19–21)

## Rooms & scenes — `src/i18n/locales/{en,ar}.ts` key `floor.rooms`

- [ ] Room areas (58 / 42 / 26 / 34 m²) — unverified, Phase 2 removes or confirms
- [ ] Latency figures (`<10ms / <8ms / <6ms`) — unverified, Phase 2 removes
- [ ] Circuit counts (24 / 16 / 18 / 14) — unverified, Phase 2 removes
- [ ] Scene temperatures / dimming % / curtain states — illustrative only, Phase 2 rewrites qualitatively
- [ ] Hardware node brand claims (Somfy, mmWave respiration, VRF, biometric <300ms, CRI 98+) — confirm or drop

## Scenarios — `src/i18n/locales/{en,ar}.ts` key `moments.scenarios`

- [ ] Automation step details (transponder, HVAC setpoints 26/22/27°C, "8 doors", timers) — illustrative, Phase 2 rewrites

## Hardware — `src/i18n/locales/{en,ar}.ts` key `hardware`

- [ ] Confirm current protocol list (target: Zigbee, Tuya local-key + similar) — file still lists KNX/DALI-2 as current
- [ ] Roadmap detail text for KNX / DALI-2 / Air Conditioning (currently one-line stubs)

## Projects — `src/i18n/locales/{en,ar}.ts` key `projects`

- [ ] All three residences are MOCK — replace with real projects or confirm removal
- [ ] Specs per project (circuits 64/48/82, control points, protocol strings, Q3/Q4/Summer 2025) — unverified
- [ ] Project descriptions mentioning circuit counts / shading / monitoring — rewrite without numbers

## Methodology & partnership — `src/i18n/locales/{en,ar}.ts` key `method`

- [ ] Confirm 5 step descriptions (esp. DIN-rail/low-voltage wording vs Home Assistant scope)
- [ ] Conecta partnership wording + logo files (`src/assets/logos/symetra.svg`, `conecta.svg` — Phase 2 adds slots)
- [ ] Confirm city list (Cairo, Alexandria, Riyadh, Jeddah)

## Site — `src/i18n/locales/{en,ar}.ts` key `site/nav`

- [ ] Tagline + meta description (currently "Architectural Calm • Local Compute" + privacy/local-reliability line)
- [ ] Nav link labels (final IA incl. new "How it works" section — now live)

## Phase 6 additions (polish follow-ups)

- [ ] Production canonical URL + absolute og:image URL (static HTML has neither by design — add at deploy, see Phase 7)
- [ ] README reviewed by owner (setup steps, contact details)

## Phase 4 additions (backend config — real values needed)

- [ ] SMTP credentials (`SMTP_HOST/PORT/USER/PASS`) + sender (`INQUIRY_FROM`)
- [ ] Inquiry mailbox (`INQUIRY_TO`) — where notification emails land
- [ ] Production `ALLOWED_ORIGIN` (public site URL for strict CORS)
- [ ] WhatsApp provider for `WHATSAPP_WEBHOOK_URL` (currently log-only stub)
- [ ] Consent + privacy-note wording reviewed (EN/AR on both forms)

## Phase 2 additions (new placeholders to confirm)

- [ ] Conecta logo file (`src/assets/logos/conecta.svg`) + Symetra logo file (`src/assets/logos/symetra.svg`)
- [ ] Conecta partnership wording approved by both sides
- [ ] Showroom/experience-center locations (Riyadh DQ, Cairo 5th Settlement mentions in booking flow)
- [ ] "How it works" + technical appendix wording reviewed (Zigbee2MQTT, Node-RED, Local Tuya, backups)
- [ ] Leak-sensor auto-shutoff + camera local-storage claims confirmed as standard offering
- [ ] Home Assistant disclaimer placement approved ("independent company" footer note)
