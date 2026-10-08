import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sliders, Check, Cpu, Zap, Volume2, ShieldAlert, Sparkles } from 'lucide-react';
import { RoomZone } from '../types';

interface SpecsCustomizerModalProps {
  room: RoomZone;
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const SpecsCustomizerModal: React.FC<SpecsCustomizerModalProps> = ({
  room,
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [circuits, setCircuits] = useState<number>(room.circuits);
  const [cctTunable, setCctTunable] = useState<boolean>(true);
  const [motorizedTracks, setMotorizedTracks] = useState<number>(2);
  const [radarSensors, setRadarSensors] = useState<number>(2);
  const [audioZones, setAudioZones] = useState<number>(1);
  const [selectedProtocol, setSelectedProtocol] = useState<'DALI-2' | 'KNX'>('DALI-2');
  const [saved, setSaved] = useState<boolean>(false);

  if (!isOpen) return null;

  // Real-time calculated specs
  const estimatedResponseTime = selectedProtocol === 'DALI-2' ? '8.4ms' : '9.8ms';
  const estimatedPowerIdle = (circuits * 0.4 + motorizedTracks * 1.2 + radarSensors * 0.8).toFixed(1);

  const handleApply = () => {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0C1612]/75 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          className="relative w-full max-w-xl bg-[#FCFBF8] rounded-2xl shadow-2xl border border-[#E8E2D5] overflow-hidden my-6 z-10 p-6 sm:p-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#E8E4DA] mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B3934B]">
                Hardware Node Specification
              </span>
              <h3 className="text-xl font-serif font-bold text-[#14231C] mt-0.5">
                Customize {room.name} Hardware
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#EFECE3] hover:bg-[#E5E1D5] flex items-center justify-center text-[#4A554E]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Configurator Controls */}
          <div className="space-y-5 mb-6">
            {/* Protocol Selector */}
            <div>
              <label className="block text-xs font-semibold text-[#14231C] mb-2 uppercase tracking-wide">
                Primary Fieldbus Protocol
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProtocol('DALI-2')}
                  className={`py-2 px-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                    selectedProtocol === 'DALI-2'
                      ? 'bg-[#14231C] text-white border-[#14231C]'
                      : 'bg-white text-[#4A554E] border-[#DDD7C8]'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>DALI-2 Broadcast &amp; Addressed</span>
                    {selectedProtocol === 'DALI-2' && <Check className="w-3.5 h-3.5 text-[#E2BE76]" />}
                  </div>
                  <span className="text-[10px] opacity-75 font-normal block mt-0.5">
                    0.1% Natural Logarithmic Dimming
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedProtocol('KNX')}
                  className={`py-2 px-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                    selectedProtocol === 'KNX'
                      ? 'bg-[#14231C] text-white border-[#14231C]'
                      : 'bg-white text-[#4A554E] border-[#DDD7C8]'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>KNX Secure Twisted Pair</span>
                    {selectedProtocol === 'KNX' && <Check className="w-3.5 h-3.5 text-[#E2BE76]" />}
                  </div>
                  <span className="text-[10px] opacity-75 font-normal block mt-0.5">
                    Standard Industrial DIN-Rail Bus
                  </span>
                </button>
              </div>
            </div>

            {/* Lighting Circuits Slider */}
            <div>
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="font-semibold text-[#14231C]">Independent Lighting Circuits</span>
                <span className="font-mono font-bold text-[#8B7340]">{circuits} Circuits</span>
              </div>
              <input
                type="range"
                min="8"
                max="48"
                step="2"
                value={circuits}
                onChange={(e) => setCircuits(Number(e.target.value))}
                className="w-full accent-[#14231C] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#858E87] mt-1">
                <span>8 Min (Cove + Downlight)</span>
                <span>48 Max (Accent + Art Framing)</span>
              </div>
            </div>

            {/* Circadian Tunable White Toggle */}
            <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-[#E2DDD0]">
              <div>
                <span className="text-xs font-bold text-[#14231C] block">
                  Circadian Tunable CCT White (1800K - 6500K)
                </span>
                <span className="text-[11px] text-[#6B756E]">
                  Automatic biological sun-tracking circadian curves
                </span>
              </div>
              <button
                type="button"
                onClick={() => setCctTunable(!cctTunable)}
                className={`w-11 h-6 rounded-full transition-colors p-0.5 ${
                  cctTunable ? 'bg-[#14231C]' : 'bg-[#DDD7C8]'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    cctTunable ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Motorized Drapes & Radar Counts */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-white rounded-xl border border-[#E2DDD0]">
                <span className="text-xs font-semibold text-[#14231C] block mb-1">
                  Motorized Tracks
                </span>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold font-mono text-[#14231C]">
                    {motorizedTracks} Tracks
                  </span>
                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => setMotorizedTracks(Math.max(1, motorizedTracks - 1))}
                      className="w-6 h-6 rounded bg-[#F2EFE7] hover:bg-[#E5E1D5] font-bold text-xs"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      onClick={() => setMotorizedTracks(Math.min(6, motorizedTracks + 1))}
                      className="w-6 h-6 rounded bg-[#F2EFE7] hover:bg-[#E5E1D5] font-bold text-xs"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-[#E2DDD0]">
                <span className="text-xs font-semibold text-[#14231C] block mb-1">
                  mmWave Radars
                </span>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold font-mono text-[#14231C]">
                    {radarSensors} Units
                  </span>
                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => setRadarSensors(Math.max(1, radarSensors - 1))}
                      className="w-6 h-6 rounded bg-[#F2EFE7] hover:bg-[#E5E1D5] font-bold text-xs"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      onClick={() => setRadarSensors(Math.min(4, radarSensors + 1))}
                      className="w-6 h-6 rounded bg-[#F2EFE7] hover:bg-[#E5E1D5] font-bold text-xs"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Computed Metrics Card */}
          <div className="p-3.5 bg-[#F4F1EA] rounded-xl border border-[#E2DDD0] mb-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <span className="text-[#858E87] block text-[11px]">Bus Response</span>
              <span className="font-bold text-[#14231C] font-mono">{estimatedResponseTime}</span>
            </div>
            <div>
              <span className="text-[#858E87] block text-[11px]">Standby Power</span>
              <span className="font-bold text-[#14231C] font-mono">{estimatedPowerIdle} W</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-[#858E87] block text-[11px]">DIN Enclosure</span>
              <span className="font-bold text-[#14231C]">Custom 24-Module</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleApply}
              className="w-full sm:flex-1 py-3 px-5 bg-[#14231C] hover:bg-[#1E332A] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
            >
              {saved ? (
                <>
                  <Check className="w-4 h-4 text-[#22C55E]" />
                  <span>Specs Updated</span>
                </>
              ) : (
                <span>Save To Villa Profile</span>
              )}
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full sm:w-auto py-3 px-5 bg-[#E2BE76] hover:bg-[#D4AF63] text-[#14231C] text-xs font-bold uppercase tracking-wider rounded-xl transition-all whitespace-nowrap"
            >
              Request Engineering Review
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
