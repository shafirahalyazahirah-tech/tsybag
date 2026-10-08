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
            Curhatan Anak Sekolah &amp; Kampus
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Pundak Sering Pegal Gara-gara Ransel yang Berat?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Pernah ngalamin beli tas yang di foto kelihatan estetik, tapi pas datang aslinya berat, tali tipis bikin bahu sakit, dan bahannya kaku banget?
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
              01 / Bikin Pegal
            </span>
            <h3 className="font-bold text-base text-slate-900 mb-2">
              Bahu Sakit &amp; Punggung Pegal
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tas kosongnya aja udah berat, apalagi ditambah buku tebal atau laptop. Ditambah tali tipis tanpa busa, bikin bahu auto pegal buat jalan atau pindah kelas seharian.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#fff9fa] rounded-2xl p-6 border border-rose-100 hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4">
              <CloudRain className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-extrabold text-rose-600 tracking-wider uppercase block mb-1">
              02 / Gampang Tembus Air
            </span>
            <h3 className="font-bold text-base text-slate-900 mb-2">
              Panik Kalau Tiba-Tiba Gerimis
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Bahan tas kain biasa gampang banget nyerap air. Bikin overthinking kalau tiba-tiba gerimis di jalan, takut laptop, iPad, dan buku catatan basah kuyup.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#fff9fa] rounded-2xl p-6 border border-rose-100 hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
              <Wallet className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-extrabold text-rose-600 tracking-wider uppercase block mb-1">
              03 / Bikin Boncos
            </span>
            <h3 className="font-bold text-base text-slate-900 mb-2">
              Tas Mall Kemahalan Buat Pelajar
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Beli tas brand mall ratusan ribu sayang uang jajan. Giliran beli tas impor murah meriah, malah zonk karena aslinya beda sama foto dan sebulan udah jebol.
            </p>
          </div>

        </div>

        {/* The Solution Banner */}
        <div className="mt-10 bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" />
              <span>TSY.bag Hadir Jadi Solusi</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold">
              Ransel Super Ringan 250g, Anti Gerimis &amp; Harga Bersahabat!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Langsung dari konveksi Tasikmalaya. Pakai material Parasut JN tebal yang tahan cipratan air, jahitan super kuat buat bawa laptop, dan pastinya enteng banget dipakai seharian.
            </p>
          </div>

          <a
            href={channels.shopeeStore}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cek promo ransel TSY BAG di toko Shopee Star"
            className="px-6 py-3.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-sm whitespace-nowrap shadow-lg shadow-rose-500/30 transition flex items-center gap-2"
          >
            <span>Cek Promonya di Shopee</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}