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
    tag: "Structured Data",
    title: "Connect Everything. Miss Nothing.",
    description: "CRMs, ERPs, billing systems, project management tools. We sync records, fields, and relationships bidirectionally in real-time.",
    icon: Database,
    color: "#ffb22c",
    features: [
      "Auto-deduplication across all connected tools",
      "Version history on every entity change",
      "Source attribution — know where data came from",
      "Schema normalization without manual mapping",
    ],
  },
  {
    tag: "Unstructured Data",
    title: "Context, Sentiment, and Key Decisions",
    description: "Slack threads, emails, support tickets, meeting notes. We extract context, sentiment, and key decisions from natural language.",
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
    tag: "AI Session Knowledge",
    title: "Every Twin Interaction is Indexed",
    description: "Questions asked, insights generated, and decisions made become part of the Digital Memory. The Spine compounds intelligence every day.",
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
    title: "Connect Your Entire Stack",
    description: "Pre-built integrations for the tools you already use. From CRMs to chat apps to accounting software — plug in and sync in minutes.",
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
    title: "Governance Boundaries",
    description: "The Adaptive Spine isn't just smart — it's safe. Every piece of data is governed by strict access controls, audit logs, and approval gates.",
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
  { icon: Database, label: "Structured Data", description: "CRMs, ERPs, billing systems synced bidirectionally.", color: "#ffb22c" },
  { icon: Activity, label: "Unstructured Data", description: "Slack, email, tickets — context and sentiment extracted.", color: "#8b5cf6" },
  { icon: Brain, label: "AI Session Knowledge", description: "Every Twin interaction indexed and persisted.", color: "#fbbf24" },
  { icon: Plug, label: "Connectors", description: "100+ tools connected via OAuth, MCP, or webhook.", color: "#3b82f6" },
  { icon: Shield, label: "Govern Gate", description: "Role-based access, audit trails, approval gates.", color: "#ef4444" },
  { icon: Lock, label: "Security", description: "SOC 2 Type II. GDPR Ready. HIPAA Compliant. Tenant Isolation.", color: "#f59e0b" },
  { icon: Eye, label: "Workspace", description: "Unified entity views, evidence-backed insights, approval-gated actions.", color: "#06b6d4" },
  { icon: Zap, label: "Cognitive Layer", description: "Observes, reasons, suggests — never acts without your approval.", color: "#a855f7" },
  { icon: Server, label: "Infrastructure", description: "Tenant isolation, field-level encryption, immutable audit logs.", color: "#ec4899" },
  { icon: GitBranch, label: "MCP Protocol", description: "AI-native bidirectional data flow.", color: "#14b8a6" },
  { icon: RefreshCw, label: "Cognitive Loop", description: "Ingest → Digital Memory → Twin Reasons → You Approve → Act.", color: "#f97316" },
  { icon: Layers, label: "Spine Fabric", description: "Adaptive architecture. Survives tool migrations. Memory persists.", color: "#6366f1" },
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
