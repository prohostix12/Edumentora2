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
          B Tech Credit Transfer Wayanad
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7 space-y-5 text-[#3b3226]">
          <p className="text-base leading-relaxed text-justify">
            The B Tech Credit Transfer Wayanad program provides engineering students a valuable opportunity to continue their education without losing previously earned credits. It allows students from Wayanad and nearby regions to transfer their completed semesters or subjects from one recognized university to another approved by UGC and AICTE. This program is ideal for learners who had to pause their studies due to relocation, financial issues, or institutional changes. The B Tech Credit Transfer Wayanad process includes the verification of mark sheets, transcripts, and academic records to match them with the syllabus of the new university. This ensures students can rejoin their course from the correct semester, saving time and reducing costs. It’s a flexible option for those who wish to resume their B.Tech studies through regular, online, or distance learning modes and complete their degree efficiently.
          </p>
          <p className="text-base leading-relaxed text-justify">
            Many recognized universities and study centers in Wayanad guide students through the B Tech Credit Transfer Wayanad process with complete support for document evaluation, eligibility checking, and credit mapping. The program ensures a smooth transition and helps students avoid repeating completed subjects. It’s particularly beneficial for learners who took a study break or transferred from another college. The B Tech Credit Transfer Wayanad program helps students maintain academic continuity and complete their B.Tech degree without losing valuable years of effort. With expert counseling, transparent procedures, and university approval, students can confidently complete their engineering degree and strengthen their career prospects. This initiative gives a new start to students looking to complete their education and achieve recognized academic success.
          </p>
        </div>

        <div className="lg:col-span-5 space-y-8">
          <div className="relative w-full h-[220px] md:h-[280px] rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <Image
              src="/apprenticeship-professionals.png"
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
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-gray-50 text-sm text-[#172A53] placeholder:text-[#172A53]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-gray-50 text-sm text-[#172A53] placeholder:text-[#172A53]"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone number"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-gray-50 text-sm text-[#172A53] placeholder:text-[#172A53]"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-gray-50 text-sm text-[#172A53] placeholder:text-[#172A53] resize-none"
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
