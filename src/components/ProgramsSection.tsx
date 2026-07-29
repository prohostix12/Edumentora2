'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, GraduationCap, Settings2, ArrowRight } from 'lucide-react';

const programs = [
  {
    Icon: BriefcaseBusiness,
    title: 'Credit Transfer Program',
    desc: 'Transfer your past credits to complete your degree faster with Edumentora.',
  },
  {
    Icon: GraduationCap,
    title: 'Apprenticeship Program',
    desc: 'Study while gaining real work experience through Industry training.',
  },
  {
    Icon: Settings2,
    title: 'Work Integrated Learn Program',
    desc: 'Learn theory and apply it practically for a career-ready education.',
  },
];

export default function ProgramsSection() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-[120px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-[80px] flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* LEFT SIDE: Title Area */}
        <div className="w-full lg:w-[30%] shrink-0 relative z-10 pt-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[#E53935] font-bold tracking-widest text-sm uppercase mb-4">
              Our Programs
            </div>
            <h2 className="text-[40px] lg:text-[52px] font-bold text-[#122B63] leading-tight mb-6">
              Our Credit Transfer Programs
            </h2>
            <p className="text-gray-500 text-[16px] leading-relaxed mb-8">
              Seamlessly continue your academic journey by leveraging your prior learning across top institutions.
            </p>
            <div className="w-16 h-[3px] bg-[#E53935]"></div>
          </motion.div>
        </div>
        
        {/* RIGHT SIDE: Horizontal Flow */}
        <div className="w-full lg:w-[70%] relative flex items-start">
          
          {/* Background SVG curved connector line (Desktop only) */}
          <div className="absolute left-[8%] right-[8%] top-[36px] h-[100px] hidden lg:block z-0 pointer-events-none">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
              {/* Light gray track */}
              <path 
                d="M 0,0 C 25,0 25,60 50,60 C 75,60 75,0 100,0" 
                stroke="#F0F2F5" 
                strokeWidth="2" 
                fill="none" 
              />
              {/* Animated Red Connector */}
              <motion.path 
                d="M 0,0 C 25,0 25,60 50,60 C 75,60 75,0 100,0" 
                stroke="#E53935" 
                strokeWidth="2" 
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-8 relative z-10">
            {programs.map((program, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`flex-1 flex flex-col relative group ${i === 1 ? 'lg:mt-[60px]' : 'mt-0'}`}
              >
                {/* Icon Container */}
                <div className="w-[72px] h-[72px] bg-white rounded-full flex items-center justify-center shadow-[0_12px_30px_rgba(0,0,0,0.06)] mb-6 group-hover:-translate-y-2 transition-transform duration-300 border border-gray-50 mx-auto lg:mx-0">
                  <program.Icon className="w-8 h-8 text-[#122B63]" strokeWidth={1.5} />
                </div>
                
                {/* Content Block */}
                <div className="text-center lg:text-left">
                  {/* Step Number */}
                  <div className="text-[48px] font-bold text-[#E53935] opacity-20 mb-2 leading-none font-serif">
                    0{i+1}
                  </div>
                  
                  <h3 className="text-[26px] font-semibold text-[#122B63] group-hover:text-[#E53935] transition-colors mb-3 leading-tight">
                    {program.title}
                  </h3>
                  
                  <p className="text-[16px] text-gray-500 leading-relaxed mb-6 font-medium">
                    {program.desc}
                  </p>
                  
                  <button className="inline-flex items-center text-[#122B63] font-bold group-hover:text-[#E53935] transition-colors overflow-hidden group/btn">
                    Know More 
                    <ArrowRight className="ml-2 w-5 h-5 -translate-x-full opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100 transition-all duration-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
