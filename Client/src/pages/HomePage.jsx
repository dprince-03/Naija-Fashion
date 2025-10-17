import React, { useState } from 'react'
// import HomeImage from '../public/img/HomeImage'
// import Hero from "/public/img/Hero"
// import Hero from "../public/img/Hero"
import HeroSection from '../components/HeroSection'
import GeneralSearch from '../ui/OccasionTabs'
import AboutUs from '../components/AboutUs'
import FeaturedPages from '../components/FeaturedPages'
import QuickCategories from '../components/QuickCategories'
import {ChevronLeft} from 'lucide-react'    
import {ChevronRight} from 'lucide-react'

const HomePage = () => {

    const [active, setActive] = useState("All");

    const tabs = ["All", "Adire", "Ankara", "Aso-oke", "Akwa"]

    const [activeTab, setActiveTab] = useState("New Arrivals");


    const featured = [
        { title: "Stylish Agbada", price: "₦45,000", rating: 4.7, img: "https://via.placeholder.com/200" },
        { title: "Elegant Aso-Oke Dress", price: "₦75,000", rating: 5.7, img: "https://via.placeholder.com/200" },
        { title: "Stylish Iro & Buba", price: "₦65,000", rating: 5.0, img: "https://via.placeholder.com/200" },
        // { title: "Something", price: "₦265,000", rating: 4.5, img: "https://via.placeholder.com/200" },
        // { title: "Buba", price: "₦650,000", rating: 3.0, img: "https://via.placeholder.com/200" },
        // { title: "Stylish Iro", price: "₦3,265,000", rating: 1.5, img: "https://via.placeholder.com/200" },
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
            <div className='bg-[#F4F4F4] max-w-screen mx-auto'>
                <GeneralSearch />
                <HeroSection />
                <AboutUs />
                <FeaturedPages />
                <QuickCategories />
            </div>
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
                        
                        <img src="/images/Hero.webp" alt="Hero" className="w-125 h-150 mx-auto my-5 object-cover filter " />
                        
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                            <h1 className="text-black text-2xl font-bold   px-6 py-2 rounded">
                                Times Nigerian Fashion
                            </h1>
                            <h3 className="mt-6 text-black text-lg w-full max-w-xl text-center drop-shadow  px-4 py-2 rounded">
                                Embrace the vibrant colors and bold patterns of Nigerian fashion with our exclusive collection of traditional and contemporary styles.
                            </h3>
                        </div>
                    </div> */}




                {/* HERO SECTION */}

                {/* Hero Image */}
                {/* <HeroSection /> */}
                {/* <section className='w-screen'>
                    <div className="relative flex justify-center items-center">
                        <img src="/images/Hero.webp" alt="Hero" className="w-230 h-96 object-cover" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 rounded-xl">
                            <h2 className="text-5xl font-script pl-230">
                                Timeless <span className="not-italic font-bold">Nigerian Fashion</span>
                            </h2>
                            <p className="text-lg leading-relaxed my-6 pr-190">
                                EMBRACE THE ELEGANCE OF <br />
                                ADIRE, ANKARA AND <br />
                                ASO OKE. <br />
                                CURATED FOR YOU.
                            </p>
                            <button className="bg-green-300 hover:bg-green-300 text-white font-semibold px-6 py-3 rounded-2xl transition">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </section> */}



                {/* ABOUT US */}
                {/* <div className="flex flex-col h-screen  bg-[#F4F4F4] rounded-xl mb-280"> */}
                    {/* Title Section */}
                    {/* <div className="flex justify-center items-center py-20">
                        <h1 className="text-green-600 text-4xl font-bold text-center">
                            About Us
                        </h1>
                    </div> */}

                    {/* Description Section */}
                    {/* <div className="flex py-0"> */}

                        {/* About Us Section: Text left, images right */}
                        {/* <div className="flex flex-row justify-center items-center gap-12 h-[500px] bg-gray-50"> */}
                            {/* Description Text */}
                            {/* <div className="max-w-md pl-22">
                                <p className="text-gray-700 text-xl mb-45 leading-relaxed">
                                    We are a Nigerian fashion brand dedicated to celebrating heritage
                                    through <span className="text-green-500 font-medium">Ankara, Adire, and Aso-Oke.</span>
                                    <br />
                                    Creating timeless pieces that blend traditional craftsmanship with
                                    modern style while empowering local artisans and inspiring cultural
                                    pride.
                                </p>
                            </div> */}
                            {/* Stacked and Overlapped Images */}
                            {/* <div className="relative w-[400px] h-[450px] ml-75 mb-20"> */}
                                {/* Left image */}
                                {/* <img
                                    src="/images/About1.png"
                                    alt="Aso-Oke fashion"
                                    className="absolute w-72 h-[400px] object-cover rounded-xl shadow-lg -rotate-12 -left-30 top-5 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110 z-10 hover:z-40"
                                /> */}
                                {/* Middle image */}
                                {/* <img
                                    src="/images/About3.png"
                                    alt="Aso-Oke style"
                                    className="absolute w-72 h-[400px] object-cover rounded-xl shadow-lg -rotate-4 left-8 -top-10 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110 z-20 hover:z-40"
                                /> */}
                                {/* Right/front image */}
                                {/* <img
                                    src="/images/About2.png"
                                    alt="Traditional attire"
                                    className="absolute w-72 h-[400px] object-cover rounded-xl shadow-lg rotate-12 left-36 top-0 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110 z-30 hover:z-40"
                                /> */}
                            {/* </div>
                        </div>
                    </div> */}


                    {/* Featured Collections */}
                    {/* <FeaturedPages /> */}
                    {/* <section className="px-4 py-12 bg-[#F4F4F4] justify-center ">
                        <h1 className="text-2xl font-bold text-center text-green-700 mb-6">Featured Collections</h1>
                        <div className="flex row-0 justify-center space-x-6 mb-6 ">
                            {["New Arrivals", "Trending Now", "Occasional Wear"].map((tab) => (
                                <div key={tab} className="flex flex-col items-center">
                                    <button
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-1 bg-none shadow-none outline-none transition text-lg font-medium ${activeTab === tab ? "text-gray-500 font-semibold" : "text-gray-500"
                                            } border-none focus:border-none active:border-none ring-0 focus:ring-0 outline-none`}
                                        style={{ border: 'none', boxShadow: 'none' }}
                                    >
                                        {tab}
                                    </button>
                                    <hr />
                                    {activeTab === tab && (
                                        <div className="h-1 w-8 bg-green-500 rounded-full mt-1"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="relative flex items-center w-screen">
                            <div
                                id="featured-scroll"
                                className="flex overflow-x-auto gap-6 px-10 py-2 scroll-smooth no-scrollbar"
                                style={{ scrollBehavior: 'smooth', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                            >
                                {featured.map((item, i) => (
                                    <div key={i} className="min-w-[250px] max-w-[250px] bg-white rounded-xl shadow p-2 text-center flex-shrink-0">
                                        <img src={item.img} alt={item.title} className="w-full h-100 object-cover rounded-lg mb-4" />
                                        <h4 className="font-semibold">{item.title}</h4>
                                        <span className='flex '>
                                            <p className="text-left text-green-600 font-bold">{item.price}</p>
                                            <p className="align-right pl-70 text-yellow-500">⭐ {item.rating}</p>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section> */}


                    {/* Quick Categories */}
                    {/* <section className="px-6 py-12 bg-gray-100 text-center">
                        <h3 className="text-2xl font-bold text-green-700 mb-6">Quick Categories</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {categories.map((cat, i) => (
                                <div key={i} className="bg-white rounded-xl shadow p-4">

                                    <img src={cat.img} alt={cat.name} className="w-full h-100 object-cover rounded-lg mb-4" />
                                    <h4 className="font-semibold">{cat.name}</h4>
                                </div>
                            ))}
                        </div>

                        <button className="mt-6 bg-green-500 px-6 py-2 rounded-full font-semibold text-white">Shop Now</button>
                    </section> */}
                {/* </div> */}
            {/* </div> */}
        </>
    );
}

export default HomePage