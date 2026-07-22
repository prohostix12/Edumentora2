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
  {
    title: 'Empowering students through credit transfer',
    description:
      'Resume your education with the Best Academic Credit Transfer institution in Kerala. Recognizing credits and saving time and cost to achieve your academic goals.',
  },
];

const TITLE_TYPE_SPEED = 90;
const DESC_TYPE_SPEED = 35;
const TITLE_ERASE_SPEED = 45;
const DESC_ERASE_SPEED = 18;
const HOLD_TIME = 5000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [typedTitle, setTypedTitle] = useState('');
  const [typedDescription, setTypedDescription] = useState('');

  useEffect(() => {
    const { title, description } = heroContent[index];
    setTypedTitle('');
    setTypedDescription('');

    let titleChars = 0;
    let descChars = 0;
    let titleTyped = false;
    let descTyped = false;
    let titleErased = false;
    let descErased = false;

    let holdTimer: ReturnType<typeof setTimeout>;
    let eraseTitleTimer: ReturnType<typeof setInterval>;
    let eraseDescTimer: ReturnType<typeof setInterval>;

    const goToNext = () => {
      if (titleErased && descErased) {
        setIndex((prev) => (prev + 1) % heroContent.length);
      }
    };

    const startErasing = () => {
      let titleLen = title.length;
      let descLen = description.length;

      eraseTitleTimer = setInterval(() => {
        titleLen -= 1;
        setTypedTitle(title.slice(0, Math.max(titleLen, 0)));

        if (titleLen <= 0) {
          clearInterval(eraseTitleTimer);
          titleErased = true;
          goToNext();
        }
      }, TITLE_ERASE_SPEED);

      eraseDescTimer = setInterval(() => {
        descLen -= 1;
        setTypedDescription(description.slice(0, Math.max(descLen, 0)));

        if (descLen <= 0) {
          clearInterval(eraseDescTimer);
          descErased = true;
          goToNext();
        }
      }, DESC_ERASE_SPEED);
    };

    const maybeStartHold = () => {
      if (titleTyped && descTyped) {
        holdTimer = setTimeout(startErasing, HOLD_TIME);
      }
    };

    const titleTimer = setInterval(() => {
      titleChars += 1;
      setTypedTitle(title.slice(0, titleChars));

      if (titleChars >= title.length) {
        clearInterval(titleTimer);
        titleTyped = true;
        maybeStartHold();
      }
    }, TITLE_TYPE_SPEED);

    const descTimer = setInterval(() => {
      descChars += 1;
      setTypedDescription(description.slice(0, descChars));

      if (descChars >= description.length) {
        clearInterval(descTimer);
        descTyped = true;
        maybeStartHold();
      }
    }, DESC_TYPE_SPEED);

    return () => {
      clearInterval(titleTimer);
      clearInterval(descTimer);
      clearTimeout(holdTimer);
      clearInterval(eraseTitleTimer);
      clearInterval(eraseDescTimer);
    };
  }, [index]);

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
    <section className="relative w-full h-auto bg-[#da251d] overflow-hidden flex items-center py-24">
      <div className="max-w-7xl mx-auto w-full px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-white space-y-8 z-10"
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
                className="inline-block w-[0.06em] ml-1 -mb-1 h-[0.85em] bg-white align-middle"
              />
            </h1>
          </div>
          <div className="grid">
            {heroContent.map((content, i) => (
              <p
                key={`desc-ghost-${i}`}
                aria-hidden
                className="invisible [grid-area:1/1] text-lg md:text-xl text-white/90 max-w-xl leading-relaxed"
              >
                {content.description}
              </p>
            ))}
            <p className="[grid-area:1/1] text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
              {typedDescription}
              <motion.span
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                className="inline-block w-[0.05em] ml-1 -mb-0.5 h-[0.9em] bg-white/90 align-middle"
              />
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative w-full flex items-end justify-center md:justify-end z-10 mt-auto self-end -mb-24"
        >
          <Image 
            src="/Hero-image.png"
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
