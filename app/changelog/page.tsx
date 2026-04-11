import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Changelog | IntegrateWise",
  description: "What's new in IntegrateWise — product updates, new connectors, and improvements.",
}

const entries = [
  {
    date: "April 2026",
    title: "Launch",
    items: [
      "Website live with full product, solutions, and pricing pages",
      "Firebase Analytics integrated",
      "Contact form with email fallback",
    ],
  },
]

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <section className="mx-auto max-w-[800px] px-6 pt-[140px] pb-24 md:px-16">
          <h1 className="text-[36px] font-semibold tracking-[-0.04em] leading-[1.2] sm:text-[44px]">Changelog</h1>
          <p className="mt-4 max-w-xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
            What&apos;s new in IntegrateWise.
          </p>

          <div className="mt-16 space-y-12">
            {entries.map((entry) => (
              <div key={entry.date}>
                <div className="text-[13px] font-semibold uppercase tracking-widest text-primary">{entry.date}</div>
                <h2 className="mt-2 text-[20px] font-semibold tracking-[-0.03em]">{entry.title}</h2>
                <ul className="mt-4 space-y-2">
                  {entry.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] font-medium text-foreground/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
