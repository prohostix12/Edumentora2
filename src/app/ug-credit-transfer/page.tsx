import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import EnquiryForm from '@/components/EnquiryForm';

export default function UGCreditTransferPage() {
  return (
    <main className="min-h-screen bg-white font-[Poppins]">
      <Header />

      <PageBanner title="UG Credit Transfer" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-12 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7 space-y-6 text-[#3b3226]">
          <h2 className="text-2xl font-bold text-[#002147]">
            Complete Your Degree with Ug Credit Transfer
          </h2>
          
          <p className="text-base leading-relaxed text-justify font-medium">
            Transfer your UG credits and pick up right where you left off. Stay on track with your academic goals.
          </p>

          <p className="text-base leading-relaxed text-justify">
            At Edumentora, we offer a seamless UG Credit Transfer Program designed for students who have discontinued their undergraduate studies due to academic, personal, or financial challenges. Our program allows you to transfer your previously earned credits to our partner universities, enabling you to resume your education without starting from scratch.
          </p>
          
          <p className="text-base leading-relaxed text-justify">
            Through partnerships with leading institutions like Glocal University, Radha Govind University, and Arni University, we ensure that your hard work is recognized and counted toward your degree. Our expert team evaluates your academic history and guides you through a smooth transfer process, saving you time and reducing financial stress.
          </p>
          
          <p className="text-base leading-relaxed text-justify">
            With Edumentora, you can complete your undergraduate degree efficiently, reclaim your academic progress, and achieve your educational goals with confidence.
          </p>

          <Link href="/about-us" className="mt-4 bg-[#8B0000] hover:bg-[#5C0000] text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-lg inline-flex items-center group w-fit">
            Know More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="lg:col-span-5">
          <div className="relative w-full h-full min-h-[350px] rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <Image
              src="/ug_credit_transfer.png"
              alt="Undergraduate Student on Campus"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>
      </div>

      {/* Full Width Enquire Now Form */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="bg-[#F5F5F5] p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 w-full max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#002147] mb-6 text-center">Enquire Now</h3>
          <EnquiryForm className="grid grid-cols-1 md:grid-cols-2 gap-4" isGrid={true} />
        </div>
      </div>
<Footer />
      <FloatingWhatsApp />
    </main>
  );
}
