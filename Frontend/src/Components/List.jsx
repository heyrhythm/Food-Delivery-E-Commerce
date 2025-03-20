import React, { useState } from 'react';
import { menu_list } from '../assets/assets';

function List() {
  const [category, setCategory] = useState("ALL");

  return (
    <div className='text-center px-6'>
      <div>
        <p className='text-3xl mt-7 font-bold text-gray-800'>Explore our menu</p>
        <h5 className='mt-3 text-gray-600'>
          Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your <br />
          cravings and elevate your dining experience, one delicious meal at a time.
        </h5>
      </div>

      <div className='grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-6 mt-7'>
        {menu_list.map((item, index) => (
          <div 
            key={index} 
            onClick={() => setCategory(prev => prev === item.menu_name ? "ALL" : item.menu_name)} 
            className="flex flex-col items-center transition transform hover:scale-105 cursor-pointer"
          >
            <img 
              src={item.menu_image} 
              alt={item.menu_name} 
              className={`w-32 h-32 object-cover rounded-full ${
                category === item.menu_name ? "border-4 border-[#FF6347] p-2" : ""
              }`} 
            />
            <p className='mt-3 text-lg font-semibold text-gray-800'>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
