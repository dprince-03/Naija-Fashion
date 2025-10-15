import React from "react";
import { useState } from "react";

// const CategoryTabs = () => {
//     const categories = ["All", "Adire", "Ankara", "Aso-Oke", "Quick Categories"];
//     const [activeTab, setActiveTab] = useState('All');

//     return (
//         <div className="flex justify-center space-x-6 mb-8 border-b border-gray-200">
//             {categories.map((tab) => (
//                 <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`pb-2 font-medium cursor-pointer transition-all duration-300 ${
//                     activeTab === tab
//                     ? 'text-green-600 border-b-2 border-green-600'              
//                     : 'text-black hover:text-green-600'
//                     }`}
//                 >
//                     {tab}
//                 </button>
//             ))}
//         </div>
//   );
// };

const OccasionTabs = () => {
    const categories = ["All", "Adire", "Ankara", "Aso-Oke", "Quick Categories"];
    const [activeTab, setActiveTab] = useState('All');


    return (
        <>
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
                        {tab === 'new' && 'All'}
                        {tab === 'trending' && 'Adire'}
                        {tab === 'occasion' && 'Ankara'}
                        {tab === 'occasion' && 'Aso-Oke'}
                        {tab === 'occasion' && 'Quick Categories'}
                    </button>
                ))}
            </div>
        </>
  );
};

export default OccasionTabs;
