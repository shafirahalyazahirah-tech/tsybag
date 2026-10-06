import React from 'react';
import { 
  Tablet, 
  Laptop, 
  BookOpen, 
  Droplet, 
  Sparkles, 
  CloudRain, 
  Smartphone, 
  Gift,
  Feather,
  ShieldCheck,
  Palette,
  Scissors
} from 'lucide-react';
import { capacityItems, coreFeatures } from '../data/specs';

export default function CapacityShowcase() {
  const getCapacityIcon = (iconName) => {
    switch (iconName) {
      case 'Tablet': return <Tablet className="w-5 h-5" />;
      case 'Laptop': return <Laptop className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'Droplet': return <Droplet className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'CloudRain': return <CloudRain className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'Gift': return <Gift className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'Feather': return <Feather className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Scissors': return <Scissors className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-14 md:py-20 bg-pastel-rose-50/30 border-y border-rose-100/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 bg-white px-3.5 py-1.5 rounded-full border border-rose-200">
            Kapasitas &amp; Perlengkapan
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Perlengkapan yang Muat di Dalam Ransel TSY
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Dirancang dengan tata ruang kompartemen efisien untuk mendukung mobilitas siswi sekolah dan mahasiswi kampus.
          </p>

          {/* Quick Specification Strip */}
          <div className="mt-5 bg-white border border-rose-200/80 rounded-2xl p-3.5 max-w-2xl mx-auto shadow-sm text-xs text-slate-700 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 font-medium">
            <span><strong>Bahan:</strong> Parasut JN Tebal</span>
            <span className="text-slate-300">•</span>
            <span><strong>Bobot:</strong> 250 Gram</span>
            <span className="text-slate-300">•</span>
            <span><strong>Fitur:</strong> Water-Repellent</span>
            <span className="text-slate-300">•</span>
            <span><strong>Slot:</strong> 1 Utama + 1 Depan + 2 Samping</span>
          </div>
        </div>

        {/* Capacity Items Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {capacityItems.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white p-4 rounded-2xl border border-rose-100/90 shadow-soft hover:shadow-md transition flex items-center gap-3.5"
            >
              <div className="w-10 h-10 rounded-xl bg-pastel-rose-50 text-rose-600 flex items-center justify-center flex-shrink-0">
                {getCapacityIcon(item.icon)}
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-extrabold text-slate-900 truncate">
                  {item.title}
                </p>
                <p className="text-[11px] text-slate-500 truncate">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Core Features Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-rose-100">
          {coreFeatures.map((feat, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-pastel-lavender-100 text-purple-600 flex items-center justify-center">
                  {getFeatureIcon(feat.icon)}
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                  {feat.tag}
                </span>
              </div>
              <h3 className="font-bold text-sm text-slate-900 pt-1">
                {feat.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
