
import { menu_list } from '../assets/assets';

function List({category,setCategory}) {
  // const [category, setCategory] = useState("ALL");

  return (
    <div className='mt-5 md:mt-10'>
  <div className="text-left ">
    <p className='text-xl md:text-3xl mb-3 md:mb-4 font-bold text-gray-800'>Explore our menu</p>
    <h5 className='md:mt-3  text-gray-600'>
      Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your <br />
      cravings and elevate your dining experience, one delicious meal at a time.
    </h5>
  </div>

  <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-10'>
    {menu_list.map((item, index) => (
      <div 
        key={index} 
        onClick={() => setCategory(prev => prev === item.menu_name ? "ALL" : item.menu_name)} 
        className="flex flex-col items-center transition transform hover:scale-105 cursor-pointer"
      >
        <img 
          src={item.menu_image} 
          alt={item.menu_name} 
          className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover rounded-full ${
            category === item.menu_name ? "border-4 border-[#FF6347] p-1" : ""
          }`} 
        />
        <p className='mt-3 text-sm sm:text-base md:text-lg font-semibold text-gray-800 text-center'>{item.menu_name}</p>
      </div>
    ))}
</div>


  <hr className='mt-12 h-0.5 bg-[#e2e2e2] border-none mb-8' />
</div>
  );
}

export default List;
