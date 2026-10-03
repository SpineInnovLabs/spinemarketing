"use client";

import { StickyScroll } from "@/components/sticky-scroll";
import {
  Cloud,
  GitBranch,
  Webhook,
  FileInput,
  Shield,
} from "lucide-react";

const items = [
  {
    tag: "SaaS Connectors",
    title: "OAuth connect in minutes. 60+ supported.",
    description: "Salesforce, HubSpot, Stripe, Zendesk, Jira, Slack — connect once and SpineWorkspace handles schema changes automatically.",
    icon: Cloud,
    color: "#3b82f6",
    features: [
      "One-click OAuth flow for major platforms",
      "Auto-refresh tokens with retry logic",
      "A renamed field in the original tool does not create a new record",
      "Rate-limiting awareness with backoff queuing",
    ],
  },
  {
    tag: "Connected tools",
    title: "AI-native bidirectional data flow",
    description: "the tools you already use enables AI systems to read and write through SpineWorkspace with full governance controls.",
    icon: GitBranch,
    color: "#8b5cf6",
    features: [
      "AI agents access data through governed endpoints",
      "Bidirectional sync — read and write-back",
      "Session context preserved across interactions",
      "Same approval gates as human-initiated actions",
    ],
  },
  {
    tag: "Webhooks",
    title: "Real-time event ingestion with auto-schema",
    description: "Push events from any system. The Spine detects the schema, normalizes the payload, and routes it to the right entity.",
    icon: Webhook,
    color: "#2dd4bf",
    features: [
      "Automatic payload schema detection",
      "Entity matching from webhook payloads",
      "Event deduplication and ordering",
      "Dead letter queue with retry mechanism",
    ],
  },
  {
    tag: "File Drops",
    title: "CSV, JSON, XML — parsed and normalized",
    description: "Bulk data imports through file drops. Format detection, validation, and merge into existing records the tools already keep.",
    icon: FileInput,
    color: "#fbbf24",
    features: [
      "Format auto-detection (CSV, JSON, XML, Parquet)",
      "Column mapping with smart suggestions",
      "Dry-run validation before merge",
      "Conflict resolution preview for duplicates",
    ],
  },
  {
    tag: "Governance",
    title: "Every connector governed by the same rules",
    description: "Apps, files, and conversations come in through one connection. The record, the evidence, and the draft stay apart.",
    icon: Shield,
    color: "#ef4444",
    features: [
      "Unified audit trail across all connector types",
      "Per-connector access control and data isolation",
      "Ingestion rate monitoring and anomaly detection",
      "Data residency enforcement per connector",
    ],
  },
];

export function IntegrationsStickyScroll() {
  return (
    <StickyScroll
      tag="Connector Deep Dive"
      heading={<>Four paths in. <span className="text-primary">One one shared shape out.</span></>}
      subheading="Scroll to explore each integration method and how data flows into SpineWorkspace."
      items={items}
    />
  );
}
