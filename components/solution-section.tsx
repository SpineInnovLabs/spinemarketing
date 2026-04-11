"use client"

import { Database, Brain, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import { DashboardMockup } from "@/components/dashboard-mockup"

const pillars = [
  {
    icon: Database,
    title: "One connected workspace",
    description:
      "All your tools feed into a single, always-up-to-date workspace. No more tab-switching or copy-pasting between systems.",
  },
  {
    icon: Brain,
    title: "AI with full context",
    description:
      "AI that sees the complete picture — every conversation, every ticket, every payment — not just isolated records or chats.",
  },
  {
    icon: ShieldCheck,
    title: "You approve every action",
    description:
      "AI suggests what to do and shows you why. Nothing happens until you say so. You always have the final say.",
  },
]

export function SolutionSection() {
  return (
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
            One place for everything.{" "}
            <span className="text-primary">AI that waits for your OK.</span>
          </h2>
          <p className="mt-6 text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
            IntegrateWise connects your tools into one workspace, builds a complete view of every customer
            and account, and lets AI suggest next steps — that only happen after you approve.
          </p>
        </motion.div>

        {/* Dashboard Mockup — L1 workspace + L2 intelligence drawer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-12 max-w-[900px]"
        >
          <DashboardMockup />
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-3">
          {pillars.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.1 }}
              className="arvio-card flex flex-col items-start p-8"
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg"
                style={{ background: "var(--gradient-primary-icon)" }}
              >
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.03em] leading-[1.3]">{title}</h3>
              <p className="mt-3 text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
