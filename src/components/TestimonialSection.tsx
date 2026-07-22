'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "9.E 33 Muji_o_d_7_",
      date: "1 year ago",
      text: "I had a great experience with edumentora",
      rating: 5,
    },
    {
      id: 2,
      name: "Aiswarya Raj",
      date: "2 months ago",
      text: "The best credit transfer agency in Kerala. The team is very supportive and helpful throughout the entire process.",
      rating: 5,
    },
    {
      id: 3,
      name: "Mohammed Shibil",
      date: "6 months ago",
      text: "Highly recommended! They made my B.Tech credit transfer process incredibly smooth and tension-free.",
      rating: 5,
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section className="w-full bg-[#172A53] py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16 lg:gap-24 overflow-visible items-center">
        
        {/* Left Content: Text */}
        <div className="w-full lg:w-1/2 text-white pt-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-8"
          >
            What Our Students Say<br />About Us!
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white text-base md:text-lg leading-relaxed max-w-lg"
          >
            At Edumentora, we're proud to support students in restarting and 
            completing their education with ease. Through trusted credit transfer 
            programs, our students achieve academic goals faster, more 
            affordably, and without unnecessary hurdles. Hear directly from those 
            who've experienced the journey.
          </motion.p>
        </div>

        {/* Right Content: Testimonial Card */}
        <div className="w-full lg:w-1/2 relative flex flex-col items-center justify-center pt-8 lg:pt-0">
          
          <div className="relative w-full max-w-lg">
            
            {/* The white card */}
            <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-xl relative">
              
              {/* Avatar overlapping top edge */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center border-4 border-white shadow-sm overflow-hidden">
                    <User className="w-8 h-8 text-gray-400" />
                  </div>
                  {/* Small Google 'G' icon badge */}
                  <div className="absolute bottom-0 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center border border-gray-100 font-bold text-[10px]">
                       <span className="text-blue-500">G</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 h-40 flex flex-col justify-center">
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-bold text-black text-lg">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      {testimonials[currentIndex].date}
                    </p>
                    
                    <div className="flex justify-center items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <div className="ml-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                         <span className="text-white text-[10px]">✓</span>
                      </div>
                    </div>
                    
                    <p className="text-black text-base font-medium">
                      "{testimonials[currentIndex].text}"
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
          </div>
          
          {/* Rating Info below the card */}
          <div className="mt-8 text-center">
             <p className="text-white font-semibold text-sm">
               Google rating score: 4.9 of 5, based on 120 reviews
             </p>
          </div>

        </div>
        
      </div>
    </section>
  );
}
