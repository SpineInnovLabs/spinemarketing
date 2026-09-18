export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function SoftwareApplicationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SpineWorkspace",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://integratewise.ai",
    description:
      "The self-organizing Knowledge Workspace where people and AI work from the same live business context. Built by IntegrateWise — the operational continuity platform.",
    offers: {
      "@type": "Offer",
      price: "49",
      priceCurrency: "USD",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function FAQPageJsonLd({ questions }: { questions: { question: string; answer: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function WebPageJsonLd({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: "SpineWorkspace",
      url: "https://integratewise.ai",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
