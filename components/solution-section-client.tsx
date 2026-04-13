"use client"

import dynamic from "next/dynamic"

const SolutionSectionDynamic = dynamic(
  () => import("@/components/solution-section").then((m) => m.SolutionSection),
  {
    ssr: false,
    loading: () => (
      <div
        style={{ minHeight: "600px", backgroundColor: "var(--muted)" }}
      />
    ),
  }
)

export function SolutionSection() {
  return <SolutionSectionDynamic />
}
