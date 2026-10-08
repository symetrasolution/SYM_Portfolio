import type { MethodologyStep, PartnershipInfo } from '../types';

/** Delivery steps — extracted verbatim from TurnkeyMethodology.tsx (Phase 1). */
export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    number: '01',
    title: 'Site Visit',
    description:
      'Architectural review and personalized homeowner lifestyle consultation on-site.',
  },
  {
    number: '02',
    title: 'System Design',
    description:
      'Low-voltage schematics, load calculations, and comprehensive conduit blueprints.',
  },
  {
    number: '03',
    title: 'Installation',
    description:
      'Structured cabling, DIN-rail automation cabinet assembly, and sensor fitting.',
  },
  {
    number: '04',
    title: 'Programming',
    description:
      'Custom automation logic, fine-tuned scene dimming, and personalized UI tailoring.',
  },
  {
    number: '05',
    title: 'Handover',
    description:
      'Stress testing, concierge VIP walkthrough, schematic handover, and 24/7 priority desk.',
  },
];

/** Partnership band — extracted verbatim from TurnkeyMethodology.tsx (Phase 1). */
export const PARTNERSHIP: PartnershipInfo = {
  eyebrow: 'Certified Engineering Alliance',
  headline: 'In partnership with Conecta, installation and programming.',
  allianceName: 'Symetra Solution × Conecta Engineering',
  cities: ['Cairo', 'Alexandria', 'Riyadh', 'Jeddah'],
};
