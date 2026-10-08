/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useTranslation } from 'react-i18next';
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
import { BookingModal } from './components/BookingModal';

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

  return (
    <div ref={sectionRef} id={id} className="relative w-full">
      <motion.div
        style={{
          y,
          opacity,
          willChange: 'transform, opacity',
        }}
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

  // Keep <html> lang/dir in sync with the active locale (EN/AR + RTL).
  useEffect(() => {
    const apply = (lng: string) => {
      const rtl = lng.toLowerCase().startsWith('ar');
      document.documentElement.lang = rtl ? 'ar' : 'en';
      document.documentElement.dir = rtl ? 'rtl' : 'ltr';
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
    <div className="min-h-screen bg-[#FAF8F2] text-[#19221D] font-sans selection:bg-[#E2BE76]/30 selection:text-[#0C1713] relative">
      {/* Subtle Formal Portfolio Architectural Progress Line */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-20 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B3934B] via-[#E2BE76] to-[#B3934B] origin-left rtl:origin-right z-40 pointer-events-none"
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
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
