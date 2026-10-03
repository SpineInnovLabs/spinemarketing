"use client";

import { StickyGather } from "@/components/sticky-gather";
import {
  LayoutDashboard,
  BarChart3,
  Bell,
  Mail,
  ShieldCheck,
  Sparkles,
  Clock,
  Users,
  Gauge,
} from "lucide-react";

const items = [
  { icon: LayoutDashboard, label: "Customer view", description: "Complete account view with cross-system timeline.", color: "#2dd4bf" },
  { icon: BarChart3, label: "Portfolio Health", description: "All accounts at a glance — health, risk, expansion.", color: "#3b82f6" },
  { icon: Bell, label: "Morning Brief", description: "Overnight changes ranked by business impact.", color: "#8b5cf6" },
  { icon: Mail, label: "Unified Inbox", description: "Email, Slack, calendar — one communication stream.", color: "#06b6d4" },
  { icon: ShieldCheck, label: "Approval Queue", description: "Review AI suggestions with evidence links.", color: "#fbbf24" },
  { icon: Sparkles, label: "Knowledge Base", description: "Compounding insights from every decision.", color: "#14b8a6" },
  { icon: Clock, label: "Activity Feed", description: "Every touchpoint threaded by entity.", color: "#f97316" },
  { icon: Users, label: "Team Views", description: "Role-based perspectives — CSM, Manager, Finance.", color: "#ec4899" },
  { icon: Gauge, label: "Health Scoring", description: "Multi-signal scoring with 90-day lookahead.", color: "#a855f7" },
];

export function WorkspaceGather() {
  return (
    <StickyGather
      tag="Workspace Modules"
      heading={<>Nine views. <span className="text-primary">One workspace.</span></>}
      subheading="Every module gathers into a single operating surface — no tab switching, no context loss."
      centerLabel="Workspace"
      centerDescription="Your daily surface"
      items={items}
    />
  );
}
