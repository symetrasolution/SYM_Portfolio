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
            ? 'bg-[#FAF8F2]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(20,30,24,0.06)] border-b border-[#E8E4DA]'
            : 'bg-[#FAF8F2]/80 backdrop-blur-sm border-b border-[#E8E4DA]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-slate-900 focus:outline-none"
            aria-label={content.site.homeLabel}
          >
            <div className="w-8 h-8 rounded-lg bg-[#14231C] text-[#E2BE76] flex items-center justify-center font-bold text-sm tracking-wider shadow-sm transition-transform duration-200 group-hover:scale-105">
              S
            </div>
            <span className="text-xl font-bold tracking-tight text-[#14231C] font-serif">
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
                className="text-sm font-medium text-[#4A554E] hover:text-[#14231C] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:start-0 after:w-0 after:h-[1.5px] after:bg-[#14231C] hover:after:w-full after:transition-all after:duration-200"
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
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A554E] hover:text-[#14231C] px-3 py-2 rounded-lg transition-colors border border-transparent hover:border-[#E2DDD0]"
              title={content.nav.hotlineTitle}
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#B3934B]" />
              <span className="hidden xl:inline">{content.contact.hotlineLabel}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-4 sm:px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#14231C] hover:bg-[#1C3228] active:scale-[0.98] rounded-xl transition-all shadow-sm hover:shadow-md flex items-center gap-2 group whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-[#E2BE76] animate-pulse"></span>
              <span>{content.nav.cta}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E2BE76] rtl:-scale-x-100 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#14231C] hover:bg-[#EFECE3] transition-colors focus:outline-none"
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
            className="fixed inset-x-0 top-20 z-30 bg-[#FAF8F2] border-b border-[#E8E4DA] shadow-xl p-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="pb-3 border-b border-[#EFECE3] flex items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-wider text-[#5F6B64] font-semibold">
                  {content.nav.drawerTagline}
                </p>
                <LanguageToggle />
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-medium text-[#14231C] hover:text-[#B3934B] py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-[#EFECE3] flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 text-center text-sm font-semibold text-white bg-[#14231C] rounded-xl flex items-center justify-center gap-2"
                >
                  <span>{content.nav.drawerCta}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E2BE76] rtl:-scale-x-100" />
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-[#6B756E]">
                  <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
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
