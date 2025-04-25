import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../userApi"; // Import API function

const SignUp = ({closeModal, openLogin}) => {
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
      closeModal(); // Close the modal
      navigate("/"); // Redirect to homepage or login
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="flex fixed inset-0 z-50 justify-center items-center  bg-black/30 backdrop-blur-sm ">
      <div className="bg-white rounded-2xl p-6  shadow-xl relative max-w-md w-full">
        <button
          onClick={closeModal}
          className="absolute top-2 right-4 text-4xl text-gray-400 hover:text-gray-600">
            &times;
          </button>
        <h2 className="font-bold text-2xl text-center mb-6 text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            <span
            onClick={openLogin}
            className="text-orange-500 cursor-pointer ml-1 hover:underline">
              Log in here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
