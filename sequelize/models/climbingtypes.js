"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ClimbingTypes extends Model {
    static associate(models) {
      ClimbingTypes.hasMany(models.ClimbingSessions, {
        foreignKey: "type_id",
      });
    }
  }
  ClimbingTypes.init(
    {
      type_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      type_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "ClimbingTypes",
    }
  );
  return ClimbingTypes;
};
