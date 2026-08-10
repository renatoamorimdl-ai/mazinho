import HeaderSection from "@/components/sections/HeaderSection";
import HeroSection from "@/components/sections/HeroSection";
import TrustPhraseSection from "@/components/sections/TrustPhraseSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HistorySection from "@/components/sections/HistorySection";
import PartnersSection from "@/components/sections/PartnersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingWhatsappButton from "@/components/FloatingWhatsappButton";

export default function Home() {
  return (
    <main className="site-main">
      <ScrollReveal />
      <HeaderSection />
      <HeroSection />
      <TrustPhraseSection />
      <ServicesSection />
      <HistorySection />
      <PartnersSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
      <FloatingWhatsappButton />
    </main>
  );
}
