"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  StickyScrollReveal,
  StickyScrollFallback,
  type StickyScrollStep,
} from "@/components/ui/sticky-scroll-reveal";
import {
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Brain,
  Workflow,
} from "lucide-react";

/* ── Visual: Account Success ─────────────────────────────── */
/* A live account health dashboard card — shows 360 view */

function AccountSuccessVisual() {
  const accounts = [
    {
      name: "Acme Corp",
      initials: "AC",
      health: 94,
      healthColor: "text-primary",
      badge: "Healthy",
      badgeBg: "bg-primary/10 text-primary",
      signals: [
        {
          icon: TrendingUp,
          text: "NPS increased to 78",
          time: "2h ago",
          color: "text-primary",
        },
        {
          icon: AlertTriangle,
          text: "Renewal in 32 days",
          time: "1d ago",
          color: "text-amber-500",
        },
      ],
    },
    {
      name: "Globex Inc",
      initials: "GI",
      health: 61,
      healthColor: "text-amber-600",
      badge: "At Risk",
      badgeBg: "bg-amber-50 text-amber-600",
      signals: [
        {
          icon: AlertTriangle,
          text: "3 open P1 tickets",
          time: "4h ago",
          color: "text-red-500",
        },
        {
          icon: TrendingUp,
          text: "Usage down 28%",
          time: "1d ago",
          color: "text-amber-500",
        },
      ],
    },
  ];

  return (
    <div className="w-full max-w-[400px] space-y-3">
      {accounts.map((acct, i) => (
        <motion.div
          key={acct.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
          className="rounded-[20px] border border-border/50 bg-white p-5"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-bold text-white"
              style={{ background: "var(--gradient-primary-icon)" }}
            >
              {acct.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[14px] font-semibold tracking-[-0.02em]">
                {acct.name}
              </div>
            </div>
            <div
              className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${acct.badgeBg}`}
            >
              {acct.badge}
            </div>
          </div>

          {/* Health bar */}
          <div className="mt-3 flex items-center gap-3">
            <div className="flex-1 h-1.5 rounded-full bg-muted">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "var(--gradient-primary)" }}
                initial={{ width: 0 }}
                animate={{ width: `${acct.health}%` }}
                transition={{
                  delay: 0.3 + i * 0.15,
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

          {/* Signals */}
          <div className="mt-3 space-y-1.5">
            {acct.signals.map((sig, j) => (
              <div
                key={j}
                className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-1.5"
              >
                <sig.icon className={`h-3.5 w-3.5 shrink-0 ${sig.color}`} />
                <span className="flex-1 text-[12px] font-medium text-foreground truncate">
                  {sig.text}
                </span>
                <span className="text-[10px] text-muted-foreground shrink-0">
                  {sig.time}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Summary bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex items-center justify-between rounded-2xl px-5 py-3"
        style={{ background: "var(--gradient-primary)" }}
      >
        <span className="text-[13px] font-semibold text-white">
          Portfolio Health
        </span>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-[16px] font-bold text-white">47</div>
            <div className="text-[9px] font-medium text-white/70">Accounts</div>
          </div>
          <div className="h-6 w-px bg-white/20" />
          <div className="text-center">
            <div className="text-[16px] font-bold text-white">3</div>
            <div className="text-[9px] font-medium text-white/70">At Risk</div>
          </div>
          <div className="h-6 w-px bg-white/20" />
          <div className="text-center">
            <div className="text-[16px] font-bold text-white">$2.1M</div>
            <div className="text-[9px] font-medium text-white/70">
              ARR Covered
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Visual: Business Ops ─────────────────────────────────── */
/* A cross-system workflow showing data flowing between departments */

function BusinessOpsVisual() {
  const workflows = [
    {
      from: "Salesforce",
      fromIcon: "/logos/salesforce.svg",
      action: "Deal closed",
      to: "QuickBooks",
      toIcon: "/logos/quickbooks.svg",
      result: "Invoice generated",
      status: "completed",
    },
    {
      from: "Zendesk",
      fromIcon: "/logos/zendesk.svg",
      action: "Ticket escalated",
      to: "Slack",
      toIcon: "/logos/slack.svg",
      result: "Team notified",
      status: "completed",
    },
    {
      from: "Stripe",
      fromIcon: "/logos/stripe.svg",
      action: "Payment received",
      to: "HubSpot",
      toIcon: "/logos/hubspot.svg",
      result: "Record updated",
      status: "in-progress",
    },
    {
      from: "Jira",
      fromIcon: "/logos/jira.svg",
      action: "Sprint completed",
      to: "Notion",
      toIcon: "/logos/notion.svg",
      result: "Report drafted",
      status: "pending",
    },
  ];

  return (
    <div className="w-full max-w-[400px] space-y-2.5">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-2 mb-1"
      >
        <div
          className="flex h-7 w-7 items-center justify-center rounded-lg"
          style={{ background: "var(--gradient-primary-icon)" }}
        >
          <Workflow className="h-3.5 w-3.5 text-white" />
        </div>
        <span className="text-[13px] font-semibold tracking-[-0.02em]">
          Active Workflows
        </span>
        <span className="ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
          4 running
        </span>
      </motion.div>

      {workflows.map((wf, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.1 + i * 0.12,
            duration: 0.45,
            ease: "easeOut",
          }}
          className="rounded-[16px] border border-border/50 bg-white p-4"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="flex items-center gap-2.5">
            {/* From */}
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/50 bg-white">
              <Image src={wf.fromIcon} alt={wf.from} width={18} height={18} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[12px] font-semibold tracking-[-0.02em] truncate">
                {wf.action}
              </div>
              <div className="text-[10px] text-muted-foreground">{wf.from}</div>
            </div>

            {/* Arrow */}
            <div className="flex items-center gap-1">
              <motion.div
                className="h-px w-6"
                style={{ background: "var(--gradient-primary)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.4 }}
              />
              <ArrowRight className="h-3 w-3 text-primary" />
            </div>

            {/* To */}
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/50 bg-white">
              <Image src={wf.toIcon} alt={wf.to} width={18} height={18} />
            </div>
            <div className="min-w-0">
              <div className="text-[12px] font-semibold tracking-[-0.02em] truncate">
                {wf.result}
              </div>
              <div className="text-[10px] text-muted-foreground">{wf.to}</div>
            </div>

            {/* Status dot */}
            <div
              className={`ml-auto h-2 w-2 shrink-0 rounded-full ${
                wf.status === "completed"
                  ? "bg-primary"
                  : wf.status === "in-progress"
                    ? "bg-amber-500 animate-pulse"
                    : "bg-muted-foreground/30"
              }`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Visual: Personal Ops ─────────────────────────────────── */
/* A morning briefing / AI inbox showing organized daily view */

function PersonalOpsVisual() {
  const briefingItems = [
    {
      icon: "📬",
      title: "3 emails need replies",
      subtitle: "Sarah (urgent), Mike (follow-up), Client RFP",
      time: "8:01 AM",
    },
    {
      icon: "📋",
      title: "2 tasks due today",
      subtitle: "Ship feature spec, Review PR #342",
      time: "8:01 AM",
    },
    {
      icon: "💬",
      title: "5 Slack threads to catch up on",
      subtitle: "#product, #engineering, DM from Alex",
      time: "8:01 AM",
    },
    {
      icon: "📅",
      title: "3 meetings ahead",
      subtitle: "Standup (9am), Design review (11am), 1:1 (2pm)",
      time: "8:01 AM",
    },
  ];

  return (
    <div className="w-full max-w-[400px]">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-[20px] border border-border/50 bg-white overflow-hidden"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        {/* Header */}
        <div className="px-5 pt-5 pb-3">
          <div className="flex items-center gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-xl"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Brain className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="text-[14px] font-semibold tracking-[-0.02em]">
                Morning Briefing
              </div>
              <div className="text-[11px] text-muted-foreground">
                Wednesday, March 12
              </div>
            </div>
            <div className="ml-auto flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5">
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-semibold text-primary">
                Live
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-5 h-px bg-border/50" />

        {/* Items */}
        <div className="p-3 space-y-1.5">
          {briefingItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + i * 0.1,
                duration: 0.4,
                ease: "easeOut",
              }}
              className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-muted/50"
            >
              <span className="mt-0.5 text-[16px]">{item.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-semibold tracking-[-0.02em]">
                  {item.title}
                </div>
                <div className="text-[11px] text-muted-foreground truncate">
                  {item.subtitle}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="mx-5 h-px bg-border/50" />
        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-[11px] text-muted-foreground">
            Pulled from 6 connected tools
          </span>
          <div className="flex -space-x-1.5">
            {[
              "/logos/gmail.svg",
              "/logos/slack.svg",
              "/logos/notion.svg",
              "/logos/jira.svg",
              "/logos/googledrive.svg",
            ].map((logo, i) => (
              <div
                key={i}
                className="flex h-5 w-5 items-center justify-center rounded-full border border-white bg-white"
              >
                <Image src={logo} alt="" width={12} height={12} />
              </div>
            ))}
            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-white bg-muted text-[8px] font-bold text-muted-foreground">
              +1
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Step data ─────────────────────────────────────────── */

const steps: StickyScrollStep[] = [
  {
    label: "Account Success",
    title: "Protect revenue. Spot risks early.",
    description:
      "Scattered account data becomes a live, complete view. Health scores, renewal signals, and AI recommendations — nothing fires without your OK.",
    visual: <AccountSuccessVisual />,
  },
  {
    label: "Business Ops",
    title: "Stop being the human API.",
    description:
      "CRM, billing, support, project management — one workspace. Cross-system workflows run automatically while you approve every action.",
    visual: <BusinessOpsVisual />,
  },
  {
    label: "Personal Ops",
    title: "Your AI command center.",
    description:
      "Start each day with an AI briefing pulled from every tool. Smart follow-ups, cross-tool search, and focus intelligence — spend time on work, not switching tabs.",
    visual: <PersonalOpsVisual />,
  },
];

/* ── Section heading ───────────────────────────────────── */

const sectionHeading = (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
    className="mx-auto max-w-2xl text-center"
  >
    <h2 className="text-[36px] font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-[44px]">
      Three ways to <span className="text-primary">take control</span>
    </h2>
    <p className="mt-4 text-[16px] font-medium leading-[1.6] text-white/45">
      One Knowledge Workspace. Different views for individuals, account teams,
      and operations leaders — all powered by the same Spine and AI Twin.
    </p>
  </motion.div>
);

/* ── CTA Links (shown below sticky scroll) ──────────────── */

function SolutionLinks() {
  const links = [
    {
      href: "/account-success",
      label: "Resolution",
      desc: "Entity matching & dedup",
    },
    {
      href: "/business-ops",
      label: "Business Ops",
      desc: "For Operations leaders",
    },
    { href: "/personal-ops", label: "Personal Ops", desc: "For individuals" },
  ];

  return (
    <div className="mx-auto max-w-[1100px] px-6 pb-[100px] md:px-16">
      <div className="grid gap-4 sm:grid-cols-3">
        {links.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.6,
              delay: i * 0.08,
            }}
          >
            <Link
              href={link.href}
              className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-4 transition-all hover:border-white/[0.15]"
            >
              <div>
                <div className="text-[15px] font-semibold tracking-[-0.02em] text-white">
                  {link.label}
                </div>
                <div className="text-[13px] text-white/40">
                  {link.desc}
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-white/30 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Exported section ──────────────────────────────────── */

export function SolutionsDoorsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      {isMobile ? (
        <StickyScrollFallback
          id="solutions"
          steps={steps}
          heading={sectionHeading}
          className="bg-dark-section"
        />
      ) : (
        <StickyScrollReveal
          id="solutions"
          steps={steps}
          heading={sectionHeading}
          className="bg-dark-section"
        />
      )}
      <div className="bg-dark-section">
        <SolutionLinks />
      </div>
    </>
  );
}
