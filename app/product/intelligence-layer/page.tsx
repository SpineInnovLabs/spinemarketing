import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { IntelligenceLayerContent } from "./content"

export const metadata: Metadata = {
  title: "Intelligence Layer | IntegrateWise Product",
  description:
    "The Intelligence Layer. Digital Twin, Knowledge Memory, and session continuity.",
}

export default function IntelligenceLayerPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <IntelligenceLayerContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
