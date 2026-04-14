"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const personas = [
  {
    icon: Users,
    role: "Account Success",
    signal: "Churn detection",
    description: "Usage dropped 40% + champion left + ticket spike → Twin score: 87 Critical. Escalate to VP with QBR deck.",
    impact: "90-day early warning vs. renewal-day surprise",
    color: { text: "#ef4444", bg: "rgba(239,68,68,0.06)", border: "rgba(239,68,68,0.12)" },
  },
  {
    icon: TrendingUp,
    role: "RevOps",
    signal: "Pipeline clarity",
    description: "Deal unchanged 21 days + no activity + quarter ending → Twin score: 55 Watch. Verify deal, update forecast.",
    impact: "Pipeline accuracy improved by removing stale deals",
    color: { text: "#8b5cf6", bg: "rgba(139,92,246,0.06)", border: "rgba(139,92,246,0.12)" },
  },
  {
    icon: Eye,
    role: "BizOps",
    signal: "System-wide visibility",
    description: "Monday morning — 12 accounts changed status + 3 renewals this week → Automated brief with prioritized actions.",
    impact: "Executives prepared in 2 min vs. 45-min spreadsheet review",
    color: { text: "#3b82f6", bg: "rgba(59,130,246,0.06)", border: "rgba(59,130,246,0.12)" },
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { type: "spring", damping: 20, stiffness: 60 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export function UseCasesSection() {
  return (
    <section className="relative overflow-hidden py-40 md:py-52" style={{ background: "#05070A" }}>
      <div className="absolute inset-0 bg-grain" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[30%] right-[20%] w-[600px] h-[600px] rounded-full blur-[220px]" style={{ background: "rgba(27,167,132,0.04)" }} />
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
            Use Cases
          </Badge>
          <h2 className="section-heading text-white">
            Real signals.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300 text-glow-emerald">
              Real actions.
            </span>
          </h2>
          <p className="mt-6 text-[17px] font-medium leading-relaxed text-white/35">
            The Twin detects cross-system patterns and proposes actions. You approve.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-20 md:mt-28 grid gap-6 sm:grid-cols-3 max-w-5xl"
        >
          {personas.map(({ icon: Icon, role, signal, description, impact, color }) => (
            <motion.div key={role} variants={fadeUp}>
              <div className="glass-card group h-full p-7 md:p-8" style={{ borderColor: color.border }}>
                <div className="relative">
                  <div
                    className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      background: color.bg,
                      border: `1px solid ${color.border}`,
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: color.text }} />
                  </div>

                  <div className="mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: color.text }}>
                      {role}
                    </span>
                  </div>

                  <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-white mb-3">
                    {signal}
                  </h3>

                  <p className="text-[13px] font-medium leading-[1.7] text-white/40 mb-5">
                    {description}
                  </p>

                  <div className="rounded-lg bg-primary/[0.04] border border-primary/10 px-3 py-2">
                    <p className="text-[11px] font-semibold text-primary/70">{impact}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
