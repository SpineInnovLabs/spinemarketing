"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plug,
  Layers,
  Brain,
  ArrowRight,
  Database,
  MessageSquare,
  BookOpen,
  RefreshCw,
} from "lucide-react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import {
  StickyScrollReveal,
  StickyScrollFallback,
} from "@/components/ui/sticky-scroll-reveal";
import type { StickyScrollStep } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

/* ── Step visuals ── */

function ConnectVisual() {
  const tools = [
    { name: "CRM", count: "6" },
    { name: "Support", count: "9" },
    { name: "Billing", count: "6" },
    { name: "Communication", count: "7" },
    { name: "Productivity", count: "7" },
    { name: "Project", count: "6" },
    { name: "Analytics", count: "6" },
    { name: "Marketing", count: "8" },
    { name: "Engineering", count: "3" },
    { name: "Commerce", count: "3" },
    { name: "AI", count: "3" },
    { name: "HR", count: "1" },
    { name: "Custom", count: "∞" },
  ];
  return (
    <div className="w-full max-w-sm">
      <div className="grid grid-cols-3 gap-2">
        {tools.map((t) => (
          <div
            key={t.name}
            className="arvio-card flex flex-col items-center p-3 text-center"
          >
            <span className="text-[18px] font-bold text-primary">
              {t.count}
            </span>
            <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
              {t.name}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-[12px] font-semibold text-primary">
        70+ integrations across 13 categories
      </p>
    </div>
  );
}

function WorkspaceVisual() {
  const layers = [
    {
      icon: Database,
      label: "Truth",
      desc: "Your data from connected apps",
      color: "rgb(27,167,132)",
    },
    {
      icon: MessageSquare,
      label: "Context",
      desc: "Emails, Slack, docs, meetings",
      color: "rgb(52,211,153)",
    },
    {
      icon: BookOpen,
      label: "Session Summaries",
      desc: "AI session outputs governed by TruthLayer",
      color: "rgb(110,231,183)",
    },
  ];
  return (
    <div className="w-full max-w-sm space-y-3">
      {layers.map(({ icon: Icon, label, desc, color }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: i * 0.12,
            type: "spring",
            bounce: 0.2,
            duration: 0.6,
          }}
          className="arvio-card flex items-center gap-4 p-4"
        >
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
            style={{ backgroundColor: `${color}15` }}
          >
            <Icon className="h-5 w-5" style={{ color }} />
          </div>
          <div>
            <p className="text-[14px] font-semibold tracking-[-0.02em]">
              {label}
            </p>
            <p className="text-[12px] font-medium text-muted-foreground">
              {desc}
            </p>
          </div>
        </motion.div>
      ))}
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-3 text-center">
        <p className="text-[12px] font-semibold text-primary">
          Three flows converge → Entity 360
        </p>
      </div>
    </div>
  );
}

function TwinVisual() {
  const insights = [
    "Usage dropped 42%, renewal in 45 days",
    "Champion silent 12 days, 3 P1 tickets open",
    "Payment failed twice, invoice overdue",
    "Competitor mentioned in Slack thread",
  ];
  return (
    <div className="w-full max-w-sm space-y-2">
      {insights.map((insight, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: i * 0.15,
            type: "spring",
            bounce: 0.2,
            duration: 0.5,
          }}
          className="arvio-card flex items-start gap-3 p-4"
        >
          <div
            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white"
            style={{ background: "var(--gradient-primary-icon)" }}
          >
            T
          </div>
          <div>
            <p className="text-[13px] font-semibold tracking-[-0.02em]">
              {insight}
            </p>
            <p className="text-[11px] font-medium text-muted-foreground">
              Evidence from 3 sources · Confidence 94%
            </p>
          </div>
        </motion.div>
      ))}
      <div className="flex items-center justify-center gap-2 pt-2">
        <span className="rounded-md border border-border px-3 py-1.5 text-[11px] font-semibold text-muted-foreground">
          Dismiss
        </span>
        <span
          className="rounded-md px-3 py-1.5 text-[11px] font-semibold text-white"
          style={{ background: "var(--gradient-primary)" }}
        >
          Approve & Act
        </span>
      </div>
    </div>
  );
}

const stickySteps: StickyScrollStep[] = [
  {
    label: "Step 01 — Connect",
    title: "Connect the apps you already use.",
    description:
      "CRM, billing, support, project management, docs, email, and chat — all flowing into the Spine through one-time OAuth setup. No data migration. No engineering team needed. 70+ integrations across 13 categories.",
    visual: <ConnectVisual />,
  },
  {
    label: "Step 02 — Three data paths",
    title: "Three data paths. One complete picture.",
    description:
      "Structured records from your apps sync into the Spine as Truth. Emails, chats, and documents enrich entities as Context. AI session outputs go through TruthLayer first and become Session Summaries — they never write to the Spine directly. All three converge into Entity 360.",
    visual: <WorkspaceVisual />,
  },
  {
    label: "Step 03 — Two layers",
    title: "Two layers. One workspace.",
    description:
      "L1 (Daily Workbench) is where you manage accounts, run tasks, review renewals, and approve actions — your operating surface. L2 (Intelligence Layer) is where AI surfaces signals, proposes actions, and lets you chat with the Twin. You review in L2, approve, and the action flows to L1.",
    visual: <WorkspaceVisual />,
  },
  {
    label: "Step 04 — The Twin proposes",
    title: "The Twin reads everything. Proposes what matters. Waits for you.",
    description:
      "The Twin reads Truth, Context, and Session Summaries through the Spine. It surfaces insights with evidence, proposes actions, and learns from your approvals and edits. Maximum 3 insights per entity per day — quality over noise.",
    visual: <TwinVisual />,
  },
  {
    label: "Step 05 — You approve",
    title: "Every action waits for your approval.",
    description:
      "Nothing executes without review. The Twin proposes in L2. You approve, edit, or reject. Approved actions create real tasks, update real records, send real emails, write back to connected apps — then are added to the Spine's memory. Full audit trail of who approved what, when, and why.",
    visual: <TwinVisual />,
  },
];

