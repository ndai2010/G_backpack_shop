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
        userID: DataTypes.INTEGER,
        payment_type: DataTypes.STRING,
        provider: DataTypes.STRING,
        account: DataTypes.INTEGER,
        expiry: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'User_payments',
    });
    return User_payments;
};