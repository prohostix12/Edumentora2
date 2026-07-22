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
      
      {/* Hero Section Top: 2 Columns */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative w-full h-[400px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <Image 
            src="/student-portrait.png" 
            alt="Engineering Career" 
            fill 
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#172A53] leading-tight">
            Take the Next Step in your Engineering Career
          </h1>
          
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            Don’t let an incomplete B.Tech stop you from achieving your dreams. With Edumentora’s B.Tech Credit Transfer Program, you can resume your studies, complete your degree, and build a successful future.
          </p>
          
          <div className="pt-2 pb-2">
            <button className="bg-[#da251d] hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-lg">
              Know More
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section Bottom: Full Width Text */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 space-y-4">
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          At Edumentora, our B.Tech Credit Transfer Program is designed to help engineering students who have discontinued their studies due to academic, personal, or financial challenges. This program allows you to transfer your previously earned credits to our partner universities and continue your B.Tech degree without starting over.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          We collaborate with reputed institutions like Glocal University, Radha Govind University, and Arni University, ensuring that your academic efforts are recognized and credited toward your degree. Our expert team evaluates your existing credits and facilitates a smooth transfer process, helping you save time and reduce financial burdens.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          With Edumentora’s B.Tech Credit Transfer Program, you can complete your degree efficiently and confidently, setting the foundation for a successful engineering career.
        </p>
      </div>

      {/* Second Section: Complete without starting over */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#172A53] leading-tight">
              Complete your B.Tech Without Starting Over!
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Edumentora’s B.Tech Credit Transfer Program offers a second chance to students who had to discontinue their engineering studies due to academic, financial, or personal challenges. Instead of starting from the first year, eligible students who have completed at least 50% of their B.Tech coursework can transfer their existing credits to a UGC-approved and AICTE-recognized university. This allows them to pick up their studies from where they left off and complete their degree faster. The program is completely legal and ensures the final degree is valid for both government and private sector jobs, as well as further education. It’s a smart, efficient way to get back on track and achieve your engineering goals without losing the progress you’ve already made.
            </p>
          </div>
          <div className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <Image 
              src="/about-fg.png" 
              alt="Credit Transfer Benefits" 
              fill 
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Third Section: Eligibility and Universities */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Eligibility Box */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-[#172A53]">
            Eligibility Criteria for B.Tech Credit Transfer
          </h3>
          <p className="text-gray-700 text-lg mb-4">
            To qualify for B.Tech Credit Transfer, you must meet these conditions:
          </p>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="text-[#da251d] mr-3 font-bold">➤</span>
              <span>Completed at least 50% of your B.Tech degree (2+ years).</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#da251d] mr-3 font-bold">➤</span>
              <span>Your previous university must be UGC-approved.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#da251d] mr-3 font-bold">➤</span>
              <span>You must provide official mark sheets and academic transcripts.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#da251d] mr-3 font-bold">➤</span>
              <span>You must complete failed subjects in offline mode at the university (no online exams allowed).</span>
            </li>
          </ul>
          <p className="text-gray-700 text-lg mt-6 pt-4 border-t border-gray-100 font-medium">
            If you meet these conditions, you can resume your studies and complete your degree faster.
          </p>
        </div>

        {/* Top Universities Box */}
        <div className="bg-[#172A53] text-white p-8 md:p-10 rounded-3xl shadow-xl space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold">
            Top Universities Accepting B.Tech Credit Transfers
          </h3>
          <p className="text-gray-200 text-lg mb-4 leading-relaxed">
            Edumentora collaborates with top UGC-approved universities in India that allow B.Tech credit transfers. These universities provide valid, degrees:
          </p>
          <ul className="space-y-4 text-white text-lg font-medium">
            <li className="flex items-center">
              <span className="text-[#da251d] mr-3 text-xl font-bold">➤</span>
              <span>Glocal University</span>
            </li>
            <li className="flex items-center">
              <span className="text-[#da251d] mr-3 text-xl font-bold">➤</span>
              <span>Radha Govind University</span>
            </li>
            <li className="flex items-center">
              <span className="text-[#da251d] mr-3 text-xl font-bold">➤</span>
              <span>IEC University</span>
            </li>
            <li className="flex items-center">
              <span className="text-[#da251d] mr-3 text-xl font-bold">➤</span>
              <span>Arni University</span>
            </li>
          </ul>
          <p className="text-gray-200 text-lg mt-6 pt-4 border-t border-gray-600 leading-relaxed font-medium">
            These universities issue recognized B.Tech degrees, making you eligible for private and government jobs, as well as higher studies.
          </p>
        </div>
      </div>

      {/* Fourth Section: Benefits & Specializations */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Benefits Box */}
          <div className="bg-[#172A53] text-white p-8 md:p-10 rounded-3xl shadow-xl space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Benefits of B.Tech Credit Transfer with Edumentora
            </h3>
            <ul className="space-y-4 text-white text-lg">
              <li className="flex items-start">
                <span className="text-[#da251d] mr-3 text-xl font-bold">➤</span>
                <span><strong>No Need to Start Over</strong> – Continue from your last completed semester.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#da251d] mr-3 text-xl font-bold">➤</span>
                <span><strong>Save Time & Money</strong> – No need to repeat previous subjects.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#da251d] mr-3 text-xl font-bold">➤</span>
                <span><strong>100% Legal & Approved</strong> – Get a UGC recognized degree.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#da251d] mr-3 text-xl font-bold">➤</span>
                <span><strong>Valid for Government & Private Jobs</strong> – Eligible for all employment opportunities.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#da251d] mr-3 text-xl font-bold">➤</span>
                <span><strong>Flexible Study Options</strong> – Choose the best university that fits your needs.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#da251d] mr-3 text-xl font-bold">➤</span>
                <span><strong>Expert Guidance</strong> – Our team manages everything from documentation to admission.</span>
              </li>
            </ul>
          </div>

          {/* Specializations Box */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#172A53]">
              B.Tech Specializations Available for Credit Transfer
            </h3>
            <p className="text-gray-700 text-lg">
              We offer B.Tech credit transfers in multiple engineering fields, including:
            </p>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-center">
                <span className="text-[#da251d] mr-3 font-bold">➤</span>
                <span>B.Tech in Civil Engineering</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#da251d] mr-3 font-bold">➤</span>
                <span>B.Tech in Mechanical Engineering</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#da251d] mr-3 font-bold">➤</span>
                <span>B.Tech in Computer Science & Engineering (CSE)</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#da251d] mr-3 font-bold">➤</span>
                <span>B.Tech in Electronics & Communication Engineering (ECE)</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#da251d] mr-3 font-bold">➤</span>
                <span>B.Tech in Electrical Engineering</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#da251d] mr-3 font-bold">➤</span>
                <span>B.Tech in Information Technology (IT)</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#da251d] mr-3 font-bold">➤</span>
                <span>B.Tech in Automobile Engineering</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#da251d] mr-3 font-bold">➤</span>
                <span>B.Tech in Chemical Engineering</span>
              </li>
            </ul>
            <p className="text-gray-700 text-lg mt-6 pt-4 border-t border-gray-100 font-medium">
              No matter which specialization you studied before, we will help you transfer your credits and complete your degree smoothly.
            </p>
          </div>
        </div>
      </div>

      {/* Fifth Section: FAQ */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#172A53] text-center mb-12">
            Frequently Asked Questions on B.Tech Credit Transfers
          </h2>
          
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#172A53] flex items-start m-0 pr-4">
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
                    <p className="text-gray-700 text-lg leading-relaxed">
                      The process usually takes a few weeks, depending on the university’s approval and document verification. Edumentora ensures a fast and smooth process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#172A53] flex items-start m-0 pr-4">
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
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Yes! You will receive a UGC-approved B.Tech degree, which is valid for all jobs, government exams, and higher studies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#172A53] flex items-start m-0 pr-4">
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
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Your previous university must be UGC-approved for credit transfer eligibility. Contact us to check your university’s approval status.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#172A53] flex items-start m-0 pr-4">
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
                    <div className="text-gray-700 text-lg leading-relaxed w-full">
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
                <h3 className="text-xl font-bold text-[#172A53] flex items-start m-0 pr-4">
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
                    <p className="text-gray-700 text-lg leading-relaxed">
                      No! Credit transfer admissions do not require entrance exams. You only need to provide your academic records for evaluation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#172A53] flex items-start m-0 pr-4">
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
                    <p className="text-gray-700 text-lg leading-relaxed">
                      No! A UGC-approved credit transfer exam can never be conducted online.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Note Paragraph */}
          <div className="mt-10 p-5 bg-red-50 rounded-2xl border border-red-100 text-center shadow-sm">
            <p className="text-gray-800 text-sm md:text-base italic font-medium leading-relaxed">
              *To complete your B.Tech degree through credit transfer, you must visit the university and write the failed subjects directly in offline mode. Universities do not allow online exams for credit transfer programs, as per UGC guidelines.
            </p>
          </div>
        </div>
      </div>

      {/* Sixth Section: Contact Form */}
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
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#da251d] focus:ring-1 focus:ring-[#da251d] transition-all bg-gray-50 text-gray-800 placeholder-gray-400" 
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#da251d] focus:ring-1 focus:ring-[#da251d] transition-all bg-gray-50 text-gray-800 placeholder-gray-400" 
                  />
                </div>
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone number" 
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#da251d] focus:ring-1 focus:ring-[#da251d] transition-all bg-gray-50 text-gray-800 placeholder-gray-400" 
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message" 
                  rows={4} 
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#da251d] focus:ring-1 focus:ring-[#da251d] transition-all bg-gray-50 resize-none text-gray-800 placeholder-gray-400"
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
        <div className="w-full space-y-6 text-gray-700 text-lg leading-relaxed text-justify">
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
