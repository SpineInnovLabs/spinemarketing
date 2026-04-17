"use client"

import { useEffect } from "react"

export function FirebaseAnalytics() {
  useEffect(() => {
    // Load Firebase analytics with error handling
    import("@/lib/firebase").catch((error) => {
      console.debug("Analytics module load deferred or failed:", error)
    })
  }, [])
  return null
}
