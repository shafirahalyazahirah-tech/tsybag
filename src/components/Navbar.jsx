import React from 'react';
import { ShoppingBag, MessageCircle, CheckCircle2, Radio } from 'lucide-react';
import { channels } from '../data/channels';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-rose-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">

        {/* Brand Identity */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-rose-400 rounded-xl p-1 -m-1" aria-label="TSY BAG Official Shop Beranda">
          <div className="relative">
            <img
              src="/assets/tsy_avatar.jpg"
              alt="Logo TSY.bag Official"
              width="44"
              height="44"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-rose-300 shadow-sm object-cover group-hover:scale-105 transition-transform"
              onError={(e) => {
                e.currentTarget.src = "https://ui-avatars.com/api/?name=TSY+BAG&background=162447&color=fda4b8&size=100";
              }}
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" title="Online & Siap Kirim Hari Ini"></span>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight group-hover:text-rose-600 transition-colors">
                TSY.bag Official
              </span>
              <CheckCircle2 className="w-4 h-4 text-sky-500 fill-sky-100" />
            </div>
            <p className="text-[10px] sm:text-xs text-rose-600 font-semibold tracking-wide">
              Pusat Ransel Estetik Tasikmalaya
            </p>
          </div>
        </a>

        {/* Quick Nav Links & Direct Conversion Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={channels.shopeeStore}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kunjungi Toko Shopee Star TSY BAG (Bisa COD)"
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full text-xs font-bold bg-[#ee4d2d] text-white hover:bg-[#d73213] transition shadow-sm hover:shadow"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Shopee (COD)</span>
          </a>

          <a
            href={channels.tiktokShop}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kunjungi Katalog TikTok Shop TSY BAG"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold bg-slate-900 text-white hover:bg-black transition shadow-sm"
          >
            <Radio className="w-3.5 h-3.5 text-rose-400" />
            <span>TikTok Shop</span>
          </a>

          <a
            href={channels.whatsappCS}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat WhatsApp Admin CS TSY BAG (${channels.phone})`}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-sm"
            title={`Chat Admin Fast Response: ${channels.phone}`}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Chat Admin</span>
            <span className="sm:hidden">Admin</span>
          </a>
        </div>

      </div>
    </header>
  );
}