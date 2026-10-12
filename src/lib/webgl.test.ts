import { describe, expect, it } from 'vitest';
import { isWebGLAvailable } from './webgl';

/**
 * Fallback mechanism test: with no DOM (node), WebGL is unavailable, so
 * MaquetteSection renders its notice and the on-page LiveFloorPlan covers
 * room exploration instead of a dead canvas.
 */
describe('webgl detection', () => {
  it('reports unavailable without a DOM', () => {
    expect(typeof document).toBe('undefined');
    expect(isWebGLAvailable()).toBe(false);
  });
});
