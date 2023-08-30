const { Videogames } = require("../db");
const gamesdetails = require("./videojuegos");
async function guardarEnBD() {
    try {
        const juegos = await gamesdetails();
        const transaction = await Videogames.sequelize.transaction();

                const instajuego = new Videogames(juegos[1]);
                
                await instajuego.create({ transaction });
            
            await transaction.commit();
            console.log("Datos guardados correctamente");
       
    } catch (error) {
        console.error('Error al guardar datos en la base de datos:', error.message);
    }
} 
guardarEnBD();
