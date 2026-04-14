import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { BusinessOpsContent } from "./content"

export const metadata: Metadata = {
  title: "Business Ops | IntegrateWise",
  description:
    "Cross-system visibility. AI handles the busywork — with your approval.",
}

export default function BusinessOpsPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <BusinessOpsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
