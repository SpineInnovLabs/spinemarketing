import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { ServicesContent } from "./content"
import { BenefitsGrid } from "@/components/benefits-grid"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Capabilities & Services | Spine InnovLabs",
  description:
    "Implementation, onboarding, and managed operations. We get you to truth faster.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Capabilities & Services | Spine InnovLabs",
    description: "Implementation, onboarding, and managed operations. We get you to truth faster.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine Workspace" }],
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Services", url: absoluteUrl("/services") },
      ]} />
      <Header />
      <main id="main">
        <ServicesContent />
        <BenefitsGrid
          tag="Why our services"
          heading="We get you to truth faster."
        />
        <TestimonialsSection
          heading="Teams we've onboarded."
          tag="Service Stories"
        />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
