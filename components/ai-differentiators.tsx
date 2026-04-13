"use client";

import { motion } from "framer-motion";
import { Database, MessageSquare, BookOpen, ArrowRight } from "lucide-react";

const layers = [
  {
    icon: Database,
    label: "Truth",
    title: "Your systems of record",
    desc: "CRM, billing, support, project tools, docs, email, chat — all connected, synced, and kept current.",
    color: "rgb(27,167,132)",
  },
  {
    icon: MessageSquare,
    label: "Context",
    title: "Live human context",
    desc: "Conversations, notes, meeting decisions, session context — captured as it happens.",
    color: "rgb(52,211,153)",
  },
  {
    icon: BookOpen,
    label: "Session Summaries",
    title: "What AI learned, governed by you",
    desc: "What AI learns during your conversations and analysis sessions. Session summaries pass through TruthLayer before they become knowledge. Nothing AI generates enters the Spine directly.",
    color: "rgb(110,231,183)",
  },
];

export function AIDifferentiators() {
  return (
    <section
      className="arvio-section"
      style={{ backgroundColor: "rgb(8, 7, 14)" }}
    >
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">
            The Spine
          </p>
          <h2 className="mt-3 text-[40px] font-semibold tracking-[-0.05em] leading-[1.15] text-white sm:text-[48px]">
            Three flows.{" "}
            <span className="text-primary">One complete picture.</span>
          </h2>
          <p className="mt-4 text-[15px] font-medium leading-[1.5] text-white/40">
            IntegrateWise works across three distinct data flows that other
            products miss.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
          {layers.map(({ icon: Icon, label, title, desc, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                type: "spring",
                bounce: 0.2,
                duration: 0.6,
              }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${color}20` }}
              >
                <Icon className="h-5 w-5" style={{ color }} />
              </div>
              <p
                className="mt-4 text-[11px] font-bold uppercase tracking-[0.15em]"
                style={{ color }}
              >
                {label}
              </p>
              <p className="mt-1 text-[16px] font-semibold text-white">
                {title}
              </p>
              <p className="mt-2 text-[13px] font-medium leading-[1.5] text-white/40">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.6,
            delay: 0.3,
          }}
          className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-2 sm:gap-3"
        >
          {["Truth", "Context", "Session Summaries"].map((flow, i) => (
            <div key={flow} className="flex items-center gap-2 sm:gap-3">
              <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold text-white/60 sm:text-[12px]">
                {flow}
              </span>
              {i < 2 && <span className="text-white/20">+</span>}
            </div>
          ))}
          <ArrowRight className="mx-2 h-3.5 w-3.5 text-white/20" />
          <span
            className="rounded-md px-3 py-1.5 text-[11px] font-semibold text-white sm:text-[12px]"
            style={{ background: "var(--gradient-primary)" }}
          >
            Entity 360
          </span>
        </motion.div>
      </div>
    </section>
  );
}
