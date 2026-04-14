"use client";

import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

export function ServicesContent() {
  return (
    <IndustrySolutionLayout
      category="Services & Agencies"
      headline="The immune system that protects your margins."
      subheadline="Project health, utilization, and billing risk in one view."
      ctaLabel="Explore the workspace →"
      problem={{
        bullets: [
          "Scope creep is invisible until month-end reconciliation.",
          "Utilization gaps hide across disconnected project tools.",
          "Delivery risk surfaces via client complaint, not internal signal.",
        ],
      }}
      capabilities={[
        {
          title: "Margin Protection",
          desc: "Real-time project P&L: billed vs. burned vs. scope.",
        },
        {
          title: "Utilization Balancing",
          desc: "AI suggests reallocation when team members are misbooked.",
        },
        {
          title: "Client Health Scoring",
          desc: "Support, payment, and sentiment combined into one view.",
        },
        {
          title: "Scope Creep Detection",
          desc: "AI flags tasks outside the SOW before margin erodes.",
        },
      ]}
      governance="Billing adjustments and client comms route through approval gates. Full audit trail."
      connectors={[
        "Asana", "Monday.com", "Jira", "Harvest",
        "Toggl", "QuickBooks", "Xero", "Slack", "Gmail",
      ]}
      metrics={[
        "Project Margin", "Utilization Rate",
        "Days Sales Outstanding (DSO)", "Client Satisfaction",
      ]}
    />
  );
}
