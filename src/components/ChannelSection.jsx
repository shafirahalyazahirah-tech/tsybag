import React from 'react';
import { ShoppingBag, Radio, MessageCircle, ArrowRight, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';
import { channels } from '../data/channels';

export default function ChannelSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-pastel-rose-50/50 border-t border-rose-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Section Header */}
        <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-100 px-3.5 py-1.5 rounded-full">
          Kanal Pembelian Resmi TSY BAG
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
          Pilih Jalur Belanja Paling Nyaman Untukmu
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl mx-auto">
          Semua pesanan dikemas rapi dan dikirim langsung dari workshop konveksi kami di Kota Tasikmalaya. Order sebelum 17.00 WIB langsung dikirim hari ini!
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
                Bisa bayar COD tanpa rekening bank, klaim Voucher Gratis Ongkir XTRA, cashback koin, dan garansi pengiriman aman sampai depan pintu rumah.
              </p>
              <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Rating 4.65 (14.375+ Ulasan)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Kirim Hari Ini (s.d 17.00 WIB)</span>
                </div>
              </div>
            </div>

            <a 
              href={channels.shopeeStore}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-3.5 px-4 rounded-xl bg-[#ee4d2d] hover:bg-[#d73213] text-white font-bold text-xs sm:text-sm text-center transition flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Kunjungi Shopee Star+</span>
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
                <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider">Live &amp; Keranjang</span>
                <h3 className="font-extrabold text-lg text-slate-900">TikTok Shop TSY.bag</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Beli langsung via Keranjang Kuning! Nonton siaran live streaming jam 14.30 &amp; 18.30 WIB untuk klaim kupon diskon live dan flash sale terbatas.
              </p>
              <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Radio className="w-3.5 h-3.5 text-rose-500" />
                  <span>Live Rutin 14.30 &amp; 18.30 WIB</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Diskon Koin &amp; Voucher Live</span>
                </div>
              </div>
            </div>

            <a 
              href={channels.tiktokShop}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-xs sm:text-sm text-center transition flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Buka TikTok Shop</span>
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
                <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Layanan Pelanggan</span>
                <h3 className="font-extrabold text-lg text-slate-900">WhatsApp CS Resmi</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Mau tanya muat laptop apa tidak, cek ketersediaan warna pastel, atau minta foto/video real pict tanpa filter? Admin konveksi kami siap melayani.
              </p>
              <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
                  <span>CS Ramah: {channels.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Respon Cepat Jam Kerja</span>
                </div>
              </div>
            </div>

            <a 
              href={channels.whatsappCS}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm text-center transition flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Chat WhatsApp Admin CS</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
