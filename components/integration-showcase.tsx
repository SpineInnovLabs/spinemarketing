"use client";

import { motion } from "framer-motion";
import { Plug, RefreshCw, Globe, Zap, Database, Mail, FileText, type LucideIcon } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

type Tool = {
  icon: LucideIcon;
  name: string;
  desc: string;
  color: string;
  bg: string;
};

const defaultTools: Tool[] = [
  { icon: Globe, name: "Salesforce", desc: "CRM data, opportunities, contacts", color: "#3b82f6", bg: "rgba(59,130,246,0.12)" },
  { icon: Mail, name: "HubSpot", desc: "Marketing, deals, engagement data", color: "#f97316", bg: "rgba(249,115,22,0.12)" },
  { icon: Database, name: "Stripe", desc: "Billing, subscriptions, invoices", color: "#8b5cf6", bg: "rgba(139,92,246,0.12)" },
  { icon: Plug, name: "Zendesk", desc: "Tickets, support metrics, CSAT", color: "#10b981", bg: "rgba(16,185,129,0.12)" },
  { icon: Zap, name: "Slack", desc: "Messages, channels, alerts", color: "#e879f9", bg: "rgba(232,121,249,0.12)" },
  { icon: RefreshCw, name: "Jira", desc: "Projects, sprints, issue tracking", color: "#06b6d4", bg: "rgba(6,182,212,0.12)" },
  { icon: FileText, name: "Notion", desc: "Docs, wikis, knowledge bases", color: "#f59e0b", bg: "rgba(245,158,11,0.12)" },
  { icon: Globe, name: "Google Workspace", desc: "Email, calendar, drive files", color: "#ef4444", bg: "rgba(239,68,68,0.12)" },
];

export function IntegrationShowcase({
  tag = "Seamless Integrations",
  heading,
  tools = defaultTools,
}: {
  tag?: string;
  heading?: React.ReactNode;
  tools?: Tool[];
}) {
  return (
    <section className="arvio-section dark-section">
      <div className="mx-auto max-w-[1100px]">
        <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">{tag}</p>
          <h2 className="section-heading">
            {heading || <>Connect your tools. <span className="text-primary">Zero hassle.</span></>}
          </h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              {...fade(i * 0.05)}
              className="group rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 transition-all hover:border-white/[0.15] hover:-translate-y-0.5"
            >
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: t.bg }}
              >
                <t.icon className="h-5 w-5" style={{ color: t.color }} />
              </div>
              <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-white mb-1">{t.name}</h3>
              <p className="text-[12px] font-medium leading-[1.6] text-white/40">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
