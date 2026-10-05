import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, Menu, X, Globe, MapPin } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { useApp } from '../context/AppContext';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, openBooking } = useApp();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', labelEn: 'Home', labelTr: 'Ana Sayfa' },
    { path: '/rooms', labelEn: 'Rooms', labelTr: 'Odalarımız' },
    { path: '/gallery', labelEn: 'Gallery', labelTr: 'Galeri' },
    { path: '/contact', labelEn: 'Contact & Booking', labelTr: 'İletişim & Rezervasyon' },
  ];

  return (
    <>
      {/* Top micro bar for quick address & info */}
      <div className="bg-purple-950/90 text-purple-200 text-xs py-1.5 px-4 border-b border-purple-900/40 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href={HOTEL_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span className="truncate max-w-md">{HOTEL_INFO.address}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-purple-300/80">Bandırma, Balıkesir</span>
            <span className="text-purple-700">|</span>
            <a href={`tel:${HOTEL_INFO.phoneRaw}`} className="hover:text-amber-300 transition-colors font-medium">
              {HOTEL_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-panel bg-slate-950/90 border-b border-purple-900/50 shadow-xl py-3'
            : 'bg-slate-950/70 backdrop-blur-md border-b border-purple-900/30 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Zone 1: Single element brand wordmark */}
          <Link
            to="/"
            className="flex flex-col group transition-transform duration-200 hover:scale-[1.01]"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-amber-200 transition-colors">
              TÜLM OTEL HOTEL
            </span>
            <span className="text-[10px] tracking-[0.2em] text-purple-400 uppercase font-sans">
              Bandırma · Türkiye
            </span>
          </Link>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-all relative py-1 ${
                    isActive
                      ? 'text-amber-300 font-semibold'
                      : 'text-purple-100/90 hover:text-white'
                  }`}
                >
                  {lang === 'tr' ? link.labelTr : link.labelEn}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-purple-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Actions & Language Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-purple-900/30 hover:bg-purple-900/50 border border-purple-700/40 text-purple-200 text-xs font-medium transition-colors"
              title="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'tr' ? 'EN' : 'TR'}</span>
            </button>

            {/* Call Now Button */}
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-purple-900/40 hover:bg-purple-800/60 border border-purple-600/40 text-purple-100 text-xs font-medium transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>{lang === 'tr' ? 'Hemen Ara' : 'Call Now'}</span>
            </a>

            {/* Book Your Stay Button */}
            <button
              onClick={() => openBooking()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold tracking-wide shadow-md hover:shadow-purple-500/25 transition-all whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-200" />
              <span>{lang === 'tr' ? 'Rezerve Et' : 'Book Your Stay'}</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
              className="p-1.5 rounded-lg bg-purple-900/30 border border-purple-700/40 text-purple-200 text-xs font-medium"
            >
              {lang === 'tr' ? 'EN' : 'TR'}
            </button>

            <button
              onClick={() => openBooking()}
              className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold shadow"
            >
              <Calendar className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-purple-900/40 text-purple-200 hover:text-white border border-purple-700/40 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-panel border-t border-purple-800/50 px-4 pt-3 pb-6 mt-3 space-y-3 animate-fadeIn">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-purple-900/60 text-amber-300 font-semibold border-l-4 border-amber-400'
                      : 'text-purple-100 hover:bg-purple-950/60'
                  }`}
                >
                  {lang === 'tr' ? link.labelTr : link.labelEn}
                </Link>
              );
            })}

            <div className="pt-2 border-t border-purple-900/40 flex flex-col gap-2">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-purple-900/50 text-purple-100 text-sm font-medium border border-purple-700/50"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+90 266 714 44 25</span>
              </a>

              <a
                href={HOTEL_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 text-xs text-purple-300 hover:text-amber-300 text-center"
              >
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span className="truncate">{HOTEL_INFO.address}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
