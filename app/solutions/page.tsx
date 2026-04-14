import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SolutionsContent } from "./content"
import { StatsBar } from "@/components/stats-bar"
import { BenefitsGrid } from "@/components/benefits-grid"
import { TestimonialsSection } from "@/components/testimonials-section"

export const metadata: Metadata = {
  title: "Solutions | IntegrateWise",
  description:
    "One Spine. Workbench for daily work, Intelligence Layer for AI. Built for every function, industry, and role.",
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <SolutionsContent />
        <StatsBar
          stats={[
            { value: 6, suffix: "", label: "Industries served" },
            { value: 6, suffix: "", label: "Roles supported" },
            { value: 3, suffix: "", label: "Function workspaces" },
            { value: 1, suffix: "", label: "Unified Spine" },
          ]}
        />
        <BenefitsGrid
          tag="Why IntegrateWise"
          heading="Same Spine. Every context."
        />
        <TestimonialsSection heading="Teams already using IntegrateWise." />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
