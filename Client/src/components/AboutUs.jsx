import React from 'react'

const AboutUs = () => {
  return (
    <div className=''>
        {/* Title Section */}
        <div className="flex flex-col bg-[#F4F4F4] rounded-xl mb-20 max-w-screen">
                    <div className="flex justify-center items-center py-20">
                        <h1 className="text-green-600 text-4xl font-bold text-center">
                            About Us
                        </h1>
                    </div>

                    {/* Description Section */}
                    <div className="flex py-0 bg-[#F4F4F4]">

                        {/* About Us Section: Text left, images right */}
                        <div className="flex flex-row justify-center items-center gap-12 h-[500px] bg-[#F4F4F4]">
                            {/* Description Text */}
                            <div className="max-w-md pl-22">
                                <p className="text-gray-700 text-xl mb-45 leading-relaxed">
                                    We are a Nigerian fashion brand dedicated to celebrating heritage
                                    through <span className="text-green-500 font-medium">Ankara, Adire, and Aso-Oke.</span>
                                    <br />
                                    Creating timeless pieces that blend traditional craftsmanship with
                                    modern style while empowering local artisans and inspiring cultural
                                    pride.
                                </p>
                            </div>
                            {/* Stacked and Overlapped Images */}
                            <div className="relative w-[400px] h-[450px] ml-75 mb-20">
                                {/* Left image */}
                                <img
                                    src="/images/About1.webp"
                                    alt="Aso-Oke fashion"
                                    className="absolute w-72 h-[400px] object-cover rounded-xl shadow-lg -rotate-12 -left-30 top-5 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110 z-10 hover:z-40"
                                />
                                {/* Middle image */}
                                <img
                                    src="/images/About3.webp"
                                    alt="Aso-Oke style"
                                    className="absolute w-72 h-[400px] object-cover rounded-xl shadow-lg -rotate-4 left-8 -top-10 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110 z-20 hover:z-40"
                                />
                                {/* Right/front image */}
                                <img
                                    src="/images/About2.webp"
                                    alt="Traditional attire"
                                    className="absolute w-72 h-[400px] object-cover rounded-xl shadow-lg rotate-12 left-36 top-0 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110 z-30 hover:z-40"
                                />
                            </div>
                        </div>
                    </div>
        </div>
    </div>
  )
}

export default AboutUs