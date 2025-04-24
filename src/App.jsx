import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CardPizza from './components/CardPizza'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import './App.css'

function App() {
  const total=25000
  const token = true
  
  return (
    <>
      <Navbar total={total} token={token}/>
      {/* <Home/> */}
      <Register/>
      <Login/>
      <div className='container'>
        <CardPizza pizzaName="Napolitana" price={5950} ingredients={["mozzarella", "tomates", "jamón", "orégano"]} img="https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg"/>
        <CardPizza pizzaName="Española" price={7950} ingredients={["queso", "tomates", "champinon", "orégano"]} img="https://cdn.pixabay.com/photo/2021/12/30/11/33/italian-cuisine-6903774_1280.jpg"/>
        <CardPizza pizzaName="Pepperoni" price={8950} ingredients={["peperoni", "queso", "aceitunas", "orégano"]} img="https://cdn.pixabay.com/photo/2020/08/19/14/42/pizza-5501057_1280.jpg"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
