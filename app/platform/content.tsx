"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Plug,
  Database,
  Brain,
  ShieldCheck,
  Zap,
  RefreshCw,
  Server,
  Lock,
  Eye,
  GitBranch,
  CheckCircle2,
} from "lucide-react";
import { DataFlowAnimation } from "@/components/data-flow-animation";

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


function ExecutionPathVisual() {
  const steps = [
    { icon: Database, label: "Ingest", desc: "Data flows in from 100+ connected apps", color: "rgba(255,178,44,0.5)" },
    { icon: Server, label: "Digital Memory", desc: "Data + Context unified in the Spine", color: "rgba(255,178,44,0.5)" },
    { icon: Brain, label: "Twin Reasons", desc: "AI surfaces insights with evidence", color: "rgba(139,92,246,0.5)" },
    { icon: Zap, label: "You Approve", desc: "Nothing executes without your say", color: "rgba(255,178,44,0.9)" },
  ];

  return (
    <div className="relative w-full max-w-[900px] mx-auto">
      <div className="relative">
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" viewBox="0 0 900 160" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="loop-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,178,44,0.3)" />
              <stop offset="50%" stopColor="rgba(255,178,44,0.5)" />
              <stop offset="100%" stopColor="rgba(255,178,44,0.3)" />
            </linearGradient>
            <filter id="loop-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          {[0, 1, 2].map((i) => {
            const x1 = 112 + i * 225;
            const x2 = x1 + 225;
            const pathD = `M ${x1 + 50} 80 C ${x1 + 100} 80, ${x2 - 50} 80, ${x2 - 50} 80`;
            return (
              <g key={`arrow-${i}`}>
                <path d={pathD} fill="none" stroke="url(#loop-grad)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
                {[0, 1].map((pIdx) => (
                  <circle key={`lp-${i}-${pIdx}`} r="3" fill="rgb(255,178,44)" filter="url(#loop-glow)" opacity="0">
                    <animateMotion dur="2s" repeatCount="indefinite" path={pathD} begin={`${i * 0.3 + pIdx * 1}s`} />
                    <animate attributeName="opacity" values="0;0.8;0.8;0" keyTimes="0;0.15;0.85;1" dur="2s" repeatCount="indefinite" begin={`${i * 0.3 + pIdx * 1}s`} />
                  </circle>
                ))}
              </g>
            );
          })}
          <path d="M 787 90 C 850 90, 870 140, 450 150 C 30 140, 50 90, 112 90" fill="none" stroke="url(#loop-grad)" strokeWidth="1" strokeDasharray="3 5" opacity="0.2" />
          <circle r="2.5" fill="rgb(255,200,100)" filter="url(#loop-glow)" opacity="0">
            <animateMotion dur="6s" repeatCount="indefinite" path="M 787 90 C 850 90, 870 140, 450 150 C 30 140, 50 90, 112 90" begin="0.5s" />
            <animate attributeName="opacity" values="0;0.6;0.6;0" keyTimes="0;0.1;0.9;1" dur="6s" repeatCount="indefinite" begin="0.5s" />
          </circle>
        </svg>

        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-4 z-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", damping: 18, stiffness: 70 }}
              className="relative group"
            >
              <div
                className={`relative rounded-2xl border p-6 text-center transition-all duration-300 ${
                  step.label === "Act"
                    ? "border-primary/30 hover:border-primary/50"
                    : "border-white/[0.06] hover:border-white/[0.12]"
                }`}
                style={{
                  background: step.label === "Act" ? "rgba(255,178,44,0.06)" : "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(12px)",
                  boxShadow: step.label === "Act" ? "0 0 40px rgba(255,178,44,0.08), inset 0 1px 0 rgba(255,255,255,0.04)" : "inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${step.color}, transparent 70%)`, opacity: 0.08 }}
                />
                <div
                  className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${
                    step.label === "Act" ? "bg-primary/20" : "bg-white/[0.06]"
                  }`}
                  style={{ boxShadow: step.label === "Act" ? "0 0 25px rgba(255,178,44,0.15)" : "none" }}
                >
                  <step.icon className={`h-5 w-5 ${step.label === "Act" ? "text-primary" : "text-white/50"}`} />
                </div>
                <div className="text-[14px] font-bold text-white">{step.label}</div>
                <div className="text-[12px] text-white/40 mt-1.5 leading-[1.5]">{step.desc}</div>
                {step.label === "Act" && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2.5 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider">
                    You decide
                  </div>
                )}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 rounded-full"
                  style={{ background: step.color }}
                  whileInView={{ width: "60%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex items-center justify-center gap-3"
      >
        <motion.div
          className="h-px flex-1 max-w-[80px]"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,178,44,0.3))" }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <span className="text-[12px] font-semibold text-white/30 uppercase tracking-widest">
          Memory compounds · Intelligence grows
        </span>
        <motion.div
          className="h-px flex-1 max-w-[80px]"
          style={{ background: "linear-gradient(90deg, rgba(255,178,44,0.3), transparent)" }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}

const ACTIVE_TAB_CONTENT: Record<string, { icon: typeof Plug; features: string[] }> = {
  SaaS: {
    icon: Plug,
    features: ["Salesforce, HubSpot, Pipedrive", "OAuth connect in minutes", "Auto-upgrade when APIs change"],
  },
  Webhooks: {
    icon: Zap,
    features: ["Custom event ingestion", "Real-time data streaming", "Automatic schema detection"],
  },
  MCP: {
    icon: GitBranch,
    features: ["Model Context Protocol", "AI-native integration", "Bidirectional data flow"],
  },
};

function ConnectorTabs() {
  const [active, setActive] = useState("SaaS");
  const tabs = Object.keys(ACTIVE_TAB_CONTENT);

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <div className="flex items-center gap-1 rounded-xl border border-white/[0.08] bg-white/[0.03] p-1 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`relative flex-1 rounded-lg px-4 py-2.5 text-[13px] font-semibold transition-all ${
              active === tab ? "text-white" : "text-white/40 hover:text-white/60"
            }`}
          >
            {active === tab && (
              <motion.div
                layoutId="connector-tab"
                className="absolute inset-0 rounded-lg bg-white/[0.08] border border-white/[0.1]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          {(() => {
            const IconComp = ACTIVE_TAB_CONTENT[active].icon;
            return (
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15">
                <IconComp className="h-4 w-4 text-primary" />
              </div>
            );
          })()}
          <span className="text-[15px] font-bold text-white">{active} Connectors</span>
        </div>
        <ul className="space-y-2.5">
          {ACTIVE_TAB_CONTENT[active].features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-[13px] font-medium text-white/50">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export function PlatformContent() {
  return (
    <>
      <section className="relative overflow-hidden pb-28 pt-[160px]" style={{ background: "#05070A" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[20%] h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-[0.08] blur-[140px]" style={{ background: "radial-gradient(circle, rgba(255,178,44,0.4), transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-[900px] px-6 text-center">
          <motion.div
            {...heroFade(0.1)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-1.5 text-[13px] font-semibold text-white/50"
            style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Your Data Spine
          </motion.div>

          <motion.h1
            {...heroFade(0.2)}
            className="text-[48px] font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-[60px] lg:text-[72px]"
          >
            The Adaptive Spine —{" "}
            <span className="text-primary">where scattered data becomes unified memory.</span>
          </motion.h1>

          <motion.p
            {...heroFade(0.38)}
            className="mx-auto mt-7 max-w-2xl text-[17px] font-medium leading-[1.6] tracking-[-0.02em] text-white/45"
          >
            Every day, critical context gets lost between tools. Customer conversations in Slack. Deal status in Salesforce. Support tickets in Zendesk. The Adaptive Spine solves this — creating a persistent, governed memory layer that unifies everything into a single source of truth that compounds over time.
          </motion.p>

          <motion.div
            {...heroFade(0.5)}
            className="mt-10 flex flex-wrap items-center justify-center gap-2 text-[13px] font-semibold"
          >
            {["Ingest", "Normalize", "Govern", "Remember", "Act"].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-2">
                <span
                  className={`rounded-xl px-4 py-1.5 ${
                    item === "Govern"
                      ? "bg-primary text-white"
                      : "border border-white/[0.08] text-white/60"
                  }`}
                  style={item !== "Govern" ? { background: "rgba(255,255,255,0.03)" } : {}}
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

      <div className="section-divider" />

      <section className="relative overflow-hidden bg-dark-section py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[20%] top-[15%] h-[400px] w-[500px] rounded-full opacity-15 blur-[120px]" style={{ background: "radial-gradient(circle, rgba(255,178,44,0.15), transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-[1100px] px-6">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-14">
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
              The Adaptive Spine
            </p>
            <h2 className="text-[40px] font-semibold leading-[1.15] tracking-[-0.05em] text-white sm:text-[52px]">
              Your business has a{" "}
              <span className="text-primary">memory problem.</span>
            </h2>
            <p className="mt-5 text-[16px] font-medium leading-[1.6] text-white/45">
              Every day, critical context gets lost between tools. The Adaptive Spine creates a persistent, governed memory layer that unifies everything — so your business can remember, learn, and act with complete context.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", damping: 20, stiffness: 60 }}
            className="mx-auto max-w-5xl"
          >
            <DataFlowAnimation />
          </motion.div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Database, title: "Unified Data Ingestion", desc: "Connect 100+ tools and sync data bidirectionally in real-time." },
              { icon: RefreshCw, title: "Intelligent Normalization", desc: "AI cleans, deduplicates, and structures data into a shared truth." },
              { icon: Brain, title: "Governed by Design", desc: "Role-based access, audit logs, and approval gates ensure security." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                {...fade(i * 0.08)}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all hover:border-white/[0.15] hover:-translate-y-0.5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-[15px] font-semibold tracking-[-0.03em] text-white">{title}</h3>
                <p className="mt-2 text-[13px] font-medium leading-[1.65] text-white/40">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider-subtle" />

      <section className="relative overflow-hidden bg-dark-section py-28 md:py-36 bg-dot-grid">
        <div className="relative mx-auto max-w-[1100px] px-6">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-14">
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
              Three Data Flows
            </p>
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-[52px]">
              Data + Context +{" "}
              <span className="text-primary">Digital Memory.</span>
            </h2>
            <p className="mt-5 text-[16px] font-medium leading-[1.6] text-white/45">
              Three distinct data flows merge into Digital Memory — your single source of truth.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                num: "01",
                label: "Truth",
                headline: "Structured records from every connected tool.",
                body: "CRMs, ERPs, billing systems, project management tools. Synced bidirectionally in real-time.",
                highlight: false,
              },
              {
                num: "02",
                label: "Context",
                headline: "Unstructured signals and human context.",
                body: "Slack threads, emails, support tickets, meeting notes. Context, sentiment, and key decisions extracted automatically.",
                highlight: true,
              },
              {
                num: "03",
                label: "AI Sessions",
                headline: "AI session knowledge.",
                body: "Every interaction with your AI Twin is indexed. Questions asked, insights generated, and decisions made become part of the memory.",
                highlight: false,
              },
            ].map(({ num, label, headline, body, highlight }, i) => (
              <motion.div
                key={label}
                {...fade(i * 0.09)}
                className={`relative flex flex-col rounded-2xl border p-6 overflow-hidden transition-all hover:-translate-y-0.5 ${
                  highlight
                    ? "border-primary/30 bg-primary/[0.06]"
                    : "border-white/[0.06] bg-white/[0.03]"
                }`}
              >
                {highlight && (
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,178,44,0.08),transparent_60%)]" />
                )}
                <div className="relative">
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[12px] font-bold text-white"
                      style={{ background: highlight ? "var(--gradient-primary-icon)" : "rgba(255,255,255,0.08)" }}
                    >
                      {num}
                    </span>
                    <span className={`text-[12px] font-bold uppercase tracking-[0.1em] ${highlight ? "text-primary" : "text-white/40"}`}>
                      {label}
                    </span>
                  </div>
                  <h3 className={`text-[16px] font-semibold tracking-[-0.03em] leading-[1.3] ${highlight ? "text-white" : "text-white/80"}`}>
                    {headline}
                  </h3>
                  <p className="mt-3 flex-1 text-[13px] font-medium leading-[1.65] text-white/40">
                    {body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="relative overflow-hidden bg-dark-section py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[15%] bottom-[20%] h-[350px] w-[450px] rounded-full opacity-12 blur-[100px]" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-[1100px] px-6">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-14">
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
              The IntegrateWise Loop
            </p>
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-[52px]">
              Ingestion → Digital Memory →{" "}
              <span className="text-primary">Action.</span>
            </h2>
            <p className="mt-5 text-[16px] font-medium leading-[1.6] text-white/45">
              Data flows in from all sources. The Spine transforms it into Digital Memory — Data + Context unified. Your Twin reasons over it. You approve every action. Knowledge compounds daily.
            </p>
          </motion.div>

          <ExecutionPathVisual />
        </div>
      </section>

      <div className="section-divider-subtle" />

      <section className="relative overflow-hidden bg-dark-section py-28 md:py-36">
        <div className="relative mx-auto max-w-[1100px] px-6">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-14">
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
              The Workspace
            </p>
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-[52px]">
              The Workspace is where you work.{" "}
              <span className="text-primary">The Cognitive Layer is where your Twin serves you.</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            <motion.div
              {...fade(0.08)}
              className="relative flex flex-col rounded-2xl border border-white/[0.07] bg-white/[0.03] p-8 overflow-hidden transition-all hover:border-white/[0.12]"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white/50">
                  Workspace
                </span>
                <span className="text-[20px] font-bold tracking-[-0.04em] text-white">
                  The Workspace
                </span>
              </div>
              <p className="text-[14px] font-medium leading-[1.7] text-white/50">
                Your daily surface. Entity 360s, tasks, workflows — unified from the Spine.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Entity 360 — live view of every account",
                  "Daily task queue and workflow tracker",
                  "Unified inbox from email, Slack, calendar",
                  "Portfolio health at a glance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] font-medium text-white/60">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Eye className="h-3.5 w-3.5 text-white/30" />
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Preview</span>
                </div>
                <div className="space-y-2">
                  {[
                    { name: "Acme Corp", health: 92, status: "Healthy" },
                    { name: "Globex Inc", health: 61, status: "At Risk" },
                  ].map((acct) => (
                    <div key={acct.name} className="flex items-center gap-3 rounded-lg bg-white/[0.03] px-3 py-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ background: "var(--gradient-primary-icon)" }}>
                        {acct.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] font-semibold text-white truncate">{acct.name}</div>
                      </div>
                      <div className={`text-[10px] font-bold ${acct.health > 80 ? "text-primary" : "text-amber-400"}`}>
                        {acct.health}
                      </div>
                      <div className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${acct.health > 80 ? "bg-primary/15 text-primary" : "bg-amber-400/15 text-amber-400"}`}>
                        {acct.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fade(0.15)}
              className="relative flex flex-col rounded-2xl border border-primary/20 bg-primary/[0.05] p-8 overflow-hidden transition-all hover:border-primary/30"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-lg border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-primary">
                  Cognitive
                </span>
                <span className="text-[20px] font-bold tracking-[-0.04em] text-white">
                  Cognitive Layer
                </span>
              </div>
              <p className="text-[14px] font-medium leading-[1.7] text-white/50">
                The Twin suggests with evidence. You approve what executes.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Signals with confidence scores and evidence",
                  "AI-drafted actions, emails, tasks — ready to review",
                  "Govern Gate: non-bypassable approval",
                  "Every decision improves the Twin",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] font-medium text-white/60">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl border border-primary/15 bg-primary/[0.04] p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="h-3.5 w-3.5 text-primary/50" />
                  <span className="text-[10px] font-bold text-primary/50 uppercase tracking-widest">Twin Suggestion</span>
                </div>
                <div className="space-y-2">
                  {[
                    { action: "Draft renewal email for Acme", conf: 94 },
                    { action: "Escalate P1 tickets to VP", conf: 91 },
                  ].map((item) => (
                    <div key={item.action} className="flex items-center gap-3 rounded-lg bg-white/[0.03] px-3 py-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/20 text-[9px] font-bold text-primary">AI</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] font-semibold text-white truncate">{item.action}</div>
                      </div>
                      <div className="text-[10px] font-semibold text-primary">{item.conf}%</div>
                      <div className="rounded-md bg-primary/20 px-2 py-0.5 text-[9px] font-bold text-primary">Approve</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div {...fade(0.25)} className="mt-6 text-center">
            <Link
              href="/product"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:opacity-80"
            >
              Explore the Product <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="relative overflow-hidden bg-dark-section py-28 md:py-36">
        <div className="relative mx-auto max-w-[1100px] px-6">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-14">
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
              Connectors
            </p>
            <h2 className="text-[40px] font-semibold leading-[1.15] tracking-[-0.05em] text-white sm:text-[52px]">
              Connect Your{" "}
              <span className="text-primary">Entire Stack.</span>
            </h2>
            <p className="mt-5 text-[16px] font-medium leading-[1.6] text-white/45">
              Pre-built integrations for the tools you already use. From CRMs to chat apps to accounting software — plug in and sync in minutes.
            </p>
          </motion.div>

          <ConnectorTabs />

          <motion.div {...fade(0.3)} className="mt-8 text-center">
            <Link
              href="/integrations"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:opacity-80"
            >
              See all 70+ connectors <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="section-divider-subtle" />

      <section className="relative overflow-hidden bg-dark-section py-28 md:py-36 bg-dot-grid">
        <div className="relative mx-auto max-w-[1100px] px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div {...fade(0)} className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 transition-all hover:border-white/[0.12]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 mb-5">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">Knowledge Base</p>
              <h3 className="text-[24px] font-semibold tracking-[-0.04em] text-white leading-tight">
                Digital Memory.
              </h3>
              <p className="mt-3 text-[14px] font-medium leading-[1.7] text-white/45">
                Data + Context unified. Grows daily. No retraining required.
              </p>
              <div className="mt-6 flex items-center gap-4">
                {[
                  { value: "70+", label: "Integrations" },
                  { value: "3", label: "Data flows" },
                  { value: "∞", label: "Memory" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-[20px] font-bold text-primary">{stat.value}</div>
                    <div className="text-[10px] text-white/30 font-semibold uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-6">
              <motion.div {...fade(0.1)} className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 transition-all hover:border-white/[0.12]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 mb-4">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">Governance Layer</p>
                <h3 className="text-[20px] font-semibold tracking-[-0.04em] text-white leading-tight">
                  Governance Boundaries.
                </h3>
                <p className="mt-3 text-[13px] font-medium leading-[1.65] text-white/40">
                  Role-based access, audit trails, and human-in-the-loop approval gates. SOC 2 Type II. GDPR Ready.
                </p>
              </motion.div>

              <motion.div {...fade(0.18)} className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 transition-all hover:border-white/[0.12]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 mb-4">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">Infrastructure</p>
                <h3 className="text-[20px] font-semibold tracking-[-0.04em] text-white leading-tight">
                  Enterprise-Grade Infrastructure.
                </h3>
                <p className="mt-3 text-[13px] font-medium leading-[1.65] text-white/40">
                  Tenant isolation, field-level encryption, immutable audit logs. Built for the most regulated industries.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="relative overflow-hidden bg-dark-section py-28 md:py-36">
        <div className="mx-auto max-w-[820px] px-4 text-center">
          <motion.div {...fade(0)}>
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
              Everything Unified
            </p>
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-[52px]">
              Data + Context{" "}
              <span className="text-primary">= Digital Memory.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[16px] font-medium leading-[1.6] text-white/45">
              The Adaptive Spine ingests, normalizes, and governs your data into Digital Memory. Your Twin reasons over it. You stay in control of every action.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-[13px] font-semibold">
              {[
                { label: "Truth", accent: false },
                { label: "+", arrow: true },
                { label: "Context", accent: false },
                { label: "+", arrow: true },
                { label: "AI Sessions", accent: false },
                { label: "=", arrow: true },
                { label: "Entity 360", accent: true },
              ].map(({ label, accent, arrow }, i) =>
                arrow ? (
                  <span key={i} className="text-[16px] font-bold text-white/25">{label}</span>
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
                Book a Demo →
              </Link>
              <Link
                href="/product"
                className="inline-flex h-11 items-center rounded-full border border-white/15 px-6 text-[14px] font-semibold tracking-[-0.02em] text-white/60 transition-colors hover:border-white/30 hover:text-white"
              >
                Explore the Product →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
