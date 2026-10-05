import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { lang, openBooking } = useApp();

  return (
    <footer className="bg-slate-950 text-purple-200 border-t border-purple-900/60 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle Purple Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-purple-900/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-purple-900/50">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <div>
              <h2 className="font-serif text-2xl font-bold text-white tracking-wide">
                TÜLM OTEL HOTEL
              </h2>
              <p className="text-xs text-amber-400/90 font-medium tracking-widest uppercase mt-0.5">
                Bandırma · Balıkesir
              </p>
            </div>
            <p className="text-xs text-purple-300/80 leading-relaxed">
              {lang === 'tr'
                ? 'Bandırma’nın kalbinde konfor, kaliteli hizmet ve Türk misafirperverliği ile unutulmaz bir konaklama deneyimi sunuyoruz.'
                : 'Experience warm Turkish hospitality, comfortable modern rooms, and supreme convenience in the heart of Bandırma, Balıkesir.'}
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={HOTEL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-purple-900/40 hover:bg-emerald-600 border border-purple-700/50 flex items-center justify-center text-purple-200 hover:text-white transition-all shadow"
                aria-label="WhatsApp Contact"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-purple-900/40 hover:bg-pink-600 border border-purple-700/50 flex items-center justify-center text-purple-200 hover:text-white transition-all shadow"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-purple-900/40 hover:bg-blue-600 border border-purple-700/50 flex items-center justify-center text-purple-200 hover:text-white transition-all shadow"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-white tracking-wider font-serif border-b border-purple-800/40 pb-2">
              {lang === 'tr' ? 'Hızlı Bağlantılar' : 'Quick Links'}
            </h3>
            <ul className="space-y-2.5 text-xs text-purple-300/90">
              <li>
                <Link to="/" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">›</span> {lang === 'tr' ? 'Ana Sayfa' : 'Home'}
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">›</span> {lang === 'tr' ? 'Odalarımız' : 'Rooms'}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">›</span> {lang === 'tr' ? 'Galeri' : 'Gallery'}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">›</span> {lang === 'tr' ? 'İletişim & Rezervasyon' : 'Contact & Booking'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-white tracking-wider font-serif border-b border-purple-800/40 pb-2">
              {lang === 'tr' ? 'İletişim Bilgileri' : 'Contact Details'}
            </h3>
            <div className="space-y-3 text-xs text-purple-300/90">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="flex items-start gap-2.5 hover:text-amber-300 transition-colors group"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-semibold text-white">{HOTEL_INFO.phone}</div>
                  <div className="text-[11px] text-purple-400">{lang === 'tr' ? 'Resepsiyon & Rezervasyon' : 'Reception & Booking'}</div>
                </div>
              </a>

              <a
                href={HOTEL_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-amber-300 transition-colors group"
              >
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">{HOTEL_INFO.address}</span>
              </a>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>24/7 {lang === 'tr' ? 'Kesintisiz Hizmet' : 'Always Available'}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Quick Reservation Box */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-white tracking-wider font-serif border-b border-purple-800/40 pb-2">
              {lang === 'tr' ? 'Hızlı Rezervasyon' : 'Instant Reservation'}
            </h3>
            <p className="text-xs text-purple-300/80 leading-relaxed">
              {lang === 'tr'
                ? 'En uygun fiyat garantisi için doğrudan otelimizle iletişime geçin.'
                : 'Book directly with us for best rates and complimentary welcome treats.'}
            </p>
            <button
              onClick={() => openBooking()}
              className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-xs tracking-wide shadow-lg shadow-amber-500/20 transition-all text-center block"
            >
              {lang === 'tr' ? 'Oda Rezerve Et' : 'Book Your Stay'}
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-purple-400/80 gap-4">
          <p>© 2026 TÜLM OTEL HOTEL. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>Bandırma, Balıkesir, Türkiye</span>
            <span>·</span>
            <a href={`tel:${HOTEL_INFO.phoneRaw}`} className="hover:text-amber-300">
              +90 266 714 44 25
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
