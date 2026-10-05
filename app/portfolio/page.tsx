import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url"
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BreadcrumbJsonLd } from "@/components/structured-data";

const pieces = [
  {
    title: "Northstar Labs renewal",
    kind: "Demonstration",
    body: "One renewal decision: the records the tools already hold, the evidence for this task, a proposed follow-up, a person’s approval, and the result in the CRM.",
    href: "/#renewal-workflow",
  },
  {
    title: "Account Success",
    kind: "Starting workflow",
    body: "Renewal readiness is the first workflow to evaluate. Other solution paths use the same model.",
    href: "/solutions/customer-success",
  },
  {
    title: "How it works",
    kind: "Walkthrough",
    body: "The record, the evidence, the draft, and the person stay apart. Twin proposes only when asked.",
    href: "/platform/how-it-works",
  },
  {
    title: "Proof",
    kind: "Product map",
    body: "Illustrative product behavior. Not measured customer outcomes.",
    href: "/proof",
  },
];

export const metadata: Metadata = {
  title: "Portfolio | SpineWorkspace",
  description: "Demonstrations of SpineWorkspace. These are product examples, not customer results.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Portfolio", url: absoluteUrl("/portfolio") },
        ]}
      />
      <Header />
      <main id="main">
        <section className="mx-auto max-w-[1100px] px-6 pt-[140px] pb-16 md:px-16">
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Company</p>
          <h1 className="mt-3 text-[40px] font-semibold tracking-[-0.04em] text-[#032D60] sm:text-[48px]">Portfolio</h1>
          <p className="mt-4 max-w-xl text-[17px] leading-[1.6] text-[#33465B]">
            Work you can inspect. Each piece is a demonstration of the product, not a customer result.
          </p>
        </section>
        <section className="mx-auto max-w-[1100px] px-6 pb-24 md:px-16">
          <ul className="grid gap-4 sm:grid-cols-2">
            {pieces.map((piece) => (
              <li key={piece.title}>
                <Link
                  href={piece.href}
                  className="flex h-full flex-col rounded-[20px] border border-[#D9E4EF] bg-white p-6 shadow-[0_8px_24px_rgba(3,45,96,0.06)] transition-colors hover:border-[#0176D3] hover:bg-[#EAF5FC]"
                >
                  <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#526479]">{piece.kind}</p>
                  <h2 className="mt-2 text-[22px] font-semibold tracking-[-0.03em] text-[#032D60]">{piece.title}</h2>
                  <p className="mt-3 flex-1 text-[15px] leading-[1.65] text-[#33465B]">{piece.body}</p>
                  <span className="mt-4 text-[13px] font-semibold text-[#0176D3]">Open →</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
