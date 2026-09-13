import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight } from "lucide-react"
import { products, getProduct } from "@/lib/products"
import { ProductGallery } from "@/components/product/product-gallery"
import { BuyPanel } from "@/components/product/buy-panel"
import { Accordion } from "@/components/site/accordion"
import { Disclaimer } from "@/components/site/disclaimer"
import { ProductReviews } from "@/components/product/product-reviews"
import { RelatedProducts } from "@/components/product/related-products"

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return { title: "Product not found" }
  return {
    title: product.name,
    description: product.shortDescription,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  const details = [
    {
      title: "Product details",
      content: (
        <div className="space-y-3">
          <p>{product.shortDescription}</p>
          <ul className="list-inside list-disc space-y-1">
            <li>Category: {product.categoryLabel}</li>
            {product.category === "Compression" ? (
              <li>Support level: {product.compression}</li>
            ) : null}
            <li>Body area: {product.bodyArea}</li>
            <li>Breathable, moisture-wicking, four-way stretch fabric</li>
            <li>Flatlock seams to reduce chafing</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Who it's designed for",
      content: <p>{product.designedFor}</p>,
    },
    {
      title: "Fabric & care",
      content: (
        <div className="space-y-2">
          <p>72% recycled nylon, 28% elastane. Compression-grade knit.</p>
          <p>
            Machine wash cold on gentle, lay flat to dry. Avoid fabric softener,
            bleach, and high heat to preserve compression over time.
          </p>
        </div>
      ),
    },
    {
      title: "Shipping & returns",
      content: (
        <p>
          Free shipping on orders over $100. 60-day fit guarantee — return or
          exchange unworn items in original condition for any reason.
        </p>
      ),
    },
  ]

  return (
    <div>
      <nav
        aria-label="Breadcrumb"
        className="mx-auto flex max-w-7xl items-center gap-1.5 px-4 py-4 text-sm text-muted-foreground sm:px-6 lg:px-8"
      >
        <Link href="/" className="transition-colors hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="size-4" />
        <Link
          href={
            product.category === "Compression"
              ? "/collections/compression"
              : "/collections/awareness-apparel"
          }
          className="transition-colors hover:text-foreground"
        >
          {product.category}
        </Link>
        <ChevronRight className="size-4" />
        <span className="truncate text-foreground">{product.name}</span>
      </nav>

      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductGallery images={product.gallery} name={product.name} />
          </div>
          <div>
            <BuyPanel product={product} />
            <div className="mt-8">
              <Accordion items={details} defaultOpen={[0]} />
            </div>
            <div className="mt-6">
              <Disclaimer />
            </div>
          </div>
        </div>
      </div>

      <ProductReviews rating={product.rating} reviewCount={product.reviewCount} />
      <RelatedProducts current={product} />
    </div>
  )
}
