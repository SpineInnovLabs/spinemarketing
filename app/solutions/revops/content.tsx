"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function RevOpsContent() {
  return (
    <RoleSolutionLayout
      role="Rev / Business Ops"
      headline="The Revenue Operating System"
      subheadline="Connect pipeline, bookings, billings, and churn into one truth layer. Detect process leaks and fix them with governed AI."
      ctaLabel="Explore Business Ops →"
      ctaHref="/solutions/business-ops"
      focus={[
        {
          title: "Process Health Monitoring",
          desc: "Quote-to-Cash velocity, SLA adherence, and bottleneck detection across the full revenue cycle — surfaced automatically from connected systems.",
        },
        {
          title: "Data Hygiene Automation",
          desc: "AI detects duplicate records, stale opportunities, and missing fields — then proposes fixes for your approval. You define what clean looks like; the Spine enforces it.",
        },
        {
          title: "Forecast Governance",
          desc: "Rolling forecast based on pipeline + historical conversion + account health — not just rep guesses. Every number traceable to a source entity in the Spine.",
        },
        {
          title: "Cross-Tool Workflow Orchestration",
          desc: "Route actions between Sales, CS, and Finance with approval gates at each handoff. No process change propagates without the right person signing off.",
        },
      ]}
      governanceNote="You define the rules — what constitutes an 'At-Risk' opportunity, what triggers a collections alert. AI enforces them with suggestions, not automation. You approve process changes before they propagate. Full audit trail of every governance decision."
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
