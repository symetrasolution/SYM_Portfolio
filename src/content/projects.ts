import type { ResidenceProject } from '../types';
import cairoVillaImg from '../assets/images/cairo_luxury_villa_1791488882402.jpg';
import riyadhPenthouseImg from '../assets/images/riyadh_dq_penthouse_1791488892687.jpg';
import sahelResidenceImg from '../assets/images/sahel_coastal_residence_1791488904285.jpg';

/**
 * Illustrative portfolio placeholders (TRUTH RULES). All three entries are
 * MOCK: labelled "In progress", no specs, easy to replace with real
 * projects. See CONTENT_TODO.md.
 */
export const RESIDENCE_PROJECTS: ResidenceProject[] = [
  {
    id: 'new_cairo',
    title: 'Private Villa, New Cairo',
    location: 'New Cairo, Egypt',
    country: 'Egypt',
    status: 'In progress',
    image: cairoVillaImg,
    description:
      'Whole-home lighting scenes, motorized shading and presence-based automation across living spaces.',
  },
  {
    id: 'riyadh_dq',
    title: 'Penthouse Suite, Riyadh DQ',
    location: 'Diplomatic Quarter, Riyadh',
    country: 'Saudi Arabia',
    status: 'In progress',
    image: riyadhPenthouseImg,
    description:
      'Scene control, multi-room ambience and discreet presence detection for apartment living.',
  },
  {
    id: 'sahel_coastal',
    title: 'Coastal Residence, Sahel',
    location: 'North Coast (Sahel), Egypt',
    country: 'Egypt',
    status: 'In progress',
    image: sahelResidenceImg,
    description:
      'Secure remote check-in, shutter automation and leak protection for a second home.',
  },
];
