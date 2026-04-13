import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { TruthBoundaryContent } from "./content"

export const metadata: Metadata = {
  title: "Truth Boundary | IntegrateWise Product",
  description:
    "Governance: The Human-in-the-Loop Control Center — approval-driven execution, proposed action queue, impact preview, and immutable audit trail.",
}

export default function TruthBoundaryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <TruthBoundaryContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
