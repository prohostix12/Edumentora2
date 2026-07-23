import React from 'react';
import Header from '@/components/Header';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Page() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Header />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-24">
        
        {/* Header */}
        <div className="relative text-center py-20 mb-16 rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="absolute inset-0 opacity-[0.15] bg-repeat bg-center" style={{ backgroundImage: "url('/about-bg.png')", backgroundSize: "150px" }}></div>
          <div className="relative z-10">
            <div className="inline-block px-4 py-2 bg-white/80 text-blue-700 font-bold tracking-widest uppercase rounded-full mb-4 text-sm shadow-sm backdrop-blur-sm border border-blue-100">
              Our Offices
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-[#172A53] mb-4 tracking-tight">Contact</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium px-4">
              Reach out to our offices in Calicut and Kochi for expert guidance and academic credit transfer solutions.
            </p>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Calicut Section */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 flex flex-col h-full transform hover:-translate-y-1 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-[#172A53] mb-4 flex items-center gap-3">
              <span className="w-8 h-1.5 bg-[#da251d] rounded-full inline-block"></span>
              CALICUT
            </h2>
            <div className="text-gray-700 leading-relaxed mb-8 flex-grow text-lg">
              <p>YMCA Cross Road,</p>
              <p>Kozhikode</p>
              <p>Kerala – 673001</p>
            </div>
            {/* Google Map */}
            <div className="w-full h-72 rounded-2xl overflow-hidden shadow-inner border border-gray-100 bg-gray-50">
              <iframe 
                src="https://maps.google.com/maps?q=YMCA%20Cross%20Road,%20Kozhikode,%20Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Kochi Section */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 flex flex-col h-full transform hover:-translate-y-1 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-[#172A53] mb-4 flex items-center gap-3">
              <span className="w-8 h-1.5 bg-[#da251d] rounded-full inline-block"></span>
              KOCHI
            </h2>
            <div className="text-gray-700 leading-relaxed mb-8 flex-grow text-lg">
              <p>6th Floor, National Pearl Star building,</p>
              <p>Near Changampuzha park Metro Station, Edappally,</p>
              <p>Kochi, Ernakulam, Kerala 682024</p>
            </div>
            {/* Google Map */}
            <div className="w-full h-72 rounded-2xl overflow-hidden shadow-inner border border-gray-100 bg-gray-50">
              <iframe 
                src="https://maps.google.com/maps?q=National%20Pearl%20Star%20building,%20Edappally,%20Kochi,%20Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-50 py-16 lg:py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#172A53] mb-4">Start Your Journey with Edumentora</h2>
              <div className="w-24 h-1.5 bg-[#da251d] rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg">Fill out the form below and our academic advisors will get back to you shortly.</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                <textarea id="message" rows={4} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white resize-none" required></textarea>
              </div>

              <button type="submit" className="w-full bg-[#172A53] hover:bg-[#111f3d] text-white font-bold py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <LocationsSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
