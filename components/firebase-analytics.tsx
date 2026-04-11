"use client"

import { useEffect } from "react"

export function FirebaseAnalytics() {
  useEffect(() => {
    import("@/lib/firebase")
  }, [])
  return null
}
