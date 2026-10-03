export type ChangelogEntry = {
  date: string
  title: string
  items: string[]
}

export const entries: ChangelogEntry[] = [
  {
    date: "September 2026",
    title: "The site now speaks in product language",
    items: [
      "The public story is the record, the evidence, the draft, and the person",
      "The tools keep the record. The workspace shows the work.",
      "Twin opens only when asked, and a person allows, changes, or stops it",
      "An accepted change is written back through the tool that owns the record",
      "Blog: “The tools keep the record. The workspace shows the work.”",
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
