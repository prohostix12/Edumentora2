'use client';

import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Close mobile menu when route changes
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileOpenDropdown(null);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
      className="fixed top-0 left-0 right-0 z-50 h-20 min-h-20 bg-gray-100 shadow-md"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-8 text-black">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/edumentora_logo.webp"
            alt="eduMentora Logo"
            width={150}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav ref={navRef} className="hidden md:flex flex-1 shrink-0 items-center justify-center gap-8 whitespace-nowrap text-sm font-medium text-black">
          <Link href="/" className="hover:text-blue-600 transition-colors font-semibold">Home</Link>
          <Link href="/b-tech-credit-transfer" className="hover:text-blue-600 transition-colors">B.Tech Credit Transfer</Link>
          
          <div className="group relative flex items-center h-full">
            <button 
              onClick={(e) => { e.preventDefault(); setOpenDropdown(openDropdown === 'programs' ? null : 'programs'); }}
              className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors py-4 font-medium"
            >
              Programs <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'programs' ? 'rotate-180' : 'group-hover:rotate-180'}`} />
            </button>
            <div 
              className={`absolute top-12 left-0 w-[320px] whitespace-normal bg-white shadow-xl border border-gray-100 rounded-xl py-2 transition-all z-50 ${openDropdown === 'programs' ? 'block' : 'hidden group-hover:block'}`}
              onClick={() => setOpenDropdown(null)}
            >
              <div className="absolute -top-4 left-0 w-full h-4 bg-transparent" />
              <Link href="/credit-transfer" className="block px-5 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors leading-snug">Credit Transfer</Link>
              <Link href="/apprenticeship-program" className="block px-5 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors leading-snug">Apprenticeship Program</Link>
              <Link href="/work-integrated-learning-program" className="block px-5 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors leading-snug">Work with integrated learning program</Link>
            </div>
          </div>
          
          <Link href="/universities" className="hover:text-blue-600 transition-colors">Universities</Link>
          
          <div className="group relative flex items-center h-full">
            <button 
              onClick={(e) => { e.preventDefault(); setOpenDropdown(openDropdown === 'about' ? null : 'about'); }}
              className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors py-4 font-medium"
            >
              About <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'about' ? 'rotate-180' : 'group-hover:rotate-180'}`} />
            </button>
            <div 
              className={`absolute top-12 left-0 w-48 whitespace-normal bg-white shadow-xl border border-gray-100 rounded-xl py-2 transition-all z-50 ${openDropdown === 'about' ? 'block' : 'hidden group-hover:block'}`}
              onClick={() => setOpenDropdown(null)}
            >
              <div className="absolute -top-4 left-0 w-full h-4 bg-transparent" />
              <Link href="/about-us" className="block px-5 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">About us</Link>
              <Link href="/directors-message" className="block px-5 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Director's Message</Link>
              <Link href="/gallery" className="block px-5 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Gallery</Link>
              <Link href="/blog" className="block px-5 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Blog</Link>
            </div>
          </div>
          
          <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        </nav>

        <button className="hidden md:block shrink-0 px-6 py-2 border border-black rounded-full font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors text-black">
          Call Now
        </button>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex items-center justify-center p-2 text-gray-700 hover:text-blue-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-0 w-full bg-white shadow-2xl border-t border-gray-200 flex flex-col z-50 origin-top"
          >
            <div className="flex flex-col py-4 px-6 space-y-4 text-base font-medium text-gray-800">
              <Link href="/" onClick={closeMobileMenu} className="hover:text-blue-600 transition-colors pb-2 border-b border-gray-100">Home</Link>
              <Link href="/b-tech-credit-transfer" onClick={closeMobileMenu} className="hover:text-blue-600 transition-colors pb-2 border-b border-gray-100">B.Tech Credit Transfer</Link>
              
              <div className="pb-2 border-b border-gray-100">
                <button 
                  onClick={() => setMobileOpenDropdown(mobileOpenDropdown === 'programs' ? null : 'programs')}
                  className="flex items-center justify-between w-full hover:text-blue-600 transition-colors"
                >
                  Programs <ChevronDown className={`w-5 h-5 transition-transform ${mobileOpenDropdown === 'programs' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileOpenDropdown === 'programs' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.15 }}
                      className="flex flex-col pl-4 mt-3 space-y-3 text-sm text-gray-600 border-l-2 border-blue-100 overflow-hidden"
                    >
                      <Link href="/credit-transfer" onClick={closeMobileMenu} className="hover:text-blue-600">Credit Transfer</Link>
                      <Link href="/apprenticeship-program" onClick={closeMobileMenu} className="hover:text-blue-600">Apprenticeship Program</Link>
                      <Link href="/work-integrated-learning-program" onClick={closeMobileMenu} className="hover:text-blue-600">Work with integrated learning program</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <Link href="/universities" onClick={closeMobileMenu} className="hover:text-blue-600 transition-colors pb-2 border-b border-gray-100">Universities</Link>
              
              <div className="pb-2 border-b border-gray-100">
                <button 
                  onClick={() => setMobileOpenDropdown(mobileOpenDropdown === 'about' ? null : 'about')}
                  className="flex items-center justify-between w-full hover:text-blue-600 transition-colors"
                >
                  About <ChevronDown className={`w-5 h-5 transition-transform ${mobileOpenDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileOpenDropdown === 'about' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.15 }}
                      className="flex flex-col pl-4 mt-3 space-y-3 text-sm text-gray-600 border-l-2 border-blue-100 overflow-hidden"
                    >
                      <Link href="/about-us" onClick={closeMobileMenu} className="hover:text-blue-600">About us</Link>
                      <Link href="/directors-message" onClick={closeMobileMenu} className="hover:text-blue-600">Director's Message</Link>
                      <Link href="/gallery" onClick={closeMobileMenu} className="hover:text-blue-600">Gallery</Link>
                      <Link href="/blog" onClick={closeMobileMenu} className="hover:text-blue-600">Blog</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <Link href="/contact" onClick={closeMobileMenu} className="hover:text-blue-600 transition-colors pb-4">Contact</Link>
              
              <button className="w-full py-3 bg-[#da251d] text-white rounded-xl font-bold tracking-wide shadow-md">
                Call Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
