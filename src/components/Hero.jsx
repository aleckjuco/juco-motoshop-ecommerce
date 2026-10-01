import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductImage from './ProductImage.jsx'
import { useStore, money } from '../StoreContext.jsx'
import { brand } from '../data/brand.js'

const DELAY = 5500

export default function Hero() {
  const { products } = useStore()
  const slides = brand.slides
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => setI((n) => (n + 1) % slides.length), DELAY)
    return () => clearTimeout(t)
  }, [i, paused, slides.length])

  const go = (n) => setI((n + slides.length) % slides.length)

  return (
    <section className="hero" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} aria-roledescription="carousel" aria-label="Featured rides">
      {slides.map((s, n) => {
        const p = products.find((x) => x.id === s.productId)
        if (!p) return null
        return (
          <div key={n} className={n === i ? 'slide on' : 'slide'} style={{ background: s.bg }} aria-hidden={n !== i}>
            {s.image && <img className="photo" src={s.image} alt="" />}
            <div className="word" aria-hidden="true">{s.word} {s.word}</div>
            <div className="wrap slidein">
              <div className="copy">
                <h1>{s.title}</h1>
                <p>{s.text}</p>
                <div className="ctas">
                  <Link className="btn" to={`/models/${p.id}`} tabIndex={n === i ? 0 : -1}>{p.name} · {money(p.price)}</Link>
                  <a className="btn ghost light" href="#catalog" tabIndex={n === i ? 0 : -1}>Browse all</a>
                </div>
              </div>
              {!s.image && <div className="bike"><ProductImage product={p} bare className="spin" /></div>}
            </div>
            <div className="road" aria-hidden="true" />
          </div>
        )
      })}
      <div className="hctl">
        <button onClick={() => go(i - 1)} aria-label="Previous slide">‹</button>
        <div className="dots">
          {slides.map((_, n) => (
            <button key={n} className={n === i ? 'dot on' : 'dot'} onClick={() => go(n)} aria-label={`Slide ${n + 1}`}>
              {n === i && <span key={`${i}-${paused}`} className={paused ? 'fill paused' : 'fill'} style={{ animationDuration: `${DELAY}ms` }} />}
            </button>
          ))}
        </div>
        <button onClick={() => go(i + 1)} aria-label="Next slide">›</button>
      </div>
    </section>
  )
}
