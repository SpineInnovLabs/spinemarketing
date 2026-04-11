"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { StickyScrollReveal, StickyScrollFallback, type StickyScrollStep } from "@/components/ui/sticky-scroll-reveal"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import { AnimatedList } from "@/components/ui/animated-list"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import { DataFlowAnimation } from "@/components/data-flow-animation"
import Image from "next/image"
import React, { useRef } from "react"

/* ── Visuals for each step ─────────────────────────────── */

function ConnectVisual() {
  const containerRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  const leftRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)]
  const rightRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)]

  const leftTools = [
    { src: "/logos/salesforce.svg", alt: "Salesforce" },
    { src: "/logos/hubspot.svg", alt: "HubSpot" },
    { src: "/logos/zendesk.svg", alt: "Zendesk" },
    { src: "/logos/stripe.svg", alt: "Stripe" },
  ]
  const rightTools = [
    { src: "/logos/slack.svg", alt: "Slack" },
    { src: "/logos/gmail.svg", alt: "Gmail" },
    { src: "/logos/jira.svg", alt: "Jira" },
    { src: "/logos/notion.svg", alt: "Notion" },
  ]

  return (
    <div ref={containerRef} className="relative flex h-[340px] w-full max-w-[440px] items-center justify-between px-4">
      {/* Left column */}
      <div className="flex flex-col gap-6">
        {leftTools.map((t, i) => (
          <div key={t.alt} ref={leftRefs[i]} className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 bg-white shadow-sm">
            <Image src={t.src} alt={t.alt} width={22} height={22} />
          </div>
        ))}
      </div>

      {/* Center — The Spine */}
      <div ref={centerRef} className="flex flex-col items-center gap-1.5">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white" style={{ background: "var(--gradient-primary)" }}>
          <Image src="/icon.svg" alt="IntegrateWise" width={28} height={28} className="brightness-0 invert" />
        </div>
        <span className="text-[11px] font-semibold text-muted-foreground">IntegrateWise</span>
      </div>

      {/* Right column */}
      <div className="flex flex-col gap-6">
        {rightTools.map((t, i) => (
          <div key={t.alt} ref={rightRefs[i]} className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 bg-white shadow-sm">
            <Image src={t.src} alt={t.alt} width={22} height={22} />
          </div>
        ))}
      </div>

      {/* Animated beams */}
      {leftRefs.map((ref, i) => (
        <AnimatedBeam key={`l-${i}`} containerRef={containerRef} fromRef={ref} toRef={centerRef} curvature={20 * (i % 2 === 0 ? 1 : -1)} />
      ))}
      {rightRefs.map((ref, i) => (
        <AnimatedBeam key={`r-${i}`} containerRef={containerRef} fromRef={ref} toRef={centerRef} curvature={20 * (i % 2 === 0 ? -1 : 1)} reverse />
      ))}
    </div>
  )
}

function NormalizeVisual() {
  const icons = [
    { src: "/logos/salesforce.svg", alt: "Salesforce" },
    { src: "/logos/slack.svg", alt: "Slack" },
    { src: "/logos/stripe.svg", alt: "Stripe" },
    { src: "/logos/jira.svg", alt: "Jira" },
    { src: "/logos/gmail.svg", alt: "Gmail" },
    { src: "/logos/zendesk.svg", alt: "Zendesk" },
    { src: "/logos/notion.svg", alt: "Notion" },
    { src: "/logos/hubspot.svg", alt: "HubSpot" },
  ]

  return (
    <div className="relative flex h-[340px] w-full max-w-[380px] items-center justify-center">
      <div className="z-10 flex flex-col items-center gap-1.5">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl text-white" style={{ background: "var(--gradient-primary)" }}>
          <Image src="/icon.svg" alt="IntegrateWise" width={32} height={32} className="brightness-0 invert" />
        </div>
        <span className="text-[11px] font-semibold text-muted-foreground">Cleaning data</span>
      </div>
      <OrbitingCircles radius={130} duration={25} iconSize={36} path>
        {icons.map((icon) => (
          <div key={icon.alt} className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-border/50 bg-white shadow-sm">
            <Image src={icon.src} alt={icon.alt} width={20} height={20} />
          </div>
        ))}
      </OrbitingCircles>
    </div>
  )
}

