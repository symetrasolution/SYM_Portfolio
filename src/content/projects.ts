import type { ResidenceProject } from '../types';
import cairoVillaImg from '../assets/images/cairo_luxury_villa_1791488882402.jpg';
import riyadhPenthouseImg from '../assets/images/riyadh_dq_penthouse_1791488892687.jpg';
import sahelResidenceImg from '../assets/images/sahel_coastal_residence_1791488904285.jpg';

/**
 * Mock residence portfolio — moved verbatim from src/data/mockData.ts (Phase 1).
 * Phase 2 will label these "In progress", drop unverified specs, and make
 * entries trivially replaceable with real projects.
 */
export const RESIDENCE_PROJECTS: ResidenceProject[] = [
  {
    id: 'new_cairo',
    title: 'Private Villa, New Cairo',
    location: 'New Cairo, Egypt',
    country: 'Egypt',
    status: 'IN PROGRESS',
    image: cairoVillaImg,
    description:
      'Full residential automation, 64 lighting circuits, motorized facade shading, and local climate integration.',
    specs: {
      circuits: 64,
      protocol: 'KNX + DALI-2 Local Mesh',
      controlPoints: 128,
      completion: 'Q3 2025',
    },
  },
  {
    id: 'riyadh_dq',
    title: 'Penthouse Suite, Riyadh DQ',
    location: 'Diplomatic Quarter, Riyadh',
    country: 'Saudi Arabia',
    status: 'IN PROGRESS',
    image: riyadhPenthouseImg,
    description:
      'Bespoke scene integration, architectural multi-zone sound distribution, and discrete mmWave presence detection.',
    specs: {
      circuits: 48,
      protocol: 'Local Neural Brain + DALI-2',
      controlPoints: 96,
      completion: 'Q4 2025',
    },
  },
  {
    id: 'sahel_coastal',
    title: 'Coastal Residence, Sahel',
    location: 'North Coast (Sahel), Egypt',
    country: 'Egypt',
    status: 'IN PROGRESS',
    image: sahelResidenceImg,
    description:
      'Year-round encrypted remote climate monitoring, storm shutter automation, and intelligent security lockouts.',
    specs: {
      circuits: 82,
      protocol: 'Hybrid KNX / Local Gateway',
      controlPoints: 164,
      completion: 'Summer 2025',
    },
  },
];
