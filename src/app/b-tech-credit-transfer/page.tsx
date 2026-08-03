'use client';

import React, { useEffect, useRef, useState } from 'react';
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
  const [showStickyImage, setShowStickyImage] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      setShowStickyImage(heroBottom < 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <main className="min-h-screen pt-24 font-[Poppins]">
      <Header />
      <PageBanner 
        badge="Engineering Career" 
        title="Take the Next Step in your Engineering Career" 
        subtitle="Don’t let an incomplete B.Tech stop you from achieving your dreams. With Edumentora’s B.Tech Credit Transfer Program, you can resume your studies, complete your degree, and build a successful future."
        isGradientText={true}
      />

      <div ref={heroRef} id="know-more" className="relative pb-20 scroll-mt-28 pt-8">
        {showStickyImage && (
          <div className="pointer-events-none fixed inset-x-0 top-24 z-0 h-[420px] overflow-hidden">
            <div className="absolute inset-0 opacity-80 bg-gradient-to-b from-white via-white/80 to-white"></div>
            <div className="absolute right-0 top-0 h-full w-full overflow-hidden">
              <Image
                src="/college-bg.png"
                alt="Students in front of a college"
                fill
                className="object-cover object-center opacity-90"
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
          </div>
        )}

        {/* Elevated Intro Card Redesigned */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 mb-24 mt-16">
          <div className="relative rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-16 lg:gap-20 items-center overflow-hidden bg-white/10 backdrop-blur-xl">
            
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
                <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
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
              
              <Link href="#educational-mobility" className="mt-8 relative inline-flex items-center justify-center px-8 py-4 font-bold text-[#172A53] transition-all duration-300 bg-white/90 rounded-full hover:bg-[#172A53] hover:text-white border-2 border-[#172A53] overflow-hidden group w-fit shadow-md hover:shadow-xl">
                <span className="relative flex items-center gap-2">
                  Know More 
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Simple Paragraph Overview */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="p-2 md:p-4">
            <div className="space-y-8 text-[#172A53]">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-3 text-[#172A53]">Eligibility Criteria</h3>
                <p className="text-base leading-8 text-gray-700">
                  Students are eligible to apply when they have completed at least 50% of their B.Tech coursework and can provide official mark sheets and academic records. Their previous university must be recognized and approved, and any failed subjects can be completed through the university’s offline process.
                </p>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-3 text-[#172A53]">Top Universities</h3>
                <p className="text-base leading-8 text-gray-700">
                  Edumentora works with reputed UGC-approved universities such as Glocal University, Radha Govind University, IEC University, and Arni University. These partnerships help students continue their studies smoothly while keeping their academic progress valid and recognized.
                </p>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-3 text-[#172A53]">Program Benefits</h3>
                <p className="text-base leading-8 text-gray-700">
                  This program helps students avoid starting over from the beginning, save time and money, and continue their degree in a legal and recognized way. It also keeps their academic journey aligned with employment opportunities and future career goals.
                </p>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-3 text-[#172A53]">Specializations Available</h3>
                <p className="text-base leading-8 text-gray-700">
                  Students can choose from multiple engineering specializations including Civil Engineering, Mechanical Engineering, Computer Science, Electronics, Electrical Engineering, Information Technology, Automobile Engineering, and Chemical Engineering.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enquire Now + Know More Row */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8 pb-2">
          <div className="grid gap-6 xl:grid-cols-[minmax(0,420px)_minmax(0,1fr)] items-stretch">
            <div className="rounded-[1.5rem] bg-[#f8f9fb] p-5 md:p-7 self-stretch flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#172A53] mb-4 text-center">Enquire Now</h3>
              <EnquiryForm className="grid grid-cols-1 md:grid-cols-2 gap-3" isGrid={true} />
            </div>

            <div id="educational-mobility" className="rounded-[1.5rem] bg-white p-0 overflow-hidden">
              <div className="md:grid md:grid-cols-[280px_1fr]">
                <div className="bg-white text-[#172A53] p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-xs tracking-[0.3em] uppercase text-[#8c6a4d] font-semibold mb-4">Credit Transfer</span>
                  <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-[#172A53]">Know more on Credit Transfers</h2>
                  <p className="mt-5 text-sm leading-7 text-slate-600 max-w-[22rem]">
                    Discover how your prior credits can be applied toward a new degree, helping you move forward faster with confidence.
                  </p>
                </div>
                <div className="p-8 md:p-10">
                  <div className="space-y-5 text-[#172A53]">
                    <p className="text-base leading-8">
                      Credit transfer allows students to apply academic credits earned at one institution toward a program at another. This process supports educational mobility and helps learners continue their studies without repeating equivalent coursework.
                    </p>
                    <p className="text-base leading-8">
                      By recognizing prior learning, credit transfers can reduce the time and cost needed to complete a degree. Transfer acceptance depends on course equivalency, accreditation, and institutional policies.
                    </p>
                    <p className="text-base leading-8">
                      Speak with an academic advisor to understand how your credits transfer, plan your next steps, and ensure a smoother transition between institutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Programs Section */}
        <div className="py-[100px] relative overflow-hidden">
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
                className="group relative bg-white/15 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white/40 shadow-[0_20px_40px_-15px_rgba(23,42,83,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(23,42,83,0.2)] overflow-hidden transition-all duration-500 flex flex-col justify-between min-h-[420px]"
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
                className="group relative bg-white/15 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white/40 shadow-[0_20px_40px_-15px_rgba(218,37,29,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(218,37,29,0.2)] overflow-hidden transition-all duration-500 flex flex-col justify-between min-h-[420px]"
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
                className="group relative bg-white/15 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white/40 shadow-[0_20px_40px_-15px_rgba(124,58,237,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(124,58,237,0.2)] overflow-hidden transition-all duration-500 flex flex-col justify-between min-h-[420px]"
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
                className="group border border-gray-200 rounded-2xl overflow-hidden bg-white/10 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className={`p-6 flex justify-between items-center transition-colors duration-300 ${openFaq === index ? 'bg-[#172A53]' : 'bg-white/10 hover:bg-[#172A53]'}`}>
                  <h3 className={`font-bold text-lg transition-colors pr-4 ${openFaq === index ? 'text-white' : 'text-[#172A53] group-hover:text-white'}`}>
                    {faq.q}
                  </h3>
                  <span className={`transform transition-all duration-300 flex-shrink-0 ${openFaq === index ? 'text-white rotate-180' : 'text-[#da251d] group-hover:text-white'}`}>
                    ▼
                  </span>
                </div>
                <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${openFaq === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="p-6 text-gray-700 bg-white/15 border-t border-white/10 leading-relaxed text-justify">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note Paragraph */}
          <div className="mt-10 p-5 bg-red-50/20 rounded-2xl border border-red-100/20 text-center shadow-sm">
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
