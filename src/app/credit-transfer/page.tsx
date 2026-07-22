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
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="w-full space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#172A53] leading-tight mb-8 relative inline-block group w-max cursor-default">
            Know more on Credit Transfers
            <span className="absolute -bottom-2 left-0 w-0 h-1.5 bg-[#da251d] rounded-full transition-all duration-500 ease-out group-hover:w-full"></span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            Credit transfer is a process that allows students to apply academic credits earned from one institution toward a degree or program at another. This system facilitates educational mobility, enabling learners to continue their studies without repeating equivalent coursework. By recognizing prior learning, credit transfers can reduce the time and cost required to complete a degree. However, acceptance of transfer credits depends on factors such as course equivalency, accreditation, and institutional policies. It’s essential for students to consult with academic advisors to understand the transferability of their credits and ensure a smooth transition between educational institutions.
          </p>
        </div>

        {/* 3 Program Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Card 1: UG */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <GraduationCap className="w-12 h-12 text-[#da251d] mb-6" />
            <h3 className="text-2xl font-bold text-[#172A53] mb-4">
              UG Credit Transfer Program
            </h3>
            <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
              Transfer your earned UG credits to top universities, saving time and costs while completing your degree efficiently.
            </p>
            <button className="bg-[#da251d] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 w-max mt-auto">
              Know More
            </button>
          </div>

          {/* Card 2: PG */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <BookOpen className="w-12 h-12 text-[#da251d] mb-6" />
            <h3 className="text-2xl font-bold text-[#172A53] mb-4">
              PG Credit Transfer Program
            </h3>
            <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
              Transfer your PG credits to leading universities, saving time and money while completing your postgraduate degree smoothly and efficiently.
            </p>
            <button className="bg-[#da251d] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 w-max mt-auto">
              Know More
            </button>
          </div>

          {/* Card 3: Diploma */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <Award className="w-12 h-12 text-[#da251d] mb-6" />
            <h3 className="text-2xl font-bold text-[#172A53] mb-4">
              Diploma Credit Transfer Program
            </h3>
            <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
              Transfer your Diploma credits to leading universities, saving time and money while completing your postgraduate degree smoothly and efficiently.
            </p>
            <button className="bg-[#da251d] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 w-max mt-auto">
              Know More
            </button>
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
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#da251d] focus:ring-1 focus:ring-[#da251d] transition-all bg-gray-50 text-gray-800 placeholder-gray-400" 
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#da251d] focus:ring-1 focus:ring-[#da251d] transition-all bg-gray-50 text-gray-800 placeholder-gray-400" 
                  />
                </div>
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone number" 
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#da251d] focus:ring-1 focus:ring-[#da251d] transition-all bg-gray-50 text-gray-800 placeholder-gray-400" 
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message" 
                  rows={4} 
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#da251d] focus:ring-1 focus:ring-[#da251d] transition-all bg-gray-50 resize-none text-gray-800 placeholder-gray-400"
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
