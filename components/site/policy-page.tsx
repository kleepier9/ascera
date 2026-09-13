import type { ReactNode } from "react"

export type PolicySection = {
  heading: string
  paragraphs: string[]
}

export function PolicyPage({
  title,
  intro,
  sections,
  children,
}: {
  title: string
  intro: string
  sections?: PolicySection[]
  children?: ReactNode
}) {
  return (
    <div>
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <h1 className="font-display text-3xl font-semibold text-foreground text-balance sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-muted-foreground text-pretty">{intro}</p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        {sections?.map((section) => (
          <section key={section.heading} className="mt-8 first:mt-0">
            <h2 className="font-display text-xl font-semibold text-foreground">
              {section.heading}
            </h2>
            {section.paragraphs.map((p, i) => (
              <p
                key={i}
                className="mt-3 leading-relaxed text-muted-foreground text-pretty"
              >
                {p}
              </p>
            ))}
          </section>
        ))}
        {children}
      </div>
    </div>
  )
}
