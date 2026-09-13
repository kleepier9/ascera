"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/site/product-card"

export function WishlistView() {
  const { wishlist } = useCart()
  const saved = products.filter((p) => wishlist.includes(p.slug))

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-center gap-2">
        <Heart className="size-6 text-coral" />
        <h1 className="font-display text-3xl font-semibold text-foreground">
          Your Wishlist
        </h1>
      </div>
      <p className="mt-2 text-muted-foreground">
        {saved.length > 0
          ? `${saved.length} saved ${saved.length === 1 ? "item" : "items"}`
          : "Save pieces you love to find them here later."}
      </p>

      {saved.length > 0 ? (
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
          {saved.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-border py-16 text-center">
          <div className="mx-auto grid size-14 place-items-center rounded-full bg-muted">
            <Heart className="size-6 text-muted-foreground" />
          </div>
          <p className="mt-4 font-medium text-foreground">
            Your wishlist is empty
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Tap the heart on any product to save it here.
          </p>
          <Button
            className="mt-5 rounded-full"
            nativeButton={false}
            render={<Link href="/collections/all" />}
          >
            Browse products
          </Button>
        </div>
      )}
    </div>
  )
}
