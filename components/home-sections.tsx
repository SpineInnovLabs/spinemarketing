"use client"

import { LogosSection } from "@/components/logos-section"
import { ProblemSection } from "@/components/problem-section"
import { ProofSection } from "@/components/proof-section"
import { PricingSection } from "@/components/pricing-section"
import { FinalCTA } from "@/components/final-cta"
import { IndustriesShowcase } from "@/components/industries-showcase"
import { UseCasesSection } from "@/components/use-cases-section"
import { ParallaxDivider } from "@/components/parallax-section"

export function HomeSections() {
  return (
    <>
      <LogosSection />
      <ProblemSection />
    </>
  )
}

export function HomeBottomSections() {
  return (
    <>
      <ProofSection />
      <ParallaxDivider variant="glow" />
      <IndustriesShowcase />
      <ParallaxDivider variant="dots" />
      <UseCasesSection />
      <ParallaxDivider variant="glow" />
      <PricingSection />
      <FinalCTA />
    </>
  )
}
