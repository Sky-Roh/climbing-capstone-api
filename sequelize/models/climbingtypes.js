'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClimbingTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ClimbingTypes.init({
    type_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    type_name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    hold_type: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: 'ClimbingTypes'
  }
);
  return ClimbingTypes;
};