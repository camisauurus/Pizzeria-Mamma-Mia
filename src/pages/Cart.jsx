import { pizzaCart } from '../pizzas';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

export default function Cart() {
  const { cart, increase, decrease, total } = useContext(CartContext);
  const { token } = useContext(UserContext);

  return (
    <div className="cart">
      <h2>Detalles del pedido:</h2>
      {cart.map((pizza) => (
        <div className="cart-pizza" key={pizza.id}>
          <img src={pizza.img} alt={`Pizza ${pizza.name}`} />
          <span>{pizza.name}</span>
          <span>${pizza.price.toLocaleString('es-CL')}</span>
          <div>
            <button onClick={() => decrease(pizza.id)}>-</button>
            <span>{pizza.count}</span>
            <button onClick={() => increase(pizza.id)}>+</button>
          </div>
        </div>
      ))}
      <h3>Total: ${total.toLocaleString('es-CL')}</h3>
      <button disabled={!token}>Pagar</button>
    </div>
  );
}