import React from 'react';
import Header from '@/components/Header';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Page() {
  return (
    <main className="min-h-screen bg-white pt-24 font-[Poppins]">
      <Header />
      {/* Unified Hero Section */}
      <div className="w-full bg-[#172A53] relative overflow-hidden">
        {/* Background Image Overlay matching Programs page */}
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/edumentora%20bg%20image.png')" }}></div>
        
        <div className="w-full pt-20 pb-24 relative z-10 max-w-7xl mx-auto text-center px-6 md:px-12">
          <div className="inline-block px-4 py-1.5 bg-white/10 text-red-200 font-bold tracking-wider uppercase rounded-full mb-6 text-xs border border-white/20 backdrop-blur-md">
            Our Offices
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight font-[Poppins]">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-5xl mx-auto">
            Reach out to our offices in Calicut and Kochi for expert guidance and academic credit transfer solutions. We are here to help you achieve your educational goals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-24">

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
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="peer w-full px-4 pt-7 pb-3 text-[#172A53] font-medium rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white placeholder-transparent"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-3 text-xs font-semibold text-[#172A53] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#172A53] peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#172A53] pointer-events-none"
                  >
                    Enter your name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter phone number"
                    className="peer w-full px-4 pt-7 pb-3 text-[#172A53] font-medium rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white placeholder-transparent"
                    required
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-4 top-3 text-xs font-semibold text-[#172A53] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#172A53] peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#172A53] pointer-events-none"
                  >
                    Enter phone number
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  className="peer w-full px-4 pt-7 pb-3 text-[#172A53] font-medium rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white placeholder-transparent"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-3 text-xs font-semibold text-[#172A53] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#172A53] peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#172A53] pointer-events-none"
                >
                  Enter email
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Message"
                  className="peer w-full px-4 pt-7 pb-3 text-[#172A53] font-medium rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white resize-none placeholder-transparent"
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-3 text-xs font-semibold text-[#172A53] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#172A53] peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#172A53] pointer-events-none"
                >
                  Message
                </label>
              </div>

              <button type="submit" className="w-full bg-[#172A53] hover:bg-[#111f3d] text-white font-bold py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Director's Message Mini Section */}
      <div className="py-12 lg:py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 bg-gray-50 p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-full blur-3xl -mr-10 -mt-10 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-50 rounded-full blur-2xl -ml-10 -mb-10 opacity-60"></div>

            <div className="w-40 h-40 md:w-56 md:h-56 shrink-0 relative z-10 mx-auto md:mx-0">
              <img
                src="/muh_shameem_director.jpg"
                alt="Mohamed Shameem - Director"
                className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-white"
              />
            </div>

            <div className="text-center md:text-left flex-1 relative z-10">
              <h3 className="text-3xl font-bold text-[#172A53] mb-1">Director's Message</h3>
              <p className="text-[#da251d] font-semibold mb-6 tracking-wide text-sm uppercase">Mohamed Shameem</p>

              {/* <div className="text-gray-700 space-y-4 text-base leading-relaxed text-justify md:text-left mb-6">
                <p>
                  At Edumentora, we strongly believe that education should never be a dead end. Across India, thousands of students discontinue their degree programs due to financial challenges, personal circumstances, academic hurdles, or institutional constraints. Unfortunately, this often leads to wasted academic effort and lost confidence. Our mission is to change that narrative.
                </p>
                <p>
                  Edumentora was founded with a clear purpose: to help students restart and complete their higher education without having to begin from scratch. Through our academic credit transfer solutions, we enable learners to transfer their previously earned credits to UGC-recognized institutions, allowing them to continue their education from where they left off. Every credit earned represents hard work, time, and determination—and we ensure it is respected and utilized.
                </p>
                <p>
                  We are deeply committed to providing transparent, reliable, and student-focused guidance at every step of the process. Our team works closely with each student to understand their academic background and identify the best possible pathway to a recognized qualification.
                </p>
              </div> */}

              <div className="relative bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <span className="text-5xl text-[#172A53] opacity-10 absolute -top-2 -left-2 font-serif hidden md:block">"</span>
                <p className="text-gray-800 italic leading-relaxed text-lg font-medium relative z-10">
                  "At Edumentora, we don’t just offer education services—we offer second chances, renewed confidence, and a clear path toward a successful future. Together, let us transform past progress into lasting achievement."
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
