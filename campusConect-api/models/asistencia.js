'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asistencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Asistencia.init({
    UsuarioId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Usuarios',
        key: 'id'
      }
    },
    EventoId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Eventos',
        key: 'id'
      }
    },
    texto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Asistencia',
  });
  Asistencia.associate = models => {
    Asistencia.belongsTo(models.Usuarios, 
      { 
        foreignKey: 'UsuarioId' 
      });
    Asistencia.belongsTo(models.Eventos,
      {
        foreignKey: 'EventoId'
      });
  }
  return Asistencia;
};