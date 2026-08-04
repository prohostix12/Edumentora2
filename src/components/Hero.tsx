'use client';

import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ClipboardCheck, ShieldCheck, GraduationCap } from 'lucide-react';
import EligibilityForm from '@/components/EligibilityForm';

const LoopingTypewriterText = ({
  baseSegments,
  loopSegments,
  speed = 40,
  deleteSpeed = 20,
  delay = 500,
  pause = 5000
}: {
  baseSegments: { text: string, className?: string }[],
  loopSegments: { text: string, className?: string }[][],
  speed?: number,
  deleteSpeed?: number,
  delay?: number,
  pause?: number
}) => {
  const [charIndex, setCharIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentLoopSegs = loopSegments[loopIndex];
  const fullBaseText = baseSegments.map(s => s.text).join("");
  const fullLoopText = currentLoopSegs.map(s => s.text).join("");
  const totalLength = fullBaseText.length + fullLoopText.length;

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (!isDeleting && charIndex < totalLength) {
      const t = setTimeout(() => setCharIndex(c => c + 1), speed);
      return () => clearTimeout(t);
    }

    if (!isDeleting && charIndex === totalLength) {
      const t = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (isDeleting && charIndex > fullBaseText.length) {
      const t = setTimeout(() => setCharIndex(c => c - 1), deleteSpeed);
      return () => clearTimeout(t);
    }

    if (isDeleting && charIndex === fullBaseText.length) {
      setIsDeleting(false);
      setLoopIndex((prev) => (prev + 1) % loopSegments.length);
    }
  }, [charIndex, started, isDeleting, totalLength, fullBaseText.length, loopSegments.length, speed, deleteSpeed, pause]);

  const combinedSegments = [...baseSegments, ...currentLoopSegs];

  let currentIndex = 0;
  return (
    <>
      {combinedSegments.map((seg, i) => {
        const segStart = currentIndex;
        currentIndex += seg.text.length;

        if (charIndex <= segStart) return null;

        const displayedText = seg.text.slice(0, charIndex - segStart);

        return (
          <span key={i} className={seg.className}>
            {displayedText.split('\n').map((line, j, arr) => (
              <React.Fragment key={j}>
                {line}
                {j < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </span>
        );
      })}
      <style>{`
        @keyframes typeBlink {
          0%, 49% { opacity: 1; }
          50%, 99% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes heroMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes heroAchieveScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-doodle { animation: none !important; }
        }
      `}</style>
      <span className="inline-block w-[5px] h-[0.9em] bg-[#8B0000] ml-1 align-middle" style={{ marginTop: '-4px', animation: 'typeBlink 1s infinite' }}></span>
    </>
  );
};

const FEATURES = [
  { icon: ClipboardCheck, label: 'Check Eligibility' },
  { icon: ShieldCheck, label: 'Get Approved' },
  { icon: GraduationCap, label: 'Complete Your Degree' },
];

const MARQUEE_ITEMS = [
  'UGC-Approved Degrees',
  'AICTE-Recognized Universities',
  'No Entrance Exam',
  'Retain Your Earned Credits',
  'Guided End-to-End Process',
  'Multiple Specializations',
];

const ACHIEVEMENTS = [
  { value: '800+', label: 'Successful Credit Transfers' },
  { value: '16', label: 'Years of Expertise in Industry' },
  { value: '163', label: 'Awards and Recognition' },
  { value: '3,000+', label: 'Graduates With Certified Degrees' },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const riseIn = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0.01 : 0.5, delay, ease: 'easeOut' as const },
  });

  return (
    <section className="relative w-full h-[100dvh] flex overflow-hidden font-[Poppins]">

      {/* Left: full-height achievements sidebar — only Our Great Achievements, auto-scrolling */}
      <aside className="hidden md:flex flex-col w-[240px] lg:w-[280px] h-full shrink-0 bg-gradient-to-b from-[#002147] to-[#001529] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #ffffff 1.5px, transparent 0)', backgroundSize: '22px 22px' }}
        />

        <div className="relative z-10 flex flex-col h-full p-6 lg:p-7">
          {/* Spacer to clear the floating header pill */}
          <div className="h-24 lg:h-20 shrink-0" />

          <motion.div {...riseIn(0)} className="inline-block bg-white/15 text-white text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-lg mb-6 w-fit shrink-0">
            Our Great Achievements
          </motion.div>

          {/* Vertical auto-scroll ticker through all achievements */}
          <motion.div {...riseIn(0.05)} className="flex-1 min-h-0 overflow-hidden relative">
            <div
              className="flex flex-col"
              style={{ animation: shouldReduceMotion ? 'none' : 'heroAchieveScroll 16s linear infinite' }}
            >
              {[0, 1].map((dup) => (
                <div key={dup} aria-hidden={dup === 1} className="flex flex-col gap-7 shrink-0 pb-7">
                  {ACHIEVEMENTS.map((item) => (
                    <div key={item.label}>
                      <div className="text-white text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-[1.5] mb-1.5">
                        {item.value}
                      </div>
                      <div className="text-white/80 text-xs font-semibold leading-relaxed max-w-[11rem]">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </aside>

      {/* Right: main hero area */}
      <div className="relative flex-1 h-full flex flex-col pt-32 lg:pt-[100px] pb-0 bg-[#F7EFE1] overflow-hidden">

      {/* Dot-grid background texture — subtle, low-contrast, CSS-only (no raster asset needed) */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #002147 1.5px, transparent 0)', backgroundSize: '26px 26px' }}
      />

      {/* Mobile-only: compact achievements row (sidebar is desktop-only) */}
      <div className="md:hidden relative z-10 px-4 mb-4 shrink-0">
        <div className="flex gap-3 overflow-x-auto pb-1 -mx-1 px-1">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.label}
              className="shrink-0 bg-white rounded-xl border border-[#002147]/10 shadow-sm px-4 py-2.5 min-w-[132px]"
            >
              <div className="text-[#002147] text-lg font-extrabold leading-tight">{item.value}</div>
              <div className="text-gray-500 text-[10px] font-semibold leading-tight">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto w-full px-4 md:px-8 z-10 flex-1 min-h-0 flex flex-col overflow-y-auto pb-6">
        <div className="flex flex-col md:flex-row flex-1 min-h-0 gap-8 lg:gap-10 items-stretch">

          {/* 1: Content + paragraph */}
          <div className="flex flex-col items-start justify-center text-left h-full md:flex-[1.3]">

            {/* Trust badge card */}
            <motion.div
              {...riseIn(0.05)}
              className="flex items-center gap-2.5 bg-white px-4 py-2.5 rounded-2xl shadow-[0_10px_30px_-10px_rgba(23,42,83,0.25)] mb-6"
            >
              <ShieldCheck className="w-5 h-5 text-[#002147]" />
              <span className="font-bold text-[#002147] text-sm">UGC &amp; AICTE Recognized</span>
            </motion.div>

            <motion.p
              {...riseIn(0.1)}
              className="text-[#002147] font-bold text-base md:text-lg mb-3"
            >
              Ready to finish the degree you already started?
            </motion.p>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-[#002147] leading-[1.05] tracking-tight mb-6 h-[190px] sm:h-[170px] md:h-[200px] xl:h-[220px] flex flex-col justify-end">
              <div>
                <LoopingTypewriterText
                  speed={40}
                  deleteSpeed={30}
                  pause={2200}
                  baseSegments={[
                    { text: "Without Starting\nOver, Continue\nYour " },
                  ]}
                  loopSegments={[
                    [{ text: "B.Tech", className: "text-[#8B0000] inline-block min-w-[3.2em]" }],
                    [{ text: "UG", className: "text-[#8B0000] inline-block min-w-[3.2em]" }],
                    [{ text: "PG", className: "text-[#8B0000] inline-block min-w-[3.2em]" }],
                    [{ text: "Diploma", className: "text-[#8B0000] inline-block min-w-[3.2em]" }],
                  ]}
                />
              </div>
            </h1>

            <motion.p
              {...riseIn(0.15)}
              className="text-gray-600 text-base leading-relaxed mb-6 max-w-md"
            >
              Transfer the credits you&rsquo;ve already earned to a UGC-approved, AICTE-recognized university and pick up exactly where you left off — no entrance exam, no repeated years.
            </motion.p>

            <motion.div
              {...riseIn(0.2)}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8"
            >
              {FEATURES.map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-2 text-[#002147] font-bold text-sm">
                  <Icon className="w-5 h-5" />
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.div
              {...riseIn(0.3)}
              className="flex flex-wrap gap-4 items-center"
            >
              <a href="/contact">
                <button className="bg-[#8B0000] hover:bg-[#5C0000] text-white font-bold px-7 py-3 rounded-full text-base shadow-lg shadow-[#8B0000]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                  Enroll Now
                </button>
              </a>
              <a href="/contact">
                <button className="bg-[#8B0000] hover:bg-[#5C0000] text-white font-bold px-7 py-3 rounded-full text-base shadow-lg shadow-[#8B0000]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                  Book a Free Consultation
                </button>
              </a>
            </motion.div>
          </div>

          {/* 3: Check Your Eligibility Now form, with accent glow + doodles */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.7, delay: 0.15, ease: 'easeOut' }}
            className="relative w-full h-full flex items-center justify-center md:justify-end md:flex-1"
          >
            {/* Decorative doodles — gentle float, disabled under prefers-reduced-motion */}
            <svg
              className="hero-doodle hidden lg:block absolute -top-6 left-6 w-14 h-10 text-[#002147]/70 pointer-events-none"
              style={{ animation: shouldReduceMotion ? 'none' : 'heroFloat 4s ease-in-out infinite' }}
              viewBox="0 0 60 40" fill="none"
            >
              <path d="M2 8 Q10 2 18 8 T34 8 T50 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg
              className="hero-doodle hidden lg:block absolute top-10 -right-4 w-10 h-10 text-[#002147] pointer-events-none"
              style={{ animation: shouldReduceMotion ? 'none' : 'heroFloat 3.2s ease-in-out infinite 0.4s' }}
              viewBox="0 0 40 40" fill="none"
            >
              <path d="M20 2 L23 15 L36 15 L25 23 L29 36 L20 28 L11 36 L15 23 L4 15 L17 15 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>

            {/* Glow ring behind the card */}
            <div className="absolute inset-x-8 inset-y-6 rounded-[3rem] bg-gradient-to-br from-[#002147]/25 via-[#D2B48C]/15 to-transparent blur-2xl -z-10" />

            <div id="eligibility-form" className="relative w-full max-w-[360px] rounded-[2.5rem] border-4 border-[#002147]/70 shadow-[0_25px_60px_-20px_rgba(23,42,83,0.35)] bg-white p-6 scroll-mt-32">
              <div className="flex items-center gap-2 mb-3 rounded-full bg-blue-50 w-fit px-3 py-1.5">
                <ClipboardCheck className="w-4 h-4 text-[#002147]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#002147]">Fast Assessment</span>
              </div>
              <h3 className="text-xl font-bold text-[#002147] mb-1">Check Your Eligibility Now</h3>
              <p className="text-sm text-gray-600 mb-4 leading-6">Get a quick review of your credit transfer eligibility in just a few steps.</p>
              <EligibilityForm className="space-y-3" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling trust marquee */}
      <div className="relative z-10 w-full shrink-0 bg-[#002147] py-3 overflow-hidden">
        <div
          className="flex whitespace-nowrap"
          style={{ width: 'max-content', animation: shouldReduceMotion ? 'none' : 'heroMarquee 26s linear infinite' }}
        >
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center shrink-0" aria-hidden={dup === 1}>
              {MARQUEE_ITEMS.map((item) => (
                <span key={item} className="flex items-center gap-3 mx-5 text-white text-sm font-semibold tracking-wide">
                  {item}
                  <span className="text-[#002147]">&#10022;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
