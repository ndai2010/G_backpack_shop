'use strict';
const {
    Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
    class Products extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Products.init({
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
        SKU: Sequelize.STRING,
        categoryID: Sequelize.INTEGER,
        inventoryID: Sequelize.INTEGER,
        discountID: Sequelize.INTEGER,
        price: Sequelize.DECIMAL,
    }, {
        sequelize,
        modelName: 'Products',
    });
    return Products;
};