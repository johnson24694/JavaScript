import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';



function App() {

  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {setPokemonList(response.data.results)})
      .catch((err) => console.log(err));

      }, []);
      
  
  
  return (
    <div className="App" style={{width: "200px", margin: "auto"}}>

      <button>Fetch Pokemon</button>

      <ul>
        {
          pokemonList.length > 0 && pokemonList.map((pokemon, index) => {
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
