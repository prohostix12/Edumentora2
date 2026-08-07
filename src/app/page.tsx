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
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const revalidate = 3600;

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

  let galleryImages: string[] = [];
  try {
    const galleries = await prisma.gallery.findMany({
      orderBy: { createdAt: 'desc' },
    });
    galleryImages = galleries.flatMap(g => g.images).slice(0, 8);
  } catch (error) {
    console.error("Failed to fetch galleries:", error);
  }

  let promoVideos: string[] = [];
  let successVideos: string[] = [];
  try {
    const reels = await prisma.reel.findMany({ orderBy: { createdAt: 'asc' } });
    promoVideos = reels.filter(r => r.category === 'PROMO').map(r => r.videoUrl);
    successVideos = reels.filter(r => r.category === 'SUCCESS').map(r => r.videoUrl);
  } catch (error) {
    console.error("Failed to fetch reels:", error);
  }

  let statUniversities: { id: string; name: string; logo: string }[] = [];
  try {
    const unis = await prisma.university.findMany({
      where: { logo: { not: null } },
      orderBy: { createdAt: 'asc' },
      select: { id: true, name: true, logo: true },
    });
    statUniversities = unis.filter(u => !!u.logo) as { id: string; name: string; logo: string }[];
  } catch (error) {
    console.error("Failed to fetch universities:", error);
  }

  return (
    <main className="min-h-screen bg-white font-[Poppins]">
      <Header />
      <Hero />
      <StatsSection universities={statUniversities} />
      <MissionVisionSection />
      <ContactSection />
      <AboutInstituteSection />
      <AchievementsSection />
      <ProcessSection />
      <ProgramsSection />
      <WhyChooseUsSection />
      <TestimonialSection reviews={reviews} galleryImages={galleryImages} promoVideos={promoVideos} successVideos={successVideos} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
