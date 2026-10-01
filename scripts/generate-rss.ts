// Run with: npx tsx scripts/generate-rss.ts
// Or add to build: "build": "tsx scripts/generate-rss.ts && next build"
import { posts } from "../content/blog"
import { writeFileSync } from "fs"

const SITE = "https://spineworkspace.com"

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Spine InnovLabs Blog</title>
    <link>${SITE}/blog</link>
    <description>Insights on connected workspaces, AI governance, and operational intelligence.</description>
    <language>en</language>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml"/>
${posts
  .map(
    (p) => `    <item>
      <title>${p.title}</title>
      <link>${SITE}/blog/${p.slug}</link>
      <guid>${SITE}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${p.description}</description>
    </item>`
  )
  .join("\n")}
  </channel>
</rss>`

writeFileSync("public/rss.xml", rss)
console.log("✓ RSS feed generated at public/rss.xml")
