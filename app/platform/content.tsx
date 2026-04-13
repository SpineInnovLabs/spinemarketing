"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Database, Brain, Layers, ShieldCheck, Plug, Wrench, ArrowRight } from "lucide-react";

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

const dataChain = [
  {
    id: "loader",
    label: "Loader",
    desc: "Pulls raw data from every connected tool via APIs, webhooks, streaming events, and file drops. Idempotent ingestion with dead-letter queuing.",
  },
  {
    id: "normalizer",
    label: "Normalizer",
    desc: "Validates, parses, deduplicates, and maps vendor-specific payloads to canonical Spine schema. Golden record creation with conflict resolution.",
  },
  {
    id: "spine-context",
    label: "Spine + Context",
    desc: "Normalized entities (Account, Contact, Deal, Ticket) persist in the SSOT with full versioning. Relationship graphs and temporal markers enrich every record.",
  },
  {
    id: "entity-360",
    label: "Entity 360",
    desc: "A queryable, living object assembled in real-time from Spine — CRM health, billing, tickets, usage, and stakeholder signals unified in one view.",
  },
  {
    id: "twin-data",
    label: "Twin",
    desc: "The Cognitive Layer reads from Spine continuously, detecting cross-system signals and building reasoning chains grounded in canonical entity data.",
  },
];

const aiChain = [
  {
    id: "session-summaries",
    label: "AI Session Summaries",
    desc: "Every customer call, email thread, and meeting auto-summarized, linked to entity records, and persisted in Spine as structured knowledge — not lost in inbox history.",
  },
  {
    id: "triage-bot",
    label: "Triage Bot",
    desc: "Monitors the Spine for risk signals, renewal flags, and anomalies across every account. Surfaces prioritized actions with confidence scores and evidence chains.",
  },
  {
    id: "knowledge-ui",
    label: "Knowledge UI",
    desc: "The Workspace surface where approved insights, session memory, and entity context live side-by-side. No context-switching — everything your team needs is one view.",
  },
  {
    id: "entity-360-ai",
    label: "Entity 360",
    desc: "AI and human context converge at the Entity 360 — the live account, contact, or deal view that combines system data with session intelligence.",
  },
  {
    id: "twin-ai",
    label: "Twin",
    desc: "Your AI counterpart that learns from every approved session, compounds cross-account insights, and gets sharper with every approval and rejection.",
  },
];

