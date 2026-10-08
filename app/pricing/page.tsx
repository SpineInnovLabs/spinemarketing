import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BreadcrumbJsonLd } from "@/components/structured-data";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: { absolute: "Pricing & Commercial Inquiries | Spine InnovLabs" },
  description: "For Spine Workspace product plans, visit the product site. For architecture, integration and partnership inquiries, contact Spine InnovLabs.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing & Commercial Inquiries | Spine InnovLabs",
    description: "Find the right destination for Spine Workspace product pricing and Spine InnovLabs project discussions.",
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Pricing", url: absoluteUrl("/pricing") },
      ]} />
      <Header />
      <main id="main">
        <section className="bg-[#0B1C3A] px-5 pb-24 pt-40 text-white sm:px-8 lg:pb-32">
          <div className="mx-auto max-w-[1180px]">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#ABC9FA]">Commercial enquiries</p>
            <h1 className="mt-7 max-w-[970px] text-[clamp(3rem,5.8vw,6rem)] font-semibold leading-[1.08] tracking-[-.06em]">
              The right conversation for the <span className="text-[#A3C7FF]">right scope.</span>
            </h1>
            <p className="mt-8 max-w-[730px] text-[18px] leading-[1.85] text-[#CBDAEF]">
              Spine InnovLabs is the company behind Spine Workspace. Product plans and project engagements are different conversations, so we keep their commercial information separate.
            </p>
          </div>
        </section>
        <section className="mx-auto grid max-w-[1180px] gap-5 px-5 py-24 sm:px-8 md:grid-cols-2 lg:py-32">
          <article className="rounded-[26px] border border-[#D7E4F3] bg-white p-8 sm:p-11">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#245EA9]"><ArrowUpRight className="h-6 w-6" aria-hidden /></div>
            <p className="mt-9 text-xs font-semibold uppercase tracking-[.2em] text-[#386CAC]">Flagship product</p>
            <h2 className="mt-5 text-[30px] font-semibold tracking-[-.045em] text-[#112F58]">Spine Workspace</h2>
            <p className="mt-5 text-[16px] leading-[1.85] text-[#546B85]">For workspace subscriptions, product capabilities, availability and the current evaluation path, use the dedicated Spine Workspace website.</p>
            <a href="https://spineworkspace.com/" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#103467] px-6 text-sm font-semibold text-white transition hover:bg-[#295BA1]">Visit the product site <ArrowUpRight className="h-4 w-4" aria-hidden /></a>
          </article>
          <article className="rounded-[26px] border border-[#D7E4F3] bg-white p-8 sm:p-11">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#245EA9]"><ShieldCheck className="h-6 w-6" aria-hidden /></div>
            <p className="mt-9 text-xs font-semibold uppercase tracking-[.2em] text-[#386CAC]">Company discussions</p>
            <h2 className="mt-5 text-[30px] font-semibold tracking-[-.045em] text-[#112F58]">Architecture & partnerships</h2>
            <p className="mt-5 text-[16px] leading-[1.85] text-[#546B85]">For integration design, AI architecture, partnerships or project scope, share the context and we can discuss whether an engagement is appropriate.</p>
            <Link href="/contact?intent=partnership" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full border border-[#B8CDE9] bg-[#F6F9FF] px-6 text-sm font-semibold text-[#103467] transition hover:border-[#295BA1]">Contact the company <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
