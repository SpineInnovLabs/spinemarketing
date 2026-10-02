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
    question: "What is the Spine Fabric?",
    answer: "Spine Fabric is the shared contextual operating layer underneath SpineWorkspace. It connects to your apps via OAuth, normalizes records from every system into a unified model, and preserves them with provenance. Think of it as a live, governed context layer — not a data warehouse. It's what makes Entity 360 views, AI reasoning, and cross-app actions possible.",
  },
  {
    question: "What are the Workspace and Twin?",
    answer: "The Workspace is where you see accounts, tasks, workflows, and engagement logs in one view. The Twin is your personal AI operator — it reads your data through Spine Fabric, spots patterns, drafts actions, and presents them with evidence. You approve everything from the Workspace.",
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
    answer: "Starter supports up to 5 connectors, Growth supports up to 15, and Command offers unlimited connectors. The catalog includes Salesforce, HubSpot, Stripe, Slack, Jira, Zendesk, Gmail, Notion, and more — see the integrations page for the full list.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We follow SOC 2 aligned practices — no certification is claimed on this site. Spine Fabric reads data via OAuth with the minimum permissions required. Your data is never used to train AI models. Command tier includes SSO, RBAC with field-level permissions, and a full enterprise audit trail.",
  },
  {
    question: "Can I start with just the Workspace?",
    answer: "Absolutely. Our Starter tier gives you the Workspace with full Entity 360 views, unified tasks, workflows, and basic health signals. When you're ready, upgrade to Growth to unlock the Twin and it starts reasoning across your data.",
  },
  {
    question: "What are Session Summaries?",
    answer: "When you interact with the Twin, each conversation generates a Session Summary — a structured record of what was discussed, what was proposed, and what was approved. These summaries pass through Governance before entering Spine Fabric's knowledge, ensuring your system's memory is always accurate and human-verified.",
  },
];

export const defaultFAQs = platformFAQs;

export function FAQSection({ heading, subheading, items }: FAQSectionProps) {
  return (
    <section className="relative overflow-hidden border-t border-[#E5E5E5] bg-[#F3F6F9] py-20 md:py-28">
      <div className="relative mx-auto max-w-[720px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mb-12 text-center"
        >
          <h2 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#032D60] sm:text-[40px]">
            {heading ?? "Frequently asked questions"}
          </h2>
          {subheading && (
            <p className="mt-4 text-[16px] leading-relaxed text-[#444]">
              {subheading}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.1 }}
          className="rounded-md border border-[#E5E5E5] bg-white px-2"
        >
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-[#E5E5E5] px-4">
                <AccordionTrigger className="text-left text-[15px] font-semibold text-[#032D60] hover:text-[#0176D3] hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] leading-relaxed text-[#444]">
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
