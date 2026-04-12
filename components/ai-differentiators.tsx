"use client"

import { motion } from "framer-motion"
import { Zap, MessageSquare, Eye, ShieldCheck } from "lucide-react"

const diffs = [
  { icon: Zap, line: "Proactive, not reactive", sub: "Surfaces what matters before you ask" },
  { icon: MessageSquare, line: "Not just a chatbot", sub: "Reads your tools, not just your prompts" },
  { icon: Eye, line: "Complete context of your work", sub: "Every tool, every conversation, every decision" },
  { icon: ShieldCheck, line: "Learns without polluting", sub: "Reads truth and context — never overwrites them" },
]

export function AIDifferentiators() {
  return (
    <section className="arvio-section" style={{ backgroundColor: "rgb(8, 7, 14)" }}>
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">The Twin</p>
          <h2 className="mt-3 text-[40px] font-semibold tracking-[-0.05em] leading-[1.15] text-white sm:text-[48px]">
            AI that actually{" "}
            <span className="text-primary">understands your work.</span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {diffs.map(({ icon: Icon, line, sub }, i) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", bounce: 0.2, duration: 0.6 }}
              className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ background: "var(--gradient-primary-icon)" }}>
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-[15px] font-semibold text-white">{line}</p>
                <p className="mt-1 text-[13px] font-medium text-white/40">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
