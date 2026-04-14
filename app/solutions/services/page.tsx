import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { ServicesContent } from "./content"

export const metadata: Metadata = {
  title: "Services & Agencies | IntegrateWise Solutions",
  description:
    "Projects, utilisation, invoices, client health — the full picture of every engagement, not just the billing system.",
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
