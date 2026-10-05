import type { ContentRepository } from "@/lib/content/repository"
import type { Article, ArticleSummary, ListArticlesParams } from "@/lib/content/types"
import { createSanityClient } from "./client"
import { mapSanityArticle, mapSanityArticleSummary, type SanityArticleDoc } from "./map"
import { articleBySlugQuery, articleListQuery } from "./queries"

export class SanityContentRepository implements ContentRepository {
  async listArticles(params?: ListArticlesParams): Promise<ArticleSummary[]> {
    const client = createSanityClient()
    if (!client) return []

    const docs = await client.fetch<SanityArticleDoc[]>(articleListQuery, {
      kind: params?.kind ?? null,
      featured: params?.featured ?? null,
    })

    let list = docs.map(mapSanityArticleSummary)

    if (params?.status) {
      list = list.filter((a) => a.status === params.status)
    }
    if (params?.categorySlug) {
      list = list.filter((a) => a.category?.slug === params.categorySlug)
    }
    if (params?.limit) {
      list = list.slice(0, params.limit)
    }

    return list
  }

  async getArticleBySlug(slug: string): Promise<Article | null> {
    const client = createSanityClient()
    if (!client) return null

    const doc = await client.fetch<SanityArticleDoc | null>(articleBySlugQuery, { slug })
    if (!doc?.slug) return null
    return mapSanityArticle(doc)
  }
}

export function createSanityContentRepository(): ContentRepository {
  return new SanityContentRepository()
}
