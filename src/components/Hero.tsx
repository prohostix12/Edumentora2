'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full lg:h-[740px] bg-gradient-to-br from-[#faf9f6] to-[#f4f2ea] overflow-hidden flex flex-col justify-center lg:justify-end pt-32 lg:pt-0">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft blurred blobs */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-red-100/40 blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-yellow-100/30 blur-[120px]"
        />
        
        {/* Floating circles */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[10%] w-6 h-6 border-2 border-red-200 rounded-full"
        />
        <motion.div 
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[45%] left-[45%] w-3 h-3 bg-yellow-400 rounded-full"
        />
        <motion.div 
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[15%] right-[25%] w-8 h-8 border-[3px] border-gray-200 rounded-full"
        />
        
        {/* Dotted grid */}
        <div className="absolute top-20 left-10 w-32 h-32 opacity-20" style={{ backgroundImage: 'radial-gradient(#da251d 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center z-10 pb-20 lg:pb-16 lg:-mt-10">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col items-start justify-center text-left max-w-xl xl:max-w-2xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-2 bg-red-50 text-[#da251d] px-4 py-2 rounded-full font-semibold text-sm shadow-sm border border-red-100 mb-8"
          >
            <Shield className="w-4 h-4" />
            <span>Trusted Education Partner</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-[1.1] mb-6 tracking-tight font-[Poppins]"
          >
            Empowering Students<br />Through Academic<br />
            <span className="text-[#da251d]">Credit </span>
            <span className="text-[#172A53]">Transfer</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[18px] text-gray-600 max-w-[560px] leading-[1.8] mb-10"
          >
            Transfer your academic credits seamlessly through Kerala's trusted education partner. Achieve your educational goals with recognized institutions and expert guidance.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <button className="group flex items-center justify-center gap-2 bg-[#da251d] text-white px-8 py-4 rounded-full font-bold shadow-[0_8px_25px_-5px_rgba(218,37,29,0.5)] hover:bg-red-700 hover:-translate-y-1 transition-all duration-300">
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center bg-white text-[#172A53] border-2 border-[#172A53] px-8 py-4 rounded-full font-bold shadow-md hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300">
              Know More
            </button>
          </motion.div>
        </div>

        {/* Right Side: Mentor Image with Curved/Circular Styling */}
        <div className="relative flex justify-center items-center h-[500px] lg:h-[550px] mt-16 md:mt-0 lg:ml-12">
          
          {/* Large soft circular background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-tr from-white to-red-50 rounded-full shadow-[0_20px_50px_-15px_rgba(218,37,29,0.15)] z-0" />
          
          {/* Thin outline circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[430px] h-[430px] md:w-[530px] md:h-[530px] lg:w-[650px] lg:h-[650px] rounded-full border border-red-200/50 z-0" />
          
          {/* Subtle glow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-yellow-300/20 blur-[60px] rounded-full z-0" />

          {/* Abstract floating ring over image */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-[10%] right-[0%] w-20 h-20 rounded-full border-4 border-dashed border-red-300/40 z-20 pointer-events-none"
          />

          {/* Mentor Image - Enlarged, lowered, and placed behind the wave (z-10 vs wave z-20) */}
          <div className="absolute bottom-[-100px] lg:bottom-[-160px] w-full flex justify-center items-end z-10 pointer-events-none">
            <Image
              src="/hero-image.webp"
              alt="Mentor"
              width={750}
              height={850}
              className="object-contain object-bottom w-[95%] lg:w-[115%] h-[600px] lg:h-[800px] drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Smooth Curved Wave at the Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg 
          className="relative block w-full h-[60px] md:h-[100px] lg:h-[120px]"
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            fill="#da251d"
          ></path>
        </svg>
      </div>

    </section>
  );
}
