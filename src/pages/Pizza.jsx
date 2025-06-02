import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Pizza() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((err) => console.error('Error al cargar la pizza:', err));
  }, [id]);

  if (!pizza) return <p>Cargando pizza...</p>;

  return (
    <div className="pizza-detail">
      <h2>🍕 {pizza.name}</h2>
      <img src={pizza.img} alt={`Pizza ${pizza.name}`} />
      <p>{pizza.desc}</p>
      <h4>Ingredientes:</h4>
      <ul>
        {pizza.ingredients.map((ing, i) => (
          <li key={i}>🧀 {ing}</li>
        ))}
      </ul>
      <p><strong>Precio:</strong> ${pizza.price.toLocaleString('es-CL')}</p>
      <button onClick={() => addToCart(pizza)}>Añadir al carrito 🛒</button>
    </div>
  );
}
