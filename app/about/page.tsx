import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { AboutContent } from "./content"
import { StatsBar } from "@/components/stats-bar"
import { BenefitsGrid } from "@/components/benefits-grid"
import { TestimonialsSection } from "@/components/testimonials-section"

export const metadata: Metadata = {
  title: "About | IntegrateWise",
  description:
    "Born from a real $8M account save. One Spine. One Workspace. You stay in control.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <AboutContent />
        <StatsBar
          stats={[
            { value: 13, suffix: "+", label: "Years of integration" },
            { value: 8, suffix: "M", prefix: "$", label: "First account saved" },
            { value: 70, suffix: "+", label: "Systems connected" },
            { value: 5, suffix: "", label: "Industries served" },
          ]}
        />
        <BenefitsGrid
          tag="What we built"
          heading="From one save to a platform."
        />
        <TestimonialsSection heading="Why teams trust IntegrateWise." />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
