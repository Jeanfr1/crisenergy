import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import SimulatorSection from "@/components/sections/SimulatorSection";
import ContactSection from "@/components/sections/ContactSection";
import FaqSection from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SolutionsSection />
        <BenefitsSection />
        <SimulatorSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
