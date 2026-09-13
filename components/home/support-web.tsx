import Image from "next/image"
import { CircleDot } from "lucide-react"

const points = [
  {
    title: "Zone-mapped compression",
    body: "Support panels are placed by circulation zone, not woven uniformly like generic tights.",
  },
  {
    title: "Graduated by design",
    body: "Firmer at the extremities and easing upward to encourage healthy blood flow.",
  },
  {
    title: "Moves with you",
    body: "Four-way stretch and flatlock seams stay comfortable through a full day of standing.",
  },
]

export function SupportWeb() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative order-last aspect-square overflow-hidden rounded-3xl bg-muted lg:order-first">
          <Image
            src="/images/support-map.png"
            alt="Diagram showing the Support-Web compression zones mapped across the leg"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-teal">The Support-Web</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-foreground text-balance sm:text-3xl">
            Our signature construction, engineered around your circulation.
          </h2>
          <p className="mt-3 text-muted-foreground text-pretty">
            The Support-Web is the framework behind our firmest pieces — a
            network of graduated support panels designed with input from the
            community it serves.
          </p>
          <ul className="mt-8 space-y-5">
            {points.map((point) => (
              <li key={point.title} className="flex gap-3">
                <CircleDot className="mt-0.5 size-5 shrink-0 text-coral" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                    {point.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
