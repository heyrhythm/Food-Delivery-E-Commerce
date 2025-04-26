import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, googleLoginUser } from "../Api/userApi" // We'll add googleLoginUser too
import { GoogleLogin } from "@react-oauth/google"; // Import GoogleLogin

const SignUp = ({ closeModal, openLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await registerUser(formData);
      alert(response.message || "Account created successfully");
      closeModal();
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // 👉 Handle Google Sign Up/Login
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await googleLoginUser({ tokenId: credentialResponse.credential });
      alert("Logged in with Google successfully!");
      closeModal();
      navigate("/");
    } catch (error) {
      console.error("Google Login error:", error);
      alert("Google Login failed");
    }
  };

  const handleGoogleFailure = (error) => {
    console.error("Google Login Error:", error);
    alert("Google Sign In Failed. Try again!");
  };

  return (
    <div className="flex fixed inset-0 z-50 justify-center items-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-6 shadow-xl relative max-w-md w-full">
        <button
          onClick={closeModal}
          className="absolute top-2 right-4 text-4xl text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>
        <h2 className="font-bold text-2xl text-center mb-6 text-gray-800">Sign Up</h2>
        
        {/* 🚀 Google Signup Button */}
        <div className="flex flex-col items-center mb-4">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
          />
        </div>

        <div className="flex items-center justify-center mb-4">
          <div className="border-b w-1/4"></div>
          <span className="text-sm text-gray-500 mx-2">or</span>
          <div className="border-b w-1/4"></div>
        </div>

        {/* Normal Signup Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            id="signup-name"
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            onChange={handleChange}
            required
          />
          <input
            id="signup-email"
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            onChange={handleChange}
            required
          />
          <input
            id="signup-password"
            type="password"
            name="password"
            placeholder="Your Password"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            onChange={handleChange}
            required
          />
          
          <button 
            type="submit"
            className="w-full bg-orange-500 text-white p-2 rounded-lg mt-4 hover:bg-orange-600 transition-all"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          {error && (
            <p className="text-sm text-red-500 text-center mt-4">
              {error}
            </p>
          )}

          <p className="text-sm text-center text-gray-700 mt-4">
            Already have an account?
            <span
              onClick={openLogin}
              className="text-orange-500 cursor-pointer ml-1 hover:underline"
            >
              Log in here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
