'use client';

import React, { useRef } from 'react';
import { Clock, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const revealPercent = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [100, 0, 0, 100]);
  const clipPath = useTransform(revealPercent, (v) => `inset(0 ${v}% 0 0)`);
  const edgeLeft = useTransform(revealPercent, (v) => `${100 - v}%`);
  const rodOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  const rodSpin = useTransform(scrollYProgress, (v) => `${v * -600}px`);
  const rodWidth = useTransform(revealPercent, (v) => 22 + (v / 100) * 70);
  const rodWidthPx = useTransform(rodWidth, (w) => `${w}px`);
  const rodMarginLeftPx = useTransform(rodWidth, (w) => `${-w / 2}px`);
  const rodColor = '#da251d';

  return (
    <section ref={sectionRef} className="w-full max-w-7xl mx-auto px-4 md:px-8 pb-0">
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          style={{ clipPath }}
          className="relative bg-gradient-to-br from-[#ea3a30] via-[#da251d] to-[#a01912] rounded-t-[40px] rounded-b-[40px] md:rounded-b-none p-6 md:p-10 flex flex-col lg:flex-row gap-8 text-white overflow-hidden shadow-2xl shadow-black/50"
        >
          {/* decorative glow accents */}
          <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-16 w-80 h-80 bg-[#172A53]/30 rounded-full blur-3xl" />

          {/* subtle dot-grid texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '18px 18px',
            }}
          />

          {/* soft cast shadow just ahead of the dowel onto the still-hidden paper */}
          <motion.div
            aria-hidden
            style={{ left: edgeLeft, opacity: rodOpacity }}
            className="pointer-events-none absolute top-0 bottom-0 w-24 bg-gradient-to-r from-black/50 via-black/20 to-transparent blur-md z-10"
          />

          {/* Left Side: Information */}
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col space-y-6">
          <h2 className="text-xl md:text-3xl font-bold leading-tight whitespace-nowrap">
            Ready To Grow with Edumentora
          </h2>

          <div className="border-l-4 border-red-800/50 pl-4">
            <p className="text-white/90 text-sm leading-relaxed">
              Edumentora makes restarting your education easy by transferring past credits to accredited universities, saving you time and money.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-[#172A53] p-1.5 rounded-full shadow-lg shadow-black/40">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">Fast Application Processing</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#172A53] p-1.5 rounded-full shadow-lg shadow-black/40">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">Successful Transfers</span>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-[#172A53] w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-black/40">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/80 text-xs font-medium">Call Us Anytime</p>
                <p className="font-bold text-base">+91 974458 7777</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="bg-[#172A53] w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-black/40">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/80 text-xs font-medium">Location</p>
                <p className="font-bold text-base">Calicut & Kochi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center">
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full md:w-1/2 bg-[#f4f4f5] text-gray-800 placeholder-gray-500 rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full md:w-1/2 bg-[#f4f4f5] text-gray-800 placeholder-gray-500 rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
            </div>

            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full bg-[#f4f4f5] text-gray-800 placeholder-gray-500 rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full bg-[#f4f4f5] text-gray-800 placeholder-gray-500 rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none"
            ></textarea>

            <div className="flex justify-end pt-1">
              <button
                type="submit"
                className="text-white font-bold text-base hover:text-white/80 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        </motion.div>

        {/* Rolled-up rod core - solid brand color that shifts navy to red as it rolls, thickens when closed (fully wound) and thins down to a bare rod when fully open */}
        <motion.div
          aria-hidden
          style={{
            left: edgeLeft,
            opacity: rodOpacity,
            width: rodWidthPx,
            marginLeft: rodMarginLeftPx,
            backgroundColor: rodColor,
            backgroundImage:
              'repeating-linear-gradient(45deg, rgba(255,255,255,0.22) 0px, rgba(255,255,255,0.22) 6px, rgba(0,0,0,0.12) 6px, rgba(0,0,0,0.12) 12px)',
            backgroundPositionX: rodSpin,
          }}
          className="pointer-events-none absolute top-2 bottom-2 rounded-full z-20 shadow-[0_10px_30px_rgba(0,0,0,0.55)] ring-2 ring-black/30"
        />

        {/* Small rope tied at the bottom of the stick, shaking continuously regardless of scroll (opposite phase from the top rope) */}
        <motion.div
          aria-hidden
          style={{
            left: edgeLeft,
            opacity: rodOpacity,
            transformOrigin: 'top center',
            backgroundColor: '#6b4423',
            backgroundImage:
              'repeating-linear-gradient(45deg, rgba(255,255,255,0.25) 0px, rgba(255,255,255,0.25) 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)',
          }}
          animate={{ rotate: [14, -14, 14] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -bottom-[104px] -ml-1 w-2 h-28 rounded-full z-30 shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
        />
      </div>
    </section>
  );
}
