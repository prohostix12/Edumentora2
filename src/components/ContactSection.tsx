'use client';
import EnquiryForm from '@/components/EnquiryForm';

import React, { useRef, useState, useEffect } from 'react';
import { Clock, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  // Mobile-only: the enquiry form is collapsed by default behind a "Send
  // Your Message" toggle, to keep the section compact; details are always shown.
  const [showForm, setShowForm] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // On mobile the "paper roll" scroll animation is skipped entirely — the
  // section renders already fully open (as it would look once unrolled).
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const revealPercent = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [100, 0, 0, 100]);
  const clipPath = useTransform(revealPercent, (v) => (isMobile ? 'inset(0 0% 0 0)' : `inset(0 ${v}% 0 0)`));
  const edgeLeft = useTransform(revealPercent, (v) => `${100 - v}%`);
  const rodOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  const rodSpin = useTransform(scrollYProgress, (v) => `${v * -600}px`);
  const rodWidth = useTransform(revealPercent, (v) => 22 + (v / 100) * 70);
  const rodWidthPx = useTransform(rodWidth, (w) => `${w}px`);
  const rodMarginLeftPx = useTransform(rodWidth, (w) => `${-w / 2}px`);
  const rodColor = '#E91D24';

  return (
    <section ref={sectionRef} className="w-full max-w-7xl mx-auto px-4 md:px-8 pb-0 bg-white dot-grid">
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          style={{ clipPath }}
          className="relative bg-gradient-to-br from-[#E91D24] via-[#D6181E] to-[#A81216] rounded-t-[40px] rounded-b-[40px] md:rounded-b-none p-6 md:p-10 flex flex-col lg:flex-row gap-8 text-white overflow-hidden shadow-2xl shadow-black/50"
        >
          {/* decorative glow accents */}
          <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

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
          {!isMobile && (
            <motion.div
              aria-hidden
              style={{ left: edgeLeft, opacity: rodOpacity }}
              className="pointer-events-none absolute top-0 bottom-0 w-24 bg-gradient-to-r from-black/50 via-black/20 to-transparent blur-md z-10"
            />
          )}

          {/* Left Side: Information — desktop/tablet, unchanged */}
        <div className="relative z-10 w-full lg:w-1/2 hidden md:flex flex-col space-y-6">
          <h2 className="text-xl md:text-3xl font-bold leading-tight whitespace-nowrap">
            Ready To Grow with Edumentora
          </h2>

          <div className="border-l-4 border-white/40 pl-4">
            <p className="text-white/90 text-sm leading-relaxed">
              Edumentora makes restarting your education easy by transferring past credits to accredited universities, saving you time and money.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-[#002147] p-1.5 rounded-full shadow-lg shadow-black/40">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">Fast Application Processing</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#002147] p-1.5 rounded-full shadow-lg shadow-black/40">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">Successful Transfers</span>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-[#002147] w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-black/40">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/80 text-xs font-medium">Call Us Anytime</p>
                <p className="font-bold text-base">+91 974458 7777</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="bg-[#002147] w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-black/40">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/80 text-xs font-medium">Location</p>
                <p className="font-bold text-base">Calicut & Kochi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form — desktop/tablet, unchanged */}
        <div className="relative z-10 w-full lg:w-1/2 hidden md:flex flex-col justify-center">
          <EnquiryForm className="space-y-4" isGrid={false} />
        </div>

        {/* Mobile-only: compact — heading and details always shown, only the form is behind a toggle */}
        <div className="relative z-10 w-full flex flex-col space-y-4 md:hidden">
          <h2 className="text-xl font-bold leading-tight">
            Ready To Grow with Edumentora
          </h2>

          <div className="border-l-4 border-white/40 pl-4">
            <p className="text-white/90 text-sm leading-relaxed">
              Edumentora makes restarting your education easy by transferring past credits to accredited universities, saving you time and money.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-[#002147] p-1.5 rounded-full shadow-lg shadow-black/40">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">Fast Application Processing</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#002147] p-1.5 rounded-full shadow-lg shadow-black/40">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">Successful Transfers</span>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-[#002147] w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-black/40">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/80 text-xs font-medium">Call Us Anytime</p>
                <p className="font-bold text-base">+91 974458 7777</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="bg-[#002147] w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-black/40">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/80 text-xs font-medium">Location</p>
                <p className="font-bold text-base">Calicut & Kochi</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowForm((v) => !v)}
            aria-expanded={showForm}
            className="w-full px-4 py-3 rounded-xl text-sm font-bold bg-[#002147] text-white shadow-lg shadow-black/40"
          >
            {showForm ? 'Hide Form' : 'Send Your Message'}
          </button>

          {showForm && <EnquiryForm className="space-y-4" isGrid={false} />}
        </div>

        </motion.div>

        {/* Rolled-up rod core - solid brand color that shifts navy to red as it rolls, thickens when closed (fully wound) and thins down to a bare rod when fully open */}
        {!isMobile && (
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
        )}

        {/* Small rope tied at the bottom of the stick, shaking continuously regardless of scroll (opposite phase from the top rope) */}
        {!isMobile && (
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
        )}
      </div>
    </section>
  );
}
