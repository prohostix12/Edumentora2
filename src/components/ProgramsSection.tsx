'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, GraduationCap, Settings2, LucideIcon } from 'lucide-react';

const cards: {
  Icon: LucideIcon;
  color: string;
  iconBg: string;
  title: React.ReactNode;
  desc: string;
}[] = [
  {
    Icon: BriefcaseBusiness,
    color: 'text-blue-500',
    iconBg: 'bg-blue-50',
    title: <>Credit Transfer<br />Program</>,
    desc: 'Transfer your past credits to complete your degree faster with Edumentora.',
  },
  {
    Icon: GraduationCap,
    color: 'text-orange-500',
    iconBg: 'bg-orange-50',
    title: <>Apprenticeship<br />Program</>,
    desc: 'Study while gaining real work experience through Industry training.',
  },
  {
    Icon: Settings2,
    color: 'text-yellow-500',
    iconBg: 'bg-yellow-50',
    title: <>Work Integrated<br />Learn Program</>,
    desc: 'Learn theory and apply it practically for a career-ready education.',
  },
];

// slot 0 = left, slot 1 = right-bottom, slot 2 = right-top
// each card's starting slot at tick 0, matching the original layout
const startSlot = [0, 2, 1];

function ProgramCard({ card, iconOnly }: { card: typeof cards[number]; iconOnly?: boolean }) {
  const { Icon } = card;
  return (
    <div
      className={`bg-white rounded-[32px] p-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 h-[240px] flex flex-col justify-center ${iconOnly ? 'items-center' : ''}`}
    >
      <div
        className={`${iconOnly ? 'w-28 h-28' : 'w-14 h-14 mb-4'} ${card.iconBg} rounded-2xl flex items-center justify-center shrink-0`}
      >
        <Icon className={`${iconOnly ? 'w-16 h-16' : 'w-7 h-7'} ${card.color}`} />
      </div>
      {!iconOnly && (
        <div className="flex-1 overflow-hidden flex flex-col justify-start">
          <h3 className="text-xl md:text-2xl font-bold text-black mb-2 leading-tight">
            {card.title}
          </h3>
          <p className="text-gray-500 text-sm md:text-base leading-snug">
            {card.desc}
          </p>
        </div>
      )}
    </div>
  );
}

function TravelingCard({ cardIdx, iconOnly }: { cardIdx: number; iconOnly?: boolean }) {
  const [isMoving, setIsMoving] = useState(false);

  return (
    <motion.div
      layoutId={`program-card-${cardIdx}`}
      layout
      onLayoutAnimationStart={() => setIsMoving(true)}
      onLayoutAnimationComplete={() => setIsMoving(false)}
      transition={{ type: 'spring', stiffness: 110, damping: 15, mass: 0.9 }}
      animate={{ scale: isMoving ? 1.06 : 1, rotate: isMoving ? -3 : 0 }}
      style={{ boxShadow: isMoving ? '0 25px 45px rgba(0,0,0,0.4)' : '0 0px 0px rgba(0,0,0,0)' }}
      className="rounded-[32px]"
    >
      <ProgramCard card={cards[cardIdx]} iconOnly={iconOnly} />
    </motion.div>
  );
}

export default function ProgramsSection() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => t + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // which card currently occupies each of the 3 slots
  const slotToCard: number[] = [0, 0, 0];
  cards.forEach((_, cardIdx) => {
    const slot = (startSlot[cardIdx] + tick) % 3;
    slotToCard[slot] = cardIdx;
  });

  const leftCardIdx = slotToCard[0];
  const leftCard = cards[leftCardIdx];

  return (
    <section className="w-full bg-[#da251d] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">

        {/* Left Column: Heading + the left card's title/description */}
        <div className="w-full lg:w-1/3 pt-10">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textShadow: '0 4px 10px rgba(0,0,0,0.35)' }}
            className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6 whitespace-nowrap"
          >
            Our Credit Transfer Programs
          </motion.h2>

          <motion.div
            key={leftCardIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-[80px]"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              {leftCard.title}
            </h2>
            <p className="text-white/80 text-xl leading-relaxed">
              {leftCard.desc}
            </p>
          </motion.div>
        </div>

        {/* Right Columns: Cards, physically traveling between the 3 slots */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          <div className="flex flex-col justify-center h-full">
            <TravelingCard cardIdx={slotToCard[0]} iconOnly />
          </div>

          <div className="flex flex-col gap-6">
            <TravelingCard cardIdx={slotToCard[2]} />
            <TravelingCard cardIdx={slotToCard[1]} />
          </div>
        </div>
      </div>
    </section>
  );
}
