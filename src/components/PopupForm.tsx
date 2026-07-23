'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    // Only open if it hasn't been opened before in this session
    if (hasOpened) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasOpened(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [hasOpened]);

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
              
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="popup-name" className="text-xs font-semibold text-gray-700">Full Name</label>
                    <input type="text" id="popup-name" placeholder="John Doe" className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white" required />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="popup-phone" className="text-xs font-semibold text-gray-700">Phone Number</label>
                    <input type="tel" id="popup-phone" placeholder="+91 98765 43210" className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white" required />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="popup-email" className="text-xs font-semibold text-gray-700">Email Address</label>
                  <input type="email" id="popup-email" placeholder="john@example.com" className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white" required />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="popup-message" className="text-xs font-semibold text-gray-700">Message</label>
                  <textarea id="popup-message" rows={3} placeholder="How can we help you?" className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white resize-none" required></textarea>
                </div>

                <button type="submit" className="w-full bg-[#172A53] hover:bg-[#111f3d] text-white font-bold py-3 text-sm rounded-xl transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200 mt-2">
                  Send Message
                </button>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
