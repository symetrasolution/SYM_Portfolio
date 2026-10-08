import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Network, Smartphone, Zap } from 'lucide-react';
import { useContent } from '../i18n/useContent';

const STAGE_ICONS = [
  <Network key="network" className="w-6 h-6 text-[#8B7340]" />,
  <Cpu key="cpu" className="w-6 h-6 text-[#E2BE76]" />,
  <Smartphone key="phone" className="w-6 h-6 text-[#8B7340]" />,
];

export const ArchitectureSection: React.FC = () => {
  const content = useContent();
  const arch = content.architecture;
  const [activeStage, setActiveStage] = useState<number>(2);

  return (
    <section id="architecture" className="py-20 lg:py-28 bg-[#FAF8F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B3934B] block mb-3">
            {arch.eyebrow}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#14231C] tracking-tight mb-5"
            style={{ textWrap: 'balance' }}
          >
            {arch.title}
          </h2>
          <p className="text-sm sm:text-base text-[#4A554E] leading-relaxed max-w-2xl mx-auto">
            {arch.sub}
          </p>
        </div>

        {/* 3 Architecture Stages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {arch.stages.map((stage, idx) => {
            const num = idx + 1;
            const isActive = activeStage === num;
            if (num === 2) {
              return (
                <motion.div
                  key={num}
                  whileHover={{ y: -4 }}
                  onClick={() => setActiveStage(num)}
                  className={`bg-[#0E2018] rounded-3xl p-8 border cursor-pointer transition-all flex flex-col justify-between text-white relative shadow-xl ${
                    isActive
                      ? 'border-[#E2BE76] ring-2 ring-[#E2BE76]/40'
                      : 'border-[#1C3228] hover:border-[#28493A]'
                  }`}
                >
                  <div className="absolute top-0 end-0 -me-16 -mt-16 w-48 h-48 rounded-full bg-[#E2BE76]/10 blur-3xl pointer-events-none" />

                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#172E23] border border-[#2B4B3B] flex items-center justify-center text-[#E2BE76] mb-6">
                      {STAGE_ICONS[idx]}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#E2BE76]">
                        {stage.label}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 font-serif">
                      {stage.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#B4C2BB] leading-relaxed mb-6">
                      {stage.body}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#1C3228]">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#172E23] border border-[#2B4B3B] text-[11px] font-semibold text-[#E2BE76]">
                      <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
                      <span>{'badge' in stage && stage.badge ? stage.badge : ''}</span>
                    </div>
                  </div>
                </motion.div>
              );
            }
            return (
              <motion.div
                key={num}
                whileHover={{ y: -4 }}
                onClick={() => setActiveStage(num)}
                className={`bg-white rounded-3xl p-8 border cursor-pointer transition-all flex flex-col justify-between ${
                  isActive
                    ? 'border-[#B3934B] shadow-lg ring-1 ring-[#B3934B]/50'
                    : 'border-[#E8E4DA] shadow-sm hover:border-[#D1CABE]'
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F6F4EE] border border-[#E8E2D5] flex items-center justify-center text-[#14231C] mb-6">
                    {STAGE_ICONS[idx]}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#858E87] block mb-2">
                    {stage.label}
                  </span>
                  <h3 className="text-xl font-bold text-[#14231C] mb-3 font-serif">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C6660] leading-relaxed mb-6">
                    {stage.body}
                  </p>
                </div>

                {stage.tags.length > 0 && (
                  <div className="pt-6 border-t border-[#F2EFE8] flex flex-wrap gap-2">
                    {stage.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-medium text-[#4A554E] bg-[#F7F5EE] border border-[#E8E2D5] rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Live Signal Flow Indicator Bar */}
        <div className="mt-10 p-4 bg-[#F2EFE7] rounded-2xl border border-[#E2DDD0] flex flex-wrap items-center justify-between gap-4 text-xs text-[#5C6660]">
          <div className="flex items-center gap-2 font-medium">
            <Zap className="w-4 h-4 text-[#B3934B] shrink-0" />
            <span>{arch.flowText}</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="font-mono text-[#14231C]">{arch.flowHub}</span>
            <span className="font-mono text-[#14231C]">{arch.flowRemote}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
