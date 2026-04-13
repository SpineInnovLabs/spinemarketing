"use client";

import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

export function RetailContent() {
  return (
    <IndustrySolutionLayout
      category="Retail & Ecommerce"
      headline="One operational picture. Not isolated channels."
      subheadline="See stock, orders, returns, and support as one operational picture — not isolated channels."
      ctaLabel="Explore the workspace →"
      problem={{
        bullets: [
          "Stock-outs happen because reorder thresholds live in a different system from actual sales velocity.",
          "High-value customers with open complaints get standard queue treatment instead of priority routing.",
          "Return spikes on a SKU go undetected until operations reconciles the data — too late to act.",
        ],
      }}
      capabilities={[
        {
          title: "Inventory-Aware Support",
          desc: "Support agents see live stock levels when handling complaints — reserve replacements in the same workspace.",
        },
        {
          title: "Returns Intelligence",
          desc: "AI correlates return reasons with product batches to flag quality issues before they compound.",
        },
        {
          title: "VIP Customer Routing",
          desc: "High-value customers with open orders or complaints get priority queue placement automatically.",
        },
        {
          title: "Stockout Prevention",
          desc: "Connect sales velocity to inventory — reorder alerts surface before stockouts affect orders.",
        },
      ]}
      governance="Recovery offers and outbound communications all require approval before they execute — full audit trail linking every action to its Spine signal."
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
