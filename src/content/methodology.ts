import type { MethodologyStep, PartnershipInfo } from '../types';

/** Delivery steps — the agreed five-stage lifecycle. */
export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    number: '01',
    title: 'Site visit',
    description:
      'We walk your home or site with you and note how you live, room by room.',
  },
  {
    number: '02',
    title: 'System design',
    description:
      'You receive a clear plan: which devices go where, and what each scene does.',
  },
  {
    number: '03',
    title: 'Installation',
    description:
      'Devices, wiring and the home hub are installed with minimal disruption.',
  },
  {
    number: '04',
    title: 'Programming',
    description:
      'Scenes and automations are set up around your routine and tuned with you.',
  },
  {
    number: '05',
    title: 'Testing and handover',
    description:
      'Everything is tested end to end, then handed over with a walkthrough and documentation.',
  },
];

/**
 * Systems partnership: installation and programming are delivered in
 * partnership with Conecta. Never describe Conecta as helping us.
 * Logo files: src/assets/logos/symetra.svg + conecta.svg (see CONTENT_TODO).
 */
export const PARTNERSHIP: PartnershipInfo = {
  eyebrow: 'Systems Partnership',
  headline:
    'Symetra Solution × Conecta, installation & programming in partnership.',
  allianceName: 'Symetra Solution × Conecta',
  cities: ['Cairo', 'Alexandria', 'Riyadh', 'Jeddah'],
};
