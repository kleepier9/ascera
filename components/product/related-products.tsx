import { products, type Product } from "@/lib/products"
import { ProductCard } from "@/components/site/product-card"

export function RelatedProducts({ current }: { current: Product }) {
  const related = products
    .filter((p) => p.slug !== current.slug && p.category === current.category)
    .slice(0, 4)

  const filled =
    related.length >= 4
      ? related
      : [
          ...related,
          ...products
            .filter(
              (p) =>
                p.slug !== current.slug && !related.some((r) => r.slug === p.slug),
            )
            .slice(0, 4 - related.length),
        ]

  return (
    <section className="border-t border-border py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          You might also like
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
          {filled.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
