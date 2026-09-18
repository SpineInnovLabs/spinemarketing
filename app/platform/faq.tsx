"use client";

import { FAQSection, defaultFAQs } from "@/components/faq-section";

export function PlatformFAQ() {
  return (
    <FAQSection
      heading="Platform questions"
      subheading="Understanding the Spine Fabric Architecture and how SpineWorkspace works."
      items={defaultFAQs}
    />
  );
}
