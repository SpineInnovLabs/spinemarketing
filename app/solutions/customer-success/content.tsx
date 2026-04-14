"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function CustomerSuccessRoleContent() {
  return (
    <RoleSolutionLayout
      role="Customer Success & TAMs"
      headline="Save accounts. Before the conversation starts."
      subheadline="AI surfaces at-risk accounts and drafts save plays for your approval."
      ctaLabel="See Account Success workspace →"
      ctaHref="/account-success"
      focus={[
        {
          title: "Renewal Risk Prediction",
          desc: "90-day lookahead across CRM, usage, billing, and support.",
        },
        {
          title: "Expansion Signal Detection",
          desc: "Usage spikes and license limits flagged as expansion moments.",
        },
        {
          title: "QBR Preparation Automation",
          desc: "Account review decks assembled from real adoption data.",
        },
        {
          title: "Escalation Management",
          desc: "Combined risk signals with full context attached.",
        },
      ]}
      governanceNote="AI suggests changes — you approve. No customer action without CSM sign-off."
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
