import React from 'react';
import { AlertCircle, CloudRain, Wallet, CheckCircle2, ArrowRight } from 'lucide-react';
import { channels } from '../data/channels';

export default function ProblemSolution() {
  return (
    <section className="py-14 md:py-20 bg-white border-b border-rose-100/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200">
            Realita Aktivitas Siswi &amp; Mahasiswi
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Sering Merasa Pundak Sakit Gara-gara Ransel Sekolah yang Berat?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Banyak tas di pasaran yang fotonya estetik, tapi saat dipakai tasnya sendiri sudah berat, talinya tipis menusuk tulang bahu, dan bahannya kaku.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[#fff9fa] rounded-2xl p-6 border border-rose-100 hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
              <AlertCircle className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-extrabold text-rose-600 tracking-wider uppercase block mb-1">
              01 / Masalah Bobot &amp; Pundak
            </span>
            <h3 className="font-bold text-base text-slate-900 mb-2">
              Bahu Merah &amp; Punggung Pegal
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tas ransel biasa yang belum diisi barang saja sudah berbobot berat. Tali tas tipis tanpa bantalan busa menekan tulang bahu saat dipakai bolak-balik kelas seharian.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#fff9fa] rounded-2xl p-6 border border-rose-100 hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4">
              <CloudRain className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-extrabold text-rose-600 tracking-wider uppercase block mb-1">
              02 / Masalah Cuaca &amp; Bahan
            </span>
            <h3 className="font-bold text-base text-slate-900 mb-2">
              Khawatir Gerimis Tembus ke Buku
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Bahan tas murah biasanya mudah menyerap air hujan. Menimbulkan rasa cemas buku tulis sekolah, tablet, modul tugas, atau mukena basah di jalan saat gerimis tiba-tiba.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#fff9fa] rounded-2xl p-6 border border-rose-100 hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
              <Wallet className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-extrabold text-rose-600 tracking-wider uppercase block mb-1">
              03 / Masalah Harga &amp; Kejujuran
            </span>
            <h3 className="font-bold text-base text-slate-900 mb-2">
              Tas Mall Menguras Uang Saku
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tas ransel bermerek mall di atas Rp 300 ribu menguras jatah bulanan. Beli tas impor murah seringkali kecewa karena foto tidak sesuai aslinya dan tidak bergaransi.
            </p>
          </div>

        </div>

        {/* The Solution Banner */}
        <div className="mt-10 bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" />
              <span>Solusi Tangan Pertama TSY BAG</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold">
              Ransel Parasut JN Tangan Pertama: Ringan 250g, Water-Repellent &amp; Ramah Pelajar
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Diproduksi langsung oleh sentra konveksi toko kami di Tasikmalaya. Menggunakan bahan Parasut JN tebal water-repellent, jahitan rapi, bobot super enteng, dan ukuran transparan.
            </p>
          </div>

          <a 
            href={channels.shopeeStore}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-sm whitespace-nowrap shadow-lg shadow-rose-500/30 transition flex items-center gap-2"
          >
            <span>Kunjungi Toko Shopee Star+</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
