'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publicaciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Publicaciones.init({
    //añadir el id del usuario
    usuarioId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Usuarios',
        key: 'id'
      }
    },
    titulo: DataTypes.STRING,
    contenido: DataTypes.STRING,
    categoria: DataTypes.STRING,
    fecha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Publicaciones',
  });
  publicaciones.associate = models => {
    publicaciones.belongsTo(models.Usuarios, 
      { 
        foreignKey: 'usuarioId' 
      });
  }
  return Publicaciones;
};