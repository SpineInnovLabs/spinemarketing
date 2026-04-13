"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  AlertTriangle,
  FileText,
  User,
  Building2,
  Settings,
  Monitor,
} from "lucide-react";

const fourViews = [
  {
    icon: User,
    role: "For Founders",
    desc: "ARR, growth, cash signals, risk — one screen, real time.",
  },
  {
    icon: Building2,
    role: "For CEOs",
    desc: "Revenue, retention, pipeline, performance — board prep in minutes.",
  },
  {
    icon: Settings,
    role: "For COOs",
    desc: "Who's blocked, what's at risk, where handoffs break — with evidence.",
  },
  {
    icon: Monitor,
    role: "For CTO/CIOs",
    desc: "Integration health, data quality, sync status — one landscape.",
  },
];

const whatChanges = [
  {
    icon: BarChart3,
    title: "One source of truth",
    desc: "Every tool, every team, same numbers. No more reconciling spreadsheets.",
  },
  {
    icon: TrendingUp,
    title: "Forecasts from real data",
    desc: "Revenue and pipeline grounded in actual data, not guesses.",
  },
  {
    icon: AlertTriangle,
    title: "Risks before they're fires",
    desc: "Revenue drops, support spikes, payment failures — connected and surfaced.",
  },
  {
    icon: FileText,
    title: "Reports that build themselves",
    desc: "Board decks and reviews assembled from live data. No Friday copy-paste.",
  },
];

const steps = [
  {
    num: "01",
    title: "Connect your tools",
    desc: "CRM, billing, support, finance — plug in once, securely.",
  },
  {
    num: "02",
    title: "Everything unifies",
    desc: "One intelligence layer. Relationships preserved across tools.",
  },
  {
    num: "03",
    title: "Your operating view",
    desc: "Role-specific dashboards. Same truth, different lenses.",
  },
  {
    num: "04",
    title: "You stay in control",
    desc: "Evidence on every insight. Approval on every action.",
  },
];

export function BusinessOpsContent() {
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
              className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
            >
              You make decisions every day about revenue, operations, and risk —
              but the data lives in different tools, owned by different teams.
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
              className="mt-10 flex flex-col items-center justify-center gap-2.5 sm:flex-row"
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
            <p className="mt-6 text-[14px] font-medium text-white/30">
              For founders, CEOs, COOs, operators, and leadership teams.
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
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
                  Half of it in spreadsheets updated weekly — maybe.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Four Views */}
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
                className="arvio-card p-6"
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

      {/* What Changes */}
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
              What changes with{" "}
              <span className="text-primary">IntegrateWise</span>
            </h2>
          </motion.div>
          <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
            {whatChanges.map(({ icon: Icon, title, desc }, i) => (
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

      {/* How It Works */}
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
              How it <span className="text-primary">works</span>
            </h2>
          </motion.div>
          <div className="mx-auto mt-16 grid max-w-3xl gap-8">
            {steps.map(({ num, title, desc }, i) => (
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
                className="flex gap-6"
              >
                <div className="text-[40px] font-bold tracking-[-0.05em] text-primary/15 leading-none">
                  {num}
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold tracking-[-0.03em]">
                    {title}
                  </h3>
                  <p className="mt-2 text-[14px] font-medium leading-[1.6] text-muted-foreground">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
