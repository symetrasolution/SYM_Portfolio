import React, { useMemo, useState, lazy, Suspense } from 'react';
import { useReducedMotion } from 'motion/react';
import { Sun, Moon, ArrowUpFromLine, ArrowRight, Box } from 'lucide-react';
import { useContent, useIsRTL } from '../i18n/useContent';
import { isWebGLAvailable } from '../lib/webgl';
import { LAYERS, LAYER_COLORS, layerOf, type DeviceLayer } from '../three/layers';
import type { RoomId } from '../three/villa';

// Lazy 3D chunk: three.js never enters the initial bundle.
const VillaMaquetteCanvas = lazy(() =>
  import('./VillaMaquette').then((m) => ({ default: m.VillaMaquetteCanvas })),
);

interface MaquetteSectionProps {
  onOpenBooking: () => void;
}

export const MaquetteSection: React.FC<MaquetteSectionProps> = ({ onOpenBooking }) => {
  const content = useContent();
  const mq = content.maquette;
  const rtl = useIsRTL();
  const reduceMotion = useReducedMotion() ?? false;
  const rooms = content.floor.rooms;
  const categories = content.hardware.categories;

  const [gl] = useState(isWebGLAvailable);
  const [selectedId, setSelectedId] = useState<RoomId>('living_room');
  const [evening, setEvening] = useState(true);
  const [roofLifted, setRoofLifted] = useState(false);
  const [visibleLayers, setVisibleLayers] = useState<DeviceLayer[]>([...LAYERS]);

  const roomLayers = useMemo(() => {
    const map = {} as Record<RoomId, DeviceLayer[]>;
    for (const room of rooms) {
      const layers = room.hardwareNodes.map((n) => layerOf(n.icon));
      map[room.id as RoomId] = [...new Set(layers)];
    }
    return map;
  }, [rooms]);

  const selectedRoom = rooms.find((r) => r.id === selectedId) ?? rooms[0];
  const visibleNodes = selectedRoom.hardwareNodes.filter((n) =>
    visibleLayers.includes(layerOf(n.icon)),
  );

  const toggleLayer = (layer: DeviceLayer) => {
    setVisibleLayers((prev) =>
      prev.includes(layer) ? prev.filter((l) => l !== layer) : [...prev, layer],
    );
  };

  const canvasRooms = useMemo(
    () => rooms.map((r) => ({ id: r.id as RoomId, name: r.name })),
    [rooms],
  );

  return (
    <section id="model" className="py-20 lg:py-28 bg-[#062b24] relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c7aa79] block mb-2">
            {mq.eyebrow}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-[#F4F1EB] tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            {mq.title}
          </h2>
          <p className="text-sm sm:text-base text-[#d5e0da] leading-relaxed max-w-2xl mx-auto">
            {mq.sub}
          </p>
          <span className="inline-block mt-4 text-[10px] uppercase font-bold tracking-wider text-[#8db5a2] bg-white/5 border border-[#F4F1EB]/15 px-2.5 py-1 rounded-md">
            {mq.illustrative}
          </span>
        </div>

        {!gl ? (
          <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-[#0a3930] border border-[#F4F1EB]/15 text-center text-sm text-[#d5e0da]">
            {mq.noWebgl}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Canvas card */}
            <div className="lg:col-span-7 bg-[#0a3930] rounded-3xl p-4 sm:p-5 border border-[#F4F1EB]/15 shadow-sm flex flex-col">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Suspense
                  fallback={
                    <div className="absolute inset-0 animate-pulse bg-[#0d4436] rounded-2xl flex items-center justify-center text-xs text-[#8db5a2]">
                      {mq.loading}
                    </div>
                  }
                >
                  <VillaMaquetteCanvas
                    rooms={canvasRooms}
                    rtl={rtl}
                    evening={evening}
                    roofLifted={roofLifted}
                    visibleLayers={visibleLayers}
                    roomLayers={roomLayers}
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                    reduceMotion={reduceMotion}
                    hint={mq.canvasHint}
                    ariaLabel={mq.title}
                  />
                </Suspense>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
                <span className="text-[11px] text-[#8db5a2]">{mq.canvasHint}</span>
                <div className="flex flex-wrap items-center gap-3">
                  {LAYERS.map((layer, i) => (
                    <span key={layer} className="flex items-center gap-1.5 text-[11px] text-[#aabdb5]">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: LAYER_COLORS[layer] }}
                      />
                      {categories[i]?.title ?? layer}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Control + detail panel */}
            <div className="lg:col-span-5 bg-[#0a3930] rounded-3xl p-6 sm:p-7 border border-[#F4F1EB]/15 shadow-sm flex flex-col gap-5">
              {/* Day / evening */}
              <div className="inline-flex items-center p-0.5 rounded-xl bg-[#062b24] border border-[#F4F1EB]/15 self-start" role="group" aria-label={mq.title}>
                <button
                  type="button"
                  onClick={() => setEvening(false)}
                  aria-pressed={!evening}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                    !evening ? 'bg-[#c7aa79] text-[#062b24]' : 'text-[#aabdb5] hover:text-[#F4F1EB]'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  {mq.daylight}
                </button>
                <button
                  type="button"
                  onClick={() => setEvening(true)}
                  aria-pressed={evening}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                    evening ? 'bg-[#c7aa79] text-[#062b24]' : 'text-[#aabdb5] hover:text-[#F4F1EB]'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  {mq.evening}
                </button>
              </div>

              {/* Roof lift */}
              <button
                type="button"
                onClick={() => setRoofLifted((v) => !v)}
                aria-pressed={roofLifted}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-bold transition-all self-start ${
                  roofLifted
                    ? 'bg-[#c7aa79] border-[#c7aa79] text-[#062b24]'
                    : 'bg-transparent border-[#F4F1EB]/20 text-[#F4F1EB] hover:border-[#c7aa79]/60'
                }`}
              >
                <ArrowUpFromLine className="w-3.5 h-3.5" />
                {mq.roofLift}
              </button>

              {/* Layer toggles */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8db5a2] block mb-2">
                  {mq.layersTitle}
                </span>
                <div className="flex flex-wrap gap-2">
                  {LAYERS.map((layer, i) => {
                    const on = visibleLayers.includes(layer);
                    return (
                      <button
                        key={layer}
                        type="button"
                        onClick={() => toggleLayer(layer)}
                        aria-pressed={on}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-semibold transition-all ${
                          on
                            ? 'border-[#F4F1EB]/25 bg-white/5 text-[#F4F1EB]'
                            : 'border-[#F4F1EB]/10 text-[#8db5a2] opacity-60'
                        }`}
                      >
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: LAYER_COLORS[layer] }}
                        />
                        {categories[i]?.title ?? layer}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Keyboard-accessible room buttons */}
              <div>
                <div className="flex flex-wrap gap-2">
                  {rooms.map((room) => (
                    <button
                      key={room.id}
                      type="button"
                      onClick={() => setSelectedId(room.id as RoomId)}
                      aria-label={mq.viewRoom.replace('{room}', room.name)}
                      aria-pressed={selectedId === room.id}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                        selectedId === room.id
                          ? 'bg-[#F4F1EB] text-[#062b24]'
                          : 'bg-transparent border border-[#F4F1EB]/20 text-[#F4F1EB] hover:border-[#c7aa79]/60'
                      }`}
                    >
                      {room.tabLabel}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected room detail */}
              <div className="pt-5 border-t border-[#F4F1EB]/15">
                <span className="text-xs font-semibold text-[#c7aa79] uppercase tracking-wider block mb-1">
                  {selectedRoom.category}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#F4F1EB] mb-2">
                  {selectedRoom.title}
                </h3>
                <ul className="space-y-2 mb-4">
                  {visibleNodes.map((node) => (
                    <li key={node.title} className="flex items-start gap-2.5 text-xs">
                      <span
                        className="mt-1 w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: LAYER_COLORS[layerOf(node.icon)] }}
                      />
                      <span>
                        <span className="font-bold text-[#F4F1EB]">{node.title}</span>
                        <span className="text-[#aabdb5]"> — {node.description}</span>
                      </span>
                    </li>
                  ))}
                  {visibleNodes.length === 0 && (
                    <li className="text-xs text-[#8db5a2]">—</li>
                  )}
                </ul>
                <button
                  onClick={onOpenBooking}
                  className="text-[11px] font-semibold text-[#c7aa79] hover:text-[#F4F1EB] flex items-center gap-1.5 transition-colors"
                >
                  <Box className="w-3.5 h-3.5" />
                  <span>{mq.discuss}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:-scale-x-100" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
