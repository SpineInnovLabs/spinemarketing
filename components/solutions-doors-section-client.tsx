"use client"

import dynamic from "next/dynamic"

const SolutionsDoorsDynamic = dynamic(
  () => import("@/components/solutions-doors-section").then((m) => m.SolutionsDoorsSection),
  {
    loading: () => (
      <div style={{ minHeight: "500px" }} />
    ),
  }
)

export function SolutionsDoorsSection() {
  return <SolutionsDoorsDynamic />
}
