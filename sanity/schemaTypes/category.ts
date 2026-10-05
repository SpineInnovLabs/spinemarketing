import { defineField, defineType } from "sanity"

const pillars = [
  { title: "Product", value: "product" },
  { title: "Business context", value: "business-context" },
  { title: "Governance and trust", value: "governance-trust" },
  { title: "Research", value: "research" },
  { title: "Company", value: "company" },
]

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "pillar",
      title: "Editorial pillar",
      type: "string",
      options: { list: pillars },
    }),
  ],
})
