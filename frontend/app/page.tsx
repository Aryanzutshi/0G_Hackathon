import HeroSection from "@/components/heroSection";
import FeaturesSection from "@/components/featuresSection";
import HowItWorks from "@/components/howItWorks";
import SecuritySection from "@/components/securitySection"
import PricingSection from "@/components/pricingSection";
import Footer from "@/components/footerSection";

export default function Home() {
  return (
    <section className="main-section">
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <SecuritySection />
      <PricingSection />
      <Footer />
    </section>
  );
}
