"use client";

import { motion } from "framer-motion";
import { ShoppingCart, RotateCcw, AlertCircle } from "lucide-react";
import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

const signals = [
  {
    icon: AlertCircle,
    title: "Stock running out, reorder not triggered",
    desc: "Inventory shows 3 days of stock left. The reorder threshold hasn't been updated since last season. Two customer orders are pending. The Spine surfaces the shortfall before the first stockout.",
  },
  {
    icon: RotateCcw,
    title: "Return rate spiking on one SKU",
    desc: "Returns data shows a 40% rate on a product launched 3 weeks ago. Support has 12 complaints about the same issue. CRM shows 3 enterprise buyers who ordered in bulk. The Twin drafts the alert and outreach plan — you approve.",
  },
  {
    icon: ShoppingCart,
    title: "Abandoned cart + support ticket open",
    desc: "A customer abandoned a high-value order 2 hours ago and has a support ticket still open from last week. The Spine connects ecommerce and support. The Twin recommends the right intervention at the right moment.",
  },
];

const whatMatters = [
  { title: "Stock", desc: "Connect inventory systems to sales forecasts and reorder workflows. Know what's running low before the customer order fails." },
  { title: "Orders", desc: "Track every order from placement to delivery, across fulfilment, logistics, and customer support — in one workspace." },
  { title: "Returns", desc: "Surface return patterns by SKU, supplier, or customer segment. Spot quality and fulfilment issues before they compound." },
  { title: "Support", desc: "Connect customer support to order history, product data, and account value. Every support interaction is in context." },
];

export function RetailContent() {
  return (
    <IndustrySolutionLayout
      category="Retail & Ecommerce"
      headline="Stock, orders, returns, support — one connected workspace."
      subheadline="Retail and ecommerce teams manage operations across inventory, ecommerce, logistics, and support platforms. The Spine connects them all. Act before the complaint arrives."
      whatMatters={whatMatters}
      signals={signals}
      l1Title="Operating workspace for retail teams"
      l1Desc="See inventory levels, order status, return rates, and open support tickets in one workspace — live from every connected platform. Manage exceptions, coordinate across teams, and act on signals before customers are affected."
      l2Title="Intelligence Layer for retail signals"
      l2Desc="The Twin reads stock, orders, returns, and support through the Spine. It surfaces shortfalls, spikes, and at-risk customers — with evidence from every connected app. You approve before any action executes."
    />
  );
}
