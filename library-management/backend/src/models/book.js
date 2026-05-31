const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize');

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(250),
    allowNull: false
  },
  author: {
    type: DataTypes.STRING(200),
    allowNull: false
  }
});

module.exports = { Book };

