import React, { useState } from 'react';
import LiveTicker from './components/LiveTicker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveScheduleBanner from './components/LiveScheduleBanner';
import ProblemSolution from './components/ProblemSolution';
import BeforeAfter from './components/BeforeAfter';
import ProductCatalog from './components/ProductCatalog';
import CapacityShowcase from './components/CapacityShowcase';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import ChannelSection from './components/ChannelSection';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import ImageModal from './components/ImageModal';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-slate-800 font-sans antialiased selection:bg-rose-200 selection:text-rose-900 flex flex-col">
      {/* 1. Dynamic Live Streaming Ticker (14.30 & 18.30 WIB) */}
      <LiveTicker />

      {/* 2. Sticky Clean Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 3. Hero Section (AIDA Attention + Lifestyle Showcase) */}
        <Hero onSelectImage={setSelectedImage} />

        {/* 4. Live Schedule Feature (14.30 & 18.30 Daily) */}
        <LiveScheduleBanner />

        {/* 5. PAS Framework: Problem - Agitation - Solution */}
        <ProblemSolution />

        {/* 6. BAB Framework: Before - After - Bridge */}
        <BeforeAfter />

        {/* 7. Product Showcase & Interactive Category Filter */}
        <ProductCatalog onSelectImage={setSelectedImage} />

        {/* 8. Packing Capacity & Specs Showcase */}
        <CapacityShowcase />

        {/* 9. Social Proof & Student Testimonials (14.375+ Shopee Reviews) */}
        <Testimonials />

        {/* 10. Student FAQ Accordion */}
        <FaqSection />

        {/* 11. 3 Official Conversion Channels (Shopee, TikTok, WhatsApp) */}
        <ChannelSection />
      </main>

      {/* 12. Official Brand Footer */}
      <Footer />

      {/* 13. Mobile Bottom Sticky Conversion Bar */}
      <MobileBottomBar />

      {/* 14. Real Product Photo Lightbox Modal */}
      <ImageModal 
        selectedImage={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </div>
  );
}
