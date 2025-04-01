import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Menu", path: "/menu" },
    { title: "Mobile App", path: "/mobileapp" },
    { title: "Contact Us", path: "/contactus" },
  ];

  return (
    <>
    <nav className=" fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-[90rem] mx-auto px-6 py-4 hidden md:flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="h-10" />
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-[#49557e] font-normal cursor-pointer font-[outfit]">
          {navLinks.map((item, index) => (
            <li
              key={index}
              onClick={() => setMenu(item.title.toLowerCase().replace(" ", ""))}
              className={`relative after:block after:absolute after:left-1/2 after:w-0 after:h-[2px] after:bg-gray-500 
              after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0 
              ${menu === item.title.toLowerCase().replace(" ", "") ? "active" : ""}`}
            >
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>

        {/* Icons and Sign In Button */}
        <div className="flex items-center gap-6">
          <Link to="/search"><img src={assets.search_icon} alt="Search" className="w-6 h-6 cursor-pointer" /></Link>
          <div className="relative">
            <Link to="/cart"><img src={assets.basket_icon} alt="Cart" className="w-6 h-6 cursor-pointer" /></Link>
            {/* <div className="absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-full top-[-5px] right-[-5px]"></div> */}
          </div>
          <Link to ="/signup">
          <button className="border border-tomato bg-transparent rounded-full px-4 py-1 text-[#49557E] text-[0.9rem] transition duration-300 hover:bg-[#fff4f2]">
            Sign in
          </button>
          </Link>
        </div>
      </div>
    </nav>
    <MobileNav/>
    </>
  );
};

export default Navbar;
