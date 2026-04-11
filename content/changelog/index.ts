export type ChangelogEntry = {
  date: string
  title: string
  items: string[]
}

export const entries: ChangelogEntry[] = [
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
