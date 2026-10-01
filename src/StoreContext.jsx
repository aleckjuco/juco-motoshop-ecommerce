import { createContext, useContext, useRef, useState } from 'react'
import { initialProducts } from './data/products.js'
import { brand } from './data/brand.js'

const Store = createContext(null)
export const useStore = () => useContext(Store)
export const money = (n) => `${brand.currency}${Number(n).toLocaleString('en-PH')}`

// Everything lives in memory (useState). A refresh resets it — by design.
export function StoreProvider({ children }) {
  const [products, setProducts] = useState(initialProducts)
  const [cart, setCart] = useState([])        // [{ id, qty }]
  const [orders, setOrders] = useState([])
  const [wishlist, setWishlist] = useState([]) // product ids
  const [toast, setToast] = useState(null)
  const timer = useRef()

  const notify = (msg, link) => {
    setToast({ msg, link, k: Date.now() })
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setToast(null), 2800)
  }

  const stockOf = (id) => products.find((p) => p.id === id)?.stock ?? 0
  const inCart = (id) => cart.find((i) => i.id === id)?.qty ?? 0

  // Cart quantity can never exceed available stock.
  const addToCart = (id, qty = 1) => {
    const add = Math.min(qty, stockOf(id) - inCart(id))
    if (add < 1) return false
    setCart((c) => c.some((i) => i.id === id)
      ? c.map((i) => (i.id === id ? { ...i, qty: i.qty + add } : i))
      : [...c, { id, qty: add }])
    notify(`${products.find((p) => p.id === id).name} added to cart`, true)
    return true
  }

  const setQty = (id, qty) =>
    setCart((c) => (qty < 1 ? c.filter((i) => i.id !== id)
      : c.map((i) => (i.id === id ? { ...i, qty: Math.min(qty, stockOf(id)) } : i))))

  const removeFromCart = (id) => setCart((c) => c.filter((i) => i.id !== id))
  const toggleWish = (id) => setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]))

  const lines = cart.map((i) => ({ ...i, product: products.find((p) => p.id === i.id) })).filter((l) => l.product)
  const count = lines.reduce((s, l) => s + l.qty, 0)
  const subtotal = lines.reduce((s, l) => s + l.qty * l.product.price, 0)
  const shipping = lines.length ? brand.shipping : 0

  const placeOrder = (customer) => {
    const order = {
      id: 'KM-' + String(orders.length + 1001),
      date: new Date().toLocaleString(),
      customer,
      items: lines.map((l) => ({ name: l.product.name, qty: l.qty, price: l.product.price })),
      subtotal, shipping, total: subtotal + shipping,
    }
    setOrders((o) => [...o, order])
    setProducts((ps) => ps.map((p) => {
      const l = lines.find((x) => x.id === p.id)
      return l ? { ...p, stock: Math.max(0, p.stock - l.qty) } : p
    }))
    setCart([])
    return order
  }

  return (
    <Store.Provider value={{ products, setProducts, cart, lines, count, subtotal, shipping, orders, wishlist, toast, inCart, addToCart, setQty, removeFromCart, toggleWish, placeOrder }}>
      {children}
    </Store.Provider>
  )
}
