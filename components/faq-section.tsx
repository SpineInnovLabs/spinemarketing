"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQSectionProps {
  heading?: string;
  subheading?: string;
  items: FAQItem[];
}

const platformFAQs: FAQItem[] = [
  {
    question: "What is the Adaptive Spine?",
    answer: "The Spine is SpineWorkspace's data backbone. It connects to your apps via OAuth, normalizes records from every system into a unified model, and keeps everything in sync. Think of it as a live, cross-system database — not a data warehouse. It's what makes Entity 360 views, AI reasoning, and cross-app actions possible.",
  },
  {
    question: "What are the Workspace and Cognitive Layer?",
    answer: "The Workspace is where you see accounts, tasks, workflows, and engagement logs in one view. The Cognitive Layer is where the AI Twin reads your data through the Spine, spots patterns, drafts actions, and presents them with evidence. You approve everything from the Workspace.",
  },
  {
    question: "How is SpineWorkspace different from a CRM or a dashboard tool?",
    answer: "CRMs store your sales data. Dashboard tools visualize metrics. SpineWorkspace connects all your tools — CRM, support, billing, project management — into one live workspace where AI reasons across the full picture and proposes actions with evidence. Nothing happens without your approval.",
  },
  {
    question: "What does 'human-in-the-loop' actually mean?",
    answer: "Every AI-generated insight, recommendation, or proposed action is presented to you with evidence from your connected apps. You review the reasoning and approve, modify, or reject. Approved actions are logged in an immutable decision record. The AI never acts autonomously.",
  },
  {
    question: "How many apps can I connect?",
    answer: "Starter supports up to 5 connectors, Growth supports up to 15, and Command offers unlimited connectors. We support 70+ apps including Salesforce, HubSpot, Stripe, Slack, Jira, Zendesk, Gmail, Notion, and more.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We're SOC 2 Type II compliant. The Spine reads data via OAuth with the minimum permissions required. Your data is never used to train AI models. Command tier includes SSO, RBAC with field-level permissions, and a full enterprise audit trail.",
  },
  {
    question: "Can I start with just the Workspace?",
    answer: "Absolutely. Our Starter tier gives you the Workspace with full Entity 360 views, unified tasks, workflows, and basic health signals. When you're ready, upgrade to Growth to unlock the Cognitive Layer where the Twin starts reasoning across your data.",
  },
  {
    question: "What are Session Summaries?",
    answer: "When you interact with the Twin in the Cognitive Layer, each conversation generates a Session Summary — a structured record of what was discussed, what was proposed, and what was approved. These summaries pass through the Approval Gate before entering the Spine's knowledge, ensuring your system's memory is always accurate and human-verified.",
  },
];

export const defaultFAQs = platformFAQs;

export function FAQSection({ heading, subheading, items }: FAQSectionProps) {
  return (
    <section className="relative overflow-hidden py-28 md:py-36" style={{ background: "#05070A" }}>
      <div className="relative mx-auto max-w-[720px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mb-14 text-center"
        >
          <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[48px]">
            {heading ?? "Frequently asked questions"}
          </h2>
          {subheading && (
            <p className="mt-5 text-[16px] font-medium leading-relaxed text-white/40">
              {subheading}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/[0.06]">
                <AccordionTrigger className="text-left text-[15px] font-semibold text-white/80 hover:text-primary hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] leading-relaxed text-white/45">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
