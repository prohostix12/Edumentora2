import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function BTechCreditTransferPage() {
  return (
    <main className="min-h-screen bg-white pt-24 font-[Poppins]">
      <Header />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#172A53] text-center whitespace-nowrap mb-3">
          BTech Credit Transfer in Kochi
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-gray-600 text-center">
          Know more on BTech Credit Transfer in Kochi
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-12 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7 space-y-5 text-[#3b3226]">
          <p className="text-base leading-relaxed text-justify">
            BTech Credit Transfer in Kochi gives engineering students a simple way to continue their studies in a new college without wasting the years they have already completed. Many students decide to move to Kochi because the city has some of the best institutions, modern facilities, and good career opportunities. Instead of starting from the first year again, BTech Credit Transfer in Kochi helps them carry forward the credits they have already earned.
          </p>
          <p className="text-base leading-relaxed text-justify">
            The process is very simple. Students only need to provide their previous mark sheets, subject details, and syllabus copies. The new college in Kochi will check these papers and see which subjects can be matched. Once the credits are accepted, the student can directly join the next semester. So, no need to repeat the same subjects again.
          </p>
          <p className="text-base leading-relaxed text-justify">
            Choosing BTech Credit Transfer in Kochi can save both time and money. It also makes it possible to move to a better college without losing the progress you have already made. For students who want a fresh start in Kochi but do not want to waste years of study, this option is very useful. With BTech Credit Transfer in Kochi, you can smoothly continue your education and complete your degree on time.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="relative w-full h-full min-h-[300px] rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <Image
              src="/btech_transfer_kochi.png"
              alt="Credit Transfer Student"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-300 w-full">
          <h3 className="text-xl font-bold text-[#172A53] mb-6 text-center">Enquire Now</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-gray-50 text-sm text-[#172A53] placeholder:text-[#172A53]"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-gray-50 text-sm text-[#172A53] placeholder:text-[#172A53]"
              />
              <input
                type="tel"
                placeholder="Phone number"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-gray-50 text-sm text-[#172A53] placeholder:text-[#172A53]"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <textarea
                placeholder="Message"
                rows={4}
                required
                className="w-full h-full min-h-[140px] px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-gray-50 text-sm text-[#172A53] placeholder:text-[#172A53] resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2 mt-2">
              <button
                type="submit"
                className="w-full md:w-auto md:px-12 mx-auto block bg-[#da251d] hover:bg-red-700 text-white font-semibold text-sm py-3 px-6 rounded-lg transition-all shadow-sm hover:shadow-md uppercase tracking-wide"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>


      <LocationsSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
