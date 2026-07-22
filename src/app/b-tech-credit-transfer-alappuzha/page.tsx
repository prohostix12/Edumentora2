import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function BTechCreditTransferPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#172A53] text-center whitespace-nowrap">
          B Tech Credit Transfer Alappuzha
        </h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7 space-y-5 text-[#3b3226]">
          <p className="text-base leading-relaxed text-justify">
            If you’re based in or around Alappuzha and looking to continue your B.Tech without losing time, the B Tech Credit Transfer Alappuzha option is a practical pathway. This allows engineering students who have completed semesters, faced backlogs or had to stop their studies for personal or institutional reasons to transfer their earned credits to a recognized university and resume from where they left off. With B Tech Credit Transfer Alappuzha, students don’t have to start from scratch—they simply submit their transcripts, migration or leave certificates, and course documentation to a UGC/AICTE-approved university that accepts credit transfers. Institutions offering this service in the Alappuzha region help with guidance, eligibility checks, document mapping and offer flexible learning modes—regular, online or distance. This means you can align your schedule with work or other responsibilities while finishing your degree.
          </p>
          <p className="text-base leading-relaxed text-justify">
            A student from Alappuzha continuing engineering studies through the B Tech Credit Transfer program with a recognized university provides an excellent opportunity for students who had to discontinue their engineering studies to continue their education without starting from the beginning. This system helps students transfer the academic credits they’ve already earned to another recognized university that offers approved credit transfer options. Students from Alappuzha and nearby areas can take advantage of this process to complete their B.Tech degree through UGC and AICTE-recognized universities.
          </p>
          <p className="text-base leading-relaxed text-justify">
            The B Tech Credit Transfer Alappuzha process involves verifying past academic records, mapping subjects, and ensuring the credits match with the new institution’s syllabus. Many universities also offer flexible learning options such as distance and online education, allowing students to study according to their convenience. This process saves both time and money while maintaining the quality and credibility of education. Whether you had to pause your studies due to relocation, personal reasons, or college closure, this program helps you achieve your goals.
          </p>
        </div>

        <div className="lg:col-span-5 space-y-8">
          <div className="relative w-full h-[220px] md:h-[280px] rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <Image 
              src="/student-portrait.png" 
              alt="Credit Transfer Student" 
              fill 
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-300">
            <h3 className="text-xl font-bold text-[#172A53] mb-5">Enquire Now</h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Name" 
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-gray-50 text-sm" 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-gray-50 text-sm" 
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone number" 
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-gray-50 text-sm" 
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message" 
                  rows={4} 
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-gray-50 text-sm resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#da251d] hover:bg-red-700 text-white font-semibold text-sm py-3 px-6 rounded-lg transition-all shadow-sm hover:shadow-md uppercase tracking-wide"
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
