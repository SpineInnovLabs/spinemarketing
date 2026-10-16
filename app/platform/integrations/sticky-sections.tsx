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
      "Provider-specific authentication and consent",
      "Tenant-scoped connection records",
      "Declared read and action capabilities",
      "Granted scopes checked before use",
    ],
  },
  {
    tag: "Connected tools",
    title: "Read context. Prepare authorized actions.",
    description: "Connected tools expose supported read and action capabilities. Access remains scoped, and consequential actions require the applicable authority.",
    icon: GitBranch,
    color: "#8b5cf6",
    features: [
      "Discovery remains separate from authorization",
      "Operations depend on the connection and its scopes",
      "Consequential actions require applicable authority",
      "Observed outcomes checked against the source",
    ],
  },
  {
    tag: "Webhooks",
    title: "Bring source events into shared context",
    description: "Receive supported source events with provider-specific setup and validation. Confirm event types, payload handling and tenant mapping during integration review.",
    icon: Webhook,
    color: "#2dd4bf",
    features: [
      "Supported provider event types",
      "Provider-specific payload handling",
      "Tenant and workspace event mapping",
      "Delivery and retry behavior confirmed during setup",
    ],
  },
  {
    tag: "File Drops",
    title: "Review imports with your source data",
    description: "Use supported exports and documents as evidence. Confirm formats, mapping and record handling for your environment.",
    icon: FileInput,
    color: "#fbbf24",
    features: [
      "Supported formats agreed for the source data",
      "Field mapping and entity association",
      "Source evidence kept distinct from records",
      "Review changes before authorized updates",
    ],
  },
  {
    tag: "Governance",
    title: "Connections carry scopes and purpose",
    description: "Discovery alone grants no access. A connection needs valid identity, permissions and a supported capability before use.",
    icon: Shield,
    color: "#ef4444",
    features: [
      "Tenant-scoped connection bindings",
      "Declared capability and provider checks",
      "Consent and granted scopes",
      "Source-based outcome verification",
    ],
  },
];

export function IntegrationsStickyScroll() {
  return (
    <div id="integration-methods" className="scroll-mt-24">
      <StickyScroll
        tag="Connector Deep Dive"
        heading={<>Four paths in. <span className="text-primary">One connected context.</span></>}
        subheading="Review each integration method, then confirm the supported operations and setup for your environment."
        items={items}
      />
    </div>
  );
}
