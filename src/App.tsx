/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { enBundle } from './i18n/locales/en';
import { arBundle } from './i18n/locales/ar';
import { applySeo } from './lib/seo';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { ArchitectureSection } from './components/ArchitectureSection';
import { LiveFloorPlan } from './components/LiveFloorPlan';
import { ChoreographedMoments } from './components/ChoreographedMoments';
import { HardwareCompatibility } from './components/HardwareCompatibility';
import { PhilosophySection } from './components/PhilosophySection';
import { TurnkeyMethodology } from './components/TurnkeyMethodology';
import { PortfolioResidences } from './components/PortfolioResidences';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';

// On-demand modal: excluded from the initial chunk (Phase 6 code-splitting).
const BookingModal = lazy(() =>
  import('./components/BookingModal').then((m) => ({ default: m.BookingModal })),
);

interface ArchitecturalScrollSectionProps {
  children: React.ReactNode;
  yOffset?: number;
  id?: string;
}

/**
 * Architectural Scroll Section: applies subtle parallax elevation and smooth fade-in
 * using Framer Motion's useScroll and useTransform hooks for a refined, formal portfolio aesthetic.
 */
function ArchitecturalScrollSection({
  children,
  yOffset = 24,
  id,
}: ArchitecturalScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 92%', 'end 8%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Smooth, subtle vertical translation and opacity fade-in adhering to WCAG and design constitution
  const y = useTransform(smoothProgress, [0, 0.45, 0.9, 1], [yOffset, 0, 0, -yOffset * 0.4]);
  const opacity = useTransform(smoothProgress, [0, 0.25, 0.9, 1], [0.45, 1, 1, 0.85]);
  const reduceMotion = useReducedMotion();

  return (
    <div ref={sectionRef} id={id} className="relative w-full">
      <motion.div
        style={
          reduceMotion
            ? undefined
            : {
                y,
                opacity,
                willChange: 'transform, opacity',
              }
        }
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const { i18n } = useTranslation();

  // Keep <html> lang/dir + SEO tags in sync with the active locale.
  useEffect(() => {
    const apply = (lng: string) => {
      const rtl = lng.toLowerCase().startsWith('ar');
      document.documentElement.lang = rtl ? 'ar' : 'en';
      document.documentElement.dir = rtl ? 'rtl' : 'ltr';
      applySeo(rtl ? arBundle : enBundle, lng);
    };
    apply(i18n.resolvedLanguage ?? i18n.language ?? 'en');
    i18n.on('languageChanged', apply);
    return () => {
      i18n.off('languageChanged', apply);
    };
  }, [i18n]);

  // Global page scroll progress for subtle champagne gold indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-[#062b24] text-[#F4F1EB] font-sans selection:bg-[#F4F1EB]/30 selection:text-[#062b24] relative">
      {/* Subtle Formal Portfolio Architectural Progress Line */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-20 left-0 right-0 h-[2px] bg-gradient-to-r from-[#c7aa79] via-[#c7aa79] to-[#c7aa79] origin-left rtl:origin-right z-40 pointer-events-none"
      />

      {/* Top Fixed Navigation */}
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Main Portfolio Sections */}
      <main className="relative">
        <Hero onOpenBooking={() => setBookingModalOpen(true)} />

        <ArchitecturalScrollSection yOffset={32}>
          <ArchitectureSection />
        </ArchitecturalScrollSection>

        <ArchitecturalScrollSection yOffset={28}>
          <HowItWorks onOpenBooking={() => setBookingModalOpen(true)} />
        </ArchitecturalScrollSection>

        <ArchitecturalScrollSection yOffset={28}>
          <LiveFloorPlan onOpenBooking={() => setBookingModalOpen(true)} />
        </ArchitecturalScrollSection>

        <ArchitecturalScrollSection yOffset={24}>
          <ChoreographedMoments />
        </ArchitecturalScrollSection>

        <ArchitecturalScrollSection yOffset={26}>
          <HardwareCompatibility />
        </ArchitecturalScrollSection>

        <ArchitecturalScrollSection yOffset={36}>
          <PhilosophySection />
        </ArchitecturalScrollSection>

        <ArchitecturalScrollSection yOffset={28}>
          <TurnkeyMethodology />
        </ArchitecturalScrollSection>

        <ArchitecturalScrollSection yOffset={32}>
          <PortfolioResidences onOpenBooking={() => setBookingModalOpen(true)} />
        </ArchitecturalScrollSection>

        <ArchitecturalScrollSection yOffset={24}>
          <InquirySection onOpenBooking={() => setBookingModalOpen(true)} />
        </ArchitecturalScrollSection>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Demonstration Booking Modal (Image 1.png) */}
      <Suspense fallback={null}>
        <BookingModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
        />
      </Suspense>
    </div>
  );
}
