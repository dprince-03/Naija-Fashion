import React from 'react';
import PageLayout from '../components/PageLayout';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'The Evolution of Nigerian Fashion',
      excerpt: 'From traditional attire to modern interpretations, explore the rich history of Nigerian fashion...',
      author: 'Amina Ibrahim',
      date: 'June 15, 2023',
      category: 'Fashion History',
      imageUrl: '/images/blog/evolution.webp'
    },
    {
      id: 2,
      title: 'Sustainable Fashion in Africa',
      excerpt: 'How African designers are leading the way in sustainable fashion practices...',
      author: 'David Okonkwo',
      date: 'June 10, 2023',
      category: 'Sustainability',
      imageUrl: '/images/blog/sustainable.webp'
    },
    {
      id: 3,
      title: 'Style Guide: Modern Ankara Looks',
      excerpt: 'Creative ways to style Ankara prints for contemporary fashion...',
      author: 'Grace Adebayo',
      date: 'June 5, 2023',
      category: 'Style Guide',
      imageUrl: '/images/blog/ankara.webp'
    },
    {
      id: 4,
      title: 'The Rise of African Fashion in Global Markets',
      excerpt: 'How African fashion is making its mark on the international fashion scene...',
      author: 'Samuel Eze',
      date: 'May 30, 2023',
      category: 'Industry Trends',
      imageUrl: '/images/blog/global.webp'
    }
  ];

  const categories = [
    'All',
    'Fashion History',
    'Sustainability',
    'Style Guide',
    'Industry Trends',
    'Designer Spotlight',
    'Fashion Tips'
  ];

  return (
    <PageLayout 
      title="Fashion Blog" 
      subtitle="Discover the latest trends, stories, and insights from the world of African fashion"
    >
      <div className="max-w-7xl mx-auto">
        {/* Categories */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-4 pb-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full whitespace-nowrap
                  ${index === 0 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img
              src="/images/blog/featured.webp"
              alt="Featured post"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
              <span className="bg-green-600 text-sm px-3 py-1 rounded-full">Featured</span>
              <h2 className="text-3xl font-bold mt-4 mb-2">The Future of African Fashion</h2>
              <p className="text-gray-200 mb-4">Exploring how technology and tradition are shaping the future of African fashion design...</p>
              <div className="flex items-center space-x-4">
                <img
                  src="/images/blog/author.webp"
                  alt="Author"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">Chioma Nnadi</p>
                  <p className="text-sm text-gray-300">June 20, 2023 · 8 min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-green-600 font-medium">{post.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-sm text-gray-500">{post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-600 mb-6">Stay updated with the latest fashion trends and stories</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-600"
            />
            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}