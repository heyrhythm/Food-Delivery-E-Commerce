import React from "react";
import { assets } from "../assets/assets";

function Navbar() {
  return (
    <div className="p-7">
      <div className="flex justify-between items-center">
        <div>
          <img src={assets.logo} alt="" />
        </div>
        <div>
          <ul className="flex gap-6 text-[#808080] font-normal cursor-pointer">
            <li className="relative after:block after:absolute after:left-1/2 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0">
              home
            </li>
            <li className="relative after:block after:absolute after:left-1/2 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0">
              menu
            </li>
            <li className="relative after:block after:absolute after:left-1/2 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0">
              mobile app
            </li>
            <li className="relative after:block after:absolute after:left-1/2 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0">
              contact us
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6 px-2">
          <search-icon className="cursor-pointer">
            <img src={assets.search_icon} alt="" className="w-6 h-6" />
          </search-icon>
          <cart-icon className="cursor-pointer">
            <img src={assets.basket_icon} alt=""  className="w-6 h-6"/>
          </cart-icon>
          
          <button  className="border border-[#49557E] rounded-full px-4 py-1 text-[#49557E] text-[0.9rem] hover:bg-[#49557E] hover:text-white transition">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
