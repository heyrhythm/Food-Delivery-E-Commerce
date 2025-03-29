import React from "react";
import Hero from "../Components/Hero";
import List from "../Components/List";
import DishesCard from "../Components/DishesCard";

import SignUp from "./SignUp";
import LogIn from "./LogIn";
import AppDownload from "../Components/AppDownload";

function Home() {
  return (
    <div className="mt-24">
      <div className>
        
        <Hero />
        <List />
        <DishesCard />
        <SignUp />
        <LogIn />
        <AppDownload />
        
      </div>
    </div>
  );
}

export default Home;
