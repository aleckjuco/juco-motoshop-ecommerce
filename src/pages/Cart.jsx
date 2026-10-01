import { Link } from 'react-router-dom'
import ProductImage from '../components/ProductImage.jsx'
import { useStore, money } from '../StoreContext.jsx'

export default function Cart() {
  const { lines, subtotal, shipping, setQty, removeFromCart } = useStore()
  if (!lines.length)
    return <section className="wrap empty"><h1>Your cart is empty</h1><Link className="btn" to="/">Browse the shop</Link></section>

  return (
    <section className="wrap">
      <h1>Your cart</h1>
      <div className="cols">
        <div>
          {lines.map(({ product: p, qty }) => (
            <div className="line" key={p.id}>
              <div className="thumb"><ProductImage product={p} /></div>
              <div className="grow"><strong>{p.name}</strong><p className="muted">{money(p.price)} each · {p.stock} available</p></div>
              <div className="qty">
                <button onClick={() => setQty(p.id, qty - 1)} aria-label="Decrease">−</button>
                <span>{qty}</span>
                <button disabled={qty >= p.stock} onClick={() => setQty(p.id, qty + 1)} aria-label="Increase">+</button>
              </div>
              <strong className="lt">{money(p.price * qty)}</strong>
              <button className="link" onClick={() => removeFromCart(p.id)}>Remove</button>
            </div>
          ))}
        </div>
        <aside className="summary">
          <h2>Order summary</h2>
          <p className="row"><span>Subtotal</span><span>{money(subtotal)}</span></p>
          <p className="row"><span>Delivery</span><span>{money(shipping)}</span></p>
          <p className="row total"><span>Total</span><span>{money(subtotal + shipping)}</span></p>
          <Link to="/checkout" className="btn block">Go to checkout</Link>
        </aside>
      </div>
    </section>
  )
}
