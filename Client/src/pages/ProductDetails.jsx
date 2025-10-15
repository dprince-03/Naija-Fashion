import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, Star, ShoppingBag, ChevronDown } from 'lucide-react';

// Dummy product data
const product = {
  id: 1,
  name: 'Premium Aso-Oke Set',
  price: 75000,
  images: [
    '/images/FeaturedPages/Feature1.webp',
    '/images/FeaturedPages/Feature2.webp',
    '/images/FeaturedPages/Feature3.webp',
  ],
  description: 'Luxurious hand-woven Aso-Oke set, perfect for special occasions. Features traditional patterns with a modern twist. Made from the finest quality materials for comfort and durability.',
  details: [
    'Hand-woven premium fabric',
    'Traditional patterns',
    'Suitable for ceremonies',
    'Includes complete set',
    'Dry clean only'
  ],
  sizes: ['S', 'M', 'L', 'XL'],
  rating: 4.8,
  reviews: 124,
  category: 'Traditional Wear'
};

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(null);
  const [showSizes, setShowSizes] = useState(false);
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [isFavorite, setIsFavorite] = useState(false);

  const addToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    // Add to cart logic here
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1 w-full">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(image)}
                  className={`relative rounded-lg overflow-hidden ${
                    mainImage === image ? 'ring-2 ring-green-500' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="mt-2 text-sm text-gray-500">{product.category}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-gray-500">{product.reviews} reviews</span>
            </div>

            <p className="text-2xl font-bold text-gray-900">₦{product.price.toLocaleString()}</p>

            <div className="prose prose-sm text-gray-500">
              <p>{product.description}</p>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <button
                  onClick={() => setShowSizes(!showSizes)}
                  className="w-full px-4 py-2 text-left border rounded-lg flex items-center justify-between"
                >
                  <span>{selectedSize || 'Select Size'}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${showSizes ? 'rotate-180' : ''}`} />
                </button>

                {showSizes && (
                  <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => {
                          setSelectedSize(size);
                          setShowSizes(false);
                        }}
                        className="block w-full px-4 py-2 text-left hover:bg-gray-50"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={addToCart}
                  className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </button>

                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-3 border rounded-lg hover:bg-gray-50"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-medium text-gray-900 mb-4">Product Details</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-500">
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
