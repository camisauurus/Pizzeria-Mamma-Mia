import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CardPizza({ pizza }) {
  const { img, name, price, ingredients } = pizza;
  const { addToCart } = useContext(CartContext); // ✅ importar la función

  return (
    <div className="card-pizza">
      <img src={img} alt={`Pizza ${name}`} />
      <h2>Pizza {name}</h2>
      <h3>Ingredientes:</h3>
      <ul>
        {ingredients.map((ing, i) => (
          <li key={i}>🍕 {ing}</li>
        ))}
      </ul>
      <p><strong>Precio:</strong> ${price.toLocaleString('es-CL')}</p>
      <Link to={`/pizza/${pizza.id}`}>
      <button>Ver más 👀</button>
      </Link>
      <button onClick={() => addToCart(pizza)}>Añadir 🛒</button> {/* ✅ importante */}
    </div>
  );
}