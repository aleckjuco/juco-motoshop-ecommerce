import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import ProductImage from '../components/ProductImage.jsx'
import { useStore, money } from '../StoreContext.jsx'

export default function ProductPage() {
  const { id } = useParams()
  const { products, addToCart, inCart, wishlist, toggleWish } = useStore()
  const nav = useNavigate()
  const [qty, setQty] = useState(1)
  const [view, setView] = useState(0)
  const p = products.find((x) => x.id === Number(id))
  if (!p) return <p className="wrap empty">Product not found. <Link to="/">Back to shop</Link></p>

  const views = p.image ? 1 + (p.images?.length || 0) : 3   // photos if provided, else 3 illustrated views
  const out = p.stock < 1
  const left = Math.max(0, p.stock - inCart(p.id))
  const buy = (go) => { if (addToCart(p.id, Math.min(qty, left))) { setQty(1); if (go) nav('/checkout') } }
  const saved = wishlist.includes(p.id)
  const related = products.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 3)

  return (
    <section className="wrap">
      <Link to="/" className="back">← Back to shop</Link>
      <div className="detail">
        <div>
          <div className="gallery">
            <ProductImage product={p} variant={view} />
            {views > 1 && <>
              <button className="gnav l" onClick={() => setView((view + views - 1) % views)} aria-label="Previous image">‹</button>
              <button className="gnav r" onClick={() => setView((view + 1) % views)} aria-label="Next image">›</button>
            </>}
          </div>
          {views > 1 && <div className="thumbs">
            {Array.from({ length: views }, (_, n) => (
              <button key={n} className={n === view ? 'th on' : 'th'} onClick={() => setView(n)} aria-label={`View ${n + 1}`}><ProductImage product={p} variant={n} /></button>
            ))}
          </div>}
        </div>
        <div>
          <p className="cat-name">{p.category}</p>
          <h1>{p.name}</h1>
          <p className="price big">{money(p.price)}</p>
          <p className={out ? 'stock out' : p.stock <= 5 ? 'stock low' : 'stock'}>{out ? 'Out of stock' : `${p.stock} in stock${inCart(p.id) ? ` · ${inCart(p.id)} in your cart` : ''}`}</p>
          <p>{p.description}</p>
          <table className="specs"><tbody>
            {p.specs.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}
          </tbody></table>
          <div className="row buyrow">
            <div className="qty">
              <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease">−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(Math.min(Math.max(left, 1), qty + 1))} aria-label="Increase">+</button>
            </div>
            <button className="btn" disabled={out || left < 1} onClick={() => buy(false)}>{out ? 'Out of stock' : left < 1 ? 'All stock in cart' : 'Add to cart'}</button>
            <button className="btn ghost" disabled={out || left < 1} onClick={() => buy(true)}>Buy now</button>
            <button className={saved ? 'heart inline on' : 'heart inline'} onClick={() => toggleWish(p.id)} aria-pressed={saved} aria-label="Save for later">{saved ? '♥' : '♡'}</button>
          </div>
        </div>
      </div>
      {related.length > 0 && <>
        <h2 className="relh">More {p.category.toLowerCase()}</h2>
        <div className="grid rel">
          {related.map((r) => (
            <Link key={r.id} to={`/models/${r.id}`} className="card relcard">
              <ProductImage product={r} />
              <div className="cbody"><h3>{r.name}</h3><span className="price">{money(r.price)}</span></div>
            </Link>
          ))}
        </div>
      </>}
    </section>
  )
}
