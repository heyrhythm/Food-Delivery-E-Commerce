import React from "react";
import Hero from "../Components/Hero";
import List from "../Components/List";
import DishesCard from "../Components/DishesCard";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import SignUp from "./SignUp";
import LogIn from "./LogIn";


import AppDownload from "../Components/AppDownload";

function Home() {
  const [category, setCategory] = useState("ALL");
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const isModalOpen = showSignup || showLogin;
  return (
    <div className="mt-24">
  <div className="relative">
     
  <div className={isModalOpen ? "pointer-events-none blur-sm transition duration-300" : "transition duration-300"}>
     <Navbar 
      setShowSignup={setShowSignup}
       setShowLogin={setShowLogin}
       />
        <Hero />
       </div>
        {showSignup && 
    (<SignUp closeModal={() => setShowSignup(false)}
    openLogin={() => {setShowSignup(false)
      setShowLogin(true);
    }}
    />
  )}
  {showLogin && (
    <LogIn closeModal={() => setShowLogin(false)} />
  )}
        <List category={category} setCategory={setCategory} />
        <DishesCard category={category} setCategory={setCategory} />
        
        <AppDownload />
        
      </div>
      </div>
  );
}

export default Home;
