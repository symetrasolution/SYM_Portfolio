import React, { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Lightbulb,
  Radar,
  Blinds,
  Moon,
  Sparkles,
  ArrowRight,
  Sliders,
  Wind,
  Key,
  Eye,
  Camera,
  Bell,
  Wifi,
} from 'lucide-react';
import { RoomZone } from '../types';
import { useContent } from '../i18n/useContent';

// On-demand modal: excluded from the initial chunk (Phase 6 code-splitting).
const SpecsCustomizerModal = lazy(() =>
  import('./SpecsCustomizerModal').then((m) => ({
    default: m.SpecsCustomizerModal,
  })),
);

interface LiveFloorPlanProps {
  onOpenBooking: () => void;
}

export const LiveFloorPlan: React.FC<LiveFloorPlanProps> = ({ onOpenBooking }) => {
  const content = useContent();
  const floor = content.floor;
  const ROOM_ZONES: RoomZone[] = floor.rooms;
  const [selectedRoomId, setSelectedRoomId] = useState<string>('living_room');
  const [activeSceneIndex, setActiveSceneIndex] = useState<number>(0);
  const [customizerOpen, setCustomizerOpen] = useState<boolean>(false);

  const currentRoom: RoomZone =
    ROOM_ZONES.find((r) => r.id === selectedRoomId) || ROOM_ZONES[0];

  const currentScene = currentRoom.scenes[activeSceneIndex] || currentRoom.activeScene;

  const handleSelectRoom = (roomId: string) => {
    setSelectedRoomId(roomId);
    setActiveSceneIndex(0);
  };

  const mapLabel = (roomId: string) =>
    (ROOM_ZONES.find((r) => r.id === roomId) ?? ROOM_ZONES[0]).mapLabel;

  const getHardwareIcon = (iconName: string) => {
    switch (iconName) {
      case 'lightbulb':
        return <Lightbulb className="w-4 h-4 text-[#c7aa79]" />;
      case 'blinds':
        return <Blinds className="w-4 h-4 text-[#c7aa79]" />;
      case 'radar':
        return <Radar className="w-4 h-4 text-[#c7aa79]" />;
      case 'moon':
        return <Moon className="w-4 h-4 text-[#c7aa79]" />;
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-[#c7aa79]" />;
      case 'wind':
        return <Wind className="w-4 h-4 text-[#c7aa79]" />;
      case 'sliders':
        return <Sliders className="w-4 h-4 text-[#c7aa79]" />;
      case 'key':
        return <Key className="w-4 h-4 text-[#c7aa79]" />;
      case 'eye':
        return <Eye className="w-4 h-4 text-[#c7aa79]" />;
      case 'camera':
        return <Camera className="w-4 h-4 text-[#c7aa79]" />;
      case 'bell':
        return <Bell className="w-4 h-4 text-[#c7aa79]" />;
      default:
        return <Lightbulb className="w-4 h-4 text-[#c7aa79]" />;
    }
  };

  return (
    <section id="living-spaces" className="py-20 lg:py-28 bg-[#0a3930] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c7aa79] block mb-2">
            {floor.eyebrow}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F4F1EB] tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            {floor.title}
          </h2>
          <p className="text-sm sm:text-base text-[#d5e0da] leading-relaxed max-w-2xl mx-auto">
            {floor.sub}
          </p>
        </div>

        {/* Room Filter Segmented Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {ROOM_ZONES.map((room) => {
            const isActive = room.id === selectedRoomId;
            return (
              <button
                key={room.id}
                onClick={() => handleSelectRoom(room.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all uppercase ${
                  isActive
                    ? 'bg-[#0f4f3e] text-white shadow-md'
                    : 'bg-[#0a3930] text-[#aabdb5] hover:text-[#F4F1EB] border border-[#F4F1EB]/20 hover:border-[#c7aa79]'
                }`}
              >
                {room.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Interactive Dual-Panel Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Panel: Architectural Schematic Blueprint View (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-[#0a3930] rounded-3xl p-6 sm:p-8 border border-[#F4F1EB]/15 shadow-sm flex flex-col justify-between">
            {/* Blueprint Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#F4F1EB]/15 mb-6">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#8db5a2] font-medium">
                {floor.schematic}
              </span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9dd7c2] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9dd7c2]"></span>
                </span>
                <span className="text-[11px] text-[#d5e0da] font-medium">{floor.liveMapping}</span>
              </div>
            </div>

            {/* Architectural Blueprint Vector Area */}
            <div className="relative w-full aspect-[4/3] bg-[#0d4436] rounded-2xl border-2 border-[#F4F1EB]/20 p-4 overflow-hidden select-none bg-blueprint-grid">
              <svg
                viewBox="0 0 600 450"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer Villa Perimeter Walls */}
                <rect
                  x="20"
                  y="20"
                  width="560"
                  height="410"
                  stroke="#D9D2BE"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />

                {/* Interior Partition Walls */}
                {/* Horizontal Divider */}
                <line x1="20" y1="230" x2="580" y2="230" stroke="#5A6B5E" strokeWidth="3" />
                {/* Vertical Divider for Top Floor (Living Salon vs Master Suite) */}
                <line x1="330" y1="20" x2="330" y2="230" stroke="#5A6B5E" strokeWidth="3" />
                {/* Vertical Divider for Bottom Floor (Kitchen vs Grand Foyer) */}
                <line x1="260" y1="230" x2="260" y2="430" stroke="#5A6B5E" strokeWidth="3" />

                {/* ZONE 1: LIVING SALON (x: 20-330, y: 20-230) */}
                <g
                  onClick={() => handleSelectRoom('living_room')}
                  className="cursor-pointer group"
                >
                  <rect
                    x="25"
                    y="25"
                    width="300"
                    height="200"
                    fill={
                      selectedRoomId === 'living_room'
                        ? 'rgba(226, 190, 118, 0.22)'
                        : 'rgba(255, 255, 255, 0.05)'
                    }
                    className="transition-colors duration-300 group-hover:fill-[rgba(226,190,118,0.15)]"
                  />
                  {/* Subtle dimension marker */}
                  <text
                    x="45"
                    y="60"
                    fill="#aabdb5"
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="600"
                  >
                    {mapLabel('living_room')}
                  </text>
                  {/* Node Pin 1 */}
                  <circle
                    cx="175"
                    cy="125"
                    r={selectedRoomId === 'living_room' ? '18' : '14'}
                    fill={selectedRoomId === 'living_room' ? '#c7aa79' : '#3A4A40'}
                    className="transition-all duration-300"
                  />
                  <text
                    x="175"
                    y="130"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    1
                  </text>
                  {selectedRoomId === 'living_room' && (
                    <circle
                      cx="175"
                      cy="125"
                      r="26"
                      stroke="#c7aa79"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                      className="animate-spin"
                    />
                  )}
                </g>

                {/* ZONE 2: MASTER SUITE (x: 330-580, y: 20-230) */}
                <g
                  onClick={() => handleSelectRoom('master_bedroom')}
                  className="cursor-pointer group"
                >
                  <rect
                    x="335"
                    y="25"
                    width="240"
                    height="200"
                    fill={
                      selectedRoomId === 'master_bedroom'
                        ? 'rgba(226, 190, 118, 0.22)'
                        : 'rgba(255, 255, 255, 0.05)'
                    }
                    className="transition-colors duration-300 group-hover:fill-[rgba(226,190,118,0.15)]"
                  />
                  <text
                    x="355"
                    y="60"
                    fill="#aabdb5"
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="600"
                  >
                    {mapLabel('master_bedroom')}
                  </text>
                  {/* Node Pin 2 */}
                  <circle
                    cx="455"
                    cy="125"
                    r={selectedRoomId === 'master_bedroom' ? '18' : '14'}
                    fill={selectedRoomId === 'master_bedroom' ? '#c7aa79' : '#3A4A40'}
                    className="transition-all duration-300"
                  />
                  <text
                    x="455"
                    y="130"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    2
                  </text>
                  {selectedRoomId === 'master_bedroom' && (
                    <circle
                      cx="455"
                      cy="125"
                      r="26"
                      stroke="#c7aa79"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                      className="animate-spin"
                    />
                  )}
                </g>

                {/* ZONE 3: GOURMET KITCHEN (x: 20-260, y: 230-430) */}
                <g
                  onClick={() => handleSelectRoom('kitchen')}
                  className="cursor-pointer group"
                >
                  <rect
                    x="25"
                    y="235"
                    width="230"
                    height="190"
                    fill={
                      selectedRoomId === 'kitchen'
                        ? 'rgba(226, 190, 118, 0.22)'
                        : 'rgba(255, 255, 255, 0.05)'
                    }
                    className="transition-colors duration-300 group-hover:fill-[rgba(226,190,118,0.15)]"
                  />
                  <text
                    x="45"
                    y="270"
                    fill="#aabdb5"
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="600"
                  >
                    {mapLabel('kitchen')}
                  </text>
                  {/* Node Pin 3 */}
                  <circle
                    cx="140"
                    cy="330"
                    r={selectedRoomId === 'kitchen' ? '18' : '14'}
                    fill={selectedRoomId === 'kitchen' ? '#c7aa79' : '#3A4A40'}
                    className="transition-all duration-300"
                  />
                  <text
                    x="140"
                    y="335"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    3
                  </text>
                  {selectedRoomId === 'kitchen' && (
                    <circle
                      cx="140"
                      cy="330"
                      r="26"
                      stroke="#c7aa79"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                      className="animate-spin"
                    />
                  )}
                </g>

                {/* ZONE 4: GRAND FOYER & GALLERY (x: 260-580, y: 230-430) */}
                <g
                  onClick={() => handleSelectRoom('foyer')}
                  className="cursor-pointer group"
                >
                  <rect
                    x="265"
                    y="235"
                    width="310"
                    height="190"
                    fill={
                      selectedRoomId === 'foyer'
                        ? 'rgba(226, 190, 118, 0.22)'
                        : 'rgba(255, 255, 255, 0.05)'
                    }
                    className="transition-colors duration-300 group-hover:fill-[rgba(226,190,118,0.15)]"
                  />
                  <text
                    x="285"
                    y="270"
                    fill="#aabdb5"
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="600"
                  >
                    {mapLabel('foyer')}
                  </text>
                  {/* Node Pin 4 */}
                  <circle
                    cx="420"
                    cy="330"
                    r={selectedRoomId === 'foyer' ? '18' : '14'}
                    fill={selectedRoomId === 'foyer' ? '#c7aa79' : '#3A4A40'}
                    className="transition-all duration-300"
                  />
                  <text
                    x="420"
                    y="335"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    4
                  </text>
                  {selectedRoomId === 'foyer' && (
                    <circle
                      cx="420"
                      cy="330"
                      r="26"
                      stroke="#c7aa79"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                      className="animate-spin"
                    />
                  )}
                </g>

                {/* Architectural Door Arc indicators */}
                <path
                  d="M 330 200 A 30 30 0 0 0 300 230"
                  stroke="#5F6B64"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                />
                <path
                  d="M 260 200 A 30 30 0 0 1 290 230"
                  stroke="#5F6B64"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                />
              </svg>
            </div>

            {/* Blueprint Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-[#F4F1EB]/15 text-[11px] text-[#aabdb5]">
              <span className="font-mono">{floor.scaleNote}</span>
              <span>{floor.localNote}</span>
            </div>
          </div>

          {/* Right Panel: Active Space Profile Card (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-[#0a3930] rounded-3xl p-6 sm:p-8 border border-[#F4F1EB]/15 shadow-sm flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="mb-4">
                <span className="text-xs font-semibold text-[#c7aa79] uppercase tracking-wider block mb-1">
                  {floor.profileOf} {currentRoom.category}
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#F4F1EB]">
                  {currentRoom.title}
                </h3>
              </div>

              {/* Installed Hardware Nodes List */}
              <div className="mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#aabdb5] block mb-3">
                  {floor.nodesTitle}
                </span>
                <div className="space-y-3">
                  {currentRoom.hardwareNodes.map((node, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-2.5 rounded-xl bg-[#0d4436] border border-[#F4F1EB]/15"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#0a3930] border border-[#F4F1EB]/20 flex items-center justify-center shrink-0">
                        {getHardwareIcon(node.icon)}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#F4F1EB]">{node.title}</h4>
                        <p className="text-[11px] text-[#8db5a2] leading-tight">
                          {node.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Scene Simulation Card */}
              <div className="bg-[#0d4436] rounded-2xl p-4 sm:p-5 border border-[#F4F1EB]/15 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#c7aa79]" />
                    <h4 className="text-xs font-bold text-[#F4F1EB]">
                      {currentScene.name}
                    </h4>
                  </div>
                  {/* Scene cycle button if multiple scenes */}
                  {currentRoom.scenes.length > 1 && (
                    <button
                      onClick={() =>
                        setActiveSceneIndex(
                          (activeSceneIndex + 1) % currentRoom.scenes.length
                        )
                      }
                      className="text-[10px] text-[#c7aa79] hover:text-[#F4F1EB] font-semibold underline"
                    >
                      {floor.switchScene}
                    </button>
                  )}
                </div>

                <p className="text-xs text-[#aabdb5] leading-relaxed">
                  {currentScene.description}
                </p>
              </div>
            </div>

            {/* Profile Footer */}
            <div className="pt-4 border-t border-[#F4F1EB]/15 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-[#d5e0da]">
                <Wifi className="w-4 h-4 text-[#9dd7c2]" />
                <span>{floor.runsLocally}</span>
              </div>
              <button
                onClick={() => setCustomizerOpen(true)}
                className="font-bold text-[#F4F1EB] hover:text-[#c7aa79] flex items-center gap-1.5 transition-colors group"
              >
                <span>{floor.customize}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:-scale-x-100 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Specs Customizer Modal */}
      <Suspense fallback={null}>
        <SpecsCustomizerModal
          room={currentRoom}
          isOpen={customizerOpen}
          onClose={() => setCustomizerOpen(false)}
          onOpenBooking={onOpenBooking}
        />
      </Suspense>
    </section>
  );
};
