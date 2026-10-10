import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ClipboardList } from 'lucide-react';
import { RoomZone } from '../types';
import { useContent } from '../i18n/useContent';

interface SpecsCustomizerModalProps {
  room: RoomZone;
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

/**
 * Qualitative preference list (TRUTH RULES): no protocols, circuit counts,
 * latency or power figures. The engineer prepares the real specification
 * after a site visit.
 */
export const SpecsCustomizerModal: React.FC<SpecsCustomizerModalProps> = ({
  room,
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const content = useContent();
  const specs = content.specs;
  const allInterests = room.hardwareNodes.map((n) => n.title);
  const [interests, setInterests] = useState<string[]>(allInterests);
  const [saved, setSaved] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setInterests(room.hardwareNodes.map((n) => n.title));
      setSaved(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, room.id]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleInterest = (title: string) => {
    setInterests((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );
  };

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
          className="fixed inset-0 bg-[#062b24]/75 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          className="relative w-full max-w-xl bg-[#0a3930] rounded-2xl shadow-2xl border border-[#F4F1EB]/15 overflow-hidden my-6 z-10 p-6 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${specs.eyebrow} — ${room.name}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#F4F1EB]/15 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#c7aa79]">
                {specs.eyebrow}
              </span>
              <h3 className="text-xl font-serif font-bold text-[#F4F1EB] mt-0.5">
                {specs.titleBefore} {room.name} {specs.titleAfter}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#0e4a3a] hover:bg-[#1E2C25] flex items-center justify-center text-[#d5e0da]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Capability checklist */}
          <div className="space-y-2.5 mb-6">
            {room.hardwareNodes.map((node) => {
              const checked = interests.includes(node.title);
              return (
                <button
                  key={node.title}
                  type="button"
                  onClick={() => toggleInterest(node.title)}
                  className={`w-full flex items-start gap-3 p-3 rounded-xl border text-start transition-all ${
                    checked
                      ? 'bg-[#0d4436] border-[#c7aa79]'
                      : 'bg-[#0a3930] border-[#F4F1EB]/15 hover:border-[#F4F1EB]/30'
                  }`}
                >
                  <span
                    className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                      checked
                        ? 'bg-[#0f4f3e] border-[#3A4A40] text-[#c7aa79]'
                        : 'bg-[#0a3930] border-[#F4F1EB]/30 text-transparent'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>
                    <span className="text-xs font-bold text-[#F4F1EB] block">
                      {node.title}
                    </span>
                    <span className="text-[11px] text-[#8db5a2]">
                      {node.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Honest-scope note */}
          <div className="p-3.5 bg-[#0d4436] rounded-xl border border-[#F4F1EB]/15 mb-6 flex items-start gap-2.5">
            <ClipboardList className="w-4 h-4 text-[#c7aa79] shrink-0 mt-0.5" />
            <p className="text-[11px] text-[#aabdb5] leading-relaxed">
              {specs.note}
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleApply}
              className="w-full sm:flex-1 py-3 px-5 bg-[#0f4f3e] hover:bg-[#156047] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
            >
              {saved ? (
                <>
                  <Check className="w-4 h-4 text-[#9dd7c2]" />
                  <span>{specs.saved}</span>
                </>
              ) : (
                <span>{specs.save}</span>
              )}
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full sm:w-auto py-3 px-5 bg-[#F4F1EB] hover:bg-white text-[#062b24] text-xs font-bold uppercase tracking-wider rounded-xl transition-all whitespace-nowrap"
            >
              {specs.review}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
