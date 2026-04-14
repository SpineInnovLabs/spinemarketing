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
    title: "Sub-100ms from normalization to UI",
    description: "Firebase real-time layer delivers changes to the Workbench instantly. No polling, no stale data.",
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
    title: "8-stage normalization pipeline",
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
    title: "Global edge with regional data residency",
    description: "CDN-cached static assets. API requests routed to the nearest edge. Data stays in the region you choose.",
    icon: Globe,
    color: "#8b5cf6",
    features: [
      "Multi-region deployment for global teams",
      "Data residency enforcement at the storage layer",
      "Edge caching for sub-50ms page loads",
      "Automatic failover between regions",
    ],
  },
  {
    tag: "Observability",
    title: "Full-stack monitoring and alerting",
    description: "System health, pipeline throughput, connector status, and error rates — monitored 24/7 with automated incident response.",
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
    title: "99.9% uptime with zero-downtime deploys",
    description: "Blue-green deployments. Automated rollback. No maintenance windows. Your team never loses access.",
    icon: Shield,
    color: "#ef4444",
    features: [
      "Blue-green deployment with instant rollback",
      "Zero-downtime database migrations",
      "Automated health checks every 30 seconds",
      "99.9% SLA with credits for any breach",
    ],
  },
];

export function InfrastructureStickyScroll() {
  return (
    <StickyScroll
      tag="Infrastructure Deep Dive"
      heading={<>Built for speed. <span className="text-primary">Built to last.</span></>}
      subheading="Scroll to explore the infrastructure that powers sub-100ms sync and 99.9% uptime."
      items={items}
    />
  );
}
