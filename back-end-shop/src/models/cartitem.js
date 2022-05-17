'use strict';
const {
    Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
    class cart_Items extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    cart_Items.init({
        sessionID: DataTypes.INTEGER,
        productID: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'cart_Items',
    });
    return cart_Items;
};