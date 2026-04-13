"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function OperationsContent() {
  return (
    <RoleSolutionLayout
      role="Operations & Delivery Leaders"
      headline="The workspace that keeps delivery on track."
      subheadline="Operations and delivery teams manage projects, people, and client commitments across project tools, CRM, support, and billing. IntegrateWise connects them all over the Spine — one live view of every engagement."
      whatYouSee={[
        "Project status across every active engagement — timeline, scope, budget",
        "Team utilisation and capacity by person, team, and function",
        "Delivery milestones and at-risk items surfaced before they slip",
        "Client escalations and support tickets in context",
        "Billing milestones connected to delivery status",
        "Dependencies and blockers across projects",
        "Resource allocation gaps and over-runs flagged in real time",
        "Twin-recommended actions on delivery risk, waiting for your approval",
      ]}
      benefits={[
        {
          title: "See the risk before the client does",
          desc: "Delivery slippage, scope creep, and resource constraints are surfaced by the Spine before they become client escalations — giving you time to act.",
        },
        {
          title: "One view across every engagement",
          desc: "Stop switching between project tools, spreadsheets, and CRM. Every active engagement is in one workspace with the full picture from every connected app.",
        },
        {
          title: "AI that flags what matters",
          desc: "The Twin reads project data, billing, and client sentiment through the Spine. It surfaces delivery risk and drafts recommended actions — you approve before anything changes.",
        },
      ]}
      useCases={[
        {
          title: "Catch delivery risk early",
          desc: "A project is 3 days behind. The billing milestone is in 5 days. The client has an open support ticket. The Spine surfaces the combined risk. The Twin recommends the escalation path and drafts the client update — you approve before it sends.",
        },
        {
          title: "Manage utilisation across the team",
          desc: "Two engineers are over-allocated. Three projects are under-resourced. One team member is finishing an engagement in a week. The Spine shows the full capacity picture. The Twin suggests the reallocation. You approve.",
        },
      ]}
    />
  );
}
