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
    desc: "Each app holds a slice. Nobody holds the whole picture.",
  },
  {
    icon: Bot,
    title: "AI acts without full context",
    desc: "Single-app copilots miss cross-system signals. They act before you approve.",
  },
  {
    icon: ShieldOff,
    title: "No governance on automation",
    desc: "Actions execute without evidence or audit trail. No record of why.",
  },
];

const breaks = [
  {
    title: "Missed signals",
    desc: "Usage dropped, champion left, tickets unresolved — no app flagged the combined risk.",
  },
  {
    title: "Shadow automation",
    desc: "Records changed overnight. Nobody approved it. The audit shows nothing.",
  },
  {
    title: "Audit and trust risk",
    desc: "Board asks why a deal was marked won. No evidence chain. No session record.",
  },
];

const existingFails = [
  {
    icon: LayoutDashboard,
    title: "CRM-centric views",
    desc: "CRMs show the sales record. Not support, billing, or usage — in one place.",
  },
  {
    icon: Eye,
    title: "Dashboards only",
    desc: "Beautiful charts. No next action. No workflow. No governance.",
  },
  {
    icon: Workflow,
    title: "Isolated copilots",
    desc: "Each copilot reasons on one tool. Blind to every other app.",
  },
];

const answer = [
  {
    title: "One Spine",
    desc: "Every app connected. Records, conversations, and AI outputs — unified.",
  },
  {
    title: "One workspace",
    desc: "Every team sees the right view — built from full truth across all apps.",
  },
  {
    title: "Governed AI",
    desc: "AI surfaces signals with evidence. Nothing executes until you approve.",
  },
];

export function WhyContent() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pb-24 pt-40 bg-dark-section"
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
            Signal is scattered. AI has no context. Actions bypass governance.
          </motion.p>
        </div>
      </section>

      {/* The problem */}
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
              What breaks when{" "}
              <span className="text-primary">apps don&apos;t talk</span>
            </h2>
            <p className="section-subheading mt-4">
              8–15 apps. No single view shows the full picture.
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
              Why existing products{" "}
              <span className="text-primary">can&apos;t fix this</span>
            </h2>
            <p className="section-subheading mt-4">
              Built for a world where one app had the picture. That world is gone.
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
        className="arvio-section dark-section bg-dark-section"
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
              Every app connected. Every team unified. AI waits for your approval.
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
      <section className="arvio-section dark-section">
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
