"use client"

import { AlertTriangle, Eye, GitBranch, ShieldOff } from "lucide-react"
import { motion } from "framer-motion"

const problems = [
  { icon: GitBranch, text: "Data scattered. You hunt across twelve tabs before every decision." },
  { icon: Eye, text: "Intelligence blind. No full context, so nudges arrive late or wrong." },
  { icon: ShieldOff, text: "Automation rogue. Things fire without you, so trust quietly erodes." },
]

export function ProblemSection() {
  return (
    <section className="arvio-section">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="section-heading text-[rgba(246,239,239,1)]">
            The Human API{" "}
            <span className="text-primary">is breaking.</span>
          </h2>
          <p className="mt-6 text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
            You are the bridge. And it&apos;s exhausting.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-3xl gap-4 sm:grid-cols-2">
          {problems.map(({ icon: Icon, text }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.1 }}
              className="arvio-card flex items-start gap-4 p-6"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                style={{ background: "linear-gradient(135deg, rgba(239,68,68,0.15), rgba(239,68,68,0.05))" }}
              >
                <Icon className="h-5 w-5 text-destructive" />
              </div>
              <p className="text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-foreground">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
