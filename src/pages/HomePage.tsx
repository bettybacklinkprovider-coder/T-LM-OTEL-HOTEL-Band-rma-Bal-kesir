import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Calendar,
  Phone,
  BedDouble,
  HeartHandshake,
  Navigation,
  Wifi,
  Clock,
  Sparkles,
  Coffee,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  CheckCircle,
  Eye
} from 'lucide-react';
import { HOTEL_INFO, ROOMS, GALLERY_IMAGES, IMAGES, AMENITIES } from '../data/hotelData';
import { useApp } from '../context/AppContext';
import { SafeImage } from '../components/SafeImage';

export const HomePage: React.FC = () => {
  const { lang, openBooking } = useApp();

  return (
    <div className="space-y-0 text-slate-100 overflow-hidden">
      
      {/* ================= SECTION 1 — HERO ================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Purple Gradient Overlay */}
        <div className="absolute inset-0 z-0 image-zoom-container">
          <SafeImage
            src={IMAGES.exterior}
            fallbackSrc={IMAGES.lobby}
            alt="TÜLM OTEL HOTEL Bandırma Exterior"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Deep Royal Purple Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-purple-950/80 to-slate-950/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-slate-950/60 to-slate-950" />
        </div>

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 space-y-8 animate-fadeIn">
          
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/60 border border-purple-500/40 text-amber-300 text-xs font-medium tracking-widest uppercase shadow-lg backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Bandırma, Balıkesir, Türkiye</span>
          </div>

          {/* Hotel Name Display */}
          <div className="space-y-3">
            <h2 className="text-sm font-sans tracking-[0.3em] uppercase text-purple-300 font-semibold">
              TÜLM OTEL HOTEL
            </h2>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto drop-shadow-md">
              {lang === 'tr'
                ? 'Bandırma’nın Kalbinde Konforlu Bir Konaklama'
                : 'A Comfortable Stay in the Heart of Bandırma'}
            </h1>
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-purple-100/90 max-w-2xl mx-auto leading-relaxed font-sans font-light">
            {lang === 'tr'
              ? 'TÜLM OTEL HOTEL’de sıcak Türk misafirperverliği, modern ve konforlu odalar ile Bandırma, Balıkesir’de benzersiz bir konaklama deneyimi yaşayın.'
              : 'Experience warm Turkish hospitality, elegant accommodation and a comfortable stay at TÜLM OTEL HOTEL in Bandırma, Balıkesir.'}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => openBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-amber-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>{lang === 'tr' ? 'Rezervasyon Yapın' : 'Book Your Stay'}</span>
            </button>

            <Link
              to="/rooms"
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-purple-100 border border-purple-500/40 hover:bg-purple-900/40 hover:border-purple-400 font-semibold text-sm tracking-wide transition-all flex items-center justify-center gap-2"
            >
              <span>{lang === 'tr' ? 'Odaları Keşfedin' : 'Explore Rooms'}</span>
              <ArrowRight className="w-4 h-4 text-purple-300" />
            </Link>
          </div>

          {/* Address Bar Quick Hint */}
          <div className="pt-8 text-xs text-purple-300/80 flex flex-wrap items-center justify-center gap-4 border-t border-purple-800/30 max-w-xl mx-auto">
            <a
              href={HOTEL_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 flex items-center gap-1.5 transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-400" />
              <span>Saatçiler Cd NO:16, Bandırma</span>
            </a>
            <span>·</span>
            <a href={`tel:${HOTEL_INFO.phoneRaw}`} className="hover:text-amber-300 flex items-center gap-1.5 transition-colors font-medium">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+90 266 714 44 25</span>
            </a>
          </div>

        </div>
      </section>

      {/* ================= SECTION 2 — WELCOME / ABOUT THE HOTEL ================= */}
      <section className="py-20 bg-slate-950 relative border-t border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Large Premium Hotel Image */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-amber-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-purple-700/40 shadow-2xl image-zoom-container">
                <SafeImage
                  src={IMAGES.lobby}
                  fallbackSrc={IMAGES.exterior}
                  alt="TÜLM OTEL HOTEL Reception & Lobby"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 glass-panel rounded-xl text-xs text-purple-200 border border-purple-500/30">
                  <span className="font-serif font-bold text-white text-sm block">TÜLM OTEL HOTEL Bandırma</span>
                  <span>{lang === 'tr' ? '24 Saat Açık Resepsiyon & Lobi Alanı' : '24/7 Front Desk & Modern Marble Lobby'}</span>
                </div>
              </div>
            </div>

            {/* Right Side: Welcome Prose */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
                  WELCOME TO TÜLM OTEL HOTEL
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2 leading-tight">
                  {lang === 'tr' ? 'Konfor, Misafirperverlik ve Kolaylık' : 'Comfort, Hospitality & Convenience'}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-purple-200/90 leading-relaxed font-sans">
                {lang === 'tr'
                  ? 'TÜLM OTEL HOTEL, Balıkesir’in güzel liman kenti Bandırma’da misafirlerine huzurlu, temiz ve konforlu bir konaklama sunmaktadır. Merkezi konumu sayesinde feribot iskelesi, alışveriş merkezleri ve iş alanlarına yürüme mesafesindedir.'
                  : 'TÜLM OTEL HOTEL offers guests a comfortable and welcoming accommodation experience in Bandırma, Balıkesir. Located in the vibrant heart of the city, our hotel provides easy access to local transport, ferry terminals, and commercial hubs while ensuring peaceful, high-quality rest.'}
              </p>

              {/* Three Small Feature Items */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-800/50 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-900/80 border border-purple-600/40 flex items-center justify-center text-amber-300">
                    <BedDouble className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-xs text-white">
                    {lang === 'tr' ? 'Konforlu Odalar' : 'Comfortable Rooms'}
                  </h3>
                  <p className="text-[11px] text-purple-300">
                    {lang === 'tr' ? 'Ortopedik yatak ve ses yalıtımı' : 'Orthopaedic beds & soundproof quiet design'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-800/50 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-900/80 border border-purple-600/40 flex items-center justify-center text-amber-300">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-xs text-white">
                    {lang === 'tr' ? 'Güler Yüzlü Hizmet' : 'Friendly Hospitality'}
                  </h3>
                  <p className="text-[11px] text-purple-300">
                    {lang === 'tr' ? '24/7 samimi Türk misafirperverliği' : '24/7 authentic Turkish hospitality'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-800/50 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-900/80 border border-purple-600/40 flex items-center justify-center text-amber-300">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-xs text-white">
                    {lang === 'tr' ? 'Merkezi Konum' : 'Convenient Location'}
                  </h3>
                  <p className="text-[11px] text-purple-300">
                    {lang === 'tr' ? 'Bandırma çarşısının tam içinde' : 'Steps from Bandırma harbor & shops'}
                  </p>
                </div>
              </div>

              {/* Discover More Button */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-900/50 border border-purple-600/50 hover:bg-purple-800/60 text-purple-100 text-xs font-semibold tracking-wide transition-all"
                >
                  <span>{lang === 'tr' ? 'Detaylı Bilgi Alın' : 'Discover More'}</span>
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 3 — ROOMS & COMFORT ================= */}
      <section className="py-20 bg-slate-900/80 relative border-t border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
              TÜLM OTEL ACCOMMODATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              {lang === 'tr' ? 'Konfor İçinde Konaklayın' : 'Stay in Comfort'}
            </h2>
            <p className="text-xs sm:text-sm text-purple-200/80">
              {lang === 'tr'
                ? 'İhtiyacınıza uygun özenle hazırlanmış ferah ve konforlu oda seçeneklerimiz.'
                : 'Choose from our carefully appointed rooms tailored for business and leisure stays.'}
            </p>
          </div>

          {/* Room Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROOMS.map((room) => (
              <div
                key={room.id}
                className="glass-card rounded-2xl overflow-hidden border border-purple-700/40 flex flex-col group hover:border-purple-500 transition-all duration-300"
              >
                {/* Room Image with Zoom Effect */}
                <div className="relative h-48 overflow-hidden image-zoom-container">
                  <SafeImage
                    src={room.image}
                    fallbackSrc={IMAGES.standardRoom}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-purple-950/80 backdrop-blur-md border border-purple-600/40 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-amber-300">
                    {room.size}
                  </div>
                </div>

                {/* Room Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {lang === 'tr' ? room.nameTr : room.name}
                    </h3>
                    <p className="text-xs text-purple-200/80 line-clamp-2">
                      {lang === 'tr' ? room.descriptionTr : room.description}
                    </p>
                    
                    <div className="text-[11px] text-purple-300 pt-1 flex items-center gap-2 border-t border-purple-900/40 mt-2">
                      <BedDouble className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{lang === 'tr' ? room.bedTr : room.bed}</span>
                    </div>
                  </div>

                  {/* View Room Action */}
                  <div className="pt-2">
                    <button
                      onClick={() => openBooking(room.id)}
                      className="w-full py-2.5 px-3 rounded-xl bg-purple-900/60 hover:bg-purple-800 border border-purple-600/50 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-300" />
                      <span>{lang === 'tr' ? 'Odayı İncele & Rezerve Et' : 'View Room'}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Rooms Button */}
          <div className="text-center pt-12">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs tracking-wider shadow-lg shadow-purple-600/20 transition-all"
            >
              <span>{lang === 'tr' ? 'Tüm Odalarımızı İnceleyin' : 'View All Rooms'}</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </Link>
          </div>

        </div>
      </section>

      {/* ================= SECTION 4 — HOTEL EXPERIENCE / AMENITIES ================= */}
      <section className="py-20 bg-slate-950 relative border-t border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
              AMENITIES & SERVICES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              {lang === 'tr' ? 'Huzurlu Bir Konaklama İçin Her Şey' : 'Everything You Need for a Relaxing Stay'}
            </h2>
            <p className="text-xs sm:text-sm text-purple-200/80">
              {lang === 'tr'
                ? 'Konuklarımızın rahatı için tasarlanmış modern otel imkanlarımız.'
                : 'Designed with comfort and modern convenience in mind for every guest.'}
            </p>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AMENITIES.map((amenity) => (
              <div
                key={amenity.id}
                className="glass-card rounded-2xl overflow-hidden border border-purple-800/50 hover:border-purple-500/60 transition-all duration-300 group flex flex-col"
              >
                {/* Photo header with overlay badge */}
                <div className="relative h-44 overflow-hidden image-zoom-container">
                  <SafeImage
                    src={amenity.image}
                    fallbackSrc={IMAGES.exterior}
                    alt={lang === 'tr' ? amenity.titleTr : amenity.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-purple-950/80 backdrop-blur-md border border-purple-500/50 flex items-center justify-center text-amber-300 shadow-lg group-hover:scale-110 transition-transform">
                    {amenity.id === 'wifi' && <Wifi className="w-5 h-5" />}
                    {amenity.id === 'rooms' && <BedDouble className="w-5 h-5" />}
                    {amenity.id === 'reception' && <Clock className="w-5 h-5" />}
                    {amenity.id === 'housekeeping' && <Sparkles className="w-5 h-5" />}
                    {amenity.id === 'breakfast' && <Coffee className="w-5 h-5" />}
                    {amenity.id === 'location' && <MapPin className="w-5 h-5" />}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {lang === 'tr' ? amenity.titleTr : amenity.title}
                  </h3>

                  <p className="text-xs text-purple-200/80 leading-relaxed">
                    {lang === 'tr' ? amenity.descriptionTr : amenity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 5 — GALLERY ================= */}
      <section className="py-20 bg-slate-900/80 relative border-t border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
                PHOTO GALLERY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                {lang === 'tr' ? 'TÜLM OTEL’i Keşfedin' : 'Explore TÜLM OTEL HOTEL'}
              </h2>
              <p className="text-xs text-purple-300">
                {lang === 'tr' ? 'Otelimizden, odalarımızdan ve detaylardan kareler.' : 'A visual tour of our hotel, rooms, dining, and atmosphere.'}
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-900/60 border border-purple-600/50 hover:bg-purple-800 text-purple-100 text-xs font-semibold transition-all shrink-0 self-start md:self-auto"
            >
              <span>{lang === 'tr' ? 'Tüm Galeriyi Gör' : 'View Full Gallery'}</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>

          {/* Masonry / Grid Gallery Showcase (Non-repeated images) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY_IMAGES.slice(0, 8).map((img, index) => (
              <div
                key={img.id}
                className={`relative rounded-xl overflow-hidden border border-purple-700/30 group image-zoom-container ${
                  index === 0 ? 'sm:col-span-2 sm:row-span-2 h-72 sm:h-[360px]' : 'h-44 sm:h-44'
                }`}
              >
                <SafeImage
                  src={img.image}
                  fallbackSrc={IMAGES.lobby}
                  alt={img.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="font-serif text-sm font-bold text-white">{img.title}</span>
                  <span className="text-[11px] text-amber-300">{img.caption}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 6 — CONTACT & BOOKING CTA ================= */}
      <section className="py-20 bg-gradient-to-b from-purple-950 via-slate-950 to-slate-950 relative border-t border-purple-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-purple-600/40 relative overflow-hidden">
            
            {/* Background Glow */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              {/* Left Info Column */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
                    RESERVATIONS & CONTACT
                  </span>
                  <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white mt-2 leading-tight">
                    {lang === 'tr' ? 'Bandırma Seyahatinizi Planlayın' : 'Plan Your Stay in Bandırma'}
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-purple-200/90 leading-relaxed font-sans">
                  {lang === 'tr'
                    ? 'TÜLM OTEL HOTEL’de konaklamanızı rahat ve unutulmaz kılın. Rezervasyon ve detaylı bilgi için bugün bizimle iletişime geçin.'
                    : 'Make your stay comfortable and memorable at TÜLM OTEL HOTEL. Contact us today for reservations and more information.'}
                </p>

                {/* Direct Phone & Address Highlights */}
                <div className="space-y-3 pt-2">
                  <a
                    href={`tel:${HOTEL_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-purple-900/80 border border-purple-500/50 hover:border-amber-400 text-white font-bold text-base sm:text-lg transition-colors group"
                  >
                    <Phone className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                    <span>+90 266 714 44 25</span>
                  </a>

                  <a
                    href={HOTEL_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 text-xs text-purple-300 hover:text-amber-300 transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Haydar Çavuş, Saatçiler Cd NO:16, 10200 Bandırma/Balıkesir, Türkiye</span>
                  </a>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => openBooking()}
                    className="py-4 px-8 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/20 hover:scale-105 transition-all text-center"
                  >
                    {lang === 'tr' ? 'Oda Rezerve Et' : 'Book Your Stay'}
                  </button>

                  <a
                    href={`tel:${HOTEL_INFO.phoneRaw}`}
                    className="py-4 px-8 rounded-xl bg-purple-900/60 border border-purple-600/50 hover:bg-purple-800 text-white font-semibold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-amber-300" />
                    <span>{lang === 'tr' ? 'Hemen Ara' : 'Call Now'}</span>
                  </a>
                </div>
              </div>

              {/* Right Embedded Interactive Map Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-purple-600/40 shadow-2xl bg-slate-900">
                  <iframe
                    title="TÜLM OTEL HOTEL Bandırma Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.784534839841!2d27.9714!3d40.3528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIxJ0Ew.MSJOIDI3wrA1OCcyNy4wIkU!5e0!3m2!1sen!2str!4v1680000000000!5m2!1sen!2str"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="w-full grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="p-4 bg-purple-950/90 text-xs text-purple-200 flex justify-between items-center border-t border-purple-800/50">
                    <span>Saatçiler Cd NO:16, Bandırma</span>
                    <a
                      href={HOTEL_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 font-medium hover:underline flex items-center gap-1"
                    >
                      <span>{lang === 'tr' ? 'Haritada Aç' : 'Open Map'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
