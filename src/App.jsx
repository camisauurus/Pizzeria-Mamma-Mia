import { useState } from 'react'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CardPizza from './components/CardPizza'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import Pizza from './components/Pizza'
import './App.css'

function App() {
  const total=25000
  const token = true
  
  return (
    <>
      <Navbar total={total} token={token}/>
      {/* <Home/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer/>
    </>
  )
}

export default App
