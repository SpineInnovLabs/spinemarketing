"use client";

import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

export function SaasContent() {
  return (
    <IndustrySolutionLayout
      category="SaaS & Subscription"
      headline="The SaaS Intelligence Workspace."
      subheadline="Unify product usage, subscription billing, support health, and CRM data to protect NRR and catch churn before it happens."
      ctaLabel="See Account Success workspace →"
      ctaHref="/contact"
      problem={{
        intro: "Renewal risk is invisible in CRM. A customer can show 'Healthy' in Salesforce while their product usage cliff-dropped and their champion just quit — information trapped in three different tools.",
        bullets: [
          "Usage drops don't appear in CRM until a CSM manually updates the health score.",
          "Champion departures live in email and LinkedIn — not in the account record.",
          "Expansion signals are buried in product analytics that most CS teams never see.",
          "You find out about a churn risk when the customer calls to cancel, not 90 days before.",
        ],
      }}
      solution={{
        paragraph: "IntegrateWise connects your product analytics (Segment, Amplitude, Mixpanel), billing (Stripe, Chargebee), support (Zendesk), and CRM (Salesforce) into one Account 360. AI correlates usage patterns with renewal dates, flagging Product-Qualified Risk and Product-Qualified Expansion for CSMs to act on — with approval gates ensuring no automated emails damage relationships.",
        workspaceName: "Account Command Center",
      }}
      capabilities={[
        {
          title: "Adoption-to-Renewal Tracking",
          desc: "Health scores weighted by login frequency, feature adoption, and license utilization — not just gut feel or last CSM note.",
        },
        {
          title: "Churn Early Warning",
          desc: "Pattern detection across support ticket sentiment, payment delays, and usage drops — surfaced as a combined signal before any single app would flag it.",
        },
        {
          title: "Expansion Playbooks",
          desc: "AI identifies Power Users approaching license limits and drafts upgrade conversations. You review the evidence and approve before anything sends.",
        },
        {
          title: "QBR Auto-Prep",
          desc: "One-click generation of business review decks using real product adoption data, outcome metrics, and relationship history — not CRM guesses.",
        },
      ]}
      governance="Every health score change, churn flag, and expansion recommendation displays its source data and confidence score. CSMs approve or edit before any customer communication sends. Full audit trail: who approved what, when, and based on which Spine signals."
      connectors={[
        "Salesforce", "HubSpot", "Stripe", "Chargebee", "Zendesk",
        "Segment", "Amplitude", "Mixpanel", "Slack", "GitHub",
      ]}
      metrics={[
        "NRR", "Logo Retention", "Time-to-Value", "Expansion ARR",
        "Renewal Forecast Accuracy", "Time-to-Intervention",
      ]}
    />
  );
}
