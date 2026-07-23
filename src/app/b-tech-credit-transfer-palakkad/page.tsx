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
          B Tech Credit Transfer Palakkad
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7 space-y-5 text-[#3b3226]">
          <p className="text-base leading-relaxed text-justify">
            The B Tech Credit Transfer Palakkad program provides engineering students with a great opportunity to continue their education without losing the progress they have already made. This system allows students in Palakkad and nearby regions to transfer their earned academic credits from one recognized university to another that is approved by UGC and AICTE. The B Tech Credit Transfer Palakkad process ensures that completed semesters or subjects are carefully evaluated and matched with the new university’s syllabus, saving both time and money. It’s ideal for students who had to discontinue their B.Tech studies due to personal, financial, or academic reasons. The program offers flexibility through online, regular, or distance learning modes, making it suitable for those balancing work or other commitments. With proper documentation and verification, students can resume their degree seamlessly and complete their engineering education confidently.
          </p>
          <p className="text-base leading-relaxed text-justify">
            Several reputed universities and education centers in Palakkad assist students with the B Tech Credit Transfer Palakkad process, ensuring a smooth and transparent transition. The program includes academic counseling, document review, and credit mapping, helping students resume their studies from the correct semester. It’s a time-saving and cost-effective solution for learners who want to rebuild their academic path after a gap or college change. By transferring their existing credits, students can avoid repeating subjects and continue their education under UGC-approved universities. The B Tech Credit Transfer Palakkad program empowers students to complete their B.Tech degree conveniently and achieve recognized qualifications that open doors to better career opportunities. This flexible and reliable system ensures academic continuity and helps students move forward toward a successful engineering career.
          </p>
        </div>

        <div className="lg:col-span-5 space-y-8">
          <div className="relative w-full h-[220px] md:h-[280px] rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <Image
              src="/apprenticeship-hero.png"
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
