import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SpineContent } from "./content"

export const metadata: Metadata = {
  title: "Spine & Intelligence | IntegrateWise",
  description:
    "Vendor-neutral data backbone. Unifies every app. AI reasons with evidence. You approve.",
}

export default function SpinePage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <SpineContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
