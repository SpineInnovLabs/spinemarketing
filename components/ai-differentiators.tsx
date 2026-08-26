"use client";

import { motion } from "framer-motion";
import { Database, MessageSquare, BookOpen, ArrowRight } from "lucide-react";

const layers = [
  {
    icon: Database,
    label: "Truth",
    title: "Your systems of record",
    desc: "CRM, billing, support, project tools, docs, email, chat — all connected, synced, and kept current.",
    color: { bg: "rgba(45,212,191,0.12)", glow: "rgba(45,212,191,0.25)", text: "#2dd4bf" },
  },
  {
    icon: MessageSquare,
    label: "Context",
    title: "Live human context",
    desc: "Conversations, notes, meeting decisions, session context — captured as it happens.",
    color: { bg: "rgba(52,211,153,0.12)", glow: "rgba(52,211,153,0.25)", text: "#34d399" },
  },
  {
    icon: BookOpen,
    label: "Session Summaries",
    title: "What AI learned, governed by you",
    desc: "What AI learns during your conversations. Session summaries pass through the Governance before they become knowledge.",
    color: { bg: "rgba(110,231,183,0.12)", glow: "rgba(110,231,183,0.25)", text: "#6ee7b7" },
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring", damping: 18, stiffness: 70 } },
};

export function AIDifferentiators() {
  return (
    <section className="relative overflow-hidden py-24 bg-dark-section">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[20%] h-[500px] w-[600px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]" style={{ background: "radial-gradient(circle, rgba(45,212,191,0.2), transparent 70%)" }} />
      </div>
      <div className="relative mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">The Spine</p>
          <h2 className="text-[36px] font-semibold tracking-[-0.04em] leading-[1.15] text-white sm:text-[44px]">
            Three flows.{" "}
            <span className="text-primary">One complete picture.</span>
          </h2>
          <p className="mt-4 text-[15px] font-medium leading-[1.6] text-white/45">
            SpineWorkspace works across three distinct data flows that other products miss.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-3"
        >
          {layers.map(({ icon: Icon, label, title, desc, color }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-colors hover:border-white/[0.15]"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: color.bg, boxShadow: `0 0 30px ${color.glow}` }}
              >
                <Icon className="h-5 w-5" style={{ color: color.text }} />
              </div>
              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: color.text }}>
                {label}
              </p>
              <p className="mt-1 text-[16px] font-semibold text-white">{title}</p>
              <p className="mt-2 text-[13px] font-medium leading-[1.6] text-white/45">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.2 }}
          className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-2 sm:gap-3"
        >
          {["Truth", "Context", "Session Summaries"].map((flow, i) => (
            <div key={flow} className="flex items-center gap-2 sm:gap-3">
              <span className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold text-white/50 sm:text-[12px]">
                {flow}
              </span>
              {i < 2 && <span className="text-white/20">+</span>}
            </div>
          ))}
          <ArrowRight className="mx-2 h-3.5 w-3.5 text-white/20" />
          <span className="rounded-lg bg-primary px-3 py-1.5 text-[11px] font-semibold text-white sm:text-[12px]">
            Entity 360
          </span>
        </motion.div>
      </div>
    </section>
  );
}
