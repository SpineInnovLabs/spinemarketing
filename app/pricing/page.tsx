import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { PricingSection } from "@/components/pricing-section";
import { PricingFAQ } from "./faq";
import { PricingHero } from "./pricing-hero";
import { PricingTrustBar } from "./trust-bar";
import { PricingComparison } from "./comparison";
import { TestimonialsSection } from "@/components/testimonials-section";

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
        <PricingComparison />
        <PricingTrustBar />
        <TestimonialsSection
          heading="What teams say about the value."
          tag="Customer Stories"
        />
        <PricingFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
