import type { Bundle } from '../i18n/useContent';

function setMeta(selector: string, content: string) {
  const el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (el) el.content = content;
}

/** Sync <title> + description/OG tags with the active locale bundle. */
export function applySeo(bundle: Bundle, lang: string) {
  const rtl = lang.toLowerCase().startsWith('ar');
  document.title = bundle.site.metaTitle;
  setMeta('meta[name="description"]', bundle.site.metaDescription);
  setMeta('meta[property="og:title"]', bundle.site.metaTitle);
  setMeta('meta[property="og:description"]', bundle.site.metaDescription);
  setMeta('meta[property="og:locale"]', rtl ? 'ar' : 'en_US');
}
