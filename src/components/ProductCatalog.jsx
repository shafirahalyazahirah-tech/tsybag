import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products, productCategories } from '../data/products';

export default function ProductCatalog({ onSelectImage }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = activeTab === 'all'
    ? products
    : products.filter(p => p.category === activeTab);

  return (
    <section id="katalog" className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200">
            Katalog Real Pict TSY.bag
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Pilih Ransel Estetik Sesuai Kebutuhanmu
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Mulai dari ransel super ringan 250g buat sekolah, tas laptop 14 inch buat ngampus, sampai sling bag lucu buat hangout. Semua ready stock, bebas COD, dan dikirim langsung dari konveksi Tasikmalaya.
          </p>

          {/* Category Filter Tabs */}
          <div role="tablist" aria-label="Filter kategori produk" className="flex flex-wrap justify-center gap-2 mt-7">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                id={`tab-${cat.id}`}
                aria-selected={activeTab === cat.id}
                aria-controls="product-grid"
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold transition-all focus:outline-none focus:ring-2 focus:ring-rose-400 ${activeTab === cat.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div id="product-grid" role="region" aria-live="polite" className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectImage={onSelectImage}
            />
          ))}
        </div>

      </div>
    </section>
  );
}