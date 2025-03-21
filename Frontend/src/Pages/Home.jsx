import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import List from "../Components/List";
import DishesCard from "../Components/DishesCard";
import Footer from "../Components/Footer";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import AppDownload from "../Components/AppDownload";

function Home() {
  return (
    <div className="overflow-x-hidden mt-52">
      <div className="max-w-[90rem] mx-auto my-auto ">
        
        <Hero />
        <List />
        <DishesCard />
        <SignUp />
        <LogIn />
        <AppDownload />
        
      </div>
      <Footer className="w-screen" />
    </div>
  );
}

export default Home;
