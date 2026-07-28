import React from 'react';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';
import { ArrowRight } from 'lucide-react';

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

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center space-x-2 bg-gray-50 px-4 py-2 rounded-full mb-4 border border-gray-100">
            <span className="w-2 h-2 rounded-full bg-[#da251d] animate-pulse"></span>
            <span className="text-[#172A53] font-semibold text-sm tracking-wider uppercase">Campus Life</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#172A53] tracking-tight mb-4">
            Our Gallery
          </h2>
          <div className="w-24 h-1.5 bg-[#da251d] rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Discover the vibrant moments and memories captured at Edumentora.
          </p>
        </div>

        {/* Gallery Grid: 2 Rows, 4 Columns on md/lg */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {allImages.map((image, index) => (
            <div 
              key={index} 
              className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center">
          <Link 
            href="/gallery" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#172A53] text-white font-bold rounded-xl hover:bg-[#111f3d] transition-all hover:scale-105 shadow-lg hover:shadow-xl group"
          >
            <span>Explore More</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
