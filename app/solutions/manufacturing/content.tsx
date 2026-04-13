"use client";

import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

export function ManufacturingContent() {
  return (
    <IndustrySolutionLayout
      category="Manufacturing & Trade"
      headline="Catch exceptions. Before your customers do."
      subheadline="Connect orders, shipments, and payments into one exception workspace — AI flags what's stuck before it reaches the customer."
      ctaLabel="Explore the workspace →"
      problem={{
        bullets: [
          "Shipment delays appear in logistics before they reach CRM or customer-facing teams.",
          "Payment holds and AR exceptions live in finance, unknown to operations.",
          "You lose cash to shipped-but-not-billed orders because systems don't talk.",
        ],
      }}
      capabilities={[
        {
          title: "Exception Triage",
          desc: "Prioritize delayed orders by customer value and contract penalties — highest impact first.",
        },
        {
          title: "Cash Flow Protection",
          desc: "Link shipment confirmation to invoice release and flag shipped-but-not-billed orders immediately.",
        },
        {
          title: "Supplier Risk Monitoring",
          desc: "Surface inbound delays that cascade into outbound commitments before they become customer escalations.",
        },
        {
          title: "Customer Communication Governance",
          desc: "AI drafts delay notifications with full context — you approve before anything reaches the customer.",
        },
      ]}
      governance="Every exception action and customer notification routes through the approval gate — full audit trail of who approved which intervention and based on what data."
      connectors={[
        "NetSuite", "SAP", "Shopify", "Salesforce",
        "FedEx API", "DHL API", "QuickBooks",
      ]}
      metrics={[
        "On-Time Delivery %", "Cash Conversion Cycle",
        "Exception Resolution Time", "Shipped-Not-Billed Rate",
      ]}
    />
  );
}
