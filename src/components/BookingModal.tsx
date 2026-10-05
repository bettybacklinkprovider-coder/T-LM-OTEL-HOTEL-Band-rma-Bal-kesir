import React, { useState, useEffect } from 'react';
import { X, Calendar as CalendarIcon, User, Phone, Mail, CheckCircle2, MessageCircle, BedDouble } from 'lucide-react';
import { ROOMS, HOTEL_INFO } from '../data/hotelData';
import { useApp } from '../context/AppContext';

export const BookingModal: React.FC = () => {
  const { isBookingOpen, closeBooking, selectedRoomId, lang } = useApp();

  const [roomId, setRoomId] = useState<string>(ROOMS[0].id);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [specialRequests, setSpecialRequests] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  // Set default dates (tomorrow and day after tomorrow)
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfter = new Date(today);
    dayAfter.setDate(dayAfter.getDate() + 3);

    setCheckIn(tomorrow.toISOString().split('T')[0]);
    setCheckOut(dayAfter.toISOString().split('T')[0]);
  }, []);

  // Update selected room if trigger passes a specific room ID
  useEffect(() => {
    if (selectedRoomId && ROOMS.some((r) => r.id === selectedRoomId)) {
      setRoomId(selectedRoomId);
    }
  }, [selectedRoomId]);

  if (!isBookingOpen) return null;

  const currentRoom = ROOMS.find((r) => r.id === roomId) || ROOMS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !checkIn || !checkOut) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const code = 'TULM-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmationCode(code);
      setIsSubmitting(false);
      setBookingConfirmed(true);
    }, 600);
  };

  const handleReset = () => {
    setBookingConfirmed(false);
    closeBooking();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-xl rounded-2xl border border-purple-600/30 shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 p-5 border-b border-purple-800/40 flex items-center justify-between shrink-0">
          <div>
            <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <span>{lang === 'tr' ? 'Oda Rezervasyonu' : 'Book Your Stay'}</span>
            </h3>
            <p className="text-xs text-amber-300 font-medium">TÜLM OTEL HOTEL · Bandırma</p>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-full bg-purple-900/50 text-purple-300 hover:text-white hover:bg-purple-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-purple-100">
          {bookingConfirmed ? (
            <div className="text-center py-6 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              
              <div className="space-y-2">
                <h4 className="font-serif text-2xl font-bold text-white">
                  {lang === 'tr' ? 'Rezervasyon Talebiniz Alındı!' : 'Reservation Request Received!'}
                </h4>
                <p className="text-xs text-purple-300 max-w-md mx-auto">
                  {lang === 'tr'
                    ? 'Talebiniz resepsiyonumuza iletilmiştir. En kısa sürede onay için sizinle iletişime geçeceğiz.'
                    : 'Your booking request has been forwarded to our front desk. We will contact you shortly to confirm.'}
                </p>
              </div>

              <div className="bg-purple-950/70 border border-purple-800/60 rounded-xl p-4 text-left space-y-2 text-xs">
                <div className="flex justify-between items-center border-b border-purple-800/40 pb-2">
                  <span className="text-purple-400">{lang === 'tr' ? 'Rezervasyon Kodu:' : 'Reference Code:'}</span>
                  <span className="font-mono text-amber-300 font-bold text-sm tracking-wider">{confirmationCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-400">{lang === 'tr' ? 'Seçilen Oda:' : 'Room Type:'}</span>
                  <span className="font-semibold text-white">{lang === 'tr' ? currentRoom.nameTr : currentRoom.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-400">{lang === 'tr' ? 'Giriş - Çıkış:' : 'Dates:'}</span>
                  <span className="text-purple-200">{checkIn} → {checkOut}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-400">{lang === 'tr' ? 'Misafir:' : 'Guests:'}</span>
                  <span className="text-purple-200">{guests} {lang === 'tr' ? 'Kişi' : 'Guest(s)'}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://wa.me/902667144425?text=Merhaba,%20${confirmationCode}%20kodlu%20rezervasyonum%20hakkinda%20bilgi%20almak%20istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center justify-center gap-2 shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp {lang === 'tr' ? 'Onayı Al' : 'Instant Confirmation'}</span>
                </a>
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="py-3 px-4 rounded-xl bg-purple-900/60 border border-purple-700/60 hover:bg-purple-800 text-white font-medium text-xs flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>{HOTEL_INFO.phone}</span>
                </a>
              </div>

              <button
                onClick={handleReset}
                className="text-xs text-purple-400 hover:text-white underline pt-2"
              >
                {lang === 'tr' ? 'Pencereyi Kapat' : 'Close Window'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Room Selector */}
              <div>
                <label className="block text-xs font-semibold text-purple-200 mb-1.5 flex items-center gap-1.5">
                  <BedDouble className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'tr' ? 'Oda Tipi Seçimi' : 'Select Room Type'}</span>
                </label>
                <select
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="w-full bg-slate-900 border border-purple-700/50 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                >
                  {ROOMS.map((r) => (
                    <option key={r.id} value={r.id} className="bg-slate-950 text-white">
                      {lang === 'tr' ? r.nameTr : r.name} — ({r.capacity})
                    </option>
                  ))}
                </select>
              </div>

              {/* Check in & Check out dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-purple-200 mb-1 flex items-center gap-1">
                    <CalendarIcon className="w-3.5 h-3.5 text-amber-400" />
                    <span>{lang === 'tr' ? 'Giriş Tarihi' : 'Check-In Date'}</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-slate-900 border border-purple-700/50 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-purple-200 mb-1 flex items-center gap-1">
                    <CalendarIcon className="w-3.5 h-3.5 text-amber-400" />
                    <span>{lang === 'tr' ? 'Çıkış Tarihi' : 'Check-Out Date'}</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-slate-900 border border-purple-700/50 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Guest Count & Full Name */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-purple-200 mb-1 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-amber-400" />
                    <span>{lang === 'tr' ? 'Kişi Sayısı' : 'Guests'}</span>
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-slate-900 border border-purple-700/50 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="1">1 {lang === 'tr' ? 'Kişi' : 'Person'}</option>
                    <option value="2">2 {lang === 'tr' ? 'Kişi' : 'People'}</option>
                    <option value="3">3 {lang === 'tr' ? 'Kişi' : 'People'}</option>
                    <option value="4">4 {lang === 'tr' ? 'Kişi' : 'People'}</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-purple-200 mb-1">
                    {lang === 'tr' ? 'Adınız Soyadınız' : 'Full Name'} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ahmet Yılmaz"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-900 border border-purple-700/50 rounded-xl px-3.5 py-2 text-sm text-white placeholder-purple-400/50 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-purple-200 mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>{lang === 'tr' ? 'Telefon Numarası' : 'Phone Number'} *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+90 5XX XXX XX XX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-900 border border-purple-700/50 rounded-xl px-3.5 py-2 text-sm text-white placeholder-purple-400/50 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-purple-200 mb-1 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <span>{lang === 'tr' ? 'E-posta' : 'Email Address'}</span>
                  </label>
                  <input
                    type="email"
                    placeholder="ahmet@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-900 border border-purple-700/50 rounded-xl px-3.5 py-2 text-sm text-white placeholder-purple-400/50 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-semibold text-purple-200 mb-1">
                  {lang === 'tr' ? 'Özel İstekler veya Notlar' : 'Special Requests'}
                </label>
                <textarea
                  rows={2}
                  placeholder={lang === 'tr' ? 'Erken giriş, sessiz oda tercihi vb.' : 'Early check-in preference, quiet room request, etc.'}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-slate-900 border border-purple-700/50 rounded-xl px-3.5 py-2 text-sm text-white placeholder-purple-400/50 focus:outline-none focus:border-amber-400 resize-none"
                />
              </div>

              {/* Price Note & Submit */}
              <div className="pt-2 flex items-center justify-between border-t border-purple-800/40">
                <div className="text-xs text-purple-300">
                  <span className="text-amber-300 font-semibold">+90 266 714 44 25</span>
                  <span className="block text-[11px] text-purple-400">{lang === 'tr' ? 'En Uygun Fiyat Garantisi' : 'Direct Booking Best Price'}</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs tracking-wider shadow-lg shadow-purple-600/30 transition-all disabled:opacity-50"
                >
                  {isSubmitting
                    ? (lang === 'tr' ? 'Gönderiliyor...' : 'Submitting...')
                    : (lang === 'tr' ? 'Rezervasyon Talebi Gönder' : 'Submit Reservation Request')}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
