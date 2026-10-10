import { SolutionDomainFeatures } from "@/components/marketing/solution-domain-features";

import { SignalStoryLayout } from "../_shared/SignalStoryLayout";

export function RevOpsContent() {
  return (
    <SignalStoryLayout
      domainFeatures={<SolutionDomainFeatures slug="revops" />}
      category="RevOps & Business Operations"
      headline="Revenue context you can trace. Fewer spreadsheet wars."
      subheadline="Pipeline, bookings, billings, and churn — all connected and traceable. Stop reconciling five systems and start operating from one."
      ctaLabel="See Business Ops →"
      ctaHref="/business-ops"
      accentColor="rgba(139,92,246,0.5)"
      beforeAfter={[
        {
          before: "Monday standup: Sales says pipeline is $2.1M. Finance says $1.7M. Both are pulling from different systems. Who's right?",
          after: "One pipeline number, traceable to source records. When someone asks 'where did this come from?', you can show them.",
        },
        {
          before: "A deal moves from sales to CS. The CS team asks 'what did we promise?' Nobody documented the handoff.",
          after: "Every deal carries its full context — what was promised, what was negotiated, and the evidence trail — automatically.",
        },
        {
          before: "Forecast accuracy is 60%. You spend half your week cleaning data and chasing reps for updates.",
          after: "AI flags stale records, missing fields, and duplicate entries for batch review. Forecast accuracy improves because the data is clean.",
        },
        {
          before: "You discover a billing discrepancy during QBR prep. Now it's a fire drill instead of a review.",
          after: "Quote-to-cash mismatches surface as signals in real time. You fix them Tuesday, not during Thursday's QBR.",
        },
      ]}
      signals={[
        { label: "All revenue systems connected", detail: "Salesforce, HubSpot, Stripe, QuickBooks — pipeline, bookings, billing, and collections flow into one view." },
        { label: "Data hygiene runs continuously", detail: "Duplicates, stale records, and missing fields flagged automatically. You approve fixes in batches." },
        { label: "Quote-to-cash bottlenecks detected", detail: "When a deal stalls between stages — pricing approval, legal, finance — the bottleneck surfaces immediately." },
        { label: "Forecast traceable to source", detail: "Every forecast number links to actual records. Click any number and see the deals, contracts, and invoices behind it." },
        { label: "Handoffs carry full context", detail: "When a deal moves between teams, the full story travels with it. No more 'I didn't know that' moments." },
      ]}
      capabilities={[
        { title: "See bottlenecks before they cost you", desc: "Quote-to-cash velocity tracked in real time. Know exactly where deals stall and why." },
        { title: "Clean data without manual audits", desc: "Duplicates, stale records, and missing fields flagged automatically. Review and approve fixes in batches." },
        { title: "Forecasts you can trace back to source", desc: "Every number links to actual records. When the board asks where it came from, you can show them." },
        { title: "Handoffs that don't drop context", desc: "When a deal moves from sales to CS to finance, the full context travels with it." },
      ]}
      governance="You define the rules — AI enforces them and suggests improvements. Every change is logged for audit."
      connectors={["Salesforce", "HubSpot", "Stripe", "QuickBooks", "Zendesk", "Asana", "Monday.com", "Slack"]}
      metrics={["Cash Conversion Cycle", "Pipeline Coverage", "Forecast Accuracy", "Collection Efficiency"]}
      outcomes={[
        { stat: "8%", label: "Better Forecast" },
        { stat: "4%", label: "Lower Over-Hire" },
        { stat: "70%", label: "Fewer Duplicates" },
        { stat: "+20%", label: "Forecast Accuracy" },
      ]}
    />
  );
}
