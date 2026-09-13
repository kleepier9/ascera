import type { Metadata } from "next"
import { WishlistView } from "@/components/account/wishlist-view"

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Your saved Ascera pieces.",
}

export default function WishlistPage() {
  return <WishlistView />
}
