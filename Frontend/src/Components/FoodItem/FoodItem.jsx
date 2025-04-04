import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {

    
    const{cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className="w-full mx-auto rounded-[15px] shadow-md transition duration-300 animate-fadeIn">
      <div className="relative" >
        <img className="w-full rounded-[15px_15px_0px_0px]  "  src={image} alt="" />
        {!cartItems[id]
            ?<img className="cursor-pointer absolute bottom-1 right-1 bg-white rounded-full px-1 py-1 shadow-lg size-[35px]" onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
            :<div className="absolute right-1 bottom-1 bg-white rounded-full text-center flex  items-center gap-2 font-semibold">
                <img className="cursor-pointer size-9 p-1 " onClick={()=>removeFromCart(id)}  src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img className="cursor-pointer size-9 p-1" onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />

            </div>
        }
      </div>
      <div className="p-[20px]">
        <div className="flex justify-between items-center mb-2">
          <p className="font-semibold text-xl">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
        </div>

        <p className="text-[#676767] text-[12px]">{description}</p>
        <p className="text-[tomato] text-2xl font-[500] mt-[10px]">
          <span>&#8377;</span>
          {price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
