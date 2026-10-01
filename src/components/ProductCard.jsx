import { Link } from 'react-router-dom'
import ProductImage from './ProductImage.jsx'
import { useStore, money } from '../StoreContext.jsx'

export default function ProductCard({ product, onQuick }) {
  const { addToCart, inCart, wishlist, toggleWish } = useStore()
  const out = product.stock < 1
  const maxed = inCart(product.id) >= product.stock
  const saved = wishlist.includes(product.id)
  return (
    <article className="card">
      <div className="media">
        <Link to={`/models/${product.id}`}><ProductImage product={product} /></Link>
        <button className={saved ? 'heart on' : 'heart'} onClick={() => toggleWish(product.id)} aria-pressed={saved} aria-label={saved ? 'Remove from saved' : 'Save for later'}>{saved ? '♥' : '♡'}</button>
        <button className="quick" onClick={() => onQuick(product)}>Quick view</button>
        {out && <span className="flag">Sold out</span>}
      </div>
      <div className="cbody">
        <p className="cat-name">{product.category}</p>
        <h3><Link to={`/models/${product.id}`}>{product.name}</Link></h3>
        <p className="desc">{product.description}</p>
        <p className={out ? 'stock out' : product.stock <= 5 ? 'stock low' : 'stock'}>
          {out ? 'Out of stock' : product.stock <= 5 ? `Only ${product.stock} left` : 'In stock'}
        </p>
        <div className="row">
          <span className="price">{money(product.price)}</span>
          <button className="btn small" disabled={out || maxed} onClick={() => addToCart(product.id)}>
            {out ? 'Sold out' : maxed ? 'In cart' : 'Add to cart'}
          </button>
        </div>
      </div>
    </article>
  )
}
