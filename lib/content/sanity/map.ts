import type { PortableTextBlock } from "@portabletext/types"
import type { Article, ArticleSummary, Author, Category, SeoFields, Topic } from "@/lib/content/types"

type SanityAuthor = {
  slug?: string
  name?: string
  role?: string
  bio?: string
  imageUrl?: string
}

type SanityCategory = {
  slug?: string
  title?: string
  description?: string
  pillar?: string
}

type SanityTopic = {
  slug?: string
  title?: string
}

export type SanityArticleDoc = {
  slug: string
  title: string
  subtitle?: string
  excerpt?: string
  kind?: Article["kind"]
  status?: Article["status"]
  publishedAt?: string
  updatedAt?: string
  featured?: boolean
  readingTimeLabel?: string
  tags?: string[]
  content?: PortableTextBlock[]
  seo?: SeoFields
  author?: SanityAuthor
  category?: SanityCategory | null
  topics?: SanityTopic[] | null
  heroImageUrl?: string
}

const FALLBACK_AUTHOR: Author = {
  slug: "spine-innovlabs-team",
  name: "Spine InnovTech Team",
}

function mapAuthor(raw?: SanityAuthor | null): Author {
  if (!raw?.name) return FALLBACK_AUTHOR
  return {
    slug: raw.slug ?? FALLBACK_AUTHOR.slug,
    name: raw.name,
    role: raw.role,
    bio: raw.bio,
    imageUrl: raw.imageUrl,
  }
}

function mapCategory(raw?: SanityCategory | null): Category | undefined {
  if (!raw?.title || !raw.slug) return undefined
  return {
    slug: raw.slug,
    title: raw.title,
    description: raw.description,
    pillar: raw.pillar,
  }
}

function mapTopics(raw?: SanityTopic[] | null): Topic[] {
  if (!raw?.length) return []
  return raw
    .filter((t): t is Required<Pick<SanityTopic, "slug" | "title">> => Boolean(t.slug && t.title))
    .map((t) => ({ slug: t.slug, title: t.title }))
}

export function mapSanityArticleSummary(doc: SanityArticleDoc): ArticleSummary {
  return {
    slug: doc.slug,
    title: doc.title,
    subtitle: doc.subtitle,
    excerpt: doc.excerpt ?? "",
    kind: doc.kind ?? "blog",
    status: doc.status ?? "published",
    publishedAt: doc.publishedAt ?? new Date().toISOString().slice(0, 10),
    updatedAt: doc.updatedAt,
    author: mapAuthor(doc.author),
    category: mapCategory(doc.category),
    topics: mapTopics(doc.topics),
    tags: doc.tags ?? [],
    featured: Boolean(doc.featured),
    readingTimeLabel: doc.readingTimeLabel,
    heroImageUrl: doc.heroImageUrl,
  }
}

export function mapSanityArticle(doc: SanityArticleDoc): Article {
  const summary = mapSanityArticleSummary(doc)
  return {
    ...summary,
    content: doc.content ?? [],
    seo: doc.seo,
  }
}
