"use client";

import { motion } from "framer-motion";
import {
  Database,
  MessageSquare,
  FileText,
  GitMerge,
  Lock,
  Eye,
  Brain,
  CheckSquare,
  History,
  Zap,
} from "lucide-react";

const spineCapabilities = [
  {
    icon: Database,
    title: "Structured data flows",
    desc: "CRM records, billing events, support tickets, contracts, product usage metrics — every structured data point across all connected apps flows into the Spine and stays current.",
  },
  {
    icon: MessageSquare,
    title: "Unstructured context",
    desc: "Emails, call transcripts, Slack threads, meeting notes, support conversations — the Spine reads and indexes the context around every record, not just the record itself.",
  },
  {
    icon: FileText,
    title: "Session Summaries",
    desc: "Every AI reasoning session produces a governed, attributed Session Summary. These are not chat logs — they are auditable intelligence outputs stored as first-class data.",
  },
  {
    icon: GitMerge,
    title: "Entity-level unification",
    desc: "The Spine links every data point to the right entity — account, contact, deal, project, invoice. One account has one view across 12 apps.",
  },
];

const hitlSteps = [
  {
    label: "Signal detected",
    desc: "The Spine surfaces a cross-system pattern: usage down, champion left, support tickets unresolved, invoice delayed.",
  },
  {
    label: "AI reasons with evidence",
    desc: "The Twin analyses the full context from the Spine — not a single app. It builds a recommendation with supporting data, confidence, and alternatives.",
  },
  {
    label: "Surfaced in L2",
    desc: "The recommendation appears in the Intelligence Layer with full evidence. You see what the Twin saw, what it concluded, and what it suggests.",
  },
  {
    label: "You approve",
    desc: "Nothing executes until you approve. You can edit, reject, or pass. The Govern Gate is non-bypassable — not configurable, structural.",
  },
  {
    label: "Action executes in L1",
    desc: "Approved actions execute in the Daily Workbench. The Session Summary is logged: what changed, what the AI reasoned, who approved, when.",
  },
];

const differentiators = [
  {
    icon: Lock,
    title: "Vendor-neutral",
    desc: "The Spine is not owned by your CRM, your helpdesk, or your ERP. It sits above your apps — so it can reason across all of them without being biased by any one.",
  },
  {
    icon: Eye,
    title: "Adaptive",
    desc: "As your stack changes — new apps connected, old ones removed — the Spine adapts. Entity mappings update. Context continues to accumulate.",
  },
  {
    icon: Brain,
    title: "Evidence-first",
    desc: "Every AI output is tied to its source data. The Twin cannot reason in a vacuum. Every recommendation shows the signals it was built from.",
  },
  {
    icon: CheckSquare,
    title: "HITL by architecture",
    desc: "Human-in-the-loop is not a setting or a policy. It is built into the execution path. The Govern Gate cannot be bypassed by any workflow, automation, or API call.",
  },
  {
    icon: History,
    title: "Permanent audit",
    desc: "Every action, every approval, every Session Summary is logged immutably. The audit trail exists because the architecture requires it — not because you remembered to enable it.",
  },
  {
    icon: Zap,
    title: "Live entity state",
    desc: "The Spine maintains a live view of every entity across all apps. There are no stale snapshots. When a record changes in any connected app, the Spine knows.",
  },
];

export function SpineContent() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pb-24 pt-40"
        style={{ backgroundColor: "rgb(8, 7, 14)" }}
      >
        <div className="mx-auto max-w-[800px] px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 80 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] font-semibold text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Spine &amp; Intelligence
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.15 }}
            className="text-[48px] font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-[64px]"
          >
            The intelligence layer{" "}
            <span className="text-primary">above your apps.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.35 }}
            className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
          >
            The Spine is an adaptive, vendor-neutral layer that unifies
            structured records, unstructured conversations, and AI outputs from
            every connected app. AI reasons on the full picture. Every action
            waits for human approval.
          </motion.p>
        </div>
      </section>

      {/* What the Spine does */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              Three flows.{" "}
              <span className="text-primary">One unified truth.</span>
            </h2>
            <p className="section-subheading mt-4">
              The Spine unifies Truth (structured records), Context (conversations
              and history), and Session Summaries (governed AI outputs) into one
              entity-level intelligence layer.
            </p>
          </motion.div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {spineCapabilities.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.08 }}
                className="arvio-card p-6"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: "var(--gradient-primary-icon)" }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.03em]">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.6] text-muted-foreground">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HITL flow */}
      <section
        className="arvio-section dark-section"
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
              Human-in-the-loop is{" "}
              <span className="text-primary">not a setting.</span>
            </h2>
            <p className="mt-4 text-[17px] font-medium leading-[1.5] text-white/55">
              It&apos;s the architecture. The Govern Gate is built into the execution
              path. No workflow, automation, or API call can bypass it.
            </p>
          </motion.div>
          <div className="relative mx-auto mt-16 max-w-3xl">
            {hitlSteps.map(({ label, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.1 }}
                className="relative mb-8 flex gap-6 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-white">
                    {i + 1}
                  </div>
                  {i < hitlSteps.length - 1 && (
                    <div className="mt-2 h-full w-px bg-white/10" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="text-[16px] font-semibold tracking-[-0.03em] text-white">
                    {label}
                  </h3>
                  <p className="mt-1.5 text-[14px] font-medium leading-[1.6] text-white/45">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              What makes the Spine{" "}
              <span className="text-primary">different</span>
            </h2>
          </motion.div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.07 }}
                className="arvio-card p-6"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: "var(--gradient-primary-icon)" }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.03em]">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.6] text-muted-foreground">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
