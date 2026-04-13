"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  Eye,
  ShieldOff,
  Layers,
  Bot,
  LayoutDashboard,
  Workflow,
  CheckCircle2,
} from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Apps and data are fragmented",
    desc: "Your team works across CRM, support, billing, email, project tools, and finance. Each app holds a slice of the truth. Nobody holds the whole picture.",
  },
  {
    icon: Bot,
    title: "AI acts without full context",
    desc: "Copilots connected to a single app can only reason on that app's data. They miss the cross-system signals that actually matter — and they act before you've approved anything.",
  },
  {
    icon: ShieldOff,
    title: "No governance on automation",
    desc: "Shadow automation fires without audit trails. Actions execute without evidence. When something goes wrong, there's no record of why the system did what it did.",
  },
];

const breaks = [
  {
    title: "Missed signals",
    desc: "A customer's usage dropped, their champion left, and three support tickets went unresolved — but no single app flagged the combined risk. You only found out on renewal day.",
  },
  {
    title: "Shadow automation",
    desc: "A workflow updated records in three systems overnight. Nobody approved it. Nobody knows what triggered it. The audit shows nothing.",
  },
  {
    title: "Audit and trust risk",
    desc: "A board asks why a deal was marked won. The AI wrote the note. There's no evidence chain, no human approval, no session record.",
  },
];

const existingFails = [
  {
    icon: LayoutDashboard,
    title: "CRM-centric views",
    desc: "CRMs give you the sales record. They don't show you support health, billing status, product usage, or the last three conversations — in one place, for every account.",
  },
  {
    icon: Eye,
    title: "Dashboards only",
    desc: "BI tools aggregate data beautifully. They don't tell you what to do next, don't connect to your workflow, and don't govern any action that follows.",
  },
  {
    icon: Workflow,
    title: "Isolated copilots",
    desc: "App-specific AI assistants reason on one tool's data. They don't know what's happening across your stack. Every copilot is blind to every other app.",
  },
];

const answer = [
  {
    title: "One Spine",
    desc: "The Spine connects every app — CRM, support, billing, email, finance, projects — into one adaptive intelligence layer. Structured records, unstructured conversations, and AI outputs all unified.",
  },
  {
    title: "One workspace",
    desc: "L1 is your Daily Workbench. Every team sees the right view — accounts, business, or personal — built from the full truth across all connected apps. One place to work every day.",
  },
  {
    title: "Governed AI",
    desc: "L2 is the Intelligence Layer. The Twin reads everything, reasons with evidence, and surfaces signals and recommended actions. Nothing executes until you approve. Every output is a Session Summary — logged, attributed, and traceable.",
  },
];

export function WhyContent() {
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
            Why IntegrateWise
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.15 }}
            className="text-[48px] font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-[64px]"
          >
            The apps problem is{" "}
            <span className="text-primary">not fragmentation.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.35 }}
            className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
          >
            It&apos;s that the signal is scattered, the AI has no full context, and
            every action bypasses governance. IntegrateWise fixes all three.
          </motion.p>
        </div>
      </section>

      {/* The problem */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              What breaks when{" "}
              <span className="text-primary">apps don&apos;t talk</span>
            </h2>
            <p className="section-subheading mt-4">
              Your team uses 8–15 apps every day. Each holds a piece of the
              truth. No single view shows the full picture.
            </p>
          </motion.div>
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {problems.map(({ icon: Icon, title, desc }, i) => (
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

      {/* What breaks */}
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
              Real failures from{" "}
              <span className="text-primary">fragmented systems</span>
            </h2>
          </motion.div>
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {breaks.map(({ title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.08 }}
                className="arvio-card border-l-2 border-l-primary p-6"
              >
                <h3 className="text-[16px] font-semibold tracking-[-0.03em]">
                  {title}
                </h3>
                <p className="mt-3 text-[14px] font-medium leading-[1.6] text-muted-foreground">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why existing products fail */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              Why existing products{" "}
              <span className="text-primary">can&apos;t fix this</span>
            </h2>
            <p className="section-subheading mt-4">
              CRMs, dashboards, and isolated copilots were built for a world
              where one app had most of the picture. That world is gone.
            </p>
          </motion.div>
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {existingFails.map(({ icon: Icon, title, desc }, i) => (
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

      {/* The IntegrateWise answer */}
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
              One Spine. One workspace.{" "}
              <span className="text-primary">Governed AI.</span>
            </h2>
            <p className="mt-4 text-[17px] font-medium leading-[1.5] text-white/55">
              IntegrateWise connects every app over a shared Spine, gives every
              team a unified workspace, and makes the AI wait for your approval
              before anything changes.
            </p>
          </motion.div>
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {answer.map(({ title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.08 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-[12px] font-bold text-primary">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-[17px] font-semibold tracking-[-0.03em] text-white">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.6] text-white/45">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-col items-center justify-center gap-2.5 sm:flex-row"
          >
            <Button
              size="lg"
              className="h-[42px] rounded-xl px-6 text-[15px] font-semibold"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-button)" }}
              asChild
            >
              <Link href="/contact?intent=demo">See it in action</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-[42px] rounded-xl border-2 border-white/15 bg-transparent px-6 text-[15px] font-semibold text-white hover:bg-white/10"
              asChild
            >
              <Link href="/spine">How the Spine works</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Proof stat */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[700px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 text-primary mb-3">
              <CheckCircle2 className="h-6 w-6" />
              <span className="text-[14px] font-bold uppercase tracking-[0.1em]">Proof</span>
            </div>
            <blockquote className="text-[20px] font-semibold tracking-[-0.03em] leading-[1.4]">
              &ldquo;The Spine connected support, usage, billing, and relationship data
              across 12 apps. The team spotted the risk early. The $8M account was
              saved.&rdquo;
            </blockquote>
            <p className="mt-4 text-[14px] font-medium text-muted-foreground">
              Account Success team · IntegrateWise early customer
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
