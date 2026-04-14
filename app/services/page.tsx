import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { ServicesContent } from "./content"

export const metadata: Metadata = {
  title: "Services | IntegrateWise",
  description:
    "Implementation, onboarding, and managed operations. We get you to truth faster.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <ServicesContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
