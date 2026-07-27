import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function BTechCreditTransferPage() {
  return (
    <main className="min-h-screen bg-white pt-24 font-[Poppins]">
      <Header />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#172A53] text-center whitespace-nowrap mb-3">
          B Tech Credit Transfer Kozhikode
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-12 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7 space-y-5 text-[#3b3226]">
          <p className="text-base leading-relaxed text-justify">
            The B Tech Credit Transfer Kozhikode program is an excellent opportunity for engineering students who had to discontinue their studies and wish to complete their degree without starting over. This system allows students from Kozhikode and nearby regions to transfer their previously earned academic credits from one university to another that is approved by UGC and AICTE. The B Tech Credit Transfer Kozhikode process ensures that completed subjects are properly evaluated and accepted by the new institution, saving students both time and money. It’s ideal for those who had to pause their studies due to relocation, college closure, or personal challenges. Students can choose to complete their remaining semesters through regular, online, or distance learning modes, depending on their convenience. This program helps maintain academic continuity and provides an easier route to complete a valid B.Tech degree with full credibility.
          </p>
          <p className="text-base leading-relaxed text-justify">
            Many reputed universities and education centers in Kozhikode support students through the B Tech Credit Transfer Kozhikode process, offering complete guidance from documentation to credit verification. This program helps ensure that each student’s previous academic performance is recognized and carried forward effectively. The credit transfer system is highly beneficial for students who don’t want to lose the effort and years invested in their engineering studies. With this opportunity, students can resume their education smoothly and complete their degree under recognized institutions. The B Tech Credit Transfer Kozhikode option also provides flexibility for working professionals and distance learners who want to balance education with their careers. It’s a reliable, time-saving, and affordable way to complete your engineering journey and achieve your B.Tech degree successfully.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="relative w-full h-full min-h-[300px] rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <Image
              src="/btech_transfer_kozhikode.png"
              alt="Credit Transfer Student in Kozhikode"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-300 w-full">
          <h3 className="text-xl font-bold text-[#172A53] mb-6 text-center">Enquire Now</h3>
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
