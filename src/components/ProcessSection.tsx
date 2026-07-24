'use client';

import React from 'react';
import { ArrowRightLeft, Clock, Building2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProcessSection() {
  const features = [
    {
      icon: <ArrowRightLeft className="w-8 h-8 text-[#142B63]" />,
      title: "Seamless Credit Transfer",
      description: "Effortlessly transfer earned credits to resume your education without starting over or losing progress.",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Clock className="w-8 h-8 text-[#E53935]" />,
      title: "Time and Cost Savings",
      description: "Save time and reduce costs by continuing your studies efficiently, maximizing academic success and value.",
      bgColor: "bg-red-50"
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#F4B400]" />,
      title: "Recognized Universities",
      description: "Partnered with Glocal University, Radha Govind University, and IEC University to provide accredited and respected degrees.",
      bgColor: "bg-yellow-50"
    },
  ];

  const processes = [
    {
      num: "01",
      title: "Start Application",
      desc: "Begin your journey easily.",
    },
    {
      num: "02",
      title: "Video Verification",
      desc: "Quick online process.",
    },
    {
      num: "03",
      title: "Seat Reservation",
      desc: "Secure your admission.",
    }
  ];

  return (
    <section className="relative w-full py-[60px] overflow-hidden bg-white">
      {/* Background Split - 55% White / 45% Navy */}
      <div className="absolute inset-0 flex flex-col lg:flex-row pointer-events-none">
        {/* Left White Side */}
        <div className="w-full lg:w-[55%] h-full bg-[#FFFFFF] relative">
          {/* Subtle abstract pattern */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #142B63 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          {/* Soft radial gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-70 -translate-y-1/2 translate-x-1/4"></div>
        </div>
        
        {/* Right Navy Side */}
        <div className="w-full lg:w-[45%] h-full bg-[#142B63] relative overflow-hidden">
          {/* Subtle gradient & dots */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#142B63] to-[#0d1c40]"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
          {/* Faint geometric lines */}
          <div className="absolute top-1/4 -right-[10%] w-[400px] h-[400px] rounded-full border border-white/5"></div>
          <div className="absolute bottom-1/4 -left-[20%] w-[300px] h-[300px] rounded-full border border-white/5"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-white/5 rotate-45"></div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-[80px] relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-[10%]">
        
        {/* LEFT COLUMN: Features */}
        <div className="w-full lg:w-[55%] pr-0 lg:pr-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-[52px] font-bold text-[#142B63] leading-tight mb-4">
              Ready To Grow with EduMentora
            </h2>
            <div className="w-16 h-1.5 bg-[#E53935] rounded-full mb-12"></div>
          </motion.div>

          <div className="flex flex-col gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white/80 backdrop-blur-md rounded-[24px] p-8 border border-[#F0F2F5] shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(20,43,99,0.12)] hover:-translate-y-2 transition-all duration-300 group flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300 ${feature.bgColor}`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#142B63] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-[16px] leading-[1.6]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Process */}
        <div className="w-full lg:w-[45%] pt-12 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-[48px] font-bold text-white leading-tight">
              Know about Our Process
            </h2>
          </motion.div>

          {/* Timeline Layout */}
          <div className="relative py-8">
            {/* Center Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10 hidden md:block"></div>

            <div className="flex flex-col gap-16 md:gap-12 relative">
              {processes.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center justify-between w-full flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Left or Right Content Card */}
                  <div className={`w-full md:w-[42%] flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <div className="bg-white rounded-[20px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-transform duration-300 w-full group cursor-pointer relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-[#E53935]">
                        <ArrowRight size={20} />
                      </div>
                      <h4 className="text-[18px] font-bold text-[#142B63] mb-1 pr-6">{process.title}</h4>
                      <p className="text-gray-500 text-sm">{process.desc}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex w-14 h-14 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] items-center justify-center z-10 border-4 border-[#142B63]">
                    <span className="text-lg font-bold text-[#E53935]">{process.num}</span>
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-[42%]"></div>

                  {/* Mobile Node Indicator (Visible only on mobile) */}
                  <div className="md:hidden absolute top-0 right-0 -mt-3 -mr-2 bg-[#E53935] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {process.num}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
