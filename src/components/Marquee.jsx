import { brand } from '../data/brand.js'
export default function Marquee() {
  const items = [...brand.ticker, ...brand.ticker]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">{items.map((t, n) => <span key={n}>{t}</span>)}</div>
    </div>
  )
}
