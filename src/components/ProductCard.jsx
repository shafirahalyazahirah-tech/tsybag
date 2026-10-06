import React from 'react';
import { Star, Check, ShoppingBag, Radio, MessageCircle, Eye } from 'lucide-react';

export default function ProductCard({ product, onSelectImage }) {
  const getTagClasses = (variant) => {
    switch (variant) {
      case 'pink':
        return 'bg-pastel-rose-500 text-white';
      case 'lavender':
        return 'bg-pastel-lavender-500 text-white';
      case 'peach':
        return 'bg-amber-500 text-white';
      default:
        return 'bg-slate-900 text-white';
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-rose-100 overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col group">

      {/* Product Image Frame */}
      <div
        className="relative h-64 sm:h-72 overflow-hidden bg-slate-100 cursor-pointer"
        onClick={() => onSelectImage(product.image)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className={`text-[10px] sm:text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm ${getTagClasses(product.tagVariant)}`}>
            {product.tag}
          </span>
          <span className="bg-white/90 backdrop-blur-sm text-slate-800 text-[11px] font-bold px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
            <span>{product.ratingScore}</span>
          </span>
        </div>

        {/* Hover View Hint */}
        <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5 backdrop-blur-[2px]">
          <Eye className="w-4 h-4" />
          <span>Zoom Foto</span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full">
              {product.categoryLabel}
            </span>
            <span className="text-[11px] text-slate-400 line-through">
              {product.originalPrice}
            </span>
          </div>

          <h3 className="font-extrabold text-lg text-slate-900 leading-snug group-hover:text-rose-600 transition">
            {product.name}
          </h3>

          <div className="flex items-baseline gap-2 mt-1 mb-2.5">
            <span className="text-lg sm:text-xl font-extrabold text-rose-600">
              {product.price}
            </span>
            <span className="text-xs text-slate-500">
              ({product.reviewsCount}+ Review)
            </span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            {product.desc}
          </p>

          {/* Color Palette Dots */}
          {product.colorPalette && (
            <div className="mb-4">
              <span className="text-[11px] font-bold text-slate-500 block mb-1.5">
                Pilihan Warna Estetik:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {product.colorPalette.map((col, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full border border-slate-200 bg-slate-50 text-slate-700 font-medium"
                    title={col.name}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-black/10"
                      style={{ backgroundColor: col.hex }}
                    ></span>
                    <span>{col.name}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Specification Highlights */}
          <div className="space-y-1.5 pt-3 border-t border-slate-100">
            {product.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Multi-Channel CTAs */}
        <div className="pt-4 border-t border-slate-100 space-y-2">
          {/* Primary Shopee Star+ */}
          <a
            href={product.shopeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#ee4d2d] hover:bg-[#d73213] transition shadow-sm hover:shadow"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Checkout Shopee (Bisa COD)</span>
          </a>

          {/* Secondary Buttons: TikTok Shop & WhatsApp CS */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href={product.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-black transition shadow-sm"
            >
              <Radio className="w-3.5 h-3.5 text-rose-400" />
              <span>TikTok Shop</span>
            </a>

            <a
              href={product.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition"
              title="Tanya stok atau minta real pict via WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Chat Admin</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}