"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Plug, RefreshCw, Settings2, Shield, Zap, ArrowRight } from "lucide-react";

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

const inputTypes = [
  {
    type: "SaaS Tools",
    count: "70+",
    desc: "Standard API-driven enterprise software — CRM, billing, support, project management, communication.",
    examples: ["Salesforce", "HubSpot", "Stripe", "Zendesk", "Jira", "Asana", "Slack", "Linear", "Notion", "Intercom", "QuickBooks", "Xero"],
    color: "primary",
  },
  {
    type: "AI Services",
    count: "12+",
    desc: "Direct pipes to LLMs and specialized cognitive processors, feeding structured outputs back into the Spine as typed entities.",
    examples: ["OpenAI", "Anthropic", "Google Gemini", "Perplexity", "Cohere", "Mistral"],
    color: "neutral",
  },
  {
    type: "MCP Protocol",
    count: "Any",
    desc: "Model Context Protocol — a standardized bridge for AI-native communication, enabling models to access local and remote data sources with structured context.",
    examples: ["Local file systems", "Internal databases", "Custom data sources", "Legacy ERPs"],
    color: "neutral",
  },
  {
    type: "Webhooks",
    count: "Unlimited",
    desc: "Flexible, event-driven inputs for real-time capture from any system that can POST. Zero polling latency.",
    examples: ["Custom events", "Form submissions", "Payment events", "Calendar events", "IoT sensors"],
    color: "neutral",
  },
];

const managementFeatures = [
  {
    icon: Plug,
    label: "Connector Directory",
    headline: "Find, configure, activate in minutes",
    body: "Browse 70+ pre-built connectors organized by category. Each connector shows its sync method, data types it provides, and which Spine entity fields it populates. One-click OAuth for most SaaS tools.",
    details: [
      "Search by tool name, data type, or entity field",
      "Preview what data each connector surfaces before activating",
      "Permission scoping — request only the data you need",
      "Sandbox testing before live Spine ingestion",
    ],
  },
  {
    icon: RefreshCw,
    label: "Auto-Upgrade Status",
    headline: "Connector health without manual maintenance",
    body: "Every connector carries a live health indicator. When an upstream API changes its schema, the auto-upgrade protocol detects the drift and remaps to the new structure — your Spine canonical schema stays constant.",
    details: [
      "Live sync status: Connected / Degraded / Action Required",
      "API version tracking with automatic schema remapping",
      "Retry logic and dead-letter queue visibility",
      "Webhook delivery rate and latency dashboards",
    ],
  },
  {
    icon: Settings2,
    label: "Unified Flow Configuration",
    headline: "SaaS + AI Services + MCP + Webhooks — one interface",
    body: "Configure every input type through a single setup flow. No separate admin panels per tool. Define sync frequency, entity mapping, field-level inclusion, and conflict resolution rules from one place.",
    details: [
      "Sync frequency: Real-time, hourly, daily, or manual",
      "Field-level inclusion rules per connector",
      "Entity mapping customization (which Spine fields this connector populates)",
      "Conflict resolution priority order across sources",
    ],
  },
  {
    icon: Shield,
    label: "Contextual Firewalling Controls",
    headline: "Set what each team sees — and what it doesn't",
    body: "Control data visibility by department and industry context. A Sales Twin does not ingest Engineering tickets unless explicitly authorized. Configure exactly which data flows to which Workspace view.",
    details: [
      "Department-level data access controls",
      "Industry filter configuration (prevent cross-domain noise)",
      "Twin-level context permissions",
      "Field-level visibility masking for sensitive PII",
    ],
  },
];

const connectorGrid = [
  "Salesforce", "HubSpot", "Stripe", "Zendesk", "Jira", "Asana",
  "Slack", "Linear", "Notion", "Intercom", "QuickBooks", "Xero",
  "Pipedrive", "Freshdesk", "Monday.com", "Airtable", "GitHub", "GitLab",
  "Harvest", "Toggl", "Calendly", "Google Workspace", "Microsoft 365", "Zoom",
];

