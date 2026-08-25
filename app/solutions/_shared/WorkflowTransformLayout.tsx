"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { ArrowRight, Shield, X, Check, ArrowDown } from "lucide-react";

export interface BeforeAfterItem {
  before: string;
  after: string;
}

export interface WorkflowStep {
  title: string;
  desc: string;
}

export interface CapabilityItem {
  title: string;
  desc: string;
}

export interface WorkflowTransformProps {
  category: string;
  headline: string;
  subheadline: string;
  accentColor?: string;
  ctaLabel?: string;
  ctaHref?: string;
  beforeAfter: BeforeAfterItem[];
  workflow: WorkflowStep[];
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

export function WorkflowTransformLayout({
  category,
  headline,
  subheadline,
  accentColor = "rgba(139,92,246,0.5)",
  ctaLabel = "Book a demo",
  ctaHref = "/contact?intent=demo",
  beforeAfter,
  workflow,
  capabilities,
  governance,
  connectors,
  metrics,
  outcomes,
}: WorkflowTransformProps) {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "#05070A" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[10%] top-[20%] h-[500px] w-[700px] rounded-full opacity-[0.07] blur-[140px]" style={{ background: `radial-gradient(circle, ${accentColor}, transparent 70%)` }} />
          <div className="absolute left-[5%] top-[60%] h-[300px] w-[400px] rounded-full opacity-[0.04] blur-[120px]" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.4), transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-[900px] px-6 pb-28 pt-[160px] text-center md:px-16">
          <motion.div
            {...heroFade(0.08)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-1.5 text-[13px] font-semibold text-white/50"
            style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {category}
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
      </section>

      <section className="border-t border-white/[0.04] py-24 md:py-32" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[1100px] px-6">
          <motion.div {...fade(0)} className="mb-14 text-center">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">The difference</p>
            <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[48px]">
              What changes <span className="text-primary">from day one</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <motion.div {...fade(0)} className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-500/10">
                  <X className="h-3.5 w-3.5 text-red-400" />
                </div>
                <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-red-400/70">Without SpineWorkspace</span>
              </div>
              {beforeAfter.map((item, i) => (
                <div key={i} className="rounded-xl border border-red-500/[0.08] px-5 py-4" style={{ background: "rgba(239,68,68,0.03)" }}>
                  <p className="text-[14px] font-medium leading-[1.6] text-white/45">{item.before}</p>
                </div>
              ))}
            </motion.div>
            <motion.div {...fade(0.12)} className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-primary/70">With SpineWorkspace</span>
              </div>
              {beforeAfter.map((item, i) => (
                <div key={i} className="rounded-xl border border-primary/[0.08] px-5 py-4" style={{ background: "rgba(45,212,191,0.03)" }}>
                  <p className="text-[14px] font-medium leading-[1.6] text-white/55">{item.after}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {outcomes?.length ? (
        <section className="border-t border-white/[0.04] py-14" style={{ background: "#05070A" }}>
          <div className="mx-auto max-w-[1100px] px-6">
            <motion.div {...fade(0)} className="flex flex-wrap justify-center gap-6">
              {outcomes.map((o, i) => (
                <div key={i} className="text-center px-6">
                  <p className="text-[32px] font-bold tracking-[-0.03em] text-primary sm:text-[40px]">{o.stat}</p>
                  <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-white/30">{o.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-white/[0.04] py-24 md:py-32" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[900px] px-6">
          <motion.div {...fade(0)} className="mb-14 text-center">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">Your new workflow</p>
            <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[48px]">
              How it works, <span className="text-primary">step by step</span>
            </h2>
          </motion.div>
          <div className="space-y-0">
            {workflow.map((step, i) => (
              <React.Fragment key={i}>
                <motion.div
                  {...fade(i * 0.1)}
                  className="relative overflow-hidden rounded-2xl border border-white/[0.06] p-6"
                  style={{ background: "rgba(255,255,255,0.02)", backdropFilter: "blur(12px)" }}
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 text-[14px] font-bold text-primary" style={{ background: "rgba(45,212,191,0.06)" }}>
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-white">{step.title}</h3>
                      <p className="mt-1 text-[14px] font-medium leading-[1.6] text-white/40">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
                {i < workflow.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="h-4 w-4 text-primary/30" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.04] py-24 md:py-32" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[1100px] px-6">
          <motion.div {...fade(0)} className="mb-14">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">Capabilities</p>
            <h2 className="max-w-xl text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[48px]">
              Built for <span className="text-primary">this work</span>
            </h2>
          </motion.div>
          <div className="space-y-4">
            {capabilities.map(({ title, desc }, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.08)}
                className="group flex items-start gap-6 rounded-2xl border border-white/[0.06] p-6 transition-all hover:border-white/[0.12]"
                style={{ background: "rgba(255,255,255,0.02)", backdropFilter: "blur(12px)" }}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-white">{title}</h3>
                  <p className="mt-1 text-[14px] font-medium leading-[1.7] text-white/40">{desc}</p>
                </div>
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
            See it working <span className="text-primary">with your tools</span>
          </motion.h2>
          <motion.p {...fade(0.08)} className="mx-auto mt-5 max-w-lg text-[16px] font-medium leading-[1.6] text-white/45">
            Book a 20-minute walkthrough. We&apos;ll connect your systems and show you the difference live.
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
