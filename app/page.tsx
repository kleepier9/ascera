import { Hero } from "@/components/home/hero"
import { ValueProps } from "@/components/home/value-props"
import { CategoryTiles } from "@/components/home/category-tiles"
import { FeaturedProducts } from "@/components/home/featured-products"
import { SupportLevels } from "@/components/home/support-levels"
import { SupportWeb } from "@/components/home/support-web"
import { ReviewsSection } from "@/components/home/reviews-section"
import { Mission } from "@/components/home/mission"
import { JournalPreview } from "@/components/home/journal-preview"

export default function Page() {
  return (
    <>
      <Hero />
      <ValueProps />
      <CategoryTiles />
      <FeaturedProducts />
      <SupportLevels />
      <SupportWeb />
      <ReviewsSection />
      <Mission />
      <JournalPreview />
    </>
  )
}
