"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { SpineLogo } from "@/components/spine-logo";
import { footerColumns } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="bg-[#F0F8FF] text-[#082B5E]">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 border-b border-[#CBE5FA] py-16 lg:grid-cols-[.85fr_1.15fr] lg:gap-20 lg:py-20">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white p-2"><SpineLogo className="h-7 w-7 text-[#103366]" variant="on-light"/></span>
              <span className="text-[21px] font-semibold tracking-[-.055em] text-[#082B5E]">Spine <span className="text-[#006FE8]">InnovLabs</span></span>
            </Link>
            <h2 className="mt-8 max-w-[420px] text-[clamp(1.8rem,3vw,2.8rem)] font-semibold leading-[1.2] tracking-[-.05em] text-[#082B5E]">Building the intelligence behind connected business.</h2>
            <p className="mt-5 max-w-[400px] text-[14px] leading-[1.85] text-[#4E607A]">Connected systems. Shared context. Governed intelligence. Building Spine Workspace for humans and AI to work together with business context.</p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-[#006FE8] transition hover:text-[#082B5E]">Talk to Spine InnovLabs <ArrowUpRight className="h-4 w-4"/></Link>
          </div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {footerColumns.map((col) => <div key={col.heading}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[.18em] text-[#082B5E]">{col.heading}</h3>
              <ul className="mt-6 space-y-3.5">
                {col.links.map((link) => <li key={link.href}>
                  {link.external ?
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[13px] leading-6 text-[#4E607A] transition hover:text-[#082B5E]">{link.name}</a> :
                    <Link href={link.href} className="text-[13px] leading-6 text-[#4E607A] transition hover:text-[#082B5E]">{link.name}</Link>}
                </li>)}
              </ul>
            </div>)}
          </nav>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 py-7">
          <p className="text-[12px] text-[#4E607A]">© {new Date().getFullYear()} Spine InnovLabs. Built in India.</p>
          <a href="mailto:connect@spineworkspace.com" className="inline-flex items-center gap-2 text-[12px] text-[#4E607A] transition hover:text-[#082B5E]"><Mail className="h-3.5 w-3.5"/> connect@spineworkspace.com</a>
        </div>
      </div>
    </footer>
  );
}
