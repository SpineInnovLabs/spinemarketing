"use client"

import dynamic from "next/dynamic"

const SpineSectionDynamic = dynamic(
  () => import("@/components/spine-section").then((m) => m.SpineSection),
  {
    ssr: false,
    loading: () => (
      <div
        style={{ minHeight: "600px", backgroundColor: "rgb(8,7,14)" }}
      />
    ),
  }
)

export function SpineSection() {
  return <SpineSectionDynamic />
}
