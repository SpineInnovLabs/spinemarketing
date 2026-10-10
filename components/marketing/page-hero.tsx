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
    <section className={ice
      ? "relative overflow-x-clip border-b border-[#D9E4EF] bg-white pt-[88px] pb-14 sm:pb-16 lg:pt-[108px] lg:pb-20"
      : "relative overflow-x-clip border-b border-[#D9E4EF] bg-white pt-[96px] pb-12 lg:pt-[108px] lg:pb-16"}>
      {ice ? <HeroWash /> : null}
      <div className={`mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12 ${ice ? "relative" : ""}`}>
        <div className={art ? "grid items-center gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-center lg:gap-12" : "max-w-[880px]"}>
          <div className="min-w-0 text-left">
            {badge && ice ? (
              <motion.p {...rise} className="mb-5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#0176D3]">
                {badge}
              </motion.p>
            ) : badge ? (
              <motion.p {...rise} className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#D9E4EF] bg-[#F3F6F9] px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#032D60]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0176D3]" />
                {badge}
              </motion.p>
            ) : null}
            <motion.h1
              {...rise}
              className={`max-w-full whitespace-pre-line text-balance text-[#032D60] ${ice ? "text-[clamp(2.05rem,4.6vw,3.65rem)] font-bold leading-[1.08] tracking-[-0.03em]" : "text-[clamp(2rem,4.4vw,3.5rem)] font-semibold leading-[1.12] tracking-[-0.03em]"}`}
            >
              {headline}
            </motion.h1>
            {subhead && (
              <motion.p {...rise} className={`max-w-xl leading-[1.6] text-[#33465B] ${ice ? "mt-5 text-[16px] sm:text-[17px]" : "mt-4 text-[17px]"}`}>
                {subhead}
              </motion.p>
            )}
            {principle && !ice && (
              <p className="mt-4 text-[14px] font-semibold text-[#032D60]">{principle}</p>
            )}
            {(primaryCta || secondaryCta) && (
              <div className={`mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start ${ice ? "items-start" : "items-stretch"}`}>
                {primaryCta && (
                  <Button
                    size="lg"
                    className={ice ? "h-11 rounded-[10px] bg-[#0176D3] px-5 text-[14px] font-semibold text-white hover:bg-[#0B5CAB]" : "h-10 rounded-[10px] bg-[#0176D3] px-5 text-[14px] font-semibold text-white hover:bg-[#0B5CAB]"}
                    asChild
                  >
                    <Link href={primaryCta.href}>
                      {primaryCta.label}
                      {ice ? null : <ArrowRight className="ml-2 h-4 w-4" />}
                    </Link>
                  </Button>
                )}
                {secondaryCta && (
                  <Button
                    size="lg"
                    variant="outline"
                    className={ice ? "h-11 rounded-[10px] border-[#C5D4E4] bg-white px-5 text-[14px] font-semibold text-[#032D60] hover:bg-[#F3F6F9]" : "h-10 rounded-[10px] border-[#D9E4EF] bg-white px-5 text-[14px] font-semibold text-[#032D60] hover:bg-[#F3F6F9]"}
                    asChild
                  >
                    {secondaryCta.href.startsWith("http") ? (
                      <a href={secondaryCta.href} target="_blank" rel="noopener noreferrer">{secondaryCta.label}</a>
                    ) : (
                      <Link href={secondaryCta.href}>
                        {secondaryCta.label}
                        {ice ? <ArrowRight className="h-4 w-4" aria-hidden /> : null}
                      </Link>
                    )}
                  </Button>
                )}
              </div>
            )}
            {principle && ice && (
              <p className="mt-8 flex items-center gap-3 text-[13px] leading-snug text-[#526479]">
                <span className="h-px w-8 shrink-0 bg-[#C5D4E4]" aria-hidden />
                <span>{principle}</span>
              </p>
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
