import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { ProductHowItWorksContent } from "./content"

export const metadata: Metadata = {
  title: "How it Works | IntegrateWise Product",
  description:
    "The Intelligence Layer — proactive signals, morning briefs, pattern detection, and evidence-backed reasoning.",
}

export default function ProductHowItWorksPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <ProductHowItWorksContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
