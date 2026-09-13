import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const tiles = [
  {
    title: "Compression Wear",
    description: "Full-leg, abdominal, and calf support in light to firm levels.",
    href: "/collections/compression",
    image: "/images/leggings.png",
  },
  {
    title: "Awareness Apparel",
    description: "Wearable pieces that start conversations, not stares.",
    href: "/collections/awareness-apparel",
    image: "/images/tee-tempo.png",
  },
]

export function CategoryTiles() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24 sm:px-6 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-2">
        {tiles.map((tile) => (
          <Link
            key={tile.href}
            href={tile.href}
            className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-none bg-muted"
          >
            <Image
              src={tile.image || "/placeholder.svg"}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
            <div className="relative p-6 text-navy-foreground sm:p-8">
              <h2 className="section-heading">
                {tile.title}
              </h2>
              <p className="mt-1.5 max-w-xs text-sm text-navy-foreground/80 text-pretty">
                {tile.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
                Shop now
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
