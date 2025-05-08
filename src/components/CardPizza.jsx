export default function CardPizza({ pizza }) {
  const { img, name, price, ingredients } = pizza;
  return (
    <div className="card-pizza">
      <div>
      <img src={img} alt={`Pizza ${name}`} />
      </div>
      <div>
        <h2>Pizza {name}</h2>
      </div>
      <hr />
      <div>
      <h3>Ingredientes:</h3>
      <ul>
        {ingredients.map((ing, i) => (
          <li key={i}>🍕 {ing}</li>
        ))}
      </ul>
      </div>
      <hr />
      <div>
      <p><strong>Precio:</strong> ${price.toLocaleString('es-CL')}</p>
      </div>
      <div>
        <button>Ver más 👀</button>
        <button>Añadir 🛒</button>
      </div>
    </div>
  )
}