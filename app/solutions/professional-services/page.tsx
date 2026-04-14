import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { ProfessionalServicesContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Professional Services | IntegrateWise Solutions",
  description:
    "Engagements, deliverables, billing, relationships — the full account view that professional service teams need.",
  alternates: { canonical: "/solutions/professional-services" },
  openGraph: {
    title: "Professional Services | IntegrateWise Solutions",
    description: "Engagements, deliverables, billing, relationships — the full account view that professional service teams need.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "IntegrateWise" }],
  },
}

export default function ProfessionalServicesPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Solutions", url: "https://integratewise.ai/solutions" },
        { name: "Professional Services", url: "https://integratewise.ai/solutions/professional-services" },
      ]} />
      <Header />
      <main id="main">
        <ProfessionalServicesContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
