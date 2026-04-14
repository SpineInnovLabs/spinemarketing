import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { TheSpineContent } from "./content"

export const metadata: Metadata = {
  title: "The Spine | IntegrateWise Platform",
  description:
    "The Spine — truth layer and adaptive infrastructure. Canonical entities and Entity 360 assembly.",
}

export default function TheSpinePage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <TheSpineContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
