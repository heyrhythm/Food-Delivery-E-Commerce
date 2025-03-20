import React from 'react'
import {assets} from '../assets/assets'

function Navbar() {
  return (
    <div className="p-7">
      <div className='flex justify-between items-center'>
      <div>
        <img src={assets.logo} alt=''/>
        </div>
      <div>
        <ul className='flex gap-6 text-[#808080] font-normal cursor-pointer'>
            <li className='hover:underline transition duration-100'>home</li>
            <li className='hover:underline'>menu</li>
            <li className='hover:underline'>mobile app</li>
            <li className='hover:underline'>contact us</li>
        </ul>
      </div>
      <div className='flex gap-10 px-2'>
        <search-icon className=''><img src={assets.search_icon} alt="" /></search-icon>
        <cart-icon><img src={assets.basket_icon} alt="" /></cart-icon>
        <button className='border border-[#49557E] rounded-full px-4 py-1 text-[#49557E] text-[0.9rem]'>Sign in</button>
      </div>
      </div>
    </div>
  )
}

export default Navbar
