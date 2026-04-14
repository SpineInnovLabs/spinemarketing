import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { ResourcesContent } from "./content";
import { ResourcesScroll } from "./sticky-sections";
import { BreadcrumbJsonLd } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Resources | IntegrateWise",
  description:
    "Guides, use cases, and tools to help you get the most from IntegrateWise.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Resources | IntegrateWise",
    description: "Guides, use cases, and tools to help you get the most from IntegrateWise.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "IntegrateWise" }],
  },
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Resources", url: "https://integratewise.ai/resources" },
      ]} />
      <Header />
      <main id="main">
        <ResourcesContent />
        <ResourcesScroll />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
