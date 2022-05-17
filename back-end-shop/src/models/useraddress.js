'use strict';
const {
    Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
    class User_Address extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User_Address.init({
        userID: DataTypes.INTEGER,
        address_line1: DataTypes.STRING,
        address_line2: DataTypes.STRING,
        city: DataTypes.STRING,
        country: DataTypes.STRING,
        phone: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User_Address',
    });
    return User_Address;
};