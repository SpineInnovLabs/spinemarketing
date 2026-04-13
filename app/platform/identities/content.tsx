"use client";

import { motion } from "framer-motion";
import { FileText, MessageSquare, Brain, GitMerge, Database, ArrowRight } from "lucide-react";
import { Header } from "@/components/header-client";
import { Footer } from "@/components/footer";
import Link from "next/link";

const sections = [
  {
    icon: Database,
    accent: "rgba(59,130,246,0.12)",
    iconColor: "#3b82f6",
    label: "Structured",
    title: "Entity 360 — CRM, billing, support, usage",
    desc: "Every Salesforce record, Stripe invoice, Zendesk ticket, and usage metric normalized into a single canonical object. One schema regardless of how many tools you connect.",
    items: ["Account → Contacts → Deals → Tickets → Invoices", "Cross-tool canonical schema", "Automatic relation graphs"],
  },
  {
    icon: FileText,
    accent: "rgba(139,92,246,0.12)",
    iconColor: "#8b5cf6",
    label: "Unstructured",
    title: "Documents, threads, transcripts",
    desc: "PDFs, contracts, email bodies, Slack conversations, and meeting transcripts ingested as first-class identity data — parsed, linked to Spine entities, and structurally indexed.",
    items: ["MCP document ingestion", "Semantic NLP extraction", "Communication thread linking"],
  },
  {
    icon: MessageSquare,
    accent: "rgba(168,85,247,0.12)",
    iconColor: "#a855f7",
    label: "AI Chat",
    title: "Sessions grounded in Entity 360",
    desc: "Chat histories are not floating contexts. Every session links to real canonical records. Decisions and context extracted from conversations are routed through Flow C Triage before entering SpineVault.",
    items: ["Session-to-entity grounding", "Knowledge extraction pipeline", "Flow C Triage routing"],
  },
  {
    icon: GitMerge,
    accent: "rgba(245,158,11,0.12)",
    iconColor: "#f59e0b",
    label: "Resolution",
    title: "Cross-tool entity matching and dedup",
    desc: "\"John Smith\" in Salesforce = \"john@company.com\" in Stripe — resolved automatically with confidence scoring. Low-confidence matches surface for human review before entering the canonical record.",
    items: ["Multi-signal match scoring", "0–100 confidence index", "Manual resolution UI"],
  },
];

export function IdentitiesContent() {
  return (
    <div className="relative min-h-screen bg-[#08070e] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-1/3 w-[700px] h-[700px] rounded-full blur-[220px]" style={{ background: "rgba(139,92,246,0.07)" }} />
        <div className="absolute top-96 left-1/4 w-[500px] h-[500px] rounded-full blur-[180px]" style={{ background: "rgba(27,167,132,0.05)" }} />
      </div>

      <Header />

      <section className="relative pt-36 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/50 mb-8">
              <Brain className="w-3.5 h-3.5 text-primary" />
              <span>Identities</span>
            </div>
            <h1 className="text-[52px] md:text-[68px] font-bold leading-[1.05] tracking-tight mb-6">
              <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">Four identity types.</span>
              <br />
              <span className="text-primary">One canonical record.</span>
            </h1>
            <p className="text-xl text-white/55 max-w-2xl mx-auto leading-relaxed mb-10">
              Structured CRM data, unstructured documents, AI conversations, and cross-tool duplicates — all resolved into unified canonical identities your team can act on.
            </p>
            <Link
              href="/contact?intent=demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[15px] font-semibold text-white"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-button)" }}
            >
              See identities in action <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="group rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 hover:border-white/[0.15] transition-colors"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: s.accent, boxShadow: `0 0 30px ${s.accent}` }}
              >
                <s.icon className="w-6 h-6" style={{ color: s.iconColor }} />
              </div>
              <div className="mb-1">
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: s.iconColor }}>{s.label}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-white/55 leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/45">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">One record. Every tool.</h2>
            <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto">See how Identity Resolution eliminates duplicate records and cross-tool confusion across your stack.</p>
            <Link
              href="/contact?intent=demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-semibold text-white"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-button)" }}
            >
              Book a demo <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
