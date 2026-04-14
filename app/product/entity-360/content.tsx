"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Database,
  GitBranch,
  Clock,
  AlertTriangle,
  Activity,
  ArrowRight,
  CheckCircle2,
  XCircle,
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

const entityTypes = [
  {
    type: "Account",
    icon: "🏢",
    fields: ["Health Score", "ARR", "Renewal Date", "Open Tickets", "Last Contact", "Champion Status"],
    systems: ["Salesforce", "HubSpot", "Stripe", "Zendesk"],
  },
  {
    type: "Contact",
    icon: "👤",
    fields: ["Role", "Engagement Score", "Email History", "Last Meeting", "Decision Authority", "LinkedIn"],
    systems: ["Salesforce", "HubSpot", "Gmail", "Calendly"],
  },
  {
    type: "Deal",
    icon: "💼",
    fields: ["Stage", "Value", "Close Date", "Probability", "Blockers", "Next Step"],
    systems: ["Salesforce", "HubSpot", "Slack", "Asana"],
  },
  {
    type: "Project",
    icon: "📋",
    fields: ["Delivery Date", "Utilization", "Margin", "Risk Flags", "Stakeholders", "Open Actions"],
    systems: ["Asana", "Jira", "Harvest", "Slack"],
  },
];

const interfaceComponents = [
  {
    icon: Database,
    label: "Master Entity Cards",
    headline: "Unified objects, not tool-specific records",
    body: "Canonical entities in the Spine. Every field shows source, last sync, and conflicts.",
  },
  {
    icon: GitBranch,
    label: "Relation Graph Navigator",
    headline: "Account → Contacts → Deals → Tickets → Invoices",
    body: "Live visual graph tracing entity relationships. Assembled in real time from the Spine.",
  },
  {
    icon: Clock,
    label: "Temporal Views",
    headline: "Point-in-time reconstruction",
    body: "See any entity as it existed at a specific date in history.",
  },
  {
    icon: AlertTriangle,
    label: "Conflict Resolution UI",
    headline: "Side-by-side when systems disagree",
    body: "Select the canonical truth when sources conflict. Your resolution becomes law.",
  },
  {
    icon: Activity,
    label: "Freshness Indicators",
    headline: "Data staleness badges per field",
    body: "Every field shows when it was last synced from its source system.",
  },
];

