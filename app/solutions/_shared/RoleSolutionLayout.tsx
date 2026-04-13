"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export interface FocusItem {
  title: string;
  desc: string;
}

export interface RoleSolutionLayoutProps {
  role: string;
  headline: string;
  subheadline: string;
  ctaLabel?: string;
  ctaHref?: string;
  focus: FocusItem[];
  governanceNote: string;
  connects?: string[];
  metrics?: string[];
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

export function RoleSolutionLayout({
  role,
  headline,
  subheadline,
  ctaLabel = "See it in action →",
  ctaHref = "/contact",
  focus,
  governanceNote,
  connects,
  metrics,
}: RoleSolutionLayoutProps) {
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
            {role}
          </motion.div>

          <motion.h1
            {...heroFade(0.25)}
            className="text-[44px] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[60px]"
          >
            {headline}
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

      {/* ── Focus Areas ──────────────────────────────────────────── */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">
              Built around{" "}
              <span className="text-primary">your daily workflow</span>
            </h2>
          </motion.div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {focus.map(({ title, desc }, i) => (
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
                Governance note
              </p>
              <h2 className="text-[36px] font-semibold leading-[1.15] tracking-[-0.05em] text-white sm:text-[44px]">
                AI assists.{" "}
                <span className="text-primary">You control.</span>
              </h2>
            </motion.div>
            <motion.p
              {...fade(0.12)}
              className="text-[15px] font-medium leading-[1.75] text-white/55"
            >
              {governanceNote}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Connects + Metrics ───────────────────────────────────── */}
      {(connects?.length || metrics?.length) ? (
        <section className="arvio-section">
          <div className="mx-auto max-w-[1100px]">
            <div className="grid gap-12 sm:grid-cols-2">
              {connects?.length ? (
                <motion.div {...fade(0)}>
                  <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-4">
                    Connects with
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {connects.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-border bg-muted px-3 py-1 text-[13px] font-medium text-foreground/70"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ) : null}
              {metrics?.length ? (
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
              ) : null}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
