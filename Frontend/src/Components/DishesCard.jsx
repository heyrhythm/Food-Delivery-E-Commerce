import React from 'react'
import { food_list } from '../assets/assets'

const DishesCard = () => {
  return (
    <div>
      <div className='mt-10 px-6'>
      <h3 className='font-bold text-2xl text-center mb-6'>Top dishes near you</h3>
      {/*Cards */}
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {food_list.map((item,index)=>{
                return (
                    <div key ={index} className='bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300'>
                        <div className='relative'>
                        <img src={item.image} alt={item.name} className='w-full h-48 object-cover'/>
                        <div className='rounded-full absolute right-2 bottom-2 w-8 h-8 bg-white text-black text-xl font-bold items-center justify-center shadow-lg cursor-pointer '>+</div>
                        </div>
                        <div className='p-4 text-center'>
                        <h4 className='text-xl font-semibold'>{item.name}</h4>
                        <p className='text-gray-600 mt-2'>{item.description}</p>
                        <p className='text-lg font-bold text-green-600 mt-3'>${item.price}</p>
                        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                                Order Now
                            </button>
                        </div>
                        </div>
                )
            }
            )}
         </div>
      </div>
    </div>
  )
}

export default DishesCard
