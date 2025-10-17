import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';

const initialFavorites = [
  {
    id: 1,
    name: 'Luxury Aso-Oke Gown',
    price: 85000,
    image: '/images/FeaturedPages/Feature4.webp',
    rating: 4.8,
    category: 'Traditional Wear'
  },
  {
    id: 2,
    name: 'Premium Ankara Set',
    price: 55000,
    image: '/images/FeaturedPages/Feature5.webp',
    rating: 4.9,
    category: 'Modern Fashion'
  },
  {
    id: 3,
    name: 'Designer Agbada',
    price: 95000,
    image: '/images/FeaturedPages/Feature6.webp',
    rating: 5.0,
    category: 'Men\'s Wear'
  },
  {
    id: 4,
    name: 'Traditional Wrapper Set',
    price: 45000,
    image: '/images/FeaturedPages/Feature7.webp',
    rating: 4.7,
    category: 'Women\'s Wear'
  }
];

export default function Favorites() {
  const [favorites, setFavorites] = useState(initialFavorites);

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Favorites</h1>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => removeFromFavorites(item.id)}
                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow hover:bg-gray-100"
                  >
                    <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                  </button>
                </div>
                
                <div className="p-4">
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <h3 className="mt-1 text-lg font-medium text-gray-900">{item.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">₦{item.price.toLocaleString()}</p>
                  
                  <div className="mt-2 flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm text-gray-600">{item.rating}</span>
                  </div>

                  <Link
                    to={`/product/${item.id}`}
                    className="mt-4 block w-full bg-green-600 text-white text-center py-2 rounded-md hover:bg-green-700"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No favorites yet</p>
            <Link
              to="/shop"
              className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
            >
              Explore Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
