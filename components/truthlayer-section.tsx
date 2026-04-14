"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Brain, UserCheck, BookOpen } from "lucide-react"

const steps = [
  { icon: Brain, label: "Action pauses", desc: "Every suggestion waits in a calm approval space" },
  { icon: ShieldCheck, label: "You see evidence", desc: "Edit tone, check reasoning, understand why" },
  { icon: UserCheck, label: "Permit or deny", desc: "Nothing moves without your conscious yes" },
  { icon: BookOpen, label: "System learns", desc: "Future proposals fit you better over time" },
]

export function TruthLayerSection() {
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-[40px] border border-primary/20 bg-primary/5 px-4 py-1.5">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span className="text-[14px] font-semibold tracking-[-0.03em] text-primary">Approval Gate</span>
          </div>
          <h2 className="text-[40px] font-semibold tracking-[-0.05em] leading-[1.15] text-white sm:text-[48px]">
            You{" "}
            <span className="text-primary">decide.</span>
          </h2>
          <p className="mt-6 text-[15px] font-medium leading-[1.5] text-white/40">
            Intelligence suggests and drafts wait, so nothing moves without your conscious yes.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-4">
          {steps.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.08 }}
              className="relative rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center"
            >
              {i < steps.length - 1 && (
                <div className="absolute -right-2.5 top-1/2 hidden -translate-y-1/2 text-white/20 sm:block">→</div>
              )}
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: "var(--gradient-primary-icon)" }}>
                <Icon className="h-5 w-5 text-white" />
              </div>
              <p className="mt-3 text-[14px] font-semibold text-white">{label}</p>
              <p className="mt-1 text-[12px] font-medium leading-[1.5] text-white/40">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-10 max-w-xl text-center text-[13px] font-medium leading-[1.6] text-white/25"
        >
          Rejected and edited actions teach the system. Proposals get sharper over time.
        </motion.p>
      </div>
    </section>
  )
}
