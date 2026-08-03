'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import PageBanner from '@/components/PageBanner';
import { submitEnquiry } from './actions';

type Contact = {
  id: string;
  department: string;
  lanphone: string;
  mob: string;
  email: string;
};

export default function ContactClient({ contacts }: { contacts: Contact[] }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const result = await submitEnquiry(formData);
    
    if (result.success) {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Something went wrong.');
    }
  };

  return (
    <main className="min-h-screen bg-[#F9F9F9] pt-24 font-[Poppins]">
      <Header />
      <PageBanner 
        badge="Our Offices" 
        title="Get In Touch" 
        subtitle="Reach out to our offices in Calicut and Kochi for expert guidance and academic credit transfer solutions. We are here to help you achieve your educational goals."
        isGradientText={true}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-24">

        {/* 2-Column Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">

          {/* Calicut Section */}
          <div className="bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_50%,_#fef6f2_100%)] rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#E8EDF7] flex flex-col h-full transform hover:-translate-y-1 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-[#172A53] mb-4 flex items-center gap-3">
              <span className="w-8 h-1.5 bg-[#da251d] rounded-full inline-block"></span>
              CALICUT
            </h2>
            <div className="text-gray-700 leading-relaxed mb-8 flex-grow text-lg">
              <p>YMCA Cross Road,</p>
              <p>Kozhikode</p>
              <p>Kerala – 673001</p>
            </div>
            {/* Google Map */}
            <div className="w-full h-72 rounded-2xl overflow-hidden shadow-inner border border-gray-100 bg-gray-50">
              <iframe
                src="https://maps.google.com/maps?q=YMCA%20Cross%20Road,%20Kozhikode,%20Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Kochi Section */}
          <div className="bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_50%,_#fef6f2_100%)] rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#E8EDF7] flex flex-col h-full transform hover:-translate-y-1 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-[#172A53] mb-4 flex items-center gap-3">
              <span className="w-8 h-1.5 bg-[#da251d] rounded-full inline-block"></span>
              KOCHI
            </h2>
            <div className="text-gray-700 leading-relaxed mb-8 flex-grow text-lg">
              <p>6th Floor, National Pearl Star building,</p>
              <p>Near Changampuzha park Metro Station, Edappally,</p>
              <p>Kochi, Ernakulam, Kerala 682024</p>
            </div>
            {/* Google Map */}
            <div className="w-full h-72 rounded-2xl overflow-hidden shadow-inner border border-gray-100 bg-gray-50">
              <iframe
                src="https://maps.google.com/maps?q=National%20Pearl%20Star%20building,%20Edappally,%20Kochi,%20Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>

      {/* Dynamic Contacts Section */}
      {contacts && contacts.length > 0 && (
        <div id="contacts-section" className="max-w-7xl mx-auto px-4 md:px-8 py-16 border-t border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#172A53] mb-4">Contacts</h2>
            <div className="w-24 h-1.5 bg-[#da251d] rounded-full mx-auto"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {contacts.map((contact) => (
              <div key={contact.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-bold text-[#172A53]">
                  {contact.department}
                </h3>
                
                <div className="space-y-2 w-full">
                  <div className="flex items-center justify-center gap-2 text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#da251d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-medium text-base">{contact.lanphone}</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#da251d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium text-base">{contact.mob}</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-gray-700 break-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#da251d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium text-base">{contact.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact Form Section */}
      <div className="bg-[#F9F9F9] py-16 lg:py-24 border-t border-[#E8EDF7]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_50%,_#fef6f2_100%)] rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#E8EDF7]">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#172A53] mb-4">Start Your Journey with Edumentora</h2>
              <div className="w-24 h-1.5 bg-[#da251d] rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg">Fill out the form below and our academic advisors will get back to you shortly.</p>
            </div>

            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-2">Thank you!</h3>
                <p>Your message has been sent successfully. We will be in touch soon.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-center mb-6">
                    {errorMessage}
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      className="peer w-full px-4 pt-7 pb-3 text-[#172A53] font-medium rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white placeholder-transparent"
                      required
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 top-3 text-xs font-semibold text-[#172A53] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#172A53] peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#172A53] pointer-events-none"
                    >
                      Enter your name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter phone number"
                      className="peer w-full px-4 pt-7 pb-3 text-[#172A53] font-medium rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white placeholder-transparent"
                      required
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-4 top-3 text-xs font-semibold text-[#172A53] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#172A53] peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#172A53] pointer-events-none"
                    >
                      Enter phone number
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    className="peer w-full px-4 pt-7 pb-3 text-[#172A53] font-medium rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white placeholder-transparent"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-3 text-xs font-semibold text-[#172A53] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#172A53] peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#172A53] pointer-events-none"
                  >
                    Enter email
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Message"
                    className="peer w-full px-4 pt-7 pb-3 text-[#172A53] font-medium rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white resize-none placeholder-transparent"
                    required
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-3 text-xs font-semibold text-[#172A53] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#172A53] peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#172A53] pointer-events-none"
                  >
                    Message
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-[#172A53] hover:bg-[#111f3d] text-white font-bold py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Director's Message Mini Section */}
      <div className="py-12 lg:py-16 bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_50%,_#fef6f2_100%)] border-t border-[#E8EDF7]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 bg-gray-50 p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-full blur-3xl -mr-10 -mt-10 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-50 rounded-full blur-2xl -ml-10 -mb-10 opacity-60"></div>

            <div className="w-40 h-40 md:w-56 md:h-56 shrink-0 relative z-10 mx-auto md:mx-0">
              <img
                src="/muh_shameem_director.jpg"
                alt="Mohamed Shameem - Director"
                className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-white"
              />
            </div>

            <div className="text-center md:text-left flex-1 relative z-10">
              <h3 className="text-3xl font-bold text-[#172A53] mb-1">Director's Message</h3>
              <p className="text-[#da251d] font-semibold mb-6 tracking-wide text-sm uppercase">Mohamed Shameem</p>

              {/* <div className="text-gray-700 space-y-4 text-base leading-relaxed text-justify md:text-left mb-6">
                <p>
                  At Edumentora, we strongly believe that education should never be a dead end. Across India, thousands of students discontinue their degree programs due to financial challenges, personal circumstances, academic hurdles, or institutional constraints. Unfortunately, this often leads to wasted academic effort and lost confidence. Our mission is to change that narrative.
                </p>
                <p>
                  Edumentora was founded with a clear purpose: to help students restart and complete their higher education without having to begin from scratch. Through our academic credit transfer solutions, we enable learners to transfer their previously earned credits to UGC-recognized institutions, allowing them to continue their education from where they left off. Every credit earned represents hard work, time, and determination—and we ensure it is respected and utilized.
                </p>
                <p>
                  We are deeply committed to providing transparent, reliable, and student-focused guidance at every step of the process. Our team works closely with each student to understand their academic background and identify the best possible pathway to a recognized qualification.
                </p>
              </div> */}

              <div className="relative bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <span className="text-5xl text-[#172A53] opacity-10 absolute -top-2 -left-2 font-serif hidden md:block">"</span>
                <p className="text-gray-800 italic leading-relaxed text-lg font-medium relative z-10">
                  "At Edumentora, we don’t just offer education services—we offer second chances, renewed confidence, and a clear path toward a successful future. Together, let us transform past progress into lasting achievement."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LocationsSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
