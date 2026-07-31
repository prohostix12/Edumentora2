import React from 'react';
import PageBanner from '@/components/PageBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic';

export default async function Page() {
  const galleries = await prisma.gallery.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <main className="min-h-screen bg-white pt-24 font-[Poppins]">
      <Header />
      
      {/* Unified Hero Section */}
      <div className="w-full bg-[#172A53] relative overflow-hidden">
        {/* Background Image Overlay matching B-Tech/Programs page */}
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/edumentora%20bg%20image.png')" }}></div>
        
        <div className="w-full pt-24 pb-24 relative z-10 max-w-7xl mx-auto text-center px-6 md:px-12">
          <div className="inline-block px-4 py-1.5 bg-white/10 text-[#F9B03C] font-bold tracking-wider uppercase rounded-full mb-6 text-xs border border-white/20 backdrop-blur-md">
            Moments & Memories
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight font-[Poppins]">
            Gallery
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Explore beautiful moments, events, and milestones from our vibrant community.
          </p>
        </div>
      </div>

      <div className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {galleries.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900">No photos yet</h3>
              <p className="mt-2 text-gray-500">Check back later for new additions to our gallery.</p>
            </div>
          ) : (
            <div className="space-y-24">
              {galleries.map((gallery) => (
                <section key={gallery.id} className="scroll-mt-24">
                  <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl font-bold text-[#172A53] relative inline-block">
                      {gallery.section}
                      <span className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-[#F9B03C] rounded-full"></span>
                    </h2>
                    <span className="text-sm font-semibold text-[#172A53] bg-[#F9B03C]/20 px-4 py-1.5 rounded-full">
                      {gallery.images.length} Photos
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[250px]">
                    {gallery.images.map((image, index) => {
                      // Create a dynamic, repeating pattern for the collage
                      const pos = index % 7;
                      let spanClasses = 'col-span-1 row-span-1';
                      if (pos === 1) spanClasses = 'col-span-2 row-span-2'; // Make the 2nd image the large one instead
                      else if (pos === 3) spanClasses = 'col-span-2 row-span-1';
                      else if (pos === 5) spanClasses = 'col-span-1 row-span-2';

                      return (
                        <div 
                          key={index}
                          className={`relative rounded-3xl overflow-hidden group shadow-sm hover:shadow-2xl transition-shadow duration-500 cursor-pointer ${spanClasses}`}
                        >
                          {/* Image */}
                          <img
                            src={image}
                            alt={`${gallery.section} photo ${index + 1}`}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                            loading="lazy"
                          />
                          
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Animated Border */}
                          <div className="absolute inset-3 md:inset-4 border-2 border-white/80 opacity-0 scale-105 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out rounded-xl md:rounded-2xl pointer-events-none z-10"></div>
                          
                          {/* Corner Accents on Hover */}
                          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#F9B03C] opacity-0 -translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-20 pointer-events-none rounded-tl-3xl"></div>
                          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#F9B03C] opacity-0 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-20 pointer-events-none rounded-br-3xl"></div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          )}
        </div>
      </div>
<Footer />
      <FloatingWhatsApp />
    </main>
  );
}
