import { defineField, defineType } from "sanity"

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Meta title", type: "string" }),
    defineField({ name: "description", title: "Meta description", type: "text", rows: 3 }),
    defineField({
      name: "canonicalPath",
      title: "Canonical path override",
      type: "string",
      description: "Path only, e.g. /blog/my-post",
    }),
    defineField({ name: "noIndex", title: "No index", type: "boolean", initialValue: false }),
  ],
})
