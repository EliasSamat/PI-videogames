import React, { useState, useEffect } from 'react';
import ("../style/games.css")

function Videojuegos() {
  const [data, setData] = useState([]);
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

  return (
    
    <div className="games-container">
        {data.map(item => (
          
            <div className='game-card'>
              <p>Nombre: {item.name}
              </p>
              <img src={item.imagen} alt={item.name} />
            </div>
          
        ))}
        </div>
      
  );
}


export default Videojuegos ;

