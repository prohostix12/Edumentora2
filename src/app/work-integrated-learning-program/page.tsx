import React from 'react';
import Header from '@/components/Header';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Page() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Header />
      
      {/* Premium Hero Section */}
      <div className="w-full bg-[#172A53] pt-16 pb-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('/about-bg.png')" }}></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-block px-5 py-2 bg-white/10 text-red-200 font-bold tracking-wider uppercase rounded-full mb-6 text-sm border border-white/20 backdrop-blur-md">
            Professional Growth
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Work Integrated Learning Program (WILP)
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Edumentora’s WILP credit transfer helps working professionals continue their education without losing progress. Carry your credits forward and keep growing on the job and in the classroom.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 pb-20">
        {/* Elevated Intro Card */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-20 -mt-24 mb-20">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1 space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify font-medium">
                Work Integrated Learning Program (WILP) is a flexible education system designed for working professionals who want to pursue higher education without leaving their jobs. It allows individuals to gain academic qualifications while applying their knowledge in real-world work environments.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify font-medium">
                At Edumentora, we specialize in academic credit transfer programs and support students in completing their education through WILP. Our programs are tailored for professionals who need a recognized degree for career growth without disrupting their work schedules.
              </p>
              <button className="bg-[#da251d] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-lg w-max mt-4">
                Know More
              </button>
            </div>
            <div className="relative h-[300px] md:h-[400px] w-full md:w-[400px] shrink-0 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img 
                src="/wilp-hero.png" 
                alt="Work Integrated Learning Program at Edumentora" 
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>
        </div>

        {/* Why Choose WILP Cards */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#172A53]">Why Choose WILP Through Edumentora?</h2>
            <p className="text-gray-500 mt-4 text-lg">Achieve your professional goals with the smart way to learn</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Work While Studying", desc: "No need to quit your job." },
              { title: "Flexible Learning Modes", desc: "Online, weekend, and evening classes." },
              { title: "Industry-Focused Curriculum", desc: "Courses designed for real-world applications." },
              { title: "Recognized Degrees & Certifications", desc: "Valid for job promotions and career transitions." },
              { title: "Cost-Effective & Time-Saving", desc: "Complete your education faster and affordably." },
              { title: "University Credit Transfers", desc: "Convert previous academic credits and complete your degree." },
              { title: "Career Growth Opportunities", desc: "Gain higher qualifications to boost your professional success." }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2 border border-gray-100 group">
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-[#da251d] transition-colors duration-300 text-2xl font-bold text-[#da251d] group-hover:text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-[#172A53] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2-Column Section: Who Can Apply & Key Advantages */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Column 1: Who Can Apply */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-200 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-[#172A53]">Who Can Apply for WILP?</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              WILP through Edumentora is for: Working professionals, career switchers, entrepreneurs, employees, and students completing degrees.
            </p>
            <h3 className="text-xl font-semibold text-[#da251d] mb-6 border-b border-gray-200 pb-4">Popular Courses</h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li><strong className="text-[#172A53]">Engineering & Tech:</strong> B.Tech/M.Tech in Mechanical, Civil, CSE, ECE, IT, AI, Cybersecurity</li>
              <li><strong className="text-[#172A53]">Management:</strong> MBA, Executive MBA, Business Analytics, Digital Marketing</li>
              <li><strong className="text-[#172A53]">Computer Science:</strong> MCA, Software Engineering, Cloud, AI, Blockchain</li>
              <li><strong className="text-[#172A53]">Healthcare:</strong> Biotechnology, Healthcare Management</li>
              <li><strong className="text-[#172A53]">Finance:</strong> Financial Management, Banking</li>
              <li><strong className="text-[#172A53]">Media:</strong> Digital Marketing, Mass Communication</li>
              <li><strong className="text-[#172A53]">Law:</strong> Corporate, Cyber, IP Law</li>
              <li><strong className="text-[#172A53]">Retail:</strong> Retail Management, E-Commerce</li>
              <li><strong className="text-[#172A53]">Education:</strong> Educational Leadership</li>
              <li><strong className="text-[#172A53]">Hospitality:</strong> Hotel Management, Tourism</li>
            </ul>
          </div>

          {/* Column 2: Key Advantages */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-200 shadow-xl flex flex-col">
            <h2 className="text-3xl font-bold mb-8 text-[#172A53]">Key Advantages of WILP</h2>
            <ul className="space-y-5 text-lg text-gray-700 flex-grow">
              <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong className="text-[#172A53]">Study Without Leaving Your Job</strong> – Work & learn simultaneously.</span></li>
              <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong className="text-[#172A53]">Flexible Learning Options</strong> – Online, weekend & evening classes.</span></li>
              <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong className="text-[#172A53]">Industry-Focused Curriculum</strong> – Gain practical, job-ready skills.</span></li>
              <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong className="text-[#172A53]">University-Recognized Degree</strong> – Accepted by top employers & government.</span></li>
              <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong className="text-[#172A53]">Faster Career Growth</strong> – Better promotions, salary hikes & job security.</span></li>
              <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong className="text-[#172A53]">Cost-Effective & Time-Saving</strong> – No relocation, lower fees, and quick completion.</span></li>
              <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong className="text-[#172A53]">Global Career Opportunities</strong> – Valid for multinational & international jobs.</span></li>
              <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong className="text-[#172A53]">Easy Admission & Credit Transfer</strong> – Seamless enrollment & degree continuation.</span></li>
            </ul>
            <p className="text-xl text-[#da251d] font-bold text-center mt-10 border-t border-gray-200 pt-8">
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
