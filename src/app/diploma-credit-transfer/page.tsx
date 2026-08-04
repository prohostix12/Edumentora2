import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import EnquiryForm from '@/components/EnquiryForm';

export default function DiplomaCreditTransferPage() {
  return (
    <main className="min-h-screen bg-white font-[Poppins]">
      <Header />

      <PageBanner title="Diploma Credit Transfer" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-12 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7 space-y-6 text-[#3b3226]">
          <h2 className="text-2xl font-bold text-[#002147]">
            Seamless Diploma Credit Transfer Program
          </h2>
          
          <p className="text-base leading-relaxed text-justify font-medium">
            Transfer your diploma credits to a new institution and continue your studies without starting over. Keep your progress moving.
          </p>

          <p className="text-base leading-relaxed text-justify">
            EduMentora, offers a comprehensive Diploma Credit Transfer Programme in collaboration with renowned universities, including Glocal University, Radha Govind University, and Arni University. This program is designed to help students seamlessly transfer their existing diploma credits to recognized universities, allowing them to upgrade their qualifications without restarting their education. By leveraging this credit transfer system, students can save time and effort while continuing their academic journey toward higher education and career advancement.
          </p>
          
          <p className="text-base leading-relaxed text-justify">
            Our Diploma Credit Transfer Programme is ideal for students who have completed diploma courses and wish to pursue advanced degrees with recognized accreditation. EduMentora ensures a hassle-free admission process, expert guidance, and flexible learning options to support students at every stage. The program covers a wide range of disciplines, catering to diverse academic interests and professional goals. With a focus on quality education and seamless credit recognition, EduMentora empowers students to achieve their academic aspirations efficiently and cost-effectively.
          </p>

          <Link href="/about-us" className="mt-4 bg-[#da251d] hover:bg-[#b91c1c] text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-lg inline-flex items-center group w-fit">
            Know More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="lg:col-span-5">
          <div className="relative w-full h-full min-h-[350px] rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <Image
              src="/diploma_credit_transfer.png"
              alt="Diploma Student on Campus"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>
      </div>

      {/* Full Width Enquire Now Form */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 w-full max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#002147] mb-6 text-center">Enquire Now</h3>
          <EnquiryForm className="grid grid-cols-1 md:grid-cols-2 gap-4" isGrid={true} />
        </div>
      </div>
<Footer />
      <FloatingWhatsApp />
    </main>
  );
}
