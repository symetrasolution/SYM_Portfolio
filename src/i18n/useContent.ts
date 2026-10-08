import { useTranslation } from 'react-i18next';
import type { Bundle } from './locales/en';
import { enBundle } from './locales/en';
import { arBundle } from './locales/ar';

export type { Bundle };

/** Returns the active locale's typed content bundle (re-renders on switch). */
export function useContent(): Bundle {
  const { i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage ?? i18n.language ?? 'en').toLowerCase();
  return lang.startsWith('ar') ? (arBundle as Bundle) : enBundle;
}

/** True when the active locale is Arabic (RTL). */
export function useIsRTL(): boolean {
  const { i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage ?? i18n.language ?? 'en').toLowerCase();
  return lang.startsWith('ar');
}
