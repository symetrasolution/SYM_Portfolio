import type { NavLink, SiteMeta } from '../types';
import heroVillaImg from '../assets/images/hero_architectural_villa_1791488866425.jpg';

export const HERO_IMAGE = heroVillaImg;

export const SITE_META: SiteMeta = {
  name: 'Symetra Solution',
  tagline: 'Architectural Calm • Local Compute',
  description:
    'Intelligent living engineered for complete privacy and local reliability in Egypt & Saudi Arabia.',
};

export const NAV_LINKS: NavLink[] = [
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'The Architecture', href: '#architecture' },
  { name: 'Living Spaces', href: '#living-spaces' },
  { name: 'Philosophy', href: '#philosophy' },
  { name: 'Turnkey', href: '#turnkey' },
  { name: 'Residences', href: '#residences' },
];
