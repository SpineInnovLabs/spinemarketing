import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { ProductContent } from "./content";

export const metadata: Metadata = {
  title: "Product | IntegrateWise",
  description:
    "Stop switching tabs. IntegrateWise connects your CRM, billing, support, and project tools into one live workspace. AI surfaces what needs attention and waits for your approval before acting.",
};

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-[rgb(8,7,14)]">
      <Header />
      <main id="main">
        <ProductContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
