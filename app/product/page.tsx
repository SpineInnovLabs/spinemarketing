import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { ProductContent } from "./content";

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
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
