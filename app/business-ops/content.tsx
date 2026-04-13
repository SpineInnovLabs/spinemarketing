"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  StickyScrollReveal,
  StickyScrollFallback,
  type StickyScrollStep,
} from "@/components/ui/sticky-scroll-reveal";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { AnimatedList } from "@/components/ui/animated-list";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import {
  ArrowRight,
  Check,
  User,
  Building2,
  Settings,
  Monitor,
  Activity,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════ */

const opsLogos = [
  { name: "Salesforce", src: "/logos/salesforce.svg" },
  { name: "HubSpot", src: "/logos/hubspot.svg" },
  { name: "Stripe", src: "/logos/stripe.svg" },
  { name: "QuickBooks", src: "/logos/quickbooks.svg" },
  { name: "Jira", src: "/logos/jira.svg" },
  { name: "Notion", src: "/logos/notion.svg" },
  { name: "Slack", src: "/logos/slack.svg" },
  { name: "Asana", src: "/logos/asana.svg" },
  { name: "Gmail", src: "/logos/gmail.svg" },
  { name: "Google Drive", src: "/logos/googledrive.svg" },
];

const comparisons = [
  {
    before: "Revenue numbers differ in every tool",
    after:
      "One unified revenue view — assembled from every system automatically",
  },
  {
    before: "Board deck assembled manually every quarter",
    after: "Reports build themselves from live data — ready in minutes",
  },
  {
    before: "Forecasts based on last month's spreadsheet",
    after: "Real-time projections grounded in actual pipeline and billing data",
  },
  {
    before: "Problems discovered after they've already hit revenue",
    after: "Risks flagged early — with cross-system evidence attached",
  },
  {
    before: "Each team sees its own tool, its own slice",
    after:
      "Everyone sees the same truth — through their own role-specific lens",
  },
];

const fourViews = [
  {
    icon: User,
    role: "For Founders",
    desc: "ARR, growth rate, cash signals, and risk — one screen, real time. No digging.",
  },
  {
    icon: Building2,
    role: "For CEOs",
    desc: "Revenue, retention, pipeline health, team performance — board prep in minutes, not days.",
  },
  {
    icon: Settings,
    role: "For COOs",
    desc: "Who's blocked, what's at risk, where handoffs break — with evidence, not anecdotes.",
  },
  {
    icon: Monitor,
    role: "For CTO/CIOs",
    desc: "Integration health, data quality, sync status, system landscape — all in one place.",
  },
];

const dayOneOutcomes = [
  "One cross-system operating view — CRM, billing, support, project management, email assembled automatically",
  "Role-specific dashboards — same data, different lenses for every leader",
  "Board decks and reports that build themselves from live data",
  "Risk signals surfaced early — revenue drops, support spikes, pipeline gaps connected and flagged",
  "AI that reasons across your entire business — and waits for your approval before acting",
  "Day-one value — not months of implementation and consultant fees",
];

/* ═══════════════════════════════════════════════════════════
   HERO VISUAL — Cross-System Workflow Cards (dark bg)
   ═══════════════════════════════════════════════════════════ */

function HeroBusinessOpsVisual() {
  const flows = [
    {
      from: { name: "Salesforce", src: "/logos/salesforce.svg" },
      to: { name: "QuickBooks", src: "/logos/quickbooks.svg" },
      label: "Revenue reconciled",
      status: "Live",
      statusColor: "text-emerald-400",
    },
    {
      from: { name: "Zendesk", src: "/logos/zendesk.svg" },
      to: { name: "Slack", src: "/logos/slack.svg" },
      label: "Escalation routed",
      status: "2m ago",
      statusColor: "text-white/40",
    },
    {
      from: { name: "Stripe", src: "/logos/stripe.svg" },
      to: { name: "HubSpot", src: "/logos/hubspot.svg" },
      label: "Pipeline updated",
      status: "Live",
      statusColor: "text-emerald-400",
    },
    {
      from: { name: "Jira", src: "/logos/jira.svg" },
      to: { name: "Notion", src: "/logos/notion.svg" },
      label: "Sprint synced",
      status: "5m ago",
      statusColor: "text-white/40",
    },
  ];

  return (
    <div className="w-full max-w-[380px] space-y-3">
      {flows.map((flow, i) => (
        <motion.div
          key={flow.label}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.8 + i * 0.15,
            duration: 0.6,
            type: "spring",
            damping: 20,
            stiffness: 80,
          }}
          className="rounded-[20px] border border-white/10 bg-white/[0.04] backdrop-blur-sm px-5 py-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white">
              <Image
                src={flow.from.src}
                alt={flow.from.name}
                width={20}
                height={20}
              />
            </div>
            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary/60" />
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white">
              <Image
                src={flow.to.src}
                alt={flow.to.name}
                width={20}
                height={20}
              />
            </div>
            <div className="ml-1 flex-1 min-w-0">
              <div className="text-[13px] font-semibold tracking-[-0.02em] text-white truncate">
                {flow.label}
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              {flow.status === "Live" && (
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
              )}
              <span className={`text-[11px] font-semibold ${flow.statusColor}`}>
                {flow.status}
              </span>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Operating summary */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="flex items-center justify-between rounded-2xl px-5 py-3"
        style={{ background: "var(--gradient-primary)" }}
      >
        <span className="text-[13px] font-semibold text-white">
          Operating Pulse
        </span>
        <div className="flex items-center gap-4">
          {[
            { val: "12", label: "Tools" },
            { val: "4", label: "Views" },
            { val: "Real-time", label: "Sync" },
          ].map((stat, i) => (
            <React.Fragment key={stat.label}>
              {i > 0 && <div className="h-6 w-px bg-white/20" />}
              <div className="text-center">
                <div className="text-[16px] font-bold text-white">
                  {stat.val}
                </div>
                <div className="text-[9px] font-medium text-white/70">
                  {stat.label}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   STICKY SCROLL VISUALS
   ═══════════════════════════════════════════════════════════ */

function OpsConnectVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const leftRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const rightRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const left = [
    { src: "/logos/salesforce.svg", alt: "Salesforce" },
    { src: "/logos/stripe.svg", alt: "Stripe" },
    { src: "/logos/jira.svg", alt: "Jira" },
    { src: "/logos/quickbooks.svg", alt: "QuickBooks" },
  ];
  const right = [
    { src: "/logos/hubspot.svg", alt: "HubSpot" },
    { src: "/logos/slack.svg", alt: "Slack" },
    { src: "/logos/asana.svg", alt: "Asana" },
    { src: "/logos/gmail.svg", alt: "Gmail" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative flex h-[340px] w-full max-w-[440px] items-center justify-between px-4"
    >
      <div className="flex flex-col gap-6">
        {left.map((t, i) => (
          <div
            key={t.alt}
            ref={leftRefs[i]}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 bg-white shadow-sm"
          >
            <Image src={t.src} alt={t.alt} width={22} height={22} />
          </div>
        ))}
      </div>
      <div ref={centerRef} className="flex flex-col items-center gap-1.5">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
          style={{ background: "var(--gradient-primary)" }}
        >
          <Image
            src="/icon.svg"
            alt="IntegrateWise"
            width={28}
            height={28}
            className="brightness-0 invert"
          />
        </div>
        <span className="text-[11px] font-semibold text-muted-foreground">
          IntegrateWise
        </span>
      </div>
      <div className="flex flex-col gap-6">
        {right.map((t, i) => (
          <div
            key={t.alt}
            ref={rightRefs[i]}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 bg-white shadow-sm"
          >
            <Image src={t.src} alt={t.alt} width={22} height={22} />
          </div>
        ))}
      </div>
      {leftRefs.map((ref, i) => (
        <AnimatedBeam
          key={`l-${i}`}
          containerRef={containerRef}
          fromRef={ref}
          toRef={centerRef}
          curvature={20 * (i % 2 === 0 ? 1 : -1)}
        />
      ))}
      {rightRefs.map((ref, i) => (
        <AnimatedBeam
          key={`r-${i}`}
          containerRef={containerRef}
          fromRef={ref}
          toRef={centerRef}
          curvature={20 * (i % 2 === 0 ? -1 : 1)}
          reverse
        />
      ))}
    </div>
  );
}

function OpsNormalizeVisual() {
  const icons = [
    { src: "/logos/salesforce.svg", alt: "Salesforce" },
    { src: "/logos/stripe.svg", alt: "Stripe" },
    { src: "/logos/hubspot.svg", alt: "HubSpot" },
    { src: "/logos/quickbooks.svg", alt: "QuickBooks" },
    { src: "/logos/jira.svg", alt: "Jira" },
    { src: "/logos/slack.svg", alt: "Slack" },
    { src: "/logos/asana.svg", alt: "Asana" },
    { src: "/logos/gmail.svg", alt: "Gmail" },
  ];

  return (
    <div className="relative flex h-[340px] w-full max-w-[380px] items-center justify-center">
      <div className="z-10 flex flex-col items-center gap-1.5">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl text-white"
          style={{ background: "var(--gradient-primary)" }}
        >
          <Image
            src="/icon.svg"
            alt="IntegrateWise"
            width={32}
            height={32}
            className="brightness-0 invert"
          />
        </div>
        <span className="text-[11px] font-semibold text-muted-foreground">
          Unifying data
        </span>
      </div>
      <OrbitingCircles radius={130} duration={25} iconSize={36} path>
        {icons.map((icon) => (
          <div
            key={icon.alt}
            className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-border/50 bg-white shadow-sm"
          >
            <Image src={icon.src} alt={icon.alt} width={20} height={20} />
          </div>
        ))}
      </OrbitingCircles>
    </div>
  );
}

function OpsViewVisual() {
  return (
    <div className="w-full max-w-[380px]">
      <div
        className="rounded-[20px] border border-border/50 bg-white p-6"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[15px] font-semibold tracking-[-0.02em]">
              Operating Dashboard
            </div>
            <div className="text-[12px] font-medium text-muted-foreground">
              All systems &middot; Real-time
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[11px] font-semibold text-emerald-600">
              Live
            </span>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {[
            { label: "MRR", value: "$184K", color: "text-emerald-600" },
            { label: "Pipeline", value: "$2.1M", color: "text-primary" },
            { label: "Churn Risk", value: "3.2%", color: "text-amber-600" },
            { label: "NPS", value: "71", color: "text-primary" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-muted p-3 text-center">
              <div
                className={`text-[20px] font-semibold tracking-[-0.03em] ${s.color}`}
              >
                {s.value}
              </div>
              <div className="text-[11px] font-medium text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          {[
            {
              system: "Stripe",
              event: "MRR grew 8% this month",
              time: "1h ago",
            },
            {
              system: "Salesforce",
              event: "3 deals closing this week",
              time: "3h ago",
            },
            {
              system: "Jira",
              event: "Sprint velocity up 12%",
              time: "1d ago",
            },
            {
              system: "Zendesk",
              event: "Support CSAT dropped to 4.1",
              time: "2d ago",
            },
          ].map((e) => (
            <div
              key={e.event}
              className="flex items-center gap-2 rounded-lg border border-border/30 px-3 py-2"
            >
              <div
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--gradient-primary-icon)" }}
              />
              <div className="flex-1">
                <span className="text-[12px] font-semibold">{e.system}</span>
                <span className="text-[12px] text-muted-foreground">
                  {" "}
                  &mdash; {e.event}
                </span>
              </div>
              <span className="text-[11px] text-muted-foreground">
                {e.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Governance — Animated approval queue */

const opsApprovalItems = [
  {
    title: "Generate board deck from live data",
    status: "Awaiting approval",
    type: "action",
  },
  {
    title: "Revenue reconciliation: Stripe vs Salesforce",
    status: "Awaiting approval",
    type: "action",
  },
  {
    title: "Pipeline forecast updated for Q3",
    status: "Auto-approved",
    type: "update",
  },
  {
    title: "Support costs exceeded threshold ($18K)",
    status: "Flagged",
    type: "alert",
  },
  {
    title: "Weekly ops summary for leadership",
    status: "Awaiting approval",
    type: "action",
  },
  {
    title: "Cash flow risk: 2 invoices overdue >30d",
    status: "Flagged",
    type: "alert",
  },
];

function ApprovalItem({
  title,
  status,
  type,
}: {
  title: string;
  status: string;
  type: string;
}) {
  return (
    <div
      className="flex items-start gap-3 rounded-xl border border-border/50 bg-white px-4 py-3"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div
        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold text-white"
        style={{
          background:
            type === "alert"
              ? "linear-gradient(135deg, #f59e0b, #ef4444)"
              : type === "signal"
                ? "linear-gradient(135deg, #8b5cf6, #6366f1)"
                : "var(--gradient-primary-icon)",
        }}
      >
        {type === "action"
          ? "AI"
          : type === "alert"
            ? "!!"
            : type === "signal"
              ? "S"
              : "U"}
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-[13px] font-semibold tracking-[-0.02em]">
          {title}
        </div>
        <div className="text-[11px] font-medium text-muted-foreground">
          {status}
        </div>
      </div>
    </div>
  );
}

function OpsGovernVisual() {
  return (
    <div className="w-full max-w-[380px]">
      <AnimatedList delay={1800} className="max-h-[340px]">
        {opsApprovalItems.map((item, i) => (
          <ApprovalItem key={i} {...item} />
        ))}
      </AnimatedList>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   STICKY SCROLL STEPS
   ═══════════════════════════════════════════════════════════ */

const howItWorksSteps: StickyScrollStep[] = [
  {
    label: "Step 01 \u2014 Connect",
    title: "Plug in your business stack",
    description:
      "Salesforce, Stripe, QuickBooks, Jira, Slack, HubSpot, Asana, Gmail \u2014 plug in the tools your business runs on. One-time OAuth setup. No engineering team required.",
    visual: <OpsConnectVisual />,
  },
  {
    label: "Step 02 \u2014 Unify",
    title: "Every system speaks the same language",
    description:
      "Revenue from Stripe, pipeline from Salesforce, costs from QuickBooks, velocity from Jira \u2014 all unified into one intelligence layer. Duplicates merge. Relationships are preserved.",
    visual: <OpsNormalizeVisual />,
  },
  {
    label: "Step 03 \u2014 Operating View",
    title: "See your business completely",
    description:
      "MRR, pipeline health, support costs, team velocity, and cash flow converge into a live operating dashboard. Same truth, four role-specific lenses. No more assembling context from twelve tabs.",
    visual: <OpsViewVisual />,
  },
  {
    label: "Step 04 \u2014 Govern",
    title: "AI proposes. You decide.",
    description:
      "AI generates board decks, reconciles revenue, flags cash flow risks, and surfaces ops anomalies \u2014 but nothing fires without your approval. Evidence on every insight. You always have the final say.",
    visual: <OpsGovernVisual />,
  },
];

/* ═══════════════════════════════════════════════════════════
   MAIN CONTENT
   ═══════════════════════════════════════════════════════════ */

export function BusinessOpsContent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const stickyHeading = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      className="mx-auto max-w-2xl text-center"
    >
      <h2 className="section-heading">
        How it <span className="text-primary">works</span>
      </h2>
      <p className="mt-4 text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
        Four steps. Your entire business, fully connected.
      </p>
    </motion.div>
  );

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "rgb(8, 7, 14)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 75% 50%, rgba(27,167,132,0.06) 0%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-6 pt-[160px] pb-[100px] md:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left: Text */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 16,
                  mass: 1,
                  stiffness: 52,
                  delay: 0.2,
                }}
                className="mb-6 inline-flex items-center gap-2.5 rounded-[40px] bg-white px-4 py-1.5"
                style={{ boxShadow: "0px 0px 0px 3px rgb(248 248 250)" }}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: "var(--gradient-primary-icon)" }}
                />
                <span className="text-[14px] font-semibold tracking-[-0.03em] text-[#0a0b10]">
                  Business Ops
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 16,
                  mass: 1,
                  stiffness: 52,
                  delay: 0.4,
                }}
                className="text-[40px] font-semibold leading-[1.1em] tracking-[-0.05em] text-white sm:text-[52px] lg:text-[60px]"
              >
                Run your business from one dashboard.{" "}
                <span className="text-primary">Not twelve tabs.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 16,
                  mass: 1,
                  stiffness: 52,
                  delay: 0.6,
                }}
                className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55 lg:mx-0"
              >
                You make decisions every day about revenue, operations, and risk
                &mdash; but the data lives in different tools, owned by
                different teams. Nobody has the full picture.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 16,
                  mass: 1,
                  stiffness: 52,
                  delay: 0.8,
                }}
                className="mt-10 flex flex-col items-center gap-2.5 sm:flex-row lg:justify-start justify-center"
              >
                <Button
                  size="lg"
                  className="h-[42px] rounded-xl px-6 text-[15px] font-semibold"
                  style={{
                    background: "var(--gradient-primary)",
                    boxShadow: "var(--shadow-button)",
                  }}
                  asChild
                >
                  <Link href="/contact?intent=demo">Book a demo</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-[42px] rounded-xl border-2 border-white/15 bg-transparent px-6 text-[15px] font-semibold text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/platform">See how it works</Link>
                </Button>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="mt-6 text-[14px] font-medium text-white/30"
              >
                For founders, CEOs, COOs, operators, and leadership teams.
              </motion.p>
            </div>

            {/* Right: Hero Visual (desktop) */}
            <div className="hidden lg:flex justify-end">
              <HeroBusinessOpsVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────── */}
      <section className="py-12">
        <div className="mx-auto max-w-[1200px] px-6 md:px-16">
          <p className="text-center text-[16px] font-semibold tracking-[-0.03em] text-muted-foreground">
            Connect the tools your business already runs on
          </p>
        </div>
        <div className="relative mt-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <Marquee pauseOnHover className="[--duration:35s] [--gap:1rem]">
            {opsLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-3 rounded-xl border border-border/50 bg-white px-5 py-3 shadow-sm"
              >
                <Image src={logo.src} alt={logo.name} width={24} height={24} />
                <span className="whitespace-nowrap text-[15px] font-semibold tracking-[-0.02em] text-foreground/70">
                  {logo.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* ── THE PROBLEM ──────────────────────────────────── */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            >
              <h2 className="section-heading">
                Your business runs on Slack, Sheets, and WhatsApp.{" "}
                <span className="text-primary">Nothing talks to anything.</span>
              </h2>
              <div className="mt-8 space-y-4 text-[17px] font-medium leading-[1.7] tracking-[-0.02em] text-muted-foreground">
                <p>
                  Revenue in one tool. Pipeline in another. Support in a third.
                  Costs in a spreadsheet. Half of it updated weekly &mdash;
                  maybe. You spend more time assembling context than acting on
                  it.
                </p>
                <p className="text-foreground font-semibold">
                  That&apos;s not running a business. That&apos;s running a data
                  collection agency.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── THE SHIFT — Before vs After ──────────────────── */}
      <section
        className="arvio-section"
        style={{ backgroundColor: "rgb(8, 7, 14)" }}
      >
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-[40px] font-semibold tracking-[-0.05em] leading-[1.15] text-white sm:text-[48px]">
              Every other dashboard shows you{" "}
              <span className="text-white/40">a department.</span>
            </h2>
            <p className="mt-4 text-[17px] font-semibold leading-[1.5] text-primary">
              IntegrateWise shows you the business.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-3xl space-y-4">
            {comparisons.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                  delay: i * 0.08,
                }}
                className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 py-4 sm:gap-6"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-500/40" />
                  <span className="text-[14px] font-medium leading-[1.5] text-white/30">
                    {row.before}
                  </span>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-primary/60" />
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                  <span className="text-[14px] font-semibold leading-[1.5] text-white/90">
                    {row.after}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUR VIEWS — Role-specific Lenses ────────────── */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              Four views. <span className="text-primary">One truth.</span>
            </h2>
            <p className="mt-4 text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
              Same data. Different lenses for every leader.
            </p>
          </motion.div>
          <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
            {fourViews.map(({ icon: Icon, role, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                  delay: i * 0.08,
                }}
                className="arvio-card p-6 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:border-primary/20"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: "var(--gradient-primary-icon)" }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.03em]">
                  {role}
                </h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.6] text-muted-foreground">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — StickyScrollReveal ─────────────── */}
      {isMobile ? (
        <StickyScrollFallback
          id="how-it-works"
          steps={howItWorksSteps}
          heading={stickyHeading}
        />
      ) : (
        <StickyScrollReveal
          id="how-it-works"
          steps={howItWorksSteps}
          heading={stickyHeading}
        />
      )}

      {/* ── WHAT YOU GET — Day One + Stats ────────────────── */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                >
                  <h2 className="section-heading-sm">
                    What changes{" "}
                    <span className="text-primary">on day one</span>
                  </h2>
                  <p className="mt-4 text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
                    Value from day one. Not months of implementation.
                  </p>
                </motion.div>
                <ul className="mt-8 space-y-3">
                  {dayOneOutcomes.map((outcome, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                        delay: i * 0.08,
                      }}
                      className="flex items-start gap-3"
                    >
                      <div
                        className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={{ background: "var(--gradient-primary-icon)" }}
                      >
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-foreground">
                        {outcome}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="space-y-8 lg:pt-16">
                {[
                  { value: 12, suffix: "+", label: "Tools unified" },
                  { value: 4, suffix: "", label: "Role-specific lenses" },
                  { value: 100, suffix: "%", label: "Governed AI actions" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                      delay: i * 0.12,
                    }}
                    className="text-center lg:text-left"
                  >
                    <div className="text-[48px] font-bold tracking-[-0.04em]">
                      <NumberTicker
                        value={stat.value}
                        delay={0.2 + i * 0.15}
                        className="text-[48px] font-bold tracking-[-0.04em] text-foreground"
                      />
                      {stat.suffix && (
                        <span className="text-primary">{stat.suffix}</span>
                      )}
                    </div>
                    <div className="mt-1 text-[15px] font-medium text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              Your business deserves{" "}
              <span className="text-primary">one source of truth.</span>
            </h2>
            <p className="mt-6 text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
              Stop assembling context from twelve tabs. Start making decisions
              from one.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
              <Button
                size="lg"
                className="h-[42px] rounded-xl px-6 text-[15px] font-semibold"
                style={{
                  background: "var(--gradient-primary)",
                  boxShadow: "var(--shadow-button)",
                }}
                asChild
              >
                <Link href="/contact?intent=demo">Book a demo</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-[42px] rounded-xl border-2 border-border/75 bg-white px-6 text-[15px] font-semibold text-foreground"
                asChild
              >
                <Link href="/pricing">See pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
