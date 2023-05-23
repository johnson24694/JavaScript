import './App.css';
import React, { useEffect, useState } from 'react';


function App() {

  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {

        return response.json()
      })
      .then(response => {
        setPokemonList(response.results)
      })
      .catch((err) => {
        console.log(err);
      })
      
  }, []);
  
  
  return (
    <div className="App" style={{width: "200px", margin: "auto"}}>

      <button>Fetch Pokemon</button>

      <ul>
        {
          pokemonList.map((pokemon, index) => {
            return (
              <li key={index}>{pokemon.name}</li>
            )
          })
        }
      </ul>
      
              
      
    </div>
  );
}

export default App;
