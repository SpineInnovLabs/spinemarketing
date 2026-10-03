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
    description: "The tools were connected. The people making decisions still could not see the whole story.",
    icon: Wrench,
    color: "#3b82f6",
    features: ["The tools stayed themselves", "The record stayed in those tools", "The person still had to rebuild the story"],
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
  { label: "One connection", icon: Database, color: "#0176D3", description: "The tools you already use" },
  { label: "Workspace", icon: Layers, color: "#3b82f6", description: "The view this role needs" },
  { label: "Twin", icon: Brain, color: "#8b5cf6", description: "A proposal, only when asked" },
  { label: "The evidence", icon: Eye, color: "#06b6d4", description: "For this person and this task" },
  { label: "Review", icon: ShieldCheck, color: "#f59e0b", description: "A person decides" },
  { label: "The record", icon: Users, color: "#ef4444", description: "Stays in the original tool" },
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
