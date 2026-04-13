"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Plug, Database, Layers, Brain, ShieldCheck } from "lucide-react";

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
            Adaptive Spine Architecture
          </motion.div>

          <motion.h1
            {...heroFade(0.2)}
            className="text-[52px] font-semibold leading-[1.05] tracking-[-0.055em] text-white sm:text-[72px]"
          >
            Connect once.{" "}
            <span className="text-primary">Know everything.</span>
            <br />
            Act with confidence.
          </motion.h1>

          <motion.p
            {...heroFade(0.38)}
            className="mx-auto mt-8 max-w-xl text-[17px] font-medium leading-[1.55] tracking-[-0.02em] text-white/50"
          >
            The Adaptive Spine Architecture turns disconnected apps into a single
            source of truth — surfaced in a two-layer workspace where AI proposes
            and humans approve.
          </motion.p>

          <motion.div
            {...heroFade(0.5)}
            className="mt-10 flex flex-wrap items-center justify-center gap-2 text-[13px] font-semibold"
          >
            {["Connect", "Three Data Paths", "L1 + L2", "Twin", "Canonical Loop"].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-2">
                <span
                  className={`rounded-xl px-4 py-1.5 ${
                    item === "L1 + L2"
                      ? "bg-primary text-white"
                      : "border border-white/10 bg-white/5 text-white/60"
                  }`}
                >
                  {item}
                </span>
                {i < arr.length - 1 && (
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

      {/* ── Step 1: Connect ───────────────────────────────────────── */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
              Step 1 — Connect
            </p>
            <h2 className="section-heading">
              You connect your apps once.{" "}
              <span className="text-primary">The Spine reads them continuously.</span>
            </h2>
            <p className="mt-5 text-[16px] font-medium leading-[1.6] text-white/50">
              OAuth in minutes. No data migration. No engineering team. Your apps
              keep running exactly as they do today — the Spine reads them and
              builds context automatically.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: Plug,
                title: "70+ pre-built connectors",
                desc: "Salesforce, HubSpot, Stripe, Jira, Zendesk, Slack, Notion, GitHub, and 60+ more. All available via OAuth in minutes.",
              },
              {
                icon: Database,
                title: "Read-first architecture",
                desc: "IntegrateWise reads from your systems. No data migration, no data ownership transfer. Your source of truth stays where it is.",
              },
              {
                icon: ShieldCheck,
                title: "Zero-config normalization",
                desc: "The 5-stage data chain (Loader → Normalizer → Spine → Context → Entity 360) runs automatically on every ingestion cycle.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                {...fade(i * 0.08)}
                className="arvio-card flex flex-col p-6"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "var(--gradient-primary-icon)" }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 text-[15px] font-semibold tracking-[-0.03em]">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-[13px] font-medium leading-[1.65] text-muted-foreground">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fade(0.3)} className="mt-6 text-center">
            <Link
              href="/integrations"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:opacity-80"
            >
              See all 70+ connectors <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Step 2: Three Data Paths ──────────────────────────────── */}
      <section
        className="arvio-section dark-section"
        style={{ backgroundColor: "rgb(8, 7, 14)" }}
      >
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
              Step 2 — Three Data Paths
            </p>
            <h2 className="text-[40px] font-semibold leading-[1.15] tracking-[-0.05em] text-white sm:text-[52px]">
              Everything that flows through the Spine{" "}
              <span className="text-primary">becomes one of three things.</span>
            </h2>
            <p className="mt-5 text-[16px] font-medium leading-[1.6] text-white/45">
              Not a data dump. A structured, queryable, AI-ready model — built
              from every tool you use, without any manual data entry.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {[
              {
                num: "01",
                label: "Truth",
                headline: "Structured records. Canonical facts.",
                body: "Accounts, contacts, deals, tickets, invoices — normalized from every connected app, deduplicated against a golden record, and versioned across time. No manual reconciliation.",
                highlight: false,
              },
              {
                num: "02",
                label: "Context",
                headline: "Signals, patterns, and risk indicators.",
                body: "Behavioral patterns, engagement traces, support signals, billing anomalies, and stakeholder movements — assembled automatically across your Spine as structured context.",
                highlight: true,
              },
              {
                num: "03",
                label: "AI Sessions",
                headline: "Every call, email, and meeting — structured.",
                body: "Every customer interaction auto-summarized, linked to entity records, and persisted in the Spine as structured knowledge. Context that compounds, not inbox noise.",
                highlight: false,
              },
            ].map(({ num, label, headline, body, highlight }, i) => (
              <motion.div
                key={label}
                {...fade(i * 0.09)}
                className={`flex flex-col rounded-2xl border p-6 ${
                  highlight
                    ? "border-primary/30 bg-primary/[0.06]"
                    : "border-white/[0.06] bg-white/[0.03]"
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold text-white"
                    style={{ background: highlight ? "var(--gradient-primary-icon)" : "rgba(255,255,255,0.08)" }}
                  >
                    {num}
                  </span>
                  <span className={`text-[12px] font-bold uppercase tracking-[0.1em] ${highlight ? "text-primary" : "text-white/40"}`}>
                    {label}
                  </span>
                </div>
                <h3 className={`text-[15px] font-semibold tracking-[-0.03em] leading-[1.3] ${highlight ? "text-white" : "text-white/80"}`}>
                  {headline}
                </h3>
                <p className="mt-3 flex-1 text-[13px] font-medium leading-[1.65] text-white/40">
                  {body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Step 3: Two Layers. One Workspace. ────────────────────── */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
              Step 3 — Two Layers. One Workspace.
            </p>
            <h2 className="section-heading">
              Everything surfaces in L1.{" "}
              <span className="text-primary">Everything intelligent happens in L2.</span>
            </h2>
            <p className="mt-5 text-[16px] font-medium leading-[1.6] text-white/50">
              The Knowledge Workspace is not a dashboard. It is a two-layer
              operating environment where structured truth and AI intelligence
              live side by side — and nothing happens without your approval.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {/* L1 */}
            <motion.div
              {...fade(0.08)}
              className="flex flex-col rounded-2xl border border-white/[0.07] bg-white/[0.03] p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white/50">
                  Layer 1
                </span>
                <span className="text-[20px] font-bold tracking-[-0.04em] text-white">
                  L1 — The Workbench
                </span>
              </div>
              <p className="text-[14px] font-medium leading-[1.7] text-white/50">
                Your daily operating surface. Entity 360s for every account,
                task queue, workflow tracker, calendar integration, and inbox
                signals — all unified from Truth and Context in the Spine. No
                tab-switching. No copy-pasting between tools.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Entity 360 — live view of every account, contact, or deal",
                  "Daily task queue and workflow tracker",
                  "Unified inbox signals from email, Slack, and calendar",
                  "Portfolio health at a glance — across all accounts",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] font-medium text-white/60">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* L2 */}
            <motion.div
              {...fade(0.15)}
              className="flex flex-col rounded-2xl border border-primary/20 bg-primary/[0.05] p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-lg border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-primary">
                  Layer 2
                </span>
                <span className="text-[20px] font-bold tracking-[-0.04em] text-white">
                  L2 — The Intelligence Layer
                </span>
              </div>
              <p className="text-[14px] font-medium leading-[1.7] text-white/50">
                The Twin&apos;s surface. Where signals are explained, actions are
                proposed with evidence chains, and drafts wait for your approval.
                Nothing executes in any connected app until you approve it here.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Twin surfaces signals with confidence scores and evidence",
                  "AI-drafted actions, emails, and tasks — ready to review",
                  "Govern Gate: every AI proposal is non-bypassable",
                  "Every approval, rejection, and edit improves the Twin",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] font-medium text-white/60">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div {...fade(0.25)} className="mt-6 text-center">
            <Link
              href="/product"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:opacity-80"
            >
              Explore the Knowledge Workspace <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Step 4: Twin + Approval ────────────────────────────────── */}
      <section
        className="arvio-section dark-section"
        style={{ backgroundColor: "rgb(8, 7, 14)" }}
      >
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
              Step 4 — The Twin + Govern Gate
            </p>
            <h2 className="text-[40px] font-semibold leading-[1.15] tracking-[-0.05em] text-white sm:text-[52px]">
              The Twin proposes.{" "}
              <span className="text-primary">You approve. Nothing bypasses that.</span>
            </h2>
            <p className="mt-5 text-[16px] font-medium leading-[1.6] text-white/45">
              The Twin reads Truth, Context, and AI Sessions through the Spine.
              It reasons in full context — across all your accounts, all your
              apps, and every approved session. Then it surfaces proposals in L2.
              You decide.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "Read",
                desc: "Twin continuously reads Truth, Context, and AI Sessions from the Spine across all connected accounts.",
              },
              {
                step: "Reason",
                desc: "Twin builds evidence chains, confidence scores, and cross-account reasoning — grounded in canonical data.",
              },
              {
                step: "Propose",
                desc: "Signals, draft emails, tasks, and actions appear in L2 with full evidence. Nothing is sent. Nothing executes. Yet.",
              },
              {
                step: "Govern",
                desc: "Every proposal passes through the Govern Gate. You approve, reject, or edit. Only then does anything happen in L1 or your apps.",
              },
            ].map(({ step, desc }, i) => (
              <motion.div
                key={step}
                {...fade(i * 0.08)}
                className="flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold text-white"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-[14px] font-bold tracking-[-0.03em] text-primary">
                    {step}
                  </span>
                </div>
                <p className="text-[13px] font-medium leading-[1.65] text-white/40">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fade(0.35)}
            className="mt-8 rounded-2xl border border-primary/20 bg-primary/[0.06] p-6 text-center"
          >
            <Brain className="mx-auto mb-3 h-5 w-5 text-primary" />
            <p className="text-[15px] font-semibold text-white">
              The Twin gets sharper with every approval and rejection.
            </p>
            <p className="mt-1.5 text-[13px] font-medium text-white/40">
              Every edit you make, every action you approve or reject, every
              session summary — all feed back into the Twin&apos;s reasoning layer.
              The intelligence compounds across accounts, not just the one in view.
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

      {/* ── Step 5: Canonical Loop + CTA ──────────────────────────── */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[820px] px-4 text-center">
          <motion.div {...fade(0)}>
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
              Step 5 — The Canonical Loop
            </p>
            <h2 className="section-heading">
              Truth → Context → AI Sessions →{" "}
              <span className="text-primary">Entity 360. Repeat.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[16px] font-medium leading-[1.6] text-white/50">
              Each cycle compounds. The Spine gets richer. The Twin gets sharper.
              Your Entity 360 is more complete than the last. The loop runs
              continuously — so your business intelligence always reflects
              what&apos;s actually happening.
            </p>

            {/* Loop visual */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-[13px] font-semibold">
              {[
                { label: "Truth", accent: false },
                { label: "→", accent: false, arrow: true },
                { label: "Context", accent: false },
                { label: "→", accent: false, arrow: true },
                { label: "AI Sessions", accent: false },
                { label: "→", accent: false, arrow: true },
                { label: "Entity 360", accent: true },
                { label: "→", accent: false, arrow: true },
                { label: "Repeat", accent: false },
              ].map(({ label, accent, arrow }, i) =>
                arrow ? (
                  <ArrowRight key={i} className="h-3.5 w-3.5 text-white/20" />
                ) : (
                  <span
                    key={i}
                    className={`rounded-xl px-4 py-1.5 ${
                      accent
                        ? "bg-primary text-white"
                        : "border border-white/10 bg-white/5 text-white/60"
                    }`}
                  >
                    {label}
                  </span>
                )
              )}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
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
