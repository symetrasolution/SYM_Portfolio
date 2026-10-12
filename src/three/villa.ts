import * as THREE from 'three';
import { LAYER_COLORS, type DeviceLayer } from './layers';

/**
 * Procedural architectural presentation model: matte ivory volumes on a dark
 * base, warm interiors, soft shadows. No external model files — nothing to
 * license, download, or replace with placeholders.
 *
 * Room ids match the content bundles (`floor.rooms`), so hotspot labels and
 * the side panel always read from the same EN/AR source as the rest of the
 * site. Well under 100k triangles (boxes + low-segment cylinders).
 */

export type RoomId = 'living_room' | 'master_bedroom' | 'kitchen' | 'foyer';

export const ROOM_IDS: RoomId[] = [
  'living_room',
  'master_bedroom',
  'kitchen',
  'foyer',
];

const HOTSPOT_ANCHORS: Record<RoomId, [number, number, number]> = {
  living_room: [-2.5, 1.7, -0.7],
  kitchen: [1.55, 2.0, -1.1],
  master_bedroom: [-0.3, 3.6, -1.25],
  foyer: [2.9, 1.7, 3.0],
};

export interface RoomHotspot {
  id: RoomId;
  group: THREE.Group;
  ring: THREE.Mesh;
  outer: THREE.Mesh;
  label: THREE.Sprite;
  dots: THREE.Mesh[];
}

export interface VillaModel {
  root: THREE.Group;
  hotspots: RoomHotspot[];
  setEvening(on: boolean): void;
  setRoofLifted(on: boolean): void;
  setLabels(names: Record<RoomId, string>, rtl: boolean): void;
  setRoomLayers(map: Partial<Record<RoomId, DeviceLayer[]>>): void;
  setVisibleLayers(layers: DeviceLayer[]): void;
  /** Per-frame ring pulse; pass 0 / skip when reduced motion is preferred. */
  update(t: number): void;
  dispose(scene: THREE.Scene): void;
}

function mat(
  color: number,
  roughness = 0.72,
  metalness = 0,
  emissive = 0x000000,
): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness,
    emissive,
    emissiveIntensity: 0.25,
  });
}

function box(
  parent: THREE.Object3D,
  name: string,
  x: number,
  y: number,
  z: number,
  w: number,
  h: number,
  d: number,
  material: THREE.Material,
): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  m.position.set(x, y, z);
  m.name = name;
  parent.add(m);
  return m;
}

function cylinder(
  parent: THREE.Object3D,
  x: number,
  y: number,
  z: number,
  r1: number,
  r2: number,
  h: number,
  material: THREE.Material,
): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, h, 20), material);
  m.position.set(x, y, z);
  parent.add(m);
  return m;
}

function makeRoom(
  parent: THREE.Object3D,
  x: number,
  z: number,
  w: number,
  d: number,
  floorColor: number,
): void {
  box(parent, 'room-floor', x, 0.12, z, w, 0.22, d, mat(floorColor));
  box(parent, 'back-wall', x, 0.95, z - d / 2, w, 1.65, 0.12, mat(0xe9e2d4));
  box(parent, 'side-wall', x - w / 2, 0.95, z, 0.12, 1.65, d, mat(0xd8d1c2));
}

function makeLabelSprite(text: string, rtl: boolean): THREE.Sprite {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = 'rgba(5,37,30,.88)';
  ctx.beginPath();
  ctx.roundRect(2, 5, 252, 54, 13);
  ctx.fill();
  ctx.strokeStyle = 'rgba(157,231,199,.7)';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#eff9f3';
  ctx.font = '700 22px Manrope, Cairo, Arial, sans-serif';
  ctx.direction = rtl ? 'rtl' : 'ltr';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const label = text.length > 20 ? text.slice(0, 20) + '…' : text;
  ctx.fillText(label.toUpperCase(), 128, 34);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }),
  );
  sprite.scale.set(1.3, 0.33, 1);
  return sprite;
}

