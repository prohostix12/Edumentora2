'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function MissionVisionSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-[30px] pb-24 relative">
      
      <div className="relative w-full flex flex-col lg:flex-row items-center">
        
        {/* Rope-textured frame around the paper box, shaded to read as a rolled/coiled rope tube */}
        <div
          className="relative w-full rounded-[46px] p-2 md:p-2.5"
          style={{
            backgroundColor: '#7a5230',
            backgroundImage:
              'repeating-linear-gradient(48deg, rgba(255,235,205,0.45) 0px, rgba(255,235,205,0.45) 3px, transparent 3px, transparent 9px, rgba(0,0,0,0.35) 9px, rgba(0,0,0,0.35) 12px, transparent 12px, transparent 18px)',
            boxShadow:
              'inset 0 5px 6px rgba(255,235,205,0.45), inset 0 -6px 8px rgba(0,0,0,0.55), inset 5px 0 6px rgba(255,235,205,0.25), inset -5px 0 8px rgba(0,0,0,0.45), 0 10px 24px rgba(0,0,0,0.3)',
          }}
        >
        {/* Blue Box (Text Content) */}
        <div className="relative overflow-hidden bg-[#e8dcc0] rounded-[38px] w-full p-10 md:p-16 text-[#3b3226] z-0">
          {/* crackled paper texture - crack veins */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply"
            style={{
              backgroundImage:
                "repeating-linear-gradient(12deg, transparent 0px, transparent 38px, rgba(0,0,0,0.35) 39px, transparent 41px, transparent 90px), repeating-linear-gradient(102deg, transparent 0px, transparent 55px, rgba(0,0,0,0.3) 56px, transparent 58px, transparent 130px), repeating-linear-gradient(165deg, transparent 0px, transparent 47px, rgba(0,0,0,0.28) 48px, transparent 50px, transparent 110px)",
            }}
          />
          {/* crackled paper texture - fine grain */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30 mix-blend-multiply"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' seed='7'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.3 0 0 0 0 0.25 0 0 0 0 0.15 0 0 0 0.5 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              backgroundSize: '300px 300px',
            }}
          />
          {/* subtle vignette to deepen edges like an aged sheet */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(120% 100% at 50% 50%, transparent 55%, rgba(0,0,0,0.12) 100%)',
            }}
          />

          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#2b2418]">
              Empowering students<br className="hidden md:block"/>through credit transfer
            </h2>

            <p className="text-[#3b3226]/90 text-sm md:text-base leading-relaxed max-w-2xl">
              Resume your graduation or postgraduate education through Edumentora, a leading academic credit transfer institution. Transfer earned credits for B. Tech, engineering, and other programs to recognized universities, saving time and costs while achieving academic success.
            </p>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-[#2b2418]">Our Mission</h3>
              <p className="text-[#3b3226]/90 text-sm md:text-base leading-relaxed max-w-2xl">
                In EduMentora Our Mission is to help students overcome academic setbacks by facilitating seamless credit transfers to accredited universities for successful completion.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-[#2b2418]">Our Vision</h3>
              <p className="text-[#3b3226]/90 text-sm md:text-base leading-relaxed max-w-2xl">
                In EduMentora Our Vision is to bright create a future where every student can complete their education without barriers through recognized credit transfer programs.
              </p>
            </div>
          </div>
        </div>
        </div>

        {/* hanging magnifying glass, swinging left to right - rope and lens are one continuous SVG so they can never appear to separate, kept outside the box's overflow-hidden so it never gets clipped */}
        <motion.div
          aria-hidden
          style={{ transformOrigin: 'top center' }}
          animate={{ rotate: [-18, 18, -18] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute top-0 right-6 sm:right-12 md:right-16 lg:right-24 z-20 hidden sm:block"
        >
          <svg
            viewBox="0 0 140 440"
            className="w-20 h-56 sm:w-28 sm:h-72 md:w-36 md:h-[26rem] lg:w-40 lg:h-[30rem]"
            fill="none"
          >
            <line x1="70" y1="0" x2="70" y2="270" stroke="#3b3226" strokeOpacity="0.5" strokeWidth="4" />
            <circle cx="70" cy="330" r="60" stroke="#3b3226" strokeWidth="3" fill="rgba(255,255,255,0.15)" />
            <line x1="112" y1="372" x2="134" y2="394" stroke="#3b3226" strokeWidth="14" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* boy standing at the bottom, looking up at the hanging lens handle, eyes tracking the swing */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-8 sm:right-14 md:right-20 lg:right-28 z-20 hidden sm:block"
        >
          <svg
            viewBox="0 0 160 260"
            className="w-12 h-20 sm:w-14 sm:h-24 md:w-16 md:h-28 lg:w-20 lg:h-32"
            fill="none"
          >
            {/* ground shadow */}
            <ellipse cx="80" cy="248" rx="38" ry="8" fill="#000000" opacity="0.15" />

            {/* legs */}
            <rect x="45" y="168" width="20" height="62" rx="8" fill="#172A53" />
            <rect x="95" y="168" width="20" height="62" rx="8" fill="#172A53" />

            {/* shoes */}
            <ellipse cx="55" cy="234" rx="15" ry="8" fill="#2b2418" />
            <ellipse cx="105" cy="234" rx="15" ry="8" fill="#2b2418" />

            {/* body/shirt */}
            <rect x="38" y="84" width="84" height="88" rx="22" fill="#da251d" />

            {/* arms hanging at sides */}
            <rect x="22" y="92" width="16" height="60" rx="8" fill="#f2c29c" />
            <rect x="122" y="92" width="16" height="60" rx="8" fill="#f2c29c" />

            {/* book held at chest height, forgotten mid-read while looking up */}
            <g>
              <rect x="48" y="128" width="64" height="26" rx="3" fill="#f4ecd8" stroke="#3b3226" strokeWidth="2" />
              <line x1="80" y1="128" x2="80" y2="154" stroke="#3b3226" strokeWidth="2" />
              <line x1="54" y1="136" x2="74" y2="136" stroke="#a89a80" strokeWidth="1.5" />
              <line x1="54" y1="143" x2="74" y2="143" stroke="#a89a80" strokeWidth="1.5" />
              <line x1="54" y1="150" x2="70" y2="150" stroke="#a89a80" strokeWidth="1.5" />
              <line x1="86" y1="136" x2="106" y2="136" stroke="#a89a80" strokeWidth="1.5" />
              <line x1="86" y1="143" x2="106" y2="143" stroke="#a89a80" strokeWidth="1.5" />
              <line x1="86" y1="150" x2="102" y2="150" stroke="#a89a80" strokeWidth="1.5" />
            </g>

            {/* head group - stays still, looking up; only the eyes track the lens as it swings */}
            <g>
              {/* neck */}
              <rect x="72" y="68" width="16" height="18" fill="#f2c29c" />

              {/* head */}
              <circle cx="80" cy="42" r="32" fill="#f2c29c" stroke="#3b3226" strokeWidth="3" />

              {/* hair */}
              <path d="M48,40 Q80,2 112,40" stroke="#2b2418" strokeWidth="16" fill="none" strokeLinecap="round" />

              {/* eyebrows raised in awe */}
              <path d="M60,26 Q67,20 74,25" stroke="#2b2418" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M86,25 Q93,20 100,26" stroke="#2b2418" strokeWidth="3" fill="none" strokeLinecap="round" />

              {/* eyes - whites stay fixed, pupils track the lens swinging left to right */}
              <ellipse cx="68" cy="35" rx="6" ry="5" fill="white" stroke="#3b3226" strokeWidth="1.5" />
              <ellipse cx="92" cy="35" rx="6" ry="5" fill="white" stroke="#3b3226" strokeWidth="1.5" />
              <motion.circle
                cy="32.5"
                r="2.6"
                fill="#2b2418"
                animate={{ cx: [74.5, 66.5, 74.5] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.circle
                cy="32.5"
                r="2.6"
                fill="#2b2418"
                animate={{ cx: [98.5, 90.5, 98.5] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* mouth open in wonder */}
              <circle cx="80" cy="54" r="4" fill="#2b2418" />
            </g>
          </svg>
        </div>

      </div>

    </section>
  );
}
