import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { ResourcesContent } from "./content";
import { ResourcesScroll } from "./sticky-sections";

export const metadata: Metadata = {
  title: "Resources | IntegrateWise",
  description:
    "Guides, use cases, and tools to help you get the most from IntegrateWise.",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-dark-section">
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
