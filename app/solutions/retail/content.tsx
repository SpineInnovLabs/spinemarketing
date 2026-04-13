"use client";

import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

export function RetailContent() {
  return (
    <IndustrySolutionLayout
      category="Retail & Ecommerce"
      headline="Unified commerce operations."
      subheadline="See stock, orders, returns, and customer support as one operational picture — not isolated channels."
      ctaLabel="Explore the workspace →"
      problem={{
        intro: "Your ecommerce platform (Shopify), inventory (DEAR), support (Zendesk), and returns (Loop) don't talk. High-value customers return products and complain on Twitter before your team knows they had a problem.",
        bullets: [
          "Stock-outs happen because reorder thresholds live in a different system from actual sales velocity.",
          "Return spikes on a SKU go undetected until operations reconciles the data — too late to act.",
          "High-value customers with open complaints get standard queue treatment instead of priority routing.",
          "Abandoned carts with active support tickets go unconnected — the best retention moment is missed.",
        ],
      }}
      solution={{
        paragraph: "The Spine unifies commerce data into a Customer Operations Workspace. AI detects patterns like \"VIP customer + return initiated + negative sentiment in support\" and flags for immediate retention action — waiting for your approval before sending recovery offers.",
        workspaceName: "Customer Operations Workspace",
      }}
      capabilities={[
        {
          title: "Inventory-Aware Support",
          desc: "Support agents see stock levels when handling complaints. Reserve replacement inventory or offer alternatives — in the same workspace.",
        },
        {
          title: "Returns Intelligence",
          desc: "AI correlates return reasons with product batches or descriptions to flag quality issues before they compound across a wider customer base.",
        },
        {
          title: "VIP Customer Routing",
          desc: "High-value customers with open orders or complaints get priority support queue placement — automatically, based on Spine data.",
        },
        {
          title: "Stockout Prevention",
          desc: "Connect sales velocity to inventory levels. AI surfaces reorder alerts before stockouts affect orders, not after.",
        },
      ]}
      governance="Recovery offers, VIP routing decisions, and outbound communications all require approval before they execute. AI drafts the intervention; your team approves the action. Full audit trail linking every action to the Spine signal that triggered it."
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
