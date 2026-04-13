"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function CustomerSuccessRoleContent() {
  return (
    <RoleSolutionLayout
      role="Customer Success & TAMs"
      headline="The CSM Command Center"
      subheadline="One Account 360 where AI surfaces exactly which accounts need attention today — and drafts the save play for your approval."
      ctaLabel="See Account Success workspace →"
      ctaHref="/account-success"
      focus={[
        {
          title: "Renewal Risk Prediction",
          desc: "90-day lookahead across CRM, product usage, billing, and support. Know which accounts are at risk before the renewal conversation starts.",
        },
        {
          title: "Expansion Signal Detection",
          desc: "AI surfaces usage spikes, team growth, and license limit approaches as expansion moments — with a drafted upgrade conversation ready for your review.",
        },
        {
          title: "QBR Preparation Automation",
          desc: "AI assembles account review decks from real adoption data, outcome metrics, and relationship history. You finalize and present — no manual assembly.",
        },
        {
          title: "Escalation Management",
          desc: "Cross-system pattern detection — usage drop + champion left + P1 tickets — surfaces as one combined risk signal with full context attached.",
        },
      ]}
      governanceNote="AI suggests health score changes — you approve them. AI drafts EBR decks — you finalize before sending. AI queues outreach — you review the evidence and approve. No customer-facing action executes without CSM review. Every approval is logged with source data and a timestamp."
      connects={[
        "Salesforce", "HubSpot", "Zendesk", "Intercom",
        "Stripe", "Chargebee", "Segment", "Amplitude", "Slack", "Gmail",
      ]}
      metrics={[
        "NRR", "GRR", "Time-to-Intervention",
        "Expansion Rate", "Renewal Forecast Accuracy",
      ]}
    />
  );
}
