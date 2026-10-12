import { describe, expect, it } from 'vitest';
import { LAYERS, layerOf } from './layers';

describe('device layers', () => {
  it('covers exactly the five offered device families', () => {
    expect(LAYERS).toEqual(['lighting', 'curtains', 'sensors', 'cameras', 'locks']);
  });

  it('maps every room hardware-node icon used in the bundles', () => {
    const icons = [
      'lightbulb', 'blinds', 'radar', 'sliders', 'moon',
      'sparkles', 'wind', 'key', 'eye', 'camera', 'bell',
    ];
    for (const icon of icons) {
      expect(LAYERS).toContain(layerOf(icon));
    }
  });
});
