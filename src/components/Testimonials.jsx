import React from 'react';
import { Star, CheckCircle2, ShieldCheck, ShoppingBag, ExternalLink } from 'lucide-react';
import { reviews, shopSocialProof } from '../data/reviews';
import { channels } from '../data/channels';

export default function Testimonials() {
  return (
    <section id="ulasan" className="py-14 md:py-20 bg-gradient-to-b from-white to-pastel-rose-50/40 border-b border-rose-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200">
            Ulasan Siswi &amp; Mahasiswi
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Disukai Ribuan Pelajar &amp; Mahasiswi Se-Indonesia
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Pengalaman nyata teman-teman sekolah dan kampus yang pundaknya kini bebas pegal bersama ransel enteng TSY BAG.
          </p>
        </div>

        {/* Social Proof Metric Bar */}
        <div className="bg-white rounded-3xl border border-rose-200 shadow-soft p-6 sm:p-8 mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-rose-100">
            <div className="pt-2 md:pt-0">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">{shopSocialProof.rating}</span>
                <span className="text-xs font-semibold text-slate-400">/ 5.0</span>
              </div>
              <p className="text-xs font-bold text-slate-600">Shopee Star+ Rating</p>
            </div>

            <div className="pt-4 md:pt-0">
              <p className="text-2xl sm:text-3xl font-extrabold text-rose-600 mb-1">{shopSocialProof.totalReviews}</p>
              <p className="text-xs font-bold text-slate-600">Total Penilaian Pembeli</p>
            </div>

            <div className="pt-4 md:pt-0">
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600 mb-1">{shopSocialProof.fiveStarPercentage}</p>
              <p className="text-xs font-bold text-slate-600">Ulasan Bintang 5</p>
            </div>

            <div className="pt-4 md:pt-0">
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">{shopSocialProof.unitsSold}</p>
              <p className="text-xs font-bold text-slate-600">Pcs Tas Terjual</p>
            </div>
          </div>
        </div>

        {/* Student Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-rose-100 shadow-soft hover:shadow-md transition flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Rating Stars & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1" aria-label={`Rating ${item.rating} dari 5 bintang`}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Pembeli Terverifikasi</span>
                  </div>
                </div>

                {/* Product Tag */}
                <div className="inline-block text-[11px] font-semibold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-md">
                  Varian: {item.productBought}
                </div>

                {/* Review Content */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  "{item.content}"
                </p>
              </div>

              {/* Reviewer Bio */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pastel-rose-100 text-rose-600 font-extrabold text-xs flex items-center justify-center border border-rose-200">
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>
                <span className="text-[11px] text-slate-400">{item.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Shopee Review CTA */}
        <div className="mt-10 text-center">
          <a
            href={channels.shopeeStore}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lihat seluruh 14.375 ulasan asli pembeli di Shopee Star TSY BAG"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-white text-[#ee4d2d] border-2 border-orange-200 hover:border-[#ee4d2d] hover:bg-orange-50/50 shadow-sm transition"
          >
            <ShoppingBag className="w-4 h-4 text-[#ee4d2d]" />
            <span>Lihat Semua 14.375+ Ulasan di Shopee Star+</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
}