const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

export const Materials = db.define(
  "Materials",
  {
    id_material: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },
  {
    tableName: "materials",
  }
);
