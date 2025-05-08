import Header from './Header';
import { pizzas } from '../pizzas.js';
import CardPizza from './CardPizza';

function Home() {
  
  return (
    <div className="home">
      {pizzas.map((pizza) => (
        <CardPizza key={pizza.id} pizza={pizza} />
      ))}
      <Header/>
    </div>
  )
}

export default Home