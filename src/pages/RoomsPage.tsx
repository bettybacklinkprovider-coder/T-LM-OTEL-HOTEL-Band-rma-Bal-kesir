import React from 'react';
import { BedDouble, Users, Maximize2, Check, Calendar, Phone, Sparkles, ShieldCheck } from 'lucide-react';
import { ROOMS, HOTEL_INFO, IMAGES } from '../data/hotelData';
import { useApp } from '../context/AppContext';
import { SafeImage } from '../components/SafeImage';

export const RoomsPage: React.FC = () => {
  const { lang, openBooking } = useApp();

  return (
    <div className="space-y-16 pb-20 text-slate-100">
      
      {/* Rooms Page Hero */}
      <section className="relative py-24 bg-gradient-to-b from-purple-950 via-slate-950 to-slate-950 border-b border-purple-900/40 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
            TÜLM OTEL HOTEL ACCOMMODATIONS
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            {lang === 'tr' ? 'Odalarımız' : 'Our Rooms'}
          </h1>
          <p className="text-base sm:text-lg text-purple-200/90 max-w-xl mx-auto font-sans font-light">
            {lang === 'tr'
              ? 'Huzurlu ve konforlu bir konaklama için özel olarak tasarlanmış odalarımız.'
              : 'Comfortable spaces designed for a relaxing stay.'}
          </p>
        </div>
      </section>

      {/* Detailed Room Showcase Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {ROOMS.map((room, index) => (
          <div
            key={room.id}
            className={`glass-card rounded-3xl overflow-hidden border border-purple-700/40 p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Room Image Container */}
            <div className={`lg:col-span-6 image-zoom-container rounded-2xl overflow-hidden border border-purple-600/30 shadow-2xl h-72 sm:h-96 ${
              index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
            }`}>
              <SafeImage
                src={room.image}
                fallbackSrc={IMAGES.standardRoom}
                alt={room.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Room Details Column */}
            <div className={`lg:col-span-6 space-y-5 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {room.size} · {lang === 'tr' ? 'Özel Banyo' : 'Private Ensuite'}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-900/80 border border-purple-500/40 text-amber-300">
                    {lang === 'tr' ? 'Fiyat için İletişime Geçin' : 'Contact for Price'}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {lang === 'tr' ? room.nameTr : room.name}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed">
                {lang === 'tr' ? room.longDescription : room.longDescription}
              </p>

              {/* Specifications Pills */}
              <div className="grid grid-cols-2 gap-3 py-2 text-xs border-y border-purple-900/50">
                <div className="flex items-center gap-2 text-purple-200">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>{room.capacity}</span>
                </div>
                <div className="flex items-center gap-2 text-purple-200">
                  <BedDouble className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'tr' ? room.bedTr : room.bed}</span>
                </div>
                <div className="flex items-center gap-2 text-purple-200">
                  <Maximize2 className="w-4 h-4 text-amber-400" />
                  <span>{room.size}</span>
                </div>
                <div className="flex items-center gap-2 text-purple-200">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'tr' ? 'Günlük Temizlik' : 'Daily Cleaning'}</span>
                </div>
              </div>

              {/* Room Features List */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase text-purple-300 tracking-wider">
                  {lang === 'tr' ? 'Oda Özellikleri' : 'Room Amenities'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-purple-200">
                  {(lang === 'tr' ? room.featuresTr : room.features).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book Room Button */}
              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => openBooking(room.id)}
                  className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs tracking-wider shadow-lg shadow-purple-600/25 transition-all text-center flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-amber-300" />
                  <span>{lang === 'tr' ? 'Bu Odayı Rezerve Et' : 'Book This Room'}</span>
                </button>

                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="p-3 rounded-xl bg-purple-900/60 border border-purple-600/50 hover:bg-purple-800 text-amber-300 text-xs font-medium"
                  title="Call Reception"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* Feature Comparison Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="glass-panel p-8 rounded-3xl border border-purple-800/60 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="font-serif text-2xl font-bold text-white">
              {lang === 'tr' ? 'Tüm Odalarda Standart Sunulan Hizmetler' : 'Standard Amenities Included in Every Stay'}
            </h3>
            <p className="text-xs text-purple-300">
              {lang === 'tr' ? 'TÜLM OTEL HOTEL kalitesi ve güvencesiyle.' : 'Guaranteed standard features for all room categories.'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center pt-4">
            <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-800/40 space-y-2">
              <Sparkles className="w-6 h-6 text-amber-400 mx-auto" />
              <div className="text-xs font-semibold text-white">{lang === 'tr' ? 'Hızlı Wi-Fi' : 'High-Speed Wi-Fi'}</div>
            </div>
            <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-800/40 space-y-2">
              <Sparkles className="w-6 h-6 text-amber-400 mx-auto" />
              <div className="text-xs font-semibold text-white">{lang === 'tr' ? 'Klima & Isıtma' : 'Climate Control'}</div>
            </div>
            <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-800/40 space-y-2">
              <Sparkles className="w-6 h-6 text-amber-400 mx-auto" />
              <div className="text-xs font-semibold text-white">{lang === 'tr' ? '24/7 Sıcak Su' : '24/7 Hot Water'}</div>
            </div>
            <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-800/40 space-y-2">
              <Sparkles className="w-6 h-6 text-amber-400 mx-auto" />
              <div className="text-xs font-semibold text-white">{lang === 'tr' ? 'Smart TV' : 'Smart Flat TV'}</div>
            </div>
            <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-800/40 space-y-2">
              <Sparkles className="w-6 h-6 text-amber-400 mx-auto" />
              <div className="text-xs font-semibold text-white">{lang === 'tr' ? 'Mini Buzdolabı' : 'Mini Fridge'}</div>
            </div>
            <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-800/40 space-y-2">
              <Sparkles className="w-6 h-6 text-amber-400 mx-auto" />
              <div className="text-xs font-semibold text-white">{lang === 'tr' ? 'Ses Yalıtımı' : 'Acoustic Insulation'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Booking Call to Action */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6 pt-8">
        <h2 className="font-serif text-3xl font-bold text-white">
          {lang === 'tr' ? 'Bandırma’da Konforlu Bir Geceye Hazır Mısınız?' : 'Ready for a Relaxing Stay in Bandırma?'}
        </h2>
        <p className="text-xs sm:text-sm text-purple-200">
          {lang === 'tr'
            ? 'Sorularınız veya özel rezervasyon talepleriniz için resepsiyon ekibimiz 24 saat hizmetinizdedir.'
            : 'Our front desk team is ready 24/7 to answer questions and fulfill your reservation requests.'}
        </p>
        <button
          onClick={() => openBooking()}
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/20 hover:scale-105 transition-all"
        >
          {lang === 'tr' ? 'Şimdi Rezerve Et' : 'Book Your Stay Now'}
        </button>
      </section>

    </div>
  );
};
