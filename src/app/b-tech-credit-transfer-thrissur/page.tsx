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
          B Tech Credit Transfer Thrissur
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-12 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7 space-y-5 text-[#3b3226]">
          <p className="text-base leading-relaxed text-justify">
            The B Tech Credit Transfer Thrissur program helps engineering students continue their academic journey without losing the progress they’ve already made. It allows students from Thrissur and nearby areas to transfer their earned credits from one UGC and AICTE-approved university to another. This system is ideal for learners who had to pause their education due to relocation, financial constraints, or institutional changes. The B Tech Credit Transfer Thrissur process involves evaluating previously completed subjects and mapping them with the new university’s syllabus to ensure a smooth continuation. Students can resume their studies from the semester they left off, saving both time and money. The program also offers flexible learning options such as regular, distance, or online modes, helping students complete their B.Tech degree conveniently. It’s a reliable pathway for those looking to rebuild their engineering career and achieve recognized academic qualifications.
          </p>
          <p className="text-base leading-relaxed text-justify">
            Several reputed universities and educational centers in Thrissur offer complete support for the B Tech Credit Transfer Thrissur process. They provide guidance on eligibility, document verification, and enrollment to make the transition smooth and transparent. The system ensures that students don’t have to repeat previously cleared subjects, maintaining the integrity of their academic records. The B Tech Credit Transfer Thrissur program is especially beneficial for students who want to resume their studies after a break or college change. With the help of expert counselors and approved institutions, students can complete their B.Tech degree efficiently and confidently. This program not only saves time but also ensures academic recognition and better career prospects for aspiring engineers in Thrissur.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="relative w-full h-full min-h-[300px] rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <Image
              src="/btech_transfer_thrissur.png"
              alt="Credit Transfer Student in Thrissur"
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


      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <EnquiryForm className="w-full flex flex-col md:flex-row gap-3" isGrid={false} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 space-y-3">
        <h3 className="text-xl font-bold text-[#172A53] mb-2">Recent Posts</h3>
        <Link
          href="/best-b-tech-credit-transfer-services-in-kerala-for-dropout-backlog-students/"
          className="block w-full text-gray-700 hover:text-blue-600 hover:underline text-sm md:text-base transition-colors font-medium"
        >
          Best B Tech Credit Transfer Services in Kerala for Dropout & Backlog Students
        </Link>
        <Link
          href="/how-to-resume-your-b-tech-after-a-3-year-gap-in-india/"
          className="block w-full text-gray-700 hover:text-blue-600 hover:underline text-sm md:text-base transition-colors font-medium"
        >
          How to Resume Your B.Tech After a 3-Year Gap in India
        </Link>
        <Link
          href="/eligibility-process-and-benefits-of-btech-credit-transfer/"
          className="block w-full text-gray-700 hover:text-blue-600 hover:underline text-sm md:text-base transition-colors font-medium"
        >
          Eligibility, Process and Benefits of B.Tech Credit Transfer
        </Link>
        <Link
          href="/new1/"
          className="block w-full text-gray-700 hover:text-blue-600 hover:underline text-sm md:text-base transition-colors font-medium"
        >
          What is university credit transfer and why is it important?
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <h3 className="text-xl font-bold text-[#172A53] mb-5">Recent Comments</h3>
        <div className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-600 text-sm">
          No comments to show.
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <EnquiryForm className="w-full flex flex-col md:flex-row gap-3" isGrid={false} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-bold text-[#172A53] mb-5">Categories</h3>
          <ul className="space-y-2 text-gray-700 text-sm md:text-base">
            <li>Credit Transfer (7)</li>
            <li>Education (4)</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-bold text-[#172A53] mb-2">Recent Posts</h3>
          <Link
            href="/best-b-tech-credit-transfer-services-in-kerala-for-dropout-backlog-students/"
            className="block w-full text-gray-700 hover:text-blue-600 hover:underline text-sm md:text-base transition-colors font-medium"
          >
            Best B Tech Credit Transfer Services in Kerala for Dropout & Backlog Students
          </Link>
          <Link
            href="/ready-to-continue-your-education-credit-transfer-makes-it-easy-to-restart/"
            className="block w-full text-gray-700 hover:text-blue-600 hover:underline text-sm md:text-base transition-colors font-medium"
          >
            Ready to Continue Your Education? Credit Transfer Makes It Easy to Restart
          </Link>
          <Link
            href="/how-to-resume-your-b-tech-after-a-3-year-gap-in-india/"
            className="block w-full text-gray-700 hover:text-blue-600 hover:underline text-sm md:text-base transition-colors font-medium"
          >
            How to Resume Your B.Tech After a 3-Year Gap in India
          </Link>
          <Link
            href="/eligibility-process-and-benefits-of-btech-credit-transfer/"
            className="block w-full text-gray-700 hover:text-blue-600 hover:underline text-sm md:text-base transition-colors font-medium"
          >
            Eligibility, Process and Benefits of B.Tech Credit Transfer
          </Link>
          <Link
            href="/new1/"
            className="block w-full text-gray-700 hover:text-blue-600 hover:underline text-sm md:text-base transition-colors font-medium"
          >
            What is university credit transfer and why is it important?
          </Link>
        </div>
      </div>

      <LocationsSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
