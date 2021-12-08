"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tasks.init(
    {
      taskName: DataTypes.STRING,
      category: DataTypes.STRING,
      description: DataTypes.STRING,
      assignedContractor: DataTypes.STRING,
      scheduled: DataTypes.BOOLEAN,
      date: DataTypes.DATE,
      maxBudget: DataTypes.INTEGER,
      userName: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Tasks",
    }
  );
  return Tasks;
};
