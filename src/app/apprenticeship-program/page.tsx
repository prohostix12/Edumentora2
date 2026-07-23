import React from 'react';
import Header from '@/components/Header';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function ApprenticeshipLearningProgram() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Header />
      
      {/* Premium Hero Section */}
      <div className="w-full bg-[#172A53] pt-16 pb-48 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('/about-bg.png')" }}></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-block px-5 py-2 bg-white/10 text-red-200 font-bold tracking-wider uppercase rounded-full mb-6 text-sm border border-white/20 backdrop-blur-md">
            Career Advancement
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto">
            Apprenticeship Program at Edumentora
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Edumentora’s apprenticeship credit transfer lets you carry your earned experience to new opportunities. Stay on track, keep learning, and grow without interruption.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 pb-20">
        {/* Elevated Intro Card (EALP Overview) */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 -mt-32 mb-20">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center">
            <div className="relative w-full lg:w-5/12 h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl group">
              <img 
                src="/apprenticeship-hero.png" 
                alt="Apprenticeship program at Edumentora" 
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="lg:w-7/12 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-red-50 text-[#da251d] font-bold tracking-widest uppercase rounded-full mb-2 text-sm border border-red-100">
                EALP Overview
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#172A53] leading-tight">
                Employee Apprenticeship-Learning Program
              </h2>
              <h3 className="text-xl font-semibold text-[#da251d]">
                Convert Work Experience into Academic Credits
              </h3>
              <p className="text-[rgb(49,45,69)] text-lg leading-relaxed text-justify">
                The Employee Apprenticeship-Based Learning Program (EALP) is a unique opportunity for working professionals to complete their degree without restarting from the beginning. This program recognizes your work experience and converts it into academic credits, allowing you to earn a UG or PG degree in a shorter time while continuing your job.
              </p>
              <button className="mt-4 bg-[#da251d] hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-lg inline-flex items-center">
                Know More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* How it Works Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#172A53]">How it Works</h2>
            <p className="text-gray-500 mt-4 text-lg">A simple three-step process to accelerate your degree</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-red-50 text-[#da251d] rounded-2xl flex items-center justify-center font-black text-3xl mb-8 shadow-sm border border-red-100 group-hover:bg-[#da251d] group-hover:text-white transition-colors duration-300">1</div>
              <h3 className="text-2xl font-bold text-[#172A53] mb-4">Work Experience as Credits</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                If you have 2+ years of work experience, it will be evaluated and counted as part of your degree. You don’t need to study subjects where you already have practical knowledge.
              </p>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-red-50 text-[#da251d] rounded-2xl flex items-center justify-center font-black text-3xl mb-8 shadow-sm border border-red-100 group-hover:bg-[#da251d] group-hover:text-white transition-colors duration-300">2</div>
              <h3 className="text-2xl font-bold text-[#172A53] mb-4">Reduced Study Duration</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Instead of the traditional 3–4-year degree, your work experience helps you complete the course faster. The exact duration depends on your experience and the course requirements.
              </p>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-red-50 text-[#da251d] rounded-2xl flex items-center justify-center font-black text-3xl mb-8 shadow-sm border border-red-100 group-hover:bg-[#da251d] group-hover:text-white transition-colors duration-300">3</div>
              <h3 className="text-2xl font-bold text-[#172A53] mb-4">Flexible Learning Options</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Study through online classes, weekend sessions, or a hybrid model while continuing your job. Course content is industry-relevant, ensuring practical learning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Programs and Eligibility Section (New Cards Layout) */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#172A53]">Available Degree Programs</h2>
            <p className="text-gray-500 mt-4 text-lg">Choose from a wide range of UGC-approved degrees</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
            {/* UG Programs */}
            <div className="bg-gray-50 p-8 md:p-10 rounded-3xl shadow-md border border-gray-200 hover:border-[#172A53] transition-colors duration-300 group">
              <h3 className="text-2xl font-bold text-[#172A53] mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-[#172A53] text-white flex items-center justify-center mr-4 text-xl group-hover:scale-110 transition-transform">🎓</span>
                Undergraduate Programs
              </h3>
              <ul className="space-y-4 text-lg text-[rgb(49,45,69)]">
                <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>BBA</strong> – Ideal for business professionals</span></li>
                <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>B.Com</strong> – Perfect for accountants and finance experts</span></li>
                <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>BCA</strong> – Best for IT professionals</span></li>
                <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>B.Sc IT</strong> – For software and tech experts</span></li>
                <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>B.Tech</strong> – Suitable for engineering professionals</span></li>
                <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>BA</strong> – Humanities and social sciences</span></li>
              </ul>
            </div>

            {/* PG Programs */}
            <div className="bg-gray-50 p-8 md:p-10 rounded-3xl shadow-md border border-gray-200 hover:border-[#da251d] transition-colors duration-300 group">
              <h3 className="text-2xl font-bold text-[#172A53] mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-[#da251d] text-white flex items-center justify-center mr-4 text-xl group-hover:scale-110 transition-transform">🎓</span>
                Postgraduate Programs
              </h3>
              <ul className="space-y-4 text-lg text-[rgb(49,45,69)]">
                <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>MBA</strong> – For career growth in management</span></li>
                <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>M.Com</strong> – Advanced knowledge for commerce/finance</span></li>
                <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>MCA</strong> – Higher studies in IT and applications</span></li>
                <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>M.Tech</strong> – For engineers seeking specialization</span></li>
              </ul>
            </div>
          </div>

          {/* Who Can Apply & Why Choose Row */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-12">
              {/* Who Can Apply? */}
              <div className="bg-[#172A53] text-white p-8 md:p-10 rounded-3xl shadow-xl space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">Who Can Apply?</h3>
                <ul className="space-y-4 text-lg text-gray-200">
                  <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span>Working professionals who discontinued their studies and want to complete their degree.</span></li>
                  <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span>Employees with 2+ years of industry experience who want an academic qualification.</span></li>
                  <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span>People seeking career growth and better job opportunities.</span></li>
                </ul>
              </div>

              {/* Why Choose EALP? */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-300 space-y-6 hover:border-black transition-colors duration-300">
                <h3 className="text-2xl md:text-3xl font-bold text-[#172A53]">Why Choose EALP?</h3>
                <ul className="space-y-4 text-lg text-[rgb(49,45,69)]">
                  <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>Complete Your Degree Faster</strong> – Work experience reduces study time.</span></li>
                  <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>Work & Study Together</strong> – No need to quit your job.</span></li>
                  <li className="flex items-start"><span className="text-[#da251d] mr-3 font-bold text-xl">➤</span> <span><strong>Recognized Degree</strong> – Accepted for jobs, promotions, and further studies.</span></li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100 group">
              <img 
                src="/apprenticeship-professionals.png" 
                alt="Working professionals studying" 
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
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
