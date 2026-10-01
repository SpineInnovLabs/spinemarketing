"use client";

import { StickyGather } from "@/components/sticky-gather";
import {
  Shield,
  Lock,
  Eye,
  Key,
  Server,
  FileCheck,
  AlertTriangle,
  Fingerprint,
  Globe,
} from "lucide-react";

const items = [
  { icon: Shield, label: "SOC 2 Type II", description: "Independently audited controls for data security.", color: "#2dd4bf" },
  { icon: Lock, label: "AES-256", description: "Encryption at rest and in transit for all data.", color: "#3b82f6" },
  { icon: Eye, label: "Audit Trail", description: "Immutable log of every read, write, and approval.", color: "#8b5cf6" },
  { icon: Key, label: "Access Control", description: "Role-based permissions with department isolation.", color: "#fbbf24" },
  { icon: Server, label: "Data Residency", description: "Choose where your data lives — by region.", color: "#ef4444" },
  { icon: FileCheck, label: "Compliance Export", description: "SOC 2, GDPR, HIPAA audit export on demand.", color: "#f97316" },
  { icon: AlertTriangle, label: "Anomaly Detection", description: "Unusual access patterns flagged in real-time.", color: "#ec4899" },
  { icon: Fingerprint, label: "MFA Enforcement", description: "Multi-factor authentication on all admin actions.", color: "#14b8a6" },
  { icon: Globe, label: "Edge Security", description: "DDoS protection and rate limiting at the edge.", color: "#06b6d4" },
];

export function SecurityGather() {
  return (
    <StickyGather
      tag="Security Architecture"
      heading={<>Nine layers of <span className="text-primary">trust.</span></>}
      subheading="Every security capability converges into one governance model — auditable, compliant, and transparent."
      centerLabel="TruthBoundary"
      centerDescription="Security core"
      items={items}
    />
  );
}
