import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { IntegrationsContent } from "./content"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Connected Ecosystems & Integrations | Spine InnovLabs",
  description:
    "For renewal managers: connect CRM, support, inbox, and finance. Source systems stay authoritative. Stop re-logging into six tools for account reviews.",
  alternates: { canonical: "/integrations" },
  openGraph: {
    title: "Connected Ecosystems & Integrations | Spine InnovLabs",
    description: "Connect CRM, support, inbox, and finance for renewal reviews. Source systems stay authoritative.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine Workspace Integrations" }],
  },
}

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Integrations", url: absoluteUrl("/integrations") },
      ]} />
      <Header />
      <main id="main">
        <IntegrationsContent />
        <TestimonialsSection
          heading="Illustrative connector scenarios"
          tag="Demonstration, not customer quotes"
        />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
