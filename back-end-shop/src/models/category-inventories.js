'use strict';
const {
    Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
    class Category_Inventories extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Category_Inventories.init({
        quantity: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Category_Inventories',
    });
    return Category_Inventories;
};