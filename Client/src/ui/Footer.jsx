import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full py-8 relative bottom-0 left-0 z-50 bg-no-repeat bg-emerald-950">

      <div className="max-w-screen mx-auto grid grid-cols-[1fr_auto] sm:grid-cols-2 md:grid-cols-4 gap-45 px-20 mx-4 text-sm">
        {/* First List = Our Products*/}
        <div>
          <p className="font-bold mb-4">Shop</p>
          <ul className="space-y-1">
            <li>New Arrivals</li>
            <li>Women</li>
            <li>Men</li>
            <li>Children</li>
            <li>Accesories</li>
          </ul>
        </div>


        {/* Second List = What We Are About*/}
        <div>
          <p className="font-bold mb-4">About Aso</p>
          <ul className="space-y-1">
            <li>Our Story</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>


        {/* Third List = Talk To Us*/}
        <div>
          <p className="font-bold mb-4">Customer Service</p>
          <ul className="space-y-1">
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Shipping & Returns</li>
            <li>Size Guide</li>
          </ul>
        </div>


        {/* Fourth List = Social Media*/}
        <div>
          <p className="font-bold mb-4">Follow Us</p>
          <ul className="space-y-1 flex flex-row gap-4">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>

      </div>

      <hr class="my-4 mx-10 border-t-0.5 border-gray" />

      <p className='text-center text-sm'> 
        {/* copyright symbol  */}
        &copy;  2025 Aso. All rights reserved.
      </p>

    </footer>
  )
}

export default Footer