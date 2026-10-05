const publishedFilter = `!(_id in path("drafts.**")) && status == "published"`

export const articleListQuery = `
*[_type == "article" && ${publishedFilter} && ($kind == null || kind == $kind) && ($featured == null || featured == $featured)] | order(publishedAt desc) {
  "slug": slug.current,
  title,
  subtitle,
  excerpt,
  kind,
  status,
  publishedAt,
  updatedAt,
  featured,
  readingTimeLabel,
  tags,
  "author": author->{
    "slug": slug.current,
    name,
    role,
    bio,
    "imageUrl": image.asset->url
  },
  "category": category->{
    "slug": slug.current,
    title,
    description,
    pillar
  },
  "topics": topics[]->{
    "slug": slug.current,
    title
  },
  "heroImageUrl": featuredImage.asset->url
}
`

export const articleBySlugQuery = `
*[_type == "article" && ${publishedFilter} && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  subtitle,
  excerpt,
  kind,
  status,
  publishedAt,
  updatedAt,
  featured,
  readingTimeLabel,
  tags,
  content,
  seo,
  "author": author->{
    "slug": slug.current,
    name,
    role,
    bio,
    "imageUrl": image.asset->url
  },
  "category": category->{
    "slug": slug.current,
    title,
    description,
    pillar
  },
  "topics": topics[]->{
    "slug": slug.current,
    title
  },
  "heroImageUrl": featuredImage.asset->url
}
`
