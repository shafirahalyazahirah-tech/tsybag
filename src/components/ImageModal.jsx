import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function ImageModal({ selectedImage, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, onClose]);

  if (!selectedImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Tampilan foto produk resolusi penuh"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 flex items-center justify-center animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={selectedImage}
          alt="Detail Real Pict Ransel TSY BAG"
          className="w-full max-h-[80vh] object-contain bg-slate-900"
        />

        <button
          onClick={onClose}
          aria-label="Tutup foto perbesar (Esc)"
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-900 font-bold flex items-center justify-center shadow-lg transition focus:outline-none focus:ring-2 focus:ring-rose-500"
          title="Tutup Foto (Esc)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}