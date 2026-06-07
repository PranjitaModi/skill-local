import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AIFeaturesSection from "@/components/AIFeaturesSection";
import ProvidersSection from "@/components/ProvidersSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AIFeaturesSection />
      <ProvidersSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
