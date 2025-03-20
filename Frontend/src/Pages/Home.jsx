import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import List from '../Components/List'
import DishesCard from '../Components/DishesCard'

function Home() {
  return (
    <div className="max-w-[80rem] mx-auto my-auto " >
      <Navbar/>
      <Hero/>
      <List/>
      <DishesCard/>
    </div>
  )
}

export default Home
