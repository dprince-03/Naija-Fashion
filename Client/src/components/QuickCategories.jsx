import React from 'react'

const QuickCategories = ({ categories = [
  { name: "Women's Fashion", img: '/images/QuickCategories/Womenfashion.webp' },
  { name: "Children's Fashion", img: '/images/QuickCategories/Childrenfashion.webp' },
  { name: "Men’s Fashion", img: '/images/QuickCategories/Menfashion.webp' },
] }) => {
  return (
    <div className='max-w-screen px-0'>
        {/* Quick Categories */}
                <section className="px-6 py-4 bg-gray-100 text-center">
                    <h1 className="text-4xl font-bold text-green-700 mb-2">Quick Categories</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {categories.map((cat, i) => (
                            <div key={i} className="bg-white rounded-xl shadow p-4">
                                <img src={cat.img} alt={cat.name} className="w-full h-100 object-cover rounded-lg mb-4" />
                                <h4 className="font-semibold">{cat.name}</h4>
                            </div>
                            ))}
                    </div>
                        <a href="/shop">
                          <button className="bg-green-500 px-6 py-2 mt-5 rounded-full font-semibold text-white cursor-pointer">
                            Shop Now
                          </button>
                        </a>
                </section>
    </div>
  )
}

export default QuickCategories