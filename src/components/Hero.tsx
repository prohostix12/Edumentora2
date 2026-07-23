'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const heroContent = [
  {
    title: 'Empowering Students Through Academic Credit Transfer',
    description:
      "Transfer your academic credits seamlessly through Kerala's trusted education partner. Achieve your educational goals with recognized institutions and expert guidance.",
  },
];

const TITLE_TYPE_SPEED = 90;
const DESC_TYPE_SPEED = 35;

export default function Hero() {
  const index = 0;
  const [typedTitle, setTypedTitle] = useState('');
  const [typedDescription, setTypedDescription] = useState('');
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const { title, description } = heroContent[index];

    let titleChars = 0;
    let descChars = 0;
    let titleDone = false;
    let descDone = false;

    const maybeFinish = () => {
      if (titleDone && descDone) {
        setTypingDone(true);
      }
    };

    const titleTimer = setInterval(() => {
      titleChars += 1;
      setTypedTitle(title.slice(0, titleChars));

      if (titleChars >= title.length) {
        clearInterval(titleTimer);
        titleDone = true;
        maybeFinish();
      }
    }, TITLE_TYPE_SPEED);

    const descTimer = setInterval(() => {
      descChars += 1;
      setTypedDescription(description.slice(0, descChars));

      if (descChars >= description.length) {
        clearInterval(descTimer);
        descDone = true;
        maybeFinish();
      }
    }, DESC_TYPE_SPEED);

    return () => {
      clearInterval(titleTimer);
      clearInterval(descTimer);
    };
  }, []);

  const highlightTransfer = (text: string, fullText: string) => {
    const match = fullText.match(/transfer/i);
    if (!match || match.index === undefined) return text;
    
    const startIndex = match.index;
    const endIndex = startIndex + match[0].length;
    
    if (text.length <= startIndex) {
      return text;
    }
    
    if (text.length > endIndex) {
      return (
        <>
          {text.slice(0, startIndex)}
          <span className="text-yellow-500">{text.slice(startIndex, endIndex)}</span>
          {text.slice(endIndex)}
        </>
      );
    }
    
    return (
      <>
        {text.slice(0, startIndex)}
        <span className="text-yellow-500">{text.slice(startIndex)}</span>
      </>
    );
  };

  return (
    <section className="relative w-full h-auto bg-[rgb(240,240,228)] overflow-hidden flex items-center py-24">
      <div className="absolute inset-0 opacity-[0.03] bg-repeat bg-center pointer-events-none" style={{ backgroundImage: "url('/about-bg.png')", backgroundSize: "120px" }}></div>

      <div className="relative max-w-7xl mx-auto w-full px-8 grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-[#da251d] space-y-8 z-10"
        >
          <div className="grid">
            {heroContent.map((content, i) => (
              <h1
                key={`title-ghost-${i}`}
                aria-hidden
                className="invisible [grid-area:1/1] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              >
                {highlightTransfer(content.title, content.title)}
              </h1>
            ))}
            <h1 className="[grid-area:1/1] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              {highlightTransfer(typedTitle, heroContent[index].title)}
              <motion.span
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                className="inline-block w-[0.06em] ml-1 -mb-1 h-[0.85em] bg-[#da251d] align-middle"
              />
            </h1>
          </div>
          <div className="grid">
            {heroContent.map((content, i) => (
              <p
                key={`desc-ghost-${i}`}
                aria-hidden
                className="invisible [grid-area:1/1] text-lg md:text-xl text-[#172A53]/90 max-w-xl leading-relaxed"
              >
                {content.description}
              </p>
            ))}
            <p className="[grid-area:1/1] text-lg md:text-xl text-[#172A53]/90 max-w-xl leading-relaxed">
              {typedDescription}
              <motion.span
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                className="inline-block w-[0.05em] ml-1 -mb-0.5 h-[0.9em] bg-[#172A53]/90 align-middle"
              />
            </p>
          </div>

          {typingDone && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-1.5"
              aria-hidden
            >
              {[0, 1, 2].map((dot) => (
                <motion.span
                  key={dot}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: dot * 0.2, ease: 'easeInOut' }}
                  className="inline-block w-2 h-2 rounded-full bg-[#da251d]"
                />
              ))}
            </motion.div>
          )}
        </motion.div>

        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative w-full flex items-end justify-center md:justify-end z-10 mt-auto self-end -mb-24"
        >
          <Image 
            src="/Hero-image.webp"
            alt="Smiling student giving thumbs up"
            width={640}
            height={822}
            className="attachment-large size-large wp-image-3473 object-contain object-bottom max-w-full h-auto"
            sizes="(max-width: 640px) 100vw, 640px"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
