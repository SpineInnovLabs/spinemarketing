import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { getContentRepository } from "@/lib/content"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Insights & Articles | Spine InnovTech",
  description: "Insights on connected workspaces, AI governance, and operational intelligence.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Insights & Articles | Spine InnovTech",
    description: "Insights on connected workspaces, AI governance, and operational intelligence.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

function ArticleCard({ post }: { post: Awaited<ReturnType<ReturnType<typeof getContentRepository>["listArticles"]>>[number] }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group arvio-card flex flex-col p-6 transition-all hover:shadow-lg"
    >
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[12px] font-semibold text-primary">
            {tag}
          </span>
        ))}
      </div>
      <h2 className="mt-4 text-[20px] font-semibold tracking-[-0.03em] leading-[1.3] group-hover:text-primary transition-colors">
        {post.title}
      </h2>
      <p className="mt-3 flex-1 text-[15px] font-medium leading-[1.5] text-muted-foreground">{post.excerpt}</p>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-3 text-[13px] font-medium text-muted-foreground">
          <span>{post.author.name}</span>
          {post.readingTimeLabel ? (
            <>
              <span>·</span>
              <span>{post.readingTimeLabel}</span>
            </>
          ) : null}
        </div>
        <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </Link>
  )
}

export default async function BlogPage() {
  const repo = getContentRepository()
  const published = await repo.listArticles({ kind: "blog", status: "published" })
  const featured = published.filter((p) => p.featured)
  const latest = published.filter((p) => !p.featured)

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Blog", url: absoluteUrl("/blog") },
        ]}
      />
      <Header />
      <main id="main">
        <section className="relative overflow-hidden bg-white">
          <div className="mx-auto max-w-[1100px] px-6 pt-[160px] pb-[80px] md:px-16">
            <h1 className="text-[length:min(40px,var(--marketing-title-size))] font-semibold tracking-[-0.05em] leading-[1.1] text-[#032D60] sm:text-[length:min(52px,var(--marketing-title-size))]">Blog</h1>
            <p className="mt-4 max-w-xl text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.5] tracking-[-0.02em] text-[#33465B]">
              Product thinking. What changed is on{" "}
              <Link href="/updates" className="font-semibold text-[#0176D3] hover:underline">
                Updates
              </Link>
              . The dated log is the{" "}
              <Link href="/changelog" className="font-semibold text-[#0176D3] hover:underline">
                changelog
              </Link>
              . Demonstrations are in the{" "}
              <Link href="/portfolio" className="font-semibold text-[#0176D3] hover:underline">
                portfolio
              </Link>
              .
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Product", "Business context", "Governance and trust"].map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-[#D9E4EF] bg-[#F3F6F9] px-3 py-1 text-[12px] font-semibold text-[#526479]"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {featured.length > 0 ? (
          <section className="mx-auto max-w-[1100px] px-6 pb-8 md:px-16">
            <h2 className="text-[14px] font-semibold uppercase tracking-wider text-muted-foreground">Featured</h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {featured.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        ) : null}

        <section className="mx-auto max-w-[1100px] px-6 py-16 md:px-16">
          {latest.length > 0 ? (
            <>
              {featured.length > 0 ? (
                <h2 className="mb-6 text-[14px] font-semibold uppercase tracking-wider text-muted-foreground">Latest</h2>
              ) : null}
              <div className="grid gap-6 sm:grid-cols-2">
                {(featured.length > 0 ? latest : published).map((post) => (
                  <ArticleCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          ) : (
            <p className="text-muted-foreground">No articles published yet.</p>
          )}
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
