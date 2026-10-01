export type ChangelogEntry = {
  date: string
  title: string
  items: string[]
}

export const entries: ChangelogEntry[] = [
  {
    date: "September 2026",
    title: "Terminology aligned with Spine Fabric architecture",
    items: [
      "“Adaptive Spine” renamed to “Spine Fabric” across the site, matching docs.spineworkspace.com",
      "New Spine Fabric page at /platform/spine-fabric (old URL redirects automatically)",
      "Positioning updated to “the contextual continuity layer for human + AI work”",
      "The Twin page now introduces the Spine Agent Network — one intelligence, not a menu of bots",
      "New blog post: “Spine Fabric: the contextual continuity layer for human and AI work”",
    ],
  },
  {
    date: "April 2026",
    title: "Launch",
    items: [
      "Website live with full product, solutions, and pricing pages",
      "Firebase Analytics integrated",
      "Contact form with email fallback",
      "Privacy policy and terms of service",
      "Blog with first two posts",
      "Changelog and documentation pages",
    ],
  },
]
