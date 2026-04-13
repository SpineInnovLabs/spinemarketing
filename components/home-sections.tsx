"use client"

import { LogosSection } from "@/components/logos-section"
import { ProblemSection } from "@/components/problem-section"
import { AIDifferentiators } from "@/components/ai-differentiators"
import { TruthLayerSection } from "@/components/truthlayer-section"
import { DayOneSection } from "@/components/day-one-section"
import { ProofSection } from "@/components/proof-section"
import { PricingSection } from "@/components/pricing-section"
import { FinalCTA } from "@/components/final-cta"

export function HomeSections() {
  return (
    <>
      <LogosSection />
      <ProblemSection />
      <AIDifferentiators />
      <TruthLayerSection />
      <DayOneSection />
      <ProofSection />
      <PricingSection />
      <FinalCTA />
    </>
  )
}
