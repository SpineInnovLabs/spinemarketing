"use client";

import { LayoutGrid, Sparkles, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const layers = [
  {
    icon: LayoutGrid,
    label: "Knowledge Workspace",
    title: "Your daily operating surface",
    description: "Domain-specific views — accounts, tasks, workflows, calendar — all in one unified interface. No more tab-switching. No more copy-paste.",
    features: ["Account 360 views", "Task orchestration", "Calendar & workflows", "Cross-tool search"],
    color: { text: "#34d399", bg: "rgba(52,211,153,0.06)", border: "rgba(52,211,153,0.12)", glow: "rgba(52,211,153,0.08)" },
  },
  {
    icon: Sparkles,
    label: "Cognitive Overlay — Digital Twin",
    title: "AI that detects, doesn't execute",
    description: "The Twin sees patterns across every connected system. It detects risks, generates insights, and recommends actions — but never acts without your approval.",
    features: ["Cross-system pattern detection", "Risk scoring with evidence", "Action recommendations", "Human-in-the-loop always"],
    color: { text: "#8b5cf6", bg: "rgba(139,92,246,0.06)", border: "rgba(139,92,246,0.12)", glow: "rgba(139,92,246,0.08)" },
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { type: "spring", damping: 20, stiffness: 60 } },
};

export function SolutionSection() {
  return (
    <section className="relative overflow-hidden py-40 md:py-52" style={{ background: "#05070A" }}>
      <div className="absolute inset-0 bg-grain" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[20%] top-[10%] h-[500px] w-[600px] rounded-full opacity-15 blur-[180px]" style={{ background: "radial-gradient(circle, rgba(52,211,153,0.2), transparent 70%)" }} />
        <div className="absolute right-[10%] top-[50%] h-[450px] w-[550px] rounded-full opacity-10 blur-[160px]" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)" }} />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 20, stiffness: 60 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge variant="outline" className="mb-6 rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-sm">
            The Solution
          </Badge>
          <h2 className="section-heading text-white">
            Two layers.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300 text-glow-emerald">
              One workspace.
            </span>
          </h2>
          <p className="mt-6 text-[17px] font-medium leading-relaxed text-white/35">
            Your daily surface. The Twin proposes — you decide.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-20 md:mt-28 grid gap-8 md:grid-cols-2 max-w-5xl"
        >
          {layers.map(({ icon: Icon, label, title, description, features, color }) => (
            <motion.div key={label} variants={fadeUp}>
              <div
                className="glass-card group h-full p-8 md:p-10"
                style={{ borderColor: color.border }}
              >
                <div
                  className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-100"
                  style={{ background: color.glow }}
                />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{
                        background: color.bg,
                        border: `1px solid ${color.border}`,
                        boxShadow: `0 0 20px ${color.glow}`,
                      }}
                    >
                      <Icon className="h-5 w-5" style={{ color: color.text }} />
                    </div>
                    <span
                      className="text-[11px] font-bold uppercase tracking-[0.1em]"
                      style={{ color: color.text }}
                    >
                      {label}
                    </span>
                  </div>

                  <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-white leading-[1.2] mb-4">
                    {title}
                  </h3>

                  <p className="text-[15px] font-medium leading-[1.7] text-white/40 mb-8">
                    {description}
                  </p>

                  <div className="space-y-3">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="h-1 w-1 rounded-full" style={{ background: color.text, opacity: 0.6 }} />
                        <span className="text-[13px] font-medium text-white/35">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 20, stiffness: 60, delay: 0.3 }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-[15px] font-medium text-white/30">
            The workspace is the daily driver.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400">The Twin is the accelerator.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
