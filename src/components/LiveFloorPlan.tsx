import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Lightbulb,
  Radar,
  Volume2,
  Blinds,
  Moon,
  Sparkles,
  Thermometer,
  ShieldAlert,
  ArrowRight,
  Sliders,
  Wind,
  Key,
  Eye,
  Frame,
  Bell,
  Cpu,
} from 'lucide-react';
import { ROOM_ZONES } from '../content/rooms';
import { RoomZone } from '../types';
import { SpecsCustomizerModal } from './SpecsCustomizerModal';

interface LiveFloorPlanProps {
  onOpenBooking: () => void;
}

export const LiveFloorPlan: React.FC<LiveFloorPlanProps> = ({ onOpenBooking }) => {
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

  const getHardwareIcon = (iconName: string) => {
    switch (iconName) {
      case 'lightbulb':
        return <Lightbulb className="w-4 h-4 text-[#8B7340]" />;
      case 'blinds':
        return <Blinds className="w-4 h-4 text-[#8B7340]" />;
      case 'radar':
        return <Radar className="w-4 h-4 text-[#8B7340]" />;
      case 'volume-2':
        return <Volume2 className="w-4 h-4 text-[#8B7340]" />;
      case 'moon':
        return <Moon className="w-4 h-4 text-[#8B7340]" />;
      case 'thermometer':
        return <Thermometer className="w-4 h-4 text-[#8B7340]" />;
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-[#8B7340]" />;
      case 'wind':
        return <Wind className="w-4 h-4 text-[#8B7340]" />;
      case 'shield-alert':
        return <ShieldAlert className="w-4 h-4 text-[#8B7340]" />;
      case 'sliders':
        return <Sliders className="w-4 h-4 text-[#8B7340]" />;
      case 'key':
        return <Key className="w-4 h-4 text-[#8B7340]" />;
      case 'eye':
        return <Eye className="w-4 h-4 text-[#8B7340]" />;
      case 'frame':
        return <Frame className="w-4 h-4 text-[#8B7340]" />;
      case 'bell':
        return <Bell className="w-4 h-4 text-[#8B7340]" />;
      default:
        return <Lightbulb className="w-4 h-4 text-[#8B7340]" />;
    }
  };

  return (
    <section id="living-spaces" className="py-20 lg:py-28 bg-[#F5F2EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B3934B] block mb-2">
            Live Floor Plan
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#14231C] tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Explore by Living Space
          </h2>
          <p className="text-sm sm:text-base text-[#4A554E] leading-relaxed max-w-2xl mx-auto">
            Select any room to preview active automation sequences, hardware nodes, and responsive ambient behaviors.
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
                    ? 'bg-[#14231C] text-white shadow-md'
                    : 'bg-white text-[#5C6660] hover:text-[#14231C] border border-[#DDD7C8] hover:border-[#B3934B]'
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
          <div className="lg:col-span-7 bg-[#FCFBF8] rounded-3xl p-6 sm:p-8 border border-[#E2DDD0] shadow-sm flex flex-col justify-between">
            {/* Blueprint Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#EAE6DC] mb-6">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#6B756E] font-medium">
                ARCHITECTURAL SCHEMATIC PLAN — LEVEL 01
              </span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
                </span>
                <span className="text-[11px] text-[#4A554E] font-medium">Live Node Mapping</span>
              </div>
            </div>

            {/* Architectural Blueprint Vector Area */}
            <div className="relative w-full aspect-[4/3] bg-[#F7F5EE] rounded-2xl border-2 border-[#D8D2C2] p-4 overflow-hidden select-none bg-blueprint-grid">
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
                  stroke="#2C3B32"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />

                {/* Interior Partition Walls */}
                {/* Horizontal Divider */}
                <line x1="20" y1="230" x2="580" y2="230" stroke="#4A5A50" strokeWidth="3" />
                {/* Vertical Divider for Top Floor (Living Salon vs Master Suite) */}
                <line x1="330" y1="20" x2="330" y2="230" stroke="#4A5A50" strokeWidth="3" />
                {/* Vertical Divider for Bottom Floor (Kitchen vs Grand Foyer) */}
                <line x1="260" y1="230" x2="260" y2="430" stroke="#4A5A50" strokeWidth="3" />

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
                        : 'rgba(245, 243, 237, 0.6)'
                    }
                    className="transition-colors duration-300 group-hover:fill-[rgba(226,190,118,0.15)]"
                  />
                  {/* Subtle dimension marker */}
                  <text
                    x="45"
                    y="60"
                    fill="#3F4D44"
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="600"
                  >
                    LIVING SALON (58m²)
                  </text>
                  {/* Node Pin 1 */}
                  <circle
                    cx="175"
                    cy="125"
                    r={selectedRoomId === 'living_room' ? '18' : '14'}
                    fill={selectedRoomId === 'living_room' ? '#B3934B' : '#14231C'}
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
                      stroke="#B3934B"
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
                        : 'rgba(245, 243, 237, 0.6)'
                    }
                    className="transition-colors duration-300 group-hover:fill-[rgba(226,190,118,0.15)]"
                  />
                  <text
                    x="355"
                    y="60"
                    fill="#3F4D44"
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="600"
                  >
                    MASTER SUITE (42m²)
                  </text>
                  {/* Node Pin 2 */}
                  <circle
                    cx="455"
                    cy="125"
                    r={selectedRoomId === 'master_bedroom' ? '18' : '14'}
                    fill={selectedRoomId === 'master_bedroom' ? '#B3934B' : '#14231C'}
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
                      stroke="#B3934B"
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
                        : 'rgba(245, 243, 237, 0.6)'
                    }
                    className="transition-colors duration-300 group-hover:fill-[rgba(226,190,118,0.15)]"
                  />
                  <text
                    x="45"
                    y="270"
                    fill="#3F4D44"
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="600"
                  >
                    GOURMET KITCHEN (26m²)
                  </text>
                  {/* Node Pin 3 */}
                  <circle
                    cx="140"
                    cy="330"
                    r={selectedRoomId === 'kitchen' ? '18' : '14'}
                    fill={selectedRoomId === 'kitchen' ? '#B3934B' : '#14231C'}
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
                      stroke="#B3934B"
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
                        : 'rgba(245, 243, 237, 0.6)'
                    }
                    className="transition-colors duration-300 group-hover:fill-[rgba(226,190,118,0.15)]"
                  />
                  <text
                    x="285"
                    y="270"
                    fill="#3F4D44"
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="600"
                  >
                    GRAND FOYER & GALLERY (34m²)
                  </text>
                  {/* Node Pin 4 */}
                  <circle
                    cx="420"
                    cy="330"
                    r={selectedRoomId === 'foyer' ? '18' : '14'}
                    fill={selectedRoomId === 'foyer' ? '#B3934B' : '#14231C'}
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
                      stroke="#B3934B"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                      className="animate-spin"
                    />
                  )}
                </g>

                {/* Architectural Door Arc indicators */}
                <path
                  d="M 330 200 A 30 30 0 0 0 300 230"
                  stroke="#7A867F"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                />
                <path
                  d="M 260 200 A 30 30 0 0 1 290 230"
                  stroke="#7A867F"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                />
              </svg>
            </div>

            {/* Blueprint Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-[#EAE6DC] text-[11px] text-[#7A867F]">
              <span className="font-mono">Scale 1:50 Architectural Metric</span>
              <span>Continuous Local Mesh Connectivity</span>
            </div>
          </div>

          {/* Right Panel: Active Space Profile Card (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-[#FCFBF8] rounded-3xl p-6 sm:p-8 border border-[#E2DDD0] shadow-sm flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="mb-4">
                <span className="text-xs font-semibold text-[#8B7340] uppercase tracking-wider block mb-1">
                  Active Space Profile / {currentRoom.category}
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#14231C]">
                  {currentRoom.title}
                </h3>
              </div>

              {/* Installed Hardware Nodes List */}
              <div className="mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A867F] block mb-3">
                  Installed Hardware Nodes
                </span>
                <div className="space-y-3">
                  {currentRoom.hardwareNodes.map((node, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-2.5 rounded-xl bg-[#F7F5EE] border border-[#EAE6DC]"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#DDD7C8] flex items-center justify-center shrink-0">
                        {getHardwareIcon(node.icon)}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#14231C]">{node.title}</h4>
                        <p className="text-[11px] text-[#6B756E] leading-tight">
                          {node.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Scene Simulation Card */}
              <div className="bg-[#F7F4EB] rounded-2xl p-4 sm:p-5 border border-[#E2DDD0] mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#8B7340]" />
                    <h4 className="text-xs font-bold text-[#14231C]">
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
                      className="text-[10px] text-[#8B7340] hover:text-[#14231C] font-semibold underline"
                    >
                      Switch Scene
                    </button>
                  )}
                </div>

                <p className="text-xs text-[#5C6660] leading-relaxed mb-4">
                  {currentScene.description}
                </p>

                {/* Scene Real-Time Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#E4DEC9] text-center text-xs">
                  <div className="bg-white/80 p-2 rounded-lg border border-[#E8E2D5]">
                    <span className="text-[10px] text-[#7A867F] block">Dimming</span>
                    <span className="font-mono font-bold text-[#14231C]">
                      {currentScene.dimming}
                    </span>
                  </div>
                  <div className="bg-white/80 p-2 rounded-lg border border-[#E8E2D5]">
                    <span className="text-[10px] text-[#7A867F] block">Temp</span>
                    <span className="font-mono font-bold text-[#14231C]">
                      {currentScene.temperature}
                    </span>
                  </div>
                  <div className="bg-white/80 p-2 rounded-lg border border-[#E8E2D5]">
                    <span className="text-[10px] text-[#7A867F] block">Circuits</span>
                    <span className="font-mono font-bold text-[#14231C]">
                      {currentRoom.circuits} Active
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Footer */}
            <div className="pt-4 border-t border-[#EAE6DC] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-[#4A554E]">
                <Cpu className="w-4 h-4 text-[#2E7D32]" />
                <span>Response Latency: {currentRoom.latency}</span>
              </div>
              <button
                onClick={() => setCustomizerOpen(true)}
                className="font-bold text-[#14231C] hover:text-[#8B7340] flex items-center gap-1.5 transition-colors group"
              >
                <span>Customize Specs</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Specs Customizer Modal */}
      <SpecsCustomizerModal
        room={currentRoom}
        isOpen={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
};