export function Entity360Content() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pb-28 pt-40 bg-dark-section"
      >
        <div className="mx-auto max-w-[820px] px-4 text-center">
          <motion.div
            {...heroFade(0.1)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] font-semibold text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Product · Entity 360
          </motion.div>

          <motion.h1
            {...heroFade(0.22)}
            className="text-[44px] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[64px]"
          >
            The Universal{" "}
            <span className="text-primary">Data Object.</span>
          </motion.h1>

          <motion.p
            {...heroFade(0.38)}
            className="mx-auto mt-7 max-w-xl text-[17px] font-medium leading-[1.55] tracking-[-0.02em] text-white/50"
          >
            Every Account, Contact, Deal, and Project as one unified object — the truth, assembled in real time.
          </motion.p>

          <motion.div
            {...heroFade(0.5)}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/contact?intent=demo"
              className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-[14px] font-semibold tracking-[-0.02em] text-white transition-opacity hover:opacity-90"
            >
              See a live Entity 360 →
            </Link>
            <Link
              href="/product/workbench"
              className="inline-flex h-11 items-center rounded-full border border-white/15 px-6 text-[14px] font-semibold tracking-[-0.02em] text-white/60 transition-colors hover:border-white/30 hover:text-white"
            >
              Explore the Workbench →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Entity Types ─────────────────────────────────────────── */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              Master Entity Cards
            </p>
            <h2 className="section-heading">
              Four canonical objects.{" "}
              <span className="text-primary">Every tool's data inside.</span>
            </h2>
            <p className="mt-4 text-[16px] font-medium leading-[1.55] text-muted-foreground">
              Each entity draws from every connected system — not one tool's view.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {entityTypes.map(({ type, icon, fields, systems }, i) => (
              <motion.div
                key={type}
                {...fade(i * 0.07)}
                className="arvio-card p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-2xl">{icon}</span>
                  <span className="text-[16px] font-bold tracking-[-0.04em] text-foreground">
                    {type}
                  </span>
                </div>
                <div className="mb-4 space-y-1.5">
                  {fields.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2 text-[12px] font-medium text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                      {f}
                    </div>
                  ))}
                </div>
                <div className="border-t border-border/50 pt-3">
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground/60">
                    Sources
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {systems.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-border/60 bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Interface Components ─────────────────────────────────── */}
      <section
        className="arvio-section dark-section bg-dark-section"
      >
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              Interface Components
            </p>
            <h2 className="text-[40px] font-semibold leading-[1.15] tracking-[-0.05em] text-white sm:text-[48px]">
              Five views.{" "}
              <span className="text-primary">One complete picture.</span>
            </h2>
          </motion.div>

          <div className="mt-12 space-y-5">
            {interfaceComponents.map(({ icon: Icon, label, headline, body }, i) => (
              <motion.div
                key={label}
                {...fade(i * 0.07)}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-7"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "var(--gradient-primary-icon)" }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.1em] text-primary">
                      {label}
                    </div>
                    <h3 className="text-[17px] font-semibold tracking-[-0.04em] text-white">
                      {headline}
                    </h3>
                    <p className="mt-2 text-[14px] font-medium leading-[1.65] text-white/50">
                      {body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Relation Graph ────────────────────────────────────────── */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              Relation Graph
            </p>
            <h2 className="section-heading">
              Every connection, visible at once
            </h2>
            <p className="mt-4 text-[16px] font-medium leading-[1.55] text-muted-foreground">
              The Spine knows how entities relate. Entity 360 makes them navigable.
            </p>
          </motion.div>

          {/* Graph visual */}
          <motion.div
            {...fade(0.12)}
            className="mt-12 overflow-hidden rounded-2xl border border-border bg-background p-8"
          >
            <div className="flex flex-col items-center gap-4">
              {/* Root */}
              <div className="rounded-xl border-2 border-primary bg-primary/10 px-5 py-3 text-[14px] font-bold tracking-[-0.03em] text-primary">
                Account: Acme Corp
              </div>
              {/* Arrow down */}
              <div className="h-6 w-px bg-border" />
              {/* Level 2 */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: "3 Contacts", sub: "Champion, Exec, Champion", color: "blue" },
                  { label: "2 Deals", sub: "$84k open pipeline", color: "green" },
                  { label: "7 Tickets", sub: "2 high priority", color: "yellow" },
                  { label: "4 Invoices", sub: "1 overdue $12k", color: "red" },
                ].map(({ label, sub, color }) => (
                  <div
                    key={label}
                    className={`rounded-xl border px-4 py-3 text-center ${
                      color === "red"
                        ? "border-red-200 bg-red-50"
                        : color === "yellow"
                        ? "border-amber-200 bg-amber-50"
                        : "border-border bg-muted"
                    }`}
                  >
                    <div className="text-[13px] font-bold tracking-[-0.02em] text-foreground">
                      {label}
                    </div>
                    <div className="mt-0.5 text-[11px] font-medium text-muted-foreground">
                      {sub}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-center text-[12px] font-medium text-muted-foreground">
                Sub-100ms assembly from the Spine
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Conflict Resolution ───────────────────────────────────── */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              Conflict Resolution UI
            </p>
            <h2 className="section-heading">
              When systems disagree, you decide.{" "}
              <span className="text-primary">Once.</span>
            </h2>
            <p className="mt-4 text-[16px] font-medium leading-[1.55] text-muted-foreground">
              Your resolution becomes canonical truth for every downstream AI session.
            </p>
          </motion.div>

          {/* Conflict example */}
          <motion.div
            {...fade(0.12)}
            className="mt-12 rounded-2xl border border-border bg-background overflow-hidden"
          >
            <div className="border-b border-border bg-muted px-6 py-3 flex items-center gap-3">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              <span className="text-[13px] font-semibold text-foreground">
                Conflict detected: ARR for Acme Corp
              </span>
            </div>
            <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
              {[
                {
                  source: "Salesforce",
                  value: "$120,000",
                  updated: "Updated 2 hours ago",
                  recommended: true,
                },
                {
                  source: "QuickBooks",
                  value: "$94,200",
                  updated: "Updated 14 days ago",
                  recommended: false,
                },
              ].map(({ source, value, updated, recommended }) => (
                <div key={source} className={`p-6 ${recommended ? "bg-primary/[0.03]" : ""}`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[12px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                        {source}
                      </div>
                      <div className="mt-1 text-[28px] font-bold tracking-[-0.05em] text-foreground">
                        {value}
                      </div>
                      <div className="mt-1 text-[11px] font-medium text-muted-foreground">
                        {updated}
                      </div>
                    </div>
                    {recommended ? (
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                    ) : (
                      <XCircle className="h-5 w-5 text-muted-foreground/40 mt-1" />
                    )}
                  </div>
                  <button
                    type="button"
                    className={`mt-4 w-full rounded-xl py-2 text-[13px] font-semibold transition-colors ${
                      recommended
                        ? "bg-primary text-white hover:opacity-90"
                        : "border border-border bg-background text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {recommended ? "Use as canonical truth" : "Override with this value"}
                  </button>
                </div>
              ))}
            </div>
            <div className="border-t border-border bg-muted/50 px-6 py-3">
              <p className="text-[11px] font-medium text-muted-foreground">
                Resolution logged in Spine audit trail with your name and timestamp.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Freshness ────────────────────────────────────────────── */}
      <section
        className="arvio-section dark-section bg-dark-section"
      >
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              Freshness Indicators
            </p>
            <h2 className="text-[40px] font-semibold leading-[1.15] tracking-[-0.05em] text-white sm:text-[48px]">
              Know how fresh every field is.{" "}
              <span className="text-primary">Before you act on it.</span>
            </h2>
          </motion.div>

          <motion.div {...fade(0.12)} className="mt-12 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            <div className="border-b border-white/[0.06] px-6 py-3">
              <span className="text-[13px] font-bold tracking-[-0.02em] text-white">
                Acme Corp · Account Record
              </span>
            </div>
            <div className="divide-y divide-white/[0.04]">
              {[
                { field: "ARR", value: "$120,000", source: "Salesforce", age: "2 hours ago", status: "fresh" },
                { field: "Health Score", value: "74 / 100", source: "Internal", age: "6 hours ago", status: "fresh" },
                { field: "Open Tickets", value: "7 (2 high)", source: "Zendesk", age: "12 minutes ago", status: "fresh" },
                { field: "Product Usage (MAU)", value: "1,240 active", source: "Mixpanel", age: "3 days ago", status: "stale" },
                { field: "Invoice Outstanding", value: "$12,000", source: "QuickBooks", age: "14 days ago", status: "stale" },
                { field: "Champion Title", value: "Director of CS", source: "LinkedIn", age: "47 days ago", status: "old" },
              ].map(({ field, value, source, age, status }) => (
                <div
                  key={field}
                  className="grid grid-cols-4 items-center px-6 py-3.5"
                >
                  <span className="text-[13px] font-semibold text-white/80 col-span-1">{field}</span>
                  <span className="text-[13px] font-medium text-white/60 col-span-1">{value}</span>
                  <span className="text-[11px] font-medium text-white/30 col-span-1">{source}</span>
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-[11px] font-medium text-white/30">{age}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] ${
                      status === "fresh" ? "bg-green-500/15 text-green-400" :
                      status === "stale" ? "bg-amber-500/15 text-amber-400" :
                      "bg-red-500/15 text-red-400"
                    }`}>
                      {status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fade(0.2)} className="mt-8 text-center">
            <Link
              href="/contact?intent=demo"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-primary hover:opacity-80"
            >
              See Entity 360 in a live demo <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
