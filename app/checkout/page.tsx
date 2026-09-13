import type { Metadata } from "next"
import { CheckoutView } from "@/components/checkout/checkout-view"

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your Vanté order with secure checkout.",
}

export default function CheckoutPage() {
  return <CheckoutView />
}
