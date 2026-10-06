import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { faqs } from '../data/faqs';
import { channels } from '../data/channels';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-14 md:py-20 bg-pastel-cream/60 border-t border-rose-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-600 bg-white px-3.5 py-1.5 rounded-full border border-slate-200">
            Info Seputar Order
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Yang Paling Sering Ditanyain (FAQ)
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Jawaban cepat buat kamu soal ukuran tas, detail bahan, cara bayar COD, sampai jadwal live.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-rose-100 overflow-hidden shadow-soft transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-rose-600 transition"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-rose-500 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'transform rotate-180' : ''
                      }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-rose-50">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-8 text-center bg-white border border-emerald-200 rounded-2xl p-5 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-extrabold text-sm text-slate-900">Masih ragu soal ukuran tas atau stok warna?</h4>
            <p className="text-xs text-slate-600">Nggak usah sungkan chat, admin kita fast response dan siap bantu.</p>
          </div>
          <a
            href={channels.whatsappCS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Admin (+62 815-6495-9640)</span>
          </a>
        </div>

      </div>
    </section>
  );
}