const loop = ["Truth", "Context", "AI Sessions", "Entity 360", "Repeat"];

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
            {...heroFade(0.2)}
            className="text-[52px] font-semibold leading-[1.05] tracking-[-0.055em] text-white sm:text-[72px]"
          >
            Truth. Context.{" "}
            <span className="text-primary">AI Sessions.</span>
            <br />
            Entity 360. Repeat.
          </motion.h1>

          <motion.p
            {...heroFade(0.38)}
            className="mx-auto mt-8 max-w-xl text-[17px] font-medium leading-[1.55] tracking-[-0.02em] text-white/50"
          >
            Every tool you use generates data. The Platform turns that data into
            truth, wraps it in context, surfaces it as actionable AI sessions,
            and delivers it as a unified Entity 360.{" "}
            <span className="text-white/80">Then repeats.</span>
          </motion.p>

          {/* Loop pills */}
          <motion.div
            {...heroFade(0.5)}
            className="mt-10 flex flex-wrap items-center justify-center gap-2 text-[13px] font-semibold"
          >
            {loop.map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                <span
                  className={`rounded-xl px-4 py-1.5 ${
                    item === "Entity 360"
                      ? "bg-primary text-white"
                      : "border border-white/10 bg-white/5 text-white/60"
                  }`}
                >
                  {item}
                </span>
                {i < loop.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 text-white/20" />
                )}
              </span>
            ))}
          </motion.div>

          <motion.div
            {...heroFade(0.6)}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/contact?intent=demo"
              className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-[14px] font-semibold tracking-[-0.02em] text-white transition-opacity hover:opacity-90"
            >
              See it in action →
            </Link>
            <Link
              href="/integrations"
              className="inline-flex h-11 items-center rounded-full border border-white/15 px-6 text-[14px] font-semibold tracking-[-0.02em] text-white/60 transition-colors hover:border-white/30 hover:text-white"
            >
              View connectors →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Data Chain: Loader → Normalizer → Spine + Context → Entity 360 → Twin ── */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              The Data Pipeline
            </p>
            <h2 className="section-heading">
              Loader → Normalizer → Spine + Context →{" "}
              <span className="text-primary">Entity 360 → Twin</span>
            </h2>
            <p className="mt-4 text-[16px] font-medium leading-[1.55] text-muted-foreground">
              How raw, fragmented tool data becomes unified canonical truth —
              available to every AI session and every user in real time.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-0 lg:grid-cols-5">
            {dataChain.map(({ id, label, desc }, i) => (
              <motion.div
                key={id}
                {...fade(i * 0.07)}
                className="relative flex flex-col"
              >
                {/* Connector line */}
                {i < dataChain.length - 1 && (
                  <div className="absolute right-0 top-[28px] hidden h-px w-full translate-x-1/2 bg-border/60 lg:block" style={{ width: "50%", right: "-25%" }} />
                )}
                <div className={`arvio-card mx-2 flex flex-1 flex-col p-5 ${label === "Entity 360" ? "border-primary/30 bg-primary/5" : ""}`}>
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-bold text-white shrink-0 ${label === "Entity 360" ? "bg-primary" : ""}`}
                      style={label === "Entity 360" ? {} : { background: "var(--gradient-primary-icon)" }}
                    >
                      {i + 1}
                    </span>
                    <span className={`text-[14px] font-bold tracking-[-0.03em] ${label === "Entity 360" ? "text-primary" : "text-foreground"}`}>
                      {label}
                    </span>
                  </div>
                  <p className="text-[12px] font-medium leading-[1.6] text-muted-foreground">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Chain: AI Sessions → Triage Bot → Knowledge UI → Entity 360 → Twin ── */}
      <section
        className="arvio-section"
        style={{ backgroundColor: "rgb(8, 7, 14)" }}
      >
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              The Intelligence Layer
            </p>
            <h2 className="text-[40px] font-semibold leading-[1.15] tracking-[-0.05em] text-white sm:text-[48px]">
              AI Session Summaries → Triage Bot →{" "}
              <span className="text-primary">Knowledge UI → Entity 360 → Twin</span>
            </h2>
            <p className="mt-4 text-[16px] font-medium leading-[1.55] text-white/45">
              How your team&apos;s interactions become structured knowledge — and
              how the Twin compounds that knowledge into sharper intelligence
              with every approved session.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-0 lg:grid-cols-5">
            {aiChain.map(({ id, label, desc }, i) => (
              <motion.div
                key={id}
                {...fade(i * 0.07)}
                className="relative flex flex-col"
              >
                <div className={`mx-2 flex flex-1 flex-col rounded-2xl border p-5 ${
                  label === "Entity 360"
                    ? "border-primary/30 bg-primary/[0.08]"
                    : "border-white/[0.06] bg-white/[0.03]"
                }`}>
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-bold text-white shrink-0 ${label === "Entity 360" ? "bg-primary" : ""}`}
                      style={label === "Entity 360" ? {} : { background: "rgba(255,255,255,0.08)" }}
                    >
                      {i + 1}
                    </span>
                    <span className={`text-[13px] font-bold tracking-[-0.03em] leading-tight ${
                      label === "Entity 360" ? "text-primary" : "text-white/80"
                    }`}>
                      {label}
                    </span>
                  </div>
                  <p className="text-[12px] font-medium leading-[1.6] text-white/40">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Twin callout */}
          <motion.div
            {...fade(0.3)}
            className="mt-8 rounded-2xl border border-primary/20 bg-primary/[0.06] p-6 text-center"
          >
            <Brain className="mx-auto mb-3 h-5 w-5 text-primary" />
            <p className="text-[15px] font-semibold text-white">
              The Twin learns from every approved session.
            </p>
            <p className="mt-1.5 text-[13px] font-medium text-white/40">
              Every approval, rejection, and edit feeds back into the reasoning
              layer. The more your team uses it, the sharper it gets — across
              all accounts, not just the one in view.
            </p>
            <Link
              href="/ai"
              className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:opacity-80"
            >
              Learn about the Twin <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Foundation: Services, Connectors, Security ───────────── */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              Platform Foundation
            </p>
            <h2 className="section-heading">
              Everything the loop runs on
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: Wrench,
                label: "Services",
                href: "/services",
                headline: "Implementation & Managed Ops",
                body: "Onboarding, connector configuration, schema mapping, and ongoing managed data operations. We get you to truth faster — and keep you there.",
                cta: "Explore services →",
              },
              {
                icon: Plug,
                label: "Connectors",
                href: "/integrations",
                headline: "70+ pre-built connectors",
                body: "Salesforce, HubSpot, Stripe, Jira, Zendesk, Slack, and 65+ more. All normalized through the same 5-stage data chain into a single canonical Spine.",
                cta: "View all connectors →",
              },
              {
                icon: ShieldCheck,
                label: "Security",
                href: "/security",
                headline: "Enterprise-grade governance",
                body: "AES-256 at rest, TLS 1.3 in transit, SOC 2 Type II audit trail, RBAC with field-level permissions, and an immutable decision log for every approved action.",
                cta: "Review security →",
              },
            ].map(({ icon: Icon, label, href, headline, body, cta }, i) => (
              <motion.div
                key={label}
                {...fade(i * 0.08)}
                className="arvio-card flex flex-col p-7"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "var(--gradient-primary-icon)" }}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-primary">
                  {label}
                </div>
                <h3 className="text-[16px] font-semibold tracking-[-0.03em] text-foreground">
                  {headline}
                </h3>
                <p className="mt-2 flex-1 text-[13px] font-medium leading-[1.65] text-muted-foreground">
                  {body}
                </p>
                <Link
                  href={href}
                  className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:opacity-80"
                >
                  {cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dark CTA ─────────────────────────────────────────────── */}
      <section
        className="arvio-section"
        style={{ backgroundColor: "rgb(8, 7, 14)" }}
      >
        <div className="mx-auto max-w-[680px] px-4 text-center">
          <motion.div {...fade(0)}>
            <Database className="mx-auto mb-5 h-8 w-8 text-primary" />
            <h2 className="text-[36px] font-semibold leading-[1.12] tracking-[-0.05em] text-white sm:text-[44px]">
              Truth. Context. AI Sessions.
              <br />
              <span className="text-primary">Entity 360. Repeat.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] font-medium leading-[1.6] text-white/45">
              The loop compounds. Every session sharpens the Twin. Every
              approval enriches the Spine. Every Entity 360 is more complete
              than the last.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact?intent=demo"
                className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-[14px] font-semibold tracking-[-0.02em] text-white transition-opacity hover:opacity-90"
              >
                Book a walkthrough →
              </Link>
              <Link
                href="/product"
                className="inline-flex h-11 items-center rounded-full border border-white/15 px-6 text-[14px] font-semibold tracking-[-0.02em] text-white/60 transition-colors hover:border-white/30 hover:text-white"
              >
                See the Workspace →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
