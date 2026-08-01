'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Volume2, VolumeX } from 'lucide-react';
import heroImage from '../../public/hero-image.png';

const TypewriterText = ({ segments, speed = 40, delay = 0 }: { segments: { text: string, className?: string }[], speed?: number, delay?: number }) => {
  const [charIndex, setCharIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const fullText = segments.map(s => s.text).join("");

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (started && charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, started, fullText, speed]);

  let currentIndex = 0;
  return (
    <>
      {segments.map((seg, i) => {
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
      {/* Blinking cursor */}
      <style>{`
        @keyframes typeBlink {
          0%, 49% { opacity: 1; }
          50%, 99% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
      <span className="inline-block w-[5px] h-[0.9em] bg-[#da251d] ml-1 align-middle" style={{ marginTop: '-4px', animation: 'typeBlink 1s infinite' }}></span>
    </>
  );
};

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
      {/* Blinking cursor */}
      <span className="inline-block w-[5px] h-[0.9em] bg-[#da251d] ml-1 align-middle" style={{ marginTop: '-4px', animation: 'typeBlink 1s infinite' }}></span>
    </>
  );
};

export default function Hero() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const action = isMuted ? 'unMute' : 'mute';
      iframeRef.current.contentWindow.postMessage(JSON.stringify({ event: 'command', func: action, args: [] }), '*');
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      className="relative w-full h-[90dvh] lg:h-[100dvh] overflow-hidden flex flex-col justify-center lg:justify-end pt-32 lg:pt-[40px] bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50"
    >
      {/* SVG Clip Path for Background */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <clipPath id="curve-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.6,0 C 0.6,0.5 0.4,0.5 0.4,1 L 1,1 L 1,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* College Background Image (Mobile: full width, Desktop: curved clip) */}
      <div className="absolute top-0 right-0 w-full h-full z-0 pointer-events-none md:hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80" style={{ backgroundImage: "url('/college-bg.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white/80 to-white/40" />
      </div>
      <div className="hidden md:block absolute top-0 right-0 w-full h-full z-0 pointer-events-none" style={{ clipPath: 'url(#curve-clip)' }}>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80" style={{ backgroundImage: "url('/college-bg.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white/80 to-white/40" />
      </div>

      {/* Center Curved Divider with 20% Gap */}
      <svg className="hidden md:block absolute inset-0 w-full h-full z-10 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
         <defs>
           <linearGradient id="line-grad" x1="0" y1="0" x2="0" y2="1">
             <stop offset="0%" stopColor="#ef4444" />
             <stop offset="100%" stopColor="#3b82f6" />
           </linearGradient>
         </defs>
         <path d="M 60,0 C 60,50 40,50 40,100" fill="none" stroke="url(#line-grad)" strokeWidth="0.15" className="opacity-80" strokeDasharray="40 20 40" pathLength="100" />
      </svg>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating circles */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[10%] w-8 h-8 border-[2px] border-blue-200 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[45%] left-[45%] w-3 h-3 bg-yellow-400 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] right-[15%] w-10 h-10 border-[2px] border-blue-400 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-[60%] right-[5%] w-8 h-8 border-[2px] border-blue-300 rounded-full"
        />

        {/* Dotted grid */}
        <div className="absolute top-20 left-10 w-40 h-40 opacity-30" style={{ backgroundImage: 'radial-gradient(#60a5fa 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
      </div>

      <div className="relative lg:max-w-5xl xl:max-w-7xl mx-auto w-full px-4 md:px-8 grid md:grid-cols-2 gap-12 items-end z-10 flex-grow">

        {/* Left Side: Text Content */}
        <div className="flex flex-col items-start justify-center text-left max-w-xl lg:max-w-2xl pb-10 lg:pb-20 xl:pb-26 pt-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-1.5 xl:gap-2 bg-red-50 text-[#da251d] px-3 py-1.5 md:px-3.5 md:py-1.5 xl:px-4 xl:py-2 rounded-full font-semibold text-xs md:text-[13px] xl:text-sm shadow-sm border border-red-100 mb-5 xl:mb-8"
          >
            <Shield className="w-3 h-3 md:w-3.5 md:h-3.5 xl:w-4 xl:h-4" />
            <span>Trusted Education Partner</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl xl:text-5xl font-normal text-black leading-[1.2] mb-3 xl:mb-5 tracking-tight font-[Poppins]"
          >
            <LoopingTypewriterText
              speed={40}
              delay={500}
              pause={5000}
              baseSegments={[
                { text: "Continue Your Education\nBuild On Your\n" }
              ]}
              loopSegments={[
                [
                  { text: "Academic Credits", className: "text-blue-900 font-normal relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-1/2 after:bg-gradient-to-r after:from-red-600 after:to-transparent" }
                ],
                [
                  { text: "Educational Journey", className: "text-blue-900 font-normal relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-1/2 after:bg-gradient-to-r after:from-red-600 after:to-transparent" }
                ]
              ]}
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[17.5px] xl:text-[18px] text-gray-600 max-w-[560px] leading-[1.8] mb-5 xl:mb-6 min-h-[100px]"
          >
            <TypewriterText
              speed={20}
              delay={500}
              segments={[
                { text: "Continue your B.Tech journey by building on the academic credits you’ve already earned. Get the right guidance and support to transfer your credits and move closer to completing your degree." }
              ]}
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-3 md:gap-4"
          >
            <a href="/contact">
              <button className="group flex items-center justify-center gap-2 bg-[#172A53] text-white px-5 py-2.5 text-sm md:px-6 md:py-3 md:text-base xl:px-8 xl:py-4 rounded-lg font-bold shadow-[0_8px_25px_-5px_rgba(23,42,83,0.5)] hover:bg-[#0c1833] hover:-translate-y-1 transition-all duration-300">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />Apply Now
              </button>
            </a>
            <a href="#">
              <button className="flex items-center justify-center bg-white text-[#172A53] border-2 border-[#172A53] px-5 py-2.5 text-sm md:px-6 md:py-3 md:text-base xl:px-8 xl:py-4 rounded-lg font-bold shadow-md hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300">
                Know More
              </button>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Hero Image (Student) */}
        <div className="relative hidden md:flex justify-center items-end h-[450px] lg:h-[550px] xl:h-[600px] w-full z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 right-[40%] w-[70%] h-[70%] flex items-end justify-center"
          >
            <Image
              src="/hero-image.png"
              alt="Edumentora Hero"
              fill
              className="object-contain object-bottom transform -translate-x-[25%]"
              priority
            />
          </motion.div>

          {/* YouTube Video */}
          {false && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="absolute top-[10%] right-[-5%] w-[65%] max-w-[460px] aspect-video bg-white rounded-[1.5rem] shadow-2xl p-1 pointer-events-auto"
            >
              <div 
                className="relative w-full h-full rounded-[1rem] overflow-hidden bg-black group cursor-pointer"
                onClick={() => window.open("https://www.youtube.com/watch?v=bjIA16xIvHg", "_blank")}
              >
                <iframe
                  ref={iframeRef}
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/bjIA16xIvHg?autoplay=1&mute=1&loop=1&playlist=bjIA16xIvHg&controls=0&modestbranding=1&rel=0&enablejsapi=1&disablekb=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full object-cover pointer-events-none"
                ></iframe>
                
                {/* Custom Overlay for Mute */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMute();
                  }}
                  className="absolute bottom-3 right-3 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all z-20 cursor-pointer"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
