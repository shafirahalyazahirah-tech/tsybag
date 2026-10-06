import React from 'react';
import { Radio, Clock, ExternalLink } from 'lucide-react';
import { useLiveStatus } from '../hooks/useLiveStatus';
import { channels } from '../data/channels';

export default function LiveTicker() {
  const { isLiveNow, currentSessionTitle, nextSessionTime, countdownText, wibTimeStr } = useLiveStatus();

  return (
    <aside
      aria-label="Info Live Streaming TSY BAG"
      className="bg-gradient-to-r from-rose-500 via-pastel-rose-500 to-rose-600 text-white text-xs md:text-sm py-2.5 px-4 font-medium shadow-sm transition-all"
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          {isLiveNow ? (
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-rose-600 font-extrabold text-[11px] shadow-sm animate-pulse">
              <span className="w-2 h-2 rounded-full bg-rose-600"></span>
              LIVE SEKARANG
            </span>
          ) : (
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-700/80 text-rose-100 font-bold text-[11px]">
              <Clock className="w-3 h-3" />
              JADWAL LIVE
            </span>
          )}

          <p className="text-white/95 text-xs sm:text-sm">
            {isLiveNow ? (
              <span>
                <strong>{currentSessionTitle}</strong>: Join live sekarang buat cek real pict &amp; rebutan vouchernya!
              </span>
            ) : (
              <span>
                Live tiap jam <strong>14.30 WIB</strong> &amp; <strong>18.30 WIB</strong> • Next sesi: {nextSessionTime} ({countdownText})
              </span>
            )}
          </p>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={channels.tiktokLive}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/20 hover:bg-white/30 text-white transition backdrop-blur-sm"
          >
            <Radio className="w-3 h-3" />
            TikTok Live
            <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
          </a>
          <a
            href={channels.shopeeLive}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/20 hover:bg-white/30 text-white transition backdrop-blur-sm"
          >
            <Radio className="w-3 h-3" />
            Shopee Live
            <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
          </a>
        </div>
      </div>
    </aside>
  );
}