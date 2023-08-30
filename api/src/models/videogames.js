const {DataTypes} =require("sequelize")

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('videogames', {
        id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
     name: {
        type: DataTypes.STRING , 
        allowNull: false , 
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false 
      },  
      plataformas: {
        type: DataTypes.DATE,
        allowNull: false 
      },
       imagen: {
        type: DataTypes.STRING,
        allowNull: false 
      },
        fecha_de_lanzamiento: {
        type: DataTypes.STRING,
        allowNull: false 
      },
       rating: {
        type: DataTypes.STRING,
        allowNull: false 
      },
    });
  };


 