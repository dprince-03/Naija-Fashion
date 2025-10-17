import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X } from 'lucide-react';

const initialItems = [
  {
    id: 1,
    name: 'Premium Aso-Oke Set',
    price: 75000,
    image: '/images/FeaturedPages/Feature1.webp',
    quantity: 1,
    size: 'L',
  },
  {
    id: 2,
    name: 'Designer Ankara Dress',
    price: 45000,
    image: '/images/FeaturedPages/Feature2.webp',
    quantity: 2,
    size: 'M',
  },
  {
    id: 3,
    name: 'Traditional Agbada',
    price: 65000,
    image: '/images/FeaturedPages/Feature3.webp',
    quantity: 1,
    size: 'XL',
  },
];

export default function Cart() {
  const [items, setItems] = useState(initialItems);

  const updateQuantity = (id, delta) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 2000; // ₦2,000 shipping
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">Size: {item.size}</p>
                  <p className="mt-1 text-sm font-medium text-gray-900">₦{item.price.toLocaleString()}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X size={20} />
                </button>
              </div>
            ))}
            
            {items.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <Link
                  to="/shop"
                  className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </div>

          {/* Order Summary - Takes up 1 column */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">₦{shipping.toLocaleString()}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Total</span>
                    <span className="font-medium">₦{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <Link
                to="/checkout"
                className={`mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-md text-center inline-block
                  ${items.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'}`}
                onClick={(e) => items.length === 0 && e.preventDefault()}
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  
  }
