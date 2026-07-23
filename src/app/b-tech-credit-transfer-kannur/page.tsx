import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
          B Tech Credit Transfer Kannur
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7 space-y-5 text-[#3b3226]">
          <p className="text-base leading-relaxed text-justify">
            The B Tech Credit Transfer Kannur program offers engineering students a great opportunity to continue their education without restarting their degree from the beginning. It is specially designed for students who had to discontinue their B.Tech studies due to personal, financial, or academic reasons and now wish to resume their course under a recognized university. Students in Kannur can easily transfer their earned academic credits to UGC and AICTE-approved universities that accept credit transfers. The B Tech Credit Transfer Kannur process includes verifying previous mark sheets, transcripts, and course details to ensure accurate subject matching.
          </p>
          <p className="text-base leading-relaxed text-justify">
            The B Tech Credit Transfer Kannur program is a smart option for engineering students who want to complete their studies without wasting the effort they’ve already put in. This system allows students from Kannur and nearby regions to transfer their academic credits from one approved university to another recognized institution under UGC and AICTE regulations. It’s ideal for those who faced interruptions in their education due to relocation, college closure, or personal reasons. Through the B Tech Credit Transfer Kannur program, universities assess previous academic records and match the completed subjects with the new curriculum to ensure a seamless continuation of studies. This method saves students time, reduces unnecessary costs, and provides flexibility to finish their degree through regular, online, or distance learning modes.
          </p>
        </div>

        <div className="lg:col-span-5 space-y-8">
          <div className="relative w-full h-[220px] md:h-[280px] rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <Image
              src="/wilp-hero.png"
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

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <form className="w-full flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-gray-50 text-sm text-[#172A53] placeholder:text-[#172A53]"
          />
          <button
            type="submit"
            className="w-full md:w-auto shrink-0 bg-[#da251d] hover:bg-red-700 text-white font-semibold text-sm py-2.5 px-8 rounded-lg transition-all shadow-sm hover:shadow-md uppercase tracking-wide"
          >
            Search
          </button>
        </form>
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
        <form className="w-full flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-gray-50 text-sm text-[#172A53] placeholder:text-[#172A53]"
          />
          <button
            type="submit"
            className="w-full md:w-auto shrink-0 bg-[#da251d] hover:bg-red-700 text-white font-semibold text-sm py-2.5 px-8 rounded-lg transition-all shadow-sm hover:shadow-md uppercase tracking-wide"
          >
            Search
          </button>
        </form>
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
