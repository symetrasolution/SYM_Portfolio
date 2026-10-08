import type { HowItWorksStep, TechnicalAppendixItem } from '../types';

/**
 * "How it works" — plain-language explainer for non-technical visitors:
 * Devices -> Smart brain inside your home -> Phone and wall panel.
 */
export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    number: '01',
    title: 'Your devices',
    description:
      'Lights, curtains, sensors, cameras, locks and switches — connected over Zigbee and local protocols.',
    icon: 'network',
  },
  {
    number: '02',
    title: 'Smart brain inside your home',
    description:
      'A small home hub runs everything locally. Daily life keeps working even without internet.',
    icon: 'cpu',
  },
  {
    number: '03',
    title: 'Phone and wall panel',
    description:
      'One app and familiar wall controls for the family. Away from home, connect back securely over VPN.',
    icon: 'smartphone',
  },
];

/** Expandable technical appendix for engineers. */
export const TECHNICAL_APPENDIX: TechnicalAppendixItem[] = [
  {
    title: 'Home Assistant',
    description:
      'The local hub software everything runs on: scenes, schedules and automations live in your home, not in a cloud account.',
  },
  {
    title: 'Zigbee2MQTT',
    description:
      'Connects Zigbee devices through an open local gateway — wide device choice without vendor lock-in.',
  },
  {
    title: 'Node-RED',
    description:
      'Visual automation flows for advanced routines, joining devices and conditions together.',
  },
  {
    title: 'Local Tuya',
    description:
      'Compatible Tuya devices run with local keys, so they respond on your home network instead of a cloud server.',
  },
  {
    title: 'Backups & updates',
    description:
      'The hub keeps local backups of its configuration, and software updates are applied in a controlled way with rollback available.',
  },
];
