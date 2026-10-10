"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, TrendingDown, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/marketing/section";
import { KpiBlock } from "@/components/marketing/enterprise";

export interface BeforeAfterItem {
  label: string;
  before: string;
  after: string;
}

export interface DashboardCard {
  title: string;
  desc: string;
}

export interface ExecutiveDashboardProps {
  role: string;
  headline: string;
  subheadline: string;
  accentColor?: string;
  ctaLabel?: string;
  ctaHref?: string;
  beforeAfter: BeforeAfterItem[];
  dashboardCards: DashboardCard[];
  deepDives: { title: string; desc: string }[];
  governance: string;
  connectors: string[];
  metrics: string[];
  outcomes?: { stat: string; label: string }[];
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

export function ExecutiveDashboardLayout({
  role,
  headline,
  subheadline,
  ctaLabel = "Book a demo",
  ctaHref = "/contact?intent=demo",
  beforeAfter,
  dashboardCards,
  deepDives,
  governance,
  connectors,
  metrics,
  outcomes,
}: ExecutiveDashboardProps) {
  return (
    <>
      <PageHero
        badge={role}
        headline={headline}
        subhead={subheadline}
        primaryCta={{ label: ctaLabel, href: ctaHref }}
      />

      <Section variant="muted">
        <SectionHeader label="The shift" headline="From fragmented signals to executive clarity" body="Illustrative workflow examples, not measured customer results." />
        <div className="space-y-4">
          {beforeAfter.map((item, i) => (
            <motion.div key={i} {...fade(i * 0.08)} className="rounded-md border border-[#E5E5E5] bg-white p-5">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">{item.label}</p>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-2">
                  <TrendingDown className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <p className="text-[14px] leading-[1.6] text-[#444]">{item.before}</p>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-[#0176D3]" />
                  <p className="text-[14px] leading-[1.6] text-[#444]">{item.after}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {outcomes?.length ? (
        <Section>
          <SectionHeader label="Evaluation" headline="Measures to discuss for your workflow" body="Define success against your own baseline. These are evaluation areas, not measured customer results." />
          <div className="grid gap-4 sm:grid-cols-3">
            {outcomes.map((o, i) => (
              <KpiBlock key={i} label="Evaluation area" value={o.label} detail="Agree a baseline and target for your workflow." />
            ))}
          </div>
        </Section>
      ) : null}

      <Section>
        <SectionHeader label="Your dashboard" headline="What you see every morning" />
        <div className="grid gap-4 sm:grid-cols-2">
          {dashboardCards.map(({ title, desc }, i) => (
            <motion.div key={i} {...fade(i * 0.08)} className="rounded-md border border-[#E5E5E5] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <h3 className="text-[16px] font-semibold text-[#032D60]">{title}</h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-[#444]">{desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeader label="Deep dives" headline="Drill into what matters" />
        <div className="space-y-3">
          {deepDives.map(({ title, desc }, i) => (
            <motion.div key={i} {...fade(i * 0.06)} className="rounded-md border border-[#E5E5E5] bg-white p-5">
              <h3 className="text-[15px] font-semibold text-[#032D60]">{title}</h3>
              <p className="mt-1 text-[14px] leading-[1.6] text-[#444]">{desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-md border border-[#E5E5E5] bg-[#F3F6F9] p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white">
              <Shield className="h-5 w-5 text-[#0176D3]" />
            </div>
            <div>
              <h3 className="text-[15px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">AI thinks. You approve.</h3>
              <p className="mt-2 text-[15px] leading-[1.7] text-[#444]">{governance}</p>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-12 sm:grid-cols-2">
          <motion.div {...fade(0)}>
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Connects with</p>
            <div className="flex flex-wrap gap-2">
              {connectors.map((c) => (
                <span key={c} className="rounded-md border border-[#E5E5E5] bg-[#F3F6F9] px-3 py-1.5 text-[13px] font-medium text-[#444]">{c}</span>
              ))}
            </div>
          </motion.div>
          <motion.div {...fade(0.08)}>
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">KPIs tracked</p>
            <div className="flex flex-wrap gap-2">
              {metrics.map((m) => (
                <span key={m} className="rounded-md border border-[#E5E5E5] bg-[#F3F6F9] px-3 py-1.5 text-[13px] font-medium text-[#444]">{m}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      <section className="border-t border-[#E5E5E5] bg-[#032D60] py-16">
        <div className="mx-auto max-w-[700px] px-6 text-center">
          <motion.h2 {...fade(0)} className="text-[28px] font-semibold leading-[1.15] text-white sm:text-[36px]">
            See your executive view live
          </motion.h2>
          <motion.p {...fade(0.08)} className="mx-auto mt-4 max-w-lg text-[16px] leading-[1.6] text-white/70">
            Book a walkthrough with your actual tools connected.
          </motion.p>
          <motion.div {...fade(0.16)} className="mt-8">
            <Link href="/contact?intent=demo" className="inline-flex h-10 items-center gap-2 rounded-md bg-white px-5 text-[14px] font-semibold text-[#032D60] hover:bg-[#F3F6F9]">
              Book a demo <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
