import React from 'react'

const LogIn = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="w-1/3 mx-auto mt-20 mb-8 p-5 border-2 border-gray-300 rounded-lg bg-white shadow-lg">
    
    <h3 className="font-bold text-2xl text-center mb-6 text-gray-800">Login</h3>
    
    <form>
      <input 
        type="email" 
        placeholder="Your Email" 
        className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-orange-500" />

      <input 
        type="password" 
        placeholder="Your Password" 
        className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-orange-500"/>

      <button className="w-full bg-orange-500 text-white p-2 rounded-lg mt-4 hover:bg-orange-600 transition-all">
        Login
      </button> 

      <div className="flex items-center mt-4">
        <input 
          type="checkbox" 
          id="terms" 
          className="w-4 h-4 text-orange-500 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 cursor-pointer"
        />
        <label htmlFor="terms" className="text-gray-500 ml-2 text-xs">
          By continuing, I agree to the  
          <span className="text-orange-500 cursor-pointer hover:underline"> Terms of Use</span> &  
          <span className="text-orange-500 cursor-pointer hover:underline"> Privacy Policy</span>.
        </label>
      </div>

      <p className="text-sm text-center text-gray-700 mt-4">
        Create a new account?  
        <span className="text-orange-500 cursor-pointer ml-1 hover:underline">Click here</span>.
      </p>

    </form>
  </div>
</div>

  )
}

export default LogIn
