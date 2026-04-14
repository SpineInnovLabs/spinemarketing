"use client";

import { StickyScroll } from "@/components/sticky-scroll";
import { StickyGather } from "@/components/sticky-gather";
import {
  Database,
  RefreshCw,
  Brain,
  Shield,
  Plug,
  Activity,
  Lock,
  Zap,
  GitBranch,
  Server,
  Eye,
  Layers,
} from "lucide-react";

const scrollItems = [
  {
    tag: "Canonical Data",
    title: "One truth from many sources",
    description: "Accounts, contacts, deals, tickets, invoices — normalized, deduplicated, versioned. Every record links back to its origin.",
    icon: Database,
    color: "#2dd4bf",
    features: [
      "Auto-deduplication across all connected tools",
      "Version history on every entity change",
      "Source attribution — know where data came from",
      "Schema normalization without manual mapping",
    ],
  },
  {
    tag: "Contextual Signals",
    title: "Patterns humans miss, surfaced automatically",
    description: "Behavioral traces, engagement deltas, billing anomalies, support sentiment — assembled into actionable context.",
    icon: Activity,
    color: "#8b5cf6",
    features: [
      "Cross-system pattern detection in real-time",
      "Engagement scoring from email + product + support",
      "Revenue anomaly alerts before invoice overdue",
      "Sentiment drift tracking across support threads",
    ],
  },
  {
    tag: "AI Sessions",
    title: "Every interaction becomes knowledge",
    description: "Conversations auto-summarized, linked to entities, persisted. The Spine compounds intelligence every day.",
    icon: Brain,
    color: "#fbbf24",
    features: [
      "Auto-summarized meeting notes and email threads",
      "Entity-linked — every insight ties to an account",
      "No retraining required — knowledge is append-only",
      "Session continuity across team members",
    ],
  },
  {
    tag: "Connectors",
    title: "Universal data inputs — SaaS, MCP, webhooks",
    description: "70+ integrations. OAuth connect in minutes. Auto-upgrade when APIs change. Your tools stay where they are.",
    icon: Plug,
    color: "#3b82f6",
    features: [
      "SaaS connectors — Salesforce, HubSpot, Stripe, Zendesk",
      "MCP protocol — AI-native bidirectional data flow",
      "Webhook ingestion with automatic schema detection",
      "Auto-upgrade when upstream APIs change version",
    ],
  },
  {
    tag: "Governance",
    title: "Hard-coded human approval. Immutable audit.",
    description: "Every action requires approval. Every decision logged. SOC 2 Type II. AES-256 encryption at rest and in transit.",
    icon: Shield,
    color: "#ef4444",
    features: [
      "Non-bypassable Govern Gate on all AI actions",
      "Full audit trail — who approved what, when",
      "Role-based routing: CSM, Manager, or Finance",
      "Automatic rollback within 24 hours of any action",
    ],
  },
];

const gatherItems = [
  { icon: Database, label: "Truth Layer", description: "Canonical records — normalized, versioned, deduplicated.", color: "#2dd4bf" },
  { icon: Activity, label: "Context Layer", description: "Behavioral patterns and risk signals assembled automatically.", color: "#8b5cf6" },
  { icon: Brain, label: "AI Sessions", description: "Compounding knowledge from every interaction.", color: "#fbbf24" },
  { icon: Plug, label: "Connectors", description: "70+ tools connected via OAuth, MCP, or webhook.", color: "#3b82f6" },
  { icon: Shield, label: "Govern Gate", description: "Non-bypassable human approval on all actions.", color: "#ef4444" },
  { icon: Lock, label: "TruthBoundary", description: "SOC 2 Type II. AES-256. Immutable audit log.", color: "#f59e0b" },
  { icon: Eye, label: "Workbench", description: "Entity 360s, tasks, workflows — your daily surface.", color: "#06b6d4" },
  { icon: Zap, label: "Intelligence Layer", description: "AI suggests with evidence. You approve what executes.", color: "#a855f7" },
  { icon: Server, label: "Infrastructure", description: "Firebase real-time. Sub-100ms sync.", color: "#ec4899" },
  { icon: GitBranch, label: "MCP Protocol", description: "AI-native integration. Bidirectional data flow.", color: "#14b8a6" },
  { icon: RefreshCw, label: "Canonical Loop", description: "Truth → Context → AI → Entity 360 → Repeat.", color: "#f97316" },
  { icon: Layers, label: "Spine Fabric", description: "Adaptive architecture. Survives tool migrations.", color: "#6366f1" },
];

export function PlatformStickyScroll() {
  return (
    <>
      <StickyScroll
        tag="Deep Dive"
        heading={<>Five layers of the <span className="text-primary">Adaptive Spine.</span></>}
        subheading="Scroll to explore each layer of the architecture that adapts to your tools."
        items={scrollItems}
      />

      <div className="section-divider" />

      <StickyGather
        tag="How It Assembles"
        heading={<>Scattered tools. <span className="text-primary">One unified architecture.</span></>}
        subheading="Every component converges into the Spine — your single source of operational truth."
        centerLabel="The Spine"
        centerDescription="Adaptive core"
        items={gatherItems}
      />
    </>
  );
}
