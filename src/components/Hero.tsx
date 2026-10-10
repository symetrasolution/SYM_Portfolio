import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useContent } from '../i18n/useContent';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const content = useContent();
  const hero = content.hero;
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const reduceMotion = useReducedMotion();

  return (
    <section ref={heroRef} className="relative overflow-hidden">
      {/* Full-bleed cinematic backdrop */}
      <div className="absolute inset-0">
        <motion.picture
          style={reduceMotion ? undefined : { y: imageY, scale: imageScale }}
          className="block w-full h-[112%] will-change-transform"
        >
          <source
            type="image/webp"
            srcSet={`${content.site.heroImageWebp.small} 640w, ${content.site.heroImageWebp.large} 1280w`}
            sizes="100vw"
          />
          <img
            src={content.site.heroImage}
            alt={hero.imgAlt}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.picture>
        {/* Cinematic scrims: legibility top (nav) and bottom (copy) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#062b24]/80 via-[#062b24]/20 to-[#062b24] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#062b24]/70 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-blueprint-grid opacity-60 pointer-events-none" />
      </div>

      {/* Copy block */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 sm:pt-52 lg:pt-64 pb-16 lg:pb-24 min-h-[92svh] flex flex-col justify-end">
        <motion.div
          style={reduceMotion ? undefined : { y: contentY, opacity: fade }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-10 bg-[#F4F1EB]"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#c7aa79]">
              {hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold text-[#F4F1EB] tracking-tight leading-[1.02] mb-6"
            style={{ textWrap: 'balance' }}
          >
            {hero.titleStart}{' '}
            <span className="italic text-[#c7aa79]">{hero.titleAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#d5e0da] leading-relaxed max-w-2xl mb-10"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-[#F4F1EB] hover:bg-white active:scale-[0.99] text-[#062b24] text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-[0_8px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_48px_rgba(0,0,0,0.45)] flex items-center justify-center gap-2.5 group"
            >
              <span>{hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4 rtl:-scale-x-100 transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </button>

            <a
              href="#architecture"
              className="px-8 py-4 border border-[#F4F1EB]/25 hover:border-[#c7aa79]/60 text-[#F4F1EB] text-xs font-bold uppercase tracking-wider rounded-full transition-colors flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <span>{hero.secondaryCta}</span>
              <ChevronDown className="w-4 h-4 text-[#c7aa79]" />
            </a>
          </motion.div>

          {/* Quiet status line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#8db5a2]"
          >
            <span className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9dd7c2] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9dd7c2]"></span>
              </span>
              <span className="font-semibold text-[#F4F1EB]">{hero.liveTitle}</span>
            </span>
            <span>{hero.liveSub}</span>
            <span className="hidden sm:inline text-[#c7aa79]">·</span>
            <span className="hidden sm:inline">{hero.offlineBadge}</span>
            <span className="hidden sm:inline text-[#c7aa79]">·</span>
            <span className="hidden sm:inline">{hero.vpnBadge}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Editorial strip: the old pain cards, unboxed */}
      <div className="relative border-t border-[#F4F1EB]/15 bg-[#062b24]/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
          {hero.cards.map((card, i) => (
            <div key={i} className="flex gap-5">
              <span className="font-serif italic text-3xl text-[#c7aa79]/70 leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-base font-bold text-[#F4F1EB] mb-1.5 font-serif text-xl">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#aabdb5] leading-relaxed">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
