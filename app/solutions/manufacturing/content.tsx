"use client";

import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

export function ManufacturingContent() {
  return (
    <IndustrySolutionLayout
      category="Manufacturing & Trade"
      headline="From chaos to clarity."
      subheadline="Connect orders, production, shipments, and payments into one exception-management workspace. AI flags what's stuck before it becomes a customer problem."
      ctaLabel="Explore the workspace →"
      problem={{
        intro: "Orders live in ERP. Shipments are tracked in spreadsheets. Customer communication is in email. You find out about a delayed shipment when the customer calls angry — not when it happened.",
        bullets: [
          "Shipment delays appear in logistics before they reach CRM or customer-facing teams.",
          "Payment holds and AR exceptions live in finance, unknown to operations.",
          "Supplier delays cascade into customer commitments no one has visibility over.",
          "You lose cash to shipped-but-not-billed orders because systems don't talk.",
        ],
      }}
      solution={{
        paragraph: "IntegrateWise creates an Order 360 connecting ERP (NetSuite, SAP), shipping trackers (FedEx, DHL APIs), inventory systems, and customer communication. AI monitors for exceptions — delayed shipments, inventory shortages, payment holds — and surfaces them with full customer context for operations teams to resolve.",
        workspaceName: "Order 360",
      }}
      capabilities={[
        {
          title: "Exception Triage",
          desc: "Auto-prioritize delayed orders by customer value and contract penalties. Surface the highest-impact exceptions first — not just the most recent.",
        },
        {
          title: "Cash Flow Protection",
          desc: "Link shipment confirmation to invoice release. Flag orders shipped-but-not-billed before they slip through the cracks.",
        },
        {
          title: "Supplier Risk Monitoring",
          desc: "Track inbound delays that affect your outbound commitments. Surface the cascade before a supplier slip becomes a customer escalation.",
        },
        {
          title: "Customer Communication Governance",
          desc: "AI drafts delay notifications and escalation updates with full context. You approve before anything sends to the customer.",
        },
      ]}
      governance="Every exception action, customer notification, and order priority change routes through the approval gate. Operations teams maintain control over what gets communicated and when. Full audit trail of who approved which intervention and based on what Spine data."
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
