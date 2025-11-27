'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comentarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comentarios.init({
    publicacionId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Publicaciones',
        key: 'id'
      }
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Usuarios',
        key: 'id'
      }
    },
    texto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comentarios',
  });
  Comentarios.associate = models => {
    Comentarios.hasOne(models.Publicaciones, 
      { 
        foreignKey: 'publicacionId' 
      });
    Comentarios.hasOne(models.Usuarios,
      {
        foreignKey: 'usuarioId'
      });
  }
  return Comentarios;
};