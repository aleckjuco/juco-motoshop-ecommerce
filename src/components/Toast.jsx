import { Link } from 'react-router-dom'
import { useStore } from '../StoreContext.jsx'

export default function Toast() {
  const { toast } = useStore()
  if (!toast) return null
  return (
    <div className="toast" role="status" key={toast.k}>
      <span>{toast.msg}</span>
      {toast.link && <Link to="/cart">View cart</Link>}
    </div>
  )
}
