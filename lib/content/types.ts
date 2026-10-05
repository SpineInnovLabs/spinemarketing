import type { PortableTextBlock } from "@portabletext/types"

export type ContentStatus = "draft" | "review" | "published" | "archived"

export type ArticleKind = "blog" | "research" | "news" | "update"

export type SeoFields = {
  title?: string
  description?: string
  canonicalPath?: string
  noIndex?: boolean
}

export type Author = {
  slug: string
  name: string
  role?: string
  bio?: string
  imageUrl?: string
}

export type Category = {
  slug: string
  title: string
  description?: string
  pillar?: string
}

export type Topic = {
  slug: string
  title: string
}

export type ArticleSummary = {
  slug: string
  title: string
  subtitle?: string
  excerpt: string
  kind: ArticleKind
  status: ContentStatus
  publishedAt: string
  updatedAt?: string
  author: Author
  category?: Category
  topics: Topic[]
  tags: string[]
  featured: boolean
  readingTimeLabel?: string
  heroImageUrl?: string
}

export type Article = ArticleSummary & {
  content: PortableTextBlock[]
  seo?: SeoFields
}

export type ListArticlesParams = {
  kind?: ArticleKind
  status?: ContentStatus
  featured?: boolean
  categorySlug?: string
  limit?: number
}
