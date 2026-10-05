import { defineField, defineType } from "sanity"

const stubFields = [
  defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
  defineField({
    name: "slug",
    title: "Slug",
    type: "slug",
    options: { source: "title", maxLength: 96 },
    validation: (r) => r.required(),
  }),
]

function stubDocument(name: string, title: string) {
  return defineType({
    name,
    title,
    type: "document",
    fields: stubFields,
  })
}

export const news = stubDocument("news", "News")
export const changelogEntry = stubDocument("changelogEntry", "Changelog entry")
export const caseStudy = stubDocument("caseStudy", "Case study")
export const guide = stubDocument("guide", "Guide")
export const resource = stubDocument("resource", "Resource")
export const pressRelease = stubDocument("pressRelease", "Press release")
export const event = stubDocument("event", "Event")
export const product = stubDocument("product", "Product")
export const industry = stubDocument("industry", "Industry")