export function buildModel(scene: THREE.Scene): VillaModel {
  scene.background = new THREE.Color(0x062b24);
  scene.fog = new THREE.Fog(0x062b24, 16, 34);

  const hemi = new THREE.HemisphereLight(0xd7f5e6, 0x163b30, 2.1);
  scene.add(hemi);
  const key = new THREE.DirectionalLight(0xffe5bd, 3.2);
  key.position.set(7, 12, 8);
  key.castShadow = true;
  scene.add(key);
  const fill = new THREE.PointLight(0x6ce0b3, 30, 25);
  fill.position.set(-5, 5, -2);
  scene.add(fill);

  const root = new THREE.Group();
  root.name = 'villa-maquette';
  scene.add(root);

  const ground = mat(0x174b3d, 0.92);
  const lawn = mat(0x1e6047);
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0x83b9a7,
    metalness: 0.1,
    roughness: 0.15,
    transparent: true,
    opacity: 0.48,
  });
  const dark = mat(0x183c32);
  const wood = mat(0x9a7650);
  const fabric = mat(0xe8dfce);
  const gold = mat(0xc8aa78, 0.3, 0.6);
  const stemMat = new THREE.MeshBasicMaterial({ color: 0x94f2ca });

  box(root, 'site', 0, -0.28, 0, 13, 0.4, 10, ground);
  box(root, 'lawn', 0, -0.055, 0, 12.7, 0.08, 9.7, lawn);

  // Lower floor: open-front architectural cutaway.
  const lower = new THREE.Group();
  root.add(lower);
  makeRoom(lower, -2, -1.15, 3.7, 3.1, 0xe1d6c3);
  makeRoom(lower, 1.75, -1.15, 3.4, 3.1, 0xe7ddce);
  makeRoom(lower, -0.15, 2.0, 7.0, 2.7, 0xd8c7ac);

  for (let x = -3.7; x <= 3.7; x += 1.15) {
    box(lower, 'front-glass', x, 0.95, 3.4, 0.9, 1.45, 0.045, glass);
  }
  for (let z = -2.6; z <= 2.7; z += 1.1) {
    box(lower, 'right-glass', 3.55, 0.95, z, 0.045, 1.45, 0.85, glass);
  }

  // Living area furniture.
  box(lower, 'sofa-base', -2.1, 0.48, -1.3, 1.9, 0.45, 0.75, fabric);
  box(lower, 'sofa-back', -2.1, 0.82, -1.62, 1.9, 0.55, 0.18, fabric);
  for (const x of [-2.75, -2.1, -1.45]) {
    box(lower, 'cushion', x, 0.73, -1.32, 0.52, 0.12, 0.5, mat(0xb7b8a7));
  }
  box(lower, 'coffee-table', -1.8, 0.42, -0.2, 1.25, 0.12, 0.65, wood);
  box(lower, 'tv-console', -3.2, 0.43, -2.4, 0.5, 0.35, 1.7, wood);
  box(lower, 'television', -3.12, 1.1, -2.4, 0.08, 0.8, 1.35, mat(0x101d1a, 0.25, 0.2));

  // Kitchen and dining.
  box(lower, 'island', 1.55, 0.62, -1.1, 1.7, 0.85, 0.85, mat(0xf1e9da));
  box(lower, 'countertop', 1.55, 1.08, -1.1, 1.82, 0.1, 0.94, mat(0x9b9988));
  for (let i = 0; i < 3; i++) {
    cylinder(lower, 0.7 + i * 0.72, 0.48, -0.05, 0.19, 0.19, 0.08, dark);
    box(lower, 'chair', 0.7 + i * 0.72, 0.28, 0.08, 0.38, 0.42, 0.38, wood);
  }
  box(lower, 'dining-table', 1.4, 0.65, 1.8, 2.1, 0.12, 1.05, wood);
  for (const x of [0.7, 2.1]) {
    for (const z of [1.2, 2.4]) {
      box(lower, 'dining-chair', x, 0.35, z, 0.38, 0.6, 0.38, dark);
    }
  }

  // Foyer: entrance stoop, pivot door slab and canopy.
  box(lower, 'stoop', 2.9, 0.05, 4.1, 1.6, 0.2, 1.1, mat(0xf1e9da));
  box(lower, 'pivot-door', 2.9, 1.0, 3.42, 1.1, 1.8, 0.1, wood);
  box(lower, 'canopy', 2.9, 2.05, 3.6, 1.8, 0.1, 1.2, mat(0x273c35, 0.42, 0.35));

  // Bedroom suite on the upper floor.
  const upper = new THREE.Group();
  upper.position.y = 2.1;
  root.add(upper);
  makeRoom(upper, -0.1, -1.2, 6.8, 4.2, 0xded3c0);
  box(upper, 'bed-base', -0.3, 0.48, -1.25, 2.15, 0.4, 1.7, wood);
  box(upper, 'mattress', -0.3, 0.75, -1.25, 2.1, 0.25, 1.65, fabric);
  box(upper, 'headboard', -0.3, 1.12, -2.06, 2.25, 0.85, 0.15, mat(0x8d735b));
  for (const x of [-0.9, 0.35]) {
    box(upper, 'pillow', x, 0.91, -1.72, 0.72, 0.14, 0.42, mat(0xffffff));
  }
  box(upper, 'bedside', -1.8, 0.55, -2.05, 0.45, 0.65, 0.45, wood);
  box(upper, 'bedside', 1.2, 0.55, -2.05, 0.45, 0.65, 0.45, wood);
  cylinder(upper, -1.8, 1.05, -2.05, 0.12, 0.12, 0.1, gold);
  cylinder(upper, 1.2, 1.05, -2.05, 0.12, 0.12, 0.1, gold);

  // Roof pieces frame the cutaway while leaving rooms visible.
  const roof = new THREE.Group();
  root.add(roof);
  const roofMat = mat(0x273c35, 0.42, 0.35);
  const r1 = box(roof, 'roof', -0.2, 4.35, -1.1, 7.6, 0.18, 4.7, roofMat);
  r1.rotation.x = -0.02;
  box(roof, 'roof-overhang', -0.2, 4.24, -1.1, 8, 0.1, 5.0, mat(0x69756b, 0.35, 0.35));
  for (let i = 0; i < 7; i++) {
    box(roof, 'solar-panel', -2.5 + i * 0.72, 4.46, -1.3, 0.61, 0.05, 1.7, mat(0x244d52, 0.25, 0.45));
  }

  // Front deck, path, pool, planters.
  box(root, 'deck', 0, -0.01, 4.0, 7.8, 0.18, 1.3, wood);
  box(root, 'pool', -3.0, -0.02, 4.3, 2.6, 0.13, 1.8, mat(0x2e9b9b, 0.2, 0.25));
  for (let i = 0; i < 7; i++) {
    box(root, 'path-stone', -4.8 + i * 1.5, 0.02, 5.15, 0.72, 0.08, 0.45, mat(0xb6b4a4));
  }
  for (const [x, z] of [[-5, -3.2], [5, -3], [4.9, 3.2], [-4.9, 2.7]] as const) {
    cylinder(root, x, 0.15, z, 0.48, 0.58, 0.28, mat(0x526a50));
    cylinder(root, x, 0.68, z, 0.2, 0.32, 0.9, mat(0x3e7c57));
    for (let a = 0; a < 5; a++) {
      const leaf = cylinder(
        root, x + Math.cos(a * 1.25) * 0.25, 1.05 + Math.sin(a * 1.25) * 0.15,
        z + Math.sin(a * 1.25) * 0.25, 0.09, 0.16, 0.45, mat(0x649b6d),
      );
      leaf.rotation.z = Math.cos(a * 1.25) * 0.55;
    }
  }

  // Warm architectural lighting (evening-leaning baseline).
  const interior: THREE.PointLight[] = [];
  for (const [x, y, z] of [[-3, 1.6, -2.5], [2.8, 1.6, -2.5], [-1, 3.5, -2.7], [2.5, 3.5, -1]] as const) {
    const l = new THREE.PointLight(0xffc77f, 2.2, 4);
    l.position.set(x, y, z);
    scene.add(l);
    interior.push(l);
  }

  // Room hotspots.
  const hotspots: RoomHotspot[] = ROOM_IDS.map((id, i) => {
    const [x, y, z] = HOTSPOT_ANCHORS[id];
    const group = new THREE.Group();
    group.position.set(x, y, z);
    group.userData.roomId = id;
    const outer = new THREE.Mesh(
      new THREE.SphereGeometry(0.16, 20, 20),
      new THREE.MeshBasicMaterial({ color: 0x8ff3c7, transparent: true, opacity: 0.18 }),
    );
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.075, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xc4ffe2 }),
    );
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.22, 0.018, 8, 32),
      new THREE.MeshBasicMaterial({ color: 0x9de7c7 }),
    );
    ring.rotation.x = 0.25;
    box(group, 'stem', 0, -0.32, 0, 0.012, 0.32, 0.012, stemMat);
    group.add(outer, core, ring);
    const label = makeLabelSprite(id, false);
    label.position.set(0.75, 0.15, 0);
    group.add(label);
    group.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) o.userData.roomId = id;
    });
    group.userData.phase = i * 0.6;
    root.add(group);
    return { id, group, ring, outer, label, dots: [] };
  });

  const model: VillaModel = {
    root,
    hotspots,

    setEvening(on: boolean) {
      hemi.intensity = on ? 0.9 : 2.1;
      key.intensity = on ? 1.2 : 3.2;
      for (const l of interior) l.intensity = on ? 3.4 : 2.2;
    },

    setRoofLifted(on: boolean) {
      roof.position.y = on ? 1.4 : 0;
    },

    setLabels(names: Record<RoomId, string>, rtl: boolean) {
      for (const h of hotspots) {
        const fresh = makeLabelSprite(names[h.id] ?? h.id, rtl);
        fresh.position.copy(h.label.position);
        const old = h.label;
        h.group.add(fresh);
        h.group.remove(old);
        (old.material as THREE.Material).dispose();
        ((old.material as THREE.SpriteMaterial).map as THREE.Texture | null)?.dispose();
        h.label = fresh;
      }
    },

    setRoomLayers(map: Partial<Record<RoomId, DeviceLayer[]>>) {
      for (const h of hotspots) {
        for (const d of h.dots) {
          h.group.remove(d);
          d.geometry.dispose();
          (d.material as THREE.Material).dispose();
        }
        h.dots = [];
        const layers = map[h.id] ?? [];
        layers.forEach((layer, k) => {
          const dot = new THREE.Mesh(
            new THREE.SphereGeometry(0.06, 12, 12),
            new THREE.MeshBasicMaterial({ color: LAYER_COLORS[layer] }),
          );
          const angle = (k / Math.max(layers.length, 1)) * Math.PI * 2 - Math.PI / 2;
          dot.position.set(Math.cos(angle) * 0.48, 0.52, Math.sin(angle) * 0.48);
          dot.userData.layer = layer;
          h.group.add(dot);
          h.dots.push(dot);
        });
      }
    },

    setVisibleLayers(layers: DeviceLayer[]) {
      const visible = new Set(layers);
      for (const h of hotspots) {
        for (const d of h.dots) d.visible = visible.has(d.userData.layer as DeviceLayer);
      }
    },

    update(t: number) {
      for (const h of hotspots) {
        const phase = (h.group.userData.phase as number) ?? 0;
        h.ring.rotation.z = t * 0.0005 + phase;
        const s = 1 + Math.sin(t * 0.003 + phase) * 0.08;
        h.outer.scale.setScalar(s);
      }
    },

    dispose(sceneRef: THREE.Scene) {
      sceneRef.remove(root, hemi, key, fill, ...interior);
      root.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (mesh.isMesh || (o as THREE.Sprite).isSprite) {
          (mesh.geometry as THREE.BufferGeometry | undefined)?.dispose();
          const m = mesh.material as THREE.Material | THREE.Material[] | undefined;
          if (Array.isArray(m)) m.forEach((x) => x.dispose());
          else m?.dispose();
          const tex = (m as THREE.SpriteMaterial | undefined)?.map;
          (tex as THREE.Texture | undefined)?.dispose?.();
        }
      });
      hemi.dispose();
      key.dispose();
      fill.dispose();
      for (const l of interior) l.dispose();
    },
  };

  model.setEvening(true);
  return model;
}