function Entity360Visual() {
  return (
    <div className="w-full max-w-[380px]">
      <div className="rounded-[20px] border border-border/50 bg-white p-6" style={{ boxShadow: "var(--shadow-card)" }}>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: "var(--gradient-primary-icon)" }}>
            <span className="text-[14px] font-bold text-white">A</span>
          </div>
          <div>
            <div className="text-[15px] font-semibold tracking-[-0.02em]">Acme Corp</div>
            <div className="text-[12px] font-medium text-muted-foreground">Enterprise Account</div>
          </div>
          <div className="ml-auto rounded-full bg-emerald-50 px-2.5 py-0.5 text-[12px] font-semibold text-emerald-600">Healthy</div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { label: "Health", value: "92", color: "text-emerald-600" },
            { label: "NPS", value: "74", color: "text-primary" },
            { label: "Tickets", value: "3", color: "text-amber-600" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-muted p-3 text-center">
              <div className={`text-[22px] font-semibold tracking-[-0.03em] ${s.color}`}>{s.value}</div>
              <div className="text-[11px] font-medium text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          {[
            { system: "Salesforce", event: "Renewal in 45 days", time: "2h ago" },
            { system: "Zendesk", event: "P1 ticket opened", time: "4h ago" },
            { system: "Stripe", event: "Invoice paid ($24K)", time: "1d ago" },
            { system: "Slack", event: "Champion mentioned competitor", time: "2d ago" },
          ].map((e) => (
            <div key={e.event} className="flex items-center gap-2 rounded-lg border border-border/30 px-3 py-2">
              <div className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gradient-primary-icon)" }} />
              <div className="flex-1">
                <span className="text-[12px] font-semibold">{e.system}</span>
                <span className="text-[12px] text-muted-foreground"> — {e.event}</span>
              </div>
              <span className="text-[11px] text-muted-foreground">{e.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const approvalItems = [
  { title: "Draft renewal email for Acme Corp", status: "Awaiting approval", type: "action" },
  { title: "Escalate P1 ticket to VP Support", status: "Awaiting approval", type: "alert" },
  { title: "Update health score: 92 → 87", status: "Auto-approved", type: "update" },
  { title: "Schedule QBR with champion", status: "Awaiting approval", type: "action" },
  { title: "Flag competitor mention in #acme", status: "Auto-logged", type: "signal" },
  { title: "Generate weekly portfolio report", status: "Awaiting approval", type: "action" },
]

function ApprovalItem({ title, status, type }: { title: string; status: string; type: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-white px-4 py-3" style={{ boxShadow: "var(--shadow-card)" }}>
      <div
        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold text-white"
        style={{ background: type === "alert" ? "linear-gradient(135deg, #f59e0b, #ef4444)" : type === "signal" ? "linear-gradient(135deg, #8b5cf6, #6366f1)" : "var(--gradient-primary-icon)" }}
      >
        {type === "action" ? "AI" : type === "alert" ? "!!" : type === "signal" ? "S" : "U"}
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-[13px] font-semibold tracking-[-0.02em]">{title}</div>
        <div className="text-[11px] font-medium text-muted-foreground">{status}</div>
      </div>
    </div>
  )
}

function GovernVisual() {
  return (
    <div className="w-full max-w-[380px]">
      <AnimatedList delay={1800} className="max-h-[340px]">
        {approvalItems.map((item, i) => (
          <ApprovalItem key={i} {...item} />
        ))}
      </AnimatedList>
    </div>
  )
}

/* ── Step data ─────────────────────────────────────────── */

const steps: StickyScrollStep[] = [
  {
    label: "Step 01 — Connect",
    title: "Plug in your tools",
    description:
      "CRM, billing, support, project management, docs, email, and chat — all flowing into one place. No data migration. No engineering team needed.",
    visual: <ConnectVisual />,
  },
  {
    label: "Step 02 — Clean",
    title: "Your data gets organized automatically",
    description:
      "Messy, duplicated, and scattered data gets cleaned up behind the scenes. Duplicates merge. Conflicts resolve. You end up with one reliable record for everything.",
    visual: <NormalizeVisual />,
  },
  {
    label: "Step 03 — See the full picture",
    title: "Everything about a customer, in one place",
    description:
      "Every interaction, payment, support ticket, and conversation comes together into a complete, live view. No more digging through 5 tools to prep for a call.",
    visual: <Entity360Visual />,
  },
  {
    label: "Step 04 — AI that asks first",
    title: "AI suggests. You decide.",
    description:
      "AI spots patterns and drafts next steps — but nothing happens until you approve. You see exactly why it's recommending something, and you always have the final say.",
    visual: <GovernVisual />,
  },
]

const sectionHeading = (
  <div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      className="mx-auto max-w-2xl text-center"
    >
      <h2 className="section-heading">
        From scattered tools to{" "}
        <span className="text-primary">one clear picture</span>
      </h2>
      <p className="mt-4 text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
        Four steps. One workspace. You stay in control.
      </p>
    </motion.div>

    {/* Data Flow Animation — shows the complete pipeline at a glance */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", bounce: 0.2, duration: 0.8, delay: 0.2 }}
      className="mx-auto mt-12 max-w-5xl"
    >
      <DataFlowAnimation />
    </motion.div>
  </div>
)

/* ── Exported section ──────────────────────────────────── */

export function HowItWorksSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  if (isMobile) {
    return (
      <StickyScrollFallback
        id="how-it-works"
        steps={steps}
        heading={sectionHeading}
        className="bg-muted"
      />
    )
  }

  return (
    <StickyScrollReveal
      id="how-it-works"
      steps={steps}
      heading={sectionHeading}
      className="bg-muted"
    />
  )
}
