import React from 'react'
import { useParams, Link } from 'react-router-dom'

const dummyProducts = {
  men: [
    { id: 1, name: 'Classic Agbada', price: 70000, image: '/images/FeaturedPages/Feature7.webp', rating: 4.8 },
    { id: 2, name: 'Designer Agbada', price: 95000, image: '/images/FeaturedPages/Feature6.webp', rating: 4.9 },
    { id: 3, name: 'Traditional Agbada', price: 65000, image: '/images/FeaturedPages/Feature3.webp', rating: 5.0 },
  ],
  women: [
    { id: 4, name: 'Luxury Aso-Oke Gown', price: 85000, image: '/images/FeaturedPages/Feature4.webp', rating: 4.7 },
    { id: 5, name: 'Designer Ankara Dress', price: 45000, image: '/images/FeaturedPages/Feature2.webp', rating: 4.9 },
    { id: 6, name: 'Premium Ankara Set', price: 55000, image: '/images/FeaturedPages/Feature5.webp', rating: 4.6 },
  ],
  children: [
    { id: 7, name: 'Kids Ankara Dress', price: 35000, image: '/images/QuickCategories/Childrenfashion.webp', rating: 4.5 },
    { id: 8, name: 'Children Aso-Oke', price: 40000, image: '/images/FeaturedPages/Feature1.webp', rating: 4.7 },
  ],
  adire: [
    { id: 9, name: 'Adire Tunic', price: 30000, image: '/images/FeaturedPages/Feature2.webp', rating: 4.6 },
    { id: 10, name: 'Adire Wrapper', price: 32000, image: '/images/FeaturedPages/Feature3.webp', rating: 4.8 },
  ],
  ankara: [
    { id: 11, name: 'Ankara Maxi Dress', price: 50000, image: '/images/FeaturedPages/Feature4.webp', rating: 4.9 },
    { id: 12, name: 'Ankara Top', price: 25000, image: '/images/FeaturedPages/Feature5.webp', rating: 4.7 },
  ],
  'aso-oke': [
    { id: 13, name: 'Aso-Oke Wrapper', price: 60000, image: '/images/FeaturedPages/Feature1.webp', rating: 4.8 },
    { id: 14, name: 'Bridal Aso-Oke', price: 120000, image: '/images/FeaturedPages/Feature4.webp', rating: 5.0 },
  ],
}

const CategoryPage = () => {
  const { category } = useParams()
  const label = category ? category.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : 'Category'
  const products = dummyProducts[category] || []

  return (
    <div className="min-h-screen mt-10 bg-[#FAF9F6] py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-green-700">{label}</h1>
        <p className="text-gray-700 mb-8 text-lg">Browse our exclusive selection of {label} fashion.</p>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-green-700 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">₦{product.price.toLocaleString()}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-500">★</span>
                    <span className="text-gray-600 text-sm">{product.rating}</span>
                  </div>
                  <button className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">View Details</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-6">No products found for this category yet.</p>
            <Link to="/shop" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">Go to Shop</Link>
          </div>
        )}
        <div className="mt-8 text-center">
          <Link to="/" className="text-green-700 underline">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
