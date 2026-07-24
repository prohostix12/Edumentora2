'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function BTechCreditTransferPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How long does the credit transfer process take?",
      a: <p className="text-[rgb(49,45,69)] text-lg leading-relaxed">The process usually takes a few weeks, depending on the university’s approval and document verification. Edumentora ensures a fast and smooth process.</p>
    },
    {
      q: "Is my B.Tech degree valid after credit transfer?",
      a: <p className="text-[rgb(49,45,69)] text-lg leading-relaxed">Yes! You will receive a UGC-approved B.Tech degree, which is valid for all jobs, government exams, and higher studies.</p>
    },
    {
      q: "Can I transfer credits from any university?",
      a: <p className="text-[rgb(49,45,69)] text-lg leading-relaxed">Your previous university must be UGC-approved for credit transfer eligibility. Contact us to check your university’s approval status.</p>
    },
    {
      q: "What documents are required for credit transfer?",
      a: (
        <div className="text-[rgb(49,45,69)] text-lg leading-relaxed w-full">
          <p className="mb-3">You need to submit:</p>
          <ul className="space-y-3 pl-2">
            <li className="flex items-center">
              <img src="https://s.w.org/images/core/emoji/17.0.2/svg/2714.svg" alt="check" className="w-5 h-5 mr-3 flex-shrink-0" />
              <span>Previous B.Tech mark sheets and transcripts</span>
            </li>
            <li className="flex items-center">
              <img src="https://s.w.org/images/core/emoji/17.0.2/svg/2714.svg" alt="check" className="w-5 h-5 mr-3 flex-shrink-0" />
              <span>ID proof (Aadhaar, Passport, etc.)</span>
            </li>
            <li className="flex items-center">
              <img src="https://s.w.org/images/core/emoji/17.0.2/svg/2714.svg" alt="check" className="w-5 h-5 mr-3 flex-shrink-0" />
              <span>University migration or transfer certificate (if applicable)</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      q: "Do I need to take an entrance exam for credit transfer?",
      a: <p className="text-[rgb(49,45,69)] text-lg leading-relaxed">No! Credit transfer admissions do not require entrance exams. You only need to provide your academic records for evaluation.</p>
    },
    {
      q: "Can I write the credit transfer exam online?",
      a: <p className="text-[rgb(49,45,69)] text-lg leading-relaxed">No! A UGC-approved credit transfer exam can never be conducted online.</p>
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-24 font-[Poppins]">
      <Header />
      {/* Premium Hero Section */}
      <div className="w-full bg-[#172A53] pt-16 pb-48 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/edumentora%20bg%20image.png')" }}></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-block px-5 py-2 bg-white/10 text-red-200 font-bold tracking-wider uppercase rounded-full mb-6 text-sm border border-white/20 backdrop-blur-md">
            Engineering Career
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto">
            Take the Next Step in your Engineering Career
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Don’t let an incomplete B.Tech stop you from achieving your dreams. With Edumentora’s B.Tech Credit Transfer Program, you can resume your studies, complete your degree, and build a successful future.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 pb-20">
        {/* Elevated Intro Card */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 -mt-32 mb-20">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center">
            <div className="relative w-full lg:w-5/12 h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/btech-credit-transfer.png"
                alt="Engineering Career"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="lg:w-7/12 space-y-6">
              <h2 className="text-3xl font-bold text-[#172A53] leading-tight">
                Complete your B.Tech Without Starting Over!
              </h2>
              <div className="text-[rgb(49,45,69)] text-lg leading-relaxed text-justify space-y-4">
                <p>
                  At Edumentora, our B.Tech Credit Transfer Program is designed to help engineering students who have discontinued their studies due to academic, personal, or financial challenges. This program allows you to transfer your previously earned credits to our partner universities and continue your B.Tech degree without starting over.
                </p>
                <p>
                  We collaborate with reputed institutions like Glocal University, Radha Govind University, and Arni University, ensuring that your academic efforts are recognized and credited toward your degree. Our expert team evaluates your existing credits and facilitates a smooth transfer process.
                </p>
                <p>
                  Instead of starting from the first year, eligible students who have completed at least 50% of their B.Tech coursework can transfer their existing credits to a UGC-approved and AICTE-recognized university.
                </p>
              </div>
              <button className="mt-4 bg-[#da251d] hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-lg inline-flex items-center">
                Know More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Information Grids */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

            {/* Eligibility Box */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full group">
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6 text-[#da251d] font-bold text-2xl group-hover:bg-[#da251d] group-hover:text-white transition-colors duration-300">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-[#172A53] mb-6">
                Eligibility Criteria
              </h3>
              <ul className="space-y-4 text-[rgb(49,45,69)] text-lg flex-grow">
                <li className="flex items-start">
                  <span className="text-[#da251d] mr-3 font-bold mt-1">➤</span>
                  <span>Completed at least 50% of your B.Tech degree (2+ years).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#da251d] mr-3 font-bold mt-1">➤</span>
                  <span>Your previous university must be UGC-approved.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#da251d] mr-3 font-bold mt-1">➤</span>
                  <span>You must provide official mark sheets and academic transcripts.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#da251d] mr-3 font-bold mt-1">➤</span>
                  <span>You must complete failed subjects in offline mode at the university.</span>
                </li>
              </ul>
            </div>

            {/* Top Universities Box */}
            <div className="bg-[#172A53] text-white p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4 text-9xl group-hover:scale-110 transition-transform duration-500">🏛️</div>
              <h3 className="text-2xl font-bold mb-6 relative z-10">
                Top Universities
              </h3>
              <p className="text-gray-300 text-lg mb-6 relative z-10">
                Edumentora collaborates with top UGC-approved universities in India:
              </p>
              <ul className="space-y-4 text-white text-lg font-medium flex-grow relative z-10">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#da251d] rounded-full mr-4"></span>
                  <span>Glocal University</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#da251d] rounded-full mr-4"></span>
                  <span>Radha Govind University</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#da251d] rounded-full mr-4"></span>
                  <span>IEC University</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#da251d] rounded-full mr-4"></span>
                  <span>Arni University</span>
                </li>
              </ul>
            </div>

            {/* Benefits Box */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full group">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600 font-bold text-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                ★
              </div>
              <h3 className="text-2xl font-bold text-[#172A53] mb-6">
                Program Benefits
              </h3>
              <ul className="space-y-4 text-[rgb(49,45,69)] text-lg flex-grow">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold mt-1">➤</span>
                  <span><strong>No Need to Start Over</strong> – Continue from your last semester.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold mt-1">➤</span>
                  <span><strong>Save Time & Money</strong> – No need to repeat previous subjects.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold mt-1">➤</span>
                  <span><strong>100% Legal & Approved</strong> – Get a UGC recognized degree.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold mt-1">➤</span>
                  <span><strong>Valid for Jobs</strong> – Eligible for all employment opportunities.</span>
                </li>
              </ul>
            </div>

            {/* Specializations Box */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full group">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 text-purple-600 font-bold text-2xl group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                ⚙️
              </div>
              <h3 className="text-2xl font-bold text-[#172A53] mb-6">
                Specializations Available
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[rgb(49,45,69)] text-base flex-grow">
                <li className="flex items-center whitespace-nowrap"><span className="text-purple-500 mr-2">▪</span> Civil Engineering</li>
                <li className="flex items-center whitespace-nowrap"><span className="text-purple-500 mr-2">▪</span> Mechanical Eng</li>
                <li className="flex items-center whitespace-nowrap"><span className="text-purple-500 mr-2">▪</span> Computer Science</li>
                <li className="flex items-center whitespace-nowrap"><span className="text-purple-500 mr-2">▪</span> Electronics (ECE)</li>
                <li className="flex items-center whitespace-nowrap"><span className="text-purple-500 mr-2">▪</span> Electrical Eng</li>
                <li className="flex items-center whitespace-nowrap"><span className="text-purple-500 mr-2">▪</span> Information Tech</li>
                <li className="flex items-center whitespace-nowrap"><span className="text-purple-500 mr-2">▪</span> Automobile Eng</li>
                <li className="flex items-center whitespace-nowrap"><span className="text-purple-500 mr-2">▪</span> Chemical Eng</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Fifth Section: FAQ */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(49,45,69)] text-center mb-12">
            Frequently Asked Questions on B.Tech Credit Transfers
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[rgb(49,45,69)] flex items-start m-0 pr-4">
                    <span className="text-[#da251d] mr-3 font-black">Q.</span>
                    {faq.q}
                  </h3>
                  <span className={`text-gray-400 text-sm transform transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </div>

                <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openFaq === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="flex items-start pt-4 mt-4 border-t border-gray-100">
                      <span className="text-gray-400 mr-3 font-bold">A.</span>
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note Paragraph */}
          <div className="mt-10 p-5 bg-red-50 rounded-2xl border border-red-100 text-center shadow-sm">
            <p className="text-[rgb(49,45,69)] text-sm md:text-base italic font-medium leading-relaxed">
              *To complete your B.Tech degree through credit transfer, you must visit the university and write the failed subjects directly in offline mode. Universities do not allow online exams for credit transfer programs, as per UGC guidelines.
            </p>
          </div>
        </div>
      </div>

      {/* Know more on Credit Transfers Section (Moved from Programs) */}
      <div className="bg-gray-50 py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 text-center">
          <div className="inline-block px-4 py-1.5 bg-red-100 text-[#da251d] font-bold tracking-widest uppercase rounded-full mb-4 text-sm border border-red-200">
            Educational Mobility
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#172A53] leading-tight mb-6">
            Know more on Credit Transfers
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Seamlessly continue your academic journey by leveraging your prior learning across top institutions.
          </p>
        </div>

        {/* Elevated Intro Card */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify font-medium">
              Credit transfer is a process that allows students to apply academic credits earned from one institution toward a degree or program at another. This system facilitates educational mobility, enabling learners to continue their studies without repeating equivalent coursework. By recognizing prior learning, credit transfers can reduce the time and cost required to complete a degree. However, acceptance of transfer credits depends on factors such as course equivalency, accreditation, and institutional policies. It’s essential for students to consult with academic advisors to understand the transferability of their credits and ensure a smooth transition between educational institutions.
            </p>
          </div>
        </div>

        {/* Premium Programs Section */}
        <div className="bg-[#F7F8FA] py-[100px] relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #172A53 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blue-300 blur-[120px]"></div>
          </div>

          <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#172A53] mb-4">Our Transfer Programs</h2>
              <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">Select the program that fits your educational background</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              
              {/* Card 1: UG */}
              <div className="relative bg-gradient-to-br from-[#0B1733] to-[#1e3a7a] rounded-[28px] overflow-hidden shadow-[0_12px_40px_rgba(11,23,51,0.15)] hover:shadow-[0_20px_60px_rgba(11,23,51,0.3)] transition-all duration-500 transform hover:-translate-y-2 group flex flex-col justify-between p-8 pl-36 min-h-[420px]">
                {/* Background Decoration */}
                <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute -right-8 -bottom-8 text-white opacity-5 group-hover:scale-110 transition-transform duration-700 pointer-events-none"><path d="M21.42 10.922a2 2 0 0 1-.019 3.07l-9.28 8.07a2 2 0 0 1-2.234 0l-9.28-8.07a2 2 0 0 1-.019-3.07l9.28-8.07a2 2 0 0 1 2.234 0l9.28 8.07z" /><path d="M12 2v20" /></svg>
                
                {/* Large Decorative Number */}
                <div className="absolute bottom-6 left-36 text-7xl font-black text-white/10 pointer-events-none select-none">01</div>
                
                {/* Left Curved Accent Panel */}
                <div className="absolute top-0 left-0 h-full w-28 bg-white rounded-r-[50px] flex items-center justify-center shadow-[4px_0_24px_rgba(0,0,0,0.15)] z-10 transition-transform duration-500 group-hover:scale-x-105 origin-left">
                  <div className="w-16 h-16 rounded-full bg-[#f0f4ff] flex items-center justify-center group-hover:bg-[#1e3a7a] transition-colors duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1e3a7a] group-hover:text-white transition-colors duration-500"><path d="M21.42 10.922a2 2 0 0 1-.019 3.07l-9.28 8.07a2 2 0 0 1-2.234 0l-9.28-8.07a2 2 0 0 1-.019-3.07l9.28-8.07a2 2 0 0 1 2.234 0l9.28 8.07z" /><path d="M12 2v20" /></svg>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-20 flex-grow flex flex-col">
                  <h3 className="text-[28px] font-bold text-white mb-4 leading-tight">
                    UG Credit Transfer
                  </h3>
                  <p className="text-[16px] text-white/85 leading-[1.7] mb-8 flex-grow">
                    Transfer your earned UG credits to top universities, saving time and costs while completing your degree efficiently.
                  </p>
                  <button className="bg-white text-[#1e3a7a] font-bold py-3.5 px-6 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center mt-auto w-max group/btn">
                    Know More <span className="ml-2 transform group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>

              {/* Card 2: PG */}
              <div className="relative bg-gradient-to-br from-[#991b1b] to-[#E53935] rounded-[28px] overflow-hidden shadow-[0_12px_40px_rgba(229,57,53,0.15)] hover:shadow-[0_20px_60px_rgba(229,57,53,0.3)] transition-all duration-500 transform hover:-translate-y-2 group flex flex-col justify-between p-8 pl-36 min-h-[420px]">
                {/* Background Decoration */}
                <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute -right-8 -bottom-8 text-white opacity-5 group-hover:scale-110 transition-transform duration-700 pointer-events-none"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                
                {/* Large Decorative Number */}
                <div className="absolute bottom-6 left-36 text-7xl font-black text-white/10 pointer-events-none select-none">02</div>
                
                {/* Left Curved Accent Panel */}
                <div className="absolute top-0 left-0 h-full w-28 bg-white rounded-r-[50px] flex items-center justify-center shadow-[4px_0_24px_rgba(0,0,0,0.15)] z-10 transition-transform duration-500 group-hover:scale-x-105 origin-left">
                  <div className="w-16 h-16 rounded-full bg-[#fff0f0] flex items-center justify-center group-hover:bg-[#E53935] transition-colors duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E53935] group-hover:text-white transition-colors duration-500"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-20 flex-grow flex flex-col">
                  <h3 className="text-[28px] font-bold text-white mb-4 leading-tight">
                    PG Credit Transfer
                  </h3>
                  <p className="text-[16px] text-white/85 leading-[1.7] mb-8 flex-grow">
                    Transfer your PG credits to leading universities, saving time and money while completing your postgraduate degree smoothly and efficiently.
                  </p>
                  <button className="bg-white text-[#E53935] font-bold py-3.5 px-6 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center mt-auto w-max group/btn">
                    Know More <span className="ml-2 transform group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>

              {/* Card 3: Diploma */}
              <div className="relative bg-gradient-to-br from-[#4c1d95] to-[#7c3aed] rounded-[28px] overflow-hidden shadow-[0_12px_40px_rgba(124,58,237,0.15)] hover:shadow-[0_20px_60px_rgba(124,58,237,0.3)] transition-all duration-500 transform hover:-translate-y-2 group flex flex-col justify-between p-8 pl-36 min-h-[420px]">
                {/* Background Decoration */}
                <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute -right-8 -bottom-8 text-white opacity-5 group-hover:scale-110 transition-transform duration-700 pointer-events-none"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>
                
                {/* Large Decorative Number */}
                <div className="absolute bottom-6 left-36 text-7xl font-black text-white/10 pointer-events-none select-none">03</div>
                
                {/* Left Curved Accent Panel */}
                <div className="absolute top-0 left-0 h-full w-28 bg-white rounded-r-[50px] flex items-center justify-center shadow-[4px_0_24px_rgba(0,0,0,0.15)] z-10 transition-transform duration-500 group-hover:scale-x-105 origin-left">
                  <div className="w-16 h-16 rounded-full bg-[#f3edff] flex items-center justify-center group-hover:bg-[#7c3aed] transition-colors duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7c3aed] group-hover:text-white transition-colors duration-500"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-20 flex-grow flex flex-col">
                  <h3 className="text-[28px] font-bold text-white mb-4 leading-tight">
                    Diploma Credit Transfer
                  </h3>
                  <p className="text-[16px] text-white/85 leading-[1.7] mb-8 flex-grow">
                    Transfer your Diploma credits to leading universities, saving time and money while completing your postgraduate degree smoothly and efficiently.
                  </p>
                  <button className="bg-white text-[#7c3aed] font-bold py-3.5 px-6 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center mt-auto w-max group/btn">
                    Know More <span className="ml-2 transform group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seventh Section: Final Summary */}
      {/* <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="w-full space-y-6 text-[rgb(49,45,69)] text-lg leading-relaxed text-justify">
          <p>
            BTech Credit Transfer is a useful option for students who want to continue their studies in a new college or university without the problem of starting everything again. Students face conditions such as transferring to another city for better facilities or going to a college with more opportunities. In such cases, BTech Credit Transfer allows them to carry forward the credits they already earned.
          </p>
          <p>
            The process of BTech Credit Transfer is simple in most universities. A student can apply by showing their previous mark sheets, syllabus, and proof of the subjects they have already passed. The new college then checks which subjects match with their own syllabus. Once approved, those credits get added, and the student can continue from the next semester instead of beginning from the first year again.
          </p>
          <p>
            BTech Credit Transfer saves both time and money. Instead of repeating the same subjects, students can focus on new topics and complete the degree on time. It also gives freedom to move to better colleges without wasting years of study.
          </p>
          <p>
            If you are planning to change your current college, then learning about BTech credit transfer can make the shift very easy. It ensures your hard work is valued and helps you achieve your B.Tech degree smoothly.
          </p>
        </div>
      </div> */}

      <LocationsSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
