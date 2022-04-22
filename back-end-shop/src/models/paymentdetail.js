'use strict';
const {
    Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
    class Payment_Details extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Payment_Details.init({
        orderID: Sequelize.INTEGER,
        amount: Sequelize.INTEGER,
        provider: Sequelize.STRING,
        status: Sequelize.STRING
    }, {
        sequelize,
        modelName: 'Payment_Details',
    });
    return Payment_Details;
};