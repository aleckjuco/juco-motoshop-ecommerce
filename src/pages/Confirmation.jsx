import { Link, useParams } from 'react-router-dom'
import { useStore, money } from '../StoreContext.jsx'

export default function Confirmation() {
  const { orderId } = useParams()
  const { orders } = useStore()
  const o = orders.find((x) => x.id === orderId)
  if (!o) return <section className="wrap empty"><h1>Order not found</h1><p>Orders reset when the page is refreshed.</p><Link className="btn" to="/">Back to shop</Link></section>

  return (
    <section className="wrap narrow">
      <h1>Thank you, {o.customer.name.split(' ')[0]}.</h1>
      <p>Order <strong>{o.id}</strong> was placed on {o.date}. We'll contact you at {o.customer.email}.</p>
      <div className="summary">
        {o.items.map((i) => <p className="row" key={i.name}><span>{i.name} × {i.qty}</span><span>{money(i.price * i.qty)}</span></p>)}
        <p className="row"><span>Delivery</span><span>{money(o.shipping)}</span></p>
        <p className="row total"><span>Total</span><span>{money(o.total)}</span></p>
        <p className="muted">Deliver to: {o.customer.address}. Payment: Cash on Delivery</p>
      </div>
      <Link className="btn" to="/">Continue shopping</Link>
    </section>
  )
}
