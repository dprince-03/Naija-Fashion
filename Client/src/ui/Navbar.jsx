import React from 'react'
import { useState } from 'react'
import { Mic, Camera, ShoppingBag, Heart, User, MapPin } from 'lucide-react'
import { Search } from 'lucide-react';

const Navbar = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const items = [
        "Shirt",
        "Trousers",
        "Sneakers",
        "Hat",
        "Jacket",
        "Socks",
        "Gloves",
    ];

    return (
        // <div className='h-full bg-[#FAF9F6] text-black'>
            <nav className=" bg-[#FAF9F6] text-black w-full absolute top-0  bg-[#FAF9F6] border-b border-gray-200 pl-5 pr-70 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-900 rounded-sm"></div>
                    <span className="font-semibold text-lg text-black">Aso</span>
                </div>

                {/* Search bar */}
                <div className="flex justify-center items-center w-full">
                    <div className="flex items-center w-[45%] bg-white border rounded-full px-3 py-1 shadow-sm">
                        <Search className="text-gray-500 mr-0" />
                        <input
                            type="text"
                            placeholder="Search fabrics, styles, designers..."
                            // value={search}
                            // onChange={(e) => setSearch(e.target.value)}
                            className="w-250 flex-1 mx-auto outline-none text-sm bg-transparent text-center"
                        />
                        <Mic size={18} className="text-gray-500 mr-1 cursor-pointer" />
                        <Camera size={18} className="text-gray-500 cursor-pointer" />
                    </div>
                </div>

                {/* Icons + Profile */}
                <div className="flex items-center space-x-5">
                    <ShoppingBag className="text-black cursor-pointer" />
                    <Heart className="text-black cursor-pointer" />
                    <User className="text-black cursor-pointer" />
                    {/* Profile */}
                    <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="profile"
                    className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="flex items-center space-x-1 text-sm font-medium">
                        <MapPin size={16} className="text-gray-700" />
                        <span>NG</span>
                    </div>
                </div>
                <br />
            </nav>
        // </div>
  );
}

export default Navbar