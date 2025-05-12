import { useEffect, useState } from "react";

export default function Pizza() {
  const [pizza, setPizza] = useState(null);
  const id = "p001";

  useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al obtener la pizza:", error);
      }
    };

    getPizza();
  }, []);

  if (!pizza) return <p>Cargando pizza...</p>;

  const { name, price, ingredients, img, desc } = pizza;

  return (
    <div className="pizza-details">
      <img src={img} alt={`Pizza ${name}`} />
      <h2>Pizza {name}</h2>
      <p><strong>Descripción:</strong> {desc}</p>
      <h3>Ingredientes:</h3>
      <ul>
        {ingredients.map((ing, i) => (
          <li key={i}>🍕 {ing}</li>
        ))}
      </ul>
      <p><strong>Precio:</strong> ${price.toLocaleString("es-CL")}</p>
      <button>Añadir al carrito 🛒</button>
    </div>
  );
}
