import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Mission() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:py-28 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 overflow-hidden rounded-none bg-muted lg:grid-cols-2">
        <div className="p-8 sm:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-teal">Our story</p>
          <h2 className="mt-2 section-heading text-foreground">
            Built by people who understand the daily reality.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Ascera started because the compression wear on the market was
            clinical, uncomfortable, or clearly not made with our community in
            mind. We set out to change that — designing pieces that provide real
            support and actually feel like something you want to wear.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
            A portion of every purchase supports dysautonomia research and
            awareness.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-[0.16em] text-teal transition-colors hover:text-teal/80"
          >
            Read our story
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="relative order-first aspect-[4/3] lg:order-last lg:aspect-auto lg:h-full">
          <Image
            src="/images/lifestyle.png"
            alt="Two people in Ascera apparel walking together outdoors"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
