"use client";

import { FAQSection, defaultFAQs } from "@/components/faq-section";

export function PlatformFAQ() {
  return (
    <FAQSection
      heading="Platform questions"
      subheading="The tools keep the record. The workspace shows the work. A person decides."
      items={defaultFAQs}
    />
  );
}
