import { Link } from 'react-router-dom'
import { brand } from '../data/brand.js'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap fgrid">
        <div>
          <div className="logo">{brand.parts[0]}<em>{brand.parts[1]}</em></div>
          <p>{brand.tagline}</p>
        </div>
        <div><h4>Shop</h4><Link to="/">All products</Link><Link to="/cart">Cart</Link><Link to="/checkout">Checkout</Link></div>
        <div><h4>Good to know</h4><p>Cash on delivery nationwide.</p><p>Demo store: data lives in memory and resets on refresh.</p></div>
      </div>
    </footer>
  )
}
