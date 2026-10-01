"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PageHeroCopy } from "@/lib/site-copy";

export function PageHero({ badge, headline, subhead, primaryCta, secondaryCta }: PageHeroCopy) {
  return (
    <section className="border-b border-[#E5E5E5] bg-white pt-[120px] pb-16">
      <div className="relative mx-auto max-w-[880px] px-6 text-left md:text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.1 }}
            className="mb-5 inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] bg-[#F3F6F9] px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#032D60]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#0176D3]" />
            {badge}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.2 }}
          className="text-[36px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#032D60] sm:text-[48px]"
        >
          {headline}
        </motion.h1>
        {subhead && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.35 }}
            className="mx-auto mt-4 max-w-2xl text-[17px] leading-[1.6] text-[#444]"
          >
            {subhead}
          </motion.p>
        )}
        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.45 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            {primaryCta && (
              <Button
                size="lg"
                className="h-10 rounded-md bg-[#0176D3] px-5 text-[14px] font-semibold text-white hover:bg-[#0B5CAB]"
                asChild
              >
                <Link href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            {secondaryCta && (
              <Button
                size="lg"
                variant="outline"
                className="h-10 rounded-md border-[#C9C9C9] bg-white px-5 text-[14px] font-semibold text-[#032D60] hover:bg-[#F3F3F3]"
                asChild
              >
                {secondaryCta.href.startsWith("http") ? (
                  <a href={secondaryCta.href} target="_blank" rel="noopener noreferrer">{secondaryCta.label}</a>
                ) : (
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                )}
              </Button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
