import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useStore } from '../StoreContext.jsx'
import { brand } from '../data/brand.js'

export default function Header() {
  const { count } = useStore()
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={solid ? 'header solid' : 'header'}>
      <div className="wrap bar">
        <Link to="/" className="logo" aria-label={brand.name}>{brand.parts[0]}<em>{brand.parts[1]}</em></Link>
        <nav aria-label="Main">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/cart">Cart <span className="badge" aria-label={`${count} items in cart`}>{count}</span></NavLink>
          <NavLink to="/checkout">Checkout</NavLink>
        </nav>
      </div>
    </header>
  )
}
