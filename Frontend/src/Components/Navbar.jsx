import React, { useState } from "react";
import { assets } from "../assets/assets";

const Navbar= () =>{

   const [menu, setMenu] = useState("home");

  return (
    <div className="p-7">
      <div className="flex justify-between items-center">
        <div>
          <img src={assets.logo} alt="" />
        </div>
        <div>
          <ul className="flex gap-6 text-[#49557e] font-normal cursor-pointer font-[outfit]">
          <li onClick={()=> setMenu("home")} className={`relative after:block after:absolute after:left-1/2 after:w-0 after:h-[2px] after:bg-gray-500 
          after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0 
          ${menu === "home" ? "active" : ""}`}>Home</li>
            <li onClick={()=> setMenu("menu")} className={`relative after:block after:absolute after:left-1/2 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0 
            ${menu === "menu" ? "active" : ""}`}>menu</li>
            <li onClick={()=> setMenu("mobile-app")} className={`relative after:block after:absolute after:left-1/2 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0 ${menu === "mobile-app" ? "active" : ""}`}>
              mobile app
            </li>
            <li onClick={()=> setMenu("contact-us")} className={`relative after:block after:absolute after:left-1/2 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0 ${menu === "contact-us" ? "active" : ""}`}>
              contact us
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6 px-2">
          <search-icon className="cursor-pointer">
            <img src={assets.search_icon} alt="" className="w-6 h-6" />
          </search-icon>
          <div className="relative">
          <cart-icon className="cursor-pointer">
            <img src={assets.basket_icon} alt=""  className="w-6 h-6"/>
          </cart-icon>
          <div className="absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[-8px] right-[-8px] "></div>
          </div>
          <button  className="border border-tomato bg-transparent rounded-full px-4 py-1 text-[#49557E] text-[0.9rem] cursor:pointer transition-[0.3s] hover:bg-[#fff4f2]">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
