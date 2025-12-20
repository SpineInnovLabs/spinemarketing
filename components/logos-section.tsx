export function LogosSection() {
  const logos = ["Granola", "Coca-Cola", "Flatfile", "Modal", "USV", "Replicate", "Bravado", "Legora"]

  return (
    <section id="logos" aria-label="Customer logos" className="border-y border-border/10 bg-card/5 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 opacity-40 grayscale">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="text-base font-semibold tracking-wide text-foreground/50">{logo}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
