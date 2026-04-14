"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Brain,
  LayoutDashboard,
  TrendingUp,
  Clock,
} from "lucide-react";

const defaultBenefits = [
  {
    icon: LayoutDashboard,
    title: "Unified Workspace",
    desc: "Every tool, every signal — one screen.",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    desc: "The Twin surfaces what matters most.",
  },
  {
    icon: Shield,
    title: "Governed by Design",
    desc: "Nothing executes without your approval.",
  },
  {
    icon: Zap,
    title: "Real-Time Sync",
    desc: "Sub-100ms data flow across all connectors.",
  },
  {
    icon: TrendingUp,
    title: "Compounding Knowledge",
    desc: "Every approved session makes the system smarter.",
  },
  {
    icon: Clock,
    title: "Time Reclaimed",
    desc: "Stop switching tabs. Start making decisions.",
  },
];

export function BenefitsGrid({
  benefits = defaultBenefits,
  heading = "Built to keep your team in sync.",
  tag = "Benefits",
}: {
  benefits?: typeof defaultBenefits;
  heading?: string;
  tag?: string;
}) {
  return (
    <section className="relative overflow-hidden py-32 md:py-40" style={{ background: "#05070A" }}>
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-[30%] bottom-[15%] h-[500px] w-[600px] rounded-full opacity-[0.06] blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(52,211,153,0.3), transparent 70%)" }}
        />
      </div>
      <div className="relative mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
            {tag}
          </p>
          <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[52px]">
            {heading}
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", damping: 18, stiffness: 70, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] p-6 transition-all hover:border-primary/20 hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.02)",
                backdropFilter: "blur(12px)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-[50px] transition-opacity group-hover:opacity-100" style={{ background: "rgba(52,211,153,0.12)" }} />

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/[0.08] transition-transform group-hover:scale-105" style={{ boxShadow: "0 0 30px rgba(52,211,153,0.08)" }}>
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-[17px] font-semibold tracking-[-0.03em] text-white">
                {title}
              </h3>
              <p className="mt-2 text-[14px] font-medium leading-[1.65] text-white/40">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
