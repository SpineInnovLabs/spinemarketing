"use client";

import { StickyScroll } from "@/components/sticky-scroll";
import { StickyGather } from "@/components/sticky-gather";
import {
  Wrench,
  AlertCircle,
  Search,
  CheckCircle2,
  Database,
  Brain,
  ShieldCheck,
  Eye,
  Layers,
  Users,
} from "lucide-react";

const journeyItems = [
  {
    tag: "The integration years",
    title: "13 years connecting enterprise systems.",
    description: "APIs, middleware, data pipelines. The infrastructure worked — but the humans making decisions still couldn't see the full picture.",
    icon: Wrench,
    color: "#3b82f6",
    features: ["Enterprise integration architecture", "API-led connectivity", "Cross-system data flows"],
  },
  {
    tag: "The red account",
    title: "$8M at 100% attrition risk. Zero handover.",
    description: "Illustrative origin, not a customer result. A colleague left. Their biggest account landed with no context. Seven systems, seven formats, seven teams — nobody could see across all of it.",
    icon: AlertCircle,
    color: "#ef4444",
    features: ["$8M contract value", "100% attrition risk", "Zero documentation"],
  },
  {
    tag: "The hidden signals",
    title: "Two signals no dashboard could surface.",
    description: "An unsigned contract stalling everything. An interpersonal conflict derailing the renewal. Both invisible to every tool.",
    icon: Search,
    color: "#f59e0b",
    features: ["Unsigned contract discovered", "Hidden conflict identified", "Cross-system correlation"],
  },
  {
    tag: "The save",
    title: "Full renewal. $8 million back from the edge.",
    description: "Illustrative outcome, not a published customer result. Both signals resolved manually. The story is how the product idea started.",
    icon: CheckCircle2,
    color: "#1BA784",
    features: ["Full $8M renewal", "Relationship restored", "Manual integration proved the concept"],
  },
];

const platformNodes = [
  { label: "Spine Fabric", icon: Database, color: "#0176D3", description: "Canonical data fabric layer connecting every source" },
  { label: "Workspace", icon: Layers, color: "#3b82f6", description: "Your daily operating surface" },
  { label: "Twin", icon: Brain, color: "#8b5cf6", description: "AI-powered pattern detection" },
  { label: "The Twin", icon: Eye, color: "#06b6d4", description: "Cognitive overlay for recommendations" },
  { label: "Govern Gate", icon: ShieldCheck, color: "#f59e0b", description: "Human-in-the-loop approval" },
  { label: "Entity 360", icon: Users, color: "#ef4444", description: "Complete view of every entity" },
];

export function AboutJourneyScroll() {
  return (
    <StickyScroll
      tag="Illustrative origin story"
      heading="How the idea started — not a customer result."
      items={journeyItems}
    />
  );
}

export function AboutPlatformGather() {
  return (
    <StickyGather
      tag="What We Built"
      heading="Every piece born from that one save."
      centerLabel="Spine InnovLabs"
      items={platformNodes}
    />
  );
}
