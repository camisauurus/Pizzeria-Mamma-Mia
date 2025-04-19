export default function CardPizza({img, pizzaName, price, ingredients}) {
    const [ingredient1, ingredient2, ingredient3, ingredient4] = ingredients;
  return (
    <div className="card-pizza">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h2>Pizza {pizzaName}</h2>
      </div>
      <hr />
      <div>
        <h3>Ingredientes:</h3>
        <p>🍕 {ingredient1}, {ingredient2}, {ingredient3}, {ingredient4}</p>
      </div>
      <hr />
      <div>
        <p>Precio: ${price}</p>
      </div>
      <div>
        <button>Ver más 👀</button>
        <button>Añadir 🛒</button>
      </div>
    </div>
  )
}
