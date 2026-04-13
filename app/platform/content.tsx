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

const dimensions = [
  {
    num: "01",
    title: "Spine Equivalent — Vendor-Neutral SSOT",
    body: "Unlike iPaaS tools that only move data or CRMs that lock truth in proprietary schemas, the Spine maintains a normalized, vendor-independent canonical layer. Canonical entities — Account, Contact, Deal, Ticket, Invoice, Project — exist as neutral objects, not Salesforce rows or HubSpot records. Continuous bidirectional sync with conflict resolution, not batch ETL. Automatic drift detection when upstream APIs change.",
  },
  {
    num: "02",
    title: "Entity 360 — Live Cross-System View",
    body: "Not a dashboard. Not a report. A queryable, living object assembled in real-time. CRM status + billing health + open tickets + product usage + recent stakeholder emails + renewal timeline in one view. When two systems disagree, the Spine flags it; AI suggests resolution based on source-of-record rules you define. Point-in-time reconstruction — see exactly what was known on any historical date.",
  },
  {
    num: "03",
    title: "Proactive Signal Detection",
    body: "AI monitors the Spine continuously, not on-demand. Cross-system patterns: \"Usage dropped 30% AND champion left AND ticket volume spiked\" = churn risk before the CRM shows it. Every signal carries a confidence score (0–100) based on data freshness and source reliability. Low-confidence or stale signals are quarantined, not surfaced.",
  },
  {
    num: "04",
    title: "Reasoning with Evidence — The Think Layer",
    body: "A dedicated cognitive layer that shows its work. Chain-of-thought: AI explains why it flagged an account as \"At Risk,\" with hyperlinks to source records across systems. Every recommendation explicitly states impact on both vendor goals and client business goals. No insight without goal_refs linking back to canonical Spine entities.",
  },
  {
    num: "05",
    title: "Non-Bypassable HITL — Human-in-the-Loop",
    body: "Human approval is an architectural gate, not a workflow add-on. All AI-generated actions route through the TruthLayer — a governance membrane that requires human authorization before any write operation. Every approval, rejection, and edit is append-only, signed, and timestamped in the Spine's decision log. Even admin force actions create traceable exceptions, never silent executions.",
  },
];

const pipeline = [
  { stage: "1. Ingest", fn: "Webhooks, APIs, email ingestion, file drops", touch: "Connector configuration approval" },
  { stage: "2. Normalize", fn: "Schema mapping, deduplication, canonicalization", touch: "Schema drift review" },
  { stage: "3. Store", fn: "Spine SSOT, versioned entities, relation graphs", touch: "Data retention governance" },
  { stage: "4. Render", fn: "Workspace views, Entity 360 assembly", touch: "View customization" },
  { stage: "5. Think", fn: "AI signal detection, pattern analysis, reasoning", touch: "Confidence threshold tuning" },
  { stage: "6. Govern (HITL)", fn: "TruthLayer scoring, approval routing, evidence display", touch: "Mandatory approval gate" },
  { stage: "7. Act", fn: "Write-backs to connected systems, task creation", touch: "Execute or reschedule" },
  { stage: "8. Re-ingest", fn: "Action outcomes flow back to Spine as new truth", touch: "Outcome validation" },
];

const specs = [
  { label: "Infrastructure", value: "Cloudflare (Workers, D1, R2, Queues) + Supabase (PostgreSQL, Auth, Realtime)" },
  { label: "Protocol", value: "Event-driven with idempotency keys, DLQ for failed webhooks, circuit breakers for API limits" },
  { label: "Security", value: "End-to-end encryption at rest (AES-256) and in transit (TLS 1.3), SOC 2 Type II audit trail" },
  { label: "Scale", value: "Sub-100ms query latency for Entity 360 assembly; 99.9% uptime SLA on Spine availability" },
];

