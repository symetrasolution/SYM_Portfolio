import type { ContactInfo } from '../types';

/**
 * Contact / booking-option data — extracted verbatim from
 * InquirySection.tsx, BookingModal.tsx, Navbar.tsx and Footer.tsx (Phase 1).
 * Phone numbers, emails and studio addresses are UNVERIFIED placeholders;
 * see CONTENT_TODO.md. Phase 2 will keep them behind placeholders only.
 */
export const CONTACT_INFO: ContactInfo = {
  engineerHotlineHref: 'tel:+966118204000',
  engineerHotlineLabel: 'Riyadh & Cairo Desk',
  engineerHotlineDisplay: '+966 11 820 4000',
  emails: [
    { label: 'concierge@symetra.com', href: 'mailto:concierge@symetra.com' },
    { label: 'support.ksa@symetra.com', href: 'mailto:support.ksa@symetra.com' },
  ],
  studios: [
    {
      city: 'Cairo Studio',
      label: 'Cairo Studio',
      phoneDisplay: '+20 100 000 0000',
      phoneHref: 'tel:+201000000000',
    },
    {
      city: 'Riyadh Studio',
      label: 'Riyadh Studio',
      phoneDisplay: '+966 50 000 0000',
      phoneHref: 'tel:+966500000000',
    },
  ],
  projectCities: [
    'Riyadh, KSA',
    'Jeddah, KSA',
    'Cairo, Egypt',
    'North Coast (Sahel), Egypt',
    'Dubai / Abu Dhabi, UAE',
  ],
  countryCodes: [
    { code: '+966', flag: '🇸🇦', label: 'Saudi Arabia' },
    { code: '+20', flag: '🇪🇬', label: 'Egypt' },
    { code: '+971', flag: '🇦🇪', label: 'UAE' },
    { code: '+965', flag: '🇰🇼', label: 'Kuwait' },
  ],
  demoWindows: [
    { id: 'morning', label: 'Morning', hours: '10:00 - 13:00' },
    { id: 'afternoon', label: 'Afternoon', hours: '14:00 - 18:00' },
    { id: 'evening', label: 'Evening', hours: '19:00 - 21:00' },
  ],
};

/** City options used by the full booking modal (verbatim, Phase 1). */
export const BOOKING_CITIES: string[] = [
  'Riyadh (Diplomatic Quarter / Al Malqa)',
  'Riyadh (Diriyah / Hittin / Sedra)',
  'Cairo (New Cairo / 5th Settlement)',
  'Cairo (Palm Hills / Sheikh Zayed)',
  'North Coast (Sahel / Hacienda / Marassi)',
  'Jeddah (Al Shati / Obhur Al Shamaliyah)',
];

export const BOOKING_DEFAULT_CITY = BOOKING_CITIES[0];

export const REGIONAL_STUDIOS: { city: string; district: string }[] = [
  { city: 'Riyadh', district: 'Al Malqa District, KSA' },
  { city: 'Jeddah', district: 'Al Shati District, KSA' },
  { city: 'Cairo', district: 'Fifth Settlement, New Cairo, EG' },
];
