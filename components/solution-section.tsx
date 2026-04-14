"use client";

import { Database, Brain, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { DashboardMockup } from "@/components/dashboard-mockup";
import { Badge } from "@/components/ui/badge";

const pillars = [
  {
    num: "01",
    icon: Database,
    title: "Your Daily Workbench",
    label: "L1",
    description:
      "Accounts, tasks, workflows, renewals, approvals, calendar, and engagement logs — all in one place. This is where you work every day.",
    color: { bg: "rgba(52,211,153,0.10)", glow: "rgba(52,211,153,0.35)", text: "#34d399", border: "rgba(52,211,153,0.20)", gradFrom: "#34d399", gradTo: "#059669" },
  },
  {
    num: "02",
    icon: Brain,
    title: "The Intelligence Layer",
    label: "L2",
    description:
      "AI reads your data through the Spine, spots patterns, and surfaces signals with evidence. Every action waits for explicit approval.",
    color: { bg: "rgba(139,92,246,0.10)", glow: "rgba(139,92,246,0.35)", text: "#8b5cf6", border: "rgba(139,92,246,0.20)", gradFrom: "#8b5cf6", gradTo: "#6d28d9" },
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Nothing happens without you",
    label: "HITL",
    description:
      "Every insight has evidence. Every action waits for your approval. Approved actions write back to connected apps and are added to the Spine\u2019s memory.",
    color: { bg: "rgba(251,191,36,0.10)", glow: "rgba(251,191,36,0.35)", text: "#fbbf24", border: "rgba(251,191,36,0.20)", gradFrom: "#fbbf24", gradTo: "#d97706" },
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
    <section className="relative overflow-hidden bg-dark-section py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[20%] top-[10%] h-[500px] w-[600px] rounded-full opacity-20 blur-[150px]" style={{ background: "radial-gradient(circle, rgba(52,211,153,0.25), transparent 70%)" }} />
        <div className="absolute right-[10%] top-[50%] h-[450px] w-[550px] rounded-full opacity-15 blur-[130px]" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.20), transparent 70%)" }} />
        <div className="absolute left-[40%] bottom-[5%] h-[300px] w-[400px] rounded-full opacity-10 blur-[100px]" style={{ background: "radial-gradient(circle, rgba(251,191,36,0.15), transparent 70%)" }} />
      </div>
      <div className="relative mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge variant="outline" className="mb-4 rounded-full border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-sm">
            The workspace
          </Badge>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Your workspace.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">AI that thinks in context.</span>
          </h2>
          <p className="mt-6 text-base font-medium leading-relaxed text-white/50">
            Manage accounts, track tasks, and run workflows in one place. The Twin reads your data and proposes what&apos;s next — you decide what actually happens.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", damping: 18, stiffness: 60, delay: 0.15 }}
          className="mx-auto mt-16 md:mt-20 max-w-[900px] rounded-2xl border border-white/[0.08] bg-white/[0.02] p-1.5 shadow-[0_20px_80px_rgba(0,0,0,0.5),0_0_60px_rgba(27,167,132,0.08)]"
        >
          <DashboardMockup />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.2 }}
          className="mt-20 md:mt-24 text-center text-xl font-semibold tracking-tight text-white"
        >
          Two layers.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">One workspace.</span>
        </motion.p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-3"
        >
          {pillars.map(({ num, icon: Icon, title, label, description, color }, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div
                className="group relative h-full rounded-2xl p-[1px] transition-all duration-500 hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${color.border}, transparent 40%, transparent 60%, ${color.border})`,
                }}
              >
                <div className="relative h-full overflow-hidden rounded-2xl bg-[#0c0b14] p-6">
                  <div
                    className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-30 blur-[60px] transition-opacity duration-500 group-hover:opacity-50"
                    style={{ background: color.glow }}
                  />
                  <div className="relative flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl shadow-lg"
                        style={{ background: `linear-gradient(135deg, ${color.gradFrom}20, ${color.gradTo}10)`, boxShadow: `0 0 24px ${color.glow}, inset 0 0 12px ${color.bg}` }}
                      >
                        <Icon className="h-5 w-5" style={{ color: color.text }} />
                      </div>
                      <Badge variant="outline" className="rounded-full text-[11px] font-bold backdrop-blur-sm" style={{ borderColor: `${color.text}40`, color: color.text, background: `${color.text}08` }}>
                        {label}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-white">
                      {title}
                    </h3>
                    <p className="text-sm font-medium leading-relaxed text-white/50">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
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
          <p className="text-sm font-semibold text-white/60">
            The workspace is the daily driver.{" "}
            <span className="text-primary">The Twin is the accelerator.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.35 }}
          className="mx-auto mt-16 grid max-w-5xl gap-4 sm:grid-cols-3"
        >
          {[
            { href: "/account-success", label: "Account Success", desc: "For CS & Account teams" },
            { href: "/business-ops", label: "Business Ops", desc: "For Operations leaders" },
            { href: "/personal-ops", label: "Personal Ops", desc: "For individuals" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.04] px-6 py-5 transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(27,167,132,0.08)]"
            >
              <div>
                <div className="text-[15px] font-semibold tracking-[-0.02em] text-white">
                  {link.label}
                </div>
                <div className="text-[13px] text-white/40">{link.desc}</div>
              </div>
              <ArrowRight className="h-4 w-4 text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
