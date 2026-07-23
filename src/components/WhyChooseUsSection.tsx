'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardCheck, 
  Lightbulb, 
  HeartHandshake, 
  MousePointerClick, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';

export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: "Expert guidance",
      desc: "Our dedicated team offers tailored guidance, ensuring a seamless and successful academic credit transfer experience for each student.",
      icon: <ClipboardCheck className="w-8 h-8 text-blue-600" />,
      bgColor: "bg-blue-50"
    },
    {
      title: "Flexible learning paths",
      desc: "We offer tailored programs that allow you to balance education with personal and professional commitments effectively.",
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      bgColor: "bg-yellow-50"
    },
    {
      title: "Personalized support",
      desc: "Our experienced team offers personalized support, guaranteeing a seamless and hassle-free academic credit transfer experience.",
      icon: <HeartHandshake className="w-8 h-8 text-red-500" />,
      bgColor: "bg-red-50"
    },
    {
      title: "Effortless credit transfer",
      desc: "Seamlessly transfer your earned credits to resume your education without losing progress or starting from scratch.",
      icon: <MousePointerClick className="w-8 h-8 text-teal-600" />,
      bgColor: "bg-teal-50"
    },
    {
      title: "Trusted university",
      desc: "Collaborations with Glocal University, Radha Govind University, and Arni University ensure globally recognized and accredited degrees.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-800" />,
      bgColor: "bg-blue-100"
    },
    {
      title: "Save time and money",
      desc: "Resume your education from where you paused, saving valuable time and reducing overall financial expenses efficiently.",
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="w-full bg-[#172A53] py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Why We are the Right Choice
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {reasons.map((reason, index) => (
            <div key={index} className="relative w-full h-[280px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group absolute inset-0 bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 hover:-top-[15px] hover:-bottom-[15px] hover:-left-[10px] hover:-right-[10px] hover:z-10 hover:shadow-2xl hover:shadow-blue-900/50 transition-all duration-300 cursor-pointer"
              >
                {/* Default State */}
              <div className="flex flex-col justify-between h-full absolute inset-0 p-6 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4">
                <h3 className="text-xl font-bold text-white leading-tight">
                  {reason.title}
                </h3>
                <div className={`w-14 h-14 rounded-xl ${reason.bgColor} flex items-center justify-center`}>
                  {reason.icon}
                </div>
              </div>

              {/* Hover State */}
              <div className="flex flex-col justify-center h-full absolute inset-0 p-6 bg-[#25417e] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-lg font-bold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed pr-1">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
