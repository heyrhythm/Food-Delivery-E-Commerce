import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { PiHamburger } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

const MobileNav = () => {

    // State to manage the open/close state of the mobile menu
    const [isOpen, setIsOpen] = React.useState(false);
    const [menu, setMenu] = React.useState("home");

    const nav = [
        { title: "Home", path: "/" },
        { title: "Menu", path: "/menu" },
        { title: "Mobile App", path: "/mobileapp" },
        { title: "Contact Us", path: "/contactus" },
    ];

    const navRef = useRef();

    // Close the navbar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        // Attach event listener to detect outside clicks
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className='flex justify-between sm:hidden p-4 fixed top-0 left-0 w-full bg-white shadow-md z-50'>
                {/* Logo */}
                <Link to="/">
                    <img src={assets.logo} alt="Logo" className="h-7" />
                </Link>
                {
                    isOpen
                    ?
                    <IoMdClose onClick={() => setIsOpen(!isOpen)} className='text-3xl' />
                    :
                    <PiHamburger onClick={() => setIsOpen(!isOpen)} className='text-3xl text-[tomato]' />
                }
            </div>

            {/* Overlay Background (Blur effect) */}
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 backdrop-blur-sm z-30" />
            )}

            {/* Navigation Links */}
            <div ref={navRef} className={`mt-19 fixed top-0 left-0 w-2/4 bg-white shadow-md h-full z-40 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <ul className="flex flex-col gap-6 text-[#49557e] font-normal cursor-pointer font-[outfit] p-4">
                    {nav.map((item, index) => (
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
            </div>
        </>
    );
}

export default MobileNav;
