"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, ShieldCheck, TrendingUp, Users, Eye, AlertTriangle, BarChart3 } from "lucide-react"

const whoFor = [
  "Customer Success leaders managing 50+ accounts",
  "Account Managers who need full context before every call",
  "Revenue leaders who can't afford blind spots on renewals",
  "CS Ops teams building health scores from scattered data",
]

const tiers = [
  {
    name: "Starter",
    features: [
      "Complete account views for up to 50 accounts",
      "5 connectors (CRM, support, billing, email, chat)",
      "Basic health signals and risk alerts",
      "You approve every AI suggestion before it runs",
    ],
  },
  {
    name: "Growth",
    features: [
      "Unlimited accounts with complete views",
      "15 connectors including product analytics",
      "Advanced signal detection and trend analysis",
      "Custom playbooks and escalation rules",
      "Team collaboration and shared insights",
    ],
  },
  {
    name: "Command",
    features: [
      "Enterprise-grade controls and audit trails",
      "Premium connectors and custom integrations",
      "Executive dashboards and portfolio risk views",
      "Dedicated success team and SLA",
      "SSO, RBAC, and compliance packages",
    ],
  },
]

const industries = [
  { icon: BarChart3, name: "SaaS & Technology", desc: "Track product usage, support tickets, and billing signals in one view." },
  { icon: Users, name: "Professional Services", desc: "Connect project delivery, client communication, and billing data." },
  { icon: TrendingUp, name: "Financial Services", desc: "Unify relationship data across compliance, advisory, and operations." },
]

export function AccountSuccessContent() {
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
              Account Success{" "}
              <span className="text-primary">without the blind spots.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.6 }}
              className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
            >
              Turn scattered account data into a complete, live view. Spot risks early, act on signals, and protect revenue
              — all with AI that always waits for your approval.
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
              Built for teams who{" "}
              <span className="text-primary">can&apos;t afford to miss signals</span>
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

      {/* What You Get Per Tier */}
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
              What you get{" "}
              <span className="text-primary">at every level</span>
            </h2>
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

      {/* Industry Examples */}
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
              Works across{" "}
              <span className="text-primary">industries</span>
            </h2>
          </motion.div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-3">
            {industries.map(({ icon: Icon, name, desc }, i) => (
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
