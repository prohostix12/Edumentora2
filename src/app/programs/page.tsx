'use client';

import React, { useState } from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import Header from '@/components/Header';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Page() {
  const [activeTab, setActiveTab] = useState<'apprenticeship' | 'wilp'>('apprenticeship');

  return (
    <main className="min-h-screen bg-white pt-24 font-[Poppins]">
      <Header />
      
      {/* Unified Hero Section */}
      <div className="w-full bg-[#172A53] relative overflow-hidden">
        {/* Background Image Overlay matching B-Tech page */}
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/edumentora%20bg%20image.png')" }}></div>
        
        <div className="w-full pt-20 pb-24 relative z-10 max-w-7xl mx-auto text-center px-6 md:px-12">
          <div className="inline-block px-4 py-1.5 bg-white/10 text-red-200 font-bold tracking-wider uppercase rounded-full mb-6 text-xs border border-white/20 backdrop-blur-md">
            Professional & Career Advancement
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight font-[Poppins]">
            Empower Your Future with Flexible Learning Programs
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-5xl mx-auto">
            Whether through our Apprenticeship Program or Work Integrated Learning Program (WILP), Edumentora enables working professionals to convert their valuable experience into academic credits. Continue your education seamlessly, carry your progress forward, and achieve your degree without putting your career on hold.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="w-full bg-white border-b border-gray-200 sticky top-[82px] z-40 flex justify-center shadow-sm">
        <div className="flex space-x-2 md:space-x-12 px-4 overflow-x-auto w-full max-w-7xl justify-center">
          <button
            onClick={() => setActiveTab('apprenticeship')}
            className={`whitespace-nowrap px-4 md:px-8 py-5 text-sm md:text-lg font-bold border-b-4 transition-colors duration-300 ${activeTab === 'apprenticeship' ? 'border-[#da251d] text-[#da251d]' : 'border-transparent text-gray-500 hover:text-[#172A53]'}`}
          >
            Apprenticeship Program
          </button>
          <button
            onClick={() => setActiveTab('wilp')}
            className={`whitespace-nowrap px-4 md:px-8 py-5 text-sm md:text-lg font-bold border-b-4 transition-colors duration-300 ${activeTab === 'wilp' ? 'border-[#da251d] text-[#da251d]' : 'border-transparent text-gray-500 hover:text-[#172A53]'}`}
          >
            Work Integrated Learning Program (WILP)
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full bg-white min-h-[80vh]">
        
        {/* APPRENTICESHIP TAB */}
        {activeTab === 'apprenticeship' && (
          <div className="flex flex-col max-w-7xl mx-auto animate-in fade-in duration-500">
            <div className="bg-gray-50 pb-20 flex-grow">
              {/* Elevated Intro Card (EALP Overview) */}
              <div className="px-4 md:px-12 relative z-20 mt-12 mb-20">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 flex flex-col gap-8 items-center">
                  <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl group">
                    <img 
                      src="/apprenticeship-hero.png" 
                      alt="Apprenticeship program at Edumentora" 
                      className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="w-full space-y-6">
                    <div className="inline-block px-4 py-1.5 bg-red-50 text-[#da251d] font-bold tracking-widest uppercase rounded-full mb-2 text-sm border border-red-100">
                      EALP Overview
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#172A53] leading-tight">
                      Employee Apprenticeship-Learning Program
                    </h2>
                    <h3 className="text-xl md:text-2xl font-semibold text-[#da251d]">
                      Convert Work Experience into Academic Credits
                    </h3>
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                      The Employee Apprenticeship-Based Learning Program (EALP) is a unique opportunity for working professionals to complete their degree without restarting from the beginning. This program recognizes your work experience and converts it into academic credits, allowing you to earn a UG or PG degree in a shorter time while continuing your job.
                    </p>
                    <button className="mt-4 bg-[#da251d] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 inline-flex items-center text-lg">
                      Know More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* How it Works Section */}
              <div className="px-4 md:px-12 mb-24 text-left">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#172A53]">How it Works</h2>
                  <p className="text-gray-500 mt-2 text-lg">A simple three-step process to accelerate your degree</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
                    <div className="w-14 h-14 bg-red-50 text-[#da251d] rounded-xl flex items-center justify-center font-black text-2xl mb-6 shadow-sm border border-red-100 group-hover:bg-[#da251d] group-hover:text-white transition-colors duration-300">1</div>
                    <h3 className="text-xl font-bold text-[#172A53] mb-3">Work Experience as Credits</h3>
                    <p className="text-gray-600 leading-relaxed">
                      If you have 2+ years of work experience, it will be evaluated and counted as part of your degree.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
                    <div className="w-14 h-14 bg-red-50 text-[#da251d] rounded-xl flex items-center justify-center font-black text-2xl mb-6 shadow-sm border border-red-100 group-hover:bg-[#da251d] group-hover:text-white transition-colors duration-300">2</div>
                    <h3 className="text-xl font-bold text-[#172A53] mb-3">Reduced Study Duration</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Instead of the traditional 3–4-year degree, your work experience helps you complete the course faster.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
                    <div className="w-14 h-14 bg-red-50 text-[#da251d] rounded-xl flex items-center justify-center font-black text-2xl mb-6 shadow-sm border border-red-100 group-hover:bg-[#da251d] group-hover:text-white transition-colors duration-300">3</div>
                    <h3 className="text-xl font-bold text-[#172A53] mb-3">Flexible Learning Options</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Study through online classes, weekend sessions, or a hybrid model while continuing your job.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Programs and Eligibility Section */}
            <div className="bg-white py-20 px-4 md:px-12 flex-grow">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#172A53]">Available Degree Programs</h2>
                <p className="text-gray-500 mt-2 text-lg">Choose from a wide range of UGC-approved degrees</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {/* UG Programs */}
                <div className="bg-gray-50 p-8 rounded-3xl shadow-md border border-gray-200 hover:border-[#172A53] transition-colors duration-300 group">
                  <h3 className="text-2xl font-bold text-[#172A53] mb-6 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-[#172A53] text-white flex items-center justify-center mr-4 text-base group-hover:scale-110 transition-transform">🎓</span>
                    Undergraduate Programs
                  </h3>
                  <ul className="space-y-4 text-gray-700 text-lg">
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>BBA</strong></span></li>
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>B.Com</strong></span></li>
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>BCA</strong></span></li>
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>B.Sc IT</strong></span></li>
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>B.Tech</strong></span></li>
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>BA</strong></span></li>
                  </ul>
                </div>

                {/* PG Programs */}
                <div className="bg-gray-50 p-8 rounded-3xl shadow-md border border-gray-200 hover:border-[#da251d] transition-colors duration-300 group">
                  <h3 className="text-2xl font-bold text-[#172A53] mb-6 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-[#da251d] text-white flex items-center justify-center mr-4 text-base group-hover:scale-110 transition-transform">🎓</span>
                    Postgraduate Programs
                  </h3>
                  <ul className="space-y-4 text-gray-700 text-lg">
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>MBA</strong></span></li>
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>M.Com</strong></span></li>
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>MCA</strong></span></li>
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>M.Tech</strong></span></li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Who Can Apply? */}
                <div className="bg-[#172A53] text-white p-10 rounded-3xl shadow-xl space-y-6">
                  <h3 className="text-3xl font-bold">Who Can Apply?</h3>
                  <ul className="space-y-4 text-gray-200 text-lg">
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span>Working professionals who discontinued their studies.</span></li>
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span>Employees with 2+ years of industry experience.</span></li>
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span>People seeking career growth and better job opportunities.</span></li>
                  </ul>
                </div>

                {/* Why Choose EALP? */}
                <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-300 space-y-6 hover:border-black transition-colors duration-300">
                  <h3 className="text-3xl font-bold text-[#172A53]">Why Choose EALP?</h3>
                  <ul className="space-y-4 text-gray-700 text-lg">
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>Complete Faster</strong> – Work experience reduces study time.</span></li>
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>Work & Study</strong> – No need to quit your job.</span></li>
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>Recognized Degree</strong> – Accepted for jobs & promotions.</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* WILP TAB */}
        {activeTab === 'wilp' && (
          <div className="flex flex-col max-w-7xl mx-auto animate-in fade-in duration-500">
            <div className="bg-gray-50 pb-20 flex-grow">
              {/* Elevated Intro Card */}
              <div className="px-4 md:px-12 relative z-20 mt-12 mb-20">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 flex flex-col gap-8 items-center">
                  <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl group">
                    <img 
                      src="/wilp-hero.png" 
                      alt="Work Integrated Learning Program at Edumentora" 
                      className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="w-full space-y-6">
                    <div className="inline-block px-4 py-1.5 bg-red-50 text-[#da251d] font-bold tracking-widest uppercase rounded-full mb-2 text-sm border border-red-100">
                      WILP Overview
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#172A53] leading-tight">
                      Flexible Education System
                    </h2>
                    <h3 className="text-xl md:text-2xl font-semibold text-[#da251d]">
                      Pursue Higher Education Without Leaving Your Job
                    </h3>
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                      Work Integrated Learning Program (WILP) allows individuals to gain academic qualifications while applying their knowledge in real-world work environments. At Edumentora, we specialize in academic credit transfer programs and support students in completing their education through WILP, tailored for professionals who need a recognized degree for career growth without disrupting their work schedules.
                    </p>
                    <button className="mt-4 bg-[#da251d] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 inline-flex items-center text-lg">
                      Know More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Why Choose WILP Cards */}
              <div className="px-4 md:px-12 mb-24 text-left">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#172A53]">Why Choose WILP?</h2>
                  <p className="text-gray-500 mt-2 text-lg">Achieve your professional goals with the smart way to learn</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
                    <div className="w-14 h-14 bg-red-50 text-[#da251d] rounded-xl flex items-center justify-center font-black text-2xl mb-6 shadow-sm border border-red-100 group-hover:bg-[#da251d] group-hover:text-white transition-colors duration-300">1</div>
                    <h3 className="text-xl font-bold text-[#172A53] mb-3">Flexible & Work-Friendly</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Study without quitting your job through online, weekend, and evening classes. Complete your education faster.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
                    <div className="w-14 h-14 bg-red-50 text-[#da251d] rounded-xl flex items-center justify-center font-black text-2xl mb-6 shadow-sm border border-red-100 group-hover:bg-[#da251d] group-hover:text-white transition-colors duration-300">2</div>
                    <h3 className="text-xl font-bold text-[#172A53] mb-3">Industry-Focused Curriculum</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Courses are designed for real-world applications. Gain practical, job-ready skills.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
                    <div className="w-14 h-14 bg-red-50 text-[#da251d] rounded-xl flex items-center justify-center font-black text-2xl mb-6 shadow-sm border border-red-100 group-hover:bg-[#da251d] group-hover:text-white transition-colors duration-300">3</div>
                    <h3 className="text-xl font-bold text-[#172A53] mb-3">Recognized Degrees</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Convert previous academic credits and earn a university-recognized degree, valid for job promotions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Programs and Eligibility Section */}
            <div className="bg-white py-20 px-4 md:px-12 flex-grow">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#172A53]">Popular Courses</h2>
                <p className="text-gray-500 mt-2 text-lg">Specializations tailored for your career growth</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {/* Engineering & Tech */}
                <div className="bg-gray-50 p-8 rounded-3xl shadow-md border border-gray-200 hover:border-[#172A53] transition-colors duration-300 group">
                  <h3 className="text-2xl font-bold text-[#172A53] mb-6 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-[#172A53] text-white flex items-center justify-center mr-4 text-base group-hover:scale-110 transition-transform">⚙️</span>
                    Tech & Engineering
                  </h3>
                  <ul className="space-y-4 text-gray-700 text-lg">
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>B.Tech/M.Tech</strong></span></li>
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>MCA, Cloud, AI</strong></span></li>
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>Cybersecurity</strong></span></li>
                  </ul>
                </div>

                {/* Management */}
                <div className="bg-gray-50 p-8 rounded-3xl shadow-md border border-gray-200 hover:border-[#da251d] transition-colors duration-300 group">
                  <h3 className="text-2xl font-bold text-[#172A53] mb-6 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-[#da251d] text-white flex items-center justify-center mr-4 text-base group-hover:scale-110 transition-transform">💼</span>
                    Management
                  </h3>
                  <ul className="space-y-4 text-gray-700 text-lg">
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>MBA / Exec MBA</strong></span></li>
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>Digital Marketing</strong></span></li>
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>Healthcare / Finance</strong></span></li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Who Can Apply? */}
                <div className="bg-[#172A53] text-white p-10 rounded-3xl shadow-xl space-y-6">
                  <h3 className="text-3xl font-bold">Who Can Apply for WILP?</h3>
                  <ul className="space-y-4 text-gray-200 text-lg">
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span>Working professionals and career switchers.</span></li>
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span>Entrepreneurs and business owners.</span></li>
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span>Students completing unfinished degrees.</span></li>
                  </ul>
                </div>

                {/* Key Advantages */}
                <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-300 space-y-6 hover:border-black transition-colors duration-300">
                  <h3 className="text-3xl font-bold text-[#172A53]">Key Advantages</h3>
                  <ul className="space-y-4 text-gray-700 text-lg">
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>Study While Working</strong> – Flexible online/weekend options.</span></li>
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>Industry-Focused</strong> – Curriculum for real-world skills.</span></li>
                    <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>Faster Growth</strong> – University-recognized for promotions.</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#172A53]">
              Start Your Journey with Edumentora
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Fill out the form below and our experts will get back to you shortly.
            </p>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:border-[#da251d] focus:ring-1 focus:ring-[#da251d] transition-all bg-gray-50 text-gray-800 placeholder-gray-400" 
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:border-[#da251d] focus:ring-1 focus:ring-[#da251d] transition-all bg-gray-50 text-gray-800 placeholder-gray-400" 
                  />
                </div>
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone number" 
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:border-[#da251d] focus:ring-1 focus:ring-[#da251d] transition-all bg-gray-50 text-gray-800 placeholder-gray-400" 
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message" 
                  rows={4} 
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:border-[#da251d] focus:ring-1 focus:ring-[#da251d] transition-all bg-gray-50 resize-none text-gray-800 placeholder-gray-400"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#da251d] hover:bg-red-700 text-white font-bold text-lg py-4 px-8 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 tracking-wide mt-2"
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
