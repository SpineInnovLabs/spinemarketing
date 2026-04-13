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
import { TrendingUp, AlertTriangle, Check, ArrowRight } from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════ */

const csLogos = [
  { name: "Salesforce", src: "/logos/salesforce.svg" },
  { name: "HubSpot", src: "/logos/hubspot.svg" },
  { name: "Zendesk", src: "/logos/zendesk.svg" },
  { name: "Intercom", src: "/logos/intercom.svg" },
  { name: "Stripe", src: "/logos/stripe.svg" },
  { name: "Slack", src: "/logos/slack.svg" },
  { name: "Gmail", src: "/logos/gmail.svg" },
  { name: "Notion", src: "/logos/notion.svg" },
  { name: "QuickBooks", src: "/logos/quickbooks.svg" },
  { name: "Jira", src: "/logos/jira.svg" },
];

const comparisons = [
  {
    before: "Check 8 apps every morning",
    after: "One live profile per account — assembled automatically",
  },
  {
    before: "Health scores in a spreadsheet someone updates weekly",
    after: "Health computed from real data across every system",
  },
  {
    before: "Churn signals hiding across different apps",
    after: "Risks flagged 90 days out — with evidence attached",
  },
  {
    before: "Hours of QBR prep across tabs and docs",
    after: "QBR-ready in minutes, every data point sourced",
  },
  {
    before: "AI with zero context on your accounts",
    after: "AI reads Truth, Context, and Session Summaries — then asks permission",
  },
];

const dayOneOutcomes = [
  "One complete view of every account — CRM, support, billing, email, conversations assembled automatically",
  "Health scores that reflect reality — computed from actual data, not a field someone forgot to update",
  "Churn signals surfaced 90 days before renewal — with evidence, not guesses",
  "QBR prep in minutes — every data point sourced and ready",
  "AI that reasons with full context — and waits for your approval before acting",
  "Knowledge that compounds — every decision teaches the system",
];

/* ═══════════════════════════════════════════════════════════
   HERO VISUAL — Account Health Dashboard (dark bg)
   ═══════════════════════════════════════════════════════════ */

