"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function RevOpsContent() {
  return (
    <RoleSolutionLayout
      role="Rev / Business Ops"
      headline="Revenue intelligence. Fully traceable."
      subheadline="Pipeline, bookings, billings, and churn in one truth layer."
      ctaLabel="Explore Business Ops →"
      ctaHref="/business-ops"
      focus={[
        {
          title: "Process Health Monitoring",
          desc: "Quote-to-cash velocity and bottleneck detection — surfaced automatically.",
        },
        {
          title: "Data Hygiene Automation",
          desc: "Duplicates, stale records, and missing fields flagged for approval.",
        },
        {
          title: "Forecast Governance",
          desc: "Rolling forecast traceable to source entities.",
        },
        {
          title: "Cross-Tool Workflow Orchestration",
          desc: "Route actions between teams with approval gates at each handoff.",
        },
      ]}
      governanceNote="You define rules — AI enforces with suggestions. Full audit trail."
      connects={[
        "Salesforce", "HubSpot", "Stripe", "QuickBooks",
        "Zendesk", "Asana", "Monday.com", "Slack",
      ]}
      metrics={[
        "Cash Conversion Cycle", "Pipeline Coverage",
        "Forecast Accuracy", "Collection Efficiency",
      ]}
    />
  );
}
