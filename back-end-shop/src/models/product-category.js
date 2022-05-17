'use strict';
const {
    Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
    class Product_categories extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Product_categories.init({
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
    }, {
        sequelize,
        modelName: 'Product_categories',
    });
    return Product_categories;
};