"use client";

import { Database, Brain, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { DashboardMockup } from "@/components/dashboard-mockup";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pillars = [
  {
    num: "01",
    icon: Database,
    title: "Your Daily Workbench",
    label: "L1",
    description:
      "Accounts, tasks, workflows, renewals, approvals, calendar, and engagement logs — all in one place. This is where you work every day. It replaces the 12–15 tabs you keep open just to see the full story.",
    color: { bg: "rgba(52,211,153,0.12)", glow: "rgba(52,211,153,0.25)", text: "#34d399" },
  },
  {
    num: "02",
    icon: Brain,
    title: "The Intelligence Layer",
    label: "L2",
    description:
      "AI reads your data through the Spine, spots patterns, and surfaces signals with evidence. Every recommendation is backed by evidence, and every action waits for explicit approval.",
    color: { bg: "rgba(139,92,246,0.12)", glow: "rgba(139,92,246,0.25)", text: "#8b5cf6" },
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Nothing happens without you",
    label: "HITL",
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
    <section className="relative overflow-hidden bg-dark-section py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[20%] top-[15%] h-[400px] w-[500px] rounded-full opacity-15 blur-[120px]" style={{ background: "radial-gradient(circle, rgba(52,211,153,0.2), transparent 70%)" }} />
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
          <Badge variant="outline" className="mb-4 rounded-full border-primary/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            The workspace
          </Badge>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Your workspace.{" "}
            <span className="text-primary">AI that thinks in context.</span>
          </h2>
          <p className="mt-6 text-base font-medium leading-relaxed text-white/45">
            Manage accounts, track tasks, and run workflows in one place. The Twin reads your data and proposes what&apos;s next — you decide what actually happens.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", damping: 18, stiffness: 60, delay: 0.15 }}
          className="mx-auto mt-16 md:mt-20 max-w-[900px]"
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
          <span className="text-primary">One workspace.</span>
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
              <Card className="flex h-full flex-col items-start border-border bg-white/[0.03] transition-colors hover:border-white/[0.15]">
                <CardContent className="flex flex-col items-start gap-4 pt-2">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: color.bg, boxShadow: `0 0 24px ${color.glow}` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: color.text }} />
                    </div>
                    <Badge variant="outline" className="rounded-full text-[11px]" style={{ borderColor: `${color.text}40`, color: color.text }}>
                      {label}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {title}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-white/45">
                    {description}
                  </p>
                </CardContent>
              </Card>
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
      </div>
    </section>
  );
}
