import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import Link from "next/link";
import { BookOpen, FileText, Calculator, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources | IntegrateWise",
  description:
    "Guides, use cases, and tools to help you get the most from IntegrateWise.",
};

const resources = [
  {
    icon: BookOpen,
    title: "Use-case library",
    desc: "Real-world examples across revenue, CS, support, finance, and executive decisioning.",
    href: "/account-success",
    cta: "Explore use cases",
  },
  {
    icon: FileText,
    title: "How it works",
    desc: "Connect your tools, see everything in one place, and let AI help — with your approval on every action.",
    href: "/platform",
    cta: "See how it works",
  },
  {
    icon: Calculator,
    title: "Pricing guide",
    desc: "Transparent pricing that scales with your team. Base fee + usage, not per-seat.",
    href: "/pricing",
    cta: "View pricing",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <section className="mx-auto max-w-[1100px] px-6 pt-[140px] pb-24 md:px-16">
          <h1 className="text-[36px] font-semibold tracking-[-0.04em] leading-[1.2] sm:text-[44px]">
            Resources
          </h1>
          <p className="mt-4 max-w-xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
            Guides, use cases, and the business case for a connected workspace.
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {resources.map(({ icon: Icon, title, desc, href, cta }) => (
              <div key={title} className="arvio-card flex flex-col p-6">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: "var(--gradient-primary-icon)" }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.03em]">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-[14px] font-medium leading-[1.5] text-muted-foreground">
                  {desc}
                </p>
                <Link
                  href={href}
                  className="mt-4 flex items-center gap-1 text-[14px] font-semibold text-primary hover:underline"
                >
                  {cta} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
