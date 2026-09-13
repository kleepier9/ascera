import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StarRating } from "@/components/site/star-rating"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-20 lg:px-8">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full bg-lavender/40 px-3 py-1 text-xs font-medium text-lavender-foreground">
            <Heart className="size-3.5" />
            Made with the dysautonomia community
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            Compression that keeps you upright.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
            Thoughtfully engineered compression wear and awareness apparel,
            designed for how people with POTS and dysautonomia actually move
            through the day.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              render={<Link href="/collections/compression" />}
              nativeButton={false}
              size="lg"
              className="rounded-full"
            >
              Shop compression
              <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<Link href="/support-finder" />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              Find your support
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <StarRating rating={4.8} size={16} />
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">4.8/5</span> from
              1,000+ community reviews
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted">
            <Image
              src="/images/hero-leggings.png"
              alt="A person standing confidently wearing Vanté full-leg compression leggings"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 max-w-[220px] rounded-2xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur sm:-left-6">
            <p className="text-xs font-medium text-muted-foreground">
              Support-Web construction
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground text-pretty">
              Firm 20–30 mmHg mapped to key circulation zones
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
