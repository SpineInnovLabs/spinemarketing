"use client";

import { motion } from "framer-motion";
import { BookOpen, FileText, MessageSquare, Layers, Search, RefreshCw, Lock } from "lucide-react";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

const pillars = [
  {
    icon: FileText,
    title: "Structured Records",
    desc: "Every CRM record, ERP entry, and database row is indexed into the Knowledge Base as a canonical entity — queryable, relatable, and freshness-tracked.",
    tags: ["CRM records", "ERP data", "Database rows", "Canonical indexing"],
  },
  {
    icon: FileText,
    title: "Unstructured Documents",
    desc: "PDFs, emails, contracts, meeting notes, and uploaded files are parsed, chunked, and embedded alongside structured records — fully linked to the entities they reference.",
    tags: ["PDFs & contracts", "Emails", "Meeting notes", "Semantic embedding"],
  },
  {
    icon: MessageSquare,
    title: "AI Chat Sessions",
    desc: "Every AI conversation generates knowledge — summaries, decisions, extracted entities. These are persisted to the Knowledge Base and linked to their relevant accounts, deals, and contacts.",
    tags: ["Session summaries", "Decision capture", "Entity extraction", "Persistent context"],
  },
  {
    icon: Search,
    title: "Unified Search",
    desc: "A single search surface spans all knowledge types. Structured fields, document excerpts, and conversation context appear together — ranked by relevance, recency, and entity relationship.",
    tags: ["Cross-type search", "Relevance ranking", "Entity-linked results", "Temporal filters"],
  },
  {
    icon: RefreshCw,
    title: "Continuous Freshness",
    desc: "The Knowledge Base is never static. Every new event, sync, or AI interaction updates the relevant records automatically — so search results always reflect the current state of your data.",
    tags: ["Event-driven updates", "Freshness indicators", "Auto-sync", "Staleness detection"],
  },
  {
    icon: Lock,
    title: "Governed Access",
    desc: "Knowledge visibility is scoped by role and entity ownership. Sensitive documents, restricted accounts, and confidential AI sessions are firewalled at the Knowledge Base layer.",
    tags: ["Role-based access", "Entity ownership", "Firewall controls", "Audit logging"],
  },
];

export function KnowledgeBaseContent() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
              <BookOpen className="w-4 h-4" />
              Knowledge Base
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              One place for everything<br />your workspace knows.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              The Knowledge Base unifies structured records, unstructured documents, and AI session outputs into a single, searchable, always-fresh intelligence layer.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-white/20 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                  <p.icon className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/40">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
