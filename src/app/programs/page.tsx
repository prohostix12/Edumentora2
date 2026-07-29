import React from 'react';
import PageBanner from '@/components/PageBanner';
import Header from '@/components/Header';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { PrismaClient } from '@prisma/client';
import ProgramFilter from './ProgramFilter';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic';

export default async function ProgramsPage() {
  let programs: any[] = [];
  try {
    programs = await prisma.program.findMany({
      orderBy: { createdAt: 'asc' }
    });
  } catch (error) {
    console.error("Error fetching programs:", error);
  }

  return (
    <main className="min-h-screen bg-white pt-24 font-[Poppins]">
      <Header />
      
      {/* PAGE HEADING HERO */}
      <div className="w-full bg-[#172A53] relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/edumentora%20bg%20image.png')" }}></div>
        
        <div className="w-full pt-20 pb-24 relative z-10 max-w-7xl mx-auto text-center px-6 md:px-12">
          <div className="inline-block px-4 py-1.5 bg-white/10 text-red-200 font-bold tracking-wider uppercase rounded-full mb-6 text-xs border border-white/20 backdrop-blur-md">
            Professional & Career Advancement
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight font-[Poppins]">
            Empower Your Future with Flexible Learning Programs
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-5xl mx-auto">
            Discover our comprehensive programs designed to help working professionals convert their valuable experience into academic credits and achieve their career goals.
          </p>
        </div>
      </div>
      
      {/* INTERACTIVE FILTER & PROGRAMS LIST */}
      <ProgramFilter programs={programs} />

      <LocationsSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
