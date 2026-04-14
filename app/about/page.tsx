import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { AboutContent } from "./content"

export const metadata: Metadata = {
  title: "About | IntegrateWise",
  description:
    "Born from a real $8M account save. One Spine. One Workspace. You stay in control.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <AboutContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
