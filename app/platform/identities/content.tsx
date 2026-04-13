"use client";

import { motion } from "framer-motion";
import { FileText, MessageSquare, Brain, GitMerge, Database } from "lucide-react";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

const sections = [
  {
    icon: Database,
    color: "text-blue-400",
    label: "Structured Identities",
    title: "Entity 360 — CRM, billing, support, usage",
    items: [
      { name: "Entity 360", desc: "CRM records, billing objects, support tickets, product usage metrics normalized into canonical objects." },
      { name: "Canonical Schema", desc: "Normalized fields across Salesforce, HubSpot, Stripe, Zendesk — one schema regardless of source." },
      { name: "Relation Graphs", desc: "Network mappings: Account → Contacts → Deals → Tickets → Invoices wired automatically." },
    ],
  },
  {
    icon: FileText,
    color: "text-violet-400",
    label: "Unstructured Identities",
    title: "Documents, threads, transcripts",
    items: [
      { name: "Document Context", desc: "PDFs, contracts, and proposals ingested via MCP or upload — parsed and linked to Spine entities." },
      { name: "Communication Threads", desc: "Email bodies, Slack conversations, and meeting transcripts processed as first-class identity data." },
      { name: "Semantic Extraction", desc: "NLP parsing extracts structured signals from unstructured text — e.g., renewal date from email body into Account entity." },
    ],
  },
  {
    icon: MessageSquare,
    color: "text-purple-400",
    label: "AI Chat Identities",
    title: "Sessions grounded in Entity 360",
    items: [
      { name: "Session Persistence", desc: "Chat histories are grounded in Entity 360 — not floating contexts. Every session links to real canonical records." },
      { name: "Session Summaries", desc: "Decisions and context extracted from human-AI interactions and routed through Flow C Triage before entering SpineVault." },
      { name: "Knowledge Extraction", desc: "Structured insights derived from conversational context, persisted as durable knowledge tied to canonical entities." },
    ],
  },
  {
    icon: GitMerge,
    color: "text-amber-400",
    label: "Identity Resolution",
    title: "Cross-tool entity matching and dedup",
    items: [
      { name: "Cross-Tool Matching", desc: "\"John Smith\" in Salesforce = \"john@company.com\" in Stripe — resolved automatically using multi-signal matching." },
      { name: "Confidence Scoring", desc: "Every proposed merge carries a 0-100 confidence score built from field overlap, domain signals, and historical accuracy." },
      { name: "Manual Resolution", desc: "Low-confidence matches surface in the resolution interface for human review before entering the canonical record." },
    ],
  },
];

export function IdentitiesContent() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
              <Brain className="w-4 h-4" />
              Identities
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Structured. Unstructured.<br />AI Chats.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Every piece of organizational knowledge — CRM records, documents, email threads, meeting transcripts, and AI conversations — resolved into unified canonical identities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {sections.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="flex items-center gap-3 mb-2">
                <s.icon className={`w-5 h-5 ${s.color}`} />
                <span className={`text-xs font-semibold uppercase tracking-widest ${s.color}`}>{s.label}</span>
              </div>
              <h2 className="text-xl font-bold mb-6">{s.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {s.items.map((item) => (
                  <div key={item.name} className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
                    <div className="font-semibold mb-2 text-sm">{item.name}</div>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
