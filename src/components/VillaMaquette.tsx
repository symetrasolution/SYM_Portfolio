import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { buildModel, type RoomId } from '../three/villa';
import type { DeviceLayer } from '../three/layers';

interface VillaMaquetteCanvasProps {
  rooms: { id: RoomId; name: string }[];
  rtl: boolean;
  evening: boolean;
  roofLifted: boolean;
  visibleLayers: DeviceLayer[];
  roomLayers: Partial<Record<RoomId, DeviceLayer[]>>;
  selectedId: RoomId | null;
  onSelect: (id: RoomId) => void;
  reduceMotion: boolean;
  hint: string;
  ariaLabel: string;
}

/**
 * Lazy-loaded 3D canvas (keeps three.js out of the initial chunk).
 * Wheel zoom engages only after the canvas is focused/clicked; touch stays
 * on vertical page scroll (pan-y) with drag-rotate on the model.
 */
export const VillaMaquetteCanvas: React.FC<VillaMaquetteCanvasProps> = ({
  rooms,
  rtl,
  evening,
  roofLifted,
  visibleLayers,
  roomLayers,
  selectedId,
  onSelect,
  reduceMotion,
  hint,
  ariaLabel,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;
  const reduceRef = useRef(reduceMotion);
  reduceRef.current = reduceMotion;

  const modelRef = useRef<ReturnType<typeof buildModel> | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const selectedRef = useRef<RoomId | null>(selectedId);
  selectedRef.current = selectedId;

  // Mount once: renderer, scene, camera, controls, loop.
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    canvas.style.touchAction = 'pan-y';
    canvas.tabIndex = 0;
    canvas.setAttribute('role', 'img');
    canvasRef.current = canvas;
    mount.appendChild(canvas);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    const model = buildModel(scene);
    modelRef.current = model;

    const st = { drag: false, moved: 0, x: 0, y: 0, rotY: -0.55, rotX: -0.35, zoom: 1.0, auto: true, focused: false };
    const target = new THREE.Vector3(0, 1.65, 0);
    const updateCamera = () => {
      const dist = 15 / st.zoom;
      camera.position.set(
        target.x + Math.sin(st.rotY) * dist,
        target.y + Math.sin(st.rotX) * dist * 0.8 + 2,
        target.z + Math.cos(st.rotY) * dist,
      );
      camera.lookAt(target);
    };
    const resize = () => {
      const r = mount.getBoundingClientRect();
      if (!r.width || !r.height) return;
      renderer.setSize(r.width, r.height, false);
      camera.aspect = r.width / r.height;
      camera.updateProjectionMatrix();
    };
    resize();
    updateCamera();

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const pick = (clientX: number, clientY: number): RoomId | null => {
      const r = canvas.getBoundingClientRect();
      pointer.x = ((clientX - r.left) / r.width) * 2 - 1;
      pointer.y = -((clientY - r.top) / r.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const targets: THREE.Object3D[] = [];
      for (const h of model.hotspots) {
        h.group.traverse((o) => {
          if ((o as THREE.Mesh).isMesh || (o as THREE.Sprite).isSprite) targets.push(o);
        });
      }
      const hits = raycaster.intersectObjects(targets, false);
      if (hits.length === 0) return null;
      let p: THREE.Object3D | null = hits[0].object;
      while (p && !(p.userData.roomId as RoomId | undefined)) p = p.parent;
      return (p?.userData.roomId as RoomId | undefined) ?? null;
    };

    const onDown = (e: PointerEvent) => {
      st.drag = true;
      st.moved = 0;
      st.x = e.clientX;
      st.y = e.clientY;
      st.auto = false;
      st.focused = true;
      try {
        canvas.setPointerCapture(e.pointerId);
      } catch {
        /* noop */
      }
    };
    const onMove = (e: PointerEvent) => {
      if (!st.drag) return;
      const dx = e.clientX - st.x;
      const dy = e.clientY - st.y;
      st.moved += Math.abs(dx) + Math.abs(dy);
      st.rotY -= dx * 0.006;
      st.rotX = Math.max(-0.85, Math.min(0.35, st.rotX + dy * 0.004));
      st.x = e.clientX;
      st.y = e.clientY;
      updateCamera();
    };
    const onUp = (e: PointerEvent) => {
      const wasTap = st.drag && st.moved < 6;
      st.drag = false;
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch {
        /* noop */
      }
      if (wasTap) {
        const id = pick(e.clientX, e.clientY);
        if (id) onSelectRef.current(id);
      }
    };
    const onWheel = (e: WheelEvent) => {
      if (!st.focused) return; // let the page scroll until engaged
      e.preventDefault();
      st.zoom = Math.max(0.72, Math.min(1.55, st.zoom * (e.deltaY > 0 ? 0.94 : 1.06)));
      updateCamera();
    };
    const onFocus = () => {
      st.focused = true;
    };
    const onBlur = () => {
      st.focused = false;
    };
    const onResize = () => resize();

    canvas.addEventListener('pointerdown', onDown);
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerup', onUp);
    canvas.addEventListener('pointercancel', () => {
      st.drag = false;
    });
    canvas.addEventListener('wheel', onWheel, { passive: false });
    canvas.addEventListener('focus', onFocus);
    canvas.addEventListener('blur', onBlur);
    window.addEventListener('resize', onResize);

    let raf = 0;
    let last = performance.now();
    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      const dt = Math.min(t - last, 64);
      last = t;
      if (st.auto && !reduceRef.current) {
        st.rotY += dt * 0.00012;
        updateCamera();
      }
      if (!reduceRef.current) model.update(t);
      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener('pointerdown', onDown);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerup', onUp);
      canvas.removeEventListener('wheel', onWheel);
      canvas.removeEventListener('focus', onFocus);
      canvas.removeEventListener('blur', onBlur);
      window.removeEventListener('resize', onResize);
      model.dispose(scene);
      renderer.dispose();
      renderer.forceContextLoss();
      mount.removeChild(canvas);
      modelRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Prop-driven model updates.
  useEffect(() => {
    canvasRef.current?.setAttribute('aria-label', `${ariaLabel}. ${hint}`);
    const model = modelRef.current;
    if (!model) return;
    const names = Object.fromEntries(rooms.map((r) => [r.id, r.name])) as Record<RoomId, string>;
    model.setLabels(names, rtl);
    model.setRoomLayers(roomLayers);
    model.setVisibleLayers(visibleLayers);
    model.setEvening(evening);
    model.setRoofLifted(roofLifted);
    for (const h of model.hotspots) {
      (h.ring.material as THREE.MeshBasicMaterial).color.set(
        h.id === selectedId ? 0xffffff : 0x9de7c7,
      );
    }
  }, [rooms, rtl, evening, roofLifted, visibleLayers, roomLayers, selectedId, ariaLabel, hint]);

  return (
    <div ref={mountRef} className="relative w-full h-full min-h-[320px] sm:min-h-[420px]">
      <span className="sr-only">{ariaLabel}. {hint}</span>
    </div>
  );
};
