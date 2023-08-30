
const axios = require('axios');

const apiKey = '0202da6350cf46a394852eece23ba741';

const apiUrl = 'https://api.rawg.io/api/games';

// Parámetros opcionales para filtrar los resultados (por ejemplo, limitar a 100 resultados)
const params = {
  key: apiKey,
  page: 1, // Página de resultados
  page_size: 100 ,// Cantidad de resultados por página

};
async function gamesdetails (){
// Realizar la solicitud GET a la API de RAWG
     const response = await axios.get(apiUrl, { params })

    const games = response.data.results;
    const detailgames = [];
    for (const iterador of games) {
      const generos = iterador.genres.map(genero => genero.name);
      const plataformas = iterador.platforms.map(plataforma => plataforma.platform.name).join(', '); // Unir las plataformas con coma y espacio
      const generosSeparados = generos.join(', ');
    
      const gamesData = {
        id: iterador.id,
        name: iterador.name ,
        plataformas: plataformas, 
        imagen: iterador.background_image,
        fecha_de_lanzamiento: iterador.released,
        rating: iterador.rating,
        genero: generosSeparados,
      }
      detailgames.push(gamesData);
    }


    return detailgames; 
  }

  module.exports = gamesdetails ;