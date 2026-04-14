"use client"

import dynamic from "next/dynamic"

const HowItWorksSectionDynamic = dynamic(
  () => import("@/components/how-it-works-section").then((m) => m.HowItWorksSection),
  {
    loading: () => (
      <div
        id="how-it-works"
        style={{ minHeight: "600px", backgroundColor: "var(--muted)" }}
      />
    ),
  }
)

export function HowItWorksSection() {
  return <HowItWorksSectionDynamic />
}
