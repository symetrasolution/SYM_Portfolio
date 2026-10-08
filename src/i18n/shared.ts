/**
 * Non-linguistic shared values (phone hrefs, emails, flags, dial codes).
 * Both locales reference these so contact details can never diverge
 * between languages. Real values tracked in CONTENT_TODO.md.
 */
export const HREFS = {
  hotline: 'tel:+966118204000',
  hotlineDisplay: '+966 11 820 4000',
  cairoTel: 'tel:+201000000000',
  cairoDisplay: '+20 100 000 0000',
  riyadhTel: 'tel:+966500000000',
  riyadhDisplay: '+966 50 000 0000',
  emailConcierge: 'mailto:concierge@symetra.com',
  emailConciergeLabel: 'concierge@symetra.com',
  emailKsa: 'mailto:support.ksa@symetra.com',
  emailKsaLabel: 'support.ksa@symetra.com',
} as const;

export const COUNTRY_CODES = [
  { code: '+966', flag: '🇸🇦' },
  { code: '+20', flag: '🇪🇬' },
  { code: '+971', flag: '🇦🇪' },
  { code: '+965', flag: '🇰🇼' },
] as const;
