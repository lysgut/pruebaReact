
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import './App.css'; // Asegúrate de importar el archivo CSS

const App = () => {
  const [count, setCount] = useState(0);
  const [cardsData, setCardsData] = useState([]);

  const increment = () => setCount(prevCount => Math.min(prevCount + 1, 100));
  const decrement = () => setCount(prevCount => Math.max(prevCount - 1, 0));

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(data => {
        setCardsData(data.slice(0, count));
      })
      .catch(error => {
        console.error('error al cargar', error);
      });
  }, [count]);

  return (
    <div className="App">
      <Navbar count={count} increment={increment} decrement={decrement} />
      <div className="cards-container">
        {cardsData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default App;
