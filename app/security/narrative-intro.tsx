"use client";

import { PageHero } from "@/components/marketing/page-hero";
import { ContentSections } from "@/components/marketing/content-section";
import { pages } from "@/lib/site-copy";

export function SecurityNarrativeIntro() {
  const page = pages.securityPage;
  return (
    <>
      <PageHero {...page.hero} />
      <ContentSections sections={page.sections} />
    </>
  );
}
