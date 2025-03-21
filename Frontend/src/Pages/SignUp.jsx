import React, {useState} from 'react';
import { useNavigate,Link} from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const[formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5173/ ',formData);
      alert("Account created successfully");
      navigate('/');
    } catch (error) {
      alert(error.response?.data?.message ?? "An error occurred");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="w-1/3 mx-auto mt-20 mb-8 p-6 border-2 border-gray-300 rounded-lg bg-white shadow-lg">
    
    <Link to='/signup' className="font-bold text-2xl text-center mb-6 text-gray-800">Sign Up</Link>

    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Your Name" 
        className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-orange-500"
        onChange={handleChange}
        required
      />
      
      <input 
        type="email" 
        placeholder="Your Email" 
        className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-orange-500"
        onChange={handleChange}
        required
      />

      <input 
        type="password" 
        placeholder="Your Password" 
        className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-orange-500"
        onChange={handleChange}
        required
      />

      {/* Checkbox for Terms & Privacy */}
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

      <button className="w-full bg-orange-500 text-white p-2 rounded-lg mt-4 hover:bg-orange-600 transition-all">
        Create Account
      </button>

      <p className="text-sm text-center text-gray-700 mt-4">
        Already have an account?  
        <span className="text-orange-500 cursor-pointer ml-1 hover:underline">Log in here</span>.
      </p>

    </form>
  </div>
</div>

  )
}

export default SignUp
