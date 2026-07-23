import React from 'react';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-[#172A53] py-20 lg:py-32 relative overflow-hidden">
        {/* Subtle background overlay */}
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('/about-bg.png')" }}></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6 text-white text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Past Efforts into Future Success
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl mx-auto md:mx-0">
              Edumentora makes restarting your education easy by transferring past credits to accredited universities, saving you time and money.
            </p>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 relative flex justify-center">
             <div className="absolute inset-0 bg-gradient-to-r from-[#da251d] to-orange-500 rounded-full blur-3xl opacity-30 transform translate-x-10 translate-y-10"></div>
             {/* We use about-us-hero.png as the main visual. The rounded-2xl handles it gracefully if it's a solid photo, or it will just be a transparent PNG. */}
             <img src="/about-us-hero.png" alt="About Edumentora" className="relative z-10 w-full max-w-md drop-shadow-2xl rounded-2xl transform hover:scale-105 transition-transform duration-700" />
          </div>

        </div>
      </div>

      <AboutSection />

      {/* Overview Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify md:text-center font-medium">
            Edumentora is an innovative education service provider that specializes in academic credit transfer solutions, helping students across India restart and complete their discontinued degree programs. Whether due to financial hardship, personal setbacks, academic difficulties, or institutional issues, many students pause their education, but with Edumentora, they don’t have to start over. We make it possible to transfer previously earned college or university credits to UGC-recognized institutions, allowing students to pick up where they left off. Our goal is to ensure that prior academic efforts are not wasted and that every learner gets a second chance to earn a respected qualification. At Edumentora, we’re committed to turning past progress into future success through reliable, student-focused credit transfer services.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#172A53] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            
            <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-[#172A53] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
              <div className="p-6 flex justify-between items-center bg-gray-50 group-hover:bg-[#172A53] transition-colors duration-300">
                <h3 className="font-bold text-lg text-[#172A53] group-hover:text-white transition-colors pr-4">
                  What is academic credit transfer?
                </h3>
                <span className="text-[#da251d] group-hover:text-white transform group-hover:rotate-180 transition-all duration-300 flex-shrink-0">
                  ▼
                </span>
              </div>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                <div className="overflow-hidden">
                  <p className="p-6 text-gray-700 bg-white border-t border-gray-100 leading-relaxed text-justify">
                    Academic credit transfer allows students to transfer previously earned credits from one institution to another, enabling them to continue their education without starting over.
                  </p>
                </div>
              </div>
            </div>

            <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-[#172A53] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
              <div className="p-6 flex justify-between items-center bg-gray-50 group-hover:bg-[#172A53] transition-colors duration-300">
                <h3 className="font-bold text-lg text-[#172A53] group-hover:text-white transition-colors pr-4">
                  Who can apply for a credit transfer?
                </h3>
                <span className="text-[#da251d] group-hover:text-white transform group-hover:rotate-180 transition-all duration-300 flex-shrink-0">
                  ▼
                </span>
              </div>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                <div className="overflow-hidden">
                  <p className="p-6 text-gray-700 bg-white border-t border-gray-100 leading-relaxed text-justify">
                    Students who have discontinued their education or faced academic setbacks can apply for a credit transfer to resume their studies.
                  </p>
                </div>
              </div>
            </div>

            <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-[#172A53] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
              <div className="p-6 flex justify-between items-center bg-gray-50 group-hover:bg-[#172A53] transition-colors duration-300">
                <h3 className="font-bold text-lg text-[#172A53] group-hover:text-white transition-colors pr-4">
                  Which universities does Edumentora partner with?
                </h3>
                <span className="text-[#da251d] group-hover:text-white transform group-hover:rotate-180 transition-all duration-300 flex-shrink-0">
                  ▼
                </span>
              </div>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                <div className="overflow-hidden">
                  <p className="p-6 text-gray-700 bg-white border-t border-gray-100 leading-relaxed text-justify">
                    We have partnered with Glocal University and IEC University to provide recognized and accredited degrees.
                  </p>
                </div>
              </div>
            </div>

            <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-[#172A53] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
              <div className="p-6 flex justify-between items-center bg-gray-50 group-hover:bg-[#172A53] transition-colors duration-300">
                <h3 className="font-bold text-lg text-[#172A53] group-hover:text-white transition-colors pr-4">
                  How does the credit transfer process work?
                </h3>
                <span className="text-[#da251d] group-hover:text-white transform group-hover:rotate-180 transition-all duration-300 flex-shrink-0">
                  ▼
                </span>
              </div>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                <div className="overflow-hidden">
                  <p className="p-6 text-gray-700 bg-white border-t border-gray-100 leading-relaxed text-justify">
                    Our team evaluates your existing credits, matches them with a suitable university, and facilitates a smooth transfer process.
                  </p>
                </div>
              </div>
            </div>

            <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-[#172A53] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
              <div className="p-6 flex justify-between items-center bg-gray-50 group-hover:bg-[#172A53] transition-colors duration-300">
                <h3 className="font-bold text-lg text-[#172A53] group-hover:text-white transition-colors pr-4">
                  Will my transferred credits be recognized by the new university?
                </h3>
                <span className="text-[#da251d] group-hover:text-white transform group-hover:rotate-180 transition-all duration-300 flex-shrink-0">
                  ▼
                </span>
              </div>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                <div className="overflow-hidden">
                  <p className="p-6 text-gray-700 bg-white border-t border-gray-100 leading-relaxed text-justify">
                    Yes, we work with accredited universities that recognize and accept transferred credits.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* TIMS Partnership Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          
          {/* Image Space */}
          <div className="md:w-1/2 w-full flex justify-center items-center">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden p-8 bg-white shadow-lg border border-gray-100 group">
               <img src="/tims_logo.png" alt="Tirur Institute of Management Studies" className="relative z-0 w-full h-auto object-contain transform hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#172A53] leading-tight">
              Tirur Institute of Management Studies (TIMS)
            </h2>
            <div className="w-20 h-1.5 bg-[#da251d] rounded-full"></div>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mt-6">
              EduMentora proudly partners with Tirur Institute of Management Studies (TIMS), a leading institution with 16 years of expertise in distance education, attestation, and credit transfer services. With branches in Tirur and Edappal, TIMS offers diverse programs, including SSLC, Plus Two, Online Degrees, Postgraduate Courses, BTech/MTech, and Diplomas, ensuring flexible learning opportunities for students.
            </p>
          </div>
          
        </div>
      </div>

      {/* Best Credit Transfer Institute Section */}
      <div className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
          <h2 className="text-3xl md:text-4xl font-bold text-[#172A53] text-center mb-10">
            The Best Credit Transfer Institute
          </h2>
          <p>
            When students think about shifting to another college or university, one of the biggest worries is whether their earlier studies will still count. Nobody wants to repeat the same subjects or lose valuable years. This is where choosing the Best Credit Transfer Institute makes all the difference.
          </p>
          <p>
            The Best Credit Transfer Institute gives students a chance to carry their credits from one institution to another without starting the degree all over again. By submitting mark sheets, subject details, and the syllabus of the courses already completed, students can have their past work evaluated. Once the credits are approved, they can continue their studies directly from the right semester.
          </p>
          <p>
            For students who want to move forward without wasting time or money, the Best Credit Transfer Institute provides the right pathway. It makes sure that the effort already put in is not ignored, and it allows students to complete their education in a smooth and stress-free manner.
          </p>
          <p>
            Many learners face unexpected changes in life, but with the help of the Best Credit Transfer Institute, their education remains on track. It values hard work, supports growth, and opens doors to better opportunities.
          </p>
        </div>
      </div>

      <LocationsSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
