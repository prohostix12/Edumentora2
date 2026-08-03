'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Volume2, VolumeX, CheckCircle2 } from 'lucide-react';
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

import EnquiryForm from '@/components/EnquiryForm';

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
      className="relative w-full h-auto min-h-[90dvh] lg:min-h-[100dvh] flex flex-col justify-center pt-32 lg:pt-[80px] pb-16 bg-[#F9F9F9]"
    >
      {/* Background Decorative Image (Transparent PNG) */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-[25%] w-[90%] max-w-[320px] lg:max-w-[500px] h-[45%] lg:h-[65%] z-0 pointer-events-none opacity-80 md:opacity-100">
        <Image
          src="/hero-image.png"
          alt="Successful College Student"
          fill
          className="object-contain object-bottom drop-shadow-2xl"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative lg:max-w-5xl xl:max-w-7xl mx-auto w-full px-4 md:px-8 z-10 flex-grow flex flex-col justify-center h-full pointer-events-none">

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center pointer-events-auto">

          {/* Left Column: Text */}
          <div className="flex flex-col items-start justify-center text-left max-w-xl lg:max-w-2xl bg-white/40 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none backdrop-blur-md md:backdrop-blur-none border border-white/50 md:border-none shadow-sm md:shadow-none">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-1.5 xl:gap-2 bg-red-50/90 text-[#da251d] px-3 py-1.5 md:px-3.5 md:py-1.5 xl:px-4 xl:py-2 rounded-full font-semibold text-xs md:text-[13px] xl:text-sm shadow-sm border border-red-100 mb-5 xl:mb-8 backdrop-blur-sm"
            >
              <Shield className="w-3 h-3 md:w-3.5 md:h-3.5 xl:w-4 xl:h-4" />
              <span>Trusted Education Partner</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#0B1727] leading-snug mb-10 md:mb-12 tracking-tight font-serif h-[160px] sm:h-[130px] md:h-[140px] xl:h-[160px]"
            >
              <LoopingTypewriterText
                speed={40}
                deleteSpeed={30}
                pause={3000}
                baseSegments={[
                  { text: "Unlock New Academic\nOpportunities " },
                  { text: "Through " }
                ]}
                loopSegments={[
                  [{ text: "Credit Transfer", className: "text-[#da251d] font-bold" }]
                ]}
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-[#172A53]/90 max-w-[540px] leading-relaxed mb-6 font-medium font-serif"
            >
              Continue your B.Tech journey by building on the academic credits you’ve already earned. Get the right guidance and support to transfer your credits and move closer to completing your degree.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex flex-wrap gap-3 md:gap-4 mb-10"
            >
              {['UGC Approved', 'BCI', 'AICTE', 'PCI'].map((badge, idx) => (
                <div key={idx} className="bg-white/90 backdrop-blur-md border border-white shadow-md px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold text-[#172A53] flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 duration-300">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  {badge}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap gap-8 items-center"
            >
              <a href="/contact">
                <button className="group relative flex items-center justify-center gap-2 text-[#172A53] bg-transparent py-2 text-lg md:text-xl font-bold transition-all duration-300">
                  Apply Now
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[110%] h-[2px] bg-[#da251d] transition-transform duration-300 origin-left"></span>
                </button>
              </a>
              <a href="#">
                <button className="flex items-center justify-center text-[#172A53]/70 hover:text-[#172A53] py-2 text-lg md:text-xl font-semibold transition-all duration-300">
                  Know More
                </button>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="w-full max-w-[340px] mx-auto md:ml-auto md:mr-0 z-20"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[1.5rem] p-5 shadow-2xl md:translate-x-[10%] md:translate-y-[10%]">
              <h3 className="text-xl font-bold text-[#172A53] mb-1.5 font-sans">Enquire Now</h3>
              <p className="text-gray-600 mb-5 font-medium text-xs leading-relaxed">Fill out the form below and we will get back to you shortly.</p>
              <EnquiryForm className="space-y-3" isGrid={true} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
