"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { ArrowRight, Shield, Clock, Minus } from "lucide-react";

export interface BeforeAfterItem {
  before: string;
  after: string;
}

export interface TimelineSlot {
  time: string;
  title: string;
  desc: string;
}

export interface DayInLifeProps {
  role: string;
  headline: string;
  subheadline: string;
  accentColor?: string;
  ctaLabel?: string;
  ctaHref?: string;
  beforeAfter: BeforeAfterItem[];
  timeline: TimelineSlot[];
  capabilities: { title: string; desc: string }[];
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

export function DayInLifeLayout({
  role,
  headline,
  subheadline,
  accentColor = "rgba(59,130,246,0.5)",
  ctaLabel = "Book a demo",
  ctaHref = "/contact?intent=demo",
  beforeAfter,
  timeline,
  capabilities,
  governance,
  connectors,
  metrics,
  outcomes,
}: DayInLifeProps) {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "#05070A" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[25%] h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.06] blur-[160px]" style={{ background: `radial-gradient(circle, ${accentColor}, transparent 70%)` }} />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-6 pb-28 pt-[160px]">
          <div className="mx-auto max-w-[900px] text-center">
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
              <Link href={ctaHref} className="inline-flex h-12 items-center gap-2 rounded-full px-7 text-[14px] font-semibold tracking-[-0.02em] text-white transition-all hover:opacity-90" style={{ background: "var(--gradient-primary)", boxShadow: "0 0 30px rgba(255,178,44,0.15)" }}>
                {ctaLabel} <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.04] py-24 md:py-32" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[1100px] px-6">
          <motion.div {...fade(0)} className="mb-14 text-center">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">The real difference</p>
            <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[48px]">
              Your day, <span className="text-primary">transformed</span>
            </h2>
          </motion.div>
          <div className="space-y-5">
            {beforeAfter.map((item, i) => (
              <motion.div key={i} {...fade(i * 0.08)} className="overflow-hidden rounded-2xl border border-white/[0.06]">
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr]">
                  <div className="px-6 py-5" style={{ background: "rgba(239,68,68,0.03)" }}>
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-red-400/50">Before</p>
                    <p className="text-[14px] font-medium leading-[1.6] text-white/45">{item.before}</p>
                  </div>
                  <div className="hidden sm:flex items-center px-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <ArrowRight className="h-3.5 w-3.5 text-primary" />
                    </div>
                  </div>
                  <div className="border-t border-white/[0.04] sm:border-t-0 px-6 py-5" style={{ background: "rgba(45,212,191,0.03)" }}>
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-primary/60">After</p>
                    <p className="text-[14px] font-medium leading-[1.6] text-white/55">{item.after}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {outcomes?.length ? (
        <section className="border-t border-white/[0.04] py-14" style={{ background: "#05070A" }}>
          <div className="mx-auto max-w-[1100px] px-6">
            <motion.div {...fade(0)} className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {outcomes.map((o, i) => (
                <div key={i} className="rounded-xl border border-white/[0.06] px-4 py-5 text-center" style={{ background: "rgba(255,255,255,0.02)" }}>
                  <p className="text-[28px] font-bold tracking-[-0.03em] text-primary sm:text-[36px]">{o.stat}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/30">{o.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-white/[0.04] py-24 md:py-32" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[900px] px-6">
          <motion.div {...fade(0)} className="mb-14 text-center">
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">A day with IntegrateWise</p>
            <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[48px]">
              What your morning <span className="text-primary">actually looks like</span>
            </h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/25 via-primary/10 to-transparent sm:left-[55px]" />
            <div className="space-y-6">
              {timeline.map((slot, i) => (
                <motion.div key={i} {...fade(i * 0.1)} className="relative flex gap-4 sm:gap-6">
                  <div className="relative z-10 flex h-[80px] w-[80px] shrink-0 flex-col items-center justify-center rounded-2xl border border-primary/15 sm:h-[110px] sm:w-[110px]" style={{ background: "rgba(45,212,191,0.05)", backdropFilter: "blur(12px)" }}>
                    <span className="text-[18px] font-bold tracking-[-0.02em] text-primary sm:text-[22px]">{slot.time}</span>
                  </div>
                  <div className="flex-1 rounded-2xl border border-white/[0.06] p-5" style={{ background: "rgba(255,255,255,0.02)" }}>
                    <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-white">{slot.title}</h3>
                    <p className="mt-1 text-[14px] font-medium leading-[1.6] text-white/40">{slot.desc}</p>
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
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">What powers this</p>
            <h2 className="max-w-xl text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[48px]">
              Under the hood
            </h2>
          </motion.div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] sm:grid-cols-2">
            {capabilities.map(({ title, desc }, i) => (
              <motion.div key={i} {...fade(i * 0.06)} className="p-6" style={{ background: "rgba(255,255,255,0.015)" }}>
                <div className="mb-3 flex items-center gap-2">
                  <Minus className="h-3 w-3 text-primary" />
                  <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-white">{title}</h3>
                </div>
                <p className="text-[14px] font-medium leading-[1.7] text-white/40">{desc}</p>
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
              <h3 className="text-[15px] font-bold uppercase tracking-[0.08em] text-primary">You stay in control.</h3>
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
            Try it <span className="text-primary">with your workflow</span>
          </motion.h2>
          <motion.p {...fade(0.08)} className="mx-auto mt-5 max-w-lg text-[16px] font-medium leading-[1.6] text-white/45">
            We&apos;ll walk through your typical day and show you exactly where IntegrateWise fits.
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
