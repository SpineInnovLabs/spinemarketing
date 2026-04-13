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
  solution: {
    paragraph: string;
    workspaceName?: string;
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
  solution,
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
              {problem.intro && (
                <p className="mt-4 text-[15px] font-medium leading-[1.65] text-muted-foreground">
                  {problem.intro}
                </p>
              )}
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

      {/* ── The Solution ─────────────────────────────────────────── */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              The Solution
            </p>
            <h2 className="section-heading">
              One workspace.{" "}
              <span className="text-primary">Every system.</span>
            </h2>
          </motion.div>
          <motion.div
            {...fade(0.12)}
            className="mt-10 mx-auto max-w-3xl rounded-2xl border border-border bg-background p-8"
          >
            {solution.workspaceName && (
              <div className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
                {solution.workspaceName}
              </div>
            )}
            <p className="text-[16px] font-medium leading-[1.7] text-foreground/80">
              {solution.paragraph}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Core Capabilities ────────────────────────────────────── */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">
              Core{" "}
              <span className="text-primary">capabilities</span>
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
        </div>
      </section>

      {/* ── Governance ───────────────────────────────────────────── */}
      <section
        className="arvio-section"
        style={{ backgroundColor: "rgb(8, 7, 14)" }}
      >
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <motion.div {...fade(0)}>
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
                Governance by design
              </p>
              <h2 className="text-[36px] font-semibold leading-[1.15] tracking-[-0.05em] text-white sm:text-[44px]">
                AI proposes.{" "}
                <span className="text-primary">You decide.</span>
              </h2>
            </motion.div>
            <motion.p {...fade(0.12)} className="text-[15px] font-medium leading-[1.75] text-white/55">
              {governance}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Connectors + Metrics ─────────────────────────────────── */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-12 sm:grid-cols-2">
            <motion.div {...fade(0)}>
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-4">
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
            <motion.div {...fade(0.1)}>
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-4">
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
