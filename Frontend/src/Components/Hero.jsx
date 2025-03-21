import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative w-full h-[550px] rounded-lg overflow-hidden">
      {/* Background Image */}
      <img
        src={assets.header_img}
        alt="Header"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/50 text-white px-6">
        <h3 className="text-4xl font-bold leading-tight">
          Order Your <br /> Favourite Food Here
        </h3>
        <p className="mt-4 max-w-lg text-lg">
          Enjoy delicious meals from the best restaurants delivered to your doorstep. Fresh, fast, and flavorful!
        </p>
        <button className="mt-6 bg-white text-black px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200 transition">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Hero;
