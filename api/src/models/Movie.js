const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('movie', {
    
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    released_date: {
      type: DataTypes.DATE,
    },
    language: {
      type: DataTypes.STRING,
    },
    country: {
      // type: DataTypes.REAL,
      type: DataTypes.STRING
    },
    // genre: {
    //   type: DataTypes.ENUM('drama','action', 'science fiction', 'horror','comedy','fantasy','romance', 'thriller'),
    // },
    genre: {
      type: DataTypes.TEXT
    },
    description: {
      type: DataTypes.TEXT
    }
    
  });
};
