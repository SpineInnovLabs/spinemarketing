import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { WhyContent } from "./content"
import { ComparisonSection } from "@/components/comparison-section"
import { BenefitsGrid } from "@/components/benefits-grid"
import { TestimonialsSection } from "@/components/testimonials-section"

export const metadata: Metadata = {
  title: "Why IntegrateWise | One Spine. One Workspace. Governed AI.",
  description:
    "Apps are fragmented. AI lacks context. IntegrateWise unifies everything under your control.",
}

export default function WhyPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <WhyContent />
        <ComparisonSection
          heading="Stop stitching. Start seeing."
          subheading="IntegrateWise replaces fragmented dashboards with one governed workspace."
        />
        <BenefitsGrid
          tag="The difference"
          heading="What changes when everything connects."
        />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
