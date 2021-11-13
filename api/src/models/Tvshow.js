const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('tvshow', {
    
    
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country:{
      type: DataTypes.STRING,
    },
    genre: {
      type: DataTypes.ENUM('drama','action', 'science fiction', 'horror','comedy','fantasy','romance', 'thriller'),
    },
    language: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT
    }
    
  });
};
