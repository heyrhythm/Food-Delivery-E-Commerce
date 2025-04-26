import React, { useState } from "react";

const LogIn = ({ closeModal }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Placeholder login logic
    try {
      // Send the login request to the backend
      const response = await axios.post('/login', formData, { withCredentials: true });
      console.log(response.data); // Handle the response (e.g., save token, redirect, etc.)
      
      // Close modal on successful login
    alert("Logged in!");
    closeModal();
  }
  catch (err) {
    // Handle any errors that occur during login
    console.error("Login error:", err);
    setError("Invalid email or password.");
  }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-4 text-2xl text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Log In</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
           id="login-email"
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            onChange={handleChange}
            required
          />
          <input
          id="login-password"
            type="password"
            name="password"
            placeholder="Your Password"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            onChange={handleChange}
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>} {/* Display error message */}
          <button type="submit" className="bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
