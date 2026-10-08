import type { RoomZone } from '../types';

/**
 * Room zones — qualitative capability descriptions only (TRUTH RULES).
 * No areas, latencies, circuit counts, temperatures or brand claims.
 * Covers offered devices: lighting, curtains/blinds, sensors, cameras,
 * locks/access, switches/sockets over Zigbee / Tuya (local key).
 */
export const ROOM_ZONES: RoomZone[] = [
  {
    id: 'living_room',
    name: 'Living Salon',
    tabLabel: 'LIVING ROOM',
    nodeNumber: 1,
    category: 'Living Quarters',
    title: 'Living Room Automation',
    hardwareNodes: [
      {
        icon: 'lightbulb',
        title: 'Scene Lighting',
        description: 'One tap sets the mood for evening, guests or quiet time',
      },
      {
        icon: 'blinds',
        title: 'Motorized Curtains',
        description: 'Sheer and blackout layers glide open or closed',
      },
      {
        icon: 'radar',
        title: 'Presence & Light Sensors',
        description: 'The room notices you and adjusts gently',
      },
      {
        icon: 'sliders',
        title: 'Wall Switches & Sockets',
        description: 'Familiar switches that always work, with or without internet',
      },
    ],
    activeScene: {
      name: 'Evening Welcome',
      description:
        'As evening sets in, the lights soften to a warm glow, sheer curtains glide closed, and the salon settles into a calm welcome.',
    },
    scenes: [
      {
        id: 'evening',
        name: 'Evening Welcome',
        description:
          'As evening sets in, the lights soften to a warm glow, sheer curtains glide closed, and the salon settles into a calm welcome.',
      },
      {
        id: 'daylight',
        name: 'Daylight Mode',
        description:
          'Curtains open to daylight and the view while the lights step back — the room follows the day on its own.',
      },
      {
        id: 'soiree',
        name: 'Guests & Gathering',
        description:
          'Low warm light and closed curtains turn the salon into an intimate space for family and guests.',
      },
    ],
  },
  {
    id: 'master_bedroom',
    name: 'Master Suite',
    tabLabel: 'MASTER BEDROOM',
    nodeNumber: 2,
    category: 'Private Sanctuaries',
    title: 'Master Suite Automation',
    hardwareNodes: [
      {
        icon: 'moon',
        title: 'Gentle Bedside Lighting',
        description: 'Soft light for reading that fades out at bedtime',
      },
      {
        icon: 'blinds',
        title: 'Blackout Curtains',
        description: 'Close fully for sleep, open softly with the morning',
      },
      {
        icon: 'radar',
        title: 'Night Presence Sensor',
        description: 'A dim path of light if you get up at night',
      },
      {
        icon: 'sliders',
        title: 'Bedside Switches',
        description: 'One button by the bed settles the whole home for the night',
      },
    ],
    activeScene: {
      name: 'Good Night',
      description:
        'One tap by the bed: curtains close, lights fade out across the suite, and the home locks up for the night.',
    },
    scenes: [
      {
        id: 'sleep',
        name: 'Good Night',
        description:
          'One tap by the bed: curtains close, lights fade out across the suite, and the home locks up for the night.',
      },
      {
        id: 'wake',
        name: 'Gentle Morning',
        description:
          'Light rises gradually and curtains open softly, so waking up feels unhurried.',
      },
    ],
  },
  {
    id: 'kitchen',
    name: 'Gourmet Kitchen',
    tabLabel: 'GOURMET KITCHEN',
    nodeNumber: 3,
    category: 'Culinary Workshop',
    title: 'Gourmet Kitchen Automation',
    hardwareNodes: [
      {
        icon: 'sparkles',
        title: 'Bright Task Lighting',
        description: 'Clear light over counters when you cook',
      },
      {
        icon: 'wind',
        title: 'Smoke & Leak Sensors',
        description: 'Early warning with automatic water shutoff for leaks',
      },
      {
        icon: 'blinds',
        title: 'Blind Control',
        description: 'Adjust daylight over the working areas',
      },
      {
        icon: 'sliders',
        title: 'Splash-Proof Keypad',
        description: 'Wipeable wall control for scenes and lights',
      },
    ],
    activeScene: {
      name: 'Cooking Mode',
      description:
        'Counters light up bright and clear for preparation; when dinner is served, the island settles into a warm low glow.',
    },
    scenes: [
      {
        id: 'culinary',
        name: 'Cooking Mode',
        description:
          'Counters light up bright and clear for preparation; when dinner is served, the island settles into a warm low glow.',
      },
      {
        id: 'evening',
        name: 'Evening Kitchen',
        description:
          'A soft perimeter glow keeps the kitchen usable and calm after the meal, without harsh overhead light.',
      },
    ],
  },
  {
    id: 'foyer',
    name: 'Grand Foyer & Gallery',
    tabLabel: 'GRAND ENTRANCE',
    nodeNumber: 4,
    category: 'Reception & Gallery',
    title: 'Grand Entrance Automation',
    hardwareNodes: [
      {
        icon: 'key',
        title: 'Smart Lock & Keypad',
        description: 'Fingerprint or code entry, with a regular key as backup',
      },
      {
        icon: 'eye',
        title: 'Arrival Lighting',
        description: 'The entrance lights up as you step in',
      },
      {
        icon: 'camera',
        title: 'Door Camera',
        description: 'See visitors and recordings stay inside your home',
      },
      {
        icon: 'bell',
        title: 'Video Intercom',
        description: 'Answer the door from the wall panel or your phone',
      },
    ],
    activeScene: {
      name: 'Welcome Home',
      description:
        'Unlocking the door brings the entrance to life: gallery spots highlight the artwork and the hall warms up behind you.',
    },
    scenes: [
      {
        id: 'arrival',
        name: 'Welcome Home',
        description:
          'Unlocking the door brings the entrance to life: gallery spots highlight the artwork and the hall warms up behind you.',
      },
      {
        id: 'night',
        name: 'Night Watch',
        description:
          'Overnight, only a faint floor-level glow remains, rising gently if footsteps are detected.',
      },
    ],
  },
];
