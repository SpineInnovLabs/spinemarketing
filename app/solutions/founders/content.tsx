"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function FoundersContent() {
  return (
    <RoleSolutionLayout
      role="Founders & CXOs"
      headline="The Executive Operating Console"
      subheadline="Exception-based management for leaders. See only what requires your judgment — with the full context attached."
      ctaLabel="See the executive view →"
      focus={[
        {
          title: "Monday Morning Brief",
          desc: "One-page narrative of the week's changes generated from live Spine data — revenue movement, at-risk accounts, collection priorities, delivery exceptions — with evidence from source systems.",
        },
        {
          title: "Board Pack Auto-Generation",
          desc: "Standardized metrics (NRR, Burn, Cash, Pipeline) with drill-down evidence from every connected system. The Twin drafts the narrative; you finalize.",
        },
        {
          title: "Strategic Account Oversight",
          desc: "Direct view into your top 20% of accounts by revenue and risk. See what the Twin flagged, what CSMs did, and what still requires executive attention.",
        },
        {
          title: "Governance Oversight",
          desc: "Audit trail of all AI-approved actions across the organization. You set the threshold for what requires executive visibility — the Spine enforces it.",
        },
      ]}
      governanceNote="You see what changed and why. You approve strategic actions. The system enforces that no critical customer change happens without executive visibility if you set the threshold. Every approval is logged with source data, confidence score, and timestamp."
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
