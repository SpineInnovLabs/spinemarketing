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
    question: "Does SpineWorkspace replace our tools?",
    answer: "No. The tools you already use keep the record: customers, tickets, billing, contracts, and approvals. SpineWorkspace shows the work. The evidence for this person and this task stays evidence. Twin's draft is not the record.",
  },
  {
    question: "What are the Workspace and Twin?",
    answer: "The Workspace is where you see the truth for an account, the context for this task, and the proposal waiting for review. Twin prepares that proposal from the evidence it is allowed to use. A person accepts, edits, or rejects it. The source system stays authoritative.",
  },
  {
    question: "How is SpineWorkspace different from a CRM or a dashboard tool?",
    answer: "A CRM, a billing system, or a ticket tool holds the truth. SpineWorkspace does not replace that record. It assembles the context for this person and this task, and Twin prepares a proposal. Nothing becomes a decision until a person accepts it.",
  },
  {
    question: "Does Twin act on its own?",
    answer: "No. Twin opens only when someone asks. It prepares a proposal, and every claim points back to its source. A person allows it, changes it, or stops it. Twin does not write the record.",
  },
  {
    question: "How many apps can I connect?",
    answer: "Starter supports up to 5 connectors, Growth supports up to 15, and Command offers unlimited connectors. The catalog includes Salesforce, HubSpot, Stripe, Slack, Jira, Zendesk, Gmail, Notion, and more — see the integrations page for the full list.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We follow SOC 2 aligned practices — no certification is claimed on this site. SpineWorkspace reads data via OAuth with the minimum permissions required. Your data is never used to train AI models. Command tier includes SSO, RBAC with field-level permissions, and a full enterprise audit trail.",
  },
  {
    question: "Can I start with just the Workspace?",
    answer: "Yes. Starter includes the Workspace, where you see the truth from connected systems and the context for the current task. Growth adds Twin, which prepares proposals for a person to review.",
  },
  {
    question: "What are Session Summaries?",
    answer: "When you work with Twin, a session summary records what was discussed, what was proposed, and what a person accepted. A summary is context for later work. It does not replace the record.",
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
