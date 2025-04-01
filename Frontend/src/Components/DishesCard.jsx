import { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import { food_list } from '../assets/assets'

import FoodItem from './FoodItem/FoodItem'

const DishesCard = ({category}) => {
  

  const {food_list} = useContext(StoreContext)
  return (
    <div >
      <h2 className='text-2xl font-bold text-gray-800 mb-6'>Top dishes near you </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
        {food_list.map((item,index)=>{
          
          if(category==="ALL" || category===item.category){
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
        })}
      </div>
    </div>
  )
}

export default DishesCard