export function ProductConnectorsContent() {
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
            Product · Connectors
          </motion.div>

          <motion.h1
            {...heroFade(0.22)}
            className="text-[44px] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[64px]"
          >
            Every input is{" "}
            <span className="text-primary">a connector.</span>
          </motion.h1>

          <motion.p
            {...heroFade(0.38)}
            className="mx-auto mt-7 max-w-xl text-[17px] font-medium leading-[1.55] tracking-[-0.02em] text-white/50"
          >
            The user-facing management layer for the Spine&apos;s integration
            infrastructure. Configure, monitor, and govern every data source —
            SaaS tools, AI services, MCP, and webhooks — from one interface.
          </motion.p>

          <motion.div
            {...heroFade(0.5)}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/contact?intent=demo"
              className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-[14px] font-semibold tracking-[-0.02em] text-white transition-opacity hover:opacity-90"
            >
              See connector setup →
            </Link>
            <Link
              href="/platform/connectors"
              className="inline-flex h-11 items-center rounded-full border border-white/15 px-6 text-[14px] font-semibold tracking-[-0.02em] text-white/60 transition-colors hover:border-white/30 hover:text-white"
            >
              Platform connector docs →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Input Types ──────────────────────────────────────────── */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              Supported Input Types
            </p>
            <h2 className="section-heading">
              Four types of input.{" "}
              <span className="text-primary">One Spine.</span>
            </h2>
            <p className="mt-4 text-[16px] font-medium leading-[1.55] text-muted-foreground">
              Whether it&apos;s a CRM API, an LLM output, an AI-native MCP
              source, or a raw webhook — every input normalizes through the
              same Spine pipeline into canonical entities.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {inputTypes.map(({ type, count, desc, examples }, i) => (
              <motion.div
                key={type}
                {...fade(i * 0.07)}
                className="arvio-card flex flex-col p-6"
              >
                <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.1em] text-primary">
                  {type}
                </div>
                <div className="mb-3 text-[32px] font-bold tracking-[-0.06em] text-foreground leading-none">
                  {count}
                </div>
                <p className="mb-4 flex-1 text-[12px] font-medium leading-[1.6] text-muted-foreground">
                  {desc}
                </p>
                <div className="flex flex-wrap gap-1">
                  {examples.slice(0, 4).map((ex) => (
                    <span
                      key={ex}
                      className="rounded-md border border-border/60 bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground"
                    >
                      {ex}
                    </span>
                  ))}
                  {examples.length > 4 && (
                    <span className="rounded-md border border-border/60 bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                      +{examples.length - 4} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Management Features ───────────────────────────────────── */}
      <section
        className="arvio-section dark-section bg-dark-section"
      >
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              Management Interface
            </p>
            <h2 className="text-[40px] font-semibold leading-[1.15] tracking-[-0.05em] text-white sm:text-[48px]">
              Configure once.{" "}
              <span className="text-primary">Monitor always.</span>
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {managementFeatures.map(({ icon: Icon, label, headline, body, details }, i) => (
              <motion.div
                key={label}
                {...fade(i * 0.07)}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-7"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "var(--gradient-primary-icon)" }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-primary mb-0.5">
                      {label}
                    </div>
                    <h3 className="text-[16px] font-semibold tracking-[-0.04em] text-white">
                      {headline}
                    </h3>
                  </div>
                </div>
                <p className="mb-4 text-[13px] font-medium leading-[1.65] text-white/50">
                  {body}
                </p>
                <ul className="space-y-2">
                  {details.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-[12px] font-medium text-white/40">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Connector Directory ───────────────────────────────────── */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              Connector Directory
            </p>
            <h2 className="section-heading">
              70+ tools.{" "}
              <span className="text-primary">All normalized to the Spine.</span>
            </h2>
          </motion.div>

          <motion.div
            {...fade(0.1)}
            className="mt-12 flex flex-wrap gap-2 justify-center"
          >
            {connectorGrid.map((name) => (
              <span
                key={name}
                className="arvio-card px-4 py-2 text-[13px] font-semibold tracking-[-0.02em] text-foreground"
              >
                {name}
              </span>
            ))}
            <span className="flex items-center gap-1.5 rounded-2xl border border-dashed border-border px-4 py-2 text-[13px] font-semibold text-muted-foreground">
              <Zap className="h-3.5 w-3.5" />
              + 46 more
            </span>
          </motion.div>

          <motion.div {...fade(0.2)} className="mt-8 text-center">
            <Link
              href="/contact?intent=connectors"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-primary hover:opacity-80"
            >
              Request a connector we don&apos;t have yet <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Auto-Upgrade callout ──────────────────────────────────── */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            {...fade(0)}
            className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-8 sm:p-10 text-center"
          >
            <RefreshCw className="mx-auto mb-4 h-7 w-7 text-primary" />
            <h2 className="text-[28px] font-semibold tracking-[-0.05em] text-foreground sm:text-[32px]">
              Auto-Upgrade eliminates connector maintenance
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[15px] font-medium leading-[1.6] text-muted-foreground">
              When Salesforce changes its API, your canonical Spine schema
              stays constant. Only the connector mapping updates — automatically,
              without downtime, without your team touching a line of config.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact?intent=demo"
                className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
              >
                See auto-upgrade in action →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
