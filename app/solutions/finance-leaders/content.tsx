"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function FinanceLeadersContent() {
  return (
    <RoleSolutionLayout
      role="Finance Leaders"
      headline="The Financial Intelligence Layer"
      subheadline="Collections and cash flow management connected to customer reality — not just invoice aging."
      ctaLabel="Explore the workspace →"
      focus={[
        {
          title: "Revenue Protection",
          desc: "Link billing to delivery and customer health. Know which customers are at churn risk before issuing the next invoice — and act accordingly.",
        },
        {
          title: "Smart Collections",
          desc: "Prioritize by cash impact and customer health, not just days overdue. Draft tone-appropriate dunning based on relationship status — reviewed by you before it sends.",
        },
        {
          title: "Audit Readiness",
          desc: "Immutable logs of all revenue-impacting decisions with source evidence. Who approved which adjustment, when, and based on which Spine data point.",
        },
        {
          title: "Cash Flow Forecasting",
          desc: "AI-weighted projections based on customer health scores and payment history — not just invoice aging. Accurate runway estimates with source evidence attached.",
        },
      ]}
      governanceNote="Every dunning message, write-off recommendation, and revenue recognition adjustment requires Finance approval with full audit trail. AI provides the analysis; humans control the cash. No automated customer-facing financial communication without explicit click-to-approve."
      connects={[
        "QuickBooks", "NetSuite", "Sage", "Stripe",
        "Salesforce", "HubSpot", "Zendesk",
      ]}
      metrics={[
        "Days Sales Outstanding (DSO)", "Bad Debt Rate",
        "Cash Forecast Accuracy", "Collection Efficiency",
      ]}
    />
  );
}
