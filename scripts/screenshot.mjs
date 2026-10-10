// Dev-only screenshot helper for design review (checkpoint 1/2/3).
// Usage: npm run preview -- --port 4173 &  node scripts/screenshot.mjs [baseUrl] [outDir]
import { chromium } from 'playwright-core';
import { mkdir } from 'node:fs/promises';
import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import os from 'node:os';

const base = process.argv[2] ?? 'http://localhost:4173';
const outDir = process.argv[3] ?? '/tmp/symetra-shots';

function findChrome() {
  const root = join(os.homedir(), '.cache', 'ms-playwright');
  const walk = (dir) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isFile() && (e.name === 'chrome' || e.name === 'headless_shell'))
        return p;
      if (e.isDirectory()) {
        const hit = walk(p);
        if (hit) return hit;
      }
    }
    return null;
  };
  const hit = walk(root);
  if (!hit) throw new Error('no cached chromium found under ' + root);
  return hit;
}

await mkdir(outDir, { recursive: true });
const browser = await chromium.launch({ executablePath: findChrome() });

async function shoot(name, width, height, lang, fullPage) {
  const page = await browser.newPage({ viewport: { width, height } });
  if (lang === 'ar') {
    await page.addInitScript(() => {
      try {
        localStorage.setItem('symetra-lang', 'ar');
      } catch {}
    });
  }
  await page.goto(base, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(1500);
  const file = join(outDir, `${name}.png`);
  await page.screenshot({ path: file, fullPage });
  console.log('[shot]', file);
  await page.close();
}

await shoot('desktop-en', 1440, 900, 'en', true);
await shoot('mobile-en', 390, 844, 'en', true);
await shoot('desktop-ar', 1440, 900, 'ar', true);
await shoot('mobile-ar-hero', 390, 844, 'ar', false);
await browser.close();
console.log('[shot] done ->', outDir);
