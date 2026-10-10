import type { PageHeroCopy } from "@/lib/site-copy"

/** Shared destinations. Page copy and audience belong to the individual page. */
export const BUYER_CTAS = {
  packet: { label: "Explore workspace features", href: "/product#features" },
  workflowReview: { label: "Book a workflow review", href: "/contact?intent=workflow-review" },
  demo: { label: "Book a tailored demo", href: "/contact?intent=demo" },
  replay: { label: "See how the workspace works", href: "/product#how-it-works" },
} as const

export function solutionHeroFromPublic(solution: {
  name: string
  headline: string
  description: string
  id: string
}): PageHeroCopy {
  return {
    badge: solution.name,
    headline: solution.headline,
    subhead: solution.description,
    primaryCta: BUYER_CTAS.workflowReview,
    secondaryCta: BUYER_CTAS.packet,
  }
}
