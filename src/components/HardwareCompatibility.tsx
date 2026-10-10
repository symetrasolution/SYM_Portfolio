import React from 'react';
import { motion } from 'motion/react';
import {
  Lightbulb,
  Blinds,
  Activity,
  Camera,
  Lock,
  ToggleLeft,
  Network,
  Sliders,
  Wind,
  Radio,
} from 'lucide-react';
import { useContent } from '../i18n/useContent';

export const HardwareCompatibility: React.FC = () => {
  const content = useContent();
  const hw = content.hardware;
  const HARDWARE_CATEGORIES = hw.categories;
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'lightbulb':
        return <Lightbulb className="w-5 h-5 text-[#c7aa79]" />;
      case 'blinds':
        return <Blinds className="w-5 h-5 text-[#c7aa79]" />;
      case 'activity':
        return <Activity className="w-5 h-5 text-[#c7aa79]" />;
      case 'camera':
        return <Camera className="w-5 h-5 text-[#c7aa79]" />;
      case 'lock':
        return <Lock className="w-5 h-5 text-[#c7aa79]" />;
      case 'toggle-left':
        return <ToggleLeft className="w-5 h-5 text-[#c7aa79]" />;
      case 'network':
        return <Network className="w-5 h-5 text-[#c7aa79]" />;
      case 'sliders':
        return <Sliders className="w-5 h-5 text-[#c7aa79]" />;
      case 'wind':
        return <Wind className="w-5 h-5 text-[#c7aa79]" />;
      default:
        return <Radio className="w-5 h-5 text-[#c7aa79]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0a3930] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Badges on the right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c7aa79] block mb-2">
              {hw.eyebrow}
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F4F1EB] tracking-tight mb-4"
              style={{ textWrap: 'balance' }}
            >
              {hw.title}
            </h2>
            <p className="text-sm sm:text-base text-[#d5e0da] leading-relaxed">
              {hw.sub}
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2.5">
            <span className="px-3.5 py-1.5 rounded-full bg-[#0f4f3e] border border-[#3A4A40] text-[11px] font-semibold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9dd7c2]"></span>
              <span>{hw.builtOn}</span>
            </span>

            <span className="px-3.5 py-1.5 rounded-full bg-[#0e4a3a] border border-[#F4F1EB]/20 text-[11px] font-semibold text-[#d5e0da] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c7aa79]"></span>
              <span>{hw.addons}</span>
            </span>
          </div>
        </div>

        {/* Hardware Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HARDWARE_CATEGORIES.map((category, index) => {
            const isRoadmap = category.status === 'roadmap';
            return (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className={`rounded-3xl p-7 border shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${
                  isRoadmap
                    ? 'bg-[#0d4436] border-dashed border-[#F4F1EB]/25'
                    : 'bg-[#0a3930] border-[#F4F1EB]/15'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-[#0e4a3a] border border-[#F4F1EB]/15 flex items-center justify-center">
                      {getCategoryIcon(category.icon)}
                    </div>
                    {isRoadmap && (
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#c7aa79] bg-[#EDE7D6] border border-[#DDD2B8] px-2 py-1 rounded-md">
                        {hw.roadmapBadge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#F4F1EB] mb-2.5 font-serif">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#aabdb5] leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                {category.protocols.length > 0 && (
                  <div className="pt-4 border-t border-[#F4F1EB]/15 flex flex-wrap gap-1.5">
                    {category.protocols.map((protocol, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-2 py-0.5 text-[10px] font-medium bg-[#0d4436] border border-[#F4F1EB]/15 text-[#d5e0da] rounded-md"
                      >
                        {protocol}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
