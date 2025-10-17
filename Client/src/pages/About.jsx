import React from 'react';
import PageLayout from '../components/PageLayout';

export default function About() {
  const stats = [
    { label: 'Founded', value: '2020' },
    { label: 'Local Artisans', value: '500+' },
    { label: 'Products', value: '1000+' },
    { label: 'Happy Customers', value: '50k+' }
  ];

  const values = [
    {
      title: 'Cultural Heritage',
      description: 'We celebrate and preserve Nigerian cultural heritage through contemporary fashion.'
    },
    {
      title: 'Sustainability',
      description: 'Our commitment to sustainable and ethical fashion practices guides everything we do.'
    },
    {
      title: 'Community',
      description: 'We empower local artisans and communities through fair partnerships and opportunities.'
    },
    {
      title: 'Innovation',
      description: 'We blend traditional craftsmanship with modern design and technology.'
    }
  ];

  return (
    <PageLayout
      title="About Aso"
      subtitle="Bringing Nigerian fashion to the world"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-16">
          <img
            src="/images/About1.webp"
            alt="Our Story"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Our Story</h2>
              <p className="max-w-2xl text-lg">
                From a small workshop in Lagos to a global fashion brand,
                our journey is rooted in passion for Nigerian culture and craftsmanship.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              To showcase the beauty and richness of Nigerian fashion to the world while
              empowering local communities and preserving our cultural heritage through
              sustainable and innovative fashion practices.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals who bring Nigerian fashion to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="/images/About2.webp"
                  alt="Team member"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg">Folake Adebayo</h3>
                <p className="text-gray-600">Creative Director</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="/images/About3.webp"
                  alt="Team member"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg">Chijioke Nnamdi</h3>
                <p className="text-gray-600">Head of Design</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="/images/About1.webp"
                  alt="Team member"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg">Amina Ibrahim</h3>
                <p className="text-gray-600">Operations Director</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-green-50 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of our mission to bring Nigerian fashion to the world stage.
            Discover our latest collections and support local artisans.
          </p>
          <a
            href="/shop"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors"
          >
            Shop Now
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
