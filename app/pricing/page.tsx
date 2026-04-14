import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { PricingSection } from "@/components/pricing-section";
import { PricingFAQ } from "./faq";
import { PricingHero } from "./pricing-hero";
import { PricingTrustBar } from "./trust-bar";

export const metadata: Metadata = {
  title: "Pricing | IntegrateWise",
  description:
    "Simple pricing. Start at ₹999/$49/mo. Scale to enterprise governance.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <PricingHero />
        <PricingSection hideHeading />
        <PricingTrustBar />
        <PricingFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
