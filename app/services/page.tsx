import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { ServicesContent } from "./content"
import { BenefitsGrid } from "@/components/benefits-grid"
import { TestimonialsSection } from "@/components/testimonials-section"

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
