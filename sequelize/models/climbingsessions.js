'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClimbingSessions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ClimbingSessions.init(
    {
      session_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      session_date: {
        allowNull: false,
        type: DataTypes.DATE
      },
      duration: {
        allowNull: false,
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      type_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'ClimbingTypes',
          key: 'type_id'
        }
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'user_id'
        }
      }
    },
    {
      sequelize,
      modelName: 'ClimbingSessions'
    });
  return ClimbingSessions;
};