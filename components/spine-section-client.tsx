"use client"

import dynamic from "next/dynamic"

const SpineSectionDynamic = dynamic(
  () => import("@/components/spine-section").then((m) => m.SpineSection),
  {
    loading: () => (
      <div
        style={{ minHeight: "600px", backgroundColor: "#05070A" }}
      />
    ),
  }
)

export function SpineSection() {
  return <SpineSectionDynamic />
}
