// Shows product.image (or a gallery photo) if set; otherwise an illustration drawn in the product's color.
const Wheel = ({ cx, cy, r }) => (
  <g className="wheel" transform={`translate(${cx} ${cy})`}>
    <circle r={r} fill="#0b0b0d" /><circle r={r * 0.62} fill="#2c2c32" />
    <circle r={r * 0.2} fill="#9a9aa3" />
    <path d={`M0 ${-r * 0.6}V${r * 0.6}M${-r * 0.6} 0H${r * 0.6}`} stroke="#9a9aa3" strokeWidth="3" />
  </g>
)

function Art({ shape, color }) {
  switch (shape) {
    case 'scooter': return (<>
      <Wheel cx={100} cy={200} r={32} /><Wheel cx={305} cy={200} r={32} />
      <path d="M62 192C68 145 115 125 170 128L205 152H252L256 196H108Z" fill={color} />
      <path d="M254 196L268 120L294 112L303 200Z" fill={color} />
      <rect x="92" y="112" width="96" height="17" rx="8" fill="#1a1a1d" />
      <path d="M282 112L264 96" stroke="#1a1a1d" strokeWidth="9" strokeLinecap="round" />
      <circle cx="294" cy="118" r="9" fill="#ffe3b0" />
      <rect x="190" y="180" width="64" height="9" rx="4" fill="#26262b" />
    </>)
    case 'helmet': return (<>
      <path d="M105 180C100 95 165 55 230 72C292 88 305 140 292 180L252 196H138Z" fill={color} />
      <path d="M198 112C248 108 295 124 297 154L205 156Z" fill="#101013" opacity=".9" />
      <path d="M118 140C170 98 245 92 290 120" stroke="#fff" strokeOpacity=".55" strokeWidth="7" fill="none" />
      <rect x="140" y="188" width="110" height="14" rx="7" fill="#1a1a1d" />
    </>)
    case 'jacket': return (<>
      <path d="M135 62L172 50C190 72 210 72 228 50L265 62L335 125L305 165L278 145V218H122V145L95 165L65 125Z" fill={color} />
      <path d="M200 70V218" stroke="#0b0b0d" strokeWidth="4" />
      <rect x="122" y="130" width="156" height="8" fill="#ffffff" opacity=".55" />
      <rect x="122" y="168" width="156" height="8" fill="#ffffff" opacity=".55" />
    </>)
    case 'box': return (<>
      <rect x="95" y="68" width="210" height="136" rx="26" fill={color} />
      <path d="M95 118H305" stroke="#000" strokeOpacity=".25" strokeWidth="4" />
      <rect x="184" y="108" width="32" height="18" rx="4" fill="#1a1a1d" />
      <rect x="118" y="168" width="64" height="14" rx="5" fill="#ff3b30" />
    </>)
    default: return (<>
      <Wheel cx={95} cy={192} r={38} /><Wheel cx={312} cy={192} r={38} />
      <path d="M95 192L162 172" stroke="#44444a" strokeWidth="8" strokeLinecap="round" />
      <path d="M148 126C158 100 222 94 248 118L242 142H148Z" fill={color} />
      <rect x="150" y="142" width="92" height="40" rx="8" fill="#2b2b30" />
      <rect x="116" y="170" width="70" height="9" rx="4" fill="#8e8e96" />
      <rect x="232" y="116" width="66" height="14" rx="7" fill="#1a1a1d" transform="rotate(-8 232 116)" />
      <path d="M312 192L280 106" stroke="#c4c4cc" strokeWidth="8" strokeLinecap="round" />
      <path d="M280 106L258 98" stroke="#1a1a1d" strokeWidth="9" strokeLinecap="round" />
      <circle cx="286" cy="114" r="10" fill="#ffe3b0" />
    </>)
  }
}

export default function ProductImage({ product, variant = 0, bare = false, className = '' }) {
  const photo = variant === 0 ? product.image : product.images?.[variant - 1]
  if (photo) return <img src={photo} alt={product.name} className={`pimg ${className}`} />
  return (
    <svg className={`pimg ${className}`} viewBox="0 0 400 260" role="img" aria-label={product.name}>
      {!bare && <rect width="400" height="260" fill="#1b1b20" />}
      {!bare && variant % 3 === 0 && <circle cx="200" cy="130" r="115" fill={product.color} opacity=".18" />}
      {!bare && variant % 3 === 1 && <path d="M-20 260L120-20M60 260L200-20M140 260L280-20M220 260L360-20M300 260L440-20" stroke={product.color} strokeOpacity=".2" strokeWidth="22" />}
      {!bare && variant % 3 === 2 && <circle cx="200" cy="130" r="100" fill="none" stroke={product.color} strokeOpacity=".35" strokeWidth="14" />}
      <ellipse cx="200" cy="232" rx="140" ry="8" fill="#000" opacity=".4" />
      <Art shape={product.shape || 'bike'} color={product.color} />
    </svg>
  )
}
