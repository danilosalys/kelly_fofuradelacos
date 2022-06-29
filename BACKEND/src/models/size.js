const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

export const Sizes = db.define(
  "Sizes",
  {
    id_size: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
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
    tableName: "sizes",
  }
);
