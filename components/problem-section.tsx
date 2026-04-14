"use client"

import { AlertTriangle, Eye, GitBranch, ShieldOff } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
    <section className="relative overflow-hidden bg-dark-section py-32 md:py-40">
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
          <Badge variant="outline" className="mb-4 rounded-full border-red-400/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-red-400/80">
            The problem
          </Badge>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Modern work isn&apos;t hard.{" "}
            <span className="text-primary">The plumbing is.</span>
          </h2>
          <p className="mt-6 text-base font-medium leading-relaxed text-white/45">
            Copy-paste. Tab-switch. Repeat. Your apps don&apos;t agree. Your AI doesn&apos;t know. You&apos;re the bridge.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-16 md:mt-20 grid max-w-3xl gap-5 sm:grid-cols-2"
        >
          {problems.map(({ icon: Icon, text, color, glow }, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card className="flex h-full items-start gap-4 border-border bg-white/[0.03] p-6 transition-colors hover:border-white/[0.15]">
                <CardContent className="flex items-start gap-4 p-0">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: color, boxShadow: `0 0 24px ${glow}` }}
                  >
                    <Icon className="h-5 w-5 text-red-400" />
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-white/60">{text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
