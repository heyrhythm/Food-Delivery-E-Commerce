import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import MobileNav from "./MobileNav";
import { food_list } from "../assets/assets";

const Navbar = ({ setShowSignup, setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [searchQuery, setSearchQuery] = useState(""); // Manage search input
  const [filteredResults, setFilteredResults] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Menu", path: "/menu" },
    { title: "Mobile App", path: "/mobileapp" },
    { title: "Contact Us", path: "/contactus" },
  ];

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500); // Delay 500ms before setting the debounced query

    return () => clearTimeout(timer); // Clean up the timer on component unmount or query change
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery) {
      const results = food_list.filter((item) =>
        item.name.toLowerCase().includes(debouncedQuery.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  }, [debouncedQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchIconClick = () => {
    if (searchQuery.trim()) {
      const results = food_list.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredResults(results);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-[90rem] mx-auto px-6 py-4 flex justify-between items-center">
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

          {/* Search Bar */}
          <div className="relative w-64">
            <input
              id="restaurant"
              value={searchQuery}
              name="search"
              type="text"
              onChange={handleSearch}
              placeholder="Search for dishes, restaurants..."
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-orange-500 w-full"
            />
            <img
              src={assets.search_icon}
              alt="Search"
              className="absolute right-3 top-3 w-4 h-4 cursor-pointer"
              onClick={handleSearchIconClick} // Trigger search on click
            />

            {/* Search Results */}
            {filteredResults.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg mt-2 rounded-lg p-4">
                <ul className="space-y-4">
                  {filteredResults.map((food) => (
                    <li key={food._id} className="flex items-center space-x-4 border-b pb-4">
                      <img src={food.image} alt={food.name} className="w-20 h-20 object-cover rounded-md" />
                      <div>
                        <h3 className="text-sm font-medium">{food.name}</h3>
                        <p className="text-gray-600">{food.description}</p>
                        <p className="text-sm font-semibold text-green-600">${food.price}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {filteredResults.length === 0 && searchQuery && (
              <p className="text-center text-gray-500 mt-2">No results found</p>
            )}
          </div>
          
          {/* Icons and Sign In Button */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <Link to="/cart">
                <img src={assets.basket_icon} alt="Cart" className="w-6 h-6 cursor-pointer" />
              </Link>
            </div>
            <button
              onClick={() => setShowSignup(true)}
              className="border border-tomato bg-transparent rounded-full px-4 py-1 text-[#49557E] text-[0.9rem] transition duration-300 hover:bg-[#fff4f2]"
            >
              Sign up
            </button>
          </div>
        </div>
      </nav>

      <MobileNav />
    </>
  );
};

export default Navbar;
