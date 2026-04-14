"use client";

import { StickyGather } from "@/components/sticky-gather";
import {
  Plug,
  Users,
  ShieldCheck,
  Zap,
  BarChart3,
  Clock,
} from "lucide-react";

const onboardingNodes = [
  { label: "Connect Apps", icon: Plug, color: "#1BA784", description: "Link your existing tools via OAuth" },
  { label: "Map Entities", icon: Users, color: "#3b82f6", description: "Define your accounts and relationships" },
  { label: "Set Governance", icon: ShieldCheck, color: "#f59e0b", description: "Configure approval rules and access" },
  { label: "Go Live", icon: Zap, color: "#8b5cf6", description: "Start seeing unified data immediately" },
  { label: "See Insights", icon: BarChart3, color: "#06b6d4", description: "AI surfaces patterns and risks" },
  { label: "Same-Week ROI", icon: Clock, color: "#ef4444", description: "Value from day one, not month one" },
];

export function ContactOnboardingGather() {
  return (
    <StickyGather
      tag="What Happens Next"
      heading="From first call to live workspace."
      centerLabel="Your Team"
      items={onboardingNodes}
    />
  );
}
