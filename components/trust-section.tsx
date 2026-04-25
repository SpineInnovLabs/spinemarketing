"use client";

import { Shield, CheckCircle2, XCircle, Eye, FileText, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { type: "spring", damping: 20, stiffness: 60 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function ApprovalMockup() {
  return (
    <motion.div
      variants={fadeUp}
      className="glass-card overflow-hidden max-w-lg mx-auto"
    >
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20">
            <Eye className="h-4 w-4 text-amber-400" />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-white">Twin Recommendation</p>
            <p className="text-[11px] text-white/30">Churn risk detected · 2 min ago</p>
          </div>
        </div>

        <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5 mb-5">
          <p className="text-[13px] font-medium text-white/60 leading-relaxed">
            &ldquo;Account <span className="text-white/80 font-semibold">Acme Corp</span> shows 40% usage drop + champion departed + 3 support tickets this week. Recommend escalation to VP with QBR deck.&rdquo;
          </p>
        </div>

        <div className="flex items-center gap-3 mb-5">
          <div className="flex items-center gap-2 rounded-lg bg-white/[0.03] border border-white/[0.06] px-3 py-2">
            <FileText className="h-3.5 w-3.5 text-white/30" />
            <span className="text-[11px] font-medium text-white/40">Evidence: 4 sources</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white/[0.03] border border-white/[0.06] px-3 py-2">
            <BarChart3 className="h-3.5 w-3.5 text-amber-400/60" />
            <span className="text-[11px] font-medium text-white/40">Confidence: 87%</span>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex-1 flex items-center justify-center gap-2 rounded-xl py-3 bg-[#ffb22c]/10 border border-[#ffb22c]/20 cursor-default">
            <CheckCircle2 className="h-4 w-4 text-[#ffb22c]" />
            <span className="text-[13px] font-semibold text-[#ffb22c]">Approve</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 rounded-xl py-3 bg-white/[0.03] border border-white/[0.08] cursor-default">
            <XCircle className="h-4 w-4 text-white/30" />
            <span className="text-[13px] font-semibold text-white/30">Reject</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FlowDiagram() {
  const steps = [
    { label: "AI Detects", icon: "🧠", color: "rgba(139,92,246,0.15)", borderColor: "rgba(139,92,246,0.25)" },
    { label: "Suggestion", icon: "💡", color: "rgba(251,191,36,0.15)", borderColor: "rgba(251,191,36,0.25)" },
    { label: "Human Reviews", icon: "👤", color: "rgba(255,178,44,0.15)", borderColor: "rgba(255,178,44,0.25)" },
    { label: "Execution", icon: "⚡", color: "rgba(255,178,44,0.15)", borderColor: "rgba(255,178,44,0.25)" },
  ];

  return (
    <motion.div
      variants={fadeUp}
      className="flex items-center justify-center gap-2 md:gap-4 flex-wrap"
    >
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center gap-2 md:gap-4">
          <div
            className="flex items-center gap-2 rounded-xl px-4 py-3 border"
            style={{ background: step.color, borderColor: step.borderColor }}
          >
            <span className="text-lg">{step.icon}</span>
            <span className="text-[12px] font-semibold text-white/60 whitespace-nowrap">{step.label}</span>
          </div>
          {i < steps.length - 1 && (
            <span className="text-white/15 text-lg">→</span>
          )}
        </div>
      ))}
    </motion.div>
  );
}

export function TrustSection() {
  return (
    <section className="relative overflow-hidden py-40 md:py-52" style={{ background: "#05070A" }}>
      <div className="absolute inset-0 bg-grain" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[20%] h-[600px] w-[700px] -translate-x-1/2 rounded-full opacity-15 blur-[200px]" style={{ background: "radial-gradient(circle, rgba(251,191,36,0.15), transparent 70%)" }} />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 20, stiffness: 60 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge variant="outline" className="mb-6 rounded-full border-amber-400/20 bg-amber-400/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-400/70 backdrop-blur-sm">
            Trust & Governance
          </Badge>
          <h2 className="section-heading text-white">
            AI that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">
              cannot act without you.
            </span>
          </h2>
          <p className="mt-6 text-[17px] font-medium leading-relaxed text-white/35">
            Every insight comes with evidence. Every action waits for your approval.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 md:mt-24"
        >
          <FlowDiagram />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 md:mt-20"
        >
          <ApprovalMockup />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-16 md:mt-20 grid gap-6 sm:grid-cols-3 max-w-3xl"
        >
          {[
            { icon: Shield, label: "Full audit trail", desc: "Every decision logged with timestamp and evidence" },
            { icon: Eye, label: "Confidence scores", desc: "See exactly how certain the AI is about each signal" },
            { icon: FileText, label: "Impact preview", desc: "Understand consequences before you approve" },
          ].map((item) => (
            <motion.div key={item.label} variants={fadeUp} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <item.icon className="h-5 w-5 text-amber-400/60" />
              </div>
              <p className="text-[14px] font-semibold text-white/70">{item.label}</p>
              <p className="mt-1 text-[12px] font-medium text-white/30">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
