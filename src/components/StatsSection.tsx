'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Briefcase } from 'lucide-react';

function AnimatedCounter({ from = 0, to, duration = 2, suffix = '' }: { from?: number, to: number, duration?: number, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(val) {
          setValue(Math.round(val));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{value}{suffix}</span>;
}

export default function StatsSection() {
  const logos = [
    { name: 'Manipur International University', id: 1, image: '/manipur_international_university.jpg' },
    { name: 'Maya Devi University', id: 2, image: '/maya-devi-university.png' },
    { name: 'Glocal University', id: 3, image: '/glocal_university.png' },
    { name: 'ARNI University', id: 4, image: '/arni-university.png' },
  ];

  return (
    <section className="relative z-20 w-full bg-[#FAF7F0] overflow-hidden">
      {/* Minimal decorative dots behind the connector */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#002147_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto py-[60px] px-4 md:px-8">
        {/* Heading Area */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center text-center mb-10"
      >
        <span className="text-[#D2B48C] text-[13px] md:text-sm font-bold tracking-[0.2em] mb-3 uppercase font-[Poppins]">
          OUR IMPACT
        </span>
        <h2 className="text-[36px] md:text-[48px] font-bold text-[#002147] font-[Playfair_Display] leading-[1.15] mb-5 max-w-4xl">
          Edumentora Makes<br />
          <span className="text-[#D2B48C]">Restarting</span> your Education Easier
        </h2>
        <div className="w-20 h-[2px] bg-[#D2B48C] rounded-full mb-8"></div>
        
        <h3 className="text-[20px] md:text-[24px] font-semibold text-[#002147] font-[Poppins]">
          Our Trusted Universities
        </h3>
      </motion.div>

      {/* Showcase Flow Area */}
      <div className="relative w-full py-6 mt-4">
        
        {/* SVG Curved Connector (Desktop only to prevent messy mobile overlap) */}
        <div className="absolute top-1/2 left-0 w-full h-[200px] -translate-y-1/2 pointer-events-none z-0 hidden xl:block">
          <svg width="100%" height="100%" viewBox="0 0 1200 200" fill="none" preserveAspectRatio="none">
            {/* Smooth flowing sine-wave style path connecting the centers */}
            <path 
              d="M 130,100 C 300,50 400,160 600,100 C 800,40 900,150 1070,100" 
              stroke="#D2B48C" 
              strokeWidth="2" 
              strokeDasharray="6 6"
              fill="none"
              className="opacity-40"
            />
            {/* Connection nodes under each card (approximate positions corresponding to the offsets) */}
            <circle cx="130" cy="100" r="4" fill="#D2B48C" />
            <circle cx="340" cy="72" r="4" fill="#D2B48C" />
            <circle cx="510" cy="120" r="4" fill="#D2B48C" />
            <circle cx="680" cy="80" r="4" fill="#D2B48C" />
            <circle cx="850" cy="128" r="4" fill="#D2B48C" />
            <circle cx="1070" cy="100" r="4" fill="#D2B48C" />
          </svg>
        </div>

        {/* Content Row */}
        <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-[32px] w-full max-w-[1200px] mx-auto">
          
          {/* Left Stat */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full sm:w-[240px] shrink-0 drop-shadow-[0_15px_25px_rgba(0,0,0,0.05)] hover:drop-shadow-[0_20px_35px_rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300 z-10"
          >
            <div className="bg-white p-6 pb-8 flex flex-col items-center text-center relative w-full h-full"
                 style={{ clipPath: 'polygon(50% 0%, 100% 12%, 100% 88%, 50% 100%, 0% 88%, 0% 12%)', minHeight: '260px' }}>
              <div className="w-12 h-12 rounded-full border-2 border-[#D2B48C] text-[#D2B48C] flex items-center justify-center mb-4 mt-2">
                <Briefcase size={24} strokeWidth={1.5} />
              </div>
              <h4 className="text-[48px] md:text-[56px] font-bold font-[Playfair_Display] text-[#002147] leading-none mb-3">
                <AnimatedCounter to={16} suffix="+" />
              </h4>
              <p className="text-[15px] md:text-[16px] text-[#002147] font-[Poppins] leading-[1.4]">
                Years of Expertise<br/>in Industry
              </p>
            </div>
          </motion.div>

          {/* Universities Container */}
          <div className="flex flex-wrap xl:flex-nowrap justify-center gap-[32px] flex-1">
            {logos.map((logo, i) => {
              const filterName = logo.name === 'ARNI University' 
                ? 'Arni University' 
                : logo.name === 'Manipur International University'
                  ? 'All'
                  : logo.name;
              
              // Alternate vertical offsets for a sine wave feel on large screens
              const offsets = ['xl:-translate-y-8', 'xl:translate-y-4', 'xl:-translate-y-4', 'xl:translate-y-8'];
              
              return (
                <motion.div
                  key={logo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] ${offsets[i]}`}
                >
                  <Link href={`/universities?filter=${encodeURIComponent(filterName)}#universities-list`} className="block w-full h-full">
                    <div className="bg-white rounded-[24px] p-4 w-full h-full flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.04)] border border-[#ECECEC] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300">
                      <div className="relative w-full h-full">
                        <Image
                          src={logo.image}
                          alt={logo.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Right Stat */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full sm:w-[240px] shrink-0 drop-shadow-[0_15px_25px_rgba(0,0,0,0.05)] hover:drop-shadow-[0_20px_35px_rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300 z-10"
          >
            <div className="bg-white p-6 pb-8 flex flex-col items-center text-center relative w-full h-full"
                 style={{ clipPath: 'polygon(50% 0%, 100% 12%, 100% 88%, 50% 100%, 0% 88%, 0% 12%)', minHeight: '260px' }}>
              <div className="w-12 h-12 rounded-full border-2 border-[#D2B48C] text-[#D2B48C] flex items-center justify-center mb-4 mt-2">
                <Award size={24} strokeWidth={1.5} />
              </div>
              <h4 className="text-[48px] md:text-[56px] font-bold font-[Playfair_Display] text-[#002147] leading-none mb-3">
                <AnimatedCounter to={163} />
              </h4>
              <p className="text-[15px] md:text-[16px] text-[#002147] font-[Poppins] leading-[1.4]">
                Awards and<br/>Recognition<br/>in Industry
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
}
