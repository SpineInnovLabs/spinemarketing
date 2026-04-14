import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { ServicesContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Services & Agencies | IntegrateWise Solutions",
  description:
    "Projects, utilisation, invoices, client health — the full engagement picture.",
  alternates: { canonical: "/solutions/services" },
  openGraph: {
    title: "Services & Agencies | IntegrateWise Solutions",
    description: "Projects, utilisation, invoices, client health — the full engagement picture.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "IntegrateWise" }],
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Solutions", url: "https://integratewise.ai/solutions" },
        { name: "Services & Agencies", url: "https://integratewise.ai/solutions/services" },
      ]} />
      <Header />
      <main id="main">
        <ServicesContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
