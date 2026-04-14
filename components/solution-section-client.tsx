"use client"

import dynamic from "next/dynamic"

const SolutionSectionDynamic = dynamic(
  () => import("@/components/solution-section").then((m) => m.SolutionSection),
  {
    loading: () => (
      <div
        style={{ minHeight: "600px", backgroundColor: "#05070A" }}
      />
    ),
  }
)

export function SolutionSection() {
  return <SolutionSectionDynamic />
}
