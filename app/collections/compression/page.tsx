import type { Metadata } from "next"
import { products } from "@/lib/products"
import { CollectionView } from "@/components/collection/collection-view"

export const metadata: Metadata = {
  title: "Compression Wear",
  description:
    "Full-leg, abdominal, and calf compression in clearly-labeled light, moderate, and firm support levels.",
}

export default function CompressionPage() {
  const compressionProducts = products.filter((p) => p.category === "Compression")
  return (
    <CollectionView
      title="Compression Wear"
      description="Support you can feel, mapped to how your body moves. Filter by support level and body area to find your fit."
      products={compressionProducts}
    />
  )
}
