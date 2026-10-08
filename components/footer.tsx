"use client";

import Link from "next/link";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { SpineLogo } from "@/components/spine-logo";
import { footerColumns, COMPANY_TAGLINE } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] bg-[#F3F6F9]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="border-t border-[#DDE6F2] pt-16 pb-12">
          <div className="grid gap-12 lg:grid-cols-[320px_1fr]">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-white/40"
              >
                <SpineLogo className="h-8 w-8 shrink-0 text-[#032D60]" variant="on-light" />
                <span className="text-[18px] font-semibold tracking-[-0.04em] text-[#032D60]">
                  Spine <span className="text-[#0176D3]">InnovLabs</span>
                </span>
              </Link>
              <p className="mt-5 max-w-[280px] text-[14px] leading-[1.7] text-[#444]">
                {COMPANY_TAGLINE}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <Link
                  href="https://twitter.com/spineworkspace"
                  className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#D9E4EF] bg-white text-[#032D60] transition-colors hover:border-[#0176D3] hover:text-[#0176D3]"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link
                  href="https://linkedin.com/company/spine-innovlabs"
                  className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#D9E4EF] bg-white text-[#032D60] transition-colors hover:border-[#0176D3] hover:text-[#0176D3]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link
                  href="mailto:connect@spineworkspace.com"
                  className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#D9E4EF] bg-white text-[#032D60] transition-colors hover:border-[#0176D3] hover:text-[#0176D3]"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {footerColumns.map((col) => (
                <div key={col.heading}>
                  <h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#032D60]">
                    {col.heading}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {col.links.map((link) => (
                      <li key={link.name}>
                        {link.external ? (
                          <a
                            href={link.href}
                            className="text-[14px] text-[#444] transition-colors hover:text-[#0176D3]"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.name}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-[14px] text-[#444] transition-colors hover:text-[#0176D3]"
                          >
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#DDE6F2] py-8 sm:flex-row">
          <p className="text-[13px] text-[#706E6B]">
            © {new Date().getFullYear()} Spine InnovLabs · Built in India
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[13px] text-[#706E6B]">
            <Link href="/security" className="hover:text-[#0176D3]">Security</Link>
            <Link href="/privacy" className="hover:text-[#0176D3]">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
