"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function FoundersContent() {
  return (
    <RoleSolutionLayout
      role="Founders & CXOs"
      headline="The Executive Operating Console"
      subheadline="Exception-based management for leaders — see only what requires your judgment, with full context attached."
      ctaLabel="See the executive view →"
      focus={[
        {
          title: "Monday Morning Brief",
          desc: "One-page narrative of the week's changes — revenue movement, at-risk accounts, and exceptions — built from live Spine data.",
        },
        {
          title: "Board Pack Auto-Generation",
          desc: "NRR, burn, cash, and pipeline metrics with drill-down evidence — the Twin drafts the narrative, you finalize.",
        },
        {
          title: "Strategic Account Oversight",
          desc: "Direct view into your top 20% of accounts by revenue and risk — what the Twin flagged and what needs your attention.",
        },
        {
          title: "Governance Oversight",
          desc: "Audit trail of all AI-approved actions across the org — you set the threshold, the Spine enforces it.",
        },
      ]}
      governanceNote="You see what changed and why. You approve strategic actions. No critical customer change happens without executive visibility if you set the threshold."
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
