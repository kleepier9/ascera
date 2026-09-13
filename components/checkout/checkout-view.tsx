"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ShoppingBag,
  Lock,
  CheckCircle2,
  Truck,
  CreditCard,
} from "lucide-react"
import { useCart, FREE_SHIPPING_THRESHOLD } from "@/lib/cart-context"
import { formatPrice } from "@/lib/format"
import { Button } from "@/components/ui/button"
import { Disclaimer } from "@/components/site/disclaimer"

function Field({
  id,
  label,
  type = "text",
  autoComplete,
  className,
  placeholder,
}: {
  id: string
  label: string
  type?: string
  autoComplete?: string
  className?: string
  placeholder?: string
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-1.5 h-11 w-full rounded-lg border border-border bg-card px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-teal focus-visible:ring-2 focus-visible:ring-teal/25"
      />
    </div>
  )
}

export function CheckoutView() {
  const { items, subtotal, count, clear } = useCart()
  const [placed, setPlaced] = useState(false)

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 8
  const tax = Math.round(subtotal * 0.08 * 100) / 100
  const total = subtotal + shipping + tax

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setPlaced(true)
    clear()
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  if (placed) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-20 text-center sm:px-6">
        <div className="grid size-16 place-items-center rounded-full bg-teal/12 text-teal">
          <CheckCircle2 className="size-8" />
        </div>
        <h1 className="mt-6 font-display text-3xl font-semibold text-foreground text-balance">
          Thank you for your order
        </h1>
        <p className="mt-3 text-muted-foreground text-pretty">
          This is a demo checkout, so no payment was taken. In a live store,
          a confirmation email with tracking would be on its way to you.
        </p>
        <Button
          size="lg"
          className="mt-8 rounded-full"
          nativeButton={false}
          render={<Link href="/collections/all" />}
        >
          Continue shopping
        </Button>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-20 text-center sm:px-6">
        <div className="grid size-16 place-items-center rounded-full bg-muted">
          <ShoppingBag className="size-7 text-muted-foreground" />
        </div>
        <h1 className="mt-6 font-display text-2xl font-semibold text-foreground">
          Your cart is empty
        </h1>
        <p className="mt-2 text-muted-foreground text-pretty">
          Add a few pieces before heading to checkout.
        </p>
        <Button
          size="lg"
          className="mt-8 rounded-full"
          nativeButton={false}
          render={<Link href="/collections/all" />}
        >
          Shop all products
        </Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-semibold text-foreground">
        Checkout
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-8 grid gap-10 lg:grid-cols-[1fr_400px]"
      >
        <div className="space-y-10">
          <section>
            <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
              <span className="grid size-6 place-items-center rounded-full bg-navy text-xs text-navy-foreground">
                1
              </span>
              Contact
            </h2>
            <div className="mt-4">
              <Field
                id="email"
                label="Email address"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
              />
            </div>
          </section>

          <section>
            <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
              <span className="grid size-6 place-items-center rounded-full bg-navy text-xs text-navy-foreground">
                2
              </span>
              Shipping address
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field id="first" label="First name" autoComplete="given-name" />
              <Field id="last" label="Last name" autoComplete="family-name" />
              <Field
                id="address"
                label="Address"
                autoComplete="address-line1"
                className="sm:col-span-2"
              />
              <Field id="city" label="City" autoComplete="address-level2" />
              <Field id="zip" label="ZIP code" autoComplete="postal-code" />
            </div>
          </section>

          <section>
            <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
              <span className="grid size-6 place-items-center rounded-full bg-navy text-xs text-navy-foreground">
                3
              </span>
              Payment
            </h2>
            <div className="mt-4 rounded-xl border border-border bg-muted/40 p-4">
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <CreditCard className="size-4 text-teal" />
                This is a demo checkout — no real payment is processed.
              </p>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field
                id="card"
                label="Card number"
                placeholder="4242 4242 4242 4242"
                className="sm:col-span-2"
              />
              <Field id="exp" label="Expiration" placeholder="MM / YY" />
              <Field id="cvc" label="CVC" placeholder="123" />
            </div>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-lg font-semibold text-foreground">
              Order summary
            </h2>
            <ul className="mt-4 space-y-4">
              {items.map((item) => (
                <li key={item.key} className="flex gap-3">
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                    <span className="absolute -right-1.5 -top-1.5 grid size-5 place-items-center rounded-full bg-navy text-[10px] font-semibold text-navy-foreground">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <p className="text-sm font-medium leading-snug text-foreground text-pretty">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {item.size} · {item.color}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </li>
              ))}
            </ul>

            <dl className="mt-5 space-y-2 border-t border-border pt-5 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">
                  Subtotal ({count} {count === 1 ? "item" : "items"})
                </dt>
                <dd className="font-medium text-foreground">
                  {formatPrice(subtotal)}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Shipping</dt>
                <dd className="font-medium text-foreground">
                  {shipping === 0 ? "Free" : formatPrice(shipping)}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Estimated tax</dt>
                <dd className="font-medium text-foreground">{formatPrice(tax)}</dd>
              </div>
              <div className="flex justify-between border-t border-border pt-3 text-base">
                <dt className="font-semibold text-foreground">Total</dt>
                <dd className="font-semibold text-foreground">
                  {formatPrice(total)}
                </dd>
              </div>
            </dl>

            <Button type="submit" size="lg" className="mt-5 w-full rounded-full">
              <Lock className="size-4" />
              Place order
            </Button>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <Truck className="size-3.5 text-teal" />
              60-day fit guarantee · Secure checkout
            </p>
          </div>
        </aside>
      </form>

      <div className="mt-8">
        <Disclaimer variant="inline">
          Ascera products are not intended to diagnose, treat, cure, or prevent
          any disease. Consult a healthcare professional about your needs.
        </Disclaimer>
      </div>
    </div>
  )
}
