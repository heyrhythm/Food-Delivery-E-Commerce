import React, { useState } from "react";
import { food_list } from "../assets/assets";
import { assets } from "../assets/assets";

const DishesCard = () => {
  const [cartCounts, setCartCounts] = useState({}); // Store counts for each item

  const handleAddFirst = (index) => {
    setCartCounts((prev) => ({ ...prev, [index]: 1 }));
  };

  const addToCart = (index) => {
    setCartCounts((prev) => ({ ...prev, [index]: (prev[index] || 0) + 1 }));
  };

  const removeFromCart = (index) => {
    setCartCounts((prev) => {
      if (prev[index] > 1) {
        return { ...prev, [index]: prev[index] - 1 };
      } else {
        const updatedCounts = { ...prev };
        delete updatedCounts[index]; // Remove item if count reaches 0
        return updatedCounts;
      }
    });
  };

  return (
    <div>
      <div className="mt-12 px-6">
        <h3 className="font-bold text-2xl text-center mb-9">
          Top dishes near you
        </h3>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {food_list.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg"
                />

                {/* If count exists, show counter, else show add icon */}
                {!cartCounts[index] ? (
                  <img
                    src={assets.add_icon_white}
                    alt="Add to Cart"
                    className="absolute bottom-1 right-1 size-8 cursor-pointer"
                    onClick={() => handleAddFirst(index)}
                  />
                ) : (
                  <div className="absolute bottom-1 right-1 bg-white rounded-full flex items-center px-2 py-1 shadow-lg">
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 font-bold text-lg px-2"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold px-2">
                      {cartCounts[index]}
                    </span>
                    <button
                      onClick={() => addToCart(index)}
                      className="text-green-500 font-bold text-lg px-2"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>

              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold">{item.name}</h4>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <p className="text-lg font-bold text-green-600 mt-3">
                  ${item.price}
                </p>
                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DishesCard;
