"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Eye } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/marketing/section";
import { KpiBlock } from "@/components/marketing/enterprise";

export interface CapabilityItem {
  title: string;
  desc: string;
}

export interface IndustrySolutionLayoutProps {
  category: string;
  headline: string;
  subheadline: string;
  ctaLabel?: string;
  ctaHref?: string;
  problem: {
    intro?: string;
    bullets: string[];
  };
  capabilities: CapabilityItem[];
  governance: string;
  connectors: string[];
  metrics: string[];
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

const capIcons = [Zap, Eye, Shield, Zap];

export function IndustrySolutionLayout({
  category,
  headline,
  subheadline,
  ctaLabel = "Book a demo",
  ctaHref = "/contact?intent=demo",
  problem,
  capabilities,
  governance,
  connectors,
  metrics,
}: IndustrySolutionLayoutProps) {
  return (
    <>
      <PageHero
        badge={category}
        headline={headline}
        subhead={subheadline}
        primaryCta={{ label: ctaLabel, href: ctaHref }}
      />

      <Section variant="muted">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {problem.bullets.map((b, i) => (
            <motion.div key={i} {...fade(i * 0.06)} className="rounded-md border border-[#E5E5E5] bg-white p-5">
              <span className="mb-2 block text-[length:min(32px,var(--marketing-heading-size))] font-bold leading-none tracking-[-0.04em] text-[#0176D3]/20">
                0{i + 1}
              </span>
              <p className="text-[14px] leading-[1.7] text-[#444]">{b}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          label="What changes"
          headline="From scattered signals to clear next steps"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map(({ title, desc }, i) => {
            const Icon = capIcons[i % capIcons.length];
            return (
              <motion.div
                key={i}
                {...fade(i * 0.08)}
                className="rounded-md border border-[#E5E5E5] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-[#F3F6F9]">
                  <Icon className="h-6 w-6 text-[#0176D3]" />
                </div>
                <h3 className="text-[17px] font-semibold text-[#032D60]">{title}</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-[#444]">{desc}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <Section variant="muted">
        <div className="rounded-md border border-[#E5E5E5] bg-white p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#F3F6F9]">
              <Shield className="h-5 w-5 text-[#0176D3]" />
            </div>
            <div>
              <h3 className="text-[15px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">
                AI thinks. You approve.
              </h3>
              <p className="mt-2 text-[15px] leading-[1.7] text-[#444]">{governance}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 sm:grid-cols-2">
          <motion.div {...fade(0)}>
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Connects with</p>
            <div className="flex flex-wrap gap-2">
              {connectors.map((c) => (
                <span key={c} className="rounded-md border border-[#E5E5E5] bg-[#F3F6F9] px-3 py-1.5 text-[13px] font-medium text-[#444]">
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div {...fade(0.08)}>
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">KPIs tracked</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {metrics.map((m) => (
                <KpiBlock key={m} label="Metric" value={m} detail="" />
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      <section className="border-t border-[#E5E5E5] bg-[#032D60] py-16">
        <div className="mx-auto max-w-[700px] px-6 text-center">
          <motion.h2 {...fade(0)} className="text-[length:min(28px,var(--marketing-heading-size))] font-semibold leading-[1.15] text-white sm:text-[length:min(36px,var(--marketing-heading-size))]">
            See it working in your context
          </motion.h2>
          <motion.p {...fade(0.08)} className="mx-auto mt-4 max-w-lg text-[16px] leading-[1.6] text-white/70">
            Book a 20-minute walkthrough and we&apos;ll show you how it looks with your own tools connected.
          </motion.p>
          <motion.div {...fade(0.16)} className="mt-8">
            <Link
              href="/contact?intent=demo"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-white px-5 text-[14px] font-semibold text-[#032D60] hover:bg-[#F3F6F9]"
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
