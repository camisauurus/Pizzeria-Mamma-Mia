import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from "./context/CartContext";
import { PizzasProvider } from "./context/PizzasContext";
import { UserProvider } from "./context/UserContext";
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PizzasProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </PizzasProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
