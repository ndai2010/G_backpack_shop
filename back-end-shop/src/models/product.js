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
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        SKU: DataTypes.STRING,
        categoryID: DataTypes.INTEGER,
        inventoryID: DataTypes.INTEGER,
        discountID: DataTypes.INTEGER,
        price: DataTypes.DECIMAL,
    }, {
        sequelize,
        modelName: 'Products',
    });
    return Products;
};