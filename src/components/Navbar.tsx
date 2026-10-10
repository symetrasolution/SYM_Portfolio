import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, ShieldCheck, PhoneCall } from 'lucide-react';
import { useContent } from '../i18n/useContent';
import { LanguageToggle } from '../i18n/LanguageToggle';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const content = useContent();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = content.nav.links;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#062b24]/90 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.45)] border-b border-[#F4F1EB]/15'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-[#F4F1EB] focus:outline-none"
            aria-label={content.site.homeLabel}
          >
            <div className="w-9 h-9 rotate-45 rounded-[9px_2px_9px_2px] border-[1.5px] border-[#9dd7c2] grid place-items-center shadow-sm transition-transform duration-200 group-hover:scale-105">
              <span className="-rotate-45 font-bold text-sm text-[#9dd7c2]">S</span>
            </div>
            <span className="text-base sm:text-lg font-extrabold uppercase tracking-[0.18em] text-[#F4F1EB] font-serif whitespace-nowrap">
              {content.site.name}
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-[#d5e0da] hover:text-[#9dd7c2] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:start-0 after:w-0 after:h-[1.5px] after:bg-[#9dd7c2] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle />

            <a
              href={content.contact.hotlineHref}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#d5e0da] hover:text-[#F4F1EB] px-3 py-2 rounded-lg transition-colors border border-transparent hover:border-[#F4F1EB]/15"
              title={content.nav.hotlineTitle}
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#c7aa79]" />
              <span className="hidden xl:inline">{content.contact.hotlineLabel}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-4 sm:px-5 py-2.5 text-xs font-bold tracking-wide text-[#062b24] bg-[#F4F1EB] hover:bg-white active:scale-[0.98] rounded-full transition-all shadow-[0_4px_24px_rgba(0,0,0,0.35)] flex items-center gap-2 group whitespace-nowrap"
            >
              <span>{content.nav.cta}</span>
              <ArrowUpRight className="w-3.5 h-3.5 rtl:-scale-x-100 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#F4F1EB] hover:bg-[#0e4a3a] transition-colors focus:outline-none"
              aria-label={content.nav.menuToggle}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-30 bg-[#062b24] border-b border-[#F4F1EB]/15 shadow-xl p-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="pb-3 border-b border-[#0e4a3a] flex items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-wider text-[#aabdb5] font-semibold">
                  {content.nav.drawerTagline}
                </p>
                <LanguageToggle />
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-medium text-[#F4F1EB] hover:text-[#c7aa79] py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-[#0e4a3a] flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 text-center text-sm font-semibold text-white bg-[#0f4f3e] rounded-xl flex items-center justify-center gap-2"
                >
                  <span>{content.nav.drawerCta}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#c7aa79] rtl:-scale-x-100" />
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-[#8db5a2]">
                  <ShieldCheck className="w-4 h-4 text-[#9dd7c2]" />
                  <span>{content.nav.drawerNote}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
