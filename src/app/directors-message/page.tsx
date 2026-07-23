import React from 'react';
import Header from '@/components/Header';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function DirectorsMessagePage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <Header />

      {/* Overlapping Layout Section */}
      <div className="bg-gray-50 pb-16 lg:pb-24">
        
        {/* Top Header Block */}
        <div className="w-full bg-[#172A53] pt-16 pb-40 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('/about-bg.png')" }}></div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
            <div className="inline-block px-4 py-1.5 bg-red-500/20 text-red-200 font-bold tracking-widest uppercase rounded-full mb-4 text-sm border border-red-500/30 backdrop-blur-sm">
              Leadership
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Director's Message
            </h1>
          </div>
        </div>

        {/* Content Container (Overlapping) */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 -mt-24 md:-mt-28">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-12 lg:p-16 flex flex-col md:flex-row items-start gap-12 lg:gap-16">
            
            {/* Image Space */}
            <div className="md:w-5/12 w-full flex justify-center sticky top-32">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border-4 border-gray-50 group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#172A53]/90 via-transparent to-transparent z-10 opacity-90"></div>
                <img src="/muh_shameem_director.jpg" alt="Mohamed Shameem - Director, Edumentora" className="relative z-0 w-full h-auto aspect-[3/4] object-cover transform hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-white font-bold text-2xl drop-shadow-md">Mohamed Shameem</h3>
                  <p className="text-red-200 font-medium drop-shadow-md">Director, Edumentora</p>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="md:w-7/12 space-y-6 text-gray-700 text-lg leading-relaxed text-justify">
              <p>
                At Edumentora, we strongly believe that education should never be a dead end. Across India, thousands of students discontinue their degree programs due to financial challenges, personal circumstances, academic hurdles, or institutional constraints. Unfortunately, this often leads to wasted academic effort and lost confidence. Our mission is to change that narrative.
              </p>
              <p>
                Edumentora was founded with a clear purpose: to help students restart and complete their higher education without having to begin from scratch. Through our academic credit transfer solutions, we enable learners to transfer their previously earned credits to UGC-recognized institutions, allowing them to continue their education from where they left off. Every credit earned represents hard work, time, and determination—and we ensure it is respected and utilized.
              </p>
              <p>
                We are deeply committed to providing transparent, reliable, and student-focused guidance at every step of the process. Our team works closely with each student to understand their academic background and identify the best possible pathway to a recognized qualification.
              </p>
              
              <div className="bg-red-50 border-l-4 border-[#da251d] p-8 rounded-r-2xl my-10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-5 text-9xl font-serif leading-none transform translate-x-4 -translate-y-4 text-[#da251d]">"</div>
                <p className="font-medium text-[#172A53] text-xl md:text-2xl italic relative z-10 leading-snug">
                  "At Edumentora, we don’t just offer education services—we offer second chances, renewed confidence, and a clear path toward a successful future. Together, let us transform past progress into lasting achievement."
                </p>
                <p className="text-right text-[#da251d] font-bold text-lg mt-6 relative z-10">
                  — Mohamed Shameem
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <LocationsSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
