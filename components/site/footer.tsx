import Link from "next/link"
import { Logo } from "@/components/site/logo"
import { Newsletter } from "@/components/site/newsletter"
import { MEDICAL_DISCLAIMER } from "@/components/site/disclaimer"

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Shop All", href: "/collections/all" },
      { label: "Compression", href: "/collections/compression" },
      { label: "Awareness Apparel", href: "/collections/awareness-apparel" },
      { label: "Support Finder", href: "/support-finder" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "The Journal", href: "/learn" },
      { label: "How Compression Works", href: "/learn/how-compression-works" },
      { label: "Fit & Sizing Guide", href: "/learn/finding-your-right-support-level" },
      { label: "POTS Resources", href: "/resources" },
      { label: "Our Story", href: "/about" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Shipping & Returns", href: "/shipping-returns" },
      { label: "FAQs", href: "/faqs" },
      { label: "Your Account", href: "/account" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 border-b border-border pb-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <h2 className="font-display text-2xl font-semibold text-foreground text-balance">
              Support that keeps you upright.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Join our list for new drops, fit guidance, and stories from the
              community. No noise, ever.
            </p>
          </div>
          <Newsletter />
        </div>

        <div className="grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo variant="full" />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Compression wear and awareness apparel designed with and for the
              dysautonomia and POTS community.
            </p>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-3 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="rounded-xl border border-border bg-muted/40 p-4">
          <p className="text-xs leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">Medical disclaimer: </span>
            {MEDICAL_DISCLAIMER}
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Ascera. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link href="/accessibility" className="transition-colors hover:text-foreground">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
