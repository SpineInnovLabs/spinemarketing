import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { posts } from "@/content/blog";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | IntegrateWise Blog`,
    description: post.description,
  };
}

function renderBody(body: string) {
  const lines = body.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="mt-10 mb-4 text-[22px] font-semibold tracking-[-0.03em] text-foreground"
        >
          {line.replace("## ", "")}
        </h2>,
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={key++} className="ml-4 flex items-start gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{line.replace("- ", "")}</span>
        </li>,
      );
    } else if (line.trim() === "") {
      elements.push(<div key={key++} className="h-4" />);
    } else {
      elements.push(<p key={key++}>{line}</p>);
    }
  }

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "rgb(8, 7, 14)" }}
        >
          <div className="mx-auto max-w-[800px] px-6 pt-[160px] pb-[80px] md:px-16">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-1.5 text-[14px] font-medium text-white/40 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to blog
            </Link>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-2.5 py-0.5 text-[12px] font-semibold text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-4 text-[36px] font-semibold tracking-[-0.04em] leading-[1.15] text-white sm:text-[44px]">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-3 text-[14px] font-medium text-white/40">
              <span>{post.author}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-[800px] px-6 py-16 md:px-16">
          <div className="text-[16px] font-medium leading-[1.8] tracking-[-0.01em] text-foreground/80">
            {renderBody(post.body)}
          </div>
        </article>

        <section className="mx-auto max-w-[800px] px-6 pb-16 md:px-16">
          <div className="rounded-2xl border border-border/50 bg-muted/30 p-8 text-center">
            <p className="text-[18px] font-semibold tracking-[-0.03em]">
              Ready to stop being the human API?
            </p>
            <p className="mt-2 text-[15px] font-medium text-muted-foreground">
              See IntegrateWise in action.
            </p>
            <Link
              href="/contact?intent=demo"
              className="mt-4 inline-flex h-[42px] items-center rounded-xl px-6 text-[15px] font-semibold text-white"
              style={{
                background: "var(--gradient-primary)",
                boxShadow: "var(--shadow-button)",
              }}
            >
              Book a demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
