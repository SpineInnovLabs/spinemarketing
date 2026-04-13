import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { ProductContent } from "./content";

export const metadata: Metadata = {
  title: "Product | IntegrateWise",
  description:
    "The Knowledge Workspace over the Spine. One interface for accounts, projects, and workflows — AI reads everything, suggests the next move, and waits for your approval before touching any system.",
};

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <ProductContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
