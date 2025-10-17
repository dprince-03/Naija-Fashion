import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('New Arrivals');
  const navigate = useNavigate();
  const tabs = ["All", "Adire", "Ankara", "Aso-Oke", "Quick Categories"];

  return (
    <>
      {/* HERO SECTION */}

      {/* Hero Image */}
      {/* <HeroSection /> */}
      <section className='w-full'>
        <div className="relative flex justify-center items-center mt-7 mx-1">
          <img src="/images/Hero.webp" alt="Hero" className="w-full h-140 mx-50 object-cover" />

          {/* Top-centered tab buttons over the hero image */}
          <div className="absolute top-4 left-0 right-0  text-black flex justify-center z-30">
            <div className="inline-flex gap-3 px-2 py-1 rounded-full">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab)
                    // build a slug and navigate
                    const slug = tab.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')
                    navigate(`/category/${slug}`)
                  }}
                  className={`px-4 py-1  cursor-pointer rounded-full text-sm transition-all duration-150 ${
                    activeTab === tab
                      ? 'bg-white text-black font-semibold shadow'
                      : 'bg-white/20 text-white hover:bg-white/40'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 ">
              <h2 className="text-5xl font-script pl-230">
                Timeless <span className="not-italic font-bold">Nigerian Fashion</span>
              </h2>
              
              <p className="text-lg leading-relaxed my-6 pr-190">
                  EMBRACE THE ELEGANCE OF <br />
                  ADIRE, ANKARA AND <br />
                  ASO OKE. <br />
                  CURATED FOR YOU.
              </p>
                            
              <button className="bg-green-700 cursor-pointer hover:bg-green-600 text-white font-semibold px-6 py-3 mt-9 rounded-2xl transition">
                  Shop Now
              </button>
            </div>

        </div>
      </section>
    </>
  );
};

export default HeroSection;