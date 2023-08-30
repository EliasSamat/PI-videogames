import { useState } from "react";

export default function serchBar (props){
   
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

const dataJuegos = searchResults.map(item => (
          
      Nombre = item.name,
      
      imagen= item.imagen
    
  
))


return( 
    <div>
   
    <input
      className="barra"
      type="text"
      placeholder="ingresa el nombre"
      value={searchTerm}
      onChange={handleSearchInputChange}
    />
    <button className="botonn">🔎</button>
    </div>
);}