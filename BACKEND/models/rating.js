'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rating.init({
    id_rating: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    evaluation_grade: DataTypes.INTEGER,
    author: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'rating',
  });
  return rating;
};