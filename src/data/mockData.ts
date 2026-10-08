import { RoomZone, ResidenceProject, Scenario } from '../types';

import heroVillaImg from '../assets/images/hero_architectural_villa_1791488866425.jpg';
import cairoVillaImg from '../assets/images/cairo_luxury_villa_1791488882402.jpg';
import riyadhPenthouseImg from '../assets/images/riyadh_dq_penthouse_1791488892687.jpg';
import sahelResidenceImg from '../assets/images/sahel_coastal_residence_1791488904285.jpg';

export const HERO_IMAGE = heroVillaImg;

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
      description: 'At sunset, soft warm accent lights gently fade to 40%, motorized sheer blinds glide closed, and the air temperature adjusts to a comfortable 22°C.',
      temperature: '22°C',
      dimming: '40%',
      curtainState: 'Sheer closed (100%)',
    },
    scenes: [
      {
        id: 'evening',
        name: 'Evening Welcome Scene',
        description: 'At sunset, soft warm accent lights gently fade to 40%, motorized sheer blinds glide closed, and the air temperature adjusts to a comfortable 22°C.',
        temperature: '22°C',
        dimming: '40%',
        curtainState: 'Sheer closed',
      },
      {
        id: 'daylight',
        name: 'Natural Daylight Circadian',
        description: 'Full 5000K daylight-balanced illumination tracks the sun. Drapes automatically open to frame desert garden views while reducing HVAC load.',
        temperature: '23°C',
        dimming: '85%',
        curtainState: 'Open (100%)',
      },
      {
        id: 'soiree',
        name: 'Private Soirée & Lounge',
        description: 'Ambient cove lights glow at 2200K golden amber. Multi-room high-fidelity lossless audio syncs discreetly throughout the salon.',
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
      description: 'At 23:00, blackout draperies seal completely, ambient room temperature drops to 20.5°C, and all tactile switches enter zero-LED night mode.',
      temperature: '20.5°C',
      dimming: '0%',
      curtainState: 'Blackout 100%',
    },
    scenes: [
      {
        id: 'sleep',
        name: 'Deep Sleep Sanctuary',
        description: 'At 23:00, blackout draperies seal completely, ambient room temperature drops to 20.5°C, and all tactile switches enter zero-LED night mode.',
        temperature: '20.5°C',
        dimming: '0%',
        curtainState: 'Blackout 100%',
      },
      {
        id: 'wake',
        name: 'Gentle Dawn Awakening',
        description: 'Simulates sunrise over 20 minutes with golden cove illumination while motorized sheers whisper open silently.',
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
      description: 'Prep counters illuminate at 4000K crisp white with 100% lumen delivery, extractor ventilation adjusts to acoustic silent mode.',
      temperature: '21.5°C',
      dimming: '95%',
      curtainState: 'Louver blinds 45°',
    },
    scenes: [
      {
        id: 'culinary',
        name: 'Culinary Master Scene',
        description: 'Prep counters illuminate at 4000K crisp white with 100% lumen delivery, extractor ventilation adjusts to acoustic silent mode.',
        temperature: '21.5°C',
        dimming: '95%',
        curtainState: 'Louver blinds 45°',
      },
      {
        id: 'cocktail',
        name: 'Evening Island Bar Scene',
        description: 'Island under-counter LED ribbons wash stone cabinetry in warm amber while ambient perimeter lights dim to 20%.',
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
      description: 'Upon motorized pivot door unlock, architectural gallery spots softly illuminate key sculpture artwork and hall ambient light fades up smoothly.',
      temperature: '22°C',
      dimming: '60%',
      curtainState: 'Perimeter glass unshaded',
    },
    scenes: [
      {
        id: 'arrival',
        name: 'Arrival Ceremony',
        description: 'Upon motorized pivot door unlock, architectural gallery spots softly illuminate key sculpture artwork and hall ambient light fades up smoothly.',
        temperature: '22°C',
        dimming: '60%',
        curtainState: 'Perimeter glass unshaded',
      },
      {
        id: 'night_sentry',
        name: 'Night Sentry Mode',
        description: 'Low-level floor baseboard wash lights (5%) guide pathways with zero harsh glare if footsteps are detected between 01:00 and 06:00.',
        temperature: '22°C',
        dimming: '5%',
        curtainState: 'Perimeter glass shielded',
      },
    ],
    latency: '<6ms (Local)',
    circuits: 14,
  },
];

export const SCENARIOS: Scenario[] = [
  {
    id: 'arriving_home',
    number: 'SCENARIO 01',
    title: 'Arriving Home',
    iconName: 'home',
    description: 'Lights illuminate pathways smoothly, climate shifts to preferred comfort, and exterior perimeter gates disarm upon authorized arrival.',
    automationSequence: [
      'Perimeter vehicle transponder recognized',
      'Exterior driveway lanterns ramp to 60%',
      'HVAC transitions from eco (26°C) to comfort (22°C)',
      'Security deadbolts unlock with local audit stamp',
    ],
  },
  {
    id: 'good_night',
    number: 'SCENARIO 02',
    title: 'Good Night',
    iconName: 'moon',
    description: 'Single tap beside the master bed locks all perimeter deadbolts, arms lower-level motion sensors, and gently turns off all interior luminaires.',
    automationSequence: [
      'Master bedside keypad triggered',
      'Interior luminaires smoothly fade to 0% over 8s',
      'All 8 perimeter exterior doors double-deadbolted',
      'Ground floor mmWave sensors armed for sentry patrol',
    ],
  },
  {
    id: 'away_mode',
    number: 'SCENARIO 03',
    title: 'Away Mode',
    iconName: 'plane',
    description: 'Simulates natural presence with random soft lighting patterns, lowers AC power consumption to eco-mode, and triggers instant alerts upon unexpected motion.',
    automationSequence: [
      'Master key fob exit confirmed',
      'HVAC setpoint shifted to high-efficiency 27°C',
      'Natural occupancy simulation algorithm engaged',
      'Main domestic water supply solenoid safely closed',
    ],
  },
  {
    id: 'movie_time',
    number: 'SCENARIO 04',
    title: 'Movie Time',
    iconName: 'film',
    description: 'Curtains glide shut, chandeliers dim to 10%, screen backlights transition to soft amber, and architectural acoustic profiles balance perfectly.',
    automationSequence: [
      'Private cinema room switch pressed',
      'Motorized velvet acoustic drapes glide 100% closed',
      'Architectural downlights dim to warm 10% candlelight',
      'Subwoofers power on and AVR zone switches to Cinema EQ',
    ],
  },
];

export const RESIDENCE_PROJECTS: ResidenceProject[] = [
  {
    id: 'new_cairo',
    title: 'Private Villa, New Cairo',
    location: 'New Cairo, Egypt',
    country: 'Egypt',
    status: 'IN PROGRESS',
    image: cairoVillaImg,
    description: 'Full residential automation, 64 lighting circuits, motorized facade shading, and local climate integration.',
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
    description: 'Bespoke scene integration, architectural multi-zone sound distribution, and discrete mmWave presence detection.',
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
    description: 'Year-round encrypted remote climate monitoring, storm shutter automation, and intelligent security lockouts.',
    specs: {
      circuits: 82,
      protocol: 'Hybrid KNX / Local Gateway',
      controlPoints: 164,
      completion: 'Summer 2025',
    },
  },
];

export const HARDWARE_CATEGORIES = [
  {
    title: 'Lighting Systems',
    description: 'Smooth 0-100% dimming, DALI-2 addressing, tunable CCT white circadian matching, RGBW architectural cove strips.',
    icon: 'lightbulb',
    protocols: ['DALI-2', 'KNX', '0-10V', 'Phase Dimming'],
  },
  {
    title: 'Curtains & Blinds',
    description: 'Somfy RTS & RS485, Dooya ultra-silent motors, bespoke motorized heavy drapery tracks with percentage positioning.',
    icon: 'blinds',
    protocols: ['RS485', 'Somfy RTS', 'Dry Contact', 'Zigbee Pro'],
  },
  {
    title: 'Sensors & Environmental',
    description: 'Millimeter-wave (mmWave) presence radar, magnetic door contacts, water flood detection, smoke, air quality & CO2 sensors.',
    icon: 'activity',
    protocols: ['mmWave Radar', 'Modbus', 'BACnet', 'Zigbee 3.0'],
  },
  {
    title: 'Cameras & Surveillance',
    description: 'Local ONVIF/RTSP NVR streaming, zero cloud mandatory subscriptions, continuous recording directly to on-site encrypted storage.',
    icon: 'camera',
    protocols: ['ONVIF Profile S/T', 'RTSP Direct', 'PoE+ Gigabit', 'Local NVMe'],
  },
  {
    title: 'Access & Smart Locks',
    description: 'High-speed biometric fingerprint scanners, temporary visitor keypads, encrypted NFC badges, manual keyed failsafe overrides.',
    icon: 'lock',
    protocols: ['Wiegand', 'OSDP v2', 'Encrypted NFC', 'Fail-Secure Solenoid'],
  },
  {
    title: 'Switches & Interfaces',
    description: 'Tempered glass touch consoles, anodized aluminium tactile push toggles, hidden in-wall relays matching any luxury designer plate.',
    icon: 'toggle-left',
    protocols: ['KNX Bus', 'Ultra-Low Voltage', 'Dry Contact', 'Ethernet PoE'],
  },
];
