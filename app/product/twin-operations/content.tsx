"use client";

import { motion } from "framer-motion";
import { Settings2, Mail, Database, FileText, GitBranch, BarChart3 } from "lucide-react";
import { Header } from "@/components/header-client";
import { Footer } from "@/components/footer";

const actionLibrary = [
  {
    icon: Mail, color: "text-blue-400", name: "Communication Actions",
    items: ["Email drafting with tone adjustment", "Slack message composition", "Meeting agenda generation"],
  },
  {
    icon: Database, color: "text-violet-400", name: "Data Update Actions",
    items: ["CRM field updates with rollback", "Health score adjustments with logging", "Opportunity stage progression"],
  },
  {
    icon: GitBranch, color: "text-purple-400", name: "Task Creation",
    items: ["Ticket creation with Spine context", "Auto-assignment by workload", "Due date recommendation"],
  },
  {
    icon: FileText, color: "text-amber-400", name: "Document Generation",
    items: ["QBR decks from Account 360", "Renewal proposals with analytics", "Executive briefs with KPIs"],
  },
];

const workflowExample = {
  trigger: "Opportunity Closed Won",
  sequence: [
    "Create onboarding project",
    "Notify CS team",
    "Generate invoice",
    "Schedule kickoff",
    "Update Health Score to 100",
  ],
};

const executionFeatures = [
  { title: "Action Queue Management", desc: "Prioritized list with due dates and impact scores." },
  { title: "One-Click Execution", desc: "Multi-system write-backs with real-time progress." },
  { title: "Smart Scheduling", desc: "Delay execution to optimal send times." },
  { title: "Conditional Logic", desc: "Branching sequences executed automatically on rules." },
];

const outcomeFeatures = [
  { icon: BarChart3, color: "text-emerald-400", title: "Action History", desc: "Immutable log of executed actions with status." },
  { icon: GitBranch, color: "text-cyan-400", title: "Feedback Loop", desc: "Thumbs up/down refines scoring over time." },
  { icon: Settings2, color: "text-blue-400", title: "Performance Metrics", desc: "Acceptance rates and outcome correlation." },
];

export function TwinOperationsContent() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
              <Settings2 className="w-4 h-4" />
              Twin Operations
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Action execution and<br />workflow management.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Twin Operations orchestrates every approved action across your connected systems.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-8">

          <div>
            <h2 className="text-sm font-bold mb-5 text-white/50 uppercase tracking-widest">Proposed Action Library</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {actionLibrary.map((a, i) => (
                <motion.div key={a.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <a.icon className={`w-4 h-4 ${a.color}`} />
                    </div>
                    <span className="font-semibold">{a.name}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {a.items.map((item) => (
                      <li key={item} className="text-white/50 text-sm flex items-start gap-2">
                        <span className="text-white/20 mt-1.5">—</span>{item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-lg font-bold mb-6">Workflow Orchestration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">Multi-Step Sequence Example</div>
                <div className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
                  <div className="text-xs text-white/40 mb-1">Trigger</div>
                  <div className="font-semibold text-sm mb-4 text-amber-400">"{workflowExample.trigger}"</div>
                  <div className="space-y-2">
                    {workflowExample.sequence.map((step, i) => (
                      <div key={step} className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-white/5 border border-white/10 text-xs flex items-center justify-center text-white/40 shrink-0">{i + 1}</span>
                        <span className="text-sm text-white/60">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {executionFeatures.map((f) => (
                  <div key={f.title} className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
                    <div className="font-semibold mb-1 text-sm">{f.title}</div>
                    <p className="text-white/50 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div>
            <h2 className="text-sm font-bold mb-5 text-white/50 uppercase tracking-widest">Outcome Tracking & Feedback</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {outcomeFeatures.map((o, i) => (
                <motion.div key={o.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <o.icon className={`w-5 h-5 ${o.color}`} />
                  </div>
                  <div className="font-semibold mb-2">{o.title}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{o.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
