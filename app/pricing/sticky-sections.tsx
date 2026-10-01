"use client";

import { StickyScroll } from "@/components/sticky-scroll";
import { StickyGather } from "@/components/sticky-gather";
import {
  Zap,
  TrendingUp,
  Shield,
  Users,
  Database,
  Brain,
  Eye,
  Layers,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

const valueItems = [
  {
    tag: "Start simple",
    title: "See everything in one place from day one.",
    description: "Connect your apps, get the Workspace, and see every customer as an Entity 360 — unified across all your tools.",
    icon: Zap,
    color: "#0176D3",
    features: ["Unlimited connectors", "Entity 360 views", "Workspace access"],
  },
  {
    tag: "Add intelligence",
    title: "Let The Twin surface what you're missing.",
    description: "The Twin monitors cross-system signals and proposes actions — with evidence. You approve everything.",
    icon: Brain,
    color: "#8b5cf6",
    features: ["Twin signal detection", "Evidence-backed proposals", "Governed approval queue"],
  },
  {
    tag: "Scale governance",
    title: "Enterprise controls for regulated teams.",
    description: "Tiered approvals, department isolation, custom SLA engines, and full audit trails. Your compliance team will love it.",
    icon: Shield,
    color: "#f59e0b",
    features: ["Role-based access", "Audit trail exports", "SOC 2 aligned"],
  },
  {
    tag: "No per-seat lock-in",
    title: "Base fee + usage. Not per-seat pricing.",
    description: "Every tier includes unlimited users. You pay for the intelligence and governance — not for headcount.",
    icon: Users,
    color: "#3b82f6",
    features: ["Unlimited users", "Predictable costs", "No hidden fees"],
  },
];

const includedNodes = [
  { label: "Spine Fabric", icon: Database, color: "#0176D3", description: "Canonical data fabric layer" },
  { label: "Workspace", icon: Layers, color: "#3b82f6", description: "Daily operating surface" },
  { label: "Entity 360", icon: Eye, color: "#06b6d4", description: "Unified entity views" },
  { label: "The Twin", icon: Brain, color: "#8b5cf6", description: "AI-powered insights" },
  { label: "Govern Gate", icon: ShieldCheck, color: "#f59e0b", description: "Human-in-the-loop approval" },
  { label: "Analytics", icon: BarChart3, color: "#ef4444", description: "Cross-system reporting" },
];

export function PricingValueScroll() {
  return (
    <StickyScroll
      tag="How Pricing Works"
      heading="Every tier unlocks more intelligence."
      items={valueItems}
    />
  );
}

export function PricingIncludedGather() {
  return (
    <StickyGather
      tag="Included in Every Plan"
      heading="Core platform. Always included."
      centerLabel="Your Plan"
      items={includedNodes}
    />
  );
}
