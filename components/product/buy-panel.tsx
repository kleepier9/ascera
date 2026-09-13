"use client"

import { useState } from "react"
import { Heart, Check, ShoppingBag, Ruler, Truck, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"
import { formatPrice } from "@/lib/format"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { StarRating } from "@/components/site/star-rating"
import { QuantityStepper } from "@/components/site/quantity-stepper"
import { SizeGuide } from "@/components/product/size-guide"

export function BuyPanel({ product }: { product: Product }) {
  const { addItem, toggleWishlist, isWishlisted } = useCart()
  const [color, setColor] = useState(product.colors[0].name)
  const [size, setSize] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [error, setError] = useState(false)
  const [guideOpen, setGuideOpen] = useState(false)
  const wished = isWishlisted(product.slug)

  const handleAdd = () => {
    if (!size) {
      setError(true)
      return
    }
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      color,
      quantity,
    })
  }

  return (
    <div>
      <div className="flex items-center gap-2">
        <Badge variant="teal">{product.categoryLabel}</Badge>
        {product.badge ? <Badge>{product.badge}</Badge> : null}
      </div>

      <h1 className="mt-3 font-display text-3xl font-semibold text-foreground text-balance">
        {product.name}
      </h1>

      <div className="mt-3 flex items-center gap-3">
        <span className="text-2xl font-semibold text-foreground">
          {formatPrice(product.price)}
        </span>
        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <StarRating rating={product.rating} />
          {product.rating} ({product.reviewCount})
        </span>
      </div>

      <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
        {product.shortDescription}
      </p>

      {product.category === "Compression" ? (
        <div className="mt-5 flex items-center gap-3 rounded-xl border border-border bg-accent/40 p-4">
          <div className="grid size-10 place-items-center rounded-full bg-teal/15 text-teal">
            <Check className="size-5" />
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground">
              Support level
            </p>
            <p className="text-sm font-semibold text-foreground">
              {product.compression}
            </p>
          </div>
        </div>
      ) : null}

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-foreground">
            Color: <span className="text-muted-foreground">{color}</span>
          </p>
        </div>
        <div className="mt-2.5 flex gap-2.5">
          {product.colors.map((option) => (
            <button
              key={option.name}
              type="button"
              onClick={() => setColor(option.name)}
              aria-label={option.name}
              aria-pressed={color === option.name}
              className={cn(
                "relative size-9 rounded-full border transition-transform hover:scale-105",
                color === option.name
                  ? "ring-2 ring-teal ring-offset-2 ring-offset-background"
                  : "border-border",
              )}
              style={{ backgroundColor: option.hex }}
            />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-foreground">Size</p>
          <button
            type="button"
            onClick={() => setGuideOpen(true)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-teal transition-colors hover:text-teal/80"
          >
            <Ruler className="size-4" />
            Size guide
          </button>
        </div>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {product.sizes.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                setSize(option)
                setError(false)
              }}
              aria-pressed={size === option}
              className={cn(
                "min-w-12 rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors",
                size === option
                  ? "border-navy bg-navy text-navy-foreground"
                  : "border-border text-foreground hover:border-navy",
              )}
            >
              {option}
            </button>
          ))}
        </div>
        {error ? (
          <p className="mt-2 text-sm text-destructive">Please select a size.</p>
        ) : null}
      </div>

      <div className="mt-6 flex items-center gap-3">
        <QuantityStepper value={quantity} onChange={setQuantity} />
        <span className="text-sm text-muted-foreground">
          {product.lowStock ? "Only a few left in stock" : "In stock"}
        </span>
      </div>

      <div className="mt-6 flex gap-3">
        <Button
          size="lg"
          className="flex-1 rounded-full"
          onClick={handleAdd}
          disabled={!product.inStock}
        >
          <ShoppingBag className="size-4" />
          {product.inStock ? "Add to cart" : "Sold out"}
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="rounded-full"
          aria-pressed={wished}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => toggleWishlist(product.slug)}
        >
          <Heart className={cn("size-5", wished && "fill-coral text-coral")} />
        </Button>
      </div>

      <ul className="mt-6 space-y-2.5 border-t border-border pt-6 text-sm text-muted-foreground">
        <li className="flex items-center gap-2.5">
          <Truck className="size-4 text-teal" />
          Free shipping on orders over $100
        </li>
        <li className="flex items-center gap-2.5">
          <RefreshCw className="size-4 text-teal" />
          60-day fit guarantee with easy exchanges
        </li>
      </ul>

      <SizeGuide open={guideOpen} onClose={() => setGuideOpen(false)} />
    </div>
  )
}
