import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Network, Smartphone, Zap } from 'lucide-react';
import { useContent } from '../i18n/useContent';

const STAGE_ICONS = [
  <Network key="network" className="w-6 h-6 text-[#0D4C3C]" />,
  <Cpu key="cpu" className="w-6 h-6 text-[#9dd7c2]" />,
  <Smartphone key="phone" className="w-6 h-6 text-[#0D4C3C]" />,
];

export const ArchitectureSection: React.FC = () => {
  const content = useContent();
  const arch = content.architecture;
  const [activeStage, setActiveStage] = useState<number>(2);

  return (
    <section id="architecture" className="py-20 lg:py-28 bg-[#F4F1EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#508876] block mb-3">
            {arch.eyebrow}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-[#142d28] tracking-tight mb-5"
            style={{ textWrap: 'balance' }}
          >
            {arch.title}
          </h2>
          <p className="text-sm sm:text-base text-[#476058] leading-relaxed max-w-2xl mx-auto">
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
                  className={`bg-[#0D4C3C] rounded-3xl p-8 border cursor-pointer transition-all flex flex-col justify-between text-white relative shadow-xl ${
                    isActive
                      ? 'border-[#9dd7c2] ring-2 ring-[#9dd7c2]/40'
                      : 'border-[#0D4C3C] hover:border-[#9dd7c2]/40'
                  }`}
                >
                  <div className="absolute top-0 end-0 -me-16 -mt-16 w-48 h-48 rounded-full bg-[#9dd7c2]/10 blur-3xl pointer-events-none" />

                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-6">
                      {STAGE_ICONS[idx]}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#9dd7c2]">
                        {stage.label}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9dd7c2]"></span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 font-serif">
                      {stage.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F4F1EB]/80 leading-relaxed mb-6">
                      {stage.body}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/15">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold text-[#9dd7c2]">
                      <span className="w-2 h-2 rounded-full bg-[#9dd7c2] animate-pulse"></span>
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
                    ? 'border-[#c7aa79] shadow-lg ring-1 ring-[#c7aa79]/50'
                    : 'border-[#142d28]/10 shadow-sm hover:border-[#142d28]/25'
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#e9e4d9] border border-[#142d28]/10 flex items-center justify-center mb-6">
                    {STAGE_ICONS[idx]}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#8db5a2] block mb-2">
                    {stage.label}
                  </span>
                  <h3 className="text-xl font-bold text-[#142d28] mb-3 font-serif">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#476058] leading-relaxed mb-6">
                    {stage.body}
                  </p>
                </div>

                {stage.tags.length > 0 && (
                  <div className="pt-6 border-t border-[#142d28]/10 flex flex-wrap gap-2">
                    {stage.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-medium text-[#3d5a50] bg-[#e9e4d9] border border-[#142d28]/10 rounded-md"
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

        {/* Signal Flow Indicator Bar */}
        <div className="mt-10 p-4 bg-white rounded-2xl border border-[#142d28]/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#476058]">
          <div className="flex items-center gap-2 font-medium">
            <Zap className="w-4 h-4 text-[#c7aa79] shrink-0" />
            <span>{arch.flowText}</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="font-mono text-[#142d28]">{arch.flowHub}</span>
            <span className="font-mono text-[#142d28]">{arch.flowRemote}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
