import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Footer = () => {

  // Subscribe form state and handler
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [message, setMessage] = useState('')

  function isValidEmail(value) {
    // simple, permissive regex
    return /^\S+@\S+\.\S+$/.test(value)
  }

  function handleSubscribe(e) {
    if (e && e.preventDefault) e.preventDefault()

    if (!email) {
      setStatus('error')
      setMessage('Please enter your email address.')
      return
    }

    if (!isValidEmail(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      // Save subscriber locally for now (could be replaced with API call)
      const key = 'subscribers'
      const existing = JSON.parse(localStorage.getItem(key) || '[]')
      // avoid duplicates
      if (!existing.includes(email)) {
        existing.push(email)
        localStorage.setItem(key, JSON.stringify(existing))
      }

      setStatus('success')
      setMessage('Thank you for subscribing!')
      setEmail('')
    } catch (err) {
      console.error('subscribe error', err)
      setStatus('error')
      setMessage('Something went wrong. Please try again later.')
    }
  }

  return (

    <footer className="w-full bg-green-900 text-white pt-10 pb-20 md:pb-5 px-6 font-medium">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Shop */}
        <div className="space-y-3 pl-10">
          <h3 className="font-semibold mb-4">Shop</h3>
          <ul className="space-y-2">
            <li><Link to="/shop?category=new" className="hover:text-green-300">New Arrivals</Link></li>
            <li><Link to="/category/women" className="hover:text-green-300">Women</Link></li>
            <li><Link to="/category/men" className="hover:text-green-300">Men</Link></li>
            <li><Link to="/category/children" className="hover:text-green-300">Children</Link></li>
            <li><Link to="/category/accessories" className="hover:text-green-300">Accessories</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="space-y- pl-27.5">
          <h3 className="font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-gray-200">
            <li><Link to="/contact" className="hover:text-green-300">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-green-300">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:text-green-300">Shipping Information</Link></li>
            <li><Link to="/return-policy" className="hover:text-green-300">Return Policy</Link></li>
            <li><Link to="/size-guide" className="hover:text-green-300">Size Guide</Link></li>
          </ul>
        </div>

        {/* Legal & Company */}
        {/* <div className="space-y-3">
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-200">
            <li><Link to="/about" className="hover:text-green-300">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-green-300">Blog</Link></li>
            <li><Link to="/terms" className="hover:text-green-300">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-green-300">Privacy Policy</Link></li>
            <li><Link to="/careers" className="hover:text-green-300">Careers</Link></li>
          </ul>
        </div> */}


        {/* Newsletter Signup */}
        <div className='ml-30 w-100 text-center'>
          <p className="font-semibold mb-3">
            The List Everyone Wants To Be On.
          </p>

          <p className="text-sm text-gray-200 mb-4">
            Sign Up To Get Early Access, VIP Perks, And Exclusive Offers Straight
            To Your Inbox.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col space-y-3" noValidate>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="rounded-2xl bg-white px-4 py-2 text-black focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
            />
            <button
              type="submit"
              className="rounded-2xl w-70 mx-auto bg-green-700 text-white font-semibold py-2 cursor-pointer hover:bg-green-600 transition disabled:opacity-50"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>

            {/* feedback */}
            <div aria-live="polite" className="min-h-6">
              {status === 'error' && (
                <p className="text-red-300 text-sm">{message}</p>
              )}
              {status === 'success' && (
                <p className="text-green-200 text-sm">{message}</p>
              )}
            </div>
          </form>
        </div>


      </div>

      {/* Social Media Links */}
      <div className="mt-8 ml-12.5 md:mt-0">
        <h3 className="font-semibold mb-4">Follow Us</h3>
        <ul className="flex flex-wrap gap-4">
          <li>
            <a 
              href="https://www.facebook.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-green-300 transition-colors"
            >
              Facebook
            </a>
          </li>
          <li>
            <a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-green-300 transition-colors"
            >
              Instagram
            </a>
          </li>
          <li>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-green-300 transition-colors"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-300">
        <p>© 2025 Aso. All Rights Reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <Link to="/terms" className="hover:text-green-300">Terms</Link>
          <Link to="/privacy" className="hover:text-green-300">Privacy</Link>
          <Link to="/contact" className="hover:text-green-300">Contact</Link>
        </div>
      </div>

    </footer>
  )
}

export default Footer