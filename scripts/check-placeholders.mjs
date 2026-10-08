// Build-time placeholder warning (never fails the build).
// Counts unchecked `- [ ]` items in CONTENT_TODO.md and prints a warning.
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const todoPath = join(root, 'CONTENT_TODO.md');

try {
  if (!existsSync(todoPath)) {
    console.warn('[content] CONTENT_TODO.md not found — skipping placeholder check.');
    process.exit(0);
  }
  const text = readFileSync(todoPath, 'utf8');
  const remaining = (text.match(/^- \[ \]/gm) || []).length;
  if (remaining > 0) {
    console.warn(
      `[content] WARNING: ${remaining} placeholder(s) remain — see CONTENT_TODO.md to supply real data.`,
    );
  } else {
    console.log('[content] All placeholders resolved. Nice.');
  }
} catch (err) {
  console.warn('[content] Placeholder check skipped:', err?.message ?? err);
}
process.exit(0);
