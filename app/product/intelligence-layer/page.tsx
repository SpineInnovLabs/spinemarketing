import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { IntelligenceLayerContent } from "./content"

export const metadata: Metadata = {
  title: "Intelligence Layer | IntegrateWise Product",
  description:
    "Layer 2: The Cognitive Overlay — Digital Twin, Knowledge Memory, Twin Trigger Scoring, and session continuity without model retraining.",
}

export default function IntelligenceLayerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <IntelligenceLayerContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
