const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('episode', {
        
    TVshow: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    fromSeason: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    length:{
      type:DataTypes.INTEGER,
			defaultValue:0
    }
    
    
  });
};
