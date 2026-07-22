'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const imageX = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [-200, 0, 0, -200]);
  const imageRotateY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [-90, 0, 0, -90]);
  const contentX = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [200, 0, 0, 200]);
  const contentRotateY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [90, 0, 0, 90]);

  return (
    <section ref={sectionRef} className="w-full bg-[#172A53] overflow-hidden mb-[10px] -mt-[60px] relative z-10">
      <motion.div
        style={{ opacity: sectionOpacity }}
        className="max-w-7xl mx-auto px-8 pt-16 pb-24 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center [perspective:1500px]"
      >

        {/* Left Side: Overlapping Images */}
        <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] flex items-center justify-center mt-5">
          {/* Background Image (larger, bottom-left) */}
          <motion.div
            style={{ x: imageX, rotateY: imageRotateY, transformStyle: 'preserve-3d' }}
            className="absolute bottom-0 left-0 w-[80%] md:w-[70%] h-[75%] rounded-[40px] overflow-hidden shadow-xl"
          >
            <Image
              src="/about-bg.png"
              alt="Students studying"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Foreground Image (smaller, top-right, with white border) */}
          <motion.div
            style={{ x: imageX, rotateY: imageRotateY, transformStyle: 'preserve-3d' }}
            className="absolute top-0 right-0 md:right-10 w-[60%] md:w-[55%] h-[55%] rounded-[40px] border-8 border-white overflow-hidden shadow-2xl z-10"
          >
            <Image
              src="/about-fg.png"
              alt="Classroom scene"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <motion.div
          style={{ x: contentX, rotateY: contentRotateY, transformStyle: 'preserve-3d' }}
          className="w-full lg:w-1/2 flex flex-col justify-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white my-5">
            About Edumentora
          </h2>

          <div className="border-l-4 border-white/30 pl-6">
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              Edumentora makes restarting your education easy by transferring past credits to accredited universities, saving you time and money.
            </p>
          </div>

          <p className="text-white/70 text-lg leading-relaxed">
            Resume your graduation or postgraduate education through Edumentora, a leading academic credit transfer institution. Transfer earned credits for B. Tech, engineering, and other programs to recognized universities, saving time and costs while achieving academic success.
          </p>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
              <Phone className="w-6 h-6 text-[#172A53]" />
            </div>
            <div>
              <p className="text-white/70 text-sm font-medium">Call Us Anytime</p>
              <p className="text-white font-bold text-lg">+91 974458 7777</p>
            </div>
          </div>

          <div>
            <button className="bg-white text-[#172A53] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-300">
              About Us
            </button>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
