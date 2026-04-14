import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { TheAdaptiveSpineContent } from "./content"

export const metadata: Metadata = {
  title: "The Adaptive Spine | IntegrateWise Platform",
  description:
    "The Adaptive Spine — vendor-neutral data layer converting fragmented SaaS into one versioned source of truth.",
}

export default function TheAdaptiveSpinePage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <TheAdaptiveSpineContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
