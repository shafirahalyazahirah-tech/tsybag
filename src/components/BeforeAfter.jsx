import React from 'react';
import { X, Check, Sparkles } from 'lucide-react';

export default function BeforeAfter() {
  return (
    <section className="py-14 md:py-20 bg-pastel-cream/70 border-b border-rose-100/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-600 bg-white px-3.5 py-1.5 rounded-full border border-slate-200">
            Perbandingan Nyata Sehari-Hari
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Aktivitas Sebelum &amp; Sesudah Memakai TSY BAG
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Perbedaan kenyamanan nyata untuk siswi dan mahasiswi aktif dari pagi hingga sore hari.
          </p>
        </div>

        {/* 2 Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* BEFORE CARD */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-red-100 shadow-soft relative overflow-hidden">
            <div className="inline-block bg-red-50 text-red-700 text-xs font-extrabold px-3 py-1 rounded-full mb-4 border border-red-200">
              Sebelumnya (Ransel Biasa)
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                <X className="w-3.5 h-3.5" />
              </span>
              Kendala yang Sering Dihadapi
            </h3>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-3 h-3" />
                </div>
                <span>Tasnya sendiri sudah terasa berbobot, tali tipis bikin pundak sakit dan berbekas merah di kulit.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-3 h-3" />
                </div>
                <span>Barang di dalam tas tercampur berantakan karena kompartemen terbatas dan saku botol samping tidak ada.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-3 h-3" />
                </div>
                <span>Bahan kain tipis mudah rembes saat gerimis tiba-tiba turun di perjalanan.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-3 h-3" />
                </div>
                <span>Foto katalog terlihat bagus, tapi aslinya kasar dan resleting gampang macet atau jebol.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-3 h-3" />
                </div>
                <span>Harga di mall mencapai ratusan ribu rupiah menguras tabungan jajan bulanan.</span>
              </li>
            </ul>
          </div>

          {/* AFTER CARD */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-rose-300 shadow-md relative overflow-hidden bg-gradient-to-b from-white to-pastel-rose-50/30">
            <div className="inline-block bg-rose-600 text-white text-xs font-extrabold px-3 py-1 rounded-full mb-4 shadow-sm">
              Sesudah (Memakai TSY BAG)
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
                <Check className="w-3.5 h-3.5" />
              </span>
              Kenyamanan &amp; Spesifikasi Nyata
            </h3>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span><strong>Bobot Super Enteng 250g:</strong> Beban di pundak murni hanya dari isi perlengkapanmu saja.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span><strong>Kompartemen Rapi:</strong> 1 ruang utama leluasa + 1 saku depan zipper + 2 slot samping botol minum/payung.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span><strong>Bahan Parasut JN Water-Repellent:</strong> Serat halus tebal yang menahan percikan air hujan seperti daun talas.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span><strong>Pilihan Warna Pastel Manis:</strong> Pilihan warna Soft Pink, Lilac, Cream, Peach yang matching dengan seragam dan OOTD.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span><strong>Harga Tangan Pertama Mulai Rp 40 Ribuan:</strong> Bisa bayar COD tanpa ATM &amp; garansi ganti baru jika ada cacat.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* THE BRIDGE */}
        <div className="mt-8 text-center bg-white border border-rose-200/80 rounded-2xl p-4 sm:p-5 max-w-3xl mx-auto shadow-sm">
          <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-rose-500 flex-shrink-0" />
            <span>
              <strong>Jembatan Solusinya Adalah TSY BAG:</strong> Menghubungkan kenyamanan bahan Parasut JN yang ringan dan tahan percikan air dengan estetika warna pastel kekinian, langsung dari konveksi tangan pertama Tasikmalaya.
            </span>
          </p>
          <div className="mt-3 pt-3 border-t border-rose-100 flex justify-center">
            <a
              href="#katalog"
              aria-label="Eksplor pilihan ransel di katalog produk"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 transition"
            >
              <span>Eksplor Pilihan Koleksi TSY BAG</span>
              <span>↓</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
