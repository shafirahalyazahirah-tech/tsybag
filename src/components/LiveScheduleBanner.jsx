import React from 'react';
import { Radio, Clock, Sparkles, CheckCircle2, Bell, ExternalLink } from 'lucide-react';
import { useLiveStatus } from '../hooks/useLiveStatus';
import { liveSchedule } from '../data/liveSchedule';
import { channels } from '../data/channels';

export default function LiveScheduleBanner() {
  const { isLiveNow, currentSessionTitle, nextSessionTime, countdownText, wibTimeStr } = useLiveStatus();

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-pastel-rose-50 via-white to-pastel-lavender-50 border-y border-rose-100/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Radio className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
            <span>Siaran Langsung Interaktif</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Jadwal Live Streaming Rutin Setiap Hari
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Ingin lihat real pict warna pastel atau tes muat laptop sebelum beli? Tonton siaran live kami di TikTok &amp; Shopee Live!
          </p>
        </div>

        {/* Live Status Card */}
        <div className="bg-white rounded-3xl border border-rose-200 shadow-soft p-6 sm:p-8 relative overflow-hidden">
          
          {/* Decorative Corner Badge */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-rose-100">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isLiveNow ? 'bg-rose-500 text-white animate-pulse' : 'bg-rose-100 text-rose-600'}`}>
                <Radio className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className={`inline-block w-2.5 h-2.5 rounded-full ${isLiveNow ? 'bg-rose-500 animate-ping' : 'bg-emerald-500'}`}></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Waktu Saat Ini: {wibTimeStr}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  {isLiveNow ? `Sedang Live: ${currentSessionTitle}` : `Status: Menunggu Sesi ${nextSessionTime}`}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <a 
                href={channels.tiktokLive}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-black transition shadow-sm"
              >
                <Radio className="w-3.5 h-3.5 text-rose-400" />
                <span>Buka TikTok Live</span>
                <ExternalLink className="w-3 h-3 text-slate-400 ml-1" />
              </a>
              <a 
                href={channels.shopeeLive}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#ee4d2d] hover:bg-[#d73213] transition shadow-sm"
              >
                <Radio className="w-3.5 h-3.5" />
                <span>Buka Shopee Live</span>
                <ExternalLink className="w-3 h-3 text-white/70 ml-1" />
              </a>
            </div>
          </div>

          {/* 2 Daily Sessions Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            
            {/* Session 1: 14.30 WIB */}
            <div className="rounded-2xl p-5 border border-rose-100 bg-pastel-rose-50/40 relative">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1 text-xs font-extrabold text-rose-700 bg-rose-100 px-3 py-1 rounded-full">
                  <Clock className="w-3 h-3 text-rose-600" />
                  Sesi 1: Jam 14.30 WIB
                </span>
                <span className="text-[11px] font-bold text-slate-500">Setiap Hari</span>
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1.5">
                Spill Real Pict &amp; OOTD Pulang Sekolah / Kampus
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Waktu santai sepulang kelas. Kamu bisa request host mencoba warna tas yang kamu minati di patung, cek kompartemen laptop, dan tanya rekomendasi warna cerah yang cocok.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Tersedia di TikTok Shop &amp; Shopee Live</span>
              </div>
            </div>

            {/* Session 2: 18.30 WIB */}
            <div className="rounded-2xl p-5 border border-purple-100 bg-pastel-lavender-50/40 relative">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1 text-xs font-extrabold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                  <Clock className="w-3 h-3 text-purple-600" />
                  Sesi 2: Jam 18.30 WIB
                </span>
                <span className="text-[11px] font-bold text-slate-500">Setiap Hari</span>
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1.5">
                Flash Sale Malam &amp; Voucher Diskon Live s.d 50%
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Siaran live malam hari dengan subsidi voucher potongan harga resmi Shopee Live dan TikTok Shop. Borong ransel favorit dengan harga paling hemat!
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-700">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>Klaim Voucher Diskon Live Terbatas</span>
              </div>
            </div>

          </div>

          {/* WhatsApp Reminder CTA */}
          <div className="mt-6 pt-5 border-t border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <Bell className="w-4 h-4 text-rose-500 flex-shrink-0" />
              <span>
                Ingin diingatkan via WhatsApp saat host mulai siaran live jam 14.30 atau 18.30?
              </span>
            </div>
            <a 
              href={`https://wa.me/${channels.whatsappNumber}?text=Halo%20Admin%20TSY.bag%2C%20tolong%20ingatkan%20saya%20jika%20Live%20Streaming%2014.30%20atau%2018.30%20sudah%20mulai`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-800 transition whitespace-nowrap bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200"
            >
              <span>Minta Diingatkan via WhatsApp ({channels.phone}) →</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
