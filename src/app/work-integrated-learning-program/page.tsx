import React from 'react';
import Header from '@/components/Header';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Page() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Header />
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#172A53] leading-tight">
              Work Integrated Learning Program (WILP)
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
              Edumentora’s WILP credit transfer helps working professionals continue their education without losing progress. Carry your credits forward and keep growing on the job and in the classroom.
            </p>
            <button className="bg-[#da251d] hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-lg w-max mt-4">
              Know More
            </button>
          </div>
          
          {/* Right: Image */}
          <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="/wilp-hero.png" 
              alt="Work Integrated Learning Program at Edumentora" 
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed text-justify md:text-center">
            Work Integrated Learning Program (WILP) is a flexible education system designed for working professionals who want to pursue higher education without leaving their jobs. It allows individuals to gain academic qualifications while applying their knowledge in real-world work environments.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-justify md:text-center">
            At Edumentora, we specialize in academic credit transfer programs and support students in completing their education through WILP. Our programs are tailored for professionals who need a recognized degree for career growth without disrupting their work schedules.
          </p>
        </div>
      </div>

      {/* Why Choose WILP Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#172A53] text-center mb-10">
            Why Choose WILP Through Edumentora?
          </h2>
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
            <ul className="space-y-6 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-[#da251d] flex items-center justify-center font-bold mr-4 mt-0.5">1</span>
                <span><strong>Work While Studying</strong> – No need to quit your job.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-[#da251d] flex items-center justify-center font-bold mr-4 mt-0.5">2</span>
                <span><strong>Flexible Learning Modes</strong> – Online, weekend, and evening classes.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-[#da251d] flex items-center justify-center font-bold mr-4 mt-0.5">3</span>
                <span><strong>Industry-Focused Curriculum</strong> – Courses designed for real-world applications.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-[#da251d] flex items-center justify-center font-bold mr-4 mt-0.5">4</span>
                <span><strong>Recognized Degrees & Certifications</strong> – Valid for job promotions and career transitions.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-[#da251d] flex items-center justify-center font-bold mr-4 mt-0.5">5</span>
                <span><strong>Cost-Effective & Time-Saving</strong> – Complete your education faster and affordably.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-[#da251d] flex items-center justify-center font-bold mr-4 mt-0.5">6</span>
                <span><strong>University Credit Transfers</strong> – Convert previous academic credits and complete your degree.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-[#da251d] flex items-center justify-center font-bold mr-4 mt-0.5">7</span>
                <span><strong>Career Growth Opportunities</strong> – Gain higher qualifications to boost your professional success.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2-Column Section: Who Can Apply & Key Advantages */}
      <div className="bg-[#172A53] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Column 1: Who Can Apply */}
          <div className="bg-[#1f376a] p-8 md:p-12 rounded-3xl border border-[#2a4580] shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-white">Who Can Apply for WILP?</h2>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              WILP through Edumentora is for: Working professionals, career switchers, entrepreneurs, employees, and students completing degrees.
            </p>
            <h3 className="text-xl font-semibold text-[#da251d] mb-6 border-b border-[#2a4580] pb-4">Popular Courses</h3>
            <ul className="space-y-4 text-lg text-gray-200">
              <li><strong className="text-white">Engineering & Tech:</strong> B.Tech/M.Tech in Mechanical, Civil, CSE, ECE, IT, AI, Cybersecurity</li>
              <li><strong className="text-white">Management:</strong> MBA, Executive MBA, Business Analytics, Digital Marketing</li>
              <li><strong className="text-white">Computer Science:</strong> MCA, Software Engineering, Cloud, AI, Blockchain</li>
              <li><strong className="text-white">Healthcare:</strong> Biotechnology, Healthcare Management</li>
              <li><strong className="text-white">Finance:</strong> Financial Management, Banking</li>
              <li><strong className="text-white">Media:</strong> Digital Marketing, Mass Communication</li>
              <li><strong className="text-white">Law:</strong> Corporate, Cyber, IP Law</li>
              <li><strong className="text-white">Retail:</strong> Retail Management, E-Commerce</li>
              <li><strong className="text-white">Education:</strong> Educational Leadership</li>
              <li><strong className="text-white">Hospitality:</strong> Hotel Management, Tourism</li>
            </ul>
          </div>

          {/* Column 2: Key Advantages */}
          <div className="bg-[#1f376a] p-8 md:p-12 rounded-3xl border border-[#2a4580] shadow-xl flex flex-col">
            <h2 className="text-3xl font-bold mb-8 text-white">Key Advantages of WILP</h2>
            <ul className="space-y-5 text-lg text-gray-200 flex-grow">
              <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong className="text-white">Study Without Leaving Your Job</strong> – Work & learn simultaneously.</span></li>
              <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong className="text-white">Flexible Learning Options</strong> – Online, weekend & evening classes.</span></li>
              <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong className="text-white">Industry-Focused Curriculum</strong> – Gain practical, job-ready skills.</span></li>
              <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong className="text-white">University-Recognized Degree</strong> – Accepted by top employers & government.</span></li>
              <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong className="text-white">Faster Career Growth</strong> – Better promotions, salary hikes & job security.</span></li>
              <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong className="text-white">Cost-Effective & Time-Saving</strong> – No relocation, lower fees, and quick completion.</span></li>
              <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong className="text-white">Global Career Opportunities</strong> – Valid for multinational & international jobs.</span></li>
              <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong className="text-white">Easy Admission & Credit Transfer</strong> – Seamless enrollment & degree continuation.</span></li>
            </ul>
            <p className="text-xl text-[#da251d] font-bold text-center mt-10 border-t border-[#2a4580] pt-8">
              Achieve your professional goals with WILP – The Smart Way to Learn!
            </p>
          </div>
          
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-50">
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
