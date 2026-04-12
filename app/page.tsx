import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LogosSection } from "@/components/logos-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { AIDifferentiators } from "@/components/ai-differentiators"
import { SolutionsDoorsSection } from "@/components/solutions-doors-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TruthLayerSection } from "@/components/truthlayer-section"
import { DayOneSection } from "@/components/day-one-section"
import { ProofSection } from "@/components/proof-section"
import { PricingSection } from "@/components/pricing-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header initiallyHidden />
      <main id="main">
        <HeroSection />
        <LogosSection />
        <ProblemSection />
        <SolutionSection />
        <AIDifferentiators />
        <SolutionsDoorsSection />
        <HowItWorksSection />
        <TruthLayerSection />
        <DayOneSection />
        <ProofSection />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
