import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mic, Camera, ShoppingBag, Heart, User, Search, Menu, X } from 'lucide-react'

const Navbar = ({ user, setUser }) => {
    const navigate = useNavigate()

    const [searchTerm, setSearchTerm] = useState("")
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [activeIndex, setActiveIndex] = useState(-1)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [cartCount, setCartCount] = useState(0)

    const inputRef = useRef(null)
    const suggestionsRef = useRef(null)

    // Below is a static list of items to search from. In a real app, you'd fetch this from a server.
    const items = [
        'Shirt',
        'Trousers',
        'Sneakers',
        'Hat',
        'Jacket',
        'Socks',
        'Gloves',
        'Traditional Wear',
        'Ankara',
        'Aso-Oke',
    ]

    useEffect(() => {
        // Read cart from localStorage (assumes an array of items)
        try {
            const stored = JSON.parse(localStorage.getItem('cart') || '[]')
            setCartCount(Array.isArray(stored) ? stored.length : 0)
        } catch (e) {
            setCartCount(0)
        }
    }, [])

    const filtered = searchTerm
        ? items.filter((it) => it.toLowerCase().includes(searchTerm.toLowerCase()))
        : []

    function handleSelect(value) {
        setSearchTerm(value)
        setShowSuggestions(false)
        // route to a search results page with query param
        navigate(`/search?q=${encodeURIComponent(value)}`)
    }

    function handleKeyDown(e) {
        if (!showSuggestions) return
        if (e.key === 'ArrowDown') {
            e.preventDefault()
            setActiveIndex((i) => Math.min(i + 1, filtered.length - 1))
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            setActiveIndex((i) => Math.max(i - 1, 0))
        } else if (e.key === 'Enter') {
            if (activeIndex >= 0 && filtered[activeIndex]) {
                handleSelect(filtered[activeIndex])
            } else {
                navigate(`/search?q=${encodeURIComponent(searchTerm)}`)
                setShowSuggestions(false)
            }
        } else if (e.key === 'Escape') {
            setShowSuggestions(false)
        }
    }

    // close suggestions when clicking outside
    useEffect(() => {
        function onDoc(e) {
            if (
                suggestionsRef.current &&
                !suggestionsRef.current.contains(e.target) &&
                inputRef.current &&
                !inputRef.current.contains(e.target)
            ) {
                setShowSuggestions(false)
                setActiveIndex(-1)
            }
        }
        document.addEventListener('click', onDoc)
        return () => document.removeEventListener('click', onDoc)
    }, [])

    return (
        <nav className="bg-[#FAF9F6] text-black w-full absolute top-0 border-b border-gray-200 px-4 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left: Logo + mobile menu button */}
                <div className="flex items-center space-x-3">
                    <button
                        className="md:hidden p-2"
                        aria-label="Toggle menu"
                        onClick={() => setIsMenuOpen((s) => !s)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>

                    <Link to="/" className="flex items-center pl-1 space-x-2">
                        <div className="w-6 h-6 bg-green-900 rounded-sm" />
                        <span className="font-semibold text-lg">Aso</span>
                    </Link>
                </div>

                {/* Center: Search */}
                <div className="flex-1 flex justify-center px-4">
                    <div className="relative w-full max-w-2xl">
                        <div className="flex items-center bg-white border rounded-full px-3 py-1 shadow-sm">
                            <Search className="text-gray-500 mr-2" />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search fabrics, styles, designers..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value)
                                    setShowSuggestions(true)
                                    setActiveIndex(-1)
                                }}
                                onKeyDown={handleKeyDown}
                                className="flex-1 outline-none text-sm bg-transparent"
                                aria-autocomplete="list"
                                aria-expanded={showSuggestions}
                            />
                            <Mic size={18} className="text-gray-500 mr-2 cursor-pointer" />
                            <Camera size={18} className="text-gray-500 cursor-pointer" />
                        </div>

                        {/* suggestions */}
                        {showSuggestions && filtered.length > 0 && (
                            <ul
                                ref={suggestionsRef}
                                role="listbox"
                                className="absolute z-20 left-0 right-0 bg-white border rounded-md mt-2 max-h-48 overflow-auto shadow-lg"
                            >
                                {filtered.map((it, idx) => (
                                    <li
                                        key={it}
                                        role="option"
                                        aria-selected={activeIndex === idx}
                                        className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                                            activeIndex === idx ? 'bg-gray-100' : ''
                                        }`}
                                        onMouseDown={(e) => e.preventDefault()}
                                        onClick={() => handleSelect(it)}
                                        onMouseEnter={() => setActiveIndex(idx)}
                                    >
                                        {it}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* Right: Icons */}
                <div className="flex items-center space-x-4">
                    <Link to="/cart" className="relative">
                        <ShoppingBag className="text-black cursor-pointer" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    <Link to="/favorites">
                        <Heart className="text-black cursor-pointer" />
                    </Link>
                    <Link to="/account">
                        <User className="text-black cursor-pointer" />
                    </Link>

                    {/* Show login / signup links on medium+ screens (hide when logged in) */}
                    <div className="hidden md:flex items-center space-x-3">
                        {!user ? (
                            <>
                                <Link to="/login" className="text-sm text-black hover:text-green-700">Log in</Link>
                                <Link to="/signup" className="text-sm bg-green-700 text-white px-3 py-1 rounded">Sign up</Link>
                            </>
                        ) : (
                            <>
                                {/* <span className="text-sm">Hi, {user.email}</span> */}
                                <button
                                    onClick={() => setUser(null)}
                                    className="text-sm bg-gray-200 px-3 py-1 cursor-pointer rounded"
                                >
                                    Log out
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile menu panel */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-4 py-3">
                        <Link to="/" className="block py-2">Home</Link>
                        <Link to="/shop" className="block py-2">Shop</Link>
                        <Link to="/about" className="block py-2">About</Link>
                        <Link to="/contact" className="block py-2">Contact</Link>
                        <Link to="/login" className="block py-2">Log in</Link>
                        <Link to="/signup" className="block py-2">Sign up</Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar