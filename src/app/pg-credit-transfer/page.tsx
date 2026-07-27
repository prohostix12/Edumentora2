import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function PGCreditTransferPage() {
  return (
    <main className="min-h-screen bg-white pt-24 font-[Poppins]">
      <Header />

      {/* Premium Hero Section */}
      <div className="w-full bg-[#172A53] pt-16 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/edumentora%20bg%20image.png')" }}></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl mx-auto">
            PG Credit Transfer
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-12 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7 space-y-6 text-[#3b3226]">
          <h2 className="text-2xl font-bold text-[#172A53]">
            Complete Your Postgraduate Degree with Ease
          </h2>
          
          <p className="text-base leading-relaxed text-justify font-medium">
            Transfer your PG credits seamlessly and continue your academic journey with confidence and clarity.
          </p>

          <p className="text-base leading-relaxed text-justify">
            At Edumentora, our PG Credit Transfer Program is designed for students who have paused their postgraduate studies due to academic challenges, personal issues, or financial constraints. This program allows you to transfer your previously earned credits to recognized universities and continue your education without starting from scratch.
          </p>
          
          <p className="text-base leading-relaxed text-justify">
            We have partnered with leading universities like Glocal University, Radha Govind University, and Arni University to ensure that your academic efforts are valued and counted toward your degree. Our expert team carefully evaluates your credits and guides you through a streamlined transfer process, saving you both time and costs.
          </p>
          
          <p className="text-base leading-relaxed text-justify">
            With Edumentora, you can efficiently complete your postgraduate degree, reclaim your academic progress, and achieve your career goals.
          </p>

          <Link href="/about-us" className="mt-4 bg-[#da251d] hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-lg inline-flex items-center group w-fit">
            Know More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="lg:col-span-5">
          <div className="relative w-full h-full min-h-[350px] rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <Image
              src="/pg_credit_transfer.png"
              alt="Postgraduate Student on Campus"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>
      </div>

      {/* Full Width Enquire Now Form */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 w-full max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#172A53] mb-6 text-center">Enquire Now</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-gray-50 text-sm text-[#172A53] placeholder:text-[#172A53]"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-gray-50 text-sm text-[#172A53] placeholder:text-[#172A53]"
              />
              <input
                type="tel"
                placeholder="Phone number"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-gray-50 text-sm text-[#172A53] placeholder:text-[#172A53]"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <textarea
                placeholder="Message"
                rows={4}
                required
                className="w-full h-full min-h-[140px] px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-gray-50 text-sm text-[#172A53] placeholder:text-[#172A53] resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2 mt-2">
              <button
                type="submit"
                className="w-full md:w-auto md:px-12 mx-auto block bg-[#da251d] hover:bg-red-700 text-white font-semibold text-sm py-3 px-6 rounded-lg transition-all shadow-sm hover:shadow-md uppercase tracking-wide"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <LocationsSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
