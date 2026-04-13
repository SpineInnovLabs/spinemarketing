"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function CustomerSuccessRoleContent() {
  return (
    <RoleSolutionLayout
      role="Customer Success & Account Managers"
      headline="The workspace that reads every account signal."
      subheadline="Your accounts live across CRM, support, billing, product, and email. IntegrateWise connects them all over the Spine so you see the full picture — and The Twin surfaces the signals before they become problems."
      whatYouSee={[
        "Account 360: revenue, product usage, support tickets, invoices, stakeholders",
        "Health score built from real data across every connected app",
        "Champion and contact changes tracked across email and CRM",
        "Renewal timeline with risk signals attached",
        "Open support tickets with sentiment and urgency",
        "Billing status and outstanding invoices",
        "Session Summaries from every AI-assisted interaction, logged and attributed",
        "Twin-recommended actions with evidence, waiting for your approval",
      ]}
      benefits={[
        {
          title: "Know before the customer does",
          desc: "Usage drops, champion changes, billing delays, and support spikes are surfaced together — before any single app would flag a problem.",
        },
        {
          title: "Act with the full context",
          desc: "Every intervention is backed by real evidence from the Spine. You don't guess. You see what happened, what the Twin recommends, and why.",
        },
        {
          title: "AI that waits for you",
          desc: "The Twin drafts emails, renewal strategies, and escalation plans. Nothing sends until you approve. Every action is logged with a Session Summary.",
        },
      ]}
      useCases={[
        {
          title: "Save an at-risk account",
          desc: "Usage down 40%. Champion resigned 3 weeks ago. Two support tickets unresolved. The Spine surfaces the combined signal. The Twin drafts the save plan — stakeholder map, outreach sequence, risk summary. You approve before anything sends.",
        },
        {
          title: "Build a QBR in minutes",
          desc: "Open the account. The Spine has already assembled revenue history, product adoption, support summary, open items, and relationship health from all connected apps. The Twin drafts the QBR narrative. You review and present.",
        },
      ]}
    />
  );
}
