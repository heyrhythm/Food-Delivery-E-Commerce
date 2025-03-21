import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-[90rem] mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <img src={assets.logo} alt="Logo" className="h-10" />
          </div>

          <ul className="flex gap-6 text-[#49557e] font-normal cursor-pointer font-[outfit]">
            {["home", "menu", "mobile-app", "contact-us"].map((item) => (
              <li
                key={item}
                onClick={() => setMenu(item)}
                className={`relative after:block after:absolute after:left-1/2 after:w-0 after:h-[2px] after:bg-gray-500 
            after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0 
            ${menu === item ? "active" : ""}`}
              >
                <Link to={`/${item.replace("-", "")}`}>
                  {item.replace("-", " ")}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <img
              src={assets.search_icon}
              alt="Search"
              className="w-6 h-6 cursor-pointer"
            />

            <div className="relative">
              <img
                src={assets.basket_icon}
                alt="Cart"
                className="w-6 h-6 cursor-pointer"
              />
              <div className="absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-full top-[-5px] right-[-5px]"></div>
            </div>

            <button className="border border-tomato bg-transparent rounded-full px-4 py-1 text-[#49557E] text-[0.9rem] transition duration-300 hover:bg-[#fff4f2]">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
