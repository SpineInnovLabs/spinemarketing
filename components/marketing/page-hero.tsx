"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PageHeroCopy } from "@/lib/site-copy";
import type { ReactNode } from "react";

type PageHeroProps = PageHeroCopy & {
  art?: ReactNode;
  work?: ReactNode;
  principle?: string;
  tone?: "default" | "ice";
};

/** Shared glass frame for marketing hero art. Buttons stay solid and are not included. */
export const heroGlassClass =
  "hero-glass min-w-0 max-w-full rounded-[20px] border border-white/40 bg-white/65 shadow-[0_18px_48px_rgba(3,45,96,0.12)] backdrop-blur-[20px] backdrop-saturate-[1.2]";

function HeroWash() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-[22%] bottom-[-18%] h-[380px] w-[520px] rounded-full bg-[#EAF5FC]" />
      <div className="absolute -right-[14%] -top-[22%] h-[680px] w-[760px] rounded-[46%] bg-[#EAF5FC]" />
      <div className="absolute right-[4%] top-[6%] h-[480px] w-[540px] rounded-[48%] bg-[#D4EEF8]/80 blur-2xl" />
      <div className="absolute right-[18%] bottom-[4%] h-[280px] w-[420px] rounded-full bg-[#00A2DF]/10 blur-3xl" />
      <div className="absolute left-[2%] top-[28%] h-[200px] w-[260px] rounded-full bg-[#0176D3]/[0.05] blur-3xl" />
    </div>
  );
}

export function PageHero({
  badge,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  art,
  work,
  principle,
  tone = "default",
}: PageHeroProps) {
  const reduce = useReducedMotion();
  const ice = tone === "ice";
  const rise = reduce
    ? {}
    : { initial: { y: 10 }, animate: { y: 0 }, transition: { duration: 0.4, ease: "easeOut" as const } };

  return (
    <>
    <section className="relative overflow-x-clip border-b border-[#D6E8F8] bg-gradient-to-b from-[#F5F9FD] via-[#FAFCFF] to-white pt-[96px] pb-14 sm:pb-16 lg:pt-[112px] lg:pb-20">
      <HeroWash />
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className={art ? "grid items-center gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-center lg:gap-12" : "max-w-[880px]"}>
          <div className="min-w-0 text-left">
            {badge ? (
              <motion.p {...rise} className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#BCD9F5] bg-[#EAF4FF] px-3.5 py-1 text-[12px] font-bold uppercase tracking-[0.08em] text-[#006FE8] shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
                {badge}
              </motion.p>
            ) : null}
            <motion.h1
              {...rise}
              className="max-w-full whitespace-pre-line text-balance text-[#032D60] text-[length:min(clamp(2.25rem,4.8vw,3.75rem),var(--marketing-title-size))] font-bold leading-[1.08] tracking-[-0.035em]"
            >
              {headline}
            </motion.h1>
            {subhead && (
              <motion.p {...rise} className="mt-5 max-w-xl text-[16px] sm:text-[length:min(17px,var(--marketing-body-size))] leading-[1.65] text-[#3A506B]">
                {subhead}
              </motion.p>
            )}
            {principle && (
              <p className="mt-5 flex items-center gap-3 text-[13px] leading-snug text-[#526479]">
                <span className="h-px w-8 shrink-0 bg-[#C5D4E4]" aria-hidden />
                <span className="font-medium">{principle}</span>
              </p>
            )}
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start items-stretch">
                {primaryCta && (
                  <Button
                    size="lg"
                    className="h-11 rounded-[10px] bg-[#0176D3] px-6 text-[14px] font-semibold text-white shadow-[0_4px_14px_rgba(1,118,211,0.25)] hover:bg-[#0B5CAB] hover:shadow-[0_6px_20px_rgba(1,118,211,0.35)] transition-all"
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
                    className="h-11 rounded-[10px] border border-[#C5D4E4] bg-white px-6 text-[14px] font-semibold text-[#032D60] shadow-sm hover:bg-[#F3F6F9] transition-all"
                    asChild
                  >
                    {secondaryCta.href.startsWith("http") ? (
                      <a href={secondaryCta.href} target="_blank" rel="noopener noreferrer">{secondaryCta.label}</a>
                    ) : (
                      <Link href={secondaryCta.href}>
                        {secondaryCta.label}
                      </Link>
                    )}
                  </Button>
                )}
              </div>
            )}
          </div>
          {art ? (
            <div className="relative min-w-0 max-w-full">
              <div
                className="pointer-events-none absolute -inset-4 rounded-[32px] bg-[radial-gradient(circle_at_22%_18%,rgba(0,162,223,0.22),transparent_56%),radial-gradient(circle_at_82%_78%,rgba(1,118,211,0.16),transparent_52%)] sm:-inset-6"
                aria-hidden
              />
              <div className={`relative p-4 ${heroGlassClass}`}>{art}</div>
            </div>
          ) : null}
        </div>
        {work ? <div className="relative z-10 mt-8 lg:-mt-16">{work}</div> : null}
      </div>
    </section>
    </>
  );
}
