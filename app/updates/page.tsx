import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BreadcrumbJsonLd } from "@/components/structured-data";

const notes = [
  {
    date: "October 2026",
    title: "One renewal, through to the result",
    body: "The homepage now follows the Northstar Labs renewal from the first screen through execution. Approval and completion are separate states. Documentation opens on the docs site.",
  },
  {
    date: "September 2026",
    title: "The public story is the product",
    body: "The tools keep the record. Twin proposes only when asked. A person allows, changes, or stops it. An accepted change is written back through the tool that owns the record.",
  },
  {
    date: "April 2026",
    title: "The site opened",
    body: "Product, solutions, and pricing pages went live, with the first blog posts and this log.",
  },
];

export const metadata: Metadata = {
  title: "Updates | SpineWorkspace",
  description: "Short notes on what changed in SpineWorkspace for buyers. The dated log is the changelog.",
  alternates: { canonical: "/updates" },
};

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://spineinnovlabs.com" },
          { name: "Updates", url: "https://spineinnovlabs.com/updates" },
        ]}
      />
      <Header />
      <main id="main">
        <section className="mx-auto max-w-[800px] px-6 pt-[140px] pb-16 md:px-16">
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Company</p>
          <h1 className="mt-3 text-[40px] font-semibold tracking-[-0.04em] text-[#032D60] sm:text-[48px]">Updates</h1>
          <p className="mt-4 max-w-xl text-[17px] leading-[1.6] text-[#33465B]">
            What changed for someone evaluating SpineWorkspace. Longer thinking stays on the{" "}
            <Link href="/blog" className="font-semibold text-[#0176D3] hover:underline">blog</Link>. The dated list stays on the{" "}
            <Link href="/changelog" className="font-semibold text-[#0176D3] hover:underline">changelog</Link>.
          </p>
        </section>
        <section className="mx-auto max-w-[800px] px-6 pb-24 md:px-16">
          <ol className="space-y-8">
            {notes.map((note) => (
              <li key={note.date} className="rounded-[20px] border border-[#D9E4EF] bg-[#F3F6F9] p-6">
                <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#0176D3]">{note.date}</p>
                <h2 className="mt-2 text-[22px] font-semibold tracking-[-0.03em] text-[#032D60]">{note.title}</h2>
                <p className="mt-3 text-[15px] leading-[1.65] text-[#33465B]">{note.body}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <Footer />
    </div>
  );
}
