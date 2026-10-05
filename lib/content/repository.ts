import type { Article, ArticleSummary, ListArticlesParams } from "./types"

export interface ContentRepository {
  listArticles(params?: ListArticlesParams): Promise<ArticleSummary[]>
  getArticleBySlug(slug: string): Promise<Article | null>
}
