import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function BTechCreditTransferPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Header />
      {/* Premium Hero Section */}
      <div className="w-full bg-[#172A53] pt-16 pb-48 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('/about-bg.png')" }}></div>
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
            {/* FAQ Item 1 */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[rgb(49,45,69)] flex items-start m-0 pr-4">
                  <span className="text-[#da251d] mr-3 font-black">Q.</span>
                  How long does the credit transfer process take?
                </h3>
                <span className="text-gray-400 text-sm transform group-hover:rotate-180 transition-transform duration-300 flex-shrink-0">
                  ▼
                </span>
              </div>
              
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out">
                <div className="overflow-hidden">
                  <div className="flex items-start pt-4 mt-4 border-t border-gray-100">
                    <span className="text-gray-400 mr-3 font-bold">A.</span>
                    <p className="text-[rgb(49,45,69)] text-lg leading-relaxed">
                      The process usually takes a few weeks, depending on the university’s approval and document verification. Edumentora ensures a fast and smooth process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[rgb(49,45,69)] flex items-start m-0 pr-4">
                  <span className="text-[#da251d] mr-3 font-black">Q.</span>
                  Is my B.Tech degree valid after credit transfer?
                </h3>
                <span className="text-gray-400 text-sm transform group-hover:rotate-180 transition-transform duration-300 flex-shrink-0">
                  ▼
                </span>
              </div>
              
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out">
                <div className="overflow-hidden">
                  <div className="flex items-start pt-4 mt-4 border-t border-gray-100">
                    <span className="text-gray-400 mr-3 font-bold">A.</span>
                    <p className="text-[rgb(49,45,69)] text-lg leading-relaxed">
                      Yes! You will receive a UGC-approved B.Tech degree, which is valid for all jobs, government exams, and higher studies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[rgb(49,45,69)] flex items-start m-0 pr-4">
                  <span className="text-[#da251d] mr-3 font-black">Q.</span>
                  Can I transfer credits from any university?
                </h3>
                <span className="text-gray-400 text-sm transform group-hover:rotate-180 transition-transform duration-300 flex-shrink-0">
                  ▼
                </span>
              </div>
              
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out">
                <div className="overflow-hidden">
                  <div className="flex items-start pt-4 mt-4 border-t border-gray-100">
                    <span className="text-gray-400 mr-3 font-bold">A.</span>
                    <p className="text-[rgb(49,45,69)] text-lg leading-relaxed">
                      Your previous university must be UGC-approved for credit transfer eligibility. Contact us to check your university’s approval status.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[rgb(49,45,69)] flex items-start m-0 pr-4">
                  <span className="text-[#da251d] mr-3 font-black">Q.</span>
                  What documents are required for credit transfer?
                </h3>
                <span className="text-gray-400 text-sm transform group-hover:rotate-180 transition-transform duration-300 flex-shrink-0">
                  ▼
                </span>
              </div>
              
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out">
                <div className="overflow-hidden">
                  <div className="flex items-start pt-4 mt-4 border-t border-gray-100">
                    <span className="text-gray-400 mr-3 font-bold">A.</span>
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
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[rgb(49,45,69)] flex items-start m-0 pr-4">
                  <span className="text-[#da251d] mr-3 font-black">Q.</span>
                  Do I need to take an entrance exam for credit transfer?
                </h3>
                <span className="text-gray-400 text-sm transform group-hover:rotate-180 transition-transform duration-300 flex-shrink-0">
                  ▼
                </span>
              </div>
              
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out">
                <div className="overflow-hidden">
                  <div className="flex items-start pt-4 mt-4 border-t border-gray-100">
                    <span className="text-gray-400 mr-3 font-bold">A.</span>
                    <p className="text-[rgb(49,45,69)] text-lg leading-relaxed">
                      No! Credit transfer admissions do not require entrance exams. You only need to provide your academic records for evaluation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[rgb(49,45,69)] flex items-start m-0 pr-4">
                  <span className="text-[#da251d] mr-3 font-black">Q.</span>
                  Can I write the credit transfer exam online?
                </h3>
                <span className="text-gray-400 text-sm transform group-hover:rotate-180 transition-transform duration-300 flex-shrink-0">
                  ▼
                </span>
              </div>
              
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out">
                <div className="overflow-hidden">
                  <div className="flex items-start pt-4 mt-4 border-t border-gray-100">
                    <span className="text-gray-400 mr-3 font-bold">A.</span>
                    <p className="text-[rgb(49,45,69)] text-lg leading-relaxed">
                      No! A UGC-approved credit transfer exam can never be conducted online.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Note Paragraph */}
          <div className="mt-10 p-5 bg-red-50 rounded-2xl border border-red-100 text-center shadow-sm">
            <p className="text-[rgb(49,45,69)] text-sm md:text-base italic font-medium leading-relaxed">
              *To complete your B.Tech degree through credit transfer, you must visit the university and write the failed subjects directly in offline mode. Universities do not allow online exams for credit transfer programs, as per UGC guidelines.
            </p>
          </div>
        </div>
      </div>

      {/* Sixth Section: Contact Form */}
      <div className="bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(49,45,69)]">
              Start Your Journey with Edumentora
            </h2>
            <p className="text-[rgb(49,45,69)] mt-4 text-lg">
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
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:border-[#da251d] focus:ring-1 focus:ring-[#da251d] transition-all bg-gray-50 text-[rgb(49,45,69)] placeholder-gray-400" 
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:border-[#da251d] focus:ring-1 focus:ring-[#da251d] transition-all bg-gray-50 text-[rgb(49,45,69)] placeholder-gray-400" 
                  />
                </div>
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone number" 
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:border-[#da251d] focus:ring-1 focus:ring-[#da251d] transition-all bg-gray-50 text-[rgb(49,45,69)] placeholder-gray-400" 
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message" 
                  rows={4} 
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:border-[#da251d] focus:ring-1 focus:ring-[#da251d] transition-all bg-gray-50 resize-none text-[rgb(49,45,69)] placeholder-gray-400"
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

      {/* Seventh Section: Final Summary */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
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
      </div>

      <LocationsSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
