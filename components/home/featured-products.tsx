import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getFeatured } from "@/lib/products"
import { ProductCard } from "@/components/site/product-card"

export function FeaturedProducts() {
  const products = getFeatured()
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 lg:pb-28 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="section-heading text-foreground">
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
      <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  )
}
