"use client";

import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

export function RetailContent() {
  return (
    <IndustrySolutionLayout
      category="Retail & Ecommerce"
      headline="The circulatory system for omnichannel retail."
      subheadline="Stock, orders, returns, and support as one operational picture."
      ctaLabel="Explore the workspace →"
      problem={{
        bullets: [
          "Reorder thresholds live apart from actual sales velocity.",
          "VIP customers with complaints get standard queue treatment.",
          "Return spikes go undetected until reconciliation, too late.",
        ],
      }}
      capabilities={[
        {
          title: "Inventory-Aware Support",
          desc: "Agents see live stock levels and reserve replacements instantly.",
        },
        {
          title: "Returns Intelligence",
          desc: "AI correlates return reasons with batches to flag issues.",
        },
        {
          title: "VIP Customer Routing",
          desc: "High-value customers get automatic priority queue placement.",
        },
        {
          title: "Stockout Prevention",
          desc: "Sales velocity linked to inventory triggers reorder alerts.",
        },
      ]}
      governance="Recovery offers and outbound comms require approval. Full audit trail."
      connectors={[
        "Shopify", "WooCommerce", "NetSuite", "Zendesk",
        "Loop", "Gorgias", "Klaviyo", "Stripe",
      ]}
      metrics={[
        "Customer Lifetime Value (CLV)", "Return Rate",
        "Support Resolution Time", "Stock-Out Frequency",
      ]}
    />
  );
}
