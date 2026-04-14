import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { TruthBoundaryContent } from "./content"

export const metadata: Metadata = {
  title: "Truth Boundary | IntegrateWise Product",
  description:
    "Approval-driven execution. Every action queued, previewed, and logged.",
}

export default function TruthBoundaryPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <TruthBoundaryContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
