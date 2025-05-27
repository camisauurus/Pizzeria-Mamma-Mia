import { createContext, useEffect, useState } from "react";

export const PizzasContext = createContext();

export function PizzasProvider({ children }) {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener las pizzas');
        return res.json();
      })
      .then((data) => setPizzas(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <PizzasContext.Provider value={{ pizzas, loading, error }}>
      {children}
    </PizzasContext.Provider>
  );
}
