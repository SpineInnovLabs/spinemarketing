import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { ProductContent } from "./content";
import { FeatureShowcase } from "@/components/feature-showcase";
import { BenefitsGrid } from "@/components/benefits-grid";
import { ComparisonSection } from "@/components/comparison-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ProductStickySections } from "./sticky-sections";
import { SoftwareApplicationJsonLd, BreadcrumbJsonLd } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Product | SpineWorkspace",
  description:
    "One workspace. AI surfaces what matters. You approve what happens.",
  alternates: { canonical: "/product" },
  openGraph: {
    title: "Product | SpineWorkspace",
    description: "One workspace. AI surfaces what matters. You approve what happens.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace Product" }],
  },
};

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <SoftwareApplicationJsonLd />
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Product", url: "https://integratewise.ai/product" },
      ]} />
      <Header />
      <main id="main">
        <ProductContent />
        <ProductStickySections />
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
