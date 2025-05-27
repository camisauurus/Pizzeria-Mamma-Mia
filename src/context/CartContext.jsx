// src/context/CartContext.jsx
import { createContext, useState } from "react";
import { pizzaCart } from "../pizzas";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);


  // Funciones para modificar el carrito
  const addToCart = (pizza) => {
    const existing = cart.find((item) => item.id === pizza.id);
    if (existing) {
      setCart(cart.map((item) =>
        item.id === pizza.id ? { ...item, count: item.count + 1 } : item
      ));
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const increase = (id) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    ));
  };

  const decrease = (id) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, count: item.count - 1 } : item
    ).filter((item) => item.count > 0));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, increase, decrease, total }}>
      {children}
    </CartContext.Provider>
  );
}