export function PlatformContent() {
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
            Platform
          </motion.div>

          <motion.h1
            {...heroFade(0.25)}
            className="text-[44px] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[64px]"
          >
            The Adaptive{" "}
            <span className="text-primary">Spine Architecture</span>
          </motion.h1>

          <motion.p
            {...heroFade(0.4)}
            className="mx-auto mt-7 max-w-2xl text-[17px] font-medium leading-[1.55] tracking-[-0.02em] text-white/55"
          >
            A vendor-neutral intelligence layer that normalizes truth across your
            systems, governs every AI action through non-bypassable human
            approval, and writes nothing back without explicit consent.
          </motion.p>

          <motion.div {...heroFade(0.52)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-[14px] font-semibold tracking-[-0.02em] text-white transition-opacity hover:opacity-90"
            >
              Explore the architecture →
            </Link>
            <Link
              href="/integrations"
              className="inline-flex h-11 items-center rounded-full border border-white/15 px-6 text-[14px] font-semibold tracking-[-0.02em] text-white/70 transition-colors hover:border-white/30 hover:text-white"
            >
              View integration docs →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Five Dimensions ──────────────────────────────────────── */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              The Five Dimensions
            </p>
            <h2 className="section-heading">
              The architectural differentiators that create{" "}
              <span className="text-primary">the whitespace IntegrateWise occupies.</span>
            </h2>
          </motion.div>

          <div className="mt-14 space-y-4">
            {dimensions.map(({ num, title, body }, i) => (
              <motion.div
                key={num}
                {...fade(i * 0.06)}
                className="arvio-card p-7"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0 text-[13px] font-bold tracking-[0.06em] text-primary/60">
                    {num}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold tracking-[-0.03em]">
                      {title}
                    </h3>
                    <p className="mt-2 text-[14px] font-medium leading-[1.7] text-muted-foreground">
                      {body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8-Stage Pipeline ─────────────────────────────────────── */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              The 8-Stage Pipeline
            </p>
            <h2 className="section-heading">
              How data flows from chaos{" "}
              <span className="text-primary">to governed intelligence</span>
            </h2>
          </motion.div>

          <motion.div {...fade(0.12)} className="mt-12 overflow-hidden rounded-2xl border border-border bg-background">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-left text-[12px] font-bold uppercase tracking-[0.1em] text-primary w-[28%]">
                    Stage
                  </th>
                  <th className="px-6 py-4 text-left text-[12px] font-bold uppercase tracking-[0.1em] text-primary">
                    Function
                  </th>
                  <th className="px-6 py-4 text-left text-[12px] font-bold uppercase tracking-[0.1em] text-primary hidden sm:table-cell">
                    Human Touchpoint
                  </th>
                </tr>
              </thead>
              <tbody>
                {pipeline.map(({ stage, fn, touch }, i) => (
                  <tr
                    key={stage}
                    className={i < pipeline.length - 1 ? "border-b border-border/50" : ""}
                  >
                    <td className="px-6 py-4 text-[13px] font-semibold tracking-[-0.02em] text-foreground">
                      {stage}
                    </td>
                    <td className="px-6 py-4 text-[13px] font-medium text-muted-foreground">
                      {fn}
                    </td>
                    <td className="px-6 py-4 text-[13px] font-medium text-muted-foreground hidden sm:table-cell">
                      {touch}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── Technical Specs ──────────────────────────────────────── */}
      <section
        className="arvio-section"
        style={{ backgroundColor: "rgb(8, 7, 14)" }}
      >
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              Technical Specifications
            </p>
            <h2 className="text-[40px] font-semibold leading-[1.15] tracking-[-0.05em] text-white sm:text-[48px]">
              Built for{" "}
              <span className="text-primary">production scale</span>
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {specs.map(({ label, value }, i) => (
              <motion.div
                key={label}
                {...fade(i * 0.07)}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6"
              >
                <div className="text-[12px] font-bold uppercase tracking-[0.1em] text-primary mb-2">
                  {label}
                </div>
                <p className="text-[14px] font-medium leading-[1.65] text-white/55">
                  {value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
