"use client";

import { StickyGather } from "@/components/sticky-gather";
import {
  Plug,
  Database,
  Brain,
  Shield,
  Activity,
  Zap,
  Eye,
  RefreshCw,
} from "lucide-react";

const items = [
  { icon: Plug, label: "Ingest", description: "Data flows from 70+ connectors via OAuth, MCP, or webhook.", color: "#3b82f6" },
  { icon: Database, label: "Normalize", description: "8-stage pipeline resolves entities and deduplicates records.", color: "#2dd4bf" },
  { icon: Activity, label: "Detect", description: "Cross-system patterns and anomalies surfaced automatically.", color: "#8b5cf6" },
  { icon: Brain, label: "Analyze", description: "Twin scores signals with confidence and source attribution.", color: "#fbbf24" },
  { icon: Eye, label: "Surface", description: "Morning Brief and Entity 360 present ranked action items.", color: "#06b6d4" },
  { icon: Shield, label: "Approve", description: "Govern Gate routes actions by impact tier for human review.", color: "#ef4444" },
  { icon: Zap, label: "Execute", description: "Approved actions write back to source systems idempotently.", color: "#f97316" },
  { icon: RefreshCw, label: "Learn", description: "Every decision enriches the knowledge base. No retraining.", color: "#14b8a6" },
];

export function HowItWorksGather() {
  return (
    <StickyGather
      tag="The Full Loop"
      heading={<>Eight steps. <span className="text-primary">One continuous cycle.</span></>}
      subheading="From raw data ingestion to compounding intelligence — every step converges in the Spine."
      centerLabel="The Spine"
      centerDescription="Canonical core"
      items={items}
    />
  );
}
