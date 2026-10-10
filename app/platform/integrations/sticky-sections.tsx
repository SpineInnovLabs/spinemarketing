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
    title: "Connect supported tools with explicit permissions",
    description: "CRM, support, finance, projects, and knowledge sources contribute different context. Authentication, availability, and supported operations vary by provider.",
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
    description: "Connected tools expose supported read and action capabilities. Access remains scoped, and consequential actions require the applicable authority.",
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
      "Review provider data locations and processing boundaries",
    ],
  },
];

export function IntegrationsStickyScroll() {
  return (
    <StickyScroll
      tag="Connector Deep Dive"
      heading={<>Four paths in. <span className="text-primary">One connected context.</span></>}
      subheading="Scroll to explore each integration method and how data flows into SpineWorkspace."
      items={items}
    />
  );
}
