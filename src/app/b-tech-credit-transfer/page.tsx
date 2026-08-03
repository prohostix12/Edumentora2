'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, ArrowRight } from 'lucide-react';
import PageBanner from '@/components/PageBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import EnquiryForm from '@/components/EnquiryForm';

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
      <PageBanner 
        badge="Engineering Career" 
        title="Take the Next Step in your Engineering Career" 
        subtitle="Don’t let an incomplete B.Tech stop you from achieving your dreams. With Edumentora’s B.Tech Credit Transfer Program, you can resume your studies, complete your degree, and build a successful future."
        isGradientText={true}
      />

      <div id="know-more" className="bg-gray-50 pb-20 scroll-mt-28 pt-8">
        {/* Elevated Intro Card Redesigned */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 mb-24 mt-16">
          <div className="relative bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-16 lg:gap-20 items-center overflow-hidden">
            
            {/* Background Decorative Blob */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-red-50 to-blue-50 blur-[80px] -z-10 pointer-events-none"></div>

            {/* Left Side: Image with modern offset styling */}
            <div className="relative w-full lg:w-5/12 flex justify-center group">
              {/* Decorative background shape */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#172A53] to-blue-800 rounded-[2.5rem] transform -rotate-3 scale-[0.95] translate-x-4 translate-y-4 shadow-xl transition-transform duration-700 group-hover:rotate-0 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              
              <div className="relative w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white z-10">
                <Image
                  src="/btech-credit-transfer.png"
                  alt="Engineering Career"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Floating badge */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-10 h-10 bg-red-100 text-[#da251d] rounded-full flex items-center justify-center font-bold text-lg">
                    🎓
                  </div>
                  <div>
                    <div className="font-bold text-[#172A53] text-xs uppercase tracking-wider">Fast Track</div>
                    <div className="text-gray-500 text-[10px] font-bold uppercase">Your Degree</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="w-full lg:w-7/12 space-y-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
                <span className="w-2 h-2 rounded-full bg-[#da251d] animate-pulse"></span>
                <span className="text-[#172A53] font-bold text-xs uppercase tracking-widest">Resume Your Journey</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#172A53] leading-tight tracking-tight">
                Complete your B.Tech <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#da251d] to-red-500">Without Starting Over!</span>
              </h2>
              
              <div className="relative">
                <div className="absolute left-0 top-2 bottom-2 w-1.5 bg-gradient-to-b from-[#da251d] to-red-200 rounded-full"></div>
                <div className="pl-7 space-y-5 text-gray-600 text-lg leading-relaxed text-justify font-medium">
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
              </div>
              
              <Link href="#educational-mobility" className="mt-8 relative inline-flex items-center justify-center px-8 py-4 font-bold text-[#172A53] transition-all duration-300 bg-white rounded-full hover:bg-[#172A53] hover:text-white border-2 border-[#172A53] overflow-hidden group w-fit shadow-md hover:shadow-xl">
                <span className="relative flex items-center gap-2">
                  Know More 
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </Link>
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

        {/* Enquire Now Form */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pb-4">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 w-full max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#172A53] mb-6 text-center">Enquire Now</h3>
            <EnquiryForm className="grid grid-cols-1 md:grid-cols-2 gap-4" isGrid={true} />
          </div>
        </div>
      </div>



      {/* Know more on Credit Transfers Section (Moved from Programs) */}
      <div id="educational-mobility" className="bg-gray-50 py-0 border-t border-gray-200 scroll-mt-24">
        <div className="max-w-[1300px] mx-auto px-4 md:px-8 mb-0">
          
          <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-2 border-[#da251d] overflow-hidden relative">
            
            {/* Left Navy Panel */}
            <div className="w-full md:w-[250px] lg:w-[300px] bg-[#172A53] relative flex flex-col items-center justify-center p-8 min-h-[120px] shrink-0 z-10">
              {/* Angled Edge (Desktop) */}
              <div className="hidden md:block absolute top-0 -right-6 w-12 h-full bg-[#172A53] -skew-x-[12deg] -z-10 border-r-2 border-[#da251d] shadow-lg"></div>
              
              {/* Icon & Decorative Dots */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-5 backdrop-blur-sm border border-white/10">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#da251d]"></div>
                  <div className="w-2 h-2 rounded-full bg-white/30"></div>
                  <div className="w-2 h-2 rounded-full bg-white/30"></div>
                </div>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="w-full p-8 md:p-12 lg:p-16 relative bg-white z-0">
              {/* Oversized Quote Decor */}
              <div className="absolute -top-4 right-8 text-[12rem] lg:text-[16rem] text-gray-50 leading-none font-serif opacity-80 pointer-events-none select-none">
                &quot;
              </div>

              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 bg-red-50 text-[#da251d] font-bold tracking-widest uppercase rounded-full mb-6 text-xs md:text-sm border border-red-100">
                  Educational Mobility
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#172A53] leading-tight mb-5">
                  Know more on Credit Transfers
                </h2>
                
                {/* Underline */}
                <div className="flex mb-8">
                  <div className="w-16 h-1.5 bg-[#172A53] rounded-l-full"></div>
                  <div className="w-8 h-1.5 bg-[#da251d] rounded-r-full"></div>
                </div>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify font-medium">
                  Credit transfer is a process that allows students to apply academic credits earned from one institution toward a degree or program at another. This system facilitates educational mobility, enabling learners to continue their studies without repeating equivalent coursework. By recognizing prior learning, credit transfers can reduce the time and cost required to complete a degree. However, acceptance of transfer credits depends on factors such as course equivalency, accreditation, and institutional policies. It’s essential for students to consult with academic advisors to understand the transferability of their credits and ensure a smooth transition between educational institutions.
                </p>
              </div>
            </div>

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
            {/* Animated Heading */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#da251d] animate-pulse"></span>
                <span className="text-[#172A53] font-bold text-xs uppercase tracking-widest">Choose Your Path</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#172A53] mb-4 tracking-tight">
                Our Transfer <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#da251d] to-red-500">Programs</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#172A53] to-[#da251d] rounded-full mb-6"></div>
              <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">Select the program that fits your educational background</p>
            </motion.div>

            {/* Animated Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
              
              {/* Card 1: UG */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white/40 shadow-[0_20px_40px_-15px_rgba(23,42,83,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(23,42,83,0.2)] overflow-hidden transition-all duration-500 flex flex-col justify-between min-h-[420px]"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/50 to-transparent rounded-full blur-3xl -z-10 transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#172A53] to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="w-16 h-16 bg-[#f0f4ff] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#172A53] transition-colors duration-500 shadow-inner">
                  <GraduationCap className="w-8 h-8 text-[#172A53] group-hover:text-white transition-colors duration-500" />
                </div>
                
                <div className="relative z-20 flex-grow flex flex-col">
                  <h3 className="text-3xl font-bold text-[#172A53] mb-4">UG Transfer</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium flex-grow">
                    Transfer your earned UG credits to top universities, saving time and costs while completing your degree efficiently.
                  </p>
                  
                  <Link href="/ug-credit-transfer" className="inline-flex items-center text-[#172A53] font-bold text-lg group/link mt-auto w-max">
                    Know More 
                    <span className="ml-2 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover/link:bg-[#da251d] group-hover/link:text-white transition-all duration-300">
                      <ArrowRight className="w-5 h-5 transform group-hover/link:-rotate-45 transition-transform duration-300" />
                    </span>
                  </Link>
                </div>
              </motion.div>

              {/* Card 2: PG */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white/40 shadow-[0_20px_40px_-15px_rgba(218,37,29,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(218,37,29,0.2)] overflow-hidden transition-all duration-500 flex flex-col justify-between min-h-[420px]"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-100/50 to-transparent rounded-full blur-3xl -z-10 transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#da251d] to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#da251d] transition-colors duration-500 shadow-inner">
                  <Briefcase className="w-8 h-8 text-[#da251d] group-hover:text-white transition-colors duration-500" />
                </div>
                
                <div className="relative z-20 flex-grow flex flex-col">
                  <h3 className="text-3xl font-bold text-[#172A53] mb-4">PG Transfer</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium flex-grow">
                    Transfer your PG credits to leading universities, saving time and money while completing your postgraduate degree smoothly.
                  </p>
                  
                  <Link href="/pg-credit-transfer" className="inline-flex items-center text-[#da251d] font-bold text-lg group/link mt-auto w-max">
                    Know More 
                    <span className="ml-2 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover/link:bg-[#da251d] group-hover/link:text-white transition-all duration-300">
                      <ArrowRight className="w-5 h-5 transform group-hover/link:-rotate-45 transition-transform duration-300" />
                    </span>
                  </Link>
                </div>
              </motion.div>

              {/* Card 3: Diploma */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white/40 shadow-[0_20px_40px_-15px_rgba(124,58,237,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(124,58,237,0.2)] overflow-hidden transition-all duration-500 flex flex-col justify-between min-h-[420px]"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-100/50 to-transparent rounded-full blur-3xl -z-10 transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-600 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-600 transition-colors duration-500 shadow-inner">
                  <Award className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-500" />
                </div>
                
                <div className="relative z-20 flex-grow flex flex-col">
                  <h3 className="text-3xl font-bold text-[#172A53] mb-4">Diploma Transfer</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium flex-grow">
                    Transfer your Diploma credits to leading universities to fast-track your educational progression effortlessly.
                  </p>
                  
                  <Link href="/diploma-credit-transfer" className="inline-flex items-center text-purple-600 font-bold text-lg group/link mt-auto w-max">
                    Know More 
                    <span className="ml-2 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover/link:bg-purple-600 group-hover/link:text-white transition-all duration-300">
                      <ArrowRight className="w-5 h-5 transform group-hover/link:-rotate-45 transition-transform duration-300" />
                    </span>
                  </Link>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(49,45,69)] text-center mb-12">
            Frequently Asked Questions on B.Tech Credit Transfers
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="group border border-gray-200 rounded-2xl overflow-hidden bg-white transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className={`p-6 flex justify-between items-center transition-colors duration-300 ${openFaq === index ? 'bg-[#172A53]' : 'bg-gray-50 hover:bg-[#172A53]'}`}>
                  <h3 className={`font-bold text-lg transition-colors pr-4 ${openFaq === index ? 'text-white' : 'text-[#172A53] group-hover:text-white'}`}>
                    {faq.q}
                  </h3>
                  <span className={`transform transition-all duration-300 flex-shrink-0 ${openFaq === index ? 'text-white rotate-180' : 'text-[#da251d] group-hover:text-white'}`}>
                    ▼
                  </span>
                </div>
                <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${openFaq === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="p-6 text-gray-700 bg-white border-t border-gray-100 leading-relaxed text-justify">
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
<Footer />
      <FloatingWhatsApp />
    </main>
  );
}
