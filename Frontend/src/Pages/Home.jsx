import React from "react";
import Hero from "../Components/Hero";
import List from "../Components/List";
import DishesCard from "../Components/DishesCard";
import { useState } from "react";


import AppDownload from "../Components/AppDownload";

function Home() {
  const [category, setCategory] = useState("ALL");
  return (
    <div className="mt-24">
      <div className>
        
        <Hero />
        <List category={category} setCategory={setCategory} />
        <DishesCard category={category} setCategory={setCategory} />
        
        <AppDownload />
        
      </div>
    </div>
  );
}

export default Home;
