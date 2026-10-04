export type ChangelogEntry = {
  date: string
  title: string
  items: string[]
}

export const entries: ChangelogEntry[] = [
  {
    date: "October 2026",
    title: "Docs, updates, and one renewal story",
    items: [
      "Documentation links open docs.spineworkspace.com",
      "Updates, changelog, blog, and portfolio are separate",
      "The homepage follows the Northstar Labs renewal through to the result in the CRM",
      "Approval and execution are shown as different states",
    ],
  },
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
