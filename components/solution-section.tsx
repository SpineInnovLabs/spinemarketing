"use client"

import { Database, Brain, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import { DashboardMockup } from "@/components/dashboard-mockup"

const pillars = [
  {
    num: "01",
    icon: Database,
    title: "Truth, context, and memory in one workspace",
    description:
      "Bring together records from your systems, live working context from conversations, and approved AI knowledge in one operating layer your team can actually trust.",
  },
  {
    num: "02",
    icon: Brain,
    title: "The Twin reasons on the full picture",
    description:
      "AI reads current data, human context, and accumulated session memory. It surfaces what matters, proposes next steps, and preserves continuity across work instead of starting cold every time.",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Govern what becomes action and knowledge",
    description:
      "Every proposal shows evidence, confidence, and freshness. Actions wait for approval, and new AI-learned knowledge only becomes reusable memory after you review it.",
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
            From fragmented tools to{" "}
            <span className="text-primary">governed operational knowledge.</span>
          </h2>
          <p className="mt-6 text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
            IntegrateWise does more than connect apps. It turns system truth, live context, and approved AI memory into one workspace where AI can reason clearly and humans stay in control.
          </p>
        </motion.div>

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
          {pillars.map(({ num, icon: Icon, title, description }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.1 }}
              className="arvio-card flex flex-col items-start p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: "var(--gradient-primary-icon)" }}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-primary">{num}</span>
              </div>
              <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.03em] leading-[1.3]">{title}</h3>
              <p className="mt-3 text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">{description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-10 max-w-2xl text-center"
        >
          <p className="text-[15px] font-semibold tracking-[-0.02em] text-foreground">
            Unified truth for daily work. <span className="text-primary">Governed AI for every next step.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
