"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { X, ShoppingBag, Trash2, ShieldCheck } from "lucide-react"
import { useCart, FREE_SHIPPING_THRESHOLD } from "@/lib/cart-context"
import { formatPrice } from "@/lib/format"
import { QuantityStepper } from "@/components/site/quantity-stepper"
import { Button } from "@/components/ui/button"

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    subtotal,
    count,
    removeItem,
    updateQuantity,
  } = useCart()

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [isOpen, closeCart])

  if (!isOpen) return null

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
        className="absolute inset-0 bg-navy/50 backdrop-blur-sm animate-in fade-in"
      />
      <div className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-background shadow-xl animate-in slide-in-from-right">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
            <ShoppingBag className="size-5" />
            Your Cart
            <span className="text-muted-foreground">({count})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="grid size-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="grid size-16 place-items-center rounded-full bg-muted">
              <ShoppingBag className="size-7 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium text-foreground">Your cart is empty</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Find the right support for how you move.
              </p>
            </div>
            <Button
              render={<Link href="/collections/all" />}
              nativeButton={false}
              onClick={closeCart}
            >
              Shop all products
            </Button>
          </div>
        ) : (
          <>
            <div className="border-b border-border px-5 py-3">
              {remaining > 0 ? (
                <p className="text-xs text-muted-foreground">
                  You&apos;re {formatPrice(remaining)} away from{" "}
                  <span className="font-medium text-foreground">free shipping</span>
                </p>
              ) : (
                <p className="text-xs font-medium text-teal">
                  You&apos;ve unlocked free shipping!
                </p>
              )}
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-teal transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <ul className="flex-1 divide-y divide-border overflow-y-auto px-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-4">
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium leading-snug text-foreground text-pretty">
                        {item.name}
                      </p>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        aria-label={`Remove ${item.name}`}
                        className="text-muted-foreground transition-colors hover:text-destructive"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {item.size} · {item.color}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <QuantityStepper
                        size="sm"
                        value={item.quantity}
                        onChange={(q) => updateQuantity(item.key, q)}
                      />
                      <span className="text-sm font-semibold text-foreground">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-border px-5 py-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold text-foreground">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Shipping and taxes calculated at checkout.
              </p>
              <Button
                render={<Link href="/checkout" />}
                nativeButton={false}
                size="lg"
                className="mt-4 w-full"
                onClick={closeCart}
              >
                Checkout
              </Button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 w-full text-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Continue shopping
              </button>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <ShieldCheck className="size-3.5 text-teal" />
                Secure checkout · 60-day returns
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
