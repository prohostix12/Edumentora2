'use client';

import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'B.Tech Credit Transfer', href: '/b-tech-credit-transfer' },
  { name: 'Programmes', href: '/programs' },
  { name: 'Universities', href: '/universities' },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
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
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileOpenDropdown(null);
  };

  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false;
    return pathname?.startsWith(path);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 w-full flex justify-center pointer-events-none font-[Poppins]">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`pointer-events-auto w-full max-w-7xl h-[82px] flex items-center justify-between px-6 md:px-8 transition-all duration-300 rounded-[18px] ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100' 
            : 'bg-white shadow-sm border border-transparent'
        }`}
      >
        <Link 
          href="/" 
          className="flex shrink-0 items-center"
          onDoubleClick={(e) => {
            e.preventDefault();
            router.push('/admin');
          }}
        >
          <img
            src="/edumentora_logo.webp"
            alt="eduMentora Logo"
            className="w-auto h-[40px] object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav ref={navRef} className="hidden lg:flex flex-1 items-center justify-center gap-8 whitespace-nowrap text-[15px] font-medium text-gray-800">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="relative py-2 group"
            >
              <span className={`transition-colors duration-200 ${isActive(link.href) ? 'text-[#da251d]' : 'hover:text-[#da251d]'}`}>
                {link.name}
              </span>
              {/* Animated Underline */}
              <span className={`absolute left-0 bottom-0 h-[2px] bg-[#da251d] transition-all duration-300 ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
          
          <div 
            className="group relative flex items-center h-full"
            onMouseEnter={() => setOpenDropdown('about')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button 
              onClick={(e) => { e.preventDefault(); setOpenDropdown(openDropdown === 'about' ? null : 'about'); }}
              className={`relative flex items-center gap-1 cursor-pointer py-2 group ${openDropdown === 'about' ? 'text-[#da251d]' : 'hover:text-[#da251d] transition-colors duration-200'}`}
            >
              About <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'about' ? 'rotate-180' : 'group-hover:rotate-180'}`} />
            </button>
            <AnimatePresence>
              {(openDropdown === 'about' || false) && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-12 left-1/2 -translate-x-1/2 w-48 bg-white shadow-[0_10px_40px_rgb(0,0,0,0.1)] border border-gray-100 rounded-[16px] py-2 z-50 overflow-hidden"
                  onClick={() => setOpenDropdown(null)}
                >
                  <Link href="/about-us" className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#da251d] transition-colors">About us</Link>
                  <Link href="/gallery" className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#da251d] transition-colors">Gallery</Link>
                  <Link href="/blog" className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#da251d] transition-colors">Blog</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <Link href="/contact" className="relative py-2 group">
            <span className={`transition-colors duration-200 ${isActive('/contact') ? 'text-[#da251d]' : 'hover:text-[#da251d]'}`}>
              Contact
            </span>
            <span className={`absolute left-0 bottom-0 h-[2px] bg-[#da251d] transition-all duration-300 ${isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link href="/contact" className="hidden lg:flex shrink-0 items-center justify-center px-6 py-2.5 bg-[#da251d] text-white font-medium rounded-full shadow-[0_4px_14px_0_rgba(218,37,29,0.39)] hover:shadow-[0_6px_20px_rgba(218,37,29,0.23)] hover:bg-red-700 hover:-translate-y-0.5 transition-all duration-200">
          Enquire Now
        </Link>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden flex items-center justify-center p-2 text-gray-700 hover:text-[#da251d] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden pointer-events-auto absolute top-24 left-4 right-4 bg-white shadow-[0_20px_40px_rgb(0,0,0,0.1)] rounded-[20px] border border-gray-100 flex flex-col z-50 overflow-hidden"
          >
            <div className="flex flex-col py-4 px-6 space-y-2 text-base font-medium text-gray-800 h-max max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={closeMobileMenu} className={`py-3 transition-colors border-b border-gray-50 ${isActive(link.href) ? 'text-[#da251d]' : 'hover:text-[#da251d]'}`}>
                  {link.name}
                </Link>
              ))}
              
              <div className="py-2 border-b border-gray-50">
                <button 
                  onClick={() => setMobileOpenDropdown(mobileOpenDropdown === 'about' ? null : 'about')}
                  className="flex items-center justify-between w-full py-2 hover:text-[#da251d] transition-colors"
                >
                  About <ChevronDown className={`w-5 h-5 transition-transform ${mobileOpenDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileOpenDropdown === 'about' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col pl-4 mt-2 space-y-3 text-sm text-gray-600 border-l-2 border-red-100 overflow-hidden"
                    >
                      <Link href="/about-us" onClick={closeMobileMenu} className="hover:text-[#da251d] transition-colors py-1">About us</Link>
                      <Link href="/gallery" onClick={closeMobileMenu} className="hover:text-[#da251d] transition-colors py-1">Gallery</Link>
                      <Link href="/blog" onClick={closeMobileMenu} className="hover:text-[#da251d] transition-colors py-1">Blog</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <Link href="/contact" onClick={closeMobileMenu} className={`py-3 transition-colors ${isActive('/contact') ? 'text-[#da251d]' : 'hover:text-[#da251d]'}`}>
                Contact
              </Link>
              
              <Link href="/contact" onClick={closeMobileMenu} className="flex items-center justify-center mt-4 w-full px-6 py-3 bg-[#da251d] text-white font-medium rounded-xl shadow-md hover:bg-red-700 transition-colors">
                Enquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
