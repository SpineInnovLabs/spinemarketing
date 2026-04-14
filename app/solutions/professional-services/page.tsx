import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { ProfessionalServicesContent } from "./content"

export const metadata: Metadata = {
  title: "Professional Services | IntegrateWise Solutions",
  description:
    "Engagements, deliverables, billing, relationships — the full account view that professional service teams need.",
}

export default function ProfessionalServicesPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <ProfessionalServicesContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
