import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductImage from './ProductImage.jsx'
import { useStore, money } from '../StoreContext.jsx'

export default function QuickView({ product, onClose }) {
  const { addToCart, inCart } = useStore()
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [onClose])
  const out = product.stock < 1
  const maxed = inCart(product.id) >= product.stock
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={product.name} onClick={(e) => e.stopPropagation()}>
        <button className="x" onClick={onClose} aria-label="Close">×</button>
        <ProductImage product={product} />
        <div className="mbody">
          <p className="cat-name">{product.category}</p>
          <h2>{product.name}</h2>
          <p className="price big">{money(product.price)}</p>
          <p>{product.description}</p>
          <p className={out ? 'stock out' : product.stock <= 5 ? 'stock low' : 'stock'}>{out ? 'Out of stock' : `${product.stock} in stock`}</p>
          <div className="row">
            <button className="btn" disabled={out || maxed} onClick={() => addToCart(product.id)}>{out ? 'Sold out' : maxed ? 'In cart' : 'Add to cart'}</button>
            <Link className="btn ghost" to={`/models/${product.id}`} onClick={onClose}>Full details</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
