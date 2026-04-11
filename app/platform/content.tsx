"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Plug, Layers, Eye, ShieldCheck, Brain, RefreshCw, ArrowRight } from "lucide-react"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import { StickyScrollReveal, StickyScrollFallback } from "@/components/ui/sticky-scroll-reveal"
import type { StickyScrollStep } from "@/components/ui/sticky-scroll-reveal"
import Image from "next/image"

const steps = [
  {
    number: "01",
    icon: Plug,
    title: "Connect",
    subtitle: "Plug in your tools",
    description:
      "Connect your CRM, support desk, billing, email, chat, docs, and databases. Each tool syncs automatically — no data migration, no engineering work.",
    details: [
      "Pre-built connectors for 20+ popular tools",
      "Custom API and webhook support",
      "Real-time sync with change detection",
      "No data migration — we read from your systems",
    ],
  },
  {
    number: "02",
    icon: Eye,
    title: "See",
    subtitle: "Get the full picture",
    description:
      "IntegrateWise automatically builds a complete, live view of every customer, account, project, and ticket. Every signal, every interaction, in one place.",
    details: [
      "Automatically links related data across tools",
      "Full timeline of interactions and events",
      "Relationship mapping between people and accounts",
      "Health signals and trend detection",
    ],
  },
  {
    number: "03",
    icon: Brain,
    title: "Act",
    subtitle: "AI suggests, you decide",
    description:
      "AI assistants see the complete picture and suggest what to do next — with clear reasoning. Nothing happens until you explicitly approve.",
    details: [
      "AI with full context across all your tools",
      "Clear reasoning behind every suggestion",
      "You approve every action before it happens",
      "Complete record of every action taken",
    ],
  },
]

function StepVisual({ step }: { step: (typeof steps)[number] }) {
  const Icon = step.icon
  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-6">
      <div
        className="flex h-20 w-20 items-center justify-center rounded-2xl"
        style={{ background: "var(--gradient-primary)", boxShadow: "0 16px 48px -12px rgba(27,167,132,0.35)" }}
      >
        <Icon className="h-10 w-10 text-white" />
      </div>
      <ul className="w-full space-y-3">
        {step.details.map((detail, j) => (
          <li key={j} className="arvio-card flex items-start gap-3 p-4">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: "var(--gradient-primary-icon)" }}>
              <ArrowRight className="h-3 w-3 text-white" />
            </div>
            <span className="text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-foreground">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const stickySteps: StickyScrollStep[] = steps.map((step) => ({
  label: `Step ${step.number}`,
  title: `${step.title}. ${step.subtitle}`,
  description: step.description,
  visual: <StepVisual step={step} />,
}))

const innerIcons = [
  { src: "/logos/salesforce.svg", alt: "Salesforce" },
  { src: "/logos/hubspot.svg", alt: "HubSpot" },
  { src: "/logos/slack.svg", alt: "Slack" },
  { src: "/logos/stripe.svg", alt: "Stripe" },
  { src: "/logos/jira.svg", alt: "Jira" },
]

const outerIcons = [
  { src: "/logos/notion.svg", alt: "Notion" },
  { src: "/logos/gmail.svg", alt: "Gmail" },
  { src: "/logos/zendesk.svg", alt: "Zendesk" },
  { src: "/logos/shopify.svg", alt: "Shopify" },
  { src: "/logos/github.svg", alt: "GitHub" },
  { src: "/logos/airtable.svg", alt: "Airtable" },
]

export function PlatformContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "rgb(8, 7, 14)" }}>
        <div className="mx-auto max-w-[1200px] px-6 pt-[160px] pb-[100px] md:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-[40px] bg-white px-4 py-1.5"
              style={{ boxShadow: "0px 0px 0px 3px rgb(248 248 250)" }}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: "var(--gradient-primary-icon)" }} />
              <span className="text-[14px] font-semibold tracking-[-0.03em] text-[#0a0b10]">Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.4 }}
              className="text-[48px] font-semibold leading-[1em] tracking-[-0.05em] text-white sm:text-[54px] lg:text-[64px]"
            >
              Connect. See. Act.{" "}
               <span className="text-primary">With full control.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.6 }}
              className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
            >
               Three steps to turn scattered systems into a single connected workspace.
               Here&apos;s exactly how IntegrateWise works under the hood.
            </motion.p>
          </div>

          {/* Orbiting Circles visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 20, mass: 1, stiffness: 60, delay: 0.8 }}
            className="mx-auto mt-16 max-w-[420px]"
          >
            <div className="relative flex h-[340px] w-full items-center justify-center overflow-hidden">
              <div className="z-10 flex flex-col items-center gap-2">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-white/10"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Image src="/icon.svg" alt="IntegrateWise" width={28} height={28} className="brightness-0 invert" />
                </div>
                <span className="text-[12px] font-semibold tracking-[-0.02em] text-white/60">Your workspace</span>
              </div>
              <OrbitingCircles radius={100} duration={30} iconSize={36} path>
                {innerIcons.map((icon) => (
                  <div key={icon.alt} className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-sm">
                    <Image src={icon.src} alt={icon.alt} width={20} height={20} />
                  </div>
                ))}
              </OrbitingCircles>
              <OrbitingCircles radius={155} duration={40} iconSize={32} reverse path>
                {outerIcons.map((icon) => (
                  <div key={icon.alt} className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                    <Image src={icon.src} alt={icon.alt} width={18} height={18} />
                  </div>
                ))}
              </OrbitingCircles>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Connect / See / Act — Sticky Scroll (desktop) */}
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
                Three steps to{" "}
                <span className="text-primary">full clarity</span>
              </h2>
            </motion.div>
          }
        />
      </div>

      {/* Connect / See / Act — Fallback (mobile) */}
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
                Three steps to{" "}
                <span className="text-primary">full clarity</span>
              </h2>
            </motion.div>
          }
        />
      </div>
    </>
  )
}
