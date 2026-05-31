const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize');

const Member = sequelize.define('Member', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  memberName: {
    type: DataTypes.STRING(200),
    allowNull: false
  }
});

module.exports = { Member };

