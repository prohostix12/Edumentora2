'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';
import heroImage from '../../public/hero-image.png';

const TypewriterText = ({ segments, speed = 40, delay = 0 }: { segments: {text: string, className?: string}[], speed?: number, delay?: number }) => {
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
  baseSegments: {text: string, className?: string}[], 
  loopSegments: {text: string, className?: string}[][], 
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
  return (
    <section
      className="relative w-full h-[90dvh] lg:h-[100dvh] overflow-hidden flex flex-col justify-center lg:justify-end pt-32 lg:pt-[40px] bg-gradient-to-r from-red-100 via-blue-100 to-white"
    >

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating circles */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[10%] w-8 h-8 border-[2px] border-red-300 rounded-full"
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
        <div className="absolute top-20 left-10 w-40 h-40 opacity-30" style={{ backgroundImage: 'radial-gradient(#da251d 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
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
            className="text-4xl md:text-5xl xl:text-[54px] font-extrabold text-black leading-[1.1] mb-3 xl:mb-5 tracking-tight font-[Poppins]"
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
                  { text: "Academic ", className: "text-[#da251d]" },
                  { text: "Credits", className: "text-yellow-500" }
                ],
                [
                  { text: "Educational ", className: "text-[#da251d]" },
                  { text: "Journey", className: "text-yellow-500" }
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
              <button className="group flex items-center justify-center gap-2 bg-[#da251d] text-white px-5 py-2.5 text-sm md:px-6 md:py-3 md:text-base xl:px-8 xl:py-4 rounded-full font-bold shadow-[0_8px_25px_-5px_rgba(218,37,29,0.5)] hover:bg-red-700 hover:-translate-y-1 transition-all duration-300">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />Applay Now
              </button>
            </a>
            <a href="#">
              <button className="flex items-center justify-center bg-white text-[#172A53] border-2 border-[#172A53] px-5 py-2.5 text-sm md:px-6 md:py-3 md:text-base xl:px-8 xl:py-4 rounded-full font-bold shadow-md hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300">
                Know More
              </button>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Hero Video */}
        <div className="relative hidden md:flex justify-center items-center h-[450px] lg:h-[550px] xl:h-[600px] w-full z-10 md:-translate-y-[10%]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="relative w-[95%] xl:w-[110%] max-w-[650px] aspect-video bg-[#172A53] rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-[3%] group"
          >
            {/* Top Left Badge */}
            <div className="absolute -top-5 -left-5 md:-top-6 md:-left-6 bg-white text-[#da251d] border-2 border-[#da251d] px-4 py-2 md:px-5 md:py-2.5 rounded-xl font-extrabold text-xs md:text-sm shadow-xl z-20 flex items-center gap-2">
               <span className="w-2 h-2 bg-[#da251d] rounded-full animate-pulse"></span>
               Credit Transfer Your b-tech
            </div>

            {/* Bottom Right Badge */}
            <div className="absolute -bottom-5 -right-5 md:-bottom-6 md:-right-6 bg-yellow-400 text-[#172A53] border-2 border-yellow-400 px-4 py-2 md:px-5 md:py-2.5 rounded-xl font-extrabold text-xs md:text-sm shadow-xl z-20">
               Get Started Today
            </div>

            {/* YouTube Iframe */}
            <div className="relative w-full h-full rounded-[1rem] overflow-hidden bg-black shadow-inner">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/bjIA16xIvHg?autoplay=1&mute=1&loop=1&playlist=bjIA16xIvHg&controls=0&modestbranding=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full object-cover relative z-0 group-hover:opacity-100 transition-opacity duration-300"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
