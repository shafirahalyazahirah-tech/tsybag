import React from 'react';
import {
  Sparkles,
  Star,
  Truck,
  Clock,
  ShieldCheck,
  ShoppingBag,
  Radio,
  MessageCircle,
  Droplets,
  Feather,
  Eye
} from 'lucide-react';
import { channels } from '../data/channels';

export default function Hero({ onSelectImage }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 md:py-18 bg-gradient-to-b from-white via-pastel-rose-50/40 to-pastel-cream">
      {/* Subtle decorative background blur spots */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-pastel-lavender-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-80 h-80 bg-pastel-rose-200/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Attention Copywriting */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Target Audience Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-rose-100 border border-pastel-rose-200 text-pastel-rose-700 text-xs font-bold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-pastel-rose-600" />
              <span>Ransel Favorit Pelajar &amp; Mahasiswi</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Bawa Laptop &amp; Buku Nggak Pake Pegal. <span className="text-transparent bg-clip-text bg-gradient-to-r from-pastel-rose-500 via-rose-600 to-pastel-lavender-500">Tetap Estetik Buat OOTD!</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Produksi langsung dari konveksi Tasikmalaya. Ransel bahan <strong>Parasut JN tebal</strong> ini super ringan (cuma 250 gram!) dan tahan cipratan air. Dilengkapi slot laptop 14 inch berbusa tebal dengan pilihan warna pastel yang lucu. Kualitas butik, <strong>harga pabrik mulai 40 ribuan aja!</strong>
            </p>

            {/* Trust Proof Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-700 pt-1">
              <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200 text-amber-900">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span className="font-bold">4.65 / 5.0</span>
                <span className="text-amber-700">(14.375+ Review)</span>
              </div>

              <div className="flex items-center gap-1.5 bg-rose-50 px-3 py-1.5 rounded-full border border-rose-200 text-rose-800">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
                <span>Shopee Star+ Seller</span>
              </div>

              <div className="flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 text-emerald-800">
                <Truck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Bebas Bayar di Tempat (COD)</span>
              </div>

              <div className="flex items-center gap-1.5 bg-sky-50 px-3 py-1.5 rounded-full border border-sky-200 text-sky-800">
                <Clock className="w-3.5 h-3.5 text-sky-600" />
                <span>Kirim Dihari yang Sama (Max 17.00)</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={channels.shopeeStore}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Checkout langsung di Shopee Star TSY BAG dengan sistem COD"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#ee4d2d] hover:bg-[#d73213] shadow-md shadow-orange-500/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Checkout di Shopee (Bisa COD)</span>
              </a>

              <a
                href={channels.tiktokShop}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Checkout di katalog TikTok Shop TSY BAG"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-black shadow-md shadow-slate-900/15 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
              >
                <Radio className="w-4 h-4 text-rose-400" />
                <span>Checkout di TikTok Shop</span>
              </a>

              <a
                href={channels.whatsappCS}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Minta foto real pict ke Customer Service WhatsApp (${channels.phone})`}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all text-sm sm:text-base"
                title={`Hubungi Admin CS ${channels.phone}`}
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Minta Real Pict Admin</span>
              </a>
            </div>

          </div>

          {/* Right Column: Real Student Lifestyle Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md">

              {/* Decorative Pastel Frame */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-pastel-rose-200 via-pastel-lavender-200 to-pastel-peach-200 rounded-3xl transform rotate-2 blur-sm"></div>

              <div
                role="button"
                tabIndex={0}
                aria-label="Klik untuk memperbesar foto model ransel TSY Megumi"
                className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white cursor-pointer group bg-slate-100 focus:outline-none focus:ring-4 focus:ring-rose-400"
                onClick={() => onSelectImage('/assets/hero_student.jpg')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectImage('/assets/hero_student.jpg');
                  }
                }}
              >
                <img
                  src="/assets/hero_student.jpg"
                  alt="Siswi dan mahasiswi membawa ransel TSY Megumi cerah di kampus"
                  width="600"
                  height="720"
                  fetchPriority="high"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                  <p className="text-[11px] uppercase tracking-wider font-extrabold text-pastel-rose-300">
                    Model: TSY Megumi Pastel
                  </p>
                  <p className="text-sm font-bold text-white/95">
                    Bawaan berat tetap nyaman dipakai seharian
                  </p>
                </div>

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-slate-700 shadow flex items-center gap-1">
                  <Eye className="w-3 h-3 text-rose-500" />
                  <span>Zoom Foto</span>
                </div>
              </div>

              {/* Floating Badge 1: Parasut JN */}
              <div className="absolute -top-3 -left-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-pastel-rose-100 flex items-center gap-2.5 animate-float">
                <div className="w-8 h-8 rounded-lg bg-pastel-rose-100 text-pastel-rose-600 flex items-center justify-center">
                  <Droplets className="w-4 h-4 text-rose-600" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Bahan Parasut JN</p>
                  <p className="text-xs font-extrabold text-slate-800">Aman Kena Gerimis</p>
                </div>
              </div>

              {/* Floating Badge 2: Bobot Enteng 250g */}
              <div className="absolute -bottom-3 -right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-pastel-rose-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Feather className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Super Ringan</p>
                  <p className="text-xs font-extrabold text-slate-800">Cuma 250 Gram</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}