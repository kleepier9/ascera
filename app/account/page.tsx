import type { Metadata } from "next"
import Link from "next/link"
import { Package, Heart, MapPin, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Your Account",
  description: "Manage your Vanté orders, wishlist, and details.",
}

const links = [
  {
    icon: Package,
    title: "Orders",
    body: "Track and review your past orders.",
    href: "/account",
  },
  {
    icon: Heart,
    title: "Wishlist",
    body: "Pieces you've saved for later.",
    href: "/account/wishlist",
  },
  {
    icon: MapPin,
    title: "Addresses",
    body: "Manage your saved shipping details.",
    href: "/account",
  },
]

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-foreground">
        Your account
      </h1>
      <p className="mt-2 text-muted-foreground">
        Manage your orders, saved items, and details.
      </p>

      <div className="mt-8 space-y-3">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-teal"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-teal/12 text-teal">
              <link.icon className="size-5" />
            </span>
            <div className="flex-1">
              <h2 className="font-medium text-foreground">{link.title}</h2>
              <p className="mt-0.5 text-sm text-muted-foreground">{link.body}</p>
            </div>
            <ChevronRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>
    </div>
  )
}
