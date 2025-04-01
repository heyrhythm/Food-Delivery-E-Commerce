import React from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footbar = () => {
    return (
      <div className="sm:hidden fixed bottom-0 left-0 w-full bg-white text-white flex justify-around p-3 border-t border-gray-200 shadow-[0px_-10px_20px_-10px_rgba(0,0,0,0.2)]  z-50">
        <Link to="/search"><img src={assets.search_icon} alt="Search" className="w-6 h-6 cursor-pointer" /></Link>
        <Link to="/cart"><img src={assets.basket_icon} alt="Cart" className="w-6 h-6 cursor-pointer" /></Link>

      </div>
    );
  };
  
  
  

export default Footbar