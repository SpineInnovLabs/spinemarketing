import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { PlatformArchitectureContent } from "./content"

export const metadata: Metadata = {
  title: "Architecture | IntegrateWise Platform",
  description:
    "The Four Pillars of the Knowledge Workspace — Cognitive Layer, Knowledge Memory, Trust & Governance, and The Workspace, unified through The Spine.",
}

export default function PlatformArchitecturePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <PlatformArchitectureContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
