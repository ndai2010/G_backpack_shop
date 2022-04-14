'use strict';
const {
    Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
    class Product_category extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Product_category.init({
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
    }, {
        sequelize,
        modelName: 'Product_categorys',
    });
    return Product_category;
};