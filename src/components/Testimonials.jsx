import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Quote } from 'lucide-react';
import { reviews, shopSocialProof } from '../data/reviews';

export default function Testimonials() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200">
            Ulasan Pembeli Asli
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Dipercaya 14.375+ Pelanggan Shopee Star+
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Pengalaman nyata siswi dan mahasiswi se-Indonesia tentang bobot enteng 250 gram, bahan Parasut JN, dan jahitan rapi konveksi.
          </p>
        </div>

        {/* Shopee Star+ Statistics Strip */}
        <div className="bg-gradient-to-r from-amber-500/10 via-rose-50 to-purple-500/10 rounded-2xl border border-amber-200/80 p-5 mb-10 max-w-4xl mx-auto shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="flex items-center justify-center gap-1 text-amber-500 mb-0.5">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-xl sm:text-2xl font-black text-slate-900">{shopSocialProof.rating}</span>
              </div>
              <p className="text-xs text-slate-600 font-semibold">Rating Toko Star+</p>
            </div>

            <div>
              <p className="text-xl sm:text-2xl font-black text-slate-900 mb-0.5">{shopSocialProof.totalReviews}</p>
              <p className="text-xs text-slate-600 font-semibold">Total Ulasan Pembeli</p>
            </div>

            <div>
              <p className="text-xl sm:text-2xl font-black text-emerald-600 mb-0.5">{shopSocialProof.fiveStarPercentage}</p>
              <p className="text-xs text-slate-600 font-semibold">Puas Bintang 5</p>
            </div>

            <div>
              <p className="text-xl sm:text-2xl font-black text-sky-600 mb-0.5">{shopSocialProof.responseRate}</p>
              <p className="text-xs text-slate-600 font-semibold">Performa Balas Chat</p>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((rev) => (
            <div 
              key={rev.id} 
              className="bg-[#fffbfc] rounded-3xl p-5 sm:p-6 border border-rose-100 shadow-soft flex flex-col justify-between hover:shadow-md transition"
            >
              <div className="space-y-3">
                {/* Rating Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">{rev.date}</span>
                </div>

                {/* Product Purchased Tag */}
                <span className="text-[11px] font-semibold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full inline-block">
                  {rev.productBought}
                </span>

                {/* Content */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.content}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 mt-4 border-t border-rose-100/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-rose-100 text-rose-700 font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                  {rev.avatar}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <p className="font-extrabold text-xs sm:text-sm text-slate-900 truncate">{rev.name}</p>
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 fill-sky-100 flex-shrink-0" />
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 truncate">{rev.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
