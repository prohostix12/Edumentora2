'use client';

import React from 'react';
import { ArrowRightLeft, Clock, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProcessSection() {
  const features = [
    {
      icon: <ArrowRightLeft className="w-7 h-7 text-blue-600" />,
      title: "Seamless Credit Transfer",
      description: "Effortlessly transfer earned credits to resume your education without starting over or losing progress.",
    },
    {
      icon: <Clock className="w-7 h-7 text-purple-500" />,
      title: "Time and Cost Savings",
      description: "Save time and reduce costs by continuing your studies efficiently, maximizing academic success and value.",
    },
    {
      icon: <Building2 className="w-7 h-7 text-red-500" />,
      title: "Recognized Universities",
      description: "Partnered with Glocal University, Radha Govind University, and IEC University to provide accredited and respected degrees.",
    },
  ];

  const processes = [
    {
      num: "01",
      title: "Start Application",
      desc: "Start your Application",
      borderClass: "border-gray-200"
    },
    {
      num: "02",
      title: "Video Verification",
      desc: "Complete Your Video Verification",
      borderClass: "border-gray-200"
    },
    {
      num: "03",
      title: "Seat Reservation",
      desc: "Reserve Your Seat",
      borderClass: "border-red-200" // Distinct pinkish/red border seen in the design
    }
  ];

  return (
    <section className="w-full bg-[#172A53] py-5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: Ready To Grow with Edumentora + feature cards */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8"
          >
            Ready To Grow with Edumentora
          </motion.h2>

          <div className="flex flex-col gap-6 [perspective:1200px]">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateX: -90 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.7, delay: index * 0.2, ease: 'easeOut' }}
                style={{ transformOrigin: 'top center' }}
                className="bg-white rounded-[30px] p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Know about Our Process + steps */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8"
          >
            Know about Our Process
          </motion.h2>

          <div className="flex flex-col gap-6 [perspective:1200px]">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateX: -90 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.7, delay: index * 0.2, ease: 'easeOut' }}
                style={{ transformOrigin: 'top center' }}
                className={`bg-white rounded-[30px] p-8 border ${process.borderClass} shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-center gap-6`}
              >
                <h3 className="text-5xl md:text-6xl font-bold text-black tracking-tighter shrink-0">
                  {process.num}
                </h3>
                <div>
                  <h4 className="text-xl font-semibold text-[#1B2D5D] mb-1">
                    {process.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {process.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
