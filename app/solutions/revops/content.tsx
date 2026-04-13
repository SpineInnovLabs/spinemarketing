"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function RevOpsContent() {
  return (
    <RoleSolutionLayout
      role="Rev / Business Ops"
      headline="Revenue intelligence. Fully traceable."
      subheadline="Pipeline, bookings, billings, and churn in one truth layer — detect process leaks and fix them."
      ctaLabel="Explore Business Ops →"
      ctaHref="/business-ops"
      focus={[
        {
          title: "Process Health Monitoring",
          desc: "Quote-to-cash velocity, SLA adherence, and bottleneck detection across the revenue cycle — surfaced automatically.",
        },
        {
          title: "Data Hygiene Automation",
          desc: "AI detects duplicate records, stale opportunities, and missing fields — then proposes fixes for your approval.",
        },
        {
          title: "Forecast Governance",
          desc: "Rolling forecast based on pipeline, conversion history, and account health — every number traceable to a source entity.",
        },
        {
          title: "Cross-Tool Workflow Orchestration",
          desc: "Route actions between Sales, CS, and Finance with approval gates at each handoff.",
        },
      ]}
      governanceNote="You define the rules — AI enforces them with suggestions, not automation. Approve process changes before they propagate. Full audit trail of every decision."
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
