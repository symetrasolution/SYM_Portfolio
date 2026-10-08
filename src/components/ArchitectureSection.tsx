import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Network, Smartphone, Sliders, CheckCircle2, Zap } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(2);

  return (
    <section id="architecture" className="py-20 lg:py-28 bg-[#FAF8F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B3934B] block mb-3">
            The Architecture
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#14231C] tracking-tight mb-5"
            style={{ textWrap: 'balance' }}
          >
            An integrated intelligence that lives entirely under your roof.
          </h2>
          <p className="text-sm sm:text-base text-[#4A554E] leading-relaxed max-w-2xl mx-auto">
            Symetra removes the fragile remote cloud. Hardware communicates directly with an on-premises neural processor for unmatched privacy and speed.
          </p>
        </div>

        {/* 3 Architecture Stages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Stage 01: Integrated Devices */}
          <motion.div
            whileHover={{ y: -4 }}
            onClick={() => setActiveStage(1)}
            className={`bg-white rounded-3xl p-8 border cursor-pointer transition-all flex flex-col justify-between ${
              activeStage === 1
                ? 'border-[#B3934B] shadow-lg ring-1 ring-[#B3934B]/50'
                : 'border-[#E8E4DA] shadow-sm hover:border-[#D1CABE]'
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F6F4EE] border border-[#E8E2D5] flex items-center justify-center text-[#14231C] mb-6">
                <Network className="w-6 h-6 text-[#8B7340]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#858E87] block mb-2">
                Stage 01
              </span>
              <h3 className="text-xl font-bold text-[#14231C] mb-3 font-serif">
                Integrated Devices
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6660] leading-relaxed mb-6">
                Lighting, Curtains, Sensors, Locks, Cameras, and Climate nodes communicating via ultra-resilient low-voltage mesh protocols.
              </p>
            </div>

            <div className="pt-6 border-t border-[#F2EFE8] flex flex-wrap gap-2">
              <span className="px-2.5 py-1 text-[11px] font-medium text-[#4A554E] bg-[#F7F5EE] border border-[#E8E2D5] rounded-md">
                KNX
              </span>
              <span className="px-2.5 py-1 text-[11px] font-medium text-[#4A554E] bg-[#F7F5EE] border border-[#E8E2D5] rounded-md">
                DALI-2
              </span>
              <span className="px-2.5 py-1 text-[11px] font-medium text-[#4A554E] bg-[#F7F5EE] border border-[#E8E2D5] rounded-md">
                Zigbee
              </span>
              <span className="px-2.5 py-1 text-[11px] font-medium text-[#4A554E] bg-[#F7F5EE] border border-[#E8E2D5] rounded-md">
                Matter
              </span>
            </div>
          </motion.div>

          {/* Stage 02: Core Engine (Hero Dark Forest Card) */}
          <motion.div
            whileHover={{ y: -4 }}
            onClick={() => setActiveStage(2)}
            className={`bg-[#0E2018] rounded-3xl p-8 border cursor-pointer transition-all flex flex-col justify-between text-white relative shadow-xl ${
              activeStage === 2
                ? 'border-[#E2BE76] ring-2 ring-[#E2BE76]/40'
                : 'border-[#1C3228] hover:border-[#28493A]'
            }`}
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-[#E2BE76]/10 blur-3xl pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#172E23] border border-[#2B4B3B] flex items-center justify-center text-[#E2BE76] mb-6">
                <Cpu className="w-6 h-6 text-[#E2BE76]" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E2BE76]">
                  Stage 02 • Core Engine
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-serif">
                Smart Brain Inside Your Home
              </h3>
              <p className="text-xs sm:text-sm text-[#B4C2BB] leading-relaxed mb-6">
                Local Central Controller &amp; Neural Bridge. Operates 24/7 with zero dependence on external cloud servers and an instantaneous 10ms response time.
              </p>
            </div>

            <div className="pt-6 border-t border-[#1C3228]">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#172E23] border border-[#2B4B3B] text-[11px] font-semibold text-[#E2BE76]">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
                <span>100% In-Villa Local Compute</span>
              </div>
            </div>
          </motion.div>

          {/* Stage 03: Unified Control */}
          <motion.div
            whileHover={{ y: -4 }}
            onClick={() => setActiveStage(3)}
            className={`bg-white rounded-3xl p-8 border cursor-pointer transition-all flex flex-col justify-between ${
              activeStage === 3
                ? 'border-[#B3934B] shadow-lg ring-1 ring-[#B3934B]/50'
                : 'border-[#E8E4DA] shadow-sm hover:border-[#D1CABE]'
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F6F4EE] border border-[#E8E2D5] flex items-center justify-center text-[#14231C] mb-6">
                <Smartphone className="w-6 h-6 text-[#8B7340]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#858E87] block mb-2">
                Stage 03
              </span>
              <h3 className="text-xl font-bold text-[#14231C] mb-3 font-serif">
                Unified Control
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6660] leading-relaxed mb-6">
                Tactile brushed metal wall touchscreens, bespoke micro-toggles, and iOS/Android control via secure end-to-end encrypted direct peer connections.
              </p>
            </div>

            <div className="pt-6 border-t border-[#F2EFE8] flex flex-wrap gap-2">
              <span className="px-2.5 py-1 text-[11px] font-medium text-[#4A554E] bg-[#F7F5EE] border border-[#E8E2D5] rounded-md">
                Wall Panels
              </span>
              <span className="px-2.5 py-1 text-[11px] font-medium text-[#4A554E] bg-[#F7F5EE] border border-[#E8E2D5] rounded-md">
                Private Mobile App
              </span>
            </div>
          </motion.div>
        </div>

        {/* Live Signal Flow Indicator Bar */}
        <div className="mt-10 p-4 bg-[#F2EFE7] rounded-2xl border border-[#E2DDD0] flex flex-wrap items-center justify-between gap-4 text-xs text-[#5C6660]">
          <div className="flex items-center gap-2 font-medium">
            <Zap className="w-4 h-4 text-[#B3934B]" />
            <span>Local Neural Bus Active: Zero cloud hops between physical switch press and DALI-2 luminaire dimming.</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="font-mono text-[#14231C]">Protocol: RS-485 / KNX Twisted Pair</span>
            <span className="font-mono text-[#14231C]">Encryption: AES-256 Hardware Enclave</span>
          </div>
        </div>
      </div>
    </section>
  );
};
