import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BreadcrumbJsonLd } from "@/components/structured-data";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: { absolute: "Company & Product Updates | Spine InnovTech" },
  description: "Notes from Spine InnovTech on company direction, business context, Spine Workspace and responsible AI.",
  alternates: { canonical: "/updates" },
};

const notes = [
  {
    period: "October 2026",
    category: "Company direction",
    title: "Spine InnovTech and Spine Workspace: two distinct roles",
    body: "Spine InnovTech is the company and technology identity. Spine Workspace is the flagship business-context workspace where people and AI collaborate. This website introduces the company, its technology, and the features of Spine Workspace so visitors can evaluate the product before entering a workspace.",
  },
  {
    period: "September 2026",
    category: "Architecture",
    title: "One product with a governed architecture",
    body: "Spine Fabric, Workbench, Twin, Runtime and the Marketplace describe connected capabilities of Spine Workspace. Business context, authority and verified outcomes remain the design focus rather than separate standalone AI agents.",
  },
];

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <BreadcrumbJsonLd items={[{ name: "Home", url: absoluteUrl("/") }, { name: "Updates", url: absoluteUrl("/updates") }]} />
      <Header />
      <main id="main">
        <section className="bg-[#F0F8FF] px-5 pb-20 pt-40 text-[#052858] sm:px-8 lg:pb-28 innovtech-reference-surface">
          <div className="mx-auto max-w-[1130px]">
            <p className="text-xs font-semibold uppercase tracking-[.23em] text-[#4C5C73]">Spine InnovTech / Journal</p>
            <h1 className="mt-7 text-[clamp(3.2rem,6vw,6rem)] font-semibold leading-[1.08] tracking-[-.06em]">Company updates.</h1>
            <p className="mt-7 max-w-[710px] text-[17px] leading-[1.9] text-[#4C5C73]">Direction, architecture and meaningful progress from the company behind Spine Workspace. These editorial notes are not a production release log.</p>
          </div>
        </section>
        <section className="mx-auto max-w-[1130px] px-5 py-24 sm:px-8 lg:py-32">
          <div className="grid gap-5">
            {notes.map((note) => (
              <article key={note.title} className="grid gap-6 rounded-[24px] border border-[#D7E5F5] bg-white p-8 sm:p-10 lg:grid-cols-[.3fr_1fr]">
                <div><p className="text-xs font-semibold uppercase tracking-[.14em] text-[#2664B3]">{note.period}</p><p className="mt-3 text-sm text-[#58708C]">{note.category}</p></div>
                <div><h2 className="max-w-2xl text-[28px] font-semibold leading-[1.25] tracking-[-.045em] text-[#112E55]">{note.title}</h2><p className="mt-6 max-w-3xl text-[16px] leading-[1.85] text-[#536B85]">{note.body}</p></div>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#225FAB] hover:underline">Read the blog <ArrowUpRight className="h-4 w-4" aria-hidden /></Link>
            <Link href="/changelog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#225FAB] hover:underline">Product changelog <ArrowUpRight className="h-4 w-4" aria-hidden /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
