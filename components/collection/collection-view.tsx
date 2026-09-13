"use client"

import { useMemo, useState } from "react"
import { SlidersHorizontal, X, Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  type Product,
  type CompressionLevel,
  type BodyArea,
  compressionLevels,
  bodyAreas,
} from "@/lib/products"
import { ProductCard } from "@/components/site/product-card"
import { Disclaimer } from "@/components/site/disclaimer"

type SortKey = "featured" | "price-asc" | "price-desc" | "rating"

const sortOptions: { key: SortKey; label: string }[] = [
  { key: "featured", label: "Featured" },
  { key: "price-asc", label: "Price: Low to High" },
  { key: "price-desc", label: "Price: High to Low" },
  { key: "rating", label: "Top Rated" },
]

function FilterGroup({
  title,
  options,
  selected,
  onToggle,
}: {
  title: string
  options: string[]
  selected: string[]
  onToggle: (value: string) => void
}) {
  return (
    <div className="py-5">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="mt-3 space-y-2.5">
        {options.map((option) => {
          const checked = selected.includes(option)
          return (
            <li key={option}>
              <label className="flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <span
                  className={cn(
                    "grid size-4.5 shrink-0 place-items-center rounded border border-border transition-colors",
                    checked && "border-teal bg-teal text-teal-foreground",
                  )}
                >
                  {checked ? <Check className="size-3" /> : null}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={() => onToggle(option)}
                />
                {option}
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function CollectionView({
  title,
  description,
  products,
  showCompressionFilter = true,
}: {
  title: string
  description: string
  products: Product[]
  showCompressionFilter?: boolean
}) {
  const [compression, setCompression] = useState<string[]>([])
  const [areas, setAreas] = useState<string[]>([])
  const [sort, setSort] = useState<SortKey>("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const availableAreas = useMemo(
    () => bodyAreas.filter((a) => products.some((p) => p.bodyArea === a)),
    [products],
  )

  const toggle = (
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    value: string,
  ) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    )
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (compression.length && !compression.includes(p.compression)) return false
      if (areas.length && !areas.includes(p.bodyArea)) return false
      return true
    })
    result = [...result].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return 0
      }
    })
    return result
  }, [products, compression, areas, sort])

  const activeCount = compression.length + areas.length

  const clearAll = () => {
    setCompression([])
    setAreas([])
  }

  const filterContent = (
    <div className="divide-y divide-border">
      {showCompressionFilter ? (
        <FilterGroup
          title="Support Level"
          options={compressionLevels as CompressionLevel[]}
          selected={compression}
          onToggle={(v) => toggle(setCompression, v)}
        />
      ) : null}
      <FilterGroup
        title="Body Area"
        options={availableAreas as BodyArea[]}
        selected={areas}
        onToggle={(v) => toggle(setAreas, v)}
      />
    </div>
  )

  return (
    <div>
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-semibold text-foreground text-balance sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground text-pretty">
            {description}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:flex lg:px-8">
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-foreground">Filters</h2>
              {activeCount > 0 ? (
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-xs font-medium text-teal transition-colors hover:text-teal/80"
                >
                  Clear all
                </button>
              ) : null}
            </div>
            <div className="mt-2">{filterContent}</div>
          </div>
        </aside>

        <div className="flex-1">
          <div className="flex items-center justify-between gap-4 pb-5">
            <p className="text-sm text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "product" : "products"}
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted lg:hidden"
              >
                <SlidersHorizontal className="size-4" />
                Filters
                {activeCount > 0 ? (
                  <span className="grid size-4.5 place-items-center rounded-full bg-teal text-[10px] text-teal-foreground">
                    {activeCount}
                  </span>
                ) : null}
              </button>
              <div className="relative">
                <label htmlFor="sort" className="sr-only">
                  Sort products
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="appearance-none rounded-full border border-border bg-card py-2 pl-3.5 pr-9 text-sm font-medium text-foreground outline-none transition-colors hover:bg-muted focus-visible:border-teal"
                >
                  {sortOptions.map((option) => (
                    <option key={option.key} value={option.key}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
          </div>

          {activeCount > 0 ? (
            <div className="flex flex-wrap gap-2 pb-5">
              {[...compression, ...areas].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() =>
                    compression.includes(tag)
                      ? toggle(setCompression, tag)
                      : toggle(setAreas, tag)
                  }
                  className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {tag}
                  <X className="size-3" />
                </button>
              ))}
            </div>
          ) : null}

          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border py-16 text-center">
              <p className="font-medium text-foreground">No products match your filters</p>
              <button
                type="button"
                onClick={clearAll}
                className="mt-2 text-sm font-medium text-teal transition-colors hover:text-teal/80"
              >
                Clear all filters
              </button>
            </div>
          )}

          <div className="mt-10">
            <Disclaimer />
          </div>
        </div>
      </div>

      {mobileFiltersOpen ? (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setMobileFiltersOpen(false)}
            className="absolute inset-0 bg-navy/50 backdrop-blur-sm"
          />
          <div className="absolute inset-y-0 right-0 flex w-[85%] max-w-sm flex-col bg-background shadow-xl animate-in slide-in-from-right">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="font-display text-lg font-semibold text-foreground">
                Filters
              </h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="grid size-8 place-items-center rounded-full text-muted-foreground hover:bg-muted"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5">{filterContent}</div>
            <div className="flex gap-3 border-t border-border p-5">
              <button
                type="button"
                onClick={clearAll}
                className="flex-1 rounded-full border border-border py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Clear all
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="flex-1 rounded-full bg-navy py-2.5 text-sm font-medium text-navy-foreground transition-colors hover:bg-navy/90"
              >
                Show {filtered.length} results
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
