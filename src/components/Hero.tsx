'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ClipboardCheck, ShieldCheck, GraduationCap } from 'lucide-react';
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
      {/* Blinking cursor */}
      <style>{`
        @keyframes typeBlink {
          0%, 49% { opacity: 1; }
          50%, 99% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
      <span className="inline-block w-[5px] h-[0.9em] bg-[#60A5FA] ml-1 align-middle" style={{ marginTop: '-4px', animation: 'typeBlink 1s infinite' }}></span>
    </>
  );
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // The scroll-driven centering only applies on the split desktop layout (lg+); on mobile the
  // form stays in normal document flow, so its positioning style is left untouched there.
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  // On load the form sits in the right portion. Scrolling: the navy panel's text content
  // slides up and out (not sideways) and fades, the form travels from the right portion over
  // to the left side (into the space the content vacates), and the image animates into the
  // centre of the right portion behind it. `left` is in vw so it's measured against the
  // viewport, not whichever panel the element happens to sit in. Ranges are stretched to
  // finish close to progress 1 so there's no dead scroll zone once everything is in place —
  // the page continues scrolling right after the pieces land.
  // Starts at the existing "20% down" resting offset, then continues up and off-screen.
  const leftContentY = useTransform(scrollYProgress, [0, 0.35], ['20%', '-140%']);
  const leftContentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Centred ('-50%') while sitting in the right portion; '-25%' = centre shifted 25% down,
  // once it settles on the left.
  const formLeft = useTransform(scrollYProgress, [0.05, 0.85], ['75vw', '30vw']);
  const formY = useTransform(scrollYProgress, [0.05, 0.85], ['-50%', '-25%']);
  const formStyle = isDesktop ? { left: formLeft, x: '-50%', y: formY } : undefined;

  // Image starts tucked under the left (navy) portion — low and hidden — then rises up and
  // slides over to rest at the centre of the right portion (roughly the midpoint of the
  // ~54vw-100vw span the right panel occupies).
  const imageOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const imageLeft = useTransform(scrollYProgress, [0.3, 0.8], ['35vw', '76vw']);
  // '20%' while under the left portion (20% lower than centre); '-60%' at rest in the right
  // portion (centre '-50%' shifted a further 20% up, toward the top).
  const imageY = useTransform(scrollYProgress, [0.3, 0.8], ['20%', '-60%']);

  // Once the headline has exited, fill the space it leaves behind with supporting content
  // on both sides so the settled layout (form left, image right) doesn't look empty.
  const revealOpacity = useTransform(scrollYProgress, [0.4, 0.65], [0, 1]);

  return (
    <section ref={sectionRef} className="relative w-full lg:h-[170dvh]">
    <div className="relative w-full min-h-[100dvh] lg:h-[100dvh] lg:sticky lg:top-0 flex flex-col lg:flex-row bg-[#f7f9fc] overflow-hidden">

      {/* Left: Navy content panel */}
      <div className="relative w-full lg:w-[54%] xl:w-[52%] bg-gradient-to-br from-[#0d1b3d] via-[#132a5c] to-[#172A53] flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 pt-32 pb-16 lg:py-24 lg:rounded-r-[3.5rem] xl:rounded-r-[5rem] overflow-hidden">

        {/* Decorative texture on navy panel */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '28px 28px' }}
        />
        <div className="absolute top-[-15%] right-[-10%] w-[420px] h-[420px] rounded-full bg-blue-500/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[320px] h-[320px] rounded-full bg-[#da251d]/10 blur-[110px] pointer-events-none" />

        <motion.div
          style={isDesktop ? { y: leftContentY, opacity: leftContentOpacity } : undefined}
          className="relative z-10 max-w-xl lg:will-change-transform"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-end text-3xl md:text-4xl xl:text-[3.25rem] font-bold text-white leading-snug mb-6 tracking-tight font-serif h-[170px] sm:h-[140px] md:h-[150px] xl:h-[170px]"
          >
            <div>
              <LoopingTypewriterText
                speed={40}
                deleteSpeed={30}
                pause={3000}
                baseSegments={[
                  { text: "Unlock New Academic\nOpportunities " },
                  { text: "Through " }
                ]}
                loopSegments={[
                  [{ text: "Credit Transfer", className: "text-[#60A5FA] font-bold" }]
                  ]}
              />
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-slate-300 max-w-[520px] leading-relaxed mb-9 font-medium font-serif"
          >
            Continue your B.Tech journey by building on the academic credits you&rsquo;ve already earned. Get the right guidance and support to transfer your credits and move closer to completing your degree.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a href="/contact">
              <button className="group relative flex items-center justify-center gap-2 text-[#172A53] bg-white hover:bg-slate-100 px-7 py-3.5 rounded-full text-base md:text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                Apply Now
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </a>
            <a href="#eligibility-form">
              <button className="flex items-center justify-center text-white border-2 border-white/70 hover:bg-white hover:text-[#172A53] px-7 py-3.5 rounded-full text-base md:text-lg font-bold transition-all duration-300">
                Book a Free Consultation
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* Fills the space the headline leaves once it scrolls out, so the panel doesn't
            look empty once the form has settled here on the left. */}
        <motion.div
          style={{ opacity: revealOpacity }}
          className="hidden lg:block absolute inset-x-0 top-[14%] px-6 sm:px-10 lg:px-16 xl:px-20 z-10 pointer-events-none"
        >
          <h2 className="text-white text-xl xl:text-2xl font-bold mb-5 font-serif max-w-sm">A Trusted Path to Your Degree</h2>
          <ul className="space-y-3.5">
            <li className="flex items-center gap-3 text-slate-200 text-sm font-medium">
              <ShieldCheck className="w-4 h-4 text-[#60A5FA] flex-shrink-0" />
              UGC-Approved, AICTE-Recognized Universities
            </li>
            <li className="flex items-center gap-3 text-slate-200 text-sm font-medium">
              <ClipboardCheck className="w-4 h-4 text-[#60A5FA] flex-shrink-0" />
              Free, Fast Eligibility Assessment
            </li>
            <li className="flex items-center gap-3 text-slate-200 text-sm font-medium">
              <GraduationCap className="w-4 h-4 text-[#60A5FA] flex-shrink-0" />
              Guided Support Until You Graduate
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Right: ambient decoration only — the hero image is now a sibling below, so it can
          be positioned in vw against the full viewport and rest right on the panel seam */}
      <div className="hidden lg:flex relative lg:w-[46%] xl:w-[48%] flex-col items-center justify-center px-6 py-16 lg:py-24">
        <div className="absolute top-[30%] right-[-10%] w-[300px] h-[300px] rounded-full bg-blue-200/40 blur-[100px] pointer-events-none" />

        {/* Fills the space beneath where the image settles, so the right side doesn't look empty. */}
        <motion.div
          style={{ opacity: revealOpacity }}
          className="hidden lg:block absolute inset-x-0 bottom-[14%] px-10 xl:px-14 z-10 text-center pointer-events-none"
        >
          <p className="text-[#172A53] text-base xl:text-lg font-bold font-serif mb-2">&ldquo;Every credit you&rsquo;ve earned still counts.&rdquo;</p>
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-[0.15em]">Dedicated Academic Advisors</p>
        </motion.div>
      </div>

      {/* Hero image: hidden until scrolled, desktop only. Starts tucked under the left portion,
          rises and slides over to rest at the centre of the right portion. */}
      <motion.div
        style={{ opacity: imageOpacity, left: imageLeft, x: '-50%', y: imageY }}
        className="hidden lg:block absolute z-20 top-1/2 w-[300px] xl:w-[340px] aspect-[4/5] pointer-events-none"
      >
        <div className="absolute inset-x-6 bottom-0 h-[70%] bg-gradient-to-t from-blue-200/50 to-transparent rounded-full blur-2xl" />
        <Image
          src="/hero-image.png"
          alt="Student who completed their degree through credit transfer"
          fill
          sizes="340px"
          className="object-contain object-bottom drop-shadow-2xl"
        />
      </motion.div>

      {/* Check Eligibility Form: sibling of both panels so its containing block spans the
          full viewport width — required for `left` in vw to land on true screen-center rather
          than being measured from the right panel's own edge. Starts in the right panel's spot
          (20% down), scroll carries it to dead-center, straddling both halves. */}
      <motion.div
        id="eligibility-form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        style={formStyle}
        className="relative z-10 w-full max-w-[400px] mx-auto -mt-8 mb-16 px-6 lg:px-0 lg:mt-0 lg:mb-0 scroll-mt-32 lg:absolute lg:top-1/2 lg:w-[400px] lg:max-w-none lg:z-30 lg:will-change-transform"
      >
        <div className="bg-white border border-slate-100 rounded-[1.5rem] p-4 shadow-[0_20px_60px_-25px_rgba(15,111,255,0.35)]">
          <div className="flex items-center gap-2 mb-1.5 rounded-full bg-blue-50 w-fit px-2.5 py-1">
            <ClipboardCheck className="w-3.5 h-3.5 text-[#0f6fff]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0f6fff]">Fast assessment</span>
          </div>
          <h3 className="text-lg font-bold text-[#172A53] mb-0.5">Check Eligibility Now</h3>
          <p className="text-xs text-slate-600 mb-2.5 leading-5">Get a quick review of your credit transfer eligibility in just a few steps.</p>
          <EligibilityForm className="space-y-2.5" />
        </div>
      </motion.div>
    </div>
    </section>
  );
}
