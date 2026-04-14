"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function FoundersContent() {
  return (
    <RoleSolutionLayout
      role="Founders & CXOs"
      headline="See only what matters. With full context attached."
      subheadline="Exception-based management — only what needs your judgment, with context."
      ctaLabel="See the executive view →"
      focus={[
        {
          title: "Monday Morning Brief",
          desc: "Weekly narrative of revenue, risk, and exceptions from live data.",
        },
        {
          title: "Board Pack Auto-Generation",
          desc: "NRR, burn, cash, and pipeline with drill-down evidence.",
        },
        {
          title: "Strategic Account Oversight",
          desc: "Top accounts by revenue and risk with flagged issues.",
        },
        {
          title: "Governance Oversight",
          desc: "Audit trail of all AI-approved actions across the org.",
        },
      ]}
      governanceNote="You see what changed and why. No critical change without executive visibility."
      connects={[
        "Salesforce", "HubSpot", "Stripe", "QuickBooks",
        "Zendesk", "Jira", "Asana", "Slack",
      ]}
      metrics={[
        "NRR", "Burn Rate", "Cash Runway",
        "Pipeline Coverage", "At-Risk ARR",
      ]}
    />
  );
}
