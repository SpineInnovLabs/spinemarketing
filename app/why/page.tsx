import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { WhyContent } from "./content"

export const metadata: Metadata = {
  title: "Why IntegrateWise | One Spine. One Workspace. Governed AI.",
  description:
    "Apps are fragmented. AI acts without context. IntegrateWise connects everything over one Spine, gives you one workspace, and keeps every AI action under your control.",
}

export default function WhyPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <WhyContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
