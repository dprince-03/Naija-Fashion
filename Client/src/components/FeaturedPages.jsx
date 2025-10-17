import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react';

export default function FeaturedCollections() {
  const [activeTab, setActiveTab] = useState('new');
  const scrollRef = useRef(null);

  // Use public/ images: Vite serves `public` files at the site root (/)
  const collections = {
    new: [
      { id: 1, title: 'Stylish Agbada', price: '₦45,000', rating: 4.7, category: 'Iro and Buba', img: '/images/FeaturedPages/Feature1.webp' },
      { id: 2, title: 'Elegant Aso–Oke Dress', price: '₦75,000', rating: 5.7, category: 'Afro Prints', img: '/images/FeaturedPages/Feature2.webp' },
      { id: 3, title: 'Stylish Iro & Buba', price: '₦65,000', rating: 5.0, category: 'Aṣọ Òkè', img: '/images/FeaturedPages/Feature3.webp' },
      { id: 4, title: 'Royal Ankara Set', price: '₦55,000', rating: 4.5, category: 'Aso', img: '/images/FeaturedPages/Feature4.webp' },
    ],
    trending: [
      { id: 5, title: 'Deluxe Aso Ebi', price: '₦80,000', rating: 5.0, category: 'Aso', img: '/images/FeaturedPages/Feature5.webp' },
      { id: 6, title: 'Rich Velvet Gown', price: '₦95,000', rating: 5.8, category: 'Aso', img: '/images/FeaturedPages/Feature6.webp' },
      { id: 7, title: 'Classic Agbada', price: '₦70,000', rating: 4.9, category: 'Aso', img: '/images/FeaturedPages/Feature7.webp' },
    ],
    occasion: [
      { id: 8, title: 'Traditional Wrapper', price: '₦60,000', rating: 5.0, category: 'Aso', img: '/images/FeaturedPages/Feature4.webp' },
      { id: 9, title: 'Bridal Aso Oke', price: '₦120,000', rating: 5.9, category: 'Aso', img: '/images/FeaturedPages/Feature1.webp' },
      // fixed typo (Featur5 -> Feature5)
      { id: 10, title: 'Casual Aso Dress', price: '₦40,000', rating: 4.5, category: 'Aso', img: '/images/FeaturedPages/Feature5.webp' },
    ],
  };

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = direction === 'left' ? -350 : 350;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const activeItems = collections[activeTab];

  return (
    <div className="w-full h-full flex flex-col bg-[#F4F4F4] rounded-xl">
      <section className="relative max-w-7xl mx-auto px-4 py-4">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-center text-green-700 mb-2">Featured Collections</h1>

        {/* Tabs */}
        <div className="flex justify-center space-x-6 mb-4 border-b border-gray-200">
          {['new', 'trending', 'occasion'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 font-medium cursor-pointer transition-all duration-300 ${
                activeTab === tab
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-black hover:text-green-600'
              }`}
            >
              {tab === 'new' && 'New Arrivals'}
              {tab === 'trending' && 'Trending Now'}
              {tab === 'occasion' && 'Occasional Wear'}
            </button>
          ))}
        </div>

        {/* Scroll buttons */}
        {/* <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white border rounded-full p-3 shadow hover:bg-gray-50"
          onClick={() => scroll('left')}
        >
          <ChevronLeft size={20} />
        </button> */}

        {/* <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white border rounded-full p-3 shadow hover:bg-gray-50"
          onClick={() => scroll('right')}
        >
          <ChevronRight size={20} />
        </button> */}

        {/* Card container */}
        <div
          ref={scrollRef}
          id="featured-scroll"
          className="flex overflow-x-auto scroll-smooth no-scrollbar space-x-6 px-2"
        >
          {activeItems.map((item) => (
            <div key={item.id} className="flex-none w-64 bg-white rounded-xl shadow-sm relative group">
              {/* Image */}
              <div className="relative">
                <a href="">
                  <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-80 object-cover rounded-t-xl"
                  />
                  {/* <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:scale-105 transition">
                      <Heart size={18} className="text-gray-500" />
                  </button> */}
                </a>
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-sm text-gray-400">{item.category}</p>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="text-sm font-bold text-gray-800 mt-1">{item.price}</p>

                <div className="flex items-center gap-1 text-sm text-gray-500 mt-2">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span>{item.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
