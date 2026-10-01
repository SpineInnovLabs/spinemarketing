"use client";

import { StickyScroll } from "@/components/sticky-scroll";
import {
  Database,
  Layers,
  RefreshCw,
  Shield,
  GitBranch,
} from "lucide-react";

const items = [
  {
    tag: "Entity Resolution",
    title: "One canonical record per entity",
    description: "Duplicate contacts, orphaned accounts, and conflicting fields resolved automatically. Every entity links to one versioned truth.",
    icon: Database,
    color: "#2dd4bf",
    features: [
      "Cross-system dedup via deterministic + fuzzy matching",
      "Conflict resolution with source priority rules",
      "Merge audit trail — see what was combined and why",
      "Manual override with version rollback",
    ],
  },
  {
    tag: "Schema Normalization",
    title: "Upstream changes absorbed in the mapping layer",
    description: "When Salesforce renames a field or HubSpot adds a property, Spine Fabric adapts. Your downstream never breaks.",
    icon: Layers,
    color: "#8b5cf6",
    features: [
      "Auto-detect schema drift on connected tools",
      "Mapping layer absorbs field renames and type changes",
      "Zero downtime during upstream API version upgrades",
      "Schema version history with diff view",
    ],
  },
  {
    tag: "Vendor Neutrality",
    title: "Survive CRM migrations without data loss",
    description: "Switch from Salesforce to HubSpot — or use both. Spine Fabric is the truth layer. Your tools are just connectors.",
    icon: RefreshCw,
    color: "#fbbf24",
    features: [
      "No vendor lock-in — data lives in Spine Fabric",
      "Parallel-run migrations with data comparison",
      "Connector swap without downstream disruption",
      "Full data export in standard formats anytime",
    ],
  },
  {
    tag: "Governance Layer",
    title: "Every mutation audited. Every read traced.",
    description: "SOC 2 Type II compliant. AES-256 encryption. Role-based access with department-level isolation.",
    icon: Shield,
    color: "#ef4444",
    features: [
      "Immutable append-only audit log",
      "Role-based access control per entity type",
      "Department isolation with contextual firewalling",
      "Data residency controls per region",
    ],
  },
  {
    tag: "Protocol Support",
    title: "SaaS, MCP, Webhooks — all normalized",
    description: "Three ingestion paths converge into one canonical format. No matter where data enters, it's structured the same way.",
    icon: GitBranch,
    color: "#3b82f6",
    features: [
      "OAuth-based SaaS connectors with auto-refresh",
      "Model Context Protocol for AI-native integration",
      "Webhook ingestion with schema auto-detection",
      "File drops with format detection and parsing",
    ],
  },
];

export function SpineStickyScroll() {
  return (
    <StickyScroll
      tag="Architecture Deep Dive"
      heading={<>Five pillars of the <span className="text-primary">Spine Fabric.</span></>}
      subheading="Scroll to explore how Spine Fabric maintains one truth across all your connected tools."
      items={items}
    />
  );
}
