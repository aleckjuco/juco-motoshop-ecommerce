import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStore, money } from '../StoreContext.jsx'

const empty = { name: '', email: '', phone: '', address: '', payment: 'Cash on Delivery' }

export default function Checkout() {
  const { lines, subtotal, shipping, placeOrder } = useStore()
  const [f, setF] = useState(empty)
  const [errors, setErrors] = useState({})
  const nav = useNavigate()

  if (!lines.length)
    return <section className="wrap empty"><h1>Nothing to check out</h1><p className="muted">Add something to your cart first.</p><Link className="btn" to="/">Browse the shop</Link></section>

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const validate = () => {
    const e = {}
    if (!f.name.trim()) e.name = 'Full name is required.'
    else if (!/^[A-Za-zÀ-ÿ.'’-]{2,}(\s+[A-Za-zÀ-ÿ.'’-]+)+$/.test(f.name.trim())) e.name = 'Enter your first and last name (letters only).'
    if (!f.email.trim()) e.email = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = 'Enter a valid email, e.g. name@example.com.'
    const digits = f.phone.replace(/[\s-]/g, '')
    if (!f.phone.trim()) e.phone = 'Phone number is required.'
    else if (!/^(\+63|0)9\d{9}$/.test(digits)) e.phone = 'Enter a complete mobile number, e.g. 09171234567 or +639171234567.'
    if (!f.address.trim()) e.address = 'Delivery address is required.'
    else if (f.address.trim().length < 10) e.address = 'Enter the full address (street, barangay, city).'
    return e
  }

  const submit = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return
    const order = placeOrder({ ...f, name: f.name.trim(), email: f.email.trim() })
    nav(`/order/${order.id}`)
  }

  // Plain function (not a component) so inputs keep focus while typing.
  const field = (k, label, type = 'text', wide, hint) => (
    <label className={wide ? 'field wide' : 'field'}>
      {label}
      {type === 'textarea'
        ? <textarea rows="3" value={f[k]} onChange={set(k)} aria-invalid={!!errors[k]} placeholder={hint} />
        : <input type={type} value={f[k]} onChange={set(k)} aria-invalid={!!errors[k]} placeholder={hint} />}
      {errors[k] && <small className="err" role="alert">{errors[k]}</small>}
    </label>
  )

  return (
    <section className="wrap">
      <h1>Checkout</h1>
      <div className="cols">
        <form onSubmit={submit} noValidate className="form">
          {field('name', 'Full name', 'text', true, 'Juan Dela Cruz')}
          {field('email', 'Email address', 'email', false, 'name@example.com')}
          {field('phone', 'Phone number', 'tel', false, '09171234567')}
          {field('address', 'Delivery address', 'textarea', true, 'House no., street, barangay, city')}
          <label className="field wide">
            Payment method
            <select value={f.payment} disabled><option>Cash on Delivery</option></select>
          </label>
          {Object.keys(errors).length > 0 && <p className="err wide" role="alert">Please fix the highlighted fields before placing your order.</p>}
          <button className="btn wide">Place order</button>
        </form>
        <aside className="summary">
          <h2>Your order</h2>
          {lines.map(({ product: p, qty }) => (
            <p className="row" key={p.id}><span>{p.name} × {qty}</span><span>{money(p.price * qty)}</span></p>
          ))}
          <p className="row"><span>Delivery</span><span>{money(shipping)}</span></p>
          <p className="row total"><span>Total</span><span>{money(subtotal + shipping)}</span></p>
        </aside>
      </div>
    </section>
  )
}
