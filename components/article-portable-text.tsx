import { PortableText, type PortableTextComponents } from "@portabletext/react"
import type { PortableTextBlock } from "@portabletext/types"
import Link from "next/link"

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 text-[22px] font-semibold tracking-[-0.03em] text-foreground">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 text-[18px] font-semibold tracking-[-0.03em] text-foreground">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-primary/30 pl-4 text-muted-foreground italic">{children}</blockquote>
    ),
    normal: ({ children }) => <p className="my-4">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="my-4 list-none space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="my-4 list-decimal space-y-2 pl-6">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="ml-4 flex items-start gap-2">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href as string | undefined
      if (!href) return <>{children}</>
      const external = href.startsWith("http")
      if (external) {
        return (
          <a href={href} className="font-semibold text-primary hover:underline" rel="noopener noreferrer" target="_blank">
            {children}
          </a>
        )
      }
      return (
        <Link href={href} className="font-semibold text-primary hover:underline">
          {children}
        </Link>
      )
    },
    strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
    code: ({ children }) => (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[14px]">{children}</code>
    ),
  },
}

export function ArticlePortableText({ value }: { value: PortableTextBlock[] }) {
  if (!value?.length) return null
  return (
    <div className="text-[16px] font-medium leading-[1.8] tracking-[-0.01em] text-foreground/80">
      <PortableText value={value} components={components} />
    </div>
  )
}
