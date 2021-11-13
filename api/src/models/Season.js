const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('season', {
        
    TVshow: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    numberOfEpisodes: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    
  });
};
