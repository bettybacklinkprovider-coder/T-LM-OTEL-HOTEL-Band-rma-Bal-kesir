import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem, IMAGES } from '../data/hotelData';
import { SafeImage } from './SafeImage';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items, onClose, onNavigate]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-lg p-4 animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 p-2 rounded-full bg-purple-950/80 hover:bg-purple-900 border border-purple-700/50 text-white z-10 transition-colors"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Left */}
      <button
        onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-purple-950/80 hover:bg-purple-900 border border-purple-700/50 text-white z-10 transition-all hover:scale-110"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center">
        <div className="relative rounded-2xl overflow-hidden border border-purple-600/30 shadow-2xl max-h-[70vh]">
          <SafeImage
            src={currentItem.image}
            fallbackSrc={IMAGES.exterior}
            alt={currentItem.title}
            className="w-full h-full object-contain max-h-[70vh]"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center space-y-1 max-w-xl">
          <h4 className="font-serif text-lg font-bold text-white">{currentItem.title}</h4>
          <p className="text-xs text-purple-300">{currentItem.caption}</p>
          <div className="text-[11px] text-amber-400 font-mono pt-1">
            {currentIndex + 1} / {items.length}
          </div>
        </div>
      </div>

      {/* Navigation Right */}
      <button
        onClick={() => onNavigate((currentIndex + 1) % items.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-purple-950/80 hover:bg-purple-900 border border-purple-700/50 text-white z-10 transition-all hover:scale-110"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
