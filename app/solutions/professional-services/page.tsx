import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { ProfessionalServicesContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Professional Services | SpineWorkspace Solutions",
  description:
    "Engagements, deliverables, billing, relationships — the full account view that professional service teams need.",
  alternates: { canonical: "/solutions/professional-services" },
  openGraph: {
    title: "Professional Services | SpineWorkspace Solutions",
    description: "Engagements, deliverables, billing, relationships — the full account view that professional service teams need.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function ProfessionalServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://spineinnovlabs.com" },
        { name: "Solutions", url: "https://spineinnovlabs.com/solutions" },
        { name: "Professional Services", url: "https://spineinnovlabs.com/solutions/professional-services" },
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
