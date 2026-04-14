import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { PlatformHowItWorksContent } from "./content"
import { HowItWorksGather } from "./sticky-sections"

export const metadata: Metadata = {
  title: "How it Works | IntegrateWise Platform",
  description:
    "Data flows, identity resolution, knowledge base, and the triage mechanism that powers the Adaptive Spine.",
}

export default function PlatformHowItWorksPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <PlatformHowItWorksContent />
        <HowItWorksGather />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
