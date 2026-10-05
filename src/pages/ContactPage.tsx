import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock, Send, MessageCircle, CheckCircle2, ExternalLink, Calendar, BedDouble } from 'lucide-react';
import { HOTEL_INFO, ROOMS } from '../data/hotelData';
import { useApp } from '../context/AppContext';

export const ContactPage: React.FC = () => {
  const { lang } = useApp();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [roomType, setRoomType] = useState(ROOMS[0].id);
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const code = 'TULM-' + Math.floor(100000 + Math.random() * 900000);
      setRefCode(code);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const currentRoom = ROOMS.find((r) => r.id === roomType) || ROOMS[0];

  return (
    <div className="space-y-16 pb-20 text-slate-100">
      
      {/* Contact Hero */}
      <section className="relative py-24 bg-gradient-to-b from-purple-950 via-slate-950 to-slate-950 border-b border-purple-900/40 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
            24/7 RECEPTION & RESERVATIONS
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            {lang === 'tr' ? 'TÜLM OTEL HOTEL İletişim' : 'Contact TÜLM OTEL HOTEL'}
          </h1>
          <p className="text-base sm:text-lg text-purple-200/90 max-w-xl mx-auto font-sans font-light">
            {lang === 'tr'
              ? 'Konaklamanızı rahat ve keyifli kılmak için buradayız.'
              : 'We are here to help make your stay comfortable and enjoyable.'}
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Info & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="glass-panel p-8 rounded-3xl border border-purple-700/40 space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-white">TÜLM OTEL HOTEL</h2>
                <p className="text-xs text-amber-300 font-medium mt-1">Bandırma / Balıkesir · Türkiye</p>
              </div>

              <p className="text-xs text-purple-200 leading-relaxed">
                {lang === 'tr'
                  ? 'Rezervasyon talepleri, fiyat bilgisi veya yol tarifi için bize doğrudan telefonla ulaşabilir veya formu doldurabilirsiniz.'
                  : 'For booking requests, inquiries, or directions, contact us directly via phone or submit the reservation form below.'}
              </p>

              <div className="space-y-4 text-xs pt-2">
                
                {/* Phone */}
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-purple-950/60 border border-purple-800/50 hover:border-amber-400/80 transition-all group"
                >
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-[10px] text-purple-400 uppercase font-bold block">{lang === 'tr' ? 'Telefon & Whatsapp' : 'Phone & Whatsapp'}</span>
                    <span className="text-sm font-bold text-white">{HOTEL_INFO.phone}</span>
                  </div>
                </a>

                {/* Address */}
                <a
                  href={HOTEL_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-purple-950/60 border border-purple-800/50 hover:border-amber-400/80 transition-all group"
                >
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-[10px] text-purple-400 uppercase font-bold block">{lang === 'tr' ? 'Adres' : 'Address'}</span>
                    <span className="text-xs text-purple-200 leading-relaxed block mt-0.5">{HOTEL_INFO.address}</span>
                  </div>
                </a>

                {/* Reception Hours */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-purple-950/60 border border-purple-800/50">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-purple-400 uppercase font-bold block">{lang === 'tr' ? 'Resepsiyon Hizmeti' : 'Front Desk Hours'}</span>
                    <span className="text-xs font-semibold text-white">24/7 {lang === 'tr' ? 'Kesintisiz Açık' : 'Always Open'}</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="flex-1 py-3 px-4 rounded-xl bg-purple-900/80 border border-purple-600/60 hover:bg-purple-800 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>{lang === 'tr' ? 'Hemen Ara' : 'Call Now'}</span>
                </a>

                <a
                  href={HOTEL_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

          {/* Column 2: Booking / Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-purple-700/40 relative">
              
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-white">
                  {lang === 'tr' ? 'Rezervasyon & İletişim Formu' : 'Booking Request Form'}
                </h3>
                <p className="text-xs text-purple-300 mt-1">
                  {lang === 'tr'
                    ? 'Bilgilerinizi doldurun, resepsiyonumuz oda durumunu hemen kontrol etsin.'
                    : 'Fill out your stay details below and our front desk will verify availability.'}
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl font-bold text-white">
                      {lang === 'tr' ? 'Talebiniz Başarıyla İletildi!' : 'Request Sent Successfully!'}
                    </h4>
                    <p className="text-xs text-purple-300 max-w-md mx-auto">
                      {lang === 'tr'
                        ? 'TÜLM OTEL HOTEL resepsiyonu en kısa sürede telefon veya e-posta ile sizinle iletişime geçecektir.'
                        : 'TÜLM OTEL HOTEL front desk will contact you shortly via phone or email.'}
                    </p>
                  </div>

                  <div className="bg-purple-950/80 border border-purple-800/60 rounded-2xl p-5 text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between border-b border-purple-800/40 pb-2">
                      <span className="text-purple-400">{lang === 'tr' ? 'Referans Kodu:' : 'Reference Code:'}</span>
                      <span className="font-mono text-amber-300 font-bold text-sm">{refCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-400">{lang === 'tr' ? 'Oda:' : 'Room:'}</span>
                      <span className="text-white font-medium">{lang === 'tr' ? currentRoom.nameTr : currentRoom.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-400">{lang === 'tr' ? 'Telefon:' : 'Phone:'}</span>
                      <span className="text-purple-200">{phone}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="py-2.5 px-6 rounded-xl bg-purple-900/60 border border-purple-700/60 hover:bg-purple-800 text-xs text-purple-200"
                  >
                    {lang === 'tr' ? 'Yeni Mesaj Gönder' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-purple-200 mb-1">
                        {lang === 'tr' ? 'Adınız Soyadınız' : 'Full Name'} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ahmet Yılmaz"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-slate-900 border border-purple-700/50 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-purple-400/40 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-purple-200 mb-1">
                        {lang === 'tr' ? 'E-posta Adresi' : 'Email Address'}
                      </label>
                      <input
                        type="email"
                        placeholder="ahmet@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-900 border border-purple-700/50 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-purple-400/40 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  {/* Phone & Room Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-purple-200 mb-1">
                        {lang === 'tr' ? 'Telefon Numarası' : 'Phone Number'} *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+90 266 714 44 25"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-900 border border-purple-700/50 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-purple-400/40 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-purple-200 mb-1 flex items-center gap-1">
                        <BedDouble className="w-3.5 h-3.5 text-amber-400" />
                        <span>{lang === 'tr' ? 'Oda Tercihi' : 'Room Type'}</span>
                      </label>
                      <select
                        value={roomType}
                        onChange={(e) => setRoomType(e.target.value)}
                        className="w-full bg-slate-900 border border-purple-700/50 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      >
                        {ROOMS.map((r) => (
                          <option key={r.id} value={r.id} className="bg-slate-950 text-white">
                            {lang === 'tr' ? r.nameTr : r.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Dates & Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-purple-200 mb-1 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-amber-400" />
                        <span>{lang === 'tr' ? 'Giriş Tarihi' : 'Check-In'}</span>
                      </label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full bg-slate-900 border border-purple-700/50 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-purple-200 mb-1 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-amber-400" />
                        <span>{lang === 'tr' ? 'Çıkış Tarihi' : 'Check-Out'}</span>
                      </label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full bg-slate-900 border border-purple-700/50 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-purple-200 mb-1">
                        {lang === 'tr' ? 'Kişi Sayısı' : 'Number of Guests'}
                      </label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full bg-slate-900 border border-purple-700/50 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="1">1 {lang === 'tr' ? 'Kişi' : 'Guest'}</option>
                        <option value="2">2 {lang === 'tr' ? 'Kişi' : 'Guests'}</option>
                        <option value="3">3 {lang === 'tr' ? 'Kişi' : 'Guests'}</option>
                        <option value="4">4 {lang === 'tr' ? 'Kişi' : 'Guests'}</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-purple-200 mb-1">
                      {lang === 'tr' ? 'Mesajınız veya İstekleriniz' : 'Message or Special Requirements'}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={lang === 'tr' ? 'Varış saatiniz veya ek sorularınız...' : 'Expected arrival time or additional notes...'}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-slate-900 border border-purple-700/50 rounded-xl px-3.5 py-2 text-sm text-white placeholder-purple-400/40 focus:outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 text-amber-300" />
                    <span>{isSubmitting ? (lang === 'tr' ? 'Gönderiliyor...' : 'Sending...') : (lang === 'tr' ? 'Rezervasyon Talebi Gönder' : 'Send Booking Request')}</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Embedded Location Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="glass-panel p-6 rounded-3xl border border-purple-800/60 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-purple-800/40 pb-4">
            <div>
              <h3 className="font-serif text-xl font-bold text-white">
                {lang === 'tr' ? 'Harita ve Konum' : 'Bandırma Location & Directions'}
              </h3>
              <p className="text-xs text-purple-300">Haydar Çavuş, Saatçiler Cd NO:16, 10200 Bandırma/Balıkesir, Türkiye</p>
            </div>
            <a
              href={HOTEL_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-900/60 border border-purple-600/50 hover:bg-purple-800 text-amber-300 text-xs font-semibold"
            >
              <span>{lang === 'tr' ? 'Google Haritalarda Aç' : 'Open in Google Maps'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-purple-700/40 h-80 bg-slate-900">
            <iframe
              title="TÜLM OTEL HOTEL Bandırma Full Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.784534839841!2d27.9714!3d40.3528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIxJ0Ew.MSJOIDI3wrA1OCcyNy4wIkU!5e0!3m2!1sen!2str!4v1680000000000!5m2!1sen!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

    </div>
  );
};
