"use client"

import { Header as SiteHeader } from "@/components/header"

export function Header(props: { initiallyHidden?: boolean }) {
  return <SiteHeader {...props} />
}
