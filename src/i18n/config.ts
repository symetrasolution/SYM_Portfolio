import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { enBundle } from './locales/en';
import { arBundle } from './locales/ar';

/**
 * i18next backbone: language state, persistence + fallback.
 * Content lives in typed bundles (en/ar) so EN↔AR parity is enforced by
 * TypeScript; resources mirror the active bundle for t() compatibility.
 */
void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enBundle },
      ar: { translation: arBundle },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    // Persisted choice first, then browser language.
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'symetra-lang',
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

export default i18n;
