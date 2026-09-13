export type ColorOption = {
  name: string
  hex: string
}

export type CompressionLevel = "Light Support" | "Moderate: 15–20 mmHg" | "Firm: 20–30 mmHg"

export type ProductCategory = "Compression" | "Awareness Apparel"

export type BodyArea =
  | "Full Leg"
  | "Abdominal"
  | "Calf"
  | "Everyday"
  | "Awareness"

export type Product = {
  slug: string
  name: string
  price: number
  category: ProductCategory
  categoryLabel: string
  compression: CompressionLevel
  bodyArea: BodyArea
  colors: ColorOption[]
  sizes: string[]
  rating: number
  reviewCount: number
  image: string
  hoverImage?: string
  gallery: string[]
  badge?: string
  lowStock?: boolean
  inStock: boolean
  shortDescription: string
  designedFor: string
}

export const COLORS: Record<string, ColorOption> = {
  navy: { name: "Deep Navy", hex: "#28324f" },
  teal: { name: "Signal Teal", hex: "#1fa9a3" },
  coral: { name: "Warm Coral", hex: "#f2705d" },
  slate: { name: "Storm Slate", hex: "#64748b" },
  mist: { name: "Warm White", hex: "#ecebe6" },
  lavender: { name: "Soft Lavender", hex: "#c9bfe6" },
}

const LEG_SIZES = ["XS", "S", "M", "L", "XL", "2XL"]
const TEE_SIZES = ["XS", "S", "M", "L", "XL", "2XL", "3XL"]

