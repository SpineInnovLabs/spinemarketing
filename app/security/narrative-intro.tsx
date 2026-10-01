"use client";

import { PageHero } from "@/components/marketing/page-hero";
import { ContentSection } from "@/components/marketing/content-section";
import { pages } from "@/lib/site-copy";

export function SecurityNarrativeIntro() {
  const page = pages.securityPage;
  return (
    <>
      <PageHero {...page.hero} />
      {page.sections.map((section, i) => (
        <ContentSection key={section.headline} section={section} index={i} />
      ))}
    </>
  );
}
