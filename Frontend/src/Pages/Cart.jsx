import React, { useContext } from 'react';
import  {StoreContext} from '../Context/StoreContext'
import { food_list } from '../assets/assets';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  console.log("CartItems:", cartItems);
  const cartFoodItems = food_list.filter(item => cartItems[item._id] > 0);

  const getTotalPrice = () =>
    cartFoodItems.reduce((total, item) => total + item.price * cartItems[item._id], 0);

  const handlePayment = async () => {
    const amount = getTotalPrice() * 100; // Razorpay accepts paisa
  
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
      amount: amount,
      currency: "INR",
      name: "Your Brand",
      description: "Food Order Payment",
      handler: function (response) {
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        // Optional: clear cart or send confirmation to backend
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };
  
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };
  

  return (
    <div className='mt-24 px-4'>
      <h2 className='text-3xl font-bold mb-6'>Your Cart</h2>
      {cartFoodItems.length === 0 ? (
        <p className='text-lg text-gray-600'>Your cart is empty.</p>
      ) : (
        <div className='space-y-6'>
          {cartFoodItems.map((item) => (
            <div key={item._id} className='flex items-center justify-between border-b pb-3'>
              <div className='flex items-center gap-4'>
                <img src={item.image} alt={item.name} className='w-16 h-16 rounded' />
                <div>
                  <p className='font-semibold text-lg'>{item.name}</p>
                  <p className='text-gray-500'>₹{item.price} × {cartItems[item._id]}</p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <button onClick={() => removeFromCart(item._id)} className='px-2 py-1 bg-red-500 text-white rounded'>-</button>
                <span className='font-semibold'>{cartItems[item._id]}</span>
                <button onClick={() => addToCart(item._id)} className='px-2 py-1 bg-green-500 text-white rounded'>+</button>
              </div>
            </div>
          ))}
          <div className='text-right font-bold text-xl'>
            Total: ₹{getTotalPrice()}
          </div>

                  <button onClick={handlePayment}
                  className="mt-6 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
                     Proceed to Pay ₹{getTotalPrice()}
                    </button>

        </div>
      )}
    </div>
  );
};

export default Cart;
