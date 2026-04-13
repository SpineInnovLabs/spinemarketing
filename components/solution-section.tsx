"use client";

import { Database, Brain, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { DashboardMockup } from "@/components/dashboard-mockup";

const pillars = [
  {
    num: "01",
    icon: Database,
    title: "Your Daily Workbench",
    description:
      "Accounts, tasks, workflows, renewals, approvals, calendar, and engagement logs — all in one place. This is where you work every day. It replaces the 12–15 tabs you keep open just to see the full story.",
    color: { bg: "rgba(45,212,191,0.12)", glow: "rgba(45,212,191,0.25)", text: "#2dd4bf" },
  },
  {
    num: "02",
    icon: Brain,
    title: "The Intelligence Layer",
    description:
      "AI reads your data through the Spine, spots patterns, and surfaces signals with evidence. Every recommendation is backed by evidence, and every action waits for explicit approval.",
    color: { bg: "rgba(139,92,246,0.12)", glow: "rgba(139,92,246,0.25)", text: "#8b5cf6" },
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Nothing happens without you",
    description:
      "Every insight has evidence from your apps. Every action waits for your approval. Approved actions write back to connected apps and are added to the Spine's memory.",
    color: { bg: "rgba(251,191,36,0.12)", glow: "rgba(251,191,36,0.25)", text: "#fbbf24" },
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

export function SolutionSection() {
  return (
    <section className="relative overflow-hidden py-24" style={{ backgroundColor: "rgb(8, 7, 14)" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[20%] top-[15%] h-[400px] w-[500px] rounded-full opacity-15 blur-[120px]" style={{ background: "radial-gradient(circle, rgba(45,212,191,0.2), transparent 70%)" }} />
        <div className="absolute right-[15%] bottom-[20%] h-[350px] w-[450px] rounded-full opacity-15 blur-[100px]" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)" }} />
      </div>
      <div className="relative mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">The workspace</p>
          <h2 className="text-[36px] font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-[44px]">
            Your workspace.{" "}
            <span className="text-primary">AI that thinks in context.</span>
          </h2>
          <p className="mt-5 text-[16px] font-medium leading-[1.6] text-white/45">
            Manage accounts, track tasks, and run workflows in one place. The Twin reads your data and proposes what&apos;s next — you decide what actually happens.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", damping: 18, stiffness: 60, delay: 0.15 }}
          className="mx-auto mt-12 max-w-[900px]"
        >
          <DashboardMockup />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.2 }}
          className="mt-16 text-center text-[20px] font-semibold tracking-[-0.04em] text-white"
        >
          Two layers.{" "}
          <span className="text-primary">One workspace.</span>
        </motion.p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-8 grid max-w-5xl gap-5 sm:grid-cols-3"
        >
          {pillars.map(({ num, icon: Icon, title, description, color }, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex flex-col items-start rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 transition-colors hover:border-white/[0.15]"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: color.bg, boxShadow: `0 0 24px ${color.glow}` }}
                >
                  <Icon className="h-5 w-5" style={{ color: color.text }} />
                </div>
                <span className="text-[12px] font-bold uppercase tracking-[0.15em]" style={{ color: color.text }}>
                  {num}
                </span>
              </div>
              <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.03em] leading-[1.3] text-white">
                {title}
              </h3>
              <p className="mt-3 text-[14px] font-medium leading-[1.6] tracking-[-0.02em] text-white/45">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.3 }}
          className="mx-auto mt-10 max-w-2xl text-center"
        >
          <p className="text-[15px] font-semibold tracking-[-0.02em] text-white/60">
            The workspace is the daily driver.{" "}
            <span className="text-primary">The Twin is the accelerator.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
