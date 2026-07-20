'use client';

import React from 'react';
import { ChevronDown, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between text-white max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-2">
        <BookOpen className="w-8 h-8" />
        <span className="text-2xl font-bold tracking-tight">eduMentora</span>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        <Link href="/" className="hover:text-red-200 transition-colors text-blue-900 font-semibold">Home</Link>
        <Link href="/" className="hover:text-red-200 transition-colors">B.Tech Credit Transfer</Link>
        
        <div className="group relative flex items-center gap-1 cursor-pointer hover:text-red-200 transition-colors">
          Programs <ChevronDown className="w-4 h-4" />
        </div>
        
        <Link href="/" className="hover:text-red-200 transition-colors">Universities</Link>
        
        <div className="group relative flex items-center gap-1 cursor-pointer hover:text-red-200 transition-colors">
          About <ChevronDown className="w-4 h-4" />
        </div>
        
        <Link href="/" className="hover:text-red-200 transition-colors">Contact</Link>
      </nav>

      <button className="hidden md:block px-6 py-2 border border-white rounded-full font-medium hover:bg-white hover:text-[#da251d] transition-colors">
        Call Now
      </button>
    </motion.header>
  );
}
