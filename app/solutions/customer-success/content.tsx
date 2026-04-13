"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function CustomerSuccessRoleContent() {
  return (
    <RoleSolutionLayout
      role="Customer Success & TAMs"
      headline="The CSM Command Center"
      subheadline="AI surfaces which accounts need attention today — and drafts the save play for your approval."
      ctaLabel="See Account Success workspace →"
      ctaHref="/account-success"
      focus={[
        {
          title: "Renewal Risk Prediction",
          desc: "90-day lookahead across CRM, usage, billing, and support — know which accounts are at risk before the conversation starts.",
        },
        {
          title: "Expansion Signal Detection",
          desc: "AI surfaces usage spikes and license limit approaches as expansion moments with a drafted upgrade conversation ready.",
        },
        {
          title: "QBR Preparation Automation",
          desc: "AI assembles account review decks from real adoption data and relationship history — you finalize and present.",
        },
        {
          title: "Escalation Management",
          desc: "Usage drop, champion left, and P1 tickets surfaced as one combined risk signal with full context attached.",
        },
      ]}
      governanceNote="AI suggests health score changes — you approve them. AI drafts outreach — you review before it sends. No customer-facing action executes without CSM sign-off."
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
