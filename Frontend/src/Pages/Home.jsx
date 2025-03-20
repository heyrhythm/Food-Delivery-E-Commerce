import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import List from '../Components/List'
import DishesCard from '../Components/DishesCard'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div className="overflow-x-hidden">
    <div className="max-w-[90rem] mx-auto my-auto " >
      <Navbar/>
      <Hero/>
      <List/>
      <DishesCard/>
      </div>
      <Footer className="w-screen"/>
    </div>
  )
}

export default Home
