"use client";

import { FAQSection, defaultFAQs } from "@/components/faq-section";

export function PlatformFAQ() {
  return (
    <FAQSection
      heading="Platform questions"
      subheading="Understanding the Adaptive Spine Architecture and how IntegrateWise works."
      items={defaultFAQs}
    />
  );
}
