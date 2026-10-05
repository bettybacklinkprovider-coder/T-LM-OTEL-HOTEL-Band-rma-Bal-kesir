import React, { useState } from 'react';
import { GALLERY_IMAGES, IMAGES } from '../data/hotelData';
import { LightboxModal } from '../components/LightboxModal';
import { useApp } from '../context/AppContext';
import { Maximize2, Calendar } from 'lucide-react';
import { SafeImage } from '../components/SafeImage';

export const GalleryPage: React.FC = () => {
  const { lang, openBooking } = useApp();
  const [activeFilter, setActiveFilter] = useState<'all' | 'rooms' | 'hotel' | 'lobby' | 'dining' | 'facilities'>('all');
  
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const filteredImages = activeFilter === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const filterButtons = [
    { key: 'all', labelEn: 'All', labelTr: 'Tümü' },
    { key: 'rooms', labelEn: 'Rooms', labelTr: 'Odalar' },
    { key: 'hotel', labelEn: 'Hotel', labelTr: 'Otel & Dış Mekan' },
    { key: 'lobby', labelEn: 'Lobby', labelTr: 'Lobi & Resepsiyon' },
    { key: 'dining', labelEn: 'Dining', labelTr: 'Restoran & Kahvaltı' },
    { key: 'facilities', labelEn: 'Facilities', labelTr: 'Tesisler & Detaylar' },
  ];

  return (
    <div className="space-y-12 pb-20 text-slate-100">
      
      {/* Gallery Page Hero */}
      <section className="relative py-24 bg-gradient-to-b from-purple-950 via-slate-950 to-slate-950 border-b border-purple-900/40 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
            PHOTOGRAPHIC TOUR
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            {lang === 'tr' ? 'Otel Galerisi' : 'Hotel Gallery'}
          </h1>
          <p className="text-base sm:text-lg text-purple-200/90 max-w-xl mx-auto font-sans font-light">
            {lang === 'tr'
              ? 'TÜLM OTEL HOTEL’in konforlu atmosferini ve detaylarını keşfedin.'
              : 'Discover the comfort and atmosphere of TÜLM OTEL HOTEL.'}
          </p>
        </div>
      </section>

      {/* Interactive Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-2 border-b border-purple-900/40">
          {filterButtons.map((btn) => {
            const isActive = activeFilter === btn.key;
            return (
              <button
                key={btn.key}
                onClick={() => setActiveFilter(btn.key as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/40'
                    : 'glass-panel text-purple-200 hover:text-white hover:bg-purple-900/50'
                }`}
              >
                {lang === 'tr' ? btn.labelTr : btn.labelEn}
              </button>
            );
          })}
        </div>
      </section>

      {/* Responsive Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => handleOpenLightbox(index)}
              className="glass-card rounded-2xl overflow-hidden border border-purple-700/40 cursor-pointer group image-zoom-container relative h-64 flex flex-col justify-end"
            >
              <SafeImage
                src={img.image}
                fallbackSrc={IMAGES.exterior}
                alt={img.title}
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              <div className="relative z-10 p-4 space-y-1">
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest block">
                  {img.category}
                </span>
                <h3 className="font-serif text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                  {img.title}
                </h3>
              </div>

              <div className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-purple-950/80 border border-purple-600/40 text-purple-200 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5 text-amber-300" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Preview Modal */}
      <LightboxModal
        items={filteredImages}
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

      {/* Bottom Call to Action Section */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6 pt-12 border-t border-purple-900/40">
        <h2 className="font-serif text-3xl font-bold text-white">
          {lang === 'tr' ? 'Bizimle Konaklamaya Hazır Mısınız?' : 'Ready to Stay With Us?'}
        </h2>
        <p className="text-xs sm:text-sm text-purple-200">
          {lang === 'tr'
            ? 'Bandırma’daki eviniz TÜLM OTEL HOTEL sizleri bekliyor.'
            : 'Your comfortable sanctuary in Bandırma awaits your reservation.'}
        </p>
        <button
          onClick={() => openBooking()}
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2 mx-auto"
        >
          <Calendar className="w-4 h-4 text-slate-950" />
          <span>{lang === 'tr' ? 'Oda Rezerve Et' : 'Book Your Stay'}</span>
        </button>
      </section>

    </div>
  );
};