function HeroAccountVisual() {
  const accounts = [
    {
      name: "Acme Corp",
      initials: "AC",
      health: 94,
      healthColor: "text-emerald-400",
      badge: "Healthy",
      badgeBg: "bg-emerald-500/10 text-emerald-400",
      signals: [
        {
          icon: TrendingUp,
          text: "NPS increased to 78",
          time: "2h ago",
          color: "text-emerald-400",
        },
        {
          icon: AlertTriangle,
          text: "Renewal in 32 days",
          time: "1d ago",
          color: "text-amber-400",
        },
      ],
    },
    {
      name: "Globex Inc",
      initials: "GI",
      health: 61,
      healthColor: "text-amber-400",
      badge: "At Risk",
      badgeBg: "bg-amber-500/10 text-amber-400",
      signals: [
        {
          icon: AlertTriangle,
          text: "3 open P1 tickets",
          time: "4h ago",
          color: "text-red-400",
        },
        {
          icon: TrendingUp,
          text: "Usage down 28%",
          time: "1d ago",
          color: "text-amber-400",
        },
      ],
    },
  ];

  return (
    <div className="w-full max-w-[380px] space-y-3">
      {accounts.map((acct, i) => (
        <motion.div
          key={acct.name}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.8 + i * 0.2,
            duration: 0.6,
            type: "spring",
            damping: 20,
            stiffness: 80,
          }}
          className="rounded-[20px] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5"
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-bold text-white"
              style={{ background: "var(--gradient-primary-icon)" }}
            >
              {acct.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[14px] font-semibold tracking-[-0.02em] text-white">
                {acct.name}
              </div>
            </div>
            <div
              className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${acct.badgeBg}`}
            >
              {acct.badge}
            </div>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex-1 h-1.5 rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "var(--gradient-primary)" }}
                initial={{ width: 0 }}
                animate={{ width: `${acct.health}%` }}
                transition={{
                  delay: 1.0 + i * 0.2,
                  duration: 0.8,
                  ease: "easeOut",
                }}
              />
            </div>
            <span
              className={`text-[13px] font-bold tabular-nums ${acct.healthColor}`}
            >
              {acct.health}
            </span>
          </div>
          <div className="mt-3 space-y-1.5">
            {acct.signals.map((sig, j) => (
              <div
                key={j}
                className="flex items-center gap-2 rounded-lg bg-white/[0.04] px-3 py-1.5"
              >
                <sig.icon className={`h-3.5 w-3.5 shrink-0 ${sig.color}`} />
                <span className="flex-1 text-[12px] font-medium text-white/70 truncate">
                  {sig.text}
                </span>
                <span className="text-[10px] text-white/30 shrink-0">
                  {sig.time}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Portfolio summary */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="flex items-center justify-between rounded-2xl px-5 py-3"
        style={{ background: "var(--gradient-primary)" }}
      >
        <span className="text-[13px] font-semibold text-white">
          Portfolio Health
        </span>
        <div className="flex items-center gap-4">
          {[
            { val: "47", label: "Accounts" },
            { val: "3", label: "At Risk" },
            { val: "$2.1M", label: "ARR Covered" },
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

function CSConnectVisual() {
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
    { src: "/logos/hubspot.svg", alt: "HubSpot" },
    { src: "/logos/zendesk.svg", alt: "Zendesk" },
    { src: "/logos/intercom.svg", alt: "Intercom" },
  ];
  const right = [
    { src: "/logos/stripe.svg", alt: "Stripe" },
    { src: "/logos/slack.svg", alt: "Slack" },
    { src: "/logos/gmail.svg", alt: "Gmail" },
    { src: "/logos/notion.svg", alt: "Notion" },
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

function CSNormalizeVisual() {
  const icons = [
    { src: "/logos/salesforce.svg", alt: "Salesforce" },
    { src: "/logos/hubspot.svg", alt: "HubSpot" },
    { src: "/logos/zendesk.svg", alt: "Zendesk" },
    { src: "/logos/intercom.svg", alt: "Intercom" },
    { src: "/logos/stripe.svg", alt: "Stripe" },
    { src: "/logos/slack.svg", alt: "Slack" },
    { src: "/logos/gmail.svg", alt: "Gmail" },
    { src: "/logos/notion.svg", alt: "Notion" },
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
          Building profiles
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

function CSEntity360Visual() {
  return (
    <div className="w-full max-w-[380px]">
      <div
        className="rounded-[20px] border border-border/50 bg-white p-6"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ background: "var(--gradient-primary-icon)" }}
          >
            <span className="text-[14px] font-bold text-white">A</span>
          </div>
          <div>
            <div className="text-[15px] font-semibold tracking-[-0.02em]">
              Acme Corp
            </div>
            <div className="text-[12px] font-medium text-muted-foreground">
              Enterprise Account
            </div>
          </div>
          <div className="ml-auto rounded-full bg-emerald-50 px-2.5 py-0.5 text-[12px] font-semibold text-emerald-600">
            Healthy
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { label: "Health", value: "92", color: "text-emerald-600" },
            { label: "NPS", value: "74", color: "text-primary" },
            { label: "Tickets", value: "3", color: "text-amber-600" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-muted p-3 text-center">
              <div
                className={`text-[22px] font-semibold tracking-[-0.03em] ${s.color}`}
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
              system: "Salesforce",
              event: "Renewal in 45 days",
              time: "2h ago",
            },
            {
              system: "Zendesk",
              event: "P1 ticket opened",
              time: "4h ago",
            },
            {
              system: "Stripe",
              event: "Invoice paid ($24K)",
              time: "1d ago",
            },
            {
              system: "Slack",
              event: "Champion mentioned competitor",
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

const csApprovalItems = [
  {
    title: "Draft renewal email for Acme Corp",
    status: "Awaiting approval",
    type: "action",
  },
  {
    title: "Escalate P1 ticket to VP Support",
    status: "Awaiting approval",
    type: "alert",
  },
  {
    title: "Update health score: 92 \u2192 87",
    status: "Auto-approved",
    type: "update",
  },
  {
    title: "Schedule QBR with champion",
    status: "Awaiting approval",
    type: "action",
  },
  {
    title: "Flag competitor mention in #acme",
    status: "Auto-logged",
    type: "signal",
  },
  {
    title: "Generate weekly portfolio report",
    status: "Awaiting approval",
    type: "action",
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

function CSGovernVisual() {
  return (
    <div className="w-full max-w-[380px]">
      <AnimatedList delay={1800} className="max-h-[340px]">
        {csApprovalItems.map((item, i) => (
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
    title: "Plug in your CS stack",
    description:
      "Salesforce, HubSpot, Zendesk, Intercom, Stripe, Slack, Gmail \u2014 plug in the apps your CS team uses every day. One-time OAuth setup. No engineering team required.",
    visual: <CSConnectVisual />,
  },
  {
    label: "Step 02 \u2014 Unify",
    title: "Account data gets organized automatically",
    description:
      "Scattered data from every tool flows into one intelligence layer. Duplicates merge. Relationships are preserved. One reliable profile for every account \u2014 built behind the scenes.",
    visual: <CSNormalizeVisual />,
  },
  {
    label: "Step 03 \u2014 Entity 360",
    title: "See every account completely",
    description:
      "Every interaction, payment, ticket, and conversation converges into a live Entity 360 view. Truth, Context, and Session Summaries in one place. No more digging through apps to prep for a call.",
    visual: <CSEntity360Visual />,
  },
  {
    label: "Step 04 \u2014 Govern",
    title: "AI proposes. You decide.",
    description:
      "AI spots churn risks, drafts renewal emails, and flags escalations \u2014 but nothing fires without your approval. You see the evidence and the reasoning. You always have the final say.",
    visual: <CSGovernVisual />,
  },
];

/* ═══════════════════════════════════════════════════════════
   MAIN CONTENT
   ═══════════════════════════════════════════════════════════ */

export function AccountSuccessContent() {
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
        Four steps. Your CS stack, fully connected.
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
                  Account Success
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
                Protect revenue with a clear{" "}
                <span className="text-primary">
                  Account Success workspace.
                </span>
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
                Account Success is the Workbench where CSMs, account managers,
                and leaders see the full story of every account in one place,
                while the Intelligence Layer explains what changed and proposes
                next steps that always wait for your approval.
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
                For CS teams, account managers, agency owners, and freelancers.
              </motion.p>
            </div>

            {/* Right: Hero Visual (desktop) */}
            <div className="hidden lg:flex justify-end">
              <HeroAccountVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────── */}
      <section className="py-12">
        <div className="mx-auto max-w-[1200px] px-6 md:px-16">
          <p className="text-center text-[16px] font-semibold tracking-[-0.03em] text-muted-foreground">
            Connect the apps your CS team already uses
          </p>
        </div>
        <div className="relative mt-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <Marquee pauseOnHover className="[--duration:35s] [--gap:1rem]">
            {csLogos.map((logo) => (
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
                You check 8 apps every morning{" "}
                <span className="text-primary">
                  just to understand one account.
                </span>
              </h2>
              <div className="mt-8 space-y-4 text-[17px] font-medium leading-[1.7] tracking-[-0.02em] text-muted-foreground">
                <p>
                  CRM says healthy. Support has 3 P1 tickets. Billing shows a
                  failed payment. Champion silent for 2 weeks. You&apos;re the
                  one connecting the dots manually. No single tool tells you
                  what&apos;s actually happening.
                </p>
                <p className="text-foreground font-semibold">
                  That&apos;s not Customer Success. That&apos;s data plumbing.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── L1/L2 SOLUTION FRAMING ────────────────────────── */}
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
              One workspace. Two layers.{" "}
              <span className="text-primary">Full account intelligence.</span>
            </h2>
          </motion.div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: 0 }}
              className="arvio-card p-6"
            >
              <h3 className="text-[14px] font-bold uppercase tracking-[0.1em] text-primary mb-3">L1 — Your Daily Workbench for accounts</h3>
              <p className="text-[14px] font-medium leading-[1.7] text-muted-foreground">
                Open any account and see the full story: revenue, product usage, support tickets, emails, conversations, stakeholders, and renewal timeline. Track tasks, manage renewals, run playbooks, and log engagement. This is where you work every day.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: 0.1 }}
              className="arvio-card p-6"
            >
              <h3 className="text-[14px] font-bold uppercase tracking-[0.1em] text-primary mb-3">L2 — The Intelligence Layer for account teams</h3>
              <p className="text-[14px] font-medium leading-[1.7] text-muted-foreground">
                The Twin reads the complete picture through the Spine. It highlights health drops, churn risk, expansion signals, and champion changes. Recommended actions appear with evidence. You review in L2, approve, and the action executes in L1.
              </p>
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
              Every other tool shows you{" "}
              <span className="text-white/40">a slice.</span>
            </h2>
            <p className="mt-4 text-[17px] font-semibold leading-[1.5] text-primary">
              IntegrateWise shows you the truth.
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

      {/* ── HOW IT WORKS — StickyScrollReveal ─────────────── */}
      {isMobile ? (
        <StickyScrollFallback
          id="how-it-works"
          steps={howItWorksSteps}
          heading={stickyHeading}
          className="bg-muted"
        />
      ) : (
        <StickyScrollReveal
          id="how-it-works"
          steps={howItWorksSteps}
          heading={stickyHeading}
          className="bg-muted"
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
                  { value: 12, suffix: "+", label: "Systems unified" },
                  { value: 90, suffix: "d", label: "Early risk detection" },
                  {
                    value: 100,
                    suffix: "%",
                    label: "Evidence-backed actions",
                  },
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
                      <span className="text-primary">{stat.suffix}</span>
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

      {/* ── 4 USE CASES ───────────────────────────────────── */}
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
              What Account Success teams{" "}
              <span className="text-primary">do inside IntegrateWise</span>
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              {
                num: "01",
                title: "Early churn detection",
                quote: "Show me accounts whose usage is dropping, tickets are rising, invoices are late, or champions are quiet — all in one view, before renewal is close.",
                desc: "The workspace shows a ranked list of at-risk accounts with evidence from every connected app. You see the full picture in L1. The Twin flags what changed and why in L2.",
              },
              {
                num: "02",
                title: "Guided renewal save plan",
                quote: "For this at-risk account, generate a renewal risk summary, propose the top 3 actions, and draft the outreach and internal tasks for me to approve.",
                desc: "The Twin reads the account's Entity 360, prepares a recovery plan with evidence, and queues draft emails and tasks. You review in L2, approve, and the actions execute in L1.",
              },
              {
                num: "03",
                title: "QBR in a click",
                quote: "Assemble a QBR for this customer: revenue trend, product usage, support history, NPS, and key events. Turn it into a brief and slide outline I can refine.",
                desc: "Entity 360 already has the data. The Twin drafts a QBR outline with talking points. You review, edit, and approve before sharing. Minutes, not hours.",
              },
              {
                num: "04",
                title: "Expansion opportunity surfacing",
                quote: "List customers with strong adoption, good NPS, and new stakeholders appearing in email or Slack. Suggest the next expansion motion for each.",
                desc: "The Twin scans Truth and Context signals across your portfolio and surfaces accounts ready to grow. Suggested actions appear in L2 with evidence. You approve the ones that make sense.",
              },
            ].map(({ num, title, quote, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", bounce: 0.2, duration: 0.6 }}
                className="arvio-card p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[12px] font-bold text-white"
                    style={{ background: "var(--gradient-primary-icon)" }}
                  >
                    {num}
                  </span>
                  <h3 className="text-[15px] font-semibold tracking-[-0.03em]">{title}</h3>
                </div>
                <p className="text-[13px] font-medium italic text-muted-foreground border-l-2 border-primary/30 pl-3 mb-3">
                  &ldquo;{quote}&rdquo;
                </p>
                <p className="text-[13px] font-medium leading-[1.6] text-foreground/70">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              Stop being the human bridge{" "}
              <span className="text-primary">between your account apps.</span>
            </h2>
            <p className="mt-6 text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
              See how one workspace gives you the full story for every account,
              with AI that thinks in context and waits for your approval.
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
