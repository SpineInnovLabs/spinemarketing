"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

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
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

const heroFade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring" as const, damping: 16, mass: 1, stiffness: 52, delay },
});

export function IndustrySolutionLayout({
  category,
  headline,
  subheadline,
  ctaLabel = "Explore the workspace →",
  ctaHref = "/contact",
  problem,
  capabilities,
  governance,
  connectors,
  metrics,
}: IndustrySolutionLayoutProps) {
  const [head, accent] = headline.includes(".")
    ? [headline.split(".")[0] + ".", headline.split(".").slice(1).join(".").trim()]
    : headline.includes("—")
    ? [headline.split("—")[0].trim(), headline.split("—").slice(1).join("—").trim()]
    : [headline, ""];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pb-28 pt-40"
        style={{ backgroundColor: "rgb(8, 7, 14)" }}
      >
        <div className="mx-auto max-w-[820px] px-4 text-center">
          <motion.div
            {...heroFade(0.1)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] font-semibold text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {category}
          </motion.div>

          <motion.h1
            {...heroFade(0.25)}
            className="text-[44px] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[60px]"
          >
            {head}{" "}
            {accent && <span className="text-primary">{accent}</span>}
          </motion.h1>

          <motion.p
            {...heroFade(0.4)}
            className="mx-auto mt-7 max-w-2xl text-[17px] font-medium leading-[1.55] tracking-[-0.02em] text-white/55"
          >
            {subheadline}
          </motion.p>

          <motion.div {...heroFade(0.52)} className="mt-9">
            <Link
              href={ctaHref}
              className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-[14px] font-semibold tracking-[-0.02em] text-white transition-opacity hover:opacity-90"
            >
              {ctaLabel}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── The Problem ──────────────────────────────────────────── */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <motion.div {...fade(0)}>
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
                The Problem
              </p>
              <h2 className="section-heading leading-[1.15]">
                Data is everywhere.{" "}
                <span className="text-primary">Clarity is not.</span>
              </h2>
            </motion.div>

            <motion.ul {...fade(0.1)} className="mt-2 space-y-4">
              {problem.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-[15px] font-medium leading-[1.65] text-muted-foreground">
                    {b}
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ── What You Get ─────────────────────────────────────────── */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">
              What you{" "}
              <span className="text-primary">get</span>
            </h2>
          </motion.div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {capabilities.map(({ title, desc }, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.08)}
                className="arvio-card p-6"
              >
                <h3 className="text-[15px] font-semibold tracking-[-0.03em]">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.65] text-muted-foreground">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ── Governance inline callout ─────────────────────────── */}
          <motion.div
            {...fade(0.1)}
            className="mt-8 rounded-xl border border-primary/20 bg-primary/5 px-6 py-4"
          >
            <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-primary">
              Governance by design —{" "}
            </span>
            <span className="text-[14px] font-medium text-muted-foreground">
              {governance}
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Connectors + Metrics strip ───────────────────────────── */}
      <section className="arvio-section border-t border-border">
        <div className="mx-auto max-w-[1100px]">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-16">
            <motion.div {...fade(0)} className="flex-1">
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
                Connects with
              </p>
              <div className="flex flex-wrap gap-2">
                {connectors.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-border bg-muted px-3 py-1 text-[13px] font-medium text-foreground/70"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div {...fade(0.08)} className="flex-1">
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
                KPIs tracked
              </p>
              <div className="flex flex-wrap gap-2">
                {metrics.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-border bg-muted px-3 py-1 text-[13px] font-medium text-foreground/70"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