/* ── Orbiting circles data ── */
const innerIcons = [
  { src: "/logos/salesforce.svg", alt: "Salesforce" },
  { src: "/logos/hubspot.svg", alt: "HubSpot" },
  { src: "/logos/slack.svg", alt: "Slack" },
  { src: "/logos/stripe.svg", alt: "Stripe" },
  { src: "/logos/jira.svg", alt: "Jira" },
];
const outerIcons = [
  { src: "/logos/notion.svg", alt: "Notion" },
  { src: "/logos/gmail.svg", alt: "Gmail" },
  { src: "/logos/zendesk.svg", alt: "Zendesk" },
  { src: "/logos/shopify.svg", alt: "Shopify" },
  { src: "/logos/github.svg", alt: "GitHub" },
  { src: "/logos/airtable.svg", alt: "Airtable" },
];

/* ── Backend loop steps ── */
const loopSteps = ["Load", "Normalize", "Store", "Think", "Govern", "Act", "Adjust", "Loop"];

export function PlatformContent() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "rgb(8, 7, 14)" }}
      >
        <div className="mx-auto max-w-[1200px] px-6 pt-[160px] pb-[100px] md:px-16">
          <div className="mx-auto max-w-3xl text-center">
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
                How It Works
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
              className="text-[48px] font-semibold leading-[1em] tracking-[-0.05em] text-white sm:text-[54px] lg:text-[64px]"
            >
              Connect. Work.{" "}
              <span className="text-primary">The Twin proposes.</span>
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
              className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
            >
              Plug in your apps. Work in one workspace. The Twin reads
              everything through the Spine and proposes actions — you approve
              what actually happens. Nothing updates without you.
            </motion.p>
          </div>

          {/* Orbiting Circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              damping: 20,
              mass: 1,
              stiffness: 60,
              delay: 0.8,
            }}
            className="mx-auto mt-16 max-w-[420px]"
          >
            <div className="relative flex h-[340px] w-full items-center justify-center overflow-hidden">
              <div className="z-10 flex flex-col items-center gap-2">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-white/10"
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
                <span className="text-[12px] font-semibold tracking-[-0.02em] text-white/60">
                  Your workspace
                </span>
              </div>
              <OrbitingCircles radius={100} duration={30} iconSize={36} path>
                {innerIcons.map((icon) => (
                  <div
                    key={icon.alt}
                    className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-sm"
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={20}
                      height={20}
                    />
                  </div>
                ))}
              </OrbitingCircles>
              <OrbitingCircles
                radius={155}
                duration={40}
                iconSize={32}
                reverse
                path
              >
                {outerIcons.map((icon) => (
                  <div
                    key={icon.alt}
                    className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={18}
                      height={18}
                    />
                  </div>
                ))}
              </OrbitingCircles>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three steps — Sticky Scroll (desktop) */}
      <div className="hidden lg:block">
        <StickyScrollReveal
          steps={stickySteps}
          heading={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="section-heading">
                Five steps.{" "}
                <span className="text-primary">You stay in control.</span>
              </h2>
            </motion.div>
          }
        />
      </div>
      <div className="lg:hidden">
        <StickyScrollFallback
          steps={stickySteps}
          heading={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="section-heading">
                Five steps.{" "}
                <span className="text-primary">You stay in control.</span>
              </h2>
            </motion.div>
          }
        />
      </div>

      {/* Behind the scenes — backend loop */}
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
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">
              Behind the scenes
            </p>
            <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.04em] leading-[1.2] text-white sm:text-[40px]">
              The Canonical Loop
            </h2>
            <p className="mt-4 text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-white/40">
              Every signal follows the same path through the system, every day.
              The loop runs in the background — you never interact with it
              directly. It powers the workspace, keeps your views current, and
              makes the Twin smarter with every cycle.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 flex max-w-3xl items-center justify-center gap-2 sm:gap-4">
            {loopSteps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.5,
                }}
                className="flex items-center gap-2 sm:gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] sm:h-12 sm:w-12">
                    <RefreshCw className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                  </div>
                  <span className="mt-2 text-[10px] font-semibold text-white/50 sm:text-[11px]">
                    {step}
                  </span>
                </div>
                {i < loopSteps.length - 1 && (
                  <ArrowRight className="h-3 w-3 text-white/20" />
                )}
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.6,
              delay: 0.4,
            }}
            className="mx-auto mt-8 max-w-lg text-center text-[13px] font-medium text-white/25"
          >
            You never interact with this loop directly. It powers the workspace,
            keeps your views current, and makes The Twin smarter with every
            cycle.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
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
              See how your apps come together{" "}
              <span className="text-primary">in one workspace.</span>
            </h2>
            <p className="mt-4 text-[15px] font-medium text-muted-foreground">
              Connect your existing apps, see Entity 360 in action, and watch
              the Twin propose your first insight — with you in control of
              every step.
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
                <Link href="/contact?intent=demo">Book a product demo</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-[42px] rounded-xl border-2 border-border/75 bg-white px-6 text-[15px] font-semibold text-foreground"
                asChild
              >
                <Link href="/integrations">See 70+ integrations</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
