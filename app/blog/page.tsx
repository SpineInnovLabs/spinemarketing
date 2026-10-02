import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { posts } from "@/content/blog"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Blog | SpineWorkspace",
  description: "Insights on connected workspaces, AI governance, and operational intelligence.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | SpineWorkspace",
    description: "Insights on connected workspaces, AI governance, and operational intelligence.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://spineinnovlabs.com" },
        { name: "Blog", url: "https://spineinnovlabs.com/blog" },
      ]} />
      <Header />
      <main id="main">
        <section className="relative overflow-hidden bg-white">
          <div className="mx-auto max-w-[1100px] px-6 pt-[160px] pb-[80px] md:px-16">
            <h1 className="text-[40px] font-semibold tracking-[-0.05em] leading-[1.1] text-white sm:text-[52px]">Blog</h1>
            <p className="mt-4 max-w-xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55">
              Thinking on business context, human–AI work, and adaptive workspaces.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Product", "Business context", "Human–AI work", "Governance and trust", "Host-connected environments", "Company updates"].map((cat) => (
                <span key={cat} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[12px] font-semibold text-white/40">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1100px] px-6 py-16 md:px-16">
          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
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
                <p className="mt-3 flex-1 text-[15px] font-medium leading-[1.5] text-muted-foreground">
                  {post.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[13px] font-medium text-muted-foreground">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
