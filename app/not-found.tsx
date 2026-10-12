import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Page not found | Spine InnovTech",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main" tabIndex={-1} className="mx-auto max-w-3xl px-6 pb-24 pt-40">
        <p className="text-sm font-semibold text-[#0055B8]">404</p>
        <h1 className="mt-4 text-[length:min(2.25rem,var(--marketing-title-size))]/[var(--tw-leading,1.1111111111)] font-semibold tracking-tight text-[#082B5E]">Page not found.</h1>
        <p className="mt-5 text-base leading-relaxed text-[#4E607A]">This address does not lead to a page on the Spine InnovTech website. Explore the full directory or return to the homepage.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="rounded-lg bg-[#006FE8] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0055B8]">Return home</Link>
          <Link href="/site-map" className="rounded-lg border border-[#BCD0E8] px-5 py-3 text-sm font-semibold text-[#082B5E] hover:bg-[#F0F8FF]">View site directory</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
