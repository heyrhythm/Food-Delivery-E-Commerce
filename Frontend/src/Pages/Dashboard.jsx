import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Unauthorized! Please log in.");
      navigate("/login");
    } else {
      fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ Fixed space issue
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            alert("Session expired. Please log in again.");
            localStorage.removeItem("token");
            navigate("/login");
          } else {
            setUser(data);
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          alert("Something went wrong. Try logging in again.");
          localStorage.removeItem("token");
          navigate("/login");
        });
    }
  }, [navigate]); // ✅ useEffect is correctly placed inside the component

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-1/3 mx-auto mt-20 mb-8 p-5 border-2 border-gray-300 rounded-lg bg-white shadow-lg">
        {user ? (
          <>
            <h2 className="font-bold text-2xl text-center mb-6 text-gray-800">
              Welcome, {user.name}!
            </h2>
            <p className="text-center text-gray-700">Email: {user.email}</p>
          </>
        ) : (
          <p className="text-center text-gray-700">Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
