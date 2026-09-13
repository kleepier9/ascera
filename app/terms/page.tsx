import type { Metadata } from "next"
import { PolicyPage } from "@/components/site/policy-page"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the Ascera website and purchases.",
}

export default function TermsPage() {
  return (
    <PolicyPage
      title="Terms of service"
      intro="By using our site and purchasing our products, you agree to the following terms."
      sections={[
        {
          heading: "Use of our site",
          paragraphs: [
            "You may use our site for lawful purposes only. Content on this site is for general information and is not medical advice.",
          ],
        },
        {
          heading: "Products & orders",
          paragraphs: [
            "We do our best to display products and pricing accurately. We reserve the right to correct errors and to refuse or cancel orders in the rare event of a mistake.",
          ],
        },
        {
          heading: "Not medical advice",
          paragraphs: [
            "Ascera products are not intended to diagnose, treat, cure, or prevent any disease. Nothing on this site substitutes for professional medical advice. Always consult a qualified healthcare professional about your individual needs.",
          ],
        },
      ]}
    />
  )
}
