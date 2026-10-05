import type { Metadata } from "next";
import { absoluteUrl, publicSiteUrl } from "@/lib/site-url";

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = title.includes("SpineWorkspace") || title.includes("Spine InnovLabs")
    ? title
    : `${title} | SpineWorkspace`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
    },
  };
}

export function breadcrumb(path: string, name: string, parents: { name: string; path: string }[] = []) {
  return [
    { name: "Home", url: publicSiteUrl },
    ...parents.map((p) => ({ name: p.name, url: absoluteUrl(p.path) })),
    { name, url: absoluteUrl(path) },
  ];
}
