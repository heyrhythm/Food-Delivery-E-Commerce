import React from 'react'
import { assets } from "../assets/assets";
import { menu_list } from '../assets/assets';

function List() {
  
  return (
    <div className='text-center px-6'>
        <div>
      <p className='text-3xl font-bold text-grey-800'>Explore our menu</p>
      <h5 className='mt-3 text-grey-600'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your <br />
       cravings and elevate your dining experience , one delicious meal at a time </h5>
       </div>
       <div className='grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-6 mt-7'>
        {menu_list.map((item,index)=>{
            return (
                <div key={index} className='flex flex-col'>
               <img src={item.menu_image} alt=''/>
               <p>{item.menu_name}</p>
               </div>
            )
        })}
       </div>
    </div>
  )
}

export default List
