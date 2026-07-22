import React from 'react';
import Header from '@/components/Header';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Page() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[40vh] px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#172A53] mb-4">
          B Tech Credit Transfer Thrissur
        </h1>
        <p className="text-lg text-gray-600">
          This is the B Tech Credit Transfer Thrissur page.
        </p>
      </div>
      <LocationsSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
