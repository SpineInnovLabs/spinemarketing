"use client";

import { motion } from "framer-motion";
import { Truck, Package, CreditCard } from "lucide-react";
import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

const signals = [
  {
    icon: Package,
    title: "Shipment delayed, customer not notified",
    desc: "Logistics shows a 5-day delay. CRM shows the customer has a hard deadline. Support has no open ticket — yet. The Spine connects all three. The Twin drafts the outreach. You approve.",
  },
  {
    icon: CreditCard,
    title: "Payment overdue on a key account",
    desc: "Three invoices are outstanding. A new order just came in from the same account. Finance, sales, and operations each have a piece of the picture. The Spine surfaces the risk before the order ships.",
  },
  {
    icon: Truck,
    title: "Supplier exception affecting three orders",
    desc: "A supplier delivery slipped. Three downstream orders are now at risk. The Spine connects ERP, logistics, and CRM to surface the cascade — and draft the customer communications for your approval.",
  },
];

const whatMatters = [
  { title: "Orders", desc: "Track every order status — from placement to delivery — across ERP, logistics, and customer systems. One view, live." },
  { title: "Shipments", desc: "Connect logistics tracking to customer CRM. Know which shipments are at risk and which customers need to be proactively updated." },
  { title: "Payments", desc: "See every invoice and payment status alongside order history. Catch collections risk before it becomes a relationship problem." },
  { title: "Exceptions", desc: "Surface supply chain exceptions — delays, shortfalls, quality holds — before they reach the customer. Act before the complaint arrives." },
];

export function ManufacturingContent() {
  return (
    <IndustrySolutionLayout
      category="Manufacturing & Trade"
      headline="Orders, shipments, and exceptions — one operating workspace."
      subheadline="Manufacturing and trade teams manage operations across ERP, logistics, CRM, and finance. The Spine connects them all. One workspace to run the business."
      whatMatters={whatMatters}
      signals={signals}
      l1Title="Operating workspace for manufacturing teams"
      l1Desc="See every order, shipment, payment, and supplier status in one workspace — live from ERP, logistics, and CRM. Track exceptions, manage escalations, and coordinate across operations, sales, and finance from one place."
      l2Title="Intelligence Layer for operations signals"
      l2Desc="The Twin reads orders, shipments, payments, and supplier data through the Spine. It surfaces exceptions before they reach customers and drafts recommended actions — with the full context from every connected app. You approve before anything moves."
    />
  );
}
