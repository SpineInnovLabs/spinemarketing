import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { ServicesContent } from "./content"

export const metadata: Metadata = {
  title: "Services | IntegrateWise",
  description:
    "Implementation, onboarding, connector configuration, schema mapping, and ongoing managed data operations — we get you to truth faster and keep you there.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <ServicesContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
