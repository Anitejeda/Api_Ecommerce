const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ProductsImg = sequelize.define('productsImg', {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publicId: {
        type: DataTypes.STRING,
        allowNull: false
    },

});

module.exports = ProductsImg;