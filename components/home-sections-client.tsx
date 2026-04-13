"use client"

import dynamic from "next/dynamic"

const HomeSectionsDynamic = dynamic(
  () =>
    import("@/components/home-sections").then((m) => m.HomeSections),
  {
    ssr: false,
    loading: () => <div style={{ minHeight: "200vh" }} />,
  }
)

export function HomeSections() {
  return <HomeSectionsDynamic />
}
