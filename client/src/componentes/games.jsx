import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import ("../style/games.css")

function Videojuegos() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/videogames')
      .then(response => response.json())
      .then(dataFromServer => {
        setData(dataFromServer);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const results = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, data]);

  const handleSearchInputChange = event => {
    setSearchTerm(event.target.value);
  };

 

  return (
    <div>
   
      <input
        className="barra"
        type="text"
        placeholder="ingresa el nombre"
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
      <button className="botonn">🔎</button>
      <ul>
    <div className="games-container">
        {searchResults.map(item => (
          
            <div className='game-card' key={item.id}>
              <p>Nombre: {item.name}
              </p>
              <p>Genero: {item.genero}</p>
              <Link to={`game/${item.id}`}>
              <img src={item.imagen} alt={item.name} />
              </Link>

            </div>
          
        ))}
        </div>
      </ul>
    </div>
  );
}


export default Videojuegos ;

