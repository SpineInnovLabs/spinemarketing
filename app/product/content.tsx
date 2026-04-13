"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  LayoutDashboard,
  Brain,
  ShieldCheck,
  TrendingUp,
  Clock,
  CheckCircle2,
  Zap,
  ArrowRight,
} from "lucide-react";

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
    icon: LayoutDashboard,
    title: "Where your team works every day",
    accent: "from-primary/20 to-primary/5",
    border: "border-primary/20",
    items: [
      {
        name: "Account Command Center",
        desc: "Every email, ticket, invoice, and meeting — unified in one timeline. AI surfaces risk signals with severity scores and drafts follow-ups for your approval.",
      },
      {
        name: "Portfolio Views",
        desc: "Health heatmaps, renewal calendars, and expansion pipelines for CSMs. Revenue risk waterfalls and project exception lists for Ops Leaders.",
      },
      {
        name: "Knowledge Memory",
        desc: "Approved insights compound. Rejected actions teach the system. Your workspace grows sharper over time without ever touching source systems.",
      },
    ],
  },
  {
    tag: "Intelligence Layer",
    icon: Brain,
    title: "AI that understands your business context",
    accent: "from-violet-500/15 to-violet-500/5",
    border: "border-violet-500/20",
    items: [
      {
        name: "Morning Brief",
        desc: "AI-generated digest of what changed overnight across your portfolio — exceptions ranked by revenue impact, not notification volume.",
      },
      {
        name: "Proactive Signals",
        desc: "\"FinanceFlow: Payment failed + Champion left + 3 P1 tickets\" — linked, scored, and surfaced before you ask.",
      },
      {
        name: "Session Continuity",
        desc: "Ask \"What happened with TechServe last week?\" AI answers from the unified timeline — grounded in real data, not memory hallucination.",
      },
    ],
  },
  {
    tag: "Spine Foundation",
    icon: ShieldCheck,
    title: "Invisible infrastructure you can trust",
    accent: "from-amber-500/15 to-amber-500/5",
    border: "border-amber-500/20",
    items: [
      {
        name: "Evidence-First Governance",
        desc: "Every suggestion shows its source data and confidence score before anything can proceed.",
      },
      {
        name: "Configurable Approval Flows",
        desc: "Route suggestions to CSM, Manager, or Finance based on impact and risk thresholds you define.",
      },
      {
        name: "Write-Back Safety",
        desc: "Approved actions execute via idempotent APIs with automatic retry and rollback. No silent side effects.",
      },
    ],
  },
];

const modules = [
  {
    title: "Account Intelligence",
    desc: "Health scoring across CRM, billing, and support with a 90-day renewal risk lookahead.",
    href: "/product/workbench",
  },
  {
    title: "Revenue & Collections",
    desc: "AI drafts payment reminders with the right tone based on relationship status and payment history.",
    href: "/product/twin-operations",
  },
  {
    title: "Escalation & Risk",
    desc: "Pattern detection across tickets — surface product risk before it becomes churn.",
    href: "/product/twin-insights",
  },
  {
    title: "Executive Console",
    desc: "Board-ready briefs from live data. \"$2.1M at risk, 4 expansions identified, 12 actions pending.\"",
    href: "/product/workbench",
  },
];

const governancePrinciples = [
  {
    icon: CheckCircle2,
    title: "Approval Required",
    desc: "No auto-approve for critical actions. The human gate is mandatory.",
  },
  {
    icon: Zap,
    title: "Evidence Visibility",
    desc: "Every suggestion links back to source data — never a black-box recommendation.",
  },
  {
    icon: Clock,
    title: "Full Audit Log",
    desc: "Who approved what, when, and based on which data. Immutable and append-only.",
  },
  {
    icon: ArrowRight,
    title: "Reversibility",
    desc: "Approved actions can be rolled back within 24 hours if an error is detected.",
  },
];

const socialProofMetrics = [
  { value: "500+", label: "B2B accounts managed" },
  { value: "40+", label: "system connectors" },
  { value: "< 90s", label: "average time to first insight" },
  { value: "100%", label: "human approval required" },
];

const trustedByLogos = [
  "SaaS Co",
  "FinanceFlow",
  "TechServe",
  "RevOps Inc",
  "GrowthPath",
];

