import React, { useState } from 'react'
// import HomeImage from '../public/img/HomeImage'
// import Hero from "/public/img/Hero"

const HomePage = () => {

    const [ active, setActive ] = useState("All");

    const tabs = [ "All", "Adire", "Ankara", "Aso-oke", "Akwa" ]

    const [activeTab, setActiveTab] = useState("New Arrivals");


    const featured = [
        { title: "Stylish Agbada", price: "₦45,000", rating: 4.7, img: "https://via.placeholder.com/200" },
        { title: "Elegant Aso-Oke Dress", price: "₦75,000", rating: 5.7, img: "https://via.placeholder.com/200" },
        { title: "Stylish Iro & Buba", price: "₦65,000", rating: 5.0, img: "https://via.placeholder.com/200" },
    ];


    const categories = [
        { name: "Women's Fashion", img: "https://via.placeholder.com/200" },
        { name: "Children's Fashion", img: "https://via.placeholder.com/200" },
        { name: "Men’s Fashion", img: "https://via.placeholder.com/200" },
    ];

    // const image = [
    //     {
    //         src: "/img/hero", alt: "Hero Image"
    //     }
    // ]

    return (
        <>
            <div className='pt-20 pb-10 bg-white'>
                {/* <div className='bg-white text-black'>
                    <div className='flex justify-center'>
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActive(tab)}
                                className={`pb-2 border-b-2 transition bg-transparent shadow-none outline-none ${
                                    active === tab
                                        ? "border-green-500 text-green-600 font-semibold"
                                        : "border-transparent text-gray-600 hover:text-green-500"
                                }`}
                                style={{ background: 'none' }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="relative flex justify-center items-center mt-8">
                    
                    <img src="/images/hero.jpg" alt="Hero" className="w-125 h-150 mx-auto my-5 object-cover filter " />
                    
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                        <h1 className="text-black text-2xl font-bold   px-6 py-2 rounded">
                            Times Nigerian Fashion
                        </h1>
                        <h3 className="mt-6 text-black text-lg w-full max-w-xl text-center drop-shadow  px-4 py-2 rounded">
                            Embrace the vibrant colors and bold patterns of Nigerian fashion with our exclusive collection of traditional and contemporary styles.
                        </h3>
                    </div>
                </div> */}




                {/* Hero Section */}


                {/* About Us */}
                <section className="px-6 py-12 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-green-700">About Us</h3>
                    <p className="max-w-2xl mx-auto text-gray-600">
                    We are a Nigerian fashion brand dedicated to celebrating heritage through
                    <span className="text-green-500"> Ankara, Adire, and Aso-Oke</span>. Creating timeless pieces that blend traditional
                    craftsmanship with modern style while empowering local artisans and inspiring cultural pride.
                    </p>
                </section>


                {/* Featured Collections */}
                <section className="px-6 py-12">

                    <h3 className="text-2xl font-bold text-center text-green-700 mb-6">Featured Collections</h3>
                    <div className="flex justify-center space-x-6 mb-6">
                        {["New Arrivals", "Trending Now", "Occasional Wear"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-1 border-b-2 ${
                            activeTab === tab ? "border-green-500 text-green-600 font-semibold" : "border-transparent text-gray-500"
                            }`}
                        >
                            {tab}
                        </button>

                            ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {featured.map((item, i) => (
                        <div key={i} className="bg-white rounded-xl shadow p-4 text-center">
                            <img src={item.img} alt={item.title} className="w-full h-56 object-cover rounded-lg mb-4" />
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-green-600 font-bold">{item.price}</p>
                            <p className="text-yellow-500">⭐ {item.rating}</p>
                        </div>
                        ))}
                    </div>
                </section>


                {/* Quick Categories */}
                <section className="px-6 py-12 bg-gray-100 text-center">
                    <h3 className="text-2xl font-bold text-green-700 mb-6">Quick Categories</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {categories.map((cat, i) => (
                            <div key={i} className="bg-white rounded-xl shadow p-4">
                        
                                <img src={cat.img} alt={cat.name} className="w-full h-56 object-cover rounded-lg mb-4" />
                                <h4 className="font-semibold">{cat.name}</h4>
                            </div>
                        ))}
                    </div>

                    <button className="mt-6 bg-green-500 px-6 py-2 rounded-full font-semibold text-white">Shop Now</button>
                </section>


            </div>
        </>
    )
}

export default HomePage