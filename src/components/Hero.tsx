'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ClipboardCheck, ShieldCheck, GraduationCap } from 'lucide-react';

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
        @media (prefers-reduced-motion: reduce) {
          .hero-doodle { animation: none !important; }
        }
      `}</style>
      <span className="inline-block w-[5px] h-[0.9em] bg-[#0d9488] ml-1 align-middle" style={{ marginTop: '-4px', animation: 'typeBlink 1s infinite' }}></span>
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

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const riseIn = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0.01 : 0.5, delay, ease: 'easeOut' as const },
  });

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-center pt-32 lg:pt-[100px] pb-0 bg-[#f8f3e6] overflow-hidden font-[Poppins]">

      {/* Dot-grid background texture — subtle, low-contrast, CSS-only (no raster asset needed) */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #172A53 1.5px, transparent 0)', backgroundSize: '26px 26px' }}
      />

      <div className="relative lg:max-w-6xl xl:max-w-7xl mx-auto w-full px-4 md:px-8 z-10 flex-grow flex flex-col justify-center pb-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="flex flex-col items-start justify-center text-left max-w-xl lg:max-w-2xl">

            {/* Trust badge card */}
            <motion.div
              {...riseIn(0)}
              className="flex items-center gap-2.5 bg-white px-4 py-2.5 rounded-2xl shadow-[0_10px_30px_-10px_rgba(23,42,83,0.25)] mb-6"
            >
              <ShieldCheck className="w-5 h-5 text-[#0d9488]" />
              <span className="font-bold text-[#172A53] text-sm">UGC &amp; AICTE Recognized</span>
            </motion.div>

            <motion.p
              {...riseIn(0.1)}
              className="text-[#0d9488] font-bold text-base md:text-lg mb-3"
            >
              Ready to finish the degree you already started?
            </motion.p>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-[#172A53] leading-[1.05] tracking-tight mb-6 h-[190px] sm:h-[170px] md:h-[200px] xl:h-[220px] flex flex-col justify-end">
              <div>
                <LoopingTypewriterText
                  speed={40}
                  deleteSpeed={30}
                  pause={2200}
                  baseSegments={[
                    { text: "Without Starting\nOver, Continue\nYour " },
                  ]}
                  loopSegments={[
                    [{ text: "B.Tech", className: "text-[#0d9488] inline-block min-w-[3.2em]" }],
                    [{ text: "UG", className: "text-[#0d9488] inline-block min-w-[3.2em]" }],
                    [{ text: "PG", className: "text-[#0d9488] inline-block min-w-[3.2em]" }],
                    [{ text: "Diploma", className: "text-[#0d9488] inline-block min-w-[3.2em]" }],
                  ]}
                />
              </div>
            </h1>

            <motion.div
              {...riseIn(0.2)}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8"
            >
              {FEATURES.map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-2 text-[#172A53] font-bold text-sm">
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
                <button className="bg-[#0d9488] hover:bg-[#0f766e] text-white font-bold px-8 py-3.5 rounded-full text-base md:text-lg shadow-lg shadow-teal-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                  Enroll Now
                </button>
              </a>
              <a href="/contact">
                <button className="bg-[#172A53] hover:bg-[#0d1b3d] text-white font-bold px-8 py-3.5 rounded-full text-base md:text-lg shadow-lg shadow-[#172A53]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                  Book a Free Consultation
                </button>
              </a>
            </motion.div>
          </div>

          {/* Right: Image with accent glow + doodles */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.7, delay: 0.15, ease: 'easeOut' }}
            className="relative w-full flex justify-center md:justify-end"
          >
            {/* Decorative doodles — gentle float, disabled under prefers-reduced-motion */}
            <svg
              className="hero-doodle hidden md:block absolute -top-6 left-6 w-14 h-10 text-[#172A53]/70 pointer-events-none"
              style={{ animation: shouldReduceMotion ? 'none' : 'heroFloat 4s ease-in-out infinite' }}
              viewBox="0 0 60 40" fill="none"
            >
              <path d="M2 8 Q10 2 18 8 T34 8 T50 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg
              className="hero-doodle hidden md:block absolute top-10 -right-4 w-10 h-10 text-[#0d9488] pointer-events-none"
              style={{ animation: shouldReduceMotion ? 'none' : 'heroFloat 3.2s ease-in-out infinite 0.4s' }}
              viewBox="0 0 40 40" fill="none"
            >
              <path d="M20 2 L23 15 L36 15 L25 23 L29 36 L20 28 L11 36 L15 23 L4 15 L17 15 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <svg
              className="hero-doodle hidden md:block absolute bottom-16 -left-6 w-8 h-8 text-[#172A53]/60 pointer-events-none"
              style={{ animation: shouldReduceMotion ? 'none' : 'heroFloat 3.6s ease-in-out infinite 0.8s' }}
              viewBox="0 0 30 30" fill="none"
            >
              <path d="M15 2 L2 22 L14 22 L11 28 L28 12 L15 12 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>

            {/* Glow ring behind the photo */}
            <div className="absolute inset-x-8 inset-y-6 rounded-[3rem] bg-gradient-to-br from-[#0d9488]/25 via-[#e8b64a]/15 to-transparent blur-2xl -z-10" />

            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[2.5rem] border-4 border-[#0d9488]/70 shadow-[0_25px_60px_-20px_rgba(23,42,83,0.35)] overflow-hidden bg-white">
              <Image
                src="/hero-image.png"
                alt="Student who completed their degree through credit transfer"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 380px"
                className="object-contain object-bottom"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling trust marquee */}
      <div className="relative z-10 w-full bg-[#0d9488] py-3 overflow-hidden mt-16 md:mt-24">
        <div
          className="flex whitespace-nowrap"
          style={{ width: 'max-content', animation: shouldReduceMotion ? 'none' : 'heroMarquee 26s linear infinite' }}
        >
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center shrink-0" aria-hidden={dup === 1}>
              {MARQUEE_ITEMS.map((item) => (
                <span key={item} className="flex items-center gap-3 mx-5 text-white text-sm font-semibold tracking-wide">
                  {item}
                  <span className="text-[#172A53]">&#10022;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
