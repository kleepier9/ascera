"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, Plus, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { formatPrice } from "@/lib/format"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/products"
import { Badge } from "@/components/ui/badge"
import { StarRating } from "@/components/site/star-rating"

export function ProductCard({ product }: { product: Product }) {
  const { addItem, toggleWishlist, isWishlisted } = useCart()
  const [showSizes, setShowSizes] = useState(false)
  const wished = isWishlisted(product.slug)

  const handleQuickAdd = (size: string) => {
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      color: product.colors[0].name,
    })
    setShowSizes(false)
  }

  return (
    <div className="group relative flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
        <Link href={`/products/${product.slug}`} className="relative block size-full">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={cn(
              "object-cover transition-opacity duration-500",
              "group-hover:opacity-0",
            )}
          />
          <Image
            src={product.hoverImage || "/placeholder.svg"}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </Link>

        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.badge ? (
            <Badge variant={product.badge === "New" ? "teal" : "default"}>
              {product.badge}
            </Badge>
          ) : null}
          {!product.inStock ? <Badge variant="muted">Sold out</Badge> : null}
        </div>

        <button
          type="button"
          onClick={() => toggleWishlist(product.slug)}
          aria-pressed={wished}
          aria-label={wished ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-card/90 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <Heart
            className={cn("size-4.5", wished && "fill-coral text-coral")}
          />
        </button>

        {product.inStock ? (
          <div className="absolute inset-x-3 bottom-3">
            {showSizes ? (
              <div className="rounded-xl bg-card/95 p-2 shadow-lg backdrop-blur">
                <p className="px-1 pb-1.5 text-xs font-medium text-muted-foreground">
                  Select a size
                </p>
                <div className="flex flex-wrap gap-1">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => handleQuickAdd(size)}
                      className="min-w-9 rounded-md border border-border px-2 py-1.5 text-xs font-medium transition-colors hover:border-teal hover:bg-teal hover:text-teal-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowSizes(true)}
                className="flex w-full items-center justify-center gap-1.5 rounded-full bg-navy py-2.5 text-sm font-medium text-navy-foreground opacity-0 shadow-lg transition-all duration-200 hover:bg-navy/90 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring group-hover:opacity-100 max-md:opacity-100"
              >
                <Plus className="size-4" />
                Quick Add
              </button>
            )}
          </div>
        ) : null}
      </div>

      <div className="mt-3 flex flex-1 flex-col">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{product.categoryLabel}</span>
          {product.category === "Compression" ? (
            <>
              <span aria-hidden="true">·</span>
              <span>{product.compression}</span>
            </>
          ) : null}
        </div>
        <h3 className="mt-1 text-sm font-medium leading-snug text-foreground text-pretty">
          <Link href={`/products/${product.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {product.name}
          </Link>
        </h3>
        <div className="mt-1.5 flex items-center gap-1.5">
          <StarRating rating={product.rating} />
          <span className="text-xs text-muted-foreground">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground">
            {formatPrice(product.price)}
          </span>
          <div className="flex items-center gap-1">
            {product.colors.map((color) => (
              <span
                key={color.name}
                title={color.name}
                className="size-3.5 rounded-full border border-border"
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
