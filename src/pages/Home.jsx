import Header from '../components/Header';
// import { pizzas } from '../pizzas.js';
import CardPizza from '../components/CardPizza';
import { useEffect, useState } from 'react';
import { useContext } from "react";
import { PizzasContext } from "../context/PizzasContext";

function Home() {
  const { pizzas, loading, error } = useContext(PizzasContext);

  if (loading) return <p>Cargando pizzas...</p>;
  if (error) return <p>Error: {error}</p>;

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