export const products: Product[] = [
  {
    slug: "support-web-compression-leggings",
    name: "Support-Web Compression Leggings",
    price: 128,
    category: "Compression",
    categoryLabel: "Full-Leg Compression",
    compression: "Firm: 20–30 mmHg",
    bodyArea: "Full Leg",
    colors: [COLORS.navy, COLORS.teal, COLORS.coral],
    sizes: LEG_SIZES,
    rating: 4.8,
    reviewCount: 214,
    image: "/images/leggings.png",
    hoverImage: "/images/leggings-back.png",
    gallery: ["/images/leggings.png", "/images/leggings-back.png", "/images/support-map.png"],
    badge: "Bestseller",
    lowStock: true,
    inStock: true,
    shortDescription:
      "Full-length compression with an integrated support web mapped to key muscle and circulation zones.",
    designedFor:
      "People who want firm, full-leg support for upright days, travel, and active movement.",
  },
  {
    slug: "high-rise-abdominal-compression-shorts",
    name: "High-Rise Abdominal Compression Shorts",
    price: 88,
    category: "Compression",
    categoryLabel: "Abdominal Compression",
    compression: "Moderate: 15–20 mmHg",
    bodyArea: "Abdominal",
    colors: [COLORS.navy, COLORS.slate],
    sizes: LEG_SIZES,
    rating: 4.7,
    reviewCount: 156,
    image: "/images/shorts.png",
    gallery: ["/images/shorts.png", "/images/support-map.png"],
    badge: "New",
    inStock: true,
    shortDescription:
      "High-rise waistband with moderate abdominal and hip compression for everyday support.",
    designedFor:
      "People focused on abdominal and hip support who prefer a shorter length.",
  },
  {
    slug: "targeted-compression-tights",
    name: "Targeted Compression Tights",
    price: 118,
    category: "Compression",
    categoryLabel: "Full-Leg Compression",
    compression: "Moderate: 15–20 mmHg",
    bodyArea: "Full Leg",
    colors: [COLORS.navy, COLORS.coral, COLORS.lavender],
    sizes: LEG_SIZES,
    rating: 4.6,
    reviewCount: 98,
    image: "/images/tights.png",
    gallery: ["/images/tights.png", "/images/support-map.png"],
    inStock: true,
    shortDescription:
      "Lightweight tights with graduated, moderate compression and targeted support panels.",
    designedFor:
      "People who want moderate all-day compression in a lighter-weight fabric.",
  },
  {
    slug: "calf-compression-sleeves",
    name: "Calf Compression Sleeves",
    price: 48,
    category: "Compression",
    categoryLabel: "Calf Support",
    compression: "Firm: 20–30 mmHg",
    bodyArea: "Calf",
    colors: [COLORS.navy, COLORS.teal],
    sizes: ["S/M", "L/XL"],
    rating: 4.9,
    reviewCount: 342,
    image: "/images/calf-sleeves.png",
    gallery: ["/images/calf-sleeves.png", "/images/support-map.png"],
    badge: "Bestseller",
    inStock: true,
    shortDescription:
      "Firm graduated calf sleeves that layer easily under everyday clothing.",
    designedFor:
      "People targeting lower-leg support who want a wear-anywhere layer.",
  },
  {
    slug: "everyday-comfort-compression-tights",
    name: "Everyday Comfort Compression Tights",
    price: 98,
    category: "Compression",
    categoryLabel: "Everyday Comfort",
    compression: "Light Support",
    bodyArea: "Everyday",
    colors: [COLORS.navy, COLORS.slate, COLORS.lavender],
    sizes: LEG_SIZES,
    rating: 4.5,
    reviewCount: 64,
    image: "/images/tights.png",
    gallery: ["/images/tights.png"],
    inStock: true,
    shortDescription:
      "Soft, light-support tights designed for lower-key days and easy layering.",
    designedFor:
      "People new to compression or wanting a gentler, everyday option.",
  },
  {
    slug: "abdominal-support-band",
    name: "Abdominal Support Band",
    price: 58,
    category: "Compression",
    categoryLabel: "Abdominal Compression",
    compression: "Moderate: 15–20 mmHg",
    bodyArea: "Abdominal",
    colors: [COLORS.navy, COLORS.mist],
    sizes: ["XS/S", "M/L", "XL/2XL"],
    rating: 4.4,
    reviewCount: 41,
    image: "/images/shorts.png",
    gallery: ["/images/shorts.png"],
    inStock: false,
    shortDescription:
      "A focused abdominal band for moderate midsection support you can wear over base layers.",
    designedFor:
      "People who want abdominal support they can add over existing clothing.",
  },
  {
    slug: "upright-and-unstoppable-tee",
    name: "\u201CUpright & Unstoppable\u201D Awareness Tee",
    price: 34,
    category: "Awareness Apparel",
    categoryLabel: "Awareness Apparel",
    compression: "Light Support",
    bodyArea: "Awareness",
    colors: [COLORS.mist, COLORS.navy],
    sizes: TEE_SIZES,
    rating: 4.8,
    reviewCount: 76,
    image: "/images/tee-upright.png",
    gallery: ["/images/tee-upright.png"],
    inStock: true,
    shortDescription:
      "A soft, heavyweight cotton tee with a subtle, wearable POTS-awareness graphic.",
    designedFor: "Anyone who wants to start a conversation with a modern, everyday tee.",
  },
  {
    slug: "my-heart-has-its-own-tempo-tee",
    name: "\u201CMy Heart Has Its Own Tempo\u201D Tee",
    price: 34,
    category: "Awareness Apparel",
    categoryLabel: "Awareness Apparel",
    compression: "Light Support",
    bodyArea: "Awareness",
    colors: [COLORS.navy, COLORS.mist],
    sizes: TEE_SIZES,
    rating: 4.9,
    reviewCount: 121,
    image: "/images/tee-tempo.png",
    gallery: ["/images/tee-tempo.png"],
    badge: "Bestseller",
    inStock: true,
    shortDescription:
      "A clean navy tee with an understated heartbeat-line graphic in warm coral.",
    designedFor: "Anyone who wants representation without the novelty look.",
  },
]

export const featuredSlugs = [
  "support-web-compression-leggings",
  "high-rise-abdominal-compression-shorts",
  "targeted-compression-tights",
  "calf-compression-sleeves",
  "upright-and-unstoppable-tee",
  "my-heart-has-its-own-tempo-tee",
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getFeatured(): Product[] {
  return featuredSlugs
    .map((slug) => getProduct(slug))
    .filter((p): p is Product => Boolean(p))
}

export const compressionLevels: CompressionLevel[] = [
  "Light Support",
  "Moderate: 15–20 mmHg",
  "Firm: 20–30 mmHg",
]

export const bodyAreas: BodyArea[] = [
  "Full Leg",
  "Abdominal",
  "Calf",
  "Everyday",
  "Awareness",
]

export const garmentTypes = [
  "Leggings",
  "Tights",
  "Shorts",
  "Sleeves",
  "Bands",
  "Tees",
]

export const allSizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"]
