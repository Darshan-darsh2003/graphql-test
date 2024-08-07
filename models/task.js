// models/task.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Ensure the path is correct

const Task = sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Task;
