const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Purchases = sequelize.define('purchase', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

module.exports = Purchases;