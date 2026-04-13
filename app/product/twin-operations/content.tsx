"use client";

import { motion } from "framer-motion";
import { Settings2, Mail, Database, FileText, GitBranch, BarChart3 } from "lucide-react";
import { Header } from "@/components/header-client";
import { Footer } from "@/components/footer";

const actionLibrary = [
  {
    icon: Mail, color: "text-blue-400", name: "Communication Actions",
    items: ["Email drafting (Gmail/Outlook) with tone adjustment — formal or casual", "Slack message composition with channel selection", "Meeting agenda generation from Entity 360 context"],
  },
  {
    icon: Database, color: "text-violet-400", name: "Data Update Actions",
    items: ["CRM field updates (Salesforce, HubSpot) with rollback", "Health score adjustments with justification logging", "Opportunity stage progression with required field validation"],
  },
  {
    icon: GitBranch, color: "text-purple-400", name: "Task Creation",
    items: ["Asana/Jira/Zendesk ticket creation with pre-populated Spine context", "Auto-assignment based on workload and expertise matching", "Due date recommendation from related milestone velocity"],
  },
  {
    icon: FileText, color: "text-amber-400", name: "Document Generation",
    items: ["QBR decks from Account 360 data", "Renewal proposals with usage analytics", "Executive briefs with cross-system KPIs"],
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
  { title: "Action Queue Management", desc: "Prioritized list with due dates, impact scores, and estimated execution time." },
  { title: "One-Click Execution", desc: "Post-approval, a single trigger fires multi-system write-backs with real-time progress indicators." },
  { title: "Smart Scheduling", desc: "Delay execution to optimal times — \"Send email Tuesday 9 AM when open rates are highest\"." },
  { title: "Conditional Logic", desc: "\"If health score < 50, then escalate to VP AND draft save play\" — branching sequences executed automatically." },
];

const outcomeFeatures = [
  { icon: BarChart3, color: "text-emerald-400", title: "Action History", desc: "Complete immutable log of executed actions with success/failure status. Every write is traceable to the approving user and originating Spine data." },
  { icon: GitBranch, color: "text-cyan-400", title: "Feedback Loop", desc: "Thumbs up/down on outcomes feeds the Adjust stage of the Execution Path — refining confidence scoring and suggestion quality over time." },
  { icon: Settings2, color: "text-blue-400", title: "Performance Metrics", desc: "Action acceptance rates, average time-to-approval, and outcome success correlation across all action types and users." },
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
              From email drafts to CRM updates, QBR decks to multi-step onboarding sequences — Twin Operations orchestrates every approved action across your connected systems.
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
