"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ClimbingSessions extends Model {
    static associate(models) {
      ClimbingSessions.belongsTo(models.ClimbingTypes, {
        foreignKey: 'type_id',
      });
    }
  }
  ClimbingSessions.init(
    {
      session_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      session_date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      location: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      grade: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      duration: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      type_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "ClimbingTypes",
          key: "type_id",
        },
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "user_id",
        },
      },
    },
    {
      sequelize,
      modelName: "ClimbingSessions",
    }
  );
  return ClimbingSessions;
};
