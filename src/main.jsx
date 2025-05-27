import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from "./context/CartContext";
import { PizzasProvider } from "./context/PizzasContext";
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PizzasProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </PizzasProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
