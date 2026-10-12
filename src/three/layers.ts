/**
 * Device-layer mapping for the maquette. Layers correspond to the first five
 * hardware categories in the content bundles (lighting, curtains, sensors,
 * cameras, locks) — room hardware-node icons resolve to exactly one layer,
 * so the toggles can only ever show categories from the content files.
 */
export type DeviceLayer = 'lighting' | 'curtains' | 'sensors' | 'cameras' | 'locks';

export const LAYERS: DeviceLayer[] = [
  'lighting',
  'curtains',
  'sensors',
  'cameras',
  'locks',
];

/** Data-viz colors used only for layer dots + legend. */
export const LAYER_COLORS: Record<DeviceLayer, string> = {
  lighting: '#c7aa79',
  curtains: '#9dd7c2',
  sensors: '#7fb3d5',
  cameras: '#d08a5e',
  locks: '#a58bd0',
};

const ICON_TO_LAYER: Record<string, DeviceLayer> = {
  lightbulb: 'lighting',
  sparkles: 'lighting',
  moon: 'lighting',
  sliders: 'lighting',
  blinds: 'curtains',
  radar: 'sensors',
  wind: 'sensors',
  camera: 'cameras',
  eye: 'cameras',
  bell: 'cameras',
  key: 'locks',
};

/** Unknown icons resolve to lighting (every room has switchable light). */
export function layerOf(icon: string): DeviceLayer {
  return ICON_TO_LAYER[icon] ?? 'lighting';
}
