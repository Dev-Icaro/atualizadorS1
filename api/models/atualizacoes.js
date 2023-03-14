'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class atualizacoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  atualizacoes.init({
    cnpj: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'atualizacoes',
  });
  return atualizacoes;
};