"use client"

import { AlertTriangle, Eye, GitBranch, ShieldOff } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const problems = [
  { icon: GitBranch, text: "Apps are disconnected across teams and functions.", color: "#ef4444", bgFrom: "rgba(239,68,68,0.12)", bgTo: "rgba(239,68,68,0.04)" },
  { icon: Eye, text: "Knowledge is scattered across docs, tickets, chats, and email.", color: "#fb923c", bgFrom: "rgba(251,146,60,0.12)", bgTo: "rgba(251,146,60,0.04)" },
  { icon: AlertTriangle, text: "AI works blind, without the full business context.", color: "#fbbf24", bgFrom: "rgba(251,191,36,0.12)", bgTo: "rgba(251,191,36,0.04)" },
  { icon: ShieldOff, text: "Actions happen without clear approval, evidence, or audit trail.", color: "#ef4444", bgFrom: "rgba(239,68,68,0.12)", bgTo: "rgba(239,68,68,0.04)" },
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
        <div className="absolute left-[30%] top-[20%] h-[500px] w-[600px] rounded-full opacity-25 blur-[150px]" style={{ background: "radial-gradient(circle, rgba(239,68,68,0.25), transparent 70%)" }} />
        <div className="absolute right-[20%] bottom-[20%] h-[400px] w-[500px] rounded-full opacity-15 blur-[120px]" style={{ background: "radial-gradient(circle, rgba(251,146,60,0.20), transparent 70%)" }} />
      </div>
      <div className="relative mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge variant="outline" className="mb-4 rounded-full border-red-400/30 bg-red-400/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-400/80 backdrop-blur-sm">
            The problem
          </Badge>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Modern work isn&apos;t hard.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">The plumbing is.</span>
          </h2>
          <p className="mt-6 text-base font-medium leading-relaxed text-white/50">
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
          {problems.map(({ icon: Icon, text, color, bgFrom, bgTo }, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div
                className="group relative h-full rounded-2xl p-[1px] transition-all duration-500"
                style={{ background: `linear-gradient(135deg, ${color}25, transparent 50%, ${color}15)` }}
              >
                <div className="relative h-full overflow-hidden rounded-2xl bg-[#0c0b14] p-6">
                  <div
                    className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full opacity-20 blur-[40px] transition-opacity duration-500 group-hover:opacity-40"
                    style={{ background: color }}
                  />
                  <div className="relative flex items-start gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        background: `linear-gradient(135deg, ${bgFrom}, ${bgTo})`,
                        boxShadow: `0 0 20px ${color}30, inset 0 0 8px ${color}10`,
                      }}
                    >
                      <Icon className="h-5 w-5" style={{ color }} />
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-white/60">{text}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
