"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ShoppingBag, Heart, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/lib/cart-context"
import { Logo } from "@/components/site/logo"

const nav = [
  { label: "Shop All", href: "/collections/all" },
  { label: "Compression", href: "/collections/compression" },
  { label: "Awareness Apparel", href: "/collections/awareness-apparel" },
  { label: "Support Finder", href: "/support-finder" },
  { label: "Learn", href: "/learn" },
  { label: "Our Story", href: "/about" },
]

export function Header() {
  const { count, openCart, wishlist } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-5 sm:px-6 lg:px-8">
        <button
          type="button"
          className="grid size-9 place-items-center rounded-md text-foreground lg:hidden"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="size-5" />
        </button>

        <Link href="/" className="mr-2 shrink-0" aria-label="Ascera home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium text-foreground/80 transition-colors hover:text-foreground",
                  active && "text-foreground",
                )}
              >
                {item.label}
                {active ? (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-teal" />
                ) : null}
              </Link>
            )
          })}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <Link
            href="/support-finder"
            className="hidden size-9 place-items-center rounded-full text-foreground transition-colors hover:bg-muted sm:grid"
            aria-label="Search and find your support"
          >
            <Search className="size-5" />
          </Link>
          <Link
            href="/account/wishlist"
            className="relative grid size-9 place-items-center rounded-full text-foreground transition-colors hover:bg-muted"
            aria-label={`Wishlist, ${wishlist.length} items`}
          >
            <Heart className="size-5" />
            {wishlist.length > 0 ? (
              <span className="absolute right-1 top-1 size-2 rounded-full bg-coral" />
            ) : null}
          </Link>
          <button
            type="button"
            onClick={openCart}
            className="relative grid size-9 place-items-center rounded-full text-foreground transition-colors hover:bg-muted"
            aria-label={`Open cart, ${count} items`}
          >
            <ShoppingBag className="size-5" />
            {count > 0 ? (
              <span className="absolute -right-0.5 -top-0.5 grid min-w-4.5 place-items-center rounded-full bg-teal px-1 text-[10px] font-semibold text-teal-foreground">
                {count}
              </span>
            ) : null}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-navy/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 flex w-[82%] max-w-sm flex-col bg-background shadow-xl animate-in slide-in-from-left">
            <div className="flex items-center justify-between border-b border-border px-4 py-3.5">
              <Logo />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="grid size-9 place-items-center rounded-md text-foreground"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav className="flex flex-col p-2" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  )
}
