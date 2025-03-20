import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8 w-full">
      <div className=" px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        
        <div className="text-center md:text-left">
          <img src={assets.logo} alt="logo" className="w-24 h-auto mx-auto md:mx-0"/>
          <p className="mt-4 text-sm leading-relaxed">
            At <strong>Delivery</strong>, we bring you the best food from your favorite restaurants, right to your doorstep. 
            Enjoy fast, reliable, and delicious meals with just a few clicks.
          </p>
          <div className="flex justify-center md:justify-start mt-4 gap-4">
            <img src={assets.facebook_icon} alt="facebook" className="w-8 h-8 cursor-pointer rounded-full"/>
            <img src={assets.twitter_icon} alt="twitter" className="w-8 h-8 cursor-pointer  rounded-full"/>
            <img src={assets.linkedin_icon} alt="linkedin" className="w-8 h-8 cursor-pointer rounded-full"/>
          </div>
        </div>

        
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold">Company</h3>
          <ul className="mt-3 space-y-2">
            <li className="hover:text-gray-400 cursor-pointer">Home</li>
            <li className="hover:text-gray-400 cursor-pointer">About Us</li>
            <li className="hover:text-gray-400 cursor-pointer">Our Services</li>
            <li className="hover:text-gray-400 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-gray-400 cursor-pointer">Terms and Conditions</li>
          </ul>
        </div>

     
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold">Get in Touch</h3>
          <p className="mt-3"><strong>Address:</strong> 1234 Food Street, New York, USA</p>
          <p><strong>Phone:</strong> +1 (234) 567-890</p>
          <p><strong>Email:</strong> contact@delivery.com</p>
        </div>
      </div>

      
      <hr className="border-gray-700 my-6" />

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Delivery. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
