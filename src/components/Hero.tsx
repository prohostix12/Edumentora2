'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';
import heroImage from '../../public/hero-image.png';

export default function Hero() {
  return (
    <section 
      className="relative w-full lg:h-[800px] overflow-hidden flex flex-col justify-center lg:justify-end pt-32 lg:pt-[40px]"
      style={{
        background: 'linear-gradient(110deg, #ffe0e0 0%, #ffffff 25%, #ffffff 60%, #b2ceff 75%, #4a80f6 100%)'
      }}
    >

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating circles */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[10%] w-8 h-8 border-[2px] border-red-300 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[45%] left-[45%] w-3 h-3 bg-yellow-400 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] right-[15%] w-10 h-10 border-[2px] border-blue-400 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-[60%] right-[5%] w-8 h-8 border-[2px] border-blue-300 rounded-full"
        />

        {/* Dotted grid */}
        <div className="absolute top-20 left-10 w-40 h-40 opacity-30" style={{ backgroundImage: 'radial-gradient(#da251d 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
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

        {/* Right Side: Hero Image */}
        <div className="relative flex justify-center items-end h-[500px] lg:h-[600px] w-full mt-16 md:mt-0 -mb-20 lg:-mb-16 z-30">
          {/* Hero Image */}
          <div className="absolute inset-0 flex justify-center items-end pointer-events-none">
            <Image
              src={heroImage}
              alt="Hero"
              className="object-contain object-bottom w-full h-full scale-[1.35] lg:scale-[1.65] origin-bottom drop-shadow-2xl"
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
