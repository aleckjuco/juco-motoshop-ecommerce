import { useStore } from '../StoreContext.jsx'
import { categories } from '../data/products.js'

export default function Categories({ onPick }) {
  const { products } = useStore()
  return (
    <section className="wrap cats">
      <h2>Shop by category</h2>
      <div className="catgrid">
        {categories.filter((c) => c !== 'All').map((c) => (
          <button key={c} className="cat" onClick={() => onPick(c)}>
            <strong>{c}</strong>
            <span>{products.filter((p) => p.category === c).length} items</span>
          </button>
        ))}
      </div>
    </section>
  )
}
