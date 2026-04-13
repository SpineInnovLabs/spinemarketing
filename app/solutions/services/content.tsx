"use client";

import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

export function ServicesContent() {
  return (
    <IndustrySolutionLayout
      category="Services & Agencies"
      headline="Protect margin. Deliver certainty."
      subheadline="One view of project health, team utilization, client billing, and delivery risk — where AI flags scope creep before it erodes your margin."
      ctaLabel="Explore the workspace →"
      problem={{
        intro: "Projects live in Asana or Jira. Time tracking is in Harvest or Toggl. Invoices are in QuickBooks. Client emails are in Gmail. You discover a project is bleeding margin only when you reconcile the books — too late to fix it.",
        bullets: [
          "Scope creep is invisible until month-end when you compare actual hours to the SOW.",
          "Team utilization gaps hide because project tools and time-tracking don't share data.",
          "Billing delays go unnoticed until the client relationship is already under pressure.",
          "Delivery risk surfaces via client complaint rather than internal signal.",
        ],
      }}
      solution={{
        paragraph: "Unify project management, time tracking, billing, and client communication into one Project 360. The Spine links tasks to invoices to emails, showing real-time project margin. AI detects utilization drops, scope creep signals (tickets outside SOW), and billing delays — proposing actions for project managers to approve.",
        workspaceName: "Project 360",
      }}
      capabilities={[
        {
          title: "Margin Protection",
          desc: "Real-time project P&L showing billed vs. burned vs. scope. Know which engagements are profitable before the invoice goes out.",
        },
        {
          title: "Utilization Balancing",
          desc: "AI suggests resource reallocation when team members are under- or over-booked across projects — before utilization gaps hit delivery.",
        },
        {
          title: "Client Health Scoring",
          desc: "Support ticket volume + payment history + stakeholder sentiment analysis combined into one client health view per engagement.",
        },
        {
          title: "Scope Creep Detection",
          desc: "AI flags tasks and requests that fall outside the original SOW, surfacing the conversation before it erodes margin.",
        },
      ]}
      governance="Process changes, billing adjustments, and client communications all route through approval gates. Project managers maintain control over what reaches the client. Immutable logs show who approved which action and when — full audit trail."
      connectors={[
        "Asana", "Monday.com", "Jira", "Harvest",
        "Toggl", "QuickBooks", "Xero", "Slack", "Gmail",
      ]}
      metrics={[
        "Project Margin", "Utilization Rate",
        "Days Sales Outstanding (DSO)", "Client Satisfaction",
      ]}
    />
  );
}
