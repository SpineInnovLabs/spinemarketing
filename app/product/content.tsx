"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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

const layers = [
  {
    tag: "Workbench",
    title: "Where your team works daily",
    items: [
      {
        name: "Account Command Center",
        desc: "Unified timeline: every email, ticket, invoice, note, and meeting across systems in chronological order. Risk & Opportunity Cards — AI-surfaced signals with severity badges. Action Composer: draft emails, update fields, create tasks — queued for approval before execution.",
      },
      {
        name: "Portfolio Views",
        desc: "CSMs see health score heatmaps, renewal calendars, and expansion pipelines. Ops Leaders see revenue risk waterfalls, collection priorities, and project exception lists. Individuals see a morning brief, follow-up memory, and cross-tool task aggregation.",
      },
      {
        name: "Knowledge Memory",
        desc: "Approved insights compound. Rejected actions teach the system. The workspace grows sharper without ever polluting source systems.",
      },
    ],
  },
  {
    tag: "Intelligence Layer",
    title: "The AI that understands context, not just content",
    items: [
      {
        name: "Proactive Intelligence",
        desc: "Morning Brief: AI-generated digest of what changed overnight across your portfolio. Exception Surfacing: \"FinanceFlow Solutions: Payment failed + Champion left + 3 P1 tickets\" — linked and scored. Draft & Propose: AI drafts the follow-up email, the QBR agenda, the escalation memo — you edit and approve.",
      },
      {
        name: "Session Continuity",
        desc: "Conversations are grounded in Spine entities, not floating chat threads. Ask \"What happened with TechServe last week?\" and AI answers from the unified timeline — not memory hallucination.",
      },
    ],
  },
  {
    tag: "Spine Foundation",
    title: "Invisible infrastructure you trust",
    items: [
      {
        name: "TruthLayer Governance",
        desc: "Every proposed action displays its source evidence and confidence score before anything can proceed.",
      },
      {
        name: "Approval Flows",
        desc: "Route suggestions to CSM, Manager, or Finance based on impact and risk thresholds you define.",
      },
      {
        name: "Write-Back Safety",
        desc: "Approved actions execute via idempotent APIs with automatic retry and rollback capabilities.",
      },
    ],
  },
];

const modules = [
  {
    title: "Account Intelligence Workspace",
    desc: "Live Entity 360 for B2B relationships. Health scoring across CRM, product analytics, billing, and support. Renewal risk prediction with 90-day lookahead.",
  },
  {
    title: "Revenue & Collections Intelligence",
    desc: "Cash flow visibility overlaid with customer health. Prioritize collections by \"ability to pay\" and \"strategic importance\" simultaneously. AI drafts payment reminders with appropriate tone based on relationship status.",
  },
  {
    title: "Escalation & Risk Command",
    desc: "Cross-ticket pattern detection. \"Three similar P1 tickets from Enterprise accounts in APAC this week\" surfaced as product risk, not isolated incidents.",
  },
  {
    title: "Executive Operating Console",
    desc: "Board-ready briefs generated from live Spine data — not static spreadsheets. \"This week: $2.1M at risk, 4 expansions identified, 12 actions pending approval.\"",
  },
];

const governancePrinciples = [
  {
    title: "Approval Required",
    desc: "No \"auto-approve\" setting exists for critical actions. The human gate is mandatory.",
  },
  {
    title: "Evidence Visibility",
    desc: "Every AI suggestion includes \"Why this matters\" with source links to canonical Spine entities.",
  },
  {
    title: "Audit Completeness",
    desc: "Who approved the health score change? When? Based on what data? Immutable, append-only log.",
  },
  {
    title: "Reversibility",
    desc: "Approved actions can be rolled back within 24 hours if an error is detected — no silent side effects.",
  },
];

export function ProductContent() {
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
            Product
          </motion.div>

          <motion.h1
            {...heroFade(0.25)}
            className="text-[44px] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[64px]"
          >
            The Knowledge Workspace{" "}
            <span className="text-primary">over the Spine</span>
          </motion.h1>

          <motion.p
            {...heroFade(0.4)}
            className="mx-auto mt-7 max-w-2xl text-[17px] font-medium leading-[1.55] tracking-[-0.02em] text-white/55"
          >
            One interface for accounts, projects, and workflows. AI reads
            everything, suggests the next move, and waits for your approval
            before touching any system.
          </motion.p>

          <motion.div
            {...heroFade(0.52)}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/contact"
              className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-[14px] font-semibold tracking-[-0.02em] text-white transition-opacity hover:opacity-90"
            >
              See live demo →
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center rounded-full border border-white/15 px-6 text-[14px] font-semibold tracking-[-0.02em] text-white/70 transition-colors hover:border-white/30 hover:text-white"
            >
              Watch 3-min overview →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Three Layers ─────────────────────────────────────────── */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              Three layers of product
            </p>
            <h2 className="section-heading">
              One surface.{" "}
              <span className="text-primary">Three layers of intelligence.</span>
            </h2>
          </motion.div>

          <div className="mt-14 space-y-12">
            {layers.map(({ tag, title, items }, li) => (
              <motion.div key={tag} {...fade(li * 0.08)}>
                <div className="mb-6 flex items-center gap-3">
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.1em] text-primary">
                    {tag}
                  </span>
                  <h3 className="text-[18px] font-semibold tracking-[-0.03em]">
                    {title}
                  </h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map(({ name, desc }, ii) => (
                    <div key={ii} className="arvio-card p-5">
                      <div className="text-[13px] font-semibold tracking-[-0.02em] text-foreground mb-2">
                        {name}
                      </div>
                      <p className="text-[13px] font-medium leading-[1.65] text-muted-foreground">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Modules ─────────────────────────────────────────── */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              Core modules
            </p>
            <h2 className="section-heading">
              Purpose-built for{" "}
              <span className="text-primary">every operating context</span>
            </h2>
          </motion.div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {modules.map(({ title, desc }, i) => (
              <motion.div key={i} {...fade(i * 0.07)} className="arvio-card p-6">
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

      {/* ── Governance by Design ─────────────────────────────────── */}
      <section
        className="arvio-section"
        style={{ backgroundColor: "rgb(8, 7, 14)" }}
      >
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              Governance by design
            </p>
            <h2 className="text-[40px] font-semibold leading-[1.15] tracking-[-0.05em] text-white sm:text-[48px]">
              Not optional. Not configurable away.{" "}
              <span className="text-primary">Architecture.</span>
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {governancePrinciples.map(({ title, desc }, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.07)}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6"
              >
                <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-primary mb-2">
                  {title}
                </div>
                <p className="text-[14px] font-medium leading-[1.65] text-white/55">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
