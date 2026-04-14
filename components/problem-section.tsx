"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const beforeItems = [
  { emoji: "📊", label: "10-30+ SaaS tools" },
  { emoji: "🔇", label: "No native communication" },
  { emoji: "📋", label: "Copy-paste across tabs" },
  { emoji: "🤖", label: "AI works blind" },
]

const afterItems = [
  { emoji: "🔗", label: "One Spine connects all" },
  { emoji: "🧠", label: "AI sees full context" },
  { emoji: "✅", label: "You approve, it acts" },
  { emoji: "📈", label: "Signals, not noise" },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { type: "spring", damping: 20, stiffness: 60 } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden py-40 md:py-52" style={{ background: "#05070A" }}>
      <div className="absolute inset-0 bg-grain" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[30%] top-[20%] h-[500px] w-[600px] rounded-full opacity-20 blur-[180px]" style={{ background: "radial-gradient(circle, rgba(239,68,68,0.2), transparent 70%)" }} />
        <div className="absolute right-[20%] bottom-[20%] h-[400px] w-[500px] rounded-full opacity-15 blur-[150px]" style={{ background: "radial-gradient(circle, rgba(27,167,132,0.15), transparent 70%)" }} />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 20, stiffness: 60 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge variant="outline" className="mb-6 rounded-full border-red-400/20 bg-red-400/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-400/70 backdrop-blur-sm">
            The problem
          </Badge>
          <h2 className="section-heading text-white">
            Your tools don&apos;t{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">talk to each other.</span>
          </h2>
          <p className="mt-6 text-[17px] font-medium leading-relaxed text-white/35">
            10-30+ SaaS tools. No shared truth. You are the bridge.
          </p>
        </motion.div>

        <div className="mx-auto mt-20 md:mt-28 grid gap-8 md:gap-12 md:grid-cols-2 max-w-4xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="mb-6">
              <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-red-400/60">Before</span>
            </div>
            <div className="space-y-4">
              {beforeItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group rounded-2xl p-5 transition-all duration-500"
                  style={{
                    background: "rgba(239,68,68,0.03)",
                    border: "1px solid rgba(239,68,68,0.08)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xl">{item.emoji}</span>
                    <p className="text-[15px] font-medium text-white/50">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="mb-6">
              <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-emerald-400/60">After — with IntegrateWise</span>
            </div>
            <div className="space-y-4">
              {afterItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group rounded-2xl p-5 transition-all duration-500"
                  style={{
                    background: "rgba(27,167,132,0.03)",
                    border: "1px solid rgba(27,167,132,0.1)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xl">{item.emoji}</span>
                    <p className="text-[15px] font-medium text-white/50">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
