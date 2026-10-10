"use client";

import { StickyScroll } from "@/components/sticky-scroll";
import {
  Zap,
  Database,
  Globe,
  Activity,
  Shield,
} from "lucide-react";

const items = [
  {
    tag: "Real-Time Sync",
    title: "The workspace shows the result",
    description: "Event-driven updates help the Workspace reflect connected work. Source freshness, delivery delays, and reconciliation remain visible concerns.",
    icon: Zap,
    color: "#fbbf24",
    features: [
      "WebSocket-based real-time data push",
      "Optimistic UI updates with server reconciliation",
      "Change notifications across all connected views",
      "Offline-capable with automatic sync on reconnect",
    ],
  },
  {
    tag: "Data Pipeline",
    title: "One connection",
    description: "Raw data flows through extraction, validation, dedup, entity resolution, enrichment, scoring, indexing, and distribution.",
    icon: Database,
    color: "#2dd4bf",
    features: [
      "Parallel processing across pipeline stages",
      "Dead letter queue for failed transformations",
      "Pipeline metrics with stage-level latency tracking",
      "Automatic retry with exponential backoff",
    ],
  },
  {
    tag: "Edge Network",
    title: "Edge delivery and explicit storage boundaries",
    description: "Static assets and application requests have different delivery and storage needs. Data locations and cross-border flows require deployment-specific review.",
    icon: Globe,
    color: "#8b5cf6",
    features: [
      "Edge delivery where supported by the deployment",
      "Storage locations reviewed separately from delivery",
      "Measure latency using the actual user journey",
      "Verify failover and recovery for the target environment",
    ],
  },
  {
    tag: "Observability",
    title: "Full-stack monitoring and alerting",
    description: "Observe system health, pipeline throughput, connector status, and error rates. Monitoring coverage and incident response must be agreed for the deployment.",
    icon: Activity,
    color: "#3b82f6",
    features: [
      "Real-time system health dashboard",
      "Pipeline throughput and latency metrics",
      "Connector health monitoring with auto-reconnect",
      "Automated incident detection and escalation",
    ],
  },
  {
    tag: "Reliability",
    title: "Plan, observe, and verify recovery",
    description: "Deployment and recovery plans should describe how changes are introduced, failures detected, and service restored. Test those plans in the target environment.",
    icon: Shield,
    color: "#ef4444",
    features: [
      "Staged deployment and recovery procedures",
      "Migration planning with explicit service-impact review",
      "Health checks appropriate to each service",
      "Incident escalation and recovery verification",
    ],
  },
];

export function InfrastructureStickyScroll() {
  return (
    <StickyScroll
      tag="Infrastructure Deep Dive"
      heading={<>Built for speed. <span className="text-primary">Built to last.</span></>}
      subheading="Scroll to explore the infrastructure that powers continuous sync and reliable delivery."
      items={items}
    />
  );
}
