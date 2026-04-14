"use client";

import { StickyScroll } from "@/components/sticky-scroll";
import {
  Brain,
  Bell,
  AlertTriangle,
  TrendingUp,
  Mail,
} from "lucide-react";

const items = [
  {
    tag: "Morning Brief",
    title: "Start every day with a ranked action list",
    description: "Overnight changes across your portfolio — health shifts, renewal risks, expansion signals — all evidence-linked and prioritized by impact.",
    icon: Bell,
    color: "#8b5cf6",
    features: [
      "Priority-ranked overnight changes across all accounts",
      "Health score shifts with root cause attribution",
      "Renewal countdown with days-to-action urgency",
      "One-click drill-down into any flagged account",
    ],
  },
  {
    tag: "Signal Detection",
    title: "Cross-system patterns surfaced before you ask",
    description: "Usage drops combined with support spikes and champion departures. The Twin detects compound signals humans would miss.",
    icon: AlertTriangle,
    color: "#ef4444",
    features: [
      "Multi-source signal correlation (CRM + product + support)",
      "Twin confidence scoring on every detected pattern",
      "90-day churn early warning from behavioral signals",
      "Competitive mentions tracked across support threads",
    ],
  },
  {
    tag: "Expansion Intelligence",
    title: "Growth signals ranked by conversion probability",
    description: "Usage near capacity, early invoice payments, new stakeholders joining — expansion readiness scored and surfaced proactively.",
    icon: TrendingUp,
    color: "#2dd4bf",
    features: [
      "Usage-based expansion readiness scoring",
      "Payment behavior correlation with growth signals",
      "Stakeholder mapping with decision-maker tracking",
      "Cross-sell timing based on similar customer patterns",
    ],
  },
  {
    tag: "Session Intelligence",
    title: "Ask anything. AI answers from real data.",
    description: "Session continuity means the Twin remembers context across conversations. Every answer traces back to source data.",
    icon: Brain,
    color: "#fbbf24",
    features: [
      "Natural language queries against live operational data",
      "Source attribution on every AI response",
      "Cross-session memory — pick up where you left off",
      "Conversation summaries auto-linked to entities",
    ],
  },
  {
    tag: "Action Drafting",
    title: "AI-drafted emails, tasks, and escalations",
    description: "Every proposed action comes with evidence, confidence scores, and a draft ready for your review.",
    icon: Mail,
    color: "#3b82f6",
    features: [
      "Context-aware email drafts with relationship tone",
      "Escalation proposals with impact assessment",
      "Task creation with priority and assignee suggestion",
      "Bulk action review for portfolio-wide signals",
    ],
  },
];

export function IntelligenceStickyScroll() {
  return (
    <StickyScroll
      tag="Cognitive Layer"
      heading={<>Five capabilities. <span className="text-primary">One thinking layer.</span></>}
      subheading="Scroll to explore how the Cognitive Layer detects, reasons, and proposes."
      items={items}
    />
  );
}
