"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Eye,
  AlertTriangle,
  BarChart3,
  Heart,
  CalendarCheck,
  Zap,
} from "lucide-react";

const whatChanges = [
  {
    icon: Eye,
    title: "One complete view of every account",
    desc: "CRM, support, billing, email, messaging, project tools — assembled into one profile automatically.",
  },
  {
    icon: AlertTriangle,
    title: "AI that spots problems before you do",
    desc: "Champion going silent. Tickets climbing. Payments failing. Surfaced with evidence, not guesses.",
  },
  {
    icon: Heart,
    title: "Health scores that reflect reality",
    desc: "Built from actual data across every system — not a CRM field someone forgot to update.",
  },
  {
    icon: CalendarCheck,
    title: "Renewal tracking with full context",
    desc: "Timeline, stakeholders, risks, history — from every tool. At-risk renewals flagged 90 days out.",
  },
  {
    icon: Zap,
    title: "Playbooks on real data",
    desc: "Onboarding, QBR prep, renewals, escalations — each pulling live data, not stale CRM fields.",
  },
];

const steps = [
  {
    num: "01",
    title: "Connect your tools",
    desc: "Salesforce, HubSpot, Zendesk, Stripe, Slack, Jira, Notion, QuickBooks, Gmail — plug in the tools you already use. One-time setup, secure OAuth.",
  },
  {
    num: "02",
    title: "The Spine builds the full picture",
    desc: "Account data, support tickets, billing, conversations, and documents flow into one intelligence layer. Relationships preserved — not flattened.",
  },
  {
    num: "03",
    title: "AI surfaces what matters",
    desc: "Churn risks, renewal threats, champion changes, escalation patterns — evidence-backed, not hallucinated.",
  },
  {
    num: "04",
    title: "You review and act",
    desc: "Every proposed action comes with evidence. You approve, adjust, or dismiss.",
  },
];

export function AccountSuccessContent() {
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
              Protect revenue. Spot risks early.{" "}
              <span className="text-primary">
                Know every account completely.
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
              className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
            >
              You manage dozens of accounts across CRMs, support desks, billing
              systems, and inboxes. The information is always there — just
              scattered across eight tools.
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
              For CS teams, account managers, agency owners, and freelancers.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
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
                You check 8 tools every morning{" "}
                <span className="text-primary">
                  just to understand one account.
                </span>
              </h2>
              <div className="mt-8 space-y-4 text-[17px] font-medium leading-[1.7] tracking-[-0.02em] text-muted-foreground">
                <p>
                  CRM says healthy. Support has 3 P1 tickets. Billing shows a
                  failed payment. Champion silent for 2 weeks. No single tool
                  tells you what&apos;s actually happening.
                </p>
                <p className="text-foreground font-semibold">
                  That&apos;s not Customer Success. That&apos;s data plumbing.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Changes */}
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
                className={`arvio-card p-6 ${i === whatChanges.length - 1 && whatChanges.length % 2 !== 0 ? "sm:col-span-2 sm:max-w-md sm:mx-auto" : ""}`}
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

      {/* Proof */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: "var(--gradient-primary-icon)" }}
              >
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h2 className="mt-6 section-heading-sm">
                Proof it <span className="text-primary">works</span>
              </h2>
              <p className="mt-6 text-[17px] font-medium leading-[1.7] tracking-[-0.02em] text-muted-foreground">
                In a live deployment, IntegrateWise spotted early warning signs
                on a major account: support tickets climbing, usage dropping,
                champion silent, payments failing.
              </p>
              <p className="mt-4 text-[17px] font-medium leading-[1.7] tracking-[-0.02em] text-muted-foreground">
                The Spine connected all the signals. The team intervened and
                saved an{" "}
                <span className="text-foreground font-semibold">
                  $8M account
                </span>{" "}
                that had already turned red.
              </p>
            </motion.div>
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
              Stop being the human bridge{" "}
              <span className="text-primary">between your account tools.</span>
            </h2>
            <p className="mt-6 text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
              See every account completely. Spot risks before they become
              crises. Act with confidence.
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
