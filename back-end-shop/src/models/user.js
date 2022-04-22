'use strict';
const {
    Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Users.init({
        userName: Sequelize.STRING,
        password: Sequelize.STRING,
        email: Sequelize.STRING,
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        phone: Sequelize.STRING,
        role: Sequelize.STRING,
        gender: Sequelize.STRING
    }, {
        sequelize,
        modelName: 'Users',
    });
    return Users;
};