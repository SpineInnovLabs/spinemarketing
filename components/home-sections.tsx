"use client"

import { LogosSection } from "@/components/logos-section"
import { ProblemSection } from "@/components/problem-section"
import { FinalCTA } from "@/components/final-cta"
import { HomeStorySection } from "@/components/home-story-section"
import {
  HomeConfidenceSection,
  HomeFeaturesSection,
  HomePricingPreviewSection,
  HomeUseCasesSection,
  HomeVisionSection,
} from "@/components/home-narrative-sections"

export function HomeSections() {
  return (
    <>
      <ProblemSection />
      <HomeVisionSection />
      <LogosSection />
    </>
  )
}

export function HomeBottomSections() {
  return (
    <>
      <HomeStorySection />
      <HomeFeaturesSection />
      <HomeUseCasesSection />
      <HomePricingPreviewSection />
      <HomeConfidenceSection />
      <FinalCTA />
    </>
  )
}
