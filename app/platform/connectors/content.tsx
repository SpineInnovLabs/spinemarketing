"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Plug, RefreshCw, Zap, Brain } from "lucide-react";

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
    icon: Plug,
    type: "SaaS Tools",
    desc: "API-driven software feeding the normalization pipeline.",
    examples: ["Salesforce", "HubSpot", "Stripe", "Zendesk", "Jira", "Asana", "Slack"],
  },
  {
    icon: Brain,
    type: "AI Services",
    desc: "LLM outputs stored as versioned Spine entities.",
    examples: ["OpenAI", "Anthropic", "Google Gemini", "Mistral"],
  },
  {
    icon: Zap,
    type: "MCP (Model Context Protocol)",
    desc: "AI-native bridge for structured data access.",
    examples: ["Local file systems", "Internal databases", "Custom data sources", "Legacy ERPs"],
  },
  {
    icon: RefreshCw,
    type: "Webhooks",
    desc: "Event-driven inputs with zero polling latency.",
    examples: ["Custom events", "Payment notifications", "Form submissions", "IoT sensors"],
  },
];

export function PlatformConnectorsContent() {
  return (
    <>
      <section
        className="relative overflow-hidden pb-28 pt-40 bg-dark-section"
      >
        <div className="mx-auto max-w-[820px] px-4 text-center">
          <motion.div
            {...heroFade(0.1)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] font-semibold text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Platform · Connectors
          </motion.div>
          <motion.h1
            {...heroFade(0.22)}
            className="text-[44px] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[64px]"
          >
            The universal{" "}
            <span className="text-primary">integration layer</span>
          </motion.h1>
          <motion.p
            {...heroFade(0.38)}
            className="mx-auto mt-7 max-w-xl text-[17px] font-medium leading-[1.55] tracking-[-0.02em] text-white/50"
          >
            Every input is a connector — all data flows through one Spine pipeline.
          </motion.p>
          <motion.div {...heroFade(0.5)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/product/connectors" className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-[14px] font-semibold tracking-[-0.02em] text-white transition-opacity hover:opacity-90">
              Manage connectors →
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Supported Input Types</p>
            <h2 className="section-heading">Four input types. <span className="text-primary">One pipeline.</span></h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2">
            {inputTypes.map(({ icon: Icon, type, desc, examples }, i) => (
              <motion.div key={type} {...fade(i * 0.07)} className="arvio-card p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "var(--gradient-primary-icon)" }}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-[16px] font-semibold tracking-[-0.03em] text-foreground mb-2">{type}</h3>
                <p className="text-[13px] font-medium leading-[1.65] text-muted-foreground mb-4">{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {examples.map((ex) => (
                    <span key={ex} className="rounded-md border border-border/60 bg-muted px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">{ex}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Auto-Upgrade</p>
            <h2 className="section-heading">Connectors that <span className="text-primary">maintain themselves</span></h2>
            <p className="mt-4 text-[15px] font-medium leading-[1.55] text-muted-foreground">
              Adapts automatically when external APIs change. Zero manual intervention.
            </p>
            <Link href="/product/connectors" className="mt-6 inline-flex h-10 items-center rounded-full bg-primary px-5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90">
              Manage your connectors →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
