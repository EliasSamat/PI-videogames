import React, { useState, useEffect } from 'react';

export default function GameDetails() {
  const id  = 3498 ; 
  const [data, setData] = useState([]);
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
    const results = data.filter(juegos =>
      juegos.id === id
    );
    setSearchResults(results);
  }, [id, data]);

  
  return (
    <div>
      <h1>Detalles del juego</h1>
      {searchResults.map(num => (
          
        <div className='game-card'>
          <p>Nombre: {num.name}</p>
          <p>Genero: {num.genero}</p>
          <p>Descripción: {num.descripcion}</p>
          <p>plataformas: {num.plataformas}</p>
          <p>Fecha de lanzamiento: {num.fecha_de_lanzamiento}</p>
          <p>Rating: {num.rating}</p>
          <p>Géneros: {num.genero}</p>
       
        </div>
))}
</div>
  );
}

