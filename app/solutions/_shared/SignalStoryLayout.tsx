"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { ArrowRight, Shield, AlertTriangle, CheckCircle2 } from "lucide-react";

export interface BeforeAfterItem {
  before: string;
  after: string;
}

export interface SignalStep {
  label: string;
  detail: string;
}

export interface CapabilityItem {
  title: string;
  desc: string;
}

export interface SignalStoryProps {
  category: string;
  headline: string;
  subheadline: string;
  accentColor?: string;
  ctaLabel?: string;
  ctaHref?: string;
  beforeAfter: BeforeAfterItem[];
  signals: SignalStep[];
  capabilities: CapabilityItem[];
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

export function SignalStoryLayout({
  category,
  headline,
  subheadline,
  accentColor = "rgba(255,178,44,0.5)",
  ctaLabel = "Book a demo",
  ctaHref = "/contact?intent=demo",
  beforeAfter,
  signals,
  capabilities,
  governance,
  connectors,
  metrics,
  outcomes,
}: SignalStoryProps) {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "#05070A" }}>
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute left-[10%] top-[15%] h-[600px] w-[700px] rounded-full opacity-[0.07] blur-[140px]"
            style={{ background: `radial-gradient(circle, ${accentColor}, transparent 70%)` }}
          />
        </div>
        <div className="relative mx-auto max-w-[1100px] px-6 pb-28 pt-[160px] md:px-16">
          <motion.div
            {...heroFade(0.08)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-1.5 text-[13px] font-semibold text-white/50"
            style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {category}
          </motion.div>
          <motion.h1
            {...heroFade(0.22)}
            className="max-w-[800px] text-[48px] font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-[60px] lg:text-[72px]"
          >
            {headline}
          </motion.h1>
          <motion.p
            {...heroFade(0.4)}
            className="mt-7 max-w-2xl text-[17px] font-medium leading-[1.6] tracking-[-0.02em] text-white/45"
          >
            {subheadline}
          </motion.p>
          <motion.div {...heroFade(0.52)} className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={ctaHref}
              className="inline-flex h-12 items-center gap-2 rounded-full px-7 text-[14px] font-semibold tracking-[-0.02em] text-white transition-all hover:opacity-90"
              style={{ background: "var(--gradient-primary)", boxShadow: "0 0 30px rgba(255,178,44,0.15)" }}
            >
              {ctaLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/[0.04] py-24 md:py-32" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[1100px] px-6">
          <motion.div {...fade(0)} className="mb-14 text-center">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
              The transformation
            </p>
            <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[48px]">
              Before & after <span className="text-primary">IntegrateWise</span>
            </h2>
          </motion.div>
          <div className="space-y-3">
            {beforeAfter.map((item, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.06)}
                className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.06] sm:grid-cols-2"
              >
                <div
                  className="flex items-start gap-3 px-6 py-5"
                  style={{ background: "rgba(239,68,68,0.04)" }}
                >
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-400/60" />
                  <p className="text-[14px] font-medium leading-[1.6] text-white/50">{item.before}</p>
                </div>
                <div
                  className="flex items-start gap-3 px-6 py-5"
                  style={{ background: "rgba(45,212,191,0.04)" }}
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                  <p className="text-[14px] font-medium leading-[1.6] text-white/60">{item.after}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {outcomes?.length ? (
        <section className="border-t border-white/[0.04] py-16" style={{ background: "#05070A" }}>
          <div className="mx-auto max-w-[1100px] px-6">
            <motion.div {...fade(0)} className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {outcomes.map((o, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/[0.06] px-5 py-6 text-center"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <p className="text-[28px] font-bold tracking-[-0.03em] text-primary sm:text-[36px]">{o.stat}</p>
                  <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-white/35">{o.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      ) : null}

      <section className="relative overflow-hidden py-24 md:py-32" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[1100px] px-6">
          <motion.div {...fade(0)} className="mb-16">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
              How signals flow
            </p>
            <h2 className="max-w-xl text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[48px]">
              From raw data to <span className="text-primary">clear action</span>
            </h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />
            <div className="space-y-8">
              {signals.map((s, i) => (
                <motion.div key={i} {...fade(i * 0.1)} className="relative flex gap-6 pl-1">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 text-[14px] font-bold text-primary" style={{ background: "rgba(255,178,44,0.08)" }}>
                    {i + 1}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-white">{s.label}</h3>
                    <p className="mt-1 text-[14px] font-medium leading-[1.6] text-white/40">{s.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.04] py-24 md:py-32" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[1100px] px-6">
          <motion.div {...fade(0)} className="mb-14">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
              Capabilities
            </p>
            <h2 className="max-w-xl text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[48px]">
              What changes <span className="text-primary">for you</span>
            </h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2">
            {capabilities.map(({ title, desc }, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.08)}
                className="group rounded-2xl border border-white/[0.06] p-7 transition-all hover:border-white/[0.12] hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.02)", backdropFilter: "blur(12px)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
              >
                <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-white">{title}</h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.7] text-white/45">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              <h3 className="text-[15px] font-bold uppercase tracking-[0.08em] text-primary">AI thinks. You approve.</h3>
              <p className="mt-2 text-[15px] font-medium leading-[1.7] text-white/50">{governance}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/[0.04] pb-20 pt-16" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="flex flex-wrap items-start gap-12">
            <div className="flex-1 min-w-[260px]">
              <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">Connects with</p>
              <div className="flex flex-wrap gap-2">
                {connectors.map((c) => (
                  <span key={c} className="rounded-lg border border-white/[0.06] px-3 py-1.5 text-[13px] font-semibold text-white/45" style={{ background: "rgba(255,255,255,0.02)" }}>{c}</span>
                ))}
              </div>
            </div>
            <div className="flex-1 min-w-[260px]">
              <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">KPIs tracked</p>
              <div className="flex flex-wrap gap-2">
                {metrics.map((m) => (
                  <span key={m} className="rounded-lg border border-white/[0.06] px-3 py-1.5 text-[13px] font-semibold text-white/45" style={{ background: "rgba(255,255,255,0.02)" }}>{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28" style={{ background: "#05070A" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] blur-[120px]" style={{ background: `radial-gradient(circle, ${accentColor}, transparent 70%)` }} />
        </div>
        <div className="relative mx-auto max-w-[700px] px-6 text-center">
          <motion.h2 {...fade(0)} className="text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[48px]">
            See it working <span className="text-primary">with your data</span>
          </motion.h2>
          <motion.p {...fade(0.08)} className="mx-auto mt-5 max-w-lg text-[16px] font-medium leading-[1.6] text-white/45">
            Connect two of your tools and see a live 360 view in under two hours.
          </motion.p>
          <motion.div {...fade(0.16)} className="mt-8">
            <Link href="/contact?intent=demo" className="inline-flex h-12 items-center gap-2 rounded-full px-8 text-[15px] font-semibold text-white transition-all hover:opacity-90" style={{ background: "var(--gradient-primary)", boxShadow: "0 0 30px rgba(255,178,44,0.15)" }}>
              Book a demo <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
