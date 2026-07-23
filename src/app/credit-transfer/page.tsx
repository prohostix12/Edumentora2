import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import Header from '@/components/Header';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Page() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Header />
      {/* Premium Hero Section */}
      <div className="w-full bg-[#172A53] pt-16 pb-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('/about-bg.png')" }}></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-block px-5 py-2 bg-white/10 text-red-200 font-bold tracking-wider uppercase rounded-full mb-6 text-sm border border-white/20 backdrop-blur-md">
            Educational Mobility
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Know more on Credit Transfers
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Seamlessly continue your academic journey by leveraging your prior learning across top institutions.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 pb-20">
        {/* Elevated Intro Card */}
        <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-20 -mt-24 mb-20">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify font-medium">
              Credit transfer is a process that allows students to apply academic credits earned from one institution toward a degree or program at another. This system facilitates educational mobility, enabling learners to continue their studies without repeating equivalent coursework. By recognizing prior learning, credit transfers can reduce the time and cost required to complete a degree. However, acceptance of transfer credits depends on factors such as course equivalency, accreditation, and institutional policies. It’s essential for students to consult with academic advisors to understand the transferability of their credits and ensure a smooth transition between educational institutions.
            </p>
          </div>
        </div>

        {/* Program Cards */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#172A53]">Our Transfer Programs</h2>
            <p className="text-gray-500 mt-4 text-lg">Select the program that fits your educational background</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: UG */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2 border border-gray-100 group">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-[#da251d] transition-colors duration-300">
                <GraduationCap className="w-8 h-8 text-[#da251d] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-[#172A53] mb-4">
                UG Credit Transfer
              </h3>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                Transfer your earned UG credits to top universities, saving time and costs while completing your degree efficiently.
              </p>
              <button className="text-[#da251d] font-bold text-lg group-hover:text-red-700 transition-colors flex items-center mt-auto w-max">
                Know More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Card 2: PG */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2 border border-gray-100 group">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-[#da251d] transition-colors duration-300">
                <BookOpen className="w-8 h-8 text-[#da251d] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-[#172A53] mb-4">
                PG Credit Transfer
              </h3>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                Transfer your PG credits to leading universities, saving time and money while completing your postgraduate degree smoothly and efficiently.
              </p>
              <button className="text-[#da251d] font-bold text-lg group-hover:text-red-700 transition-colors flex items-center mt-auto w-max">
                Know More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Card 3: Diploma */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2 border border-gray-100 group">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-[#da251d] transition-colors duration-300">
                <Award className="w-8 h-8 text-[#da251d] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-[#172A53] mb-4">
                Diploma Credit Transfer
              </h3>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                Transfer your Diploma credits to leading universities, saving time and money while completing your postgraduate degree smoothly and efficiently.
              </p>
              <button className="text-[#da251d] font-bold text-lg group-hover:text-red-700 transition-colors flex items-center mt-auto w-max">
                Know More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#172A53]">
              Start Your Journey with Edumentora
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Fill out the form below and our experts will get back to you shortly.
            </p>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:border-[#da251d] focus:ring-1 focus:ring-[#da251d] transition-all bg-gray-50 text-gray-800 placeholder-gray-400" 
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:border-[#da251d] focus:ring-1 focus:ring-[#da251d] transition-all bg-gray-50 text-gray-800 placeholder-gray-400" 
                  />
                </div>
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone number" 
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:border-[#da251d] focus:ring-1 focus:ring-[#da251d] transition-all bg-gray-50 text-gray-800 placeholder-gray-400" 
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message" 
                  rows={4} 
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:border-[#da251d] focus:ring-1 focus:ring-[#da251d] transition-all bg-gray-50 resize-none text-gray-800 placeholder-gray-400"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#da251d] hover:bg-red-700 text-white font-bold text-lg py-4 px-8 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 tracking-wide mt-2"
              >
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
