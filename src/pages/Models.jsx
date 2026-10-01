import { useState } from 'react'
import Hero from '../components/Hero.jsx'
import Marquee from '../components/Marquee.jsx'
import Categories from '../components/Categories.jsx'
import ProductCard from '../components/ProductCard.jsx'
import QuickView from '../components/QuickView.jsx'
import { useStore } from '../StoreContext.jsx'
import { categories } from '../data/products.js'

const PAGE_SIZE = 6

export default function Home() {
  const { products, wishlist } = useStore()
  const [active, setActive] = useState('All')
  const [sort, setSort] = useState('default')
  const [query, setQuery] = useState('')
  const [savedOnly, setSavedOnly] = useState(false)
  const [shown, setShown] = useState(PAGE_SIZE)
  const [quick, setQuick] = useState(null)

  const q = query.trim().toLowerCase()
  let list = products.filter((p) =>
    (active === 'All' || p.category === active) &&
    (!savedOnly || wishlist.includes(p.id)) &&
    (!q || `${p.name} ${p.category} ${p.description}`.toLowerCase().includes(q)))
  if (sort === 'low') list = [...list].sort((a, b) => a.price - b.price)
  if (sort === 'high') list = [...list].sort((a, b) => b.price - a.price)

  const reset = (fn) => (v) => { fn(v); setShown(PAGE_SIZE) }
  const pick = (c) => {
    reset(setActive)(c)
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Hero />
      <Marquee />
      <Categories onPick={pick} />
      <section className="wrap catalog" id="catalog">
        <h2>All products</h2>
        <div className="filters">
          <input type="search" className="search" placeholder="Search bikes, helmets, jackets…" aria-label="Search products"
            value={query} onChange={(e) => reset(setQuery)(e.target.value)} />
          <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products">
            <option value="default">Featured</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
        </div>
        <div className="tabs">
          {categories.map((c) => (
            <button key={c} className={c === active ? 'tab on' : 'tab'} onClick={() => reset(setActive)(c)}>{c}</button>
          ))}
          <button className={savedOnly ? 'tab on' : 'tab'} onClick={() => reset(setSavedOnly)(!savedOnly)} aria-pressed={savedOnly}>♥ Saved ({wishlist.length})</button>
        </div>
        <p className="muted count">Showing {Math.min(shown, list.length)} of {list.length} products</p>
        <div className="grid">{list.slice(0, shown).map((p) => <ProductCard key={p.id} product={p} onQuick={setQuick} />)}</div>
        {!list.length && <p className="empty">Nothing matches. Try another search or category.</p>}
        {shown < list.length && <div className="more"><button className="btn ghost" onClick={() => setShown(shown + PAGE_SIZE)}>View more</button></div>}
      </section>
      {quick && <QuickView product={products.find((p) => p.id === quick.id)} onClose={() => setQuick(null)} />}
    </>
  )
}
