'use strict';
const {
    Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
    class category_inventory extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    category_inventory.init({
        quantity: Sequelize.INTEGER,
    }, {
        sequelize,
        modelName: 'category_inventories',
    });
    return category_inventory;
};