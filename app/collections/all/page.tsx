import type { Metadata } from "next"
import { products } from "@/lib/products"
import { CollectionView } from "@/components/collection/collection-view"

export const metadata: Metadata = {
  title: "Shop All",
  description:
    "Browse the full Vanté range of compression wear and awareness apparel, filterable by support level and body area.",
}

export default function ShopAllPage() {
  return (
    <CollectionView
      title="Shop All"
      description="Every Vanté piece in one place — compression wear across light, moderate, and firm support, plus our awareness apparel."
      products={products}
    />
  )
}
