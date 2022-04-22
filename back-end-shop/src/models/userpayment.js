'use strict';
const {
    Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
    class User_payments extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User_payments.init({
        userID: Sequelize.INTEGER,
        payment_type: Sequelize.STRING,
        provider: Sequelize.STRING,
        account: Sequelize.INTEGER,
        expiry: Sequelize.DATE
    }, {
        sequelize,
        modelName: 'User_payments',
    });
    return User_payments;
};