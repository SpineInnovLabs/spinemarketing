"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, Database, ShieldCheck, Layers, GitMerge } from "lucide-react";

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

const pillars = [
  {
    icon: Brain,
    num: "01",
    title: "The Cognitive Layer",
    subtitle: "Truth → AI Sessions",
    body: "The operational interface for intelligence. Delivers real-time Signals via Digital Twins and approval-driven execution. AI assistance is proactive, not reactive — operating within a governed trust boundary. The Twin monitors the Spine continuously and proposes actions only when signal confidence crosses your defined threshold.",
    links: [{ label: "Intelligence Layer →", href: "/product/intelligence-layer" }],
  },
  {
    icon: Database,
    num: "02",
    title: "Knowledge Memory",
    subtitle: "Context that compounds",
    body: "A persistent intelligence layer that grows daily. Zero-Shot context maintenance — no model retraining required. The system maintains evolving organizational truth incrementally: every approved session, every resolved conflict, every Twin-proposed action adds to the Memory without the latency or cost of fine-tuning.",
    links: [{ label: "The Twin →", href: "/ai" }],
  },
  {
    icon: ShieldCheck,
    num: "03",
    title: "Trust & Governance",
    subtitle: "The Truth Boundary",
    body: "The architectural Truth Boundary. A hard-coded constraint — not a policy, not a configuration option — ensuring AI cannot act in isolation. Provides an absolute mandate: every action touching enterprise data is subject to human oversight and approval. The gate between Think and Act is built into the architecture itself.",
    links: [
      { label: "Truth Boundary →", href: "/product/truth-boundary" },
      { label: "Security →", href: "/platform/security" },
    ],
  },
  {
    icon: Layers,
    num: "04",
    title: "The Workspace",
    subtitle: "Entity 360 → Repeat",
    body: "Twelve domain-specific, schema-driven, role-aware views. The backend ingests new SaaS tools and automatically reconstructs the UI to map data to existing domain views — without code changes. Accounts, deals, projects, and contacts surface as canonical Entity 360 objects, not tool-specific records.",
    links: [
      { label: "Workbench →", href: "/product/workbench" },
      { label: "Entity 360 →", href: "/product/entity-360" },
    ],
  },
];

export function PlatformArchitectureContent() {
  return (
    <>
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
            Platform · Architecture
          </motion.div>
          <motion.h1
            {...heroFade(0.22)}
            className="text-[44px] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[64px]"
          >
            The Four Pillars of the{" "}
            <span className="text-primary">Knowledge Workspace</span>
          </motion.h1>
          <motion.p
            {...heroFade(0.38)}
            className="mx-auto mt-7 max-w-xl text-[17px] font-medium leading-[1.55] tracking-[-0.02em] text-white/50"
          >
            Cognitive Layer. Knowledge Memory. Trust & Governance. The Workspace.
            Four pillars unified through{" "}
            <span className="text-white/80">The Spine</span> — the central
            nervous system connecting every layer into a cohesive operating environment.
          </motion.p>
        </div>
      </section>

      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <div className="space-y-5">
            {pillars.map(({ icon: Icon, num, title, subtitle, body, links }, i) => (
              <motion.div key={num} {...fade(i * 0.07)} className="arvio-card p-8">
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="text-[11px] font-bold tracking-[0.1em] text-primary/50 mb-2">{num}</div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "var(--gradient-primary-icon)" }}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.1em] text-primary">{subtitle}</div>
                    <h3 className="text-[20px] font-semibold tracking-[-0.04em] text-foreground">{title}</h3>
                    <p className="mt-3 text-[14px] font-medium leading-[1.7] text-muted-foreground">{body}</p>
                    <div className="mt-4 flex gap-4">
                      {links.map(({ label, href }) => (
                        <Link key={label} href={href} className="text-[13px] font-semibold text-primary hover:opacity-75">
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="rounded-2xl border border-border bg-background p-8 text-center">
            <GitMerge className="mx-auto mb-4 h-7 w-7 text-primary" />
            <h2 className="text-[28px] font-semibold tracking-[-0.05em] text-foreground">
              The Spine: the central nervous system
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[15px] font-medium leading-[1.6] text-muted-foreground">
              All four pillars manifest through The Spine — the intelligent plumbing that connects Cognitive Layer, Knowledge Memory, Trust Boundary, and Workspace into one cohesive operating environment.
            </p>
            <Link
              href="/platform/the-spine"
              className="mt-5 inline-flex h-10 items-center rounded-full bg-primary px-5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Explore The Spine →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
