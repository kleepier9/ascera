import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { StarRating } from "@/components/site/star-rating"

export function Hero() {
  return (
    <section className="overflow-hidden bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
        <div className="flex flex-col items-start justify-center px-6 py-16 sm:px-12 sm:py-20 lg:px-16 xl:px-24">
          <p className="max-w-sm text-sm leading-relaxed tracking-[0.12em] text-white/65">
            MADE WITH THE DYSAUTONOMIA COMMUNITY
          </p>
          <h1 className="mt-8 max-w-xl font-display text-[clamp(3rem,5.5vw,5.5rem)] font-normal leading-[1.04] tracking-[-0.055em] text-balance">
            Compression that keeps you upright.
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
            Thoughtfully engineered compression wear and awareness apparel,
            designed for how people with POTS and dysautonomia actually move
            through the day.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-5">
            <Link
              href="/collections/compression"
              className="inline-flex min-h-12 items-center justify-center gap-5 bg-white px-6 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Shop compression <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/support-finder"
              className="border-b border-white/40 py-2 text-sm font-medium transition-colors hover:border-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Find your support
            </Link>
          </div>
          <div className="mt-12 flex w-full max-w-md flex-wrap items-center gap-3 border-t border-white/15 pt-6">
            <StarRating rating={4.8} size={14} />
            <p className="text-sm text-white/65">
              <span className="font-medium text-white">4.8/5</span> from 1,000+ community reviews
            </p>
          </div>
        </div>
        <div className="relative min-h-[480px] bg-muted sm:min-h-[600px] lg:min-h-[740px]">
          <Image
            src="/images/hero-leggings.png"
            alt="A person standing confidently wearing Ascera full-leg compression leggings"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-7 pt-20 sm:px-10">
            <div className="flex flex-wrap items-end justify-between gap-4 border-t border-white/40 pt-5">
              <p className="text-sm font-medium tracking-wide text-white">Support-Web construction</p>
              <p className="text-sm text-white/80">Firm support · 20–30 mmHg</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
