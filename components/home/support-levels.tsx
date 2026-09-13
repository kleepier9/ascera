import Link from "next/link"
import { ArrowRight } from "lucide-react"

const levels = [
  {
    name: "Light Support",
    range: "Gentle everyday",
    description:
      "A soft, barely-there hug for lower-key days or those new to compression.",
    bar: 33,
  },
  {
    name: "Moderate",
    range: "15–20 mmHg",
    description:
      "Steady, all-day support for work, travel, and being on your feet.",
    bar: 66,
  },
  {
    name: "Firm",
    range: "20–30 mmHg",
    description:
      "Our strongest support, mapped to key circulation zones for upright days.",
    bar: 100,
  },
]

export function SupportLevels() {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/65">Know your support</p>
          <h2 className="mt-2 section-heading">
            Your day. Your level of support.
          </h2>
          <p className="mt-3 text-navy-foreground/70 text-pretty">
            No guesswork and no vague marketing. Every garment tells you exactly
            how much support it provides.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {levels.map((level) => (
            <div
              key={level.name}
              className="border-t border-white/25 py-8 md:pr-8"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-lg font-semibold">
                  {level.name}
                </h3>
                <span className="text-xs text-navy-foreground/60">
                  {level.range}
                </span>
              </div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-white/75"
                  style={{ width: `${level.bar}%` }}
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-navy-foreground/70">
                {level.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/support-finder"
            className="inline-flex items-center gap-1.5 rounded-sm bg-white px-5 py-2.5 text-sm font-medium uppercase tracking-[0.16em] text-white/65-foreground transition-colors hover:bg-teal/90"
          >
            Take the Support Finder
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
