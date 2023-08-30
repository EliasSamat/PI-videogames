const { Router } = require('express');

const games = require("../controllers/videojuegos.js"); 
const {Videogame, Genre} = require("../db.js");
 const genres = require("../controllers/genres.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


router.get("/videogames", async function (req, res) {
    try{
        const response = await games (); 
        res.json(response); 
    }catch(error){
   res.status(500).json({error: "error al obtener datos de la APi"})
    }
}); 
router.get("/videogames/:idVideogame",async function (req, res){
    const idGame = req.params.idVideogame ; 
try{
    const response = await  games(); 
   
    res.json(response[idGame])
}catch{
    res.status(500).json({error: "no se pudo encontrar el juego :("})
}
});

router.get("/", async (req, res) => {
    try{
        const nombrequery = req.query.name 
       const response = await games(); 
       const buscaNombres = response.filter((e)=> 
        e.name.toLowerCase().includes(nombrequery.toLowerCase()))
     if(buscaNombres.length >= 1){    
       res.json(buscaNombres)   
    }else {
        res.json("ups no pudimos encontrarlo")
    }
    }catch(error){
    res.status(505).json({error: "Error fatal"})
    }
}); 

  router.get("/genres", async(req, res) => {
    try{
        const generos = await genres(); 
       res.send(generos); 
    }catch(error){
        res.status(505).send({error:"error en la API"})
    }
  })
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
