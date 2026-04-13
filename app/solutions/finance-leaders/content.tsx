"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function FinanceLeadersContent() {
  return (
    <RoleSolutionLayout
      role="Finance Leaders"
      headline="The financial workspace that connects the whole business."
      subheadline="Finance leaders manage cash, revenue, collections, and risk across accounting, billing, CRM, and banking. IntegrateWise connects them all over the Spine — one live financial picture."
      whatYouSee={[
        "Revenue actuals versus contracted — with the gap explained",
        "Invoice status and collections pipeline by account and age",
        "Cash position, burn rate, and runway estimate",
        "Overdue invoices with full account context — relationship, order history",
        "Revenue by segment, cohort, and product with movement analysis",
        "Risk concentration by customer, sector, and payment terms",
        "Spend versus budget by team, project, and function",
        "Twin-recommended actions on collections and risk, waiting for your approval",
      ]}
      benefits={[
        {
          title: "Revenue without the reconciliation",
          desc: "CRM bookings, billing actuals, and collections status are connected by the Spine. You see the full revenue picture — contracted, invoiced, and collected — in one view.",
        },
        {
          title: "Collections with full context",
          desc: "Every overdue invoice is shown alongside the account's relationship health, order history, and recent communication. You act on collections with the full picture, not just the billing system.",
        },
        {
          title: "Cash and risk in one workspace",
          desc: "Banking, billing, CRM, and project data feed the Spine. The Twin surfaces cash position changes, concentration risk, and collections risk — with evidence — before you're in a board meeting.",
        },
      ]}
      useCases={[
        {
          title: "Month-end close with full context",
          desc: "The Spine has already assembled revenue movement, invoice status, and collections pipeline from every connected system. The Twin drafts the variance commentary and flags the anomalies. You review, adjust, and close.",
        },
        {
          title: "Collections intervention",
          desc: "Three invoices are 45 days overdue on a key account. CRM shows the relationship is strong and a new deal is in negotiation. The Spine surfaces the tension. The Twin recommends the collections path that protects the relationship — you approve before anyone calls.",
        },
      ]}
    />
  );
}
