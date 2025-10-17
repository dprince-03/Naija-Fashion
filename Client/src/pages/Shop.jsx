import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Filter, X } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Premium Aso-Oke Set',
    price: 75000,
    image: '/images/FeaturedPages/Feature1.webp',
    category: 'Traditional',
    rating: 4.8
  },
  {
    id: 2,
    name: 'Designer Ankara Dress',
    price: 45000,
    image: '/images/FeaturedPages/Feature2.webp',
    category: 'Modern',
    rating: 4.9
  },
  {
    id: 3,
    name: 'Traditional Agbada',
    price: 65000,
    image: '/images/FeaturedPages/Feature3.webp',
    category: 'Men\'s Wear',
    rating: 5.0
  },
  {
    id: 4,
    name: 'Luxury Aso-Oke Gown',
    price: 85000,
    image: '/images/FeaturedPages/Feature4.webp',
    category: 'Women\'s Wear',
    rating: 4.7
  },
  {
    id: 5,
    name: 'Premium Ankara Set',
    price: 55000,
    image: '/images/FeaturedPages/Feature5.webp',
    category: 'Modern',
    rating: 4.6
  },
  {
    id: 6,
    name: 'Designer Agbada',
    price: 95000,
    image: '/images/FeaturedPages/Feature6.webp',
    category: 'Men\'s Wear',
    rating: 4.9
  }
];

const categories = ['All', 'Traditional', 'Modern', 'Men\'s Wear', 'Women\'s Wear'];
const sortOptions = ['Newest', 'Price: Low to High', 'Price: High to Low', 'Most Popular'];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredProducts = products
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'Price: Low to High':
          return a.price - b.price;
        case 'Price: High to Low':
          return b.price - a.price;
        case 'Most Popular':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile filter dialog */}
      {showFilters && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setShowFilters(false)} />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium">Filters</h2>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 cursor-pointer rounded ${
                        selectedCategory === category
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-4">Sort By</h3>
                <div className="space-y-2">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setSortBy(option)}
                      className={`block w-full text-left px-3 py-2 cursor-pointer rounded ${
                        sortBy === option
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-900">Shop</h1>
          
          <button
            onClick={() => setShowFilters(true)}
            className="flex items-center gap-2 cursor-pointer lg:hidden bg-white px-4 py-2 rounded-md border"
          >
            <Filter className="w-5 h-5" />
            Filters
          </button>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Desktop filters */}
          <div className="hidden lg:block col-span-3 space-y-6">
            <div>
              <h3 className="font-medium mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-3 py-2 cursor-pointer rounded ${
                      selectedCategory === category
                        ? 'bg-green-50 text-green-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4">Sort By</h3>
              <div className="space-y-2">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSortBy(option)}
                    className={`block w-full text-left px-3 py-2 cursor-pointer rounded ${
                      sortBy === option
                        ? 'bg-green-50 text-green-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-3 right-3 p-2 bg-white cursor-pointer rounded-full shadow hover:bg-gray-100"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          favorites.has(product.id)
                            ? 'text-red-500 fill-red-500'
                            : 'text-gray-400'
                        }`}
                      />
                    </button>
                  </div> 
                  
                  <div className="p-4">
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <h3 className="mt-1 text-lg font-medium text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">₦{product.price.toLocaleString()}</p>
                    
                    <div className="mt-2 flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>

                    <Link
                      to={`/product/${product.id}`}
                      className="mt-4 block w-full bg-green-600 text-white text-center py-2 rounded-md hover:bg-green-700"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
