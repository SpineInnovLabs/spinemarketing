"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, RefreshCw, Database, Brain } from "lucide-react";

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

const operationalLoop = [
  {
    num: "1",
    stage: "Load",
    action: "Data ingests from connected tools via APIs, webhooks, email, and file drops",
    layer: "L3 Backend — 8-stage normalization pipeline",
    human: "Configure connections",
  },
  {
    num: "2",
    stage: "Store",
    action: "Normalized into Spine SSOT as canonical entities (Account, Contact, Deal, Ticket…)",
    layer: "L0/L3 Spine",
    human: "Review schema alignment",
  },
  {
    num: "3",
    stage: "Think",
    action: "AI reasons on unified context — detects signals, builds evidence chains, proposes actions",
    layer: "L2 Cognitive — The Twin",
    human: "Set confidence thresholds",
  },
  {
    num: "4",
    stage: "Approve",
    action: "TruthLayer governance checkpoint — confidence scored, evidence reviewed",
    layer: "L2 Governance — TruthLayer",
    human: "Mandatory approval — architectural law, not configuration",
    highlight: true,
  },
  {
    num: "5",
    stage: "Act",
    action: "Approved actions execute write-backs to source systems: CRM, billing, support, email",
    layer: "L3 Backend",
    human: "Trigger or schedule execution",
  },
  {
    num: "6",
    stage: "Adjust",
    action: "Outcomes feed back; AI learns from approved and rejected actions, sharpens future signals",
    layer: "L2 Learning",
    human: "Validate outcomes",
  },
  {
    num: "7",
    stage: "Repeat",
    action: "New data loads, enriched by prior approved knowledge — the loop compounds over time",
    layer: "Full Stack",
    human: "Monitor and govern",
  },
];

const normalizationPipeline = [
  { num: "1", stage: "Ingest", fn: "API polling, webhooks, streaming events, file drops" },
  { num: "2", stage: "Validate", fn: "Schema checking, auth verification, payload integrity" },
  { num: "3", stage: "Parse", fn: "Extract entities from vendor-specific formats" },
  { num: "4", stage: "Normalize", fn: "Map to canonical Spine schema — Account, Contact, Deal, Ticket, Invoice, Project" },
  { num: "5", stage: "Deduplicate", fn: "Merge logic, conflict resolution, golden record creation" },
  { num: "6", stage: "Enrich", fn: "Add metadata, relationships, temporal markers" },
  { num: "7", stage: "Persist", fn: "Write to Spine SSOT with full versioning — point-in-time reconstruction" },
  { num: "8", stage: "Emit", fn: "Trigger downstream events, update Workspace views, notify Cognitive Layer" },
];

const dimensions = [
  {
    num: "01",
    where: "Store stage",
    title: "Spine Equivalent — Vendor-Neutral SSOT",
    body: "Unlike iPaaS tools that only move data or CRMs that lock truth in proprietary schemas, the Spine maintains a normalized, vendor-independent canonical layer. Canonical entities — Account, Contact, Deal, Ticket, Invoice, Project — exist as neutral objects, not Salesforce rows or HubSpot records. Continuous bidirectional sync with conflict resolution, not batch ETL. Automatic drift detection when upstream APIs change.",
  },
  {
    num: "02",
    where: "Rendered from Store, queried during Think",
    title: "Entity 360 — Live Cross-System View",
    body: "Not a dashboard. Not a report. A queryable, living object assembled in real-time from the Spine. CRM status + billing health + open tickets + product usage + recent stakeholder emails + renewal timeline in one view. When two systems disagree, the Spine flags it; AI suggests resolution based on source-of-record rules you define.",
  },
  {
    num: "03",
    where: "Think stage",
    title: "Proactive Signal Detection",
    body: "AI monitors the Spine continuously, not on-demand. Cross-system patterns: 'Usage dropped 30% AND champion left AND ticket volume spiked' = churn risk before the CRM shows it. Every signal carries a confidence score (0–100) based on data freshness and source reliability. Low-confidence or stale signals are quarantined, not surfaced.",
  },
  {
    num: "04",
    where: "Think stage → feeds Approve",
    title: "Reasoning with Evidence",
    body: "A dedicated cognitive layer that shows its work. Chain-of-thought: AI explains why it flagged an account as 'At Risk,' with hyperlinks to source records across systems. Every recommendation explicitly states impact on both vendor goals and client business goals. No insight without goal_refs linking back to canonical Spine entities.",
  },
  {
    num: "05",
    where: "Approve stage — the gate between Think and Act",
    title: "Non-Bypassable HITL — Human-in-the-Loop",
    body: "Human approval is an architectural gate, not a workflow add-on. All AI-generated actions route through TruthLayer — a governance membrane that requires human authorization before any write operation. Every approval, rejection, and edit is append-only, signed, and timestamped in the Spine's decision log. Even admin force actions create traceable exceptions, never silent executions.",
  },
];

