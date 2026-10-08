import React from 'react';
import { MapPin, Phone, Radio, ShoppingBag } from 'lucide-react';
import { channels } from '../data/channels';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-rose-100 pt-12 pb-24 md:pb-12 text-slate-600 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-rose-100">

          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/assets/tsy_avatar.jpg"
                alt="Logo TSY BAG"
                width="36"
                height="36"
                className="w-9 h-9 rounded-full border border-rose-300 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=TSY+BAG&background=162447&color=fda4b8&size=100";
                }}
              />
              <span className="font-extrabold text-base text-slate-900">TSY.bag Official Store</span>
            </div>
            <p className="leading-relaxed max-w-sm">
              Produsen tangan pertama ransel dan tas wanita dari konveksi Tasikmalaya. Bikin gaya makin estetik dengan tas yang ringan, kuat buat bawa buku atau laptop, plus harga bersahabat buat kantong pelajar dan mahasiswi.
            </p>
            <div className="flex items-center gap-2 text-slate-700 font-semibold">
              <MapPin className="w-4 h-4 text-rose-500 flex-shrink-0" />
              <span>Kota Tasikmalaya, Jawa Barat, Indonesia</span>
            </div>
          </div>

          {/* Quick Schedule & Contact */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="font-extrabold text-slate-900 text-sm">Info Pengiriman &amp; Layanan</h4>
            <ul className="space-y-1.5 leading-relaxed">
              <li className="flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                <span>Live Sale: <strong>14.30 &amp; 18.30 WIB</strong> (Tiap Hari)</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Chat Admin: <strong>{channels.phone}</strong></span>
              </li>
              <li>Jadwal Kirim: Senin - Sabtu (Max bayar 17.00 WIB)</li>
              <li>Toko Terverifikasi: Shopee Star+ Seller</li>
            </ul>
          </div>

          {/* Channels Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-extrabold text-slate-900 text-sm">Pilihan Checkout</h4>
            <div className="flex flex-col gap-1.5 font-medium">
              <a href={channels.shopeeStore} target="_blank" rel="noopener noreferrer" aria-label="Buka Toko Shopee Star TSY BAG" className="hover:text-rose-600 transition flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5 text-orange-500" />
                <span>Shopee Star+ (fashionbag_bandung)</span>
              </a>
              <a href={channels.tiktokShop} target="_blank" rel="noopener noreferrer" aria-label="Buka Toko TikTok Shop TSY BAG" className="hover:text-rose-600 transition flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-slate-900" />
                <span>TikTok Shop (@tsy.bag)</span>
              </a>
              <a href={channels.whatsappCS} target="_blank" rel="noopener noreferrer" aria-label={`Chat WhatsApp Admin TSY BAG (${channels.phone})`} className="hover:text-rose-600 transition flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Admin CS</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-[11px] text-slate-500">
          <p>© 2026 TSY BAG Official Shop. All rights reserved.</p>
          <p>Didesain &amp; Dikembangkan bersama Hanucazari Digital</p>
        </div>

      </div>
    </footer>
  );
}