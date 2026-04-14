import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { ProductContent } from "./content";
import { FeatureShowcase } from "@/components/feature-showcase";
import { BenefitsGrid } from "@/components/benefits-grid";
import { ComparisonSection } from "@/components/comparison-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export const metadata: Metadata = {
  title: "Product | IntegrateWise",
  description:
    "One workspace. AI surfaces what matters. You approve what happens.",
};

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <ProductContent />
        <FeatureShowcase />
        <BenefitsGrid />
        <ComparisonSection
          heading="Why teams choose IntegrateWise."
          subheading="One workspace vs. stitching together tools that don't talk to each other."
        />
        <TestimonialsSection heading="Teams building on IntegrateWise." />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
