import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Toast from './components/Toast.jsx'
import Home from './pages/Models.jsx'
import ProductPage from './pages/ProductPage.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import Confirmation from './pages/Confirmation.jsx'
import { brand } from './data/brand.js'

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0); document.title = `${brand.name} — ${brand.tagline}` }, [pathname])
  useEffect(() => { document.documentElement.style.setProperty('--accent', brand.accent) }, [])
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order/:orderId" element={<Confirmation />} />
          <Route path="*" element={<p className="wrap empty">Page not found.</p>} />
        </Routes>
      </main>
      <Footer />
      <Toast />
    </>
  )
}
