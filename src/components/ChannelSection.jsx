import React from 'react';
import { ShoppingBag, Radio, MessageCircle, ArrowRight, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';
import { channels } from '../data/channels';

export default function ChannelSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-pastel-rose-50/50 border-t border-rose-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Section Header */}
        <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-100 px-3.5 py-1.5 rounded-full">
          Official Store TSY BAG
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
          Checkout Lewat Platform Favoritmu
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl mx-auto">
          Langsung dari produksi (konveksi Tasikmalaya). Checkout sebelum jam 17.00 WIB, pesananmu kita kirim hari ini juga.
        </p>

        {/* 3 Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left">

          {/* Channel 1: Shopee Star+ */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-orange-200 shadow-soft hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between">
            <div className="space-y-3.5">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#ee4d2d] flex items-center justify-center">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider">Toko Resmi</span>
                <h3 className="font-extrabold text-lg text-slate-900">Shopee Star+</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bebas bayar di tempat (COD), klaim Gratis Ongkir XTRA, dan kumpulin cashback koin. Garansi pengiriman aman sampai rumah atau kosan kamu.
              </p>
              <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Rating 4.65 (14.375+ Review)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Batas kirim hari ini 17.00 WIB</span>
                </div>
              </div>
            </div>

            <a
              href={channels.shopeeStore}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-3.5 px-4 rounded-xl bg-[#ee4d2d] hover:bg-[#d73213] text-white font-bold text-xs sm:text-sm text-center transition flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Checkout di Shopee</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Channel 2: TikTok Shop */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-300 shadow-soft hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between">
            <div className="space-y-3.5">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center">
                <Radio className="w-6 h-6 text-rose-500" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider">Live & Shop</span>
                <h3 className="font-extrabold text-lg text-slate-900">TikTok Shop TSY.bag</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Checkout anti ribet via keranjang kuning. Wajib join live kita jam 14.30 & 18.30 WIB buat rebutan voucher ekstra dan flash sale!
              </p>
              <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Radio className="w-3.5 h-3.5 text-rose-500" />
                  <span>Live tiap 14.30 & 18.30 WIB</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Banjir voucher & diskon live</span>
                </div>
              </div>
            </div>

            <a
              href={channels.tiktokShop}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-xs sm:text-sm text-center transition flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Checkout di TikTok Shop</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Channel 3: WhatsApp CS */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-emerald-200 shadow-soft hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between">
            <div className="space-y-3.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Customer Service</span>
                <h3 className="font-extrabold text-lg text-slate-900">WhatsApp Admin</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Masih ragu muat laptop atau binder? Mau minta real pict atau cek stok warna pastel? Chat admin kita aja, dijamin fast response.
              </p>
              <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
                  <span>CS Ramah: {channels.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Aktif selama jam kerja</span>
                </div>
              </div>
            </div>

            <a
              href={channels.whatsappCS}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm text-center transition flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Chat Admin WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}