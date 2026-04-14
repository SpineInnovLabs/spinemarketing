"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Brain,
  ShieldCheck,
  Activity,
  Sparkles,
  BarChart3,
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

function DashboardMockup() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]">
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.04] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/40" />
        <span className="ml-2 text-[11px] font-medium text-white/30">Workbench</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Active Accounts", value: "247", change: "+12%" },
            { label: "Health Score", value: "87", change: "+3.2" },
            { label: "Revenue at Risk", value: "$142K", change: "-8%" },
          ].map((m) => (
            <div key={m.label} className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-3">
              <div className="text-[10px] font-medium text-white/35">{m.label}</div>
              <div className="mt-1 text-[18px] font-bold tracking-tight text-white">{m.value}</div>
              <div className={`mt-0.5 text-[10px] font-semibold ${m.change.startsWith("+") ? "text-primary" : "text-red-400"}`}>
                {m.change}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-3">
          <div className="text-[10px] font-medium text-white/35 mb-2">Account Health Trend</div>
          <div className="flex items-end gap-1 h-12">
            {[40, 55, 45, 60, 52, 70, 65, 78, 72, 85, 80, 87].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm bg-primary/30"
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05, duration: 0.4, ease: "easeOut" }}
              />
            ))}
          </div>
        </div>
        <div className="space-y-1.5">
          {[
            { label: "Renewal review — TechScale", status: "Due today", color: "text-amber-400" },
            { label: "QBR prep — CloudFirst", status: "AI draft ready", color: "text-primary" },
            { label: "Escalation — FinanceFlow", status: "Needs approval", color: "text-red-400" },
          ].map((task) => (
            <div key={task.label} className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2">
              <span className="text-[11px] font-medium text-white/55">{task.label}</span>
              <span className={`text-[10px] font-bold ${task.color}`}>{task.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TwinMockup() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-primary/20 bg-primary/[0.04]">
      <div className="flex items-center gap-2 border-b border-primary/15 bg-primary/[0.06] px-4 py-2.5">
        <Sparkles className="h-3.5 w-3.5 text-primary" />
        <span className="text-[11px] font-semibold text-primary">Intelligence Layer — Twin</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="rounded-lg border border-primary/15 bg-primary/[0.06] p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-bold text-primary">Morning Brief</span>
          </div>
          <p className="text-[11px] leading-[1.6] text-white/55">
            3 accounts need attention. TechScale&apos;s usage dropped 23% this week. CloudFirst has an unsigned renewal.
          </p>
        </div>
        <div className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-3">
          <div className="text-[10px] font-bold text-white/40 mb-2">Proposed Actions</div>
          <div className="space-y-2">
            {[
              { action: "Send check-in to TechScale PM", confidence: 92 },
              { action: "Escalate CloudFirst renewal", confidence: 88 },
              { action: "Schedule QBR for FinanceFlow", confidence: 76 },
            ].map((a) => (
              <div key={a.action} className="flex items-center gap-2">
                <div className="flex-1 text-[11px] font-medium text-white/55">{a.action}</div>
                <div className="flex items-center gap-1.5">
                  <div className="h-1 w-8 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${a.confidence}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-primary">{a.confidence}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <span className="rounded-lg bg-primary px-3 py-1.5 text-[10px] font-bold text-white">Approve All</span>
          <span className="rounded-lg border border-white/[0.1] px-3 py-1.5 text-[10px] font-bold text-white/40">Review Each</span>
        </div>
      </div>
    </div>
  );
}

export function BentoShowcase({
  heading = "Everything in one screen.",
  subheading = "The Workbench shows. The Intelligence Layer thinks. You decide.",
  tag = "Product",
}: {
  heading?: string;
  subheading?: string;
  tag?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-dark-section py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[20%] top-[25%] h-[400px] w-[500px] rounded-full opacity-12 blur-[120px]" style={{ background: "radial-gradient(circle, rgba(52,211,153,0.2), transparent 70%)" }} />
        <div className="absolute right-[10%] bottom-[20%] h-[300px] w-[400px] rounded-full opacity-10 blur-[100px]" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)" }} />
      </div>
      <div className="relative mx-auto max-w-[1100px] px-6">
        <motion.div
          {...fade(0)}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">{tag}</p>
          <h2 className="text-[36px] font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-[44px]">
            {heading}
          </h2>
          <p className="mt-4 text-[15px] font-medium leading-[1.6] text-white/45">{subheading}</p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          <motion.div {...fade(0.1)}>
            <DashboardMockup />
          </motion.div>
          <motion.div {...fade(0.2)}>
            <TwinMockup />
          </motion.div>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          {[
            {
              icon: LayoutDashboard,
              title: "Unified View",
              desc: "All accounts, tasks, workflows in one workspace.",
              color: "rgba(45,212,191,0.12)",
              glow: "rgba(45,212,191,0.15)",
            },
            {
              icon: Activity,
              title: "Live Data Spine",
              desc: "Three data flows keep everything in sync.",
              color: "rgba(52,211,153,0.12)",
              glow: "rgba(52,211,153,0.15)",
            },
            {
              icon: ShieldCheck,
              title: "Full Governance",
              desc: "Immutable audit trail. Every action logged.",
              color: "rgba(251,191,36,0.12)",
              glow: "rgba(251,191,36,0.15)",
            },
          ].map(({ icon: Icon, title, desc, color, glow }, i) => (
            <motion.div
              key={title}
              {...fade(0.25 + i * 0.08)}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 transition-all hover:border-white/[0.15] hover:-translate-y-0.5"
            >
              <div
                className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: color, boxShadow: `0 0 20px ${glow}` }}
              >
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-[14px] font-semibold text-white">{title}</h3>
              <p className="mt-1.5 text-[13px] font-medium leading-[1.6] text-white/40">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
