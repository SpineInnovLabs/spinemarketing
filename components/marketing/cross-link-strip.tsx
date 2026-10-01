"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CtaLink } from "@/lib/site-copy";

export function CrossLinkStrip({
  prev,
  next,
  related,
}: {
  prev?: CtaLink;
  next?: CtaLink;
  related?: CtaLink[];
}) {
  if (!prev && !next && !related?.length) return null;

  return (
    <div className="border-t border-[#E5E5E5] bg-[#F3F6F9] py-10">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex flex-wrap gap-4">
          {prev && (
            <Link
              href={prev.href}
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#706E6B] transition-colors hover:text-[#032D60]"
            >
              <ArrowLeft className="h-4 w-4" />
              {prev.label}
            </Link>
          )}
          {next && (
            <Link
              href={next.href}
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#0176D3] transition-colors hover:text-[#0B5CAB]"
            >
              {next.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
        {related && related.length > 0 && (
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#706E6B]">Related</span>
            {related.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md border border-[#E5E5E5] bg-white px-3 py-1 text-[13px] font-medium text-[#444] hover:border-[#0176D3]/30 hover:text-[#032D60]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
