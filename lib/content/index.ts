import { LegacyContentRepository } from "./legacy/adapter"
import type { ContentRepository } from "./repository"
import { createSanityContentRepository } from "./sanity/adapter"
import { isSanityConfigured } from "./sanity/client"

let cached: ContentRepository | null = null

/**
 * Resolves content at build time (static export). Defaults to Sanity when
 * SANITY_PROJECT_ID is set; otherwise falls back to legacy TS posts for local dev.
 */
export function getContentRepository(): ContentRepository {
  if (cached) return cached

  const provider = process.env.CONTENT_PROVIDER ?? "sanity"

  if (provider === "legacy" || !isSanityConfigured()) {
    if (provider !== "legacy" && !isSanityConfigured()) {
      console.warn(
        "[content] SANITY_PROJECT_ID not set; using legacy content/blog fallback. Set Sanity env vars for CMS.",
      )
    }
    cached = new LegacyContentRepository()
    return cached
  }

  cached = createSanityContentRepository()
  return cached
}

export type { ContentRepository } from "./repository"
export type {
  Article,
  ArticleKind,
  ArticleSummary,
  Author,
  Category,
  ContentStatus,
  ListArticlesParams,
  SeoFields,
  Topic,
} from "./types"
