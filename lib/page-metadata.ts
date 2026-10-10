import type { Metadata } from "next";
import { absoluteUrl, publicSiteUrl } from "@/lib/site-url";

const shareImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Spine InnovTech",
} as const;

function corporateTitle(title: string): string {
  const normalized = title
    .replace(/SpineWorkspace/g, "Spine Workspace")
    .replace(/\s*\|\s*Spine Workspace\s*$/, "")
    .trim();
  return normalized.includes("Spine InnovTech")
    ? normalized
    : `${normalized} | Spine InnovTech`;
}

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = corporateTitle(title);
  const descriptionText = description.replace(/SpineWorkspace/g, "Spine Workspace");
  return {
    title: { absolute: fullTitle },
    description: descriptionText,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description: descriptionText,
      url: absoluteUrl(path),
      siteName: "Spine InnovTech",
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: descriptionText,
      images: [shareImage.url],
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
