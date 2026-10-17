"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { GridPattern } from "@/components/ui/grid-pattern";
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
  "hero-glass relative overflow-hidden min-w-0 max-w-full rounded-2xl border border-[#CCE3F5] bg-white/95 shadow-[0_20px_60px_-15px_rgba(3,45,96,0.12)] backdrop-blur-xl";

function HeroBackdrop({ ice }: { ice?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className={`absolute inset-0 ${
          ice
            ? "bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(0,111,232,0.12),transparent_70%)]"
            : "bg-[radial-gradient(ellipse_75%_55%_at_50%_-10%,rgba(0,111,232,0.09),transparent_70%)]"
        }`}
      />
      <GridPattern
        width={44}
        height={44}
        x={-1}
        y={-1}
        squares={[
          [3, 2],
          [7, 1],
          [12, 3],
          [16, 2],
          [21, 4],
        ]}
        className="opacity-85"
      />
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
  const ice = tone === "ice";

  return (
    <section className="relative overflow-x-clip border-b border-[#D6E8F8] bg-gradient-to-b from-[#F4F9FE] via-[#FAFCFF] to-white pt-[96px] pb-14 sm:pb-16 lg:pt-[112px] lg:pb-20">
      <HeroBackdrop ice={ice} />
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div
          className={
            art
              ? "grid items-center gap-10 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:items-center lg:gap-12"
              : "max-w-[880px]"
          }
        >
          <div className="min-w-0 text-left">
            {badge ? (
              <BlurFade delay={0.02} inView>
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#BCD9F5] bg-white/90 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#006FE8] shadow-2xs backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
                  <AnimatedShinyText shimmerWidth={120}>{badge}</AnimatedShinyText>
                </p>
              </BlurFade>
            ) : null}

            <BlurFade delay={0.06} inView>
              <h1 className="max-w-full whitespace-pre-line text-balance text-[#032D60] text-[length:min(clamp(2.25rem,4.8vw,3.75rem),var(--marketing-title-size))] font-bold leading-[1.08] tracking-[-0.035em]">
                {headline}
              </h1>
            </BlurFade>

            {subhead && (
              <BlurFade delay={0.1} inView>
                <p className="mt-5 max-w-xl text-[16px] sm:text-[length:min(17px,var(--marketing-body-size))] leading-[1.68] text-[#3A506B]">
                  {subhead}
                </p>
              </BlurFade>
            )}

            {principle && (
              <BlurFade delay={0.14} inView>
                <p className="mt-5 flex items-center gap-3 text-[13px] leading-snug text-[#526479]">
                  <span className="h-px w-8 shrink-0 bg-[#006FE8]/40" aria-hidden />
                  <span className="font-medium">{principle}</span>
                </p>
              </BlurFade>
            )}

            {(primaryCta || secondaryCta) && (
              <BlurFade delay={0.18} inView>
                <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-start">
                  {primaryCta && (
                    <Button
                      size="lg"
                      className="h-11 rounded-xl bg-gradient-to-b from-[#006FE8] to-[#0055B8] px-6 text-[14px] font-semibold text-white shadow-[0_6px_18px_-3px_rgba(0,111,232,0.35)] hover:from-[#0062CC] hover:to-[#00489E] hover:shadow-[0_10px_24px_-4px_rgba(0,111,232,0.45)] transition-all"
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
                      className="h-11 rounded-xl border border-[#C5D8EC] bg-white px-6 text-[14px] font-semibold text-[#032D60] shadow-2xs hover:border-[#006FE8] hover:bg-[#F3F8FE] transition-all"
                      asChild
                    >
                      {secondaryCta.href.startsWith("http") ? (
                        <a href={secondaryCta.href} target="_blank" rel="noopener noreferrer">
                          {secondaryCta.label}
                        </a>
                      ) : (
                        <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                      )}
                    </Button>
                  )}
                </div>
              </BlurFade>
            )}
          </div>

          {art ? (
            <BlurFade delay={0.12} inView className="relative min-w-0 max-w-full">
              <div className={`relative p-4 sm:p-5 ${heroGlassClass}`}>
                <BorderBeam size={240} duration={14} colorFrom="#006FE8" colorTo="#38BDF8" />
                {art}
              </div>
            </BlurFade>
          ) : null}
        </div>
        {work ? <div className="relative z-10 mt-8 lg:-mt-16">{work}</div> : null}
      </div>
    </section>
  );
}
