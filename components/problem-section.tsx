"use client"

import { AlertTriangle, Eye, GitBranch, ShieldOff } from "lucide-react"
import { motion } from "framer-motion"

const problems = [
  { icon: GitBranch, text: "Apps are disconnected across teams and functions.", color: "rgba(239,68,68,0.15)", glow: "rgba(239,68,68,0.25)" },
  { icon: Eye, text: "Knowledge is scattered across docs, tickets, chats, and email.", color: "rgba(251,146,60,0.15)", glow: "rgba(251,146,60,0.25)" },
  { icon: AlertTriangle, text: "AI works blind, without the full business context.", color: "rgba(251,191,36,0.15)", glow: "rgba(251,191,36,0.25)" },
  { icon: ShieldOff, text: "Actions happen without clear approval, evidence, or audit trail.", color: "rgba(239,68,68,0.15)", glow: "rgba(239,68,68,0.25)" },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring", damping: 18, stiffness: 70 } },
}

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden py-24" style={{ backgroundColor: "rgb(8, 7, 14)" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[30%] top-[20%] h-[400px] w-[500px] rounded-full opacity-20 blur-[120px]" style={{ background: "radial-gradient(circle, rgba(239,68,68,0.2), transparent 70%)" }} />
        <div className="absolute right-[20%] bottom-[20%] h-[300px] w-[400px] rounded-full opacity-15 blur-[100px]" style={{ background: "radial-gradient(circle, rgba(251,146,60,0.2), transparent 70%)" }} />
      </div>
      <div className="relative mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-red-400/80">The problem</p>
          <h2 className="text-[36px] font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-[44px]">
            Modern work isn&apos;t hard.{" "}
            <span className="text-primary">The plumbing is.</span>
          </h2>
          <p className="mt-5 text-[16px] font-medium leading-[1.6] text-white/45">
            Copy-paste. Tab-switch. Repeat. Your apps don&apos;t agree. Your AI doesn&apos;t know. You&apos;re the bridge.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2"
        >
          {problems.map(({ icon: Icon, text, color, glow }, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-colors hover:border-white/[0.15]"
            >
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                style={{ background: color, boxShadow: `0 0 24px ${glow}` }}
              >
                <Icon className="h-5 w-5 text-red-400" />
              </div>
              <p className="text-[15px] font-medium leading-[1.55] tracking-[-0.02em] text-white/60">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
