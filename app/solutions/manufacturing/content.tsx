"use client";

import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

export function ManufacturingContent() {
  return (
    <IndustrySolutionLayout
      category="Manufacturing & Trade"
      headline="Living tissue that connects your supply chain."
      subheadline="Orders, shipments, and payments unified into one exception workspace."
      ctaLabel="Explore the workspace →"
      problem={{
        bullets: [
          "Shipment delays appear in logistics but not in CRM.",
          "Payment holds live in finance, unknown to operations.",
          "Shipped-but-not-billed orders bleed cash silently.",
        ],
      }}
      capabilities={[
        {
          title: "Exception Triage",
          desc: "Prioritize delays by customer value and contract penalties.",
        },
        {
          title: "Cash Flow Protection",
          desc: "Link shipment confirmation to invoice release automatically.",
        },
        {
          title: "Supplier Risk Monitoring",
          desc: "Surface inbound delays before they cascade to customers.",
        },
        {
          title: "Customer Communication Governance",
          desc: "AI drafts delay notifications. You approve before sending.",
        },
      ]}
      governance="Every exception action routes through approval. Full audit trail included."
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
