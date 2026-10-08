import type { RoomZone } from '../types';

/**
 * Room zones — moved verbatim from src/data/mockData.ts (Phase 1).
 * Phase 2 will remove unverified numbers (latency, circuits, areas,
 * temperatures) per TRUTH RULES and track them in CONTENT_TODO.md.
 */
export const ROOM_ZONES: RoomZone[] = [
  {
    id: 'living_room',
    name: 'Living Salon',
    tabLabel: 'LIVING ROOM',
    nodeNumber: 1,
    area: '58m²',
    category: 'Living Quarters',
    title: 'Living Room Automation',
    hardwareNodes: [
      {
        icon: 'lightbulb',
        title: 'Adaptive Recessed Lighting',
        description: 'Circadian rhythm tuning',
      },
      {
        icon: 'blinds',
        title: 'Automated Sheer & Blackout Drapes',
        description: 'Somfy ultra-silent motorized tracks',
      },
      {
        icon: 'radar',
        title: 'Multi-sensor',
        description: 'Presence, Lux, Ambient Temp',
      },
      {
        icon: 'volume-2',
        title: 'High-Fidelity Multi-Room Audio Node',
        description: 'Architectural flush-mount acoustic pairing',
      },
    ],
    activeScene: {
      name: 'Evening Welcome Scene',
      description:
        'At sunset, soft warm accent lights gently fade to 40%, motorized sheer blinds glide closed, and the air temperature adjusts to a comfortable 22°C.',
      temperature: '22°C',
      dimming: '40%',
      curtainState: 'Sheer closed (100%)',
    },
    scenes: [
      {
        id: 'evening',
        name: 'Evening Welcome Scene',
        description:
          'At sunset, soft warm accent lights gently fade to 40%, motorized sheer blinds glide closed, and the air temperature adjusts to a comfortable 22°C.',
        temperature: '22°C',
        dimming: '40%',
        curtainState: 'Sheer closed',
      },
      {
        id: 'daylight',
        name: 'Natural Daylight Circadian',
        description:
          'Full 5000K daylight-balanced illumination tracks the sun. Drapes automatically open to frame desert garden views while reducing HVAC load.',
        temperature: '23°C',
        dimming: '85%',
        curtainState: 'Open (100%)',
      },
      {
        id: 'soiree',
        name: 'Private Soirée & Lounge',
        description:
          'Ambient cove lights glow at 2200K golden amber. Multi-room high-fidelity lossless audio syncs discreetly throughout the salon.',
        temperature: '21°C',
        dimming: '25%',
        curtainState: 'Dual layer drawn',
      },
    ],
    latency: '<10ms (Local)',
    circuits: 24,
  },
  {
    id: 'master_bedroom',
    name: 'Master Suite',
    tabLabel: 'MASTER BEDROOM',
    nodeNumber: 2,
    area: '42m²',
    category: 'Private Sanctuaries',
    title: 'Master Suite Automation',
    hardwareNodes: [
      {
        icon: 'moon',
        title: 'Circadian Bedside Luminaires',
        description: '0.1% micro-dimming warm glow',
      },
      {
        icon: 'blinds',
        title: 'Dual-Layer Motorized Blackout',
        description: 'Zero light-leak architectural pockets',
      },
      {
        icon: 'radar',
        title: 'Sub-Perception mmWave Radar',
        description: 'Sleep respiration & motion tracking',
      },
      {
        icon: 'thermometer',
        title: 'Independent Climate Micro-Zone',
        description: 'Ultra-silent chilled water VRF coil',
      },
    ],
    activeScene: {
      name: 'Deep Sleep Sanctuary',
      description:
        'At 23:00, blackout draperies seal completely, ambient room temperature drops to 20.5°C, and all tactile switches enter zero-LED night mode.',
      temperature: '20.5°C',
      dimming: '0%',
      curtainState: 'Blackout 100%',
    },
    scenes: [
      {
        id: 'sleep',
        name: 'Deep Sleep Sanctuary',
        description:
          'At 23:00, blackout draperies seal completely, ambient room temperature drops to 20.5°C, and all tactile switches enter zero-LED night mode.',
        temperature: '20.5°C',
        dimming: '0%',
        curtainState: 'Blackout 100%',
      },
      {
        id: 'wake',
        name: 'Gentle Dawn Awakening',
        description:
          'Simulates sunrise over 20 minutes with golden cove illumination while motorized sheers whisper open silently.',
        temperature: '22°C',
        dimming: '65%',
        curtainState: 'Sheers open 70%',
      },
    ],
    latency: '<8ms (Local)',
    circuits: 16,
  },
  {
    id: 'kitchen',
    name: 'Gourmet Kitchen',
    tabLabel: 'GOURMET KITCHEN',
    nodeNumber: 3,
    area: '26m²',
    category: 'Culinary Workshop',
    title: 'Gourmet Kitchen Automation',
    hardwareNodes: [
      {
        icon: 'sparkles',
        title: 'High-CRI 98+ Task Lighting',
        description: 'Shadow-free marble island illumination',
      },
      {
        icon: 'wind',
        title: 'Air Quality & Extract Integration',
        description: 'VOC, PM2.5 & moisture sensor triggers',
      },
      {
        icon: 'shield-alert',
        title: 'Motorized Gas & Water Auto-Shutoff',
        description: 'Sub-second leak isolation valves',
      },
      {
        icon: 'sliders',
        title: 'Tactile Brass Push Keypad',
        description: 'Direct low-voltage DIN-rail trigger',
      },
    ],
    activeScene: {
      name: 'Culinary Master Scene',
      description:
        'Prep counters illuminate at 4000K crisp white with 100% lumen delivery, extractor ventilation adjusts to acoustic silent mode.',
      temperature: '21.5°C',
      dimming: '95%',
      curtainState: 'Louver blinds 45°',
    },
    scenes: [
      {
        id: 'culinary',
        name: 'Culinary Master Scene',
        description:
          'Prep counters illuminate at 4000K crisp white with 100% lumen delivery, extractor ventilation adjusts to acoustic silent mode.',
        temperature: '21.5°C',
        dimming: '95%',
        curtainState: 'Louver blinds 45°',
      },
      {
        id: 'cocktail',
        name: 'Evening Island Bar Scene',
        description:
          'Island under-counter LED ribbons wash stone cabinetry in warm amber while ambient perimeter lights dim to 20%.',
        temperature: '22°C',
        dimming: '20%',
        curtainState: 'Louver blinds closed',
      },
    ],
    latency: '<10ms (Local)',
    circuits: 18,
  },
  {
    id: 'foyer',
    name: 'Grand Foyer & Gallery',
    tabLabel: 'GRAND ENTRANCE',
    nodeNumber: 4,
    area: '34m²',
    category: 'Reception & Gallery',
    title: 'Grand Entrance Automation',
    hardwareNodes: [
      {
        icon: 'key',
        title: 'Biometric Pivot Door Access',
        description: 'Sub-300ms encrypted biometric scan',
      },
      {
        icon: 'eye',
        title: 'Presence Radar Welcoming',
        description: 'Gentle lighting ramp upon footstep detection',
      },
      {
        icon: 'frame',
        title: 'Art Artwork Spot Framing',
        description: 'Bespoke optical contour museum projectors',
      },
      {
        icon: 'bell',
        title: 'Encrypted Video Intercom',
        description: 'Direct local SIP streaming to flush tablets',
      },
    ],
    activeScene: {
      name: 'Arrival Ceremony',
      description:
        'Upon motorized pivot door unlock, architectural gallery spots softly illuminate key sculpture artwork and hall ambient light fades up smoothly.',
      temperature: '22°C',
      dimming: '60%',
      curtainState: 'Perimeter glass unshaded',
    },
    scenes: [
      {
        id: 'arrival',
        name: 'Arrival Ceremony',
        description:
          'Upon motorized pivot door unlock, architectural gallery spots softly illuminate key sculpture artwork and hall ambient light fades up smoothly.',
        temperature: '22°C',
        dimming: '60%',
        curtainState: 'Perimeter glass unshaded',
      },
      {
        id: 'night_sentry',
        name: 'Night Sentry Mode',
        description:
          'Low-level floor baseboard wash lights (5%) guide pathways with zero harsh glare if footsteps are detected between 01:00 and 06:00.',
        temperature: '22°C',
        dimming: '5%',
        curtainState: 'Perimeter glass shielded',
      },
    ],
    latency: '<6ms (Local)',
    circuits: 14,
  },
];