export function ProductContent() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pb-20 pt-40"
        style={{ backgroundColor: "rgb(8, 7, 14)" }}
      >
        {/* Subtle radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 45% at 50% 0%, rgba(27,167,132,0.10) 0%, transparent 100%)",
          }}
        />

        <div className="relative mx-auto max-w-[820px] px-4 text-center">
          <motion.div
            {...heroFade(0.1)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] font-semibold text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Product overview
          </motion.div>

          <motion.h1
            {...heroFade(0.25)}
            className="text-[44px] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[64px]"
          >
            Stop switching tabs.{" "}
            <span className="text-primary">Start seeing the full picture.</span>
          </motion.h1>

          <motion.p
            {...heroFade(0.4)}
            className="mx-auto mt-7 max-w-2xl text-[17px] font-medium leading-[1.55] tracking-[-0.02em] text-white/55"
          >
            IntegrateWise connects your CRM, billing, support, and project tools into
            one live workspace. AI surfaces what needs attention, drafts the next
            action, and waits for your approval — before touching anything.
          </motion.p>

          <motion.div
            {...heroFade(0.52)}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/contact?intent=demo"
              className="inline-flex h-11 items-center rounded-full bg-primary px-7 text-[14px] font-semibold tracking-[-0.02em] text-white transition-opacity hover:opacity-90"
            >
              Book a live demo →
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center rounded-full border border-white/15 px-6 text-[14px] font-semibold tracking-[-0.02em] text-white/70 transition-colors hover:border-white/30 hover:text-white"
            >
              Book a walkthrough
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Social Proof Strip ────────────────────────────────────── */}
      <section
        style={{ backgroundColor: "rgb(8, 7, 14)" }}
        className="border-t border-white/[0.06] pb-20"
      >
        <div className="mx-auto max-w-[1100px] px-4">
          {/* Metrics row */}
          <motion.div
            {...fade(0)}
            className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] sm:grid-cols-4"
          >
            {socialProofMetrics.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-1.5 bg-white/[0.02] px-4 py-7"
              >
                <span className="text-[28px] font-bold tracking-[-0.04em] text-white">
                  {value}
                </span>
                <span className="text-center text-[12px] font-medium uppercase tracking-[0.08em] text-white/40">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Trusted-by logo strip */}
          <motion.div
            {...fade(0.08)}
            className="mt-10 flex flex-wrap items-center justify-center gap-2"
          >
            <span className="mr-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/25">
              Trusted by B2B revenue teams at
            </span>
            {trustedByLogos.map((name) => (
              <span
                key={name}
                className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-[13px] font-semibold tracking-[-0.02em] text-white/35"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Product Visual Section ────────────────────────────────── */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              How it works
            </p>
            <h2 className="section-heading">
              From scattered data to{" "}
              <span className="text-primary">one clear action</span>
            </h2>
            <p className="mt-4 text-[15px] font-medium leading-[1.6] text-muted-foreground">
              IntegrateWise reads your tools, reasons across all of them, and presents
              the next move — ready for your approval.
            </p>
          </motion.div>

          {/* Workflow diagram */}
          <motion.div
            {...fade(0.1)}
            className="mt-14 overflow-hidden rounded-2xl border border-border/60 bg-muted"
          >
            {/* Mock UI header bar */}
            <div className="flex items-center gap-2 border-b border-border/60 bg-background/60 px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/60" />
              <span className="h-3 w-3 rounded-full bg-amber-400/60" />
              <span className="h-3 w-3 rounded-full bg-green-400/60" />
              <span className="ml-3 text-[12px] font-semibold text-muted-foreground">
                Account Command Center
              </span>
            </div>

            <div className="grid gap-px bg-border/40 sm:grid-cols-3">
              {/* Step 1 */}
              <div className="flex flex-col gap-3 bg-background p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                  <span className="text-[13px] font-bold text-primary">1</span>
                </div>
                <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                  Connect
                </p>
                <p className="text-[14px] font-semibold tracking-[-0.02em]">
                  Your tools stay where they are
                </p>
                <p className="text-[13px] font-medium leading-[1.6] text-muted-foreground">
                  Salesforce, HubSpot, Jira, Stripe, Zendesk — connect once,
                  IntegrateWise reads everything in real time.
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {["CRM", "Billing", "Support", "Projects"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-muted px-2.5 py-1 text-[11px] font-semibold text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col gap-3 bg-background p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10">
                  <span className="text-[13px] font-bold text-violet-500">
                    2
                  </span>
                </div>
                <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                  Surface
                </p>
                <p className="text-[14px] font-semibold tracking-[-0.02em]">
                  AI reasons across every signal
                </p>
                <div className="mt-1 space-y-2">
                  {[
                    { label: "Payment failed", severity: "High" },
                    { label: "Champion left", severity: "Critical" },
                    { label: "3 open P1 tickets", severity: "High" },
                  ].map(({ label, severity }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-lg border border-border bg-muted px-3 py-2"
                    >
                      <span className="text-[12px] font-medium text-foreground">
                        {label}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                          severity === "Critical"
                            ? "bg-red-500/15 text-red-500"
                            : "bg-amber-500/15 text-amber-500"
                        }`}
                      >
                        {severity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col gap-3 bg-background p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                  <span className="text-[13px] font-bold text-primary">3</span>
                </div>
                <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                  Act
                </p>
                <p className="text-[14px] font-semibold tracking-[-0.02em]">
                  You approve, IntegrateWise executes
                </p>
                <div className="mt-1 rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-[12px] font-semibold text-primary mb-1">
                    AI Draft Ready
                  </p>
                  <p className="text-[12px] font-medium leading-[1.6] text-muted-foreground">
                    "Hi Sarah — wanted to check in given recent activity on
                    FinanceFlow's account. Would tomorrow work for a quick
                    call?"
                  </p>
                  <div className="mt-3 flex gap-2">
                    <button className="rounded-lg bg-primary px-3 py-1.5 text-[11px] font-bold text-white">
                      Approve &amp; Send
                    </button>
                    <button className="rounded-lg border border-border px-3 py-1.5 text-[11px] font-bold text-muted-foreground">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Three Layers ─────────────────────────────────────────── */}
      <section className="arvio-section bg-muted">
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

          <div className="mt-14 space-y-8">
            {layers.map(({ tag, icon: Icon, title, accent, border, items }, li) => (
              <motion.div
                key={tag}
                {...fade(li * 0.1)}
                className={`overflow-hidden rounded-2xl border ${border} bg-gradient-to-br ${accent} p-6 sm:p-8`}
              >
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">
                      {tag}
                    </span>
                    <h3 className="text-[17px] font-semibold tracking-[-0.03em] text-white">
                      {title}
                    </h3>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map(({ name, desc }, ii) => (
                    <div
                      key={ii}
                      className="rounded-xl border border-white/[0.08] bg-white/[0.05] p-4 backdrop-blur-sm"
                    >
                      <div className="text-[13px] font-semibold tracking-[-0.02em] text-white mb-2">
                        {name}
                      </div>
                      <p className="text-[13px] font-medium leading-[1.65] text-white/55">
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

      {/* ── Core Modules + Governance (combined) ─────────────────── */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-16 lg:grid-cols-2">

            {/* Core Modules */}
            <div>
              <motion.div {...fade(0)}>
                <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
                  Core modules
                </p>
                <h2 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.04em]">
                  Built for every{" "}
                  <span className="text-primary">operating context</span>
                </h2>
              </motion.div>
              <div className="mt-8 space-y-3">
                {modules.map(({ title, desc, href }, i) => (
                  <motion.div
                    key={i}
                    {...fade(i * 0.06)}
                    className="flex items-start gap-4 rounded-xl border border-border bg-muted p-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[14px] font-semibold tracking-[-0.02em]">
                          {title}
                        </span>
                        <Link
                          href={href}
                          className="shrink-0 text-[12px] font-semibold text-primary transition-opacity hover:opacity-70"
                        >
                          Learn more →
                        </Link>
                      </div>
                      <p className="mt-1 text-[13px] font-medium leading-[1.6] text-muted-foreground">
                        {desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Governance */}
            <div>
              <motion.div {...fade(0.05)}>
                <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
                  Governance by design
                </p>
                <h2 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.04em]">
                  Control is not{" "}
                  <span className="text-primary">optional</span>
                </h2>
              </motion.div>
              <div className="mt-8 space-y-3">
                {governancePrinciples.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={i}
                    {...fade(0.05 + i * 0.06)}
                    className="flex items-start gap-4 rounded-xl border border-border bg-muted p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold tracking-[-0.02em] mb-1">
                        {title}
                      </div>
                      <p className="text-[13px] font-medium leading-[1.6] text-muted-foreground">
                        {desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
