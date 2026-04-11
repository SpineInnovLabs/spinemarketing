"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, Zap, Brain, Clock, User, Laptop, Smartphone } from "lucide-react"

const whoFor = [
  "Individual contributors juggling email, tasks, docs, and chat all day",
  "Managers who need one place to see what matters across tools",
  "Freelancers and consultants managing multiple client workstreams",
  "Anyone who spends more time switching tools than doing actual work",
]

const tiers = [
  {
    name: "Starter",
    features: [
      "Connect up to 5 personal tools",
      "Unified inbox and activity feed",
      "AI-organized daily briefings",
      "Smart reminders and follow-up suggestions",
    ],
  },
  {
    name: "Growth",
    features: [
      "15 connectors across work and productivity tools",
      "Cross-tool search and context linking",
      "AI-drafted responses and summaries",
      "Custom workflows and automation rules",
      "Priority and focus mode intelligence",
    ],
  },
  {
    name: "Command",
    features: [
      "Unlimited connectors with full customization",
      "Team-wide personal ops deployment",
      "Advanced AI assistants with approval-based actions",
      "Admin controls and usage analytics",
      "Enterprise SSO and compliance",
    ],
  },
]

const useCases = [
  { icon: Clock, name: "Morning Briefings", desc: "Start each day with an AI-generated summary of what happened overnight across all your tools." },
  { icon: Zap, name: "Smart Follow-ups", desc: "Never drop the ball. AI tracks conversations and suggests follow-ups with full context attached." },
  { icon: Brain, name: "Cross-tool Search", desc: "Ask a question in natural language and get answers from across your email, docs, tasks, and chat." },
]

export function PersonalOpsContent() {
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
              <span className="text-[14px] font-semibold tracking-[-0.03em] text-[#0a0b10]">Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.4 }}
              className="text-[48px] font-semibold leading-[1em] tracking-[-0.05em] text-white sm:text-[54px] lg:text-[64px]"
            >
              Your personal{" "}
              <span className="text-primary">command center.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.6 }}
              className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
            >
              Stop context-switching between 15 tabs. Connect your tools, let AI organize your work,
              and focus on what actually matters.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.8 }}
              className="mt-10 flex flex-col items-center justify-center gap-2.5 sm:flex-row"
            >
              <Button
                size="lg"
                className="h-[42px] rounded-xl px-4 text-[15px] font-semibold tracking-[-0.3px]"
                style={{ background: "var(--gradient-primary)", border: "2px solid rgba(248,248,250,0.12)", boxShadow: "var(--shadow-button)" }}
                asChild
              >
                <Link href="/contact?intent=demo">Book a demo</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
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
              Built for people who{" "}
              <span className="text-primary">live in their tools</span>
            </h2>
          </motion.div>
          <div className="mx-auto mt-12 max-w-2xl">
            <ul className="space-y-3">
              {whoFor.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.08 }}
                  className="arvio-card flex items-start gap-3 p-4"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: "var(--gradient-primary-icon)" }}>
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">What you get <span className="text-primary">at every level</span></h2>
          </motion.div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.1 }}
                className="arvio-card flex flex-col p-8"
              >
                <h3 className="text-[18px] font-semibold tracking-[-0.03em]">{tier.name}</h3>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: "var(--gradient-primary-icon)" }}>
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-[15px] font-medium leading-[1.5] text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">How it <span className="text-primary">changes your day</span></h2>
          </motion.div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-3">
            {useCases.map(({ icon: Icon, name, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.1 }}
                className="arvio-card flex flex-col items-start p-8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: "var(--gradient-primary-icon)" }}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.03em] leading-[1.3]">{name}</h3>
                <p className="mt-3 text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
