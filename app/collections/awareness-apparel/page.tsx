import type { Metadata } from "next"
import { products } from "@/lib/products"
import { CollectionView } from "@/components/collection/collection-view"

export const metadata: Metadata = {
  title: "Awareness Apparel",
  description:
    "Wearable, understated apparel that raises awareness for POTS and dysautonomia — designed to be worn, not just displayed.",
}

export default function AwarenessPage() {
  const awarenessProducts = products.filter(
    (p) => p.category === "Awareness Apparel",
  )
  return (
    <CollectionView
      title="Awareness Apparel"
      description="Pieces that start conversations without the novelty look. Soft, durable, and designed for everyday wear."
      products={awarenessProducts}
      showCompressionFilter={false}
    />
  )
}
