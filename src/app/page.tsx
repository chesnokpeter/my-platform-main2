import Hero from "@/components/sections/Hero";
import FeaturesSection from "@/components/sections/FeaturesSection";
import SaveYourBusinessSection from "@/components/sections/SaveYourBusinessSection";
import UnifiedPlatformSection from "@/components/sections/UnifiedPlatformSection";
import WhyWeSection from "@/components/sections/WhyWeSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import MyPlatformSection from "@/components/sections/MyPlatformSection";
import FAQSection from "@/components/sections/FAQSection";
import GetInTouch from "@/components/sections/GetInTouch";
import TryOurServices from "@/components/sections/TryOurServices";
import SmartAccessSection from "@/components/sections/SmartAccessSection";
import SliderSection from "@/components/sections/SliderSection";
import PainSection from "@/components/sections/PainSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PainSection />
      <FeaturesSection />
      <SaveYourBusinessSection />
      <GetInTouch />
      <UnifiedPlatformSection />
      <WhyWeSection />
      <HowItWorksSection />
      <SmartAccessSection />
      <MyPlatformSection />
      <SliderSection />
      <TryOurServices />
      <FAQSection />
    </>
  );
}
