import React from 'react';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';
import { ArrowRight } from 'lucide-react';
import HomeGalleryClient from './HomeGalleryClient';
import ScrollReveal from './ScrollReveal';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default async function HomeGallerySection() {
  // Fetch latest galleries
  const galleries = await prisma.gallery.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  // Flatten images and take up to 8
  const allImages = galleries.flatMap(g => g.images).slice(0, 8);

  if (allImages.length === 0) {
    return null; // Don't show the section if no images exist
  }

  // If there are not enough images to form a cylinder (e.g. less than 4),
  // we could duplicate them to ensure the cylinder looks right.
  let displayImages = allImages;
  if (displayImages.length > 0 && displayImages.length < 5) {
    while (displayImages.length < 5) {
      displayImages = [...displayImages, ...allImages].slice(0, 8);
    }
  }

  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text and Button */}
        <div className="text-left flex flex-col items-start justify-center">
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center justify-center space-x-2 bg-gray-50 px-4 py-2 rounded-full mb-4 border border-gray-100">
              <span className="w-2 h-2 rounded-full bg-[#da251d] animate-pulse"></span>
              <span className="text-[#172A53] font-semibold text-sm tracking-wider uppercase">Campus Life</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#172A53] tracking-tight mb-4">
              Our Gallery
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div className="w-24 h-1.5 bg-[#da251d] rounded-full mb-6"></div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <p className="text-gray-600 text-lg md:text-xl max-w-xl mb-8">
              Discover the vibrant moments and memories captured at Edumentora.
            </p>
          </ScrollReveal>

          {/* Explore More Button */}
          <ScrollReveal delay={0.5}>
            <Link 
              href="/gallery" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#172A53] text-white font-bold rounded-xl hover:bg-[#111f3d] transition-all hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              <span>Explore More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Right Side: 3D Cylinder Gallery */}
        <ScrollReveal delay={0.6} className="w-full flex justify-center">
           <HomeGalleryClient images={displayImages} />
        </ScrollReveal>

      </div>
    </section>
  );
}
