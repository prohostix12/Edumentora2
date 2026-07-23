'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 150], [0, 1]);
  const y = useTransform(scrollY, [0, 150], [50, 0]);
  const pointerEvents = useTransform(scrollY, (value) => (value > 0 ? 'auto' : 'none'));

  const logos = [
    { name: 'Manipur International University', id: 1, image: '/manipur_international_university.jpg' },
    { name: 'Maya Devi University', id: 2, image: '/maya-devi-university.png' },
    { name: 'Glocal University', id: 3, image: '/glocal_university.png' },
    { name: 'ARNI University', id: 4, image: '/arni-university.png' },
  ];

  return (
    <section className="relative z-20 -mt-24 px-8 w-full max-w-7xl mx-auto">
      <motion.div
        style={{ opacity, y, pointerEvents }}
        className="bg-[#172A53] rounded-[40px] p-10 md:p-14 flex flex-col lg:flex-row gap-12 items-center justify-between shadow-2xl shadow-black/50"
      >
        {/* Left Side: Cards */}
        <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-1/2">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 flex-1 shadow-lg aspect-square flex flex-col justify-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-5xl md:text-6xl font-extrabold text-[#000000] mb-4">
              <AnimatedCounter to={16} suffix="+" />
            </h3>
            <p className="text-[#172A53] font-semibold text-lg md:text-xl leading-snug">
              Years of expertise<br />in Industry
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8 flex-1 shadow-lg aspect-square flex flex-col justify-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-5xl md:text-6xl font-extrabold text-[#000000] mb-4">
              <AnimatedCounter to={163} />
            </h3>
            <p className="text-[#172A53] font-semibold text-lg md:text-xl leading-snug">
              Awards and<br />Recognition<br />in Industry
            </p>
          </div>
        </div>

        {/* Right Side: Text & Logos */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Edumentora Makes<br />Restarting your<br />Education Easier
          </h2>

          <p className="text-lg font-medium mb-6">
            Our Trusted Universities:
          </p>

          <div className="flex flex-wrap gap-4">
            {logos.map((logo) => {
              const filterName = logo.name === 'ARNI University' 
                ? 'Arni University' 
                : logo.name === 'Manipur International University'
                  ? 'All'
                  : logo.name;
              
              return (
                <Link href={`/universities?filter=${encodeURIComponent(filterName)}#universities-list`} key={logo.id}>
                  <div
                    className="bg-white rounded-lg p-2 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-center shadow-md transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                  >
                    <Image
                      src={logo.image}
                      alt={logo.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
