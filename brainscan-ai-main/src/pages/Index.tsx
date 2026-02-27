import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TechnologySection from "@/components/TechnologySection";
import CTASection from "@/components/CTASection";
import DualAISystemSection from "@/components/DualAISystemSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TechnologySection />
        <DualAISystemSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
