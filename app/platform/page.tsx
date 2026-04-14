import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { PlatformContent } from "./content"
import { PlatformFAQ } from "./faq"
import { StatsBar } from "@/components/stats-bar"
import { BentoShowcase } from "@/components/bento-showcase"
import { ComparisonSection } from "@/components/comparison-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export const metadata: Metadata = {
  title: "Platform | IntegrateWise",
  description:
    "The Adaptive Spine. Connects every app. Governs every AI action. Nothing happens without your approval.",
}

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <PlatformContent />
        <StatsBar />
        <BentoShowcase
          tag="The Workspace"
          heading="See it all. Act on what matters."
          subheading="The Workbench shows your accounts. The Intelligence Layer surfaces what you'd miss."
        />
        <ComparisonSection />
        <TestimonialsSection />
        <PlatformFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
