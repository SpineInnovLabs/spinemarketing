import { SolutionDomainFeatures } from "@/components/marketing/solution-domain-features";

import { SignalStoryLayout } from "../_shared/SignalStoryLayout";

export function RetailContent() {
  return (
    <SignalStoryLayout
      domainFeatures={<SolutionDomainFeatures slug="retail" />}
      category="Retail & Ecommerce"
      headline="Act on signals. Not complaints."
      subheadline="Stock levels, order status, returns, and support — all connected. Problems surface before customers have to tell you."
      ctaLabel="See it with your data →"
      accentColor="rgba(236,72,153,0.4)"
      beforeAfter={[
        {
          before: "Your best-selling SKU runs out on a Friday afternoon. You find out Monday when the support tickets pile up.",
          after: "Sales velocity signals trigger reorder alerts 5 days before stock-out. You approve the replenishment order with one click.",
        },
        {
          before: "A customer who's spent $50K this year files a support ticket. They wait 3 hours in the standard queue like everyone else.",
          after: "VIP automatically identified. Their ticket jumps the queue. The agent sees their full purchase history and lifetime value before answering.",
        },
        {
          before: "Returns for a specific hoodie jump 40% over two weeks. Nobody notices the pattern until the quarterly review.",
          after: "AI detects the return spike on day 3, correlates it with a specific production batch, and flags the supplier — all before reviews tank.",
        },
        {
          before: "Customer calls about a missing item. Agent checks Shopify, then the warehouse system, then the returns portal. 12 minutes per ticket.",
          after: "Agent opens the ticket and sees live stock, order tracking, and return history in one view. Reserves a replacement in 90 seconds.",
        },
      ]}
      signals={[
        { label: "Inventory & sales data connected", detail: "Shopify, WooCommerce, warehouse feeds — live stock levels, velocity, return rates, and customer lifetime value flowing into one view." },
        { label: "Return anomaly detected", detail: "Returns for Product X up 40% this week. AI traces it to batch #2847 from Supplier Y. Evidence attached." },
        { label: "VIP customer flagged", detail: "Customer with $50K lifetime value just filed a support ticket. Auto-prioritized with full purchase history." },
        { label: "Stock-out risk identified", detail: "SKU-1234 selling 3× faster than replenishment rate. At current velocity, you'll be out in 5 days." },
        { label: "Actions drafted, you approve", detail: "Replenishment order, supplier inquiry, VIP outreach — each one drafted with evidence. You review and approve." },
      ]}
      capabilities={[
        { title: "Support agents who know what's in stock", desc: "When a customer reaches out, your team sees live inventory and can reserve replacements in the same ticket view." },
        { title: "Spot return patterns before they become crises", desc: "AI connects return reasons with specific batches and suppliers. You see the trend forming, not individual cases." },
        { title: "VIP customers get treated like VIPs", desc: "High-value customers automatically identified and prioritized. Your best customers get the attention they deserve." },
        { title: "Reorder alerts based on actual demand", desc: "Inventory signals connected to real sales velocity, not static thresholds set six months ago." },
      ]}
      governance="Recovery offers and outbound messages require your approval before sending. Every action is logged."
      connectors={["Shopify", "WooCommerce", "NetSuite", "Zendesk", "Loop", "Gorgias", "Klaviyo", "Stripe"]}
      metrics={["Customer Lifetime Value", "Return Rate", "Support Resolution Time", "Stock-Out Frequency"]}
      outcomes={[
        { stat: "5-7%", label: "Inventory Turn ↑" },
        { stat: "4%", label: "Repeat Purchase ↑" },
        { stat: "90 sec", label: "Resolution Time" },
      ]}
    />
  );
}
