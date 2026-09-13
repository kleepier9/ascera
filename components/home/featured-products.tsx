import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getFeatured } from "@/lib/products"
import { ProductCard } from "@/components/site/product-card"

export function FeaturedProducts() {
  const products = getFeatured()
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-semibold text-foreground text-balance sm:text-3xl">
            Community favorites
          </h2>
          <p className="mt-1.5 max-w-md text-sm text-muted-foreground text-pretty">
            The pieces our community reaches for most, across every support
            level.
          </p>
        </div>
        <Link
          href="/collections/all"
          className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-teal transition-colors hover:text-teal/80 sm:inline-flex"
        >
          View all
          <ArrowRight className="size-4" />
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  )
}
