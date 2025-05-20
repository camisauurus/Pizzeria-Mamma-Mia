import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CardPizza from './components/CardPizza'
import Footer from './components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import Pizza from './pages/Pizza'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  const total=25000
  const token = true
  
  return (
    <div className='layout'>
      <Navbar total={total} token={token}/>
      <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
