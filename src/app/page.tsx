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
import SeoContentSection from '@/components/SeoContentSection';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
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
      <TestimonialSection />
      <SeoContentSection />
      <LocationsSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