const specs = [
  { label: "Infrastructure", value: "Cloudflare (Workers, D1, R2, Queues) + Supabase (PostgreSQL, Auth, Realtime)" },
  { label: "Protocol", value: "Event-driven with idempotency keys, dead-letter queues for failed webhooks, circuit breakers for API rate limits" },
  { label: "Security", value: "End-to-end encryption at rest (AES-256) and in transit (TLS 1.3), SOC 2 Type II audit trail, immutable decision log" },
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
            Two convergent loops — one human-governed, one system-governed —
            unifying at the Spine. AI thinks in context, but cannot act without
            explicit human approval.
          </motion.p>

          <motion.div {...heroFade(0.52)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact?intent=demo"
              className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-[14px] font-semibold tracking-[-0.02em] text-white transition-opacity hover:opacity-90"
            >
              Explore the architecture →
            </Link>
            <Link
              href="/integrations"
              className="inline-flex h-11 items-center rounded-full border border-white/15 px-6 text-[14px] font-semibold tracking-[-0.02em] text-white/70 transition-colors hover:border-white/30 hover:text-white"
            >
              View integrations →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── The Operational Loop ─────────────────────────────────── */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              The Operational Loop
            </p>
            <h2 className="section-heading">
              The 7-stage cycle that governs{" "}
              <span className="text-primary">how work actually flows</span>
            </h2>
            <p className="mt-4 text-[16px] font-medium leading-[1.55] text-muted-foreground">
              This is the loop users experience — the rhythm of governed
              intelligence. Between Think and Act sits the non-bypassable{" "}
              <strong className="text-foreground">Approve</strong> gate.
              Architectural law, not configuration.
            </p>
          </motion.div>

          {/* Loop flow label */}
          <motion.div {...fade(0.1)} className="mt-10 flex flex-wrap items-center justify-center gap-1.5 text-[13px] font-semibold">
            {["Load", "Store", "Think", "Approve", "Act", "Adjust", "Repeat"].map((s, i, arr) => (
              <span key={s} className="flex items-center gap-1.5">
                <span
                  className={`rounded-lg px-3 py-1 ${
                    s === "Approve"
                      ? "bg-primary text-white"
                      : "bg-muted text-foreground/70 border border-border/60"
                  }`}
                >
                  {s}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-muted-foreground/50">→</span>
                )}
              </span>
            ))}
          </motion.div>

          <motion.div {...fade(0.15)} className="mt-8 overflow-hidden rounded-2xl border border-border bg-background">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.1em] text-primary w-[12%]">
                    #
                  </th>
                  <th className="px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.1em] text-primary w-[15%]">
                    Stage
                  </th>
                  <th className="px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.1em] text-primary">
                    What happens
                  </th>
                  <th className="px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.1em] text-primary hidden lg:table-cell">
                    Human role
                  </th>
                </tr>
              </thead>
              <tbody>
                {operationalLoop.map(({ num, stage, action, layer, human, highlight }, i) => (
                  <tr
                    key={stage}
                    className={[
                      i < operationalLoop.length - 1 ? "border-b border-border/50" : "",
                      highlight ? "bg-primary/5" : "",
                    ].join(" ")}
                  >
                    <td className="px-5 py-4 text-[13px] font-bold text-primary/60">
                      {num}
                    </td>
                    <td className="px-5 py-4">
                      <span className={`text-[14px] font-bold tracking-[-0.02em] ${highlight ? "text-primary" : "text-foreground"}`}>
                        {stage}
                      </span>
                      {highlight && (
                        <span className="ml-2 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-primary">
                          Gate
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-[13px] font-medium text-foreground">{action}</p>
                      <p className="mt-0.5 text-[11px] text-muted-foreground/70">{layer}</p>
                    </td>
                    <td className="px-5 py-4 text-[13px] font-medium text-muted-foreground hidden lg:table-cell">
                      {human}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── 8-Stage Normalization Pipeline ───────────────────────── */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              L3 Universal Backend
            </p>
            <h2 className="section-heading">
              The 8-stage normalization pipeline —{" "}
              <span className="text-primary">how raw data becomes Spine truth</span>
            </h2>
            <p className="mt-4 text-[16px] font-medium leading-[1.55] text-muted-foreground">
              This pipeline executes the <strong className="text-foreground">Load</strong> and{" "}
              <strong className="text-foreground">Store</strong> phases of the operational loop.
              By stage 8, scattered tool data has become queryable canonical truth.
            </p>
          </motion.div>

          <motion.div {...fade(0.12)} className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {normalizationPipeline.map(({ num, stage, fn }, i) => (
              <motion.div
                key={stage}
                {...fade(i * 0.04)}
                className="arvio-card p-5"
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg text-[12px] font-bold text-white" style={{ background: "var(--gradient-primary-icon)" }}>
                    {num}
                  </span>
                  <span className="text-[14px] font-bold tracking-[-0.02em] text-foreground">
                    {stage}
                  </span>
                </div>
                <p className="text-[12px] font-medium leading-[1.55] text-muted-foreground">
                  {fn}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Two Core Loops ───────────────────────────────────────── */}
      <section
        className="arvio-section"
        style={{ backgroundColor: "rgb(8, 7, 14)" }}
      >
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              Dual Loop Architecture
            </p>
            <h2 className="text-[40px] font-semibold leading-[1.15] tracking-[-0.05em] text-white sm:text-[48px]">
              Two loops.{" "}
              <span className="text-primary">One Spine.</span>
            </h2>
            <p className="mt-4 text-[16px] font-medium leading-[1.55] text-white/45">
              Both loops converge at the Spine SSOT — the universal truth layer
              that feeds the Workspace and the Cognitive Layer.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Loop A */}
            <motion.div
              {...fade(0.08)}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "var(--gradient-primary-icon)" }}>
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-primary">Loop A</p>
                  <p className="text-[16px] font-bold tracking-[-0.03em] text-white">Context → Truth</p>
                </div>
                <span className="ml-auto rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold text-white/50">
                  Human-Governed
                </span>
              </div>
              <p className="text-[13px] font-medium leading-[1.6] text-white/50 mb-5">
                The <em>slow</em> loop — strategic decisions, customer-facing actions, knowledge creation.
              </p>
              <div className="mb-5 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[12px] font-mono text-white/40 leading-[1.8]">
                  Context → Load → Store → Think →{" "}
                  <span className="font-bold text-primary">Approve</span> → Act → Adjust → Repeat
                </p>
              </div>
              <ul className="space-y-2">
                {[
                  "High-stakes customer interactions",
                  "Write operations to CRM, billing, support",
                  "Knowledge memory formation from approved insights",
                  "Mandatory HITL gate — cannot be bypassed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] font-medium text-white/55">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Loop B */}
            <motion.div
              {...fade(0.12)}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <RefreshCw className="h-5 w-5 text-white/60" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/40">Loop B</p>
                  <p className="text-[16px] font-bold tracking-[-0.03em] text-white">Tool → Truth</p>
                </div>
                <span className="ml-auto rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold text-white/50">
                  System-Governed
                </span>
              </div>
              <p className="text-[13px] font-medium leading-[1.6] text-white/50 mb-5">
                The <em>fast</em> loop — data hygiene, synchronization, passive monitoring. No human bottleneck.
              </p>
              <div className="mb-5 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[12px] font-mono text-white/40 leading-[1.8]">
                  Tool APIs → 8-stage pipeline → Store → Spine updates → Adjust → Repeat
                </p>
              </div>
              <ul className="space-y-2">
                {[
                  "Read-only synchronization and normalization",
                  "Data quality maintenance and drift detection",
                  "Background entity resolution and field mapping",
                  "High-frequency, system-governed — never executes customer-facing Acts",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] font-medium text-white/55">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Convergence note */}
          <motion.div {...fade(0.18)} className="mt-6 rounded-2xl border border-primary/20 bg-primary/[0.06] p-5 text-center">
            <div className="flex items-center justify-center gap-2.5">
              <Database className="h-4 w-4 text-primary" />
              <p className="text-[14px] font-semibold text-white">
                Both loops write to the{" "}
                <span className="text-primary">Spine SSOT</span> — the single
                source of truth that feeds every Workspace view and every AI
                reasoning session.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Five Architectural Dimensions ────────────────────────── */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              The Five Dimensions
            </p>
            <h2 className="section-heading">
              Architectural differentiators —{" "}
              <span className="text-primary">mapped to the loop</span>
            </h2>
          </motion.div>

          <div className="mt-14 space-y-4">
            {dimensions.map(({ num, where, title, body }, i) => (
              <motion.div
                key={num}
                {...fade(i * 0.06)}
                className="arvio-card p-7"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0 text-[13px] font-bold tracking-[0.06em] text-primary/60">
                    {num}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 inline-flex items-center rounded-full border border-border/50 bg-muted px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground">
                      {where}
                    </div>
                    <h3 className="text-[16px] font-semibold tracking-[-0.03em] text-foreground">
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

      {/* ── Governance Architecture ───────────────────────────────── */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              Governance Architecture
            </p>
            <h2 className="section-heading">
              TruthLayer sits between Think and Approve.{" "}
              <span className="text-primary">Always.</span>
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "TruthLayer position",
                body: "Sits between Think and Approve, scoring confidence, tracing evidence, checking freshness before presenting to humans. Every signal has provenance back to a Spine entity.",
              },
              {
                icon: Brain,
                title: "Approval topology",
                body: "Loop A (Context → Truth) always stops at Approve. Human must authorize before Act. Loop B (Tool → Truth) auto-completes Load → Store → Adjust for data sync — but never executes customer-facing Acts.",
              },
              {
                icon: Database,
                title: "Audit immutability",
                body: "Every Approve, Act, and Adjust creates an append-only log in the Spine's decision graph — traceable back through the 8-stage pipeline to the original Load source. No silent executions. No gaps.",
              },
            ].map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                {...fade(i * 0.08)}
                className="arvio-card p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "var(--gradient-primary-icon)" }}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-[15px] font-semibold tracking-[-0.03em] text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-[13px] font-medium leading-[1.65] text-muted-foreground">
                  {body}
                </p>
              </motion.div>
            ))}
          </div>
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

          <motion.div {...fade(0.2)} className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link
              href="/platform/architecture"
              className="inline-flex h-10 items-center rounded-full border border-white/15 px-5 text-[13px] font-semibold text-white/60 transition-colors hover:border-white/30 hover:text-white"
            >
              Deep dive: Architecture →
            </Link>
            <Link
              href="/platform/the-spine"
              className="inline-flex h-10 items-center rounded-full border border-white/15 px-5 text-[13px] font-semibold text-white/60 transition-colors hover:border-white/30 hover:text-white"
            >
              The Spine →
            </Link>
            <Link
              href="/platform/truthlayer"
              className="inline-flex h-10 items-center rounded-full border border-white/15 px-5 text-[13px] font-semibold text-white/60 transition-colors hover:border-white/30 hover:text-white"
            >
              TruthLayer →
            </Link>
            <Link
              href="/integrations"
              className="inline-flex h-10 items-center rounded-full border border-white/15 px-5 text-[13px] font-semibold text-white/60 transition-colors hover:border-white/30 hover:text-white"
            >
              Integrations →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
