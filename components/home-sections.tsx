"use client"

import { LogosSection } from "@/components/logos-section"
import { ProblemSection } from "@/components/problem-section"
import { FinalCTA } from "@/components/final-cta"
import { UseCasesSection } from "@/components/use-cases-section"
import { TrustSection } from "@/components/trust-section"
import { IntegrationArchSection } from "@/components/integration-arch-section"
import { CredibilitySection } from "@/components/credibility-section"

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
      <TrustSection />
      <IntegrationArchSection />
      <UseCasesSection />
      <CredibilitySection />
      <FinalCTA />
    </>
  )
}
