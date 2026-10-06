import React from 'react';
import { ShoppingBag, Radio, MessageCircle } from 'lucide-react';
import { channels } from '../data/channels';

export default function MobileBottomBar() {
  return (
    <nav 
      aria-label="Aksi Cepat Belanja Mobile" 
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-rose-200 px-3 py-2.5 shadow-2xl sm:hidden flex items-center justify-between gap-2"
    >
      <a 
        href={channels.shopeeStore}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold text-white bg-[#ee4d2d] shadow active:scale-[0.98] transition"
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        <span>Shopee (COD)</span>
      </a>

      <a 
        href={channels.tiktokShop}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold text-white bg-slate-900 shadow active:scale-[0.98] transition"
      >
        <Radio className="w-3.5 h-3.5 text-rose-400" />
        <span>TikTok Shop</span>
      </a>

      <a 
        href={channels.whatsappCS}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-2.5 rounded-xl text-white bg-emerald-600 shadow active:scale-[0.98] transition"
        title="Chat WhatsApp CS"
      >
        <MessageCircle className="w-4 h-4" />
      </a>
    </nav>
  );
}
