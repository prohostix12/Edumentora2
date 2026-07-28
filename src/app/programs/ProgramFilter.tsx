'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

type Program = {
  id: string;
  topic: string;
  heroImage: string | null;
  heading: string;
  subHeading: string | null;
  paragraph: string;
  blocks: any[];
};

// ─── Mini Components ──────────────────────────────────────────────────────────

function SectionDivider() {
  return (
    <div className="flex items-center gap-3 my-2">
      <div className="w-10 h-1 bg-[#da251d] rounded-full" />
      <div className="w-4 h-1 bg-[#da251d]/40 rounded-full" />
    </div>
  );
}

function TextBlock({ block, bIndex }: { block: any; bIndex: number }) {
  return (
    <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm">
      <h3 className="text-2xl md:text-3xl font-bold text-[#172A53] mb-2">{block.heading}</h3>
      <SectionDivider />
      {block.paragraph && (
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4 whitespace-pre-line">
          {block.paragraph}
        </p>
      )}
    </div>
  );
}

function CardsBlock({ block, bIndex }: { block: any; bIndex: number }) {
  const count = block.cards?.length ?? 0;
  const gridCols =
    count === 1
      ? 'grid-cols-1 max-w-xl mx-auto'
      : count === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : count === 4
      ? 'grid-cols-1 sm:grid-cols-2'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-[#172A53] mb-2">{block.heading}</h3>
        <SectionDivider />
        {block.paragraph && (
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
            {block.paragraph}
          </p>
        )}
      </div>

      <div className={`grid ${gridCols} gap-6`}>
        {block.cards.map((card: any, cIndex: number) => (
          <div
            key={cIndex}
            className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-[#172A53] hover:shadow-lg transition-all duration-300 relative overflow-hidden"
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#da251d] to-[#172A53] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            {/* Card number */}
            <div className="w-10 h-10 rounded-xl bg-[#172A53]/8 flex items-center justify-center mb-4">
              <span className="text-[#172A53] font-extrabold text-sm">{String(cIndex + 1).padStart(2, '0')}</span>
            </div>
            <h4 className="text-lg md:text-xl font-bold text-[#172A53] mb-3">{card.cardHeading}</h4>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">{card.cardPara}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArrowsBlock({ block, bIndex }: { block: any; bIndex: number }) {
  return (
    <div>
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-[#172A53] mb-2">{block.heading}</h3>
        <SectionDivider />
        {block.paragraph && (
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
            {block.paragraph}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {block.points.map((point: any, pIndex: number) => (
          <div
            key={pIndex}
            className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-[#172A53]/40 hover:shadow-md transition-all duration-300"
          >
            {point.pointHeading && (
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-[#da251d] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">{pIndex + 1}</span>
                </div>
                <h4 className="text-lg font-bold text-[#172A53]">{point.pointHeading}</h4>
              </div>
            )}
            <ul className="space-y-3">
              {point.pointList.map((item: string, lIndex: number) => (
                <li key={lIndex} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#172A53]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#172A53] font-bold" style={{ fontSize: '10px' }}>→</span>
                  </div>
                  <span className="text-gray-700 leading-relaxed text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function ProgramFilter({ programs }: { programs: Program[] }) {
  const [activeTopic, setActiveTopic] = useState<string>('All');

  const topics = useMemo(() => {
    const uniqueTopics = new Set<string>();
    programs.forEach((p) => uniqueTopics.add(p.topic));
    return ['All', ...Array.from(uniqueTopics)];
  }, [programs]);

  const filteredPrograms = useMemo(() => {
    if (activeTopic === 'All') return programs;
    return programs.filter((p) => p.topic === activeTopic);
  }, [programs, activeTopic]);

  if (programs.length === 0) {
    return (
      <div className="py-32 text-center text-gray-500 bg-gray-50">
        <div className="inline-block p-6 bg-white rounded-2xl shadow-sm border border-gray-100 mb-6">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
            <span className="text-3xl">📚</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-[#172A53] mb-3">No Programs Available</h2>
        <p className="text-gray-500">Please add programs from the Admin Panel.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50">

      {/* ── FILTER BAR ─────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-200 sticky top-[76px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setActiveTopic(topic)}
                className={`px-5 md:px-7 py-2 md:py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeTopic === topic
                    ? 'bg-[#172A53] text-white shadow-md shadow-[#172A53]/20 scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-[#172A53]/10 hover:text-[#172A53]'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROGRAMS LIST ───────────────────────────────────────────── */}
      {filteredPrograms.length === 0 ? (
        <div className="text-center text-gray-500 py-24">
          <p className="text-lg">No programs found for this topic.</p>
        </div>
      ) : (
        <div className="divide-y divide-gray-200">
          {filteredPrograms.map((program, index) => (
            <div key={program.id} className="w-full bg-white">

              {/* ── PROGRAM INTRO HERO ─────────────────────────────── */}
              <div
                className={`max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-10 lg:gap-16 items-center`}
              >
                {/* Image */}
                {program.heroImage && (
                  <div className="w-full lg:w-5/12 flex-shrink-0">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group aspect-[4/3]">
                      <img
                        src={program.heroImage}
                        alt={program.heading}
                        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Topic badge on image */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-[#172A53] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg backdrop-blur-sm">
                          {program.topic}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Text Content */}
                <div className={`w-full ${program.heroImage ? 'lg:w-7/12' : 'lg:w-full max-w-4xl mx-auto'}`}>
                  {/* Topic pill (shown when no image) */}
                  {!program.heroImage && (
                    <span className="inline-block px-4 py-1.5 bg-[#172A53]/8 text-[#172A53] font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                      {program.topic}
                    </span>
                  )}

                  {program.subHeading && (
                    <p className="text-[#da251d] font-bold text-sm md:text-base uppercase tracking-widest mb-3">
                      {program.subHeading}
                    </p>
                  )}

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#172A53] leading-tight mb-4">
                    {program.heading}
                  </h2>

                  <div className="w-12 h-1 bg-[#da251d] rounded-full mb-6" />

                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                    {program.paragraph}
                  </p>

                  <Link
                    href="/about-us"
                    className="inline-flex items-center gap-2 bg-[#da251d] hover:bg-[#172A53] text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 group text-base"
                  >
                    Know More
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>

              {/* ── DYNAMIC BLOCKS ─────────────────────────────────── */}
              {program.blocks && program.blocks.length > 0 && (
                <div className="bg-gray-50 border-t border-gray-100">
                  <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20 space-y-12 md:space-y-16">
                    {program.blocks.map((block: any, bIndex: number) => {
                      if (block.type === 'text') {
                        return <TextBlock key={bIndex} block={block} bIndex={bIndex} />;
                      }
                      if (block.type === 'cards') {
                        return <CardsBlock key={bIndex} block={block} bIndex={bIndex} />;
                      }
                      if (block.type === 'arrows') {
                        return <ArrowsBlock key={bIndex} block={block} bIndex={bIndex} />;
                      }
                      return null;
                    })}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>
      )}

    </div>
  );
}
