import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../userApi"; // Import API function

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "", // ✅ Change "username" to "name"
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData); // ✅ Use registerUser() instead of axios.post()
      alert("Account created successfully");
      navigate("/"); // Redirect to homepage or login
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="w-1/3 mx-auto mt-20 mb-8 p-6 border-2 border-gray-300 rounded-lg bg-white shadow-lg">
        <h2 className="font-bold text-2xl text-center mb-6 text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name" // ✅ Changed "username" to "name"
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-orange-500"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-orange-500"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-orange-500"
            onChange={handleChange}
            required
          />
          
          <button type="submit" className="w-full bg-orange-500 text-white p-2 rounded-lg mt-4 hover:bg-orange-600 transition-all">
            Create Account
          </button>

          <p className="text-sm text-center text-gray-700 mt-4">
            Already have an account?
            <Link to="/login" className="text-orange-500 cursor-pointer ml-1 hover:underline">
              Log in here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
