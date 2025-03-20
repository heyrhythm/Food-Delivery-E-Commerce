import React from 'react'
import './App.css'
import './index.css'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import PlaceOrder from './Pages/PlaceOrder'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path ='/' element= {<Home/>}/>
      <Route path ='/cart' element= {<Cart/>}/>
      <Route path ='/order' element= {<PlaceOrder/>}/>
      </Routes>
    </div>
  )
}

export default App
