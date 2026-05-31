const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize');

const Issuance = sequelize.define('Issuance', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  issuedDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  targetReturnDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      notBeforeIssuedDate(value) {
        const issued = this.issuedDate;
        if (!issued) return;
        if (value < issued) {
          throw new Error('targetReturnDate must be >= issuedDate');
        }
      }
    }
  }
});

module.exports = { Issuance };

