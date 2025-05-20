import Header from '../components/Header';
// import { pizzas } from '../pizzas.js';
import CardPizza from '../components/CardPizza';
import { useEffect, useState } from 'react';

function Home() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then((response) => response.json())
      .then((data) => {
        setPizzas(data)
      })
      .catch((error) => {
        console.error('Error fetching pizzas:', error)
      })
  }, [])
  
  return (
    <div>
      <div className="home">
        <Header/>
      </div>
      <div className="card-container">
      {pizzas.map((pizza) => (
        <CardPizza key={pizza.id} pizza={pizza} />
      ))}
      </div>
    </div>
  )
}

export default Home