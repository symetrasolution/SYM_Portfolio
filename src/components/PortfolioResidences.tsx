import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ResidenceProject } from '../types';
import { useContent } from '../i18n/useContent';
import { ResponsiveImage } from './ResponsiveImage';
import { X, ArrowRight } from 'lucide-react';

interface PortfolioResidencesProps {
  onOpenBooking: () => void;
}

export const PortfolioResidences: React.FC<PortfolioResidencesProps> = ({ onOpenBooking }) => {
  const content = useContent();
  const pf = content.projects;
  const RESIDENCE_PROJECTS: ResidenceProject[] = pf.items;
  const [selectedResidence, setSelectedResidence] = useState<ResidenceProject | null>(null);

  useEffect(() => {
    if (!selectedResidence) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedResidence(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedResidence]);

  return (
    <section id="residences" className="py-20 lg:py-28 bg-[#062b24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c7aa79] block mb-2">
              {pf.eyebrow}
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F4F1EB] tracking-tight mb-4"
              style={{ textWrap: 'balance' }}
            >
              {pf.title}
            </h2>
            <p className="text-sm sm:text-base text-[#d5e0da] leading-relaxed">
              {pf.sub}
            </p>
          </div>

          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#aabdb5] uppercase bg-[#0a3930] px-4 py-2 rounded-full border border-[#F4F1EB]/20">
              {pf.pill}
            </span>
          </div>
        </div>

        {/* 3 Residence Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESIDENCE_PROJECTS.map((residence) => (
            <motion.div
              key={residence.id}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedResidence(residence)}
              className="bg-[#0a3930] rounded-3xl overflow-hidden border border-[#F4F1EB]/15 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group"
            >
              {/* Image with IN PROGRESS Badge */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0e4a3a]">
                <ResponsiveImage
                  webp={residence.imageWebp}
                  fallback={residence.image}
                  alt={residence.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 end-4">
                  <span className="px-3 py-1 rounded-md bg-[#c7aa79] text-white font-mono text-[10px] font-bold tracking-wider uppercase shadow-sm">
                    {residence.status}
                  </span>
                </div>
              </div>

              {/* Residence Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#aabdb5] block mb-1">
                    {residence.location}
                  </span>
                  <h3 className="text-xl font-bold text-[#F4F1EB] mb-3 font-serif group-hover:text-[#c7aa79] transition-colors">
                    {residence.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#aabdb5] leading-relaxed mb-6">
                    {residence.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F4F1EB]/15 flex items-center justify-between text-xs text-[#c7aa79] font-semibold">
                  <span>{pf.cardCta}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:-scale-x-100 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Residence Project Details Modal */}
      <AnimatePresence>
        {selectedResidence && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedResidence(null)}
              className="fixed inset-0 bg-[#062b24]/75 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="relative w-full max-w-2xl bg-[#0a3930] rounded-3xl shadow-2xl border border-[#F4F1EB]/15 overflow-hidden my-6 z-10"
              role="dialog"
              aria-modal="true"
              aria-label={selectedResidence.title}
            >
              <div className="relative aspect-[16/9] w-full bg-[#0e4a3a]">
                <ResponsiveImage
                  webp={selectedResidence.imageWebp}
                  fallback={selectedResidence.image}
                  alt={selectedResidence.title}
                  sizes="(max-width: 768px) 100vw, 672px"
                  loading="eager"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedResidence(null)}
                  aria-label={pf.closeDialog}
                  className="absolute top-4 end-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 start-4 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-white text-xs font-mono">
                  {selectedResidence.location}
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#c7aa79] block mb-1">
                  {pf.modalEyebrow}
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#F4F1EB] mb-3">
                  {selectedResidence.title}
                </h3>
                <p className="text-sm text-[#aabdb5] leading-relaxed mb-6">
                  {selectedResidence.description}
                </p>

                {/* Illustrative-project note (no specs per TRUTH RULES) */}
                <div className="p-4 bg-[#0a3930] rounded-2xl border border-[#F4F1EB]/15 mb-6 text-xs text-[#aabdb5] leading-relaxed">
                  {pf.modalNote}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedResidence(null);
                      onOpenBooking();
                    }}
                    className="w-full sm:flex-1 py-3 px-5 bg-[#0f4f3e] hover:bg-[#156047] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>{pf.modalCta}</span>
                    <ArrowRight className="w-4 h-4 text-[#c7aa79] rtl:-scale-x-100" />
                  </button>
                  <button
                    onClick={() => setSelectedResidence(null)}
                    className="w-full sm:w-auto py-3 px-5 text-xs font-semibold text-[#8db5a2] hover:text-[#F4F1EB] transition-colors"
                  >
                    {pf.close}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
