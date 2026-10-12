import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { createPageMetadata } from "@/lib/page-metadata";
import { getContentRepository } from "@/lib/content";
import { PUBLIC_SOLUTIONS } from "@/lib/solution-taxonomy";
import sitemap from "@/app/sitemap";

export const metadata = createPageMetadata({
  title: "All website pages | Spine InnovTech",
  description:
    "Explore the full Spine InnovTech website: company, product, technology, solutions, use cases, insights, and trust information.",
  path: "/site-map",
});

const names: Record<string, string> = {
  "/": "Home",
  "/company": "About Spine InnovTech",
  "/about": "Our story",
  "/platform": "Technology overview",
  "/product": "SpineWorkspace — product details & features",
  "/platform/spine-fabric": "Spine Fabric — technical overview",
  "/spine": "Spine Fabric — introduction",
  "/twin": "Spine Twin",
  "/governance": "Governance & Runtime",
  "/adaptive-workspace": "Adaptive Workspace",
  "/product/the-adaptive-workspace": "Spine Workbench — adaptive work lenses",
  "/platform/how-it-works": "How the technology works",
  "/product/approval-gate-twin": "Approval gate & Twin walkthrough",
  "/host-connected-environment": "Host connected environments",
  "/solutions": "All business solutions",
  "/use-cases": "Business use cases",
  "/resources": "Research & resources",
  "/resources/campaign": "Architecture & campaign gallery",
  "/blog": "Blog & articles",
  "/portfolio": "Portfolio & demonstrations",
  "/developers": "For developers",
  "/integrations": "Connected capabilities & integrations",
  "/platform/integrations": "Integration architecture",
  "/platform/infrastructure": "Infrastructure architecture",
  "/security": "Trust & security",
  "/platform/security": "Technical security architecture",
  "/product/security": "Product security & approval controls",
  "/privacy": "Privacy Policy",
  "/terms": "Website terms",
  "/pricing": "Product evaluation & pricing inquiries",
  "/site-map": "All website pages",
};

function fallbackName(path: string) {
  return path
    .split("/")
    .filter(Boolean)
    .map((segment) =>
      segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
    )
    .join(" / ");
}

function category(path: string) {
  if (
    [
      "/security",
      "/privacy",
      "/terms",
      "/platform/security",
      "/product/security",
    ].includes(path)
  )
    return "Trust & legal";
  if (path.startsWith("/solutions") || path.startsWith("/use-cases"))
    return "Solutions & use cases";
  if (
    path.startsWith("/blog") ||
    path.startsWith("/resources") ||
    ["/portfolio", "/updates", "/changelog"].includes(path)
  )
    return "Insights & demonstrations";
  if (
    [
      "/",
      "/company",
      "/about",
      "/contact",
      "/services",
      "/pricing",
      "/site-map",
    ].includes(path)
  )
    return "Company";
  return "Product & technology";
}

export default async function SiteMapPage() {
  const [entries, articles] = await Promise.all([
    sitemap(),
    getContentRepository().listArticles({ kind: "blog", status: "published" }),
  ]);
  const labels = {
    ...names,
    ...Object.fromEntries(
      PUBLIC_SOLUTIONS.map((solution) => [
        `/solutions/${solution.slug}`,
        solution.name,
      ]),
    ),
    ...Object.fromEntries(
      articles.map((article) => [`/blog/${article.slug}`, article.title]),
    ),
  };
  const groups = [
    "Company",
    "Product & technology",
    "Solutions & use cases",
    "Insights & demonstrations",
    "Trust & legal",
  ];
  const paths = [
    ...new Set(
      entries.map(
        (entry) => new URL(entry.url).pathname.replace(/\/$/, "") || "/",
      ),
    ),
  ].sort();
  return (
    <div className="min-h-screen bg-white text-[#082B5E]">
      <Header />
      <main
        id="main"
        className="mx-auto max-w-[1320px] px-5 pb-20 pt-32 sm:px-8 lg:px-12"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
          EXPLORE SPINE INNOVTECH
        </p>
        <h1 className="mt-5 text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.1] tracking-[-.045em]">
          The full website, in one place.
        </h1>
        <p className="mt-6 max-w-[740px] text-[17px] leading-8 text-[#4E607A]">
          Explore our company, the technology behind SpineWorkspace, business
          solutions, practical use cases, and published thinking.
        </p>
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
          {groups.map((group) => (
            <section
              key={group}
              aria-label={group}
              className="rounded-2xl border border-[#CBE5FA] bg-[#F0F8FF] p-6 sm:p-8"
            >
              <h2 className="text-2xl font-semibold tracking-[-.03em]">
                {group}
              </h2>
              <ul className="mt-5 divide-y divide-[#CBE5FA]">
                {paths
                  .filter((path) => category(path) === group)
                  .map((path) => (
                    <li key={path}>
                      <Link
                        href={path}
                        className="flex items-center justify-between gap-4 rounded-md py-3 text-[15px] font-medium hover:text-[#006FE8] focus-visible:outline-2 focus-visible:outline-[#006FE8]"
                      >
                        {labels[path] ?? fallbackName(path)}
                        <ArrowRight
                          className="h-4 w-4 shrink-0 text-[#006FE8]"
                          aria-hidden
                        />
                      </Link>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
