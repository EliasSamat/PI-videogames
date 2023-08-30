const axios = require("axios"); 

const apiKey = '0202da6350cf46a394852eece23ba741';
const apiUrl = "https://api.rawg.io/api/genres" ; 

const params = {
    key: apiKey ,
    // page: 100, // Página de resultados
    // page_size: 100
}

async function  DataGenres () {
const response = await axios.get(apiUrl, {params}); 
const genres = response.data.results ; 
const generos = [];

for (const iterator of genres) {
    const Datageneros = {
             ID: iterator.id ,
             name: iterator.name, 
             nombre: iterator.games 
    }
    generos.push(Datageneros)
}
return generos ; 
}; 

module.exports = DataGenres ; 