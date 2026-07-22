import LoadingScreen from "@/components/LoadingScreen";
import BackgroundAtmosphere from "@/components/BackgroundAtmosphere";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import FeaturedWork from "@/components/FeaturedWork";
import BrandShowcase from "@/components/BrandShowcase";
import AppShowcase from "@/components/AppShowcase";
import CharacterShowcase from "@/components/CharacterShowcase";
import ExperienceSection from "@/components/ExperienceSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <BackgroundAtmosphere />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FeaturedWork />
        <BrandShowcase />
        <AppShowcase />
        <CharacterShowcase />
        <ExperienceSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
