import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

export default function Cart() {
  const { cart, increase, decrease, total } = useContext(CartContext);
  const { token } = useContext(UserContext);
  const [successMessage, setSuccessMessage] = useState('');

  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
         cart: cart.map((item) => ({
          id: item.id,
          quantity: item.count,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el pedido');
      }

      const data = await response.json();
      console.log('Respuesta del backend:', data);
      
      setSuccessMessage('¡Compra realizada con éxito!');
   
    } catch (error) {
      console.error(error);
      alert('Ocurrió un error al enviar el pedido');
    }
  };

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
      <button onClick={handleCheckout} disabled={!token}>
        Pagar
      </button>

      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
}
