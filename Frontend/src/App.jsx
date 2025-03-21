import React from "react";
import "./App.css";
import "./index.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import PlaceOrder from "./Pages/PlaceOrder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Menu from "./pages/Menu";
import Navbar from "./Components/Navbar"; // Import the Navbar component
import Footer from "./Components/Footer";
import MobileApp from "./Pages/MobileApp";
import ContactUs from "./Pages/ContactUs";

const App = () => {
  return (
    <div className=" ">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/mobileapp" element={<MobileApp />} />
          <Route path="/contactus" element={<ContactUs />} />

          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
        <Footer className="w-screen" />
      </BrowserRouter>
    </div>
  );
};

export default App;
