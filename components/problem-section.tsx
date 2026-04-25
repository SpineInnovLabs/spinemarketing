"use client"

import { AlertTriangle, Clock, Database, Eye, GitBranch, Mail, MessageSquare, ShieldOff, User } from "lucide-react"
import { motion } from "framer-motion"

const problems = [
  {
    icon: GitBranch,
    title: "Data scattered.",
    body: "Before every review, you hunt across twelve tabs just to rebuild what you already know.",
  },
  {
    icon: Eye,
    title: "Intelligence blind.",
    body: "Signals are there — usage drops, angry tickets, quiet deals — but no tool sees the full picture at once.",
  },
  {
    icon: ShieldOff,
    title: "Automation rogue.",
    body: "Bots fire off emails and updates without asking you. After one bad move, you stop trusting the whole system.",
  },
]

const floatingSignals = [
  { icon: MessageSquare, label: "Slack #urgent", detail: "Renewal risk hidden in thread", className: "left-5 top-8", delay: 0 },
  { icon: Mail, label: "Gmail - Escalation", detail: "Decision context buried", className: "right-5 top-24", delay: 0.18 },
  { icon: Database, label: "Salesforce", detail: "Health score missing signal", className: "left-10 bottom-16", delay: 0.36 },
]

function FragmentationVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", damping: 20, stiffness: 70 }}
      className="relative min-h-[520px] overflow-hidden rounded-[28px] border border-white/10 bg-[#1d1d1d] p-6 shadow-[0_24px_80px_-55px_rgba(255,225,204,0.4)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] opacity-35" />
      <motion.svg
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 520 520"
        preserveAspectRatio="none"
      >
        {[
          "M120 90 C210 150 250 210 260 260",
          "M420 145 C345 185 295 225 260 260",
          "M145 410 C205 365 235 315 260 260",
        ].map((path, i) => (
          <motion.path
            key={path}
            d={path}
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1.2"
            strokeDasharray="5 7"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </motion.svg>

      {floatingSignals.map(({ icon: Icon, label, detail, className, delay }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          animate={{ y: [0, -7, 0] }}
          transition={{ opacity: { duration: 0.35, delay }, y: { duration: 4.2, repeat: Infinity, delay }, scale: { duration: 0.35, delay } }}
          className={`absolute z-20 w-[230px] rounded-2xl border border-white/10 bg-[#151515]/92 p-4 backdrop-blur-xl ${className}`}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#FFE1CC]/15 bg-[#FFE1CC]/10">
              <Icon className="h-4 w-4 text-[#FFE1CC]" />
            </span>
            <div>
              <div className="text-[12px] font-semibold text-white/80">{label}</div>
              <div className="mt-0.5 text-[11px] font-medium text-white/30">{detail}</div>
            </div>
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-1.5 w-full rounded-full bg-white/[0.08]" />
            <div className="h-1.5 w-4/5 rounded-full bg-white/[0.08]" />
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.86 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", damping: 16, stiffness: 120, delay: 0.32 }}
        className="absolute left-1/2 top-1/2 z-30 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#FFE1CC]/25 bg-[#FFE1CC] text-[#111111] shadow-[0_0_70px_rgba(255,225,204,0.22)]"
      >
        <User className="h-9 w-9" />
        <motion.span
          animate={{ scale: [1, 1.65, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="absolute inset-0 rounded-full border border-[#FFE1CC]/40"
        />
      </motion.div>
    </motion.div>
  )
}

export function ProblemSection() {
  return (
    <section id="pain-section" className="relative overflow-hidden border-t border-white/[0.05] py-24 md:py-32" style={{ background: "#111111" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-[0.05] blur-[120px]" style={{ background: "radial-gradient(circle, #FFE1CC, transparent 70%)" }} />
      </div>
      <div className="relative mx-auto max-w-[1120px] px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <FragmentationVisual />

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", damping: 20, stiffness: 70, delay: 0.08 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FF6347]/20 bg-[#FF6347]/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#FFE1CC]">
              <AlertTriangle className="h-3.5 w-3.5" />
              The Hidden Cost of Modern Work
            </div>
            <h2 className="text-[40px] font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-[52px] lg:text-[56px]">
              The Tab-Switching <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE1CC] to-white">Tax.</span>
            </h2>
            <p className="mt-6 text-[17px] font-medium leading-[1.75] tracking-[-0.02em] text-white/50">
              Right now, you are the integration layer. Every decision means tab-switching, copy-pasting, and gut-checking across tools. It &ldquo;works&rdquo; only because you hold it together.
            </p>
            <p className="mt-5 text-[15px] font-medium leading-[1.8] text-white/40">
              We toggle between apps 9-10 times per hour. That is not just a delay; it is a cognitive reset. By the time you find the context in your CRM, the insight from Slack is already gone.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: Clock, value: "23%", label: "of day lost to context switching" },
                { icon: GitBranch, value: "9-10", label: "app switches per hour" },
              ].map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", damping: 18, stiffness: 90, delay: 0.18 + i * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-[#1d1d1d] p-5"
                >
                  <Icon className="h-4 w-4 text-[#FFE1CC]" />
                  <div className="mt-4 text-[30px] font-semibold tracking-[-0.05em] text-white">{value}</div>
                  <div className="mt-1 text-[12px] font-medium leading-[1.5] text-white/40">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto mt-16 grid max-w-5xl gap-5 md:grid-cols-3">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-6 hidden origin-center border-t border-dashed border-white/10 md:block"
          />
          {problems.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", damping: 20, stiffness: 70, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-[22px] border border-white/10 bg-[#1d1d1d] p-7 transition-colors hover:border-white/15 hover:bg-[#222222]"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", damping: 15, stiffness: 180, delay: 0.25 + i * 0.08 }}
                className="absolute left-1/2 top-0 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#111111] md:block"
              >
                <motion.span
                  animate={{ scale: [1, 1.8, 1], opacity: [0.7, 0.18, 0.7] }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.35 }}
                  className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFE1CC]/70"
                />
              </motion.div>
              <motion.div
                whileHover={{ rotate: -3, scale: 1.04 }}
                transition={{ type: "spring", damping: 14, stiffness: 180 }}
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#FF6347]/20 bg-[#FF6347]/10"
              >
                <Icon className="h-5 w-5 text-[#FF6347]" />
              </motion.div>
              <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-white">
                {title}
              </h3>
              <p className="mt-3 text-[14px] font-medium leading-[1.7] text-white/45">
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
