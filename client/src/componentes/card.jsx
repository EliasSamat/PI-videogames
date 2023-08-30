import "../style/games.css"


function Card({ nombre, Descripción,Plataformas, fecha_de_lanzamiento, Rating, imagen}) {
   
     return (
        <div className='games-container'>
         
           <div clasName = "game-card" > 
           <p> nombre:{nombre}</p>
           <p> Descripción:{Descripción}</p>
           <p> Plataformas:{Plataformas}</p>
           <p> Fecha de lanzamiento:{fecha_de_lanzamiento}</p>
           <p> Rating:{Rating}</p>
           <img src={imagen} alt={""}/>
        </div>
           </div>
        
     );
  }
  export default Card ;  


//   <div className='game-card'>
//   <p>Nombre: {item.name}
//   </p>
//   <img src={item.imagen} alt={item.name} />
// </div>
