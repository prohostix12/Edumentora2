import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LocationsSection from '@/components/LocationsSection';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import PageBanner from '@/components/PageBanner';
import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import { MapPin, Award, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import AdditionalUniversityDetails from './ViewMoreDetails';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic';

export default async function UniversityDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { id } = params;

  if (!id) {
    notFound();
  }

  const university = await prisma.university.findUnique({
    where: { id },
  });

  if (!university) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-24 font-[Poppins]">
      <Header />
      
      <PageBanner title={university.name}>
        <div className="pt-8">
          <Link 
            href="/universities" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Universities
          </Link>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 tracking-tight font-[Poppins]">
            {university.name}
          </h1>
          
          {university.location && (
            <div className="flex items-center text-gray-300 text-lg">
              <MapPin className="w-5 h-5 mr-2 text-[#da251d]" />
              {university.location}
            </div>
          )}
        </div>
      </PageBanner>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {university.mainImage && (
            <div className="w-full h-[300px] md:h-[500px] relative bg-gray-100">
              <img 
                src={university.mainImage} 
                alt={university.name} 
                className="w-full h-full object-cover" 
              />
            </div>
          )}
          
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-[#172A53] mb-6">About the University</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap mb-10">
              {university.description}
            </div>

            {university.certificates && university.certificates.length > 0 && (
              <>
                <h3 className="text-xl font-bold text-[#172A53] mb-6 border-t border-gray-100 pt-8">
                  Recognitions & Certificates
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {university.certificates.map((cert, i) => (
                    <div key={i} className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <Award className="w-6 h-6 mr-3 text-yellow-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            <AdditionalUniversityDetails university={university} />

            <div className="mt-12 flex justify-center">
              <Link href="/contact" className="bg-[#da251d] hover:bg-red-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <LocationsSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
