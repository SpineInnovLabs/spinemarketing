import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { ApprovalGateTwinContent } from "./content"

export const metadata: Metadata = {
  title: "Approval Gate & Twin in Action | IntegrateWise Product",
  description:
    "AI proposes, you approve. Governed approval queues, tiered routing, Twin scoring, and 24-hour rollback.",
}

export default function ApprovalGateTwinPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <ApprovalGateTwinContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
