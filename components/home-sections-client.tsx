"use client"

import dynamic from "next/dynamic"

const HomeSectionsDynamic = dynamic(
  () =>
    import("@/components/home-sections").then((m) => m.HomeSections),
  {
    ssr: false,
    loading: () => <div style={{ minHeight: "100vh" }} />,
  }
)

const HomeBottomSectionsDynamic = dynamic(
  () =>
    import("@/components/home-sections").then((m) => m.HomeBottomSections),
  {
    ssr: false,
    loading: () => <div style={{ minHeight: "100vh" }} />,
  }
)

export function HomeSections() {
  return <HomeSectionsDynamic />
}

export function HomeBottomSections() {
  return <HomeBottomSectionsDynamic />
}
