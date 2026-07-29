import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import EnquiryForm from '@/components/EnquiryForm';

export default function BTechCreditTransferPage() {
  return (
    <main className="min-h-screen bg-white pt-24 font-[Poppins]">
      <Header />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#172A53] text-center whitespace-nowrap">
          B Tech Credit Transfer Kollam
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-12 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7 space-y-5 text-[#3b3226]">
          <p className="text-base leading-relaxed text-justify">
            The B Tech Credit Transfer Kollam program offers engineering students a great opportunity to continue their education without starting from the first semester. It enables students in Kollam and nearby areas to transfer their completed academic credits from one university to another recognized under UGC and AICTE guidelines. The B Tech Credit Transfer Kollam process ensures that previously completed semesters and subjects are carefully evaluated and accepted by the new university, helping students resume their B.Tech degree smoothly. This system saves valuable time and reduces the cost of repeating already completed courses. Students can complete their studies through regular, online, or distance learning modes, depending on their convenience. It’s the perfect choice for those who relocated, faced personal challenges, or had to leave their course midway and now want to complete their engineering education with full recognition.
          </p>
          <p className="text-base leading-relaxed text-justify">
            Many reputed universities and learning centers in Kollam offer the B Tech Credit Transfer Kollam service, making the process simple and transparent for students. Institutions guide learners through every step—from counseling and document verification to credit mapping and university admission. The credit transfer option allows students to continue their education seamlessly while maintaining academic quality and credibility. It is especially beneficial for working professionals or students who took academic breaks but want to complete their B.Tech degree without losing previous progress. With flexible options and approved universities, B Tech Credit Transfer Kollam ensures a smooth, time-saving, and cost-effective route to earning a recognized engineering degree and achieving career growth confidently.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="relative w-full h-full min-h-[300px] rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <Image
              src="/wilp-hero.png"
              alt="Credit Transfer Student"
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
          <EnquiryForm className="grid grid-cols-1 md:grid-cols-2 gap-4" isGrid={true} />
        </div>
      </div>


      <LocationsSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
