"use client"

import {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
  type ReactNode,
} from "react"

export type CartItem = {
  key: string
  slug: string
  name: string
  price: number
  image: string
  size: string
  color: string
  quantity: number
}

type AddItemInput = Omit<CartItem, "key" | "quantity"> & { quantity?: number }

type CartContextValue = {
  items: CartItem[]
  count: number
  subtotal: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (input: AddItemInput) => void
  removeItem: (key: string) => void
  updateQuantity: (key: string, quantity: number) => void
  clear: () => void
  wishlist: string[]
  toggleWishlist: (slug: string) => void
  isWishlisted: (slug: string) => boolean
}

const CartContext = createContext<CartContextValue | null>(null)

const FREE_SHIPPING_THRESHOLD = 100

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [wishlist, setWishlist] = useState<string[]>([])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addItem = useCallback((input: AddItemInput) => {
    const key = `${input.slug}-${input.size}-${input.color}`
    setItems((prev) => {
      const existing = prev.find((item) => item.key === key)
      if (existing) {
        return prev.map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity + (input.quantity ?? 1) }
            : item,
        )
      }
      return [...prev, { ...input, key, quantity: input.quantity ?? 1 }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((key: string) => {
    setItems((prev) => prev.filter((item) => item.key !== key))
  }, [])

  const updateQuantity = useCallback((key: string, quantity: number) => {
    setItems((prev) =>
      prev
        .map((item) => (item.key === key ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    )
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const toggleWishlist = useCallback((slug: string) => {
    setWishlist((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    )
  }, [])

  const isWishlisted = useCallback(
    (slug: string) => wishlist.includes(slug),
    [wishlist],
  )

  const { count, subtotal } = useMemo(() => {
    return items.reduce(
      (acc, item) => {
        acc.count += item.quantity
        acc.subtotal += item.quantity * item.price
        return acc
      },
      { count: 0, subtotal: 0 },
    )
  }, [items])

  const value: CartContextValue = {
    items,
    count,
    subtotal,
    isOpen,
    openCart,
    closeCart,
    addItem,
    removeItem,
    updateQuantity,
    clear,
    wishlist,
    toggleWishlist,
    isWishlisted,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return ctx
}

export { FREE_SHIPPING_THRESHOLD }
