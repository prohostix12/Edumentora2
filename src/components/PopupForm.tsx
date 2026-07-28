'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import EnquiryForm from '@/components/EnquiryForm';

export default function PopupForm() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    // Only open if it hasn't been opened before in this session or on admin routes
    if (hasOpened || pathname?.startsWith('/admin')) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasOpened(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [hasOpened, pathname]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Do not show popup on admin routes
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            {/* Modal */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl w-full max-w-lg relative border border-gray-100"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#172A53] mb-3">Start Your Journey</h2>
                <div className="w-16 h-1 bg-[#da251d] rounded-full mx-auto mb-3"></div>
                <p className="text-gray-600 text-sm">Fill out the form below and our academic advisors will get back to you shortly.</p>
              </div>
              
              <EnquiryForm className="space-y-5" isGrid={false} onSuccess={() => setIsOpen(false)} />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
