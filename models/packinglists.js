'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PackingLists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PackingLists.init(
    {
      packing_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      packing_item: {
        allowNull: false,
        type: DataTypes.STRING
      },
      important_level: {
        type: DataTypes.INTEGER
      },
      check: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false 
      },
      climbingtype_name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'PackingLists'
    }
  );
  return PackingLists;
};