"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { ArrowRight, Shield, Zap, Eye } from "lucide-react";

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

const heroFade = (delay = 0) => ({
  initial: { opacity: 0, y: 14 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { type: "spring" as const, damping: 16, mass: 1, stiffness: 52, delay },
});

const capIcons = [Zap, Eye, Shield, Zap];
const capColors = [
  { bg: "rgba(45,212,191,0.10)", glow: "rgba(45,212,191,0.20)", text: "#ffb22c" },
  { bg: "rgba(139,92,246,0.10)", glow: "rgba(139,92,246,0.20)", text: "#8b5cf6" },
  { bg: "rgba(59,130,246,0.10)", glow: "rgba(59,130,246,0.20)", text: "#3b82f6" },
  { bg: "rgba(251,191,36,0.10)", glow: "rgba(251,191,36,0.20)", text: "#fbbf24" },
];

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
  const parts = headline.includes(". ")
    ? headline.split(/\.\s+/)
    : headline.includes("—")
    ? headline.split("—").map((s) => s.trim())
    : headline.includes(".")
    ? [headline.replace(/\.$/, "")]
    : [headline];

  const headText = parts[0] + (headline.includes(". ") ? "." : "");
  const accentText = parts.length > 1 ? parts.slice(1).join(" ") : "";

  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "#05070A" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[20%] h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-[0.08] blur-[140px]" style={{ background: "radial-gradient(circle, rgba(255,178,44,0.5), transparent 70%)" }} />
          <div className="absolute right-[10%] top-[60%] h-[300px] w-[400px] rounded-full opacity-[0.05] blur-[120px]" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4), transparent 70%)" }} />
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

          <motion.h1
            {...heroFade(0.22)}
            className="text-[48px] font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-[60px] lg:text-[72px]"
          >
            {headText}
            {accentText ? (
              <>
                <br />
                <span className="text-primary">{accentText}</span>
              </>
            ) : null}
          </motion.h1>

          <motion.p
            {...heroFade(0.4)}
            className="mx-auto mt-7 max-w-2xl text-[17px] font-medium leading-[1.6] tracking-[-0.02em] text-white/45"
          >
            {subheadline}
          </motion.p>

          <motion.div {...heroFade(0.52)} className="mt-10 flex flex-wrap items-center justify-center gap-3">
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

      <section className="border-t border-white/[0.04] pb-20" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[1100px] px-6">
          <motion.div
            {...fade(0)}
            className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.06] sm:grid-cols-3"
          >
            {problem.bullets.map((b, i) => (
              <div
                key={i}
                className="relative px-6 py-8"
                style={{ background: "rgba(255,255,255,0.015)", backdropFilter: "blur(8px)" }}
              >
                <span className="mb-3 block text-[44px] font-bold leading-none tracking-[-0.04em] text-primary/20">
                  0{i + 1}
                </span>
                <p className="text-[14px] font-medium leading-[1.7] text-white/55">{b}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28 md:py-36" style={{ background: "#05070A" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[20%] top-[30%] h-[400px] w-[500px] rounded-full opacity-[0.05] blur-[120px]" style={{ background: "radial-gradient(circle, rgba(255,178,44,0.4), transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-[1100px] px-6">
          <motion.div {...fade(0)} className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
              What changes
            </p>
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[52px]">
              From scattered signals to{" "}
              <span className="text-primary">clear next steps</span>
            </h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {capabilities.map(({ title, desc }, i) => {
              const color = capColors[i % capColors.length];
              const Icon = capIcons[i % capIcons.length];
              return (
                <motion.div
                  key={i}
                  {...fade(i * 0.08)}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.06] p-7 transition-all hover:border-white/[0.12] hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}
                >
                  <div
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ background: color.bg, boxShadow: `0 0 30px ${color.glow}` }}
                  >
                    <Icon className="h-6 w-6" style={{ color: color.text }} />
                  </div>
                  <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-white">{title}</h3>
                  <p className="mt-2 text-[14px] font-medium leading-[1.7] text-white/45">{desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.04] py-20" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[900px] px-6">
          <motion.div
            {...fade(0)}
            className="overflow-hidden rounded-2xl border border-primary/15"
            style={{
              background: "linear-gradient(135deg, rgba(45,212,191,0.04), rgba(139,92,246,0.03))",
              backdropFilter: "blur(12px)",
              boxShadow: "0 0 40px rgba(255,178,44,0.06)",
            }}
          >
            <div className="px-8 py-8 sm:px-10">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold uppercase tracking-[0.08em] text-primary">
                    AI thinks. You approve.
                  </h3>
                  <p className="mt-2 text-[15px] font-medium leading-[1.7] text-white/50">{governance}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/[0.04] pb-28 pt-20" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="grid gap-12 sm:grid-cols-2">
            <motion.div {...fade(0)}>
              <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
                Connects with
              </p>
              <div className="flex flex-wrap gap-2">
                {connectors.map((c) => (
                  <span
                    key={c}
                    className="rounded-lg border border-white/[0.06] px-4 py-2 text-[13px] font-semibold tracking-[-0.02em] text-white/45"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div {...fade(0.08)}>
              <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
                KPIs tracked
              </p>
              <div className="flex flex-wrap gap-2">
                {metrics.map((m) => (
                  <span
                    key={m}
                    className="rounded-lg border border-white/[0.06] px-4 py-2 text-[13px] font-semibold tracking-[-0.02em] text-white/45"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28" style={{ background: "#05070A" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] blur-[120px]" style={{ background: "radial-gradient(circle, rgba(255,178,44,0.4), transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-[700px] px-6 text-center">
          <motion.h2
            {...fade(0)}
            className="text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[48px]"
          >
            See it working{" "}
            <span className="text-primary">in your context</span>
          </motion.h2>
          <motion.p
            {...fade(0.08)}
            className="mx-auto mt-5 max-w-lg text-[16px] font-medium leading-[1.6] text-white/45"
          >
            Book a 20-minute walkthrough and we&apos;ll show you how it looks with your own tools connected.
          </motion.p>
          <motion.div {...fade(0.16)} className="mt-8">
            <Link
              href="/contact?intent=demo"
              className="inline-flex h-12 items-center gap-2 rounded-full px-8 text-[15px] font-semibold text-white transition-all hover:opacity-90"
              style={{ background: "var(--gradient-primary)", boxShadow: "0 0 30px rgba(255,178,44,0.15)" }}
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
