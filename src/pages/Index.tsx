
import { Hero } from "@/components/Hero";
import { SoundFamiliar } from "@/components/SoundFamiliar";
import { DemoCarousel } from "@/components/DemoCarousel";
import { FeatureBreakdown } from "@/components/FeatureBreakdown";
import { UseCases } from "@/components/UseCases";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { CTASection } from "@/components/CTASection";
import { PrivacySection } from "@/components/PrivacySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white font-inter">
      <Hero />
      <SoundFamiliar />
      <DemoCarousel />
      <FeatureBreakdown />
      <UseCases />
      <WhyChooseSection />
      <CTASection />
      <PrivacySection />
      <Footer />
    </div>
  );
};

export default Index;
