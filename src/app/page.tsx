import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import ContactSection from '@/components/ContactSection';
import MissionVisionSection from '@/components/MissionVisionSection';
import AchievementsSection from '@/components/AchievementsSection';
import ProcessSection from '@/components/ProcessSection';
import ProgramsSection from '@/components/ProgramsSection';
import AboutInstituteSection from '@/components/AboutInstituteSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import TestimonialSection from '@/components/TestimonialSection';
import HomeGallerySection from '@/components/HomeGallerySection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic';

export default async function Home() {
  let reviews: any[] = [];
  try {
    const db = prisma as any;
    const rawData = await db.$runCommandRaw({
      find: "reviews",
      sort: { postedDate: -1 }
    });
    
    if (rawData?.cursor?.firstBatch) {
      reviews = rawData.cursor.firstBatch.map((r: any) => ({
        id: r._id.$oid,
        username: r.username,
        postedDate: r.postedDate.$date,
        rating: r.rating,
        comment: r.comment,
        image: r.image || null,
        createdAt: r.createdAt.$date,
        updatedAt: r.updatedAt.$date
      }));
    }
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
  }

  return (
    <main className="min-h-screen bg-white font-[Poppins]">
      <Header />
      <Hero />
      <StatsSection />
      <MissionVisionSection />
      <ContactSection />
      <AboutInstituteSection />
      <AchievementsSection />
      <ProcessSection />
      <ProgramsSection />
      <WhyChooseUsSection />
      <TestimonialSection reviews={reviews} />
      <HomeGallerySection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
