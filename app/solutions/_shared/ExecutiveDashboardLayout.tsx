"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { ArrowRight, Shield, TrendingDown, TrendingUp } from "lucide-react";

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

const heroFade = (delay = 0) => ({
  initial: { opacity: 0, y: 14 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { type: "spring" as const, damping: 16, mass: 1, stiffness: 52, delay },
});

export function ExecutiveDashboardLayout({
  role,
  headline,
  subheadline,
  accentColor = "rgba(251,191,36,0.5)",
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
      <section className="relative overflow-hidden" style={{ background: "#05070A" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[18%] h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-[0.06] blur-[140px]" style={{ background: `radial-gradient(circle, ${accentColor}, transparent 70%)` }} />
        </div>
        <div className="relative mx-auto max-w-[900px] px-6 pb-20 pt-[160px] text-center md:px-16">
          <motion.div
            {...heroFade(0.08)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-1.5 text-[13px] font-semibold text-white/50"
            style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {role}
          </motion.div>
          <motion.h1 {...heroFade(0.22)} className="text-[48px] font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-[60px] lg:text-[72px]">
            {headline}
          </motion.h1>
          <motion.p {...heroFade(0.4)} className="mx-auto mt-7 max-w-2xl text-[17px] font-medium leading-[1.6] tracking-[-0.02em] text-white/45">
            {subheadline}
          </motion.p>
          <motion.div {...heroFade(0.52)} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href={ctaHref} className="inline-flex h-12 items-center gap-2 rounded-full px-7 text-[14px] font-semibold tracking-[-0.02em] text-white transition-all hover:opacity-90" style={{ background: "var(--gradient-primary)", boxShadow: "0 0 30px rgba(27,167,132,0.15)" }}>
              {ctaLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {outcomes?.length ? (
          <div className="relative mx-auto max-w-[1100px] px-6 pb-28">
            <motion.div {...heroFade(0.62)} className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {outcomes.map((o, i) => (
                <div key={i} className="rounded-xl border border-white/[0.06] px-4 py-5 text-center" style={{ background: "rgba(255,255,255,0.02)", backdropFilter: "blur(12px)" }}>
                  <p className="text-[28px] font-bold tracking-[-0.03em] text-primary sm:text-[36px]">{o.stat}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/30">{o.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        ) : null}
      </section>

      <section className="border-t border-white/[0.04] py-24 md:py-32" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[1100px] px-6">
          <motion.div {...fade(0)} className="mb-14 text-center">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">The shift</p>
            <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[48px]">
              From <span className="text-red-400/80">guesswork</span> to <span className="text-primary">clarity</span>
            </h2>
          </motion.div>
          <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-px text-center" style={{ background: "rgba(255,255,255,0.02)" }}>
              <div className="px-4 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white/30" style={{ background: "#080b10" }}>&nbsp;</div>
              <div className="flex items-center justify-center gap-1.5 px-4 py-3" style={{ background: "rgba(239,68,68,0.04)" }}>
                <TrendingDown className="h-3.5 w-3.5 text-red-400/50" />
                <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-red-400/60">Before</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 px-4 py-3" style={{ background: "rgba(45,212,191,0.04)" }}>
                <TrendingUp className="h-3.5 w-3.5 text-primary/60" />
                <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-primary/70">After</span>
              </div>
            </div>
            {beforeAfter.map((item, i) => (
              <motion.div key={i} {...fade(i * 0.06)} className="grid grid-cols-[1fr_1fr_1fr] gap-px border-t border-white/[0.04]">
                <div className="flex items-center px-5 py-4" style={{ background: "#080b10" }}>
                  <p className="text-[13px] font-semibold tracking-[-0.01em] text-white/60">{item.label}</p>
                </div>
                <div className="px-5 py-4" style={{ background: "rgba(239,68,68,0.03)" }}>
                  <p className="text-[13px] font-medium leading-[1.5] text-white/40">{item.before}</p>
                </div>
                <div className="px-5 py-4" style={{ background: "rgba(45,212,191,0.03)" }}>
                  <p className="text-[13px] font-medium leading-[1.5] text-white/55">{item.after}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.04] py-24 md:py-32" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[1100px] px-6">
          <motion.div {...fade(0)} className="mb-14 text-center">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">Your dashboard</p>
            <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[48px]">
              Everything on <span className="text-primary">one screen</span>
            </h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dashboardCards.map(({ title, desc }, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.07)}
                className="group rounded-2xl border border-white/[0.06] p-6 transition-all hover:border-white/[0.12] hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.02)", backdropFilter: "blur(12px)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-[14px] font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-white">{title}</h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.7] text-white/40">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {deepDives.length > 0 && (
        <section className="border-t border-white/[0.04] py-24 md:py-32" style={{ background: "#05070A" }}>
          <div className="mx-auto max-w-[900px] px-6">
            <motion.div {...fade(0)} className="mb-14">
              <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">Deep dive</p>
              <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[48px]">
                How each piece <span className="text-primary">works for you</span>
              </h2>
            </motion.div>
            <div className="space-y-6">
              {deepDives.map(({ title, desc }, i) => (
                <motion.div
                  key={i}
                  {...fade(i * 0.08)}
                  className="rounded-2xl border border-white/[0.06] px-7 py-6"
                  style={{ background: "rgba(255,255,255,0.015)" }}
                >
                  <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-white">{title}</h3>
                  <p className="mt-2 text-[14px] font-medium leading-[1.7] text-white/45">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-white/[0.04] py-16" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[900px] px-6">
          <motion.div
            {...fade(0)}
            className="flex items-start gap-4 rounded-2xl border border-primary/15 px-8 py-7"
            style={{ background: "linear-gradient(135deg, rgba(45,212,191,0.04), rgba(139,92,246,0.03))", backdropFilter: "blur(12px)" }}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-[15px] font-bold uppercase tracking-[0.08em] text-primary">Full visibility. Full control.</h3>
              <p className="mt-2 text-[15px] font-medium leading-[1.7] text-white/50">{governance}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/[0.04] pb-20 pt-16" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="grid gap-12 sm:grid-cols-2">
            <motion.div {...fade(0)}>
              <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">Connects with</p>
              <div className="flex flex-wrap gap-2">
                {connectors.map((c) => (
                  <span key={c} className="rounded-lg border border-white/[0.06] px-3 py-1.5 text-[13px] font-semibold text-white/45" style={{ background: "rgba(255,255,255,0.02)" }}>{c}</span>
                ))}
              </div>
            </motion.div>
            <motion.div {...fade(0.08)}>
              <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">KPIs tracked</p>
              <div className="flex flex-wrap gap-2">
                {metrics.map((m) => (
                  <span key={m} className="rounded-lg border border-white/[0.06] px-3 py-1.5 text-[13px] font-semibold text-white/45" style={{ background: "rgba(255,255,255,0.02)" }}>{m}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28" style={{ background: "#05070A" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] blur-[120px]" style={{ background: `radial-gradient(circle, ${accentColor}, transparent 70%)` }} />
        </div>
        <div className="relative mx-auto max-w-[700px] px-6 text-center">
          <motion.h2 {...fade(0)} className="text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[48px]">
            See the full picture <span className="text-primary">for yourself</span>
          </motion.h2>
          <motion.p {...fade(0.08)} className="mx-auto mt-5 max-w-lg text-[16px] font-medium leading-[1.6] text-white/45">
            20 minutes. Your tools connected. A live dashboard built from your actual data.
          </motion.p>
          <motion.div {...fade(0.16)} className="mt-8">
            <Link href="/contact?intent=demo" className="inline-flex h-12 items-center gap-2 rounded-full px-8 text-[15px] font-semibold text-white transition-all hover:opacity-90" style={{ background: "var(--gradient-primary)", boxShadow: "0 0 30px rgba(27,167,132,0.15)" }}>
              Book a demo <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
