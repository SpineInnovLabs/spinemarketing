"use client"

import dynamic from "next/dynamic"

const HeaderDynamic = dynamic(
  () => import("@/components/header").then((m) => m.Header),
  {
    ssr: false,
    loading: () => null,
  }
)

export function Header(props: { initiallyHidden?: boolean }) {
  return <HeaderDynamic {...props} />
}
