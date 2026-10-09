// One-off image optimizer: JPG -> responsive WebP variants (originals kept
// as fallback). Run with `node scripts/optimize-images.mjs` after adding new
// JPGs to src/assets/images/. Generated files are committed.
import { readdir, stat } from 'node:fs/promises';
import { join, dirname, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets', 'images');
const WIDTHS = [640, 1280];

const files = (await readdir(dir)).filter((f) =>
  ['.jpg', '.jpeg'].includes(extname(f).toLowerCase()),
);

if (files.length === 0) {
  console.log('[images] no JPGs found — nothing to do.');
  process.exit(0);
}

for (const file of files) {
  const base = basename(file, extname(file));
  const input = join(dir, file);
  for (const w of WIDTHS) {
    const out = join(dir, `${base}-${w}.webp`);
    await sharp(input)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(out);
    const size = ((await stat(out)).size / 1024).toFixed(0);
    console.log(`[images] ${base}-${w}.webp (${size} KB)`);
  }
  const origKb = ((await stat(input)).size / 1024).toFixed(0);
  console.log(`[images] kept fallback ${file} (${origKb} KB)`);
}
