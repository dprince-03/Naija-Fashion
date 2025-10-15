// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './ui/Navbar'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Footer from './ui/Footer'
import MobileNav from './ui/MobileNav'
import Checkout from './pages/Checkout'
import CheckoutSuccess from './pages/CheckoutSuccess'
import ProductDetails from './pages/ProductDetails'
import Favorites from './pages/Favorites'
import Cart from './pages/Cart'
import SearchResults from './pages/SearchResults'
import Contact from './pages/Contact'
import About from './pages/About'
import Shop from './pages/Shop'
import FAQ from './pages/FAQ'
import Shipping from './pages/Shipping'
import SizeGuide from './pages/SizeGuide'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Careers from './pages/Careers'
import Blog from './pages/Blog'
import ReturnPolicy from './pages/ReturnPolicy'
import Account from './pages/Account'

function AppWrapper() {
  // read initial user from localStorage
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('user') || 'null')
    } catch (e) {
      return null
    }
  })

  // keep localStorage in sync when user changes
  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user))
    else localStorage.removeItem('user')
  }, [user])

  const location = useLocation()
  const hideShell = location.pathname === '/login' || location.pathname === '/signup'

  return (
    <>
      {!hideShell && <Navbar user={user} setUser={setUser} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/success" element={<CheckoutSuccess />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/size-guide" element={<SizeGuide />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      {!hideShell && <Footer />}
      {!hideShell && <MobileNav />}
    </>
  )
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  )
}
