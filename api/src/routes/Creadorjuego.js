const express = require('express');
const { Videogame, Genre } = require('../db'); // Asegúrate de importar tus modelos correctamente
const router = express.Router();

// Ruta para crear un nuevo videojuego y relacionarlo con sus géneros
router.post('/create', async (req, res) => {
  try {
    const { name, description, platforms, releaseDate, rating, genres } = req.body;

    // Crear el videojuego en la base de datos
    const newVideogame = await Videogame.create({
      name,
      description,
      platforms,
      releaseDate,
      rating,
    });

    // Buscar los géneros por nombre y relacionarlos con el videojuego
    const genresFound = await Genre.findAll({
      where: {
        name: genres, // Debes recibir los nombres de los géneros en un arreglo en el body
      },
    });

    // Relacionar los géneros encontrados con el videojuego
    await newVideogame.setGenres(genresFound);

    res.status(201).json({ message: 'Videojuego creado exitosamente', newVideogame });
  } catch (error) {
    console.error('Error al crear el videojuego:', error);
    res.status(500).json({ error: 'Error al crear el videojuego' });
  }
});

module.exports = router;
