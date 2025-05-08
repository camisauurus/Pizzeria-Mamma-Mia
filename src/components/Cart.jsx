import { pizzaCart } from '../pizzas';
import { useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const aumentar = (id) => {
    const nuevoCarrito = cart.map(pizza =>
      pizza.id === id
        ? { ...pizza, count: pizza.count + 1 }
        : pizza
    );
    setCart(nuevoCarrito);
  };

  const disminuir = (id) => {
    const nuevoCarrito = cart
      .map(pizza =>
        pizza.id === id
          ? { ...pizza, count: pizza.count - 1 }
          : pizza
      )
      .filter(pizza => pizza.count > 0); // elimina si count llega a 0
    setCart(nuevoCarrito);
  };

  const total = cart.reduce(
    (sum, pizza) => sum + pizza.count * pizza.price,
    0
  );

  return (
    <div className="cart">
      <h2>Detalles del pedido:</h2>
      {cart.map((pizza) => (
        <div className="cart-pizza" key={pizza.id}>
          <img src={pizza.img} alt={`Pizza ${pizza.name}`} />
          <span>{pizza.name}</span>
          <span>${pizza.price.toLocaleString('es-CL')}</span>
          <div>
            <button onClick={() => disminuir(pizza.id)}>-</button>
            <span>{pizza.count}</span>
            <button onClick={() => aumentar(pizza.id)}>+</button>
          </div>
        </div>
      ))}
      <h3>Total: ${total.toLocaleString('es-CL')}</h3>
      <button>Pagar</button>
    </div>
  );
}
