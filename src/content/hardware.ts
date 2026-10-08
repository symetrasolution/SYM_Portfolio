import type { HardwareCategory } from '../types';

/**
 * Hardware compatibility (TRUTH RULES):
 * - current: lighting, curtains/blinds, sensors, cameras, locks/access,
 *   switches/sockets over Zigbee and Tuya (local key).
 * - roadmap: KNX, DALI-2, air conditioning — "Roadmap / Coming soon" only.
 */
export const HARDWARE_CATEGORIES: HardwareCategory[] = [
  {
    title: 'Lighting',
    description:
      'Switches, dimmers and scene keypads for everyday lighting — grouped into one-tap scenes for each room.',
    icon: 'lightbulb',
    protocols: ['Zigbee', 'Tuya (local key)'],
    status: 'current',
  },
  {
    title: 'Curtains & Blinds',
    description:
      'Motorized curtains and blinds that open, close, or rest at your favorite positions — by schedule, scene or voice of the wall switch.',
    icon: 'blinds',
    protocols: ['Zigbee', 'Tuya (local key)'],
    status: 'current',
  },
  {
    title: 'Sensors',
    description:
      'Presence, door and window, smoke, water-leak and air-quality sensors that let the home react on its own.',
    icon: 'activity',
    protocols: ['Zigbee', 'Tuya (local key)'],
    status: 'current',
  },
  {
    title: 'Cameras',
    description:
      'Door and outdoor cameras with recordings stored inside your home. No mandatory cloud subscription.',
    icon: 'camera',
    protocols: ['Local storage', 'ONVIF / RTSP'],
    status: 'current',
  },
  {
    title: 'Locks & Access',
    description:
      'Fingerprint, code and card entry for family and guests — with a regular mechanical key as backup.',
    icon: 'lock',
    protocols: ['Zigbee', 'Tuya (local key)'],
    status: 'current',
  },
  {
    title: 'Switches & Sockets',
    description:
      'Familiar wall switches and smart sockets that keep working even when the internet is down.',
    icon: 'toggle-left',
    protocols: ['Zigbee', 'Tuya (local key)'],
    status: 'current',
  },
  {
    title: 'KNX Wired Bus',
    description:
      'Wired KNX integration for new-build projects with bus cabling. Details to be confirmed.',
    icon: 'network',
    protocols: ['KNX'],
    status: 'roadmap',
  },
  {
    title: 'DALI-2 Lighting Bus',
    description:
      'Addressable DALI-2 lighting control for larger lighting designs. Details to be confirmed.',
    icon: 'sliders',
    protocols: ['DALI-2'],
    status: 'roadmap',
  },
  {
    title: 'Air Conditioning',
    description:
      'Integrated climate scenes for split and central systems. Details to be confirmed.',
    icon: 'wind',
    protocols: [],
    status: 'roadmap',
  },
];
