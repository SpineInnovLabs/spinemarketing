import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { TheSpineContent } from "./content"

export const metadata: Metadata = {
  title: "The Spine | IntegrateWise Platform",
  description:
    "SpineVault — the truth layer and adaptive infrastructure. Canonical entities, 8-stage normalization, Entity 360 assembly, and contextual firewalling.",
}

export default function TheSpinePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <TheSpineContